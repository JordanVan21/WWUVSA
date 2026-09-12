/**
 * Calendar helpers: timezone-safe date math, event expansion, and
 * standards-compliant ICS / Google Calendar link generation.
 */
import {
  CALENDAR_GROUPS,
  FULL_CALENDAR_FEED,
  ONE_TIME_EVENTS,
  RECURRING_SERIES,
  type CalendarEvent,
  type CalendarGroup,
  type CalendarGroupId,
} from "@/lib/calendar-data";

export type { CalendarEvent, CalendarGroup, CalendarGroupId };
export { CALENDAR_GROUPS, FULL_CALENDAR_FEED };

export const TIME_ZONE = "America/Los_Angeles";

/** Offset (minutes) of the WWU timezone at a given instant. DST-safe. */
function tzOffsetMinutes(instant: Date): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).formatToParts(instant);
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value ?? "0");
  const asUtc = Date.UTC(
    get("year"),
    get("month") - 1,
    get("day"),
    get("hour") % 24,
    get("minute"),
    get("second"),
  );
  return (asUtc - instant.getTime()) / 60000;
}

/** Convert a Bellingham wall-clock string ("2026-09-29T18:00") to a real instant. */
export function zonedToUtc(local: string): Date {
  const [datePart, timePart = "00:00"] = local.split("T");
  const [y, m, d] = datePart.split("-").map(Number);
  const [hh, mm] = timePart.split(":").map(Number);
  const guess = Date.UTC(y, m - 1, d, hh, mm);
  let offset = tzOffsetMinutes(new Date(guess));
  offset = tzOffsetMinutes(new Date(guess - offset * 60000));
  return new Date(guess - offset * 60000);
}

/** "YYYY-MM-DD" for an instant, in the WWU timezone. */
export function zonedDateKey(instant: Date): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(instant);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  return `${get("year")}-${get("month")}-${get("day")}`;
}

/** Today's date in the WWU timezone as { year, month (0-based), day }. */
export function todayInZone(): { year: number; month: number; day: number; key: string } {
  const key = zonedDateKey(new Date());
  const [y, m, d] = key.split("-").map(Number);
  return { year: y, month: m - 1, day: d, key };
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

function addDaysKey(key: string, days: number): string {
  const [y, m, d] = key.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d + days));
  return `${dt.getUTCFullYear()}-${pad(dt.getUTCMonth() + 1)}-${pad(dt.getUTCDate())}`;
}

function weekdayOfKey(key: string): number {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).getUTCDay();
}

function daysBetween(a: string, b: string): number {
  const [ay, am, ad] = a.split("-").map(Number);
  const [by, bm, bd] = b.split("-").map(Number);
  return Math.round((Date.UTC(by, bm - 1, bd) - Date.UTC(ay, am - 1, ad)) / 86400000);
}

/**
 * All public events between two date keys (inclusive), one-off plus expanded
 * recurring occurrences. Private/internal events are never returned.
 */
export function getEventsInRange(startKey: string, endKey: string): CalendarEvent[] {
  const events: CalendarEvent[] = ONE_TIME_EVENTS.filter(
    (e) => e.isPublic && e.start.slice(0, 10) >= startKey && e.start.slice(0, 10) <= endKey,
  );

  for (const series of RECURRING_SERIES) {
    if (!series.isPublic) continue;
    let cursor = startKey > series.seriesStart ? startKey : series.seriesStart;
    // advance to the first matching weekday
    while (weekdayOfKey(cursor) !== series.weekday) cursor = addDaysKey(cursor, 1);
    const step = series.frequency === "biweekly" ? 14 : 7;
    if (series.frequency === "biweekly") {
      // keep the biweekly rhythm anchored to seriesStart
      let anchor = series.seriesStart;
      while (weekdayOfKey(anchor) !== series.weekday) anchor = addDaysKey(anchor, 1);
      const drift = daysBetween(anchor, cursor) % 14;
      if (drift !== 0) cursor = addDaysKey(cursor, 14 - drift);
    }
    while (cursor <= endKey) {
      if (series.seriesEnd && cursor > series.seriesEnd) break;
      const { weekday, frequency, startTime, endTime, seriesStart, seriesEnd, ...rest } = series;
      void weekday;
      void frequency;
      void seriesStart;
      void seriesEnd;
      events.push({
        ...rest,
        id: `${series.id}-${cursor}`,
        start: `${cursor}T${startTime}`,
        ...(endTime ? { end: `${cursor}T${endTime}` } : {}),
      });
      cursor = addDaysKey(cursor, step);
    }
  }

  return events.sort((a, b) => a.start.localeCompare(b.start));
}

/** Public events for a given month (0-based month). */
export function getMonthEvents(year: number, month: number): CalendarEvent[] {
  const first = `${year}-${pad(month + 1)}-01`;
  const lastDay = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  const last = `${year}-${pad(month + 1)}-${pad(lastDay)}`;
  return getEventsInRange(first, last);
}

/* ---------------------------------- ICS ---------------------------------- */

function icsStamp(date: Date): string {
  return `${date.getUTCFullYear()}${pad(date.getUTCMonth() + 1)}${pad(date.getUTCDate())}T${pad(
    date.getUTCHours(),
  )}${pad(date.getUTCMinutes())}00Z`;
}

function escapeIcs(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}

export function eventEnd(event: CalendarEvent): Date {
  if (event.end) return zonedToUtc(event.end);
  return new Date(zonedToUtc(event.start).getTime() + 60 * 60000);
}

export function buildIcs(events: CalendarEvent[]): string {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//WWU VSA//Public Calendar//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
  ];
  for (const event of events) {
    lines.push(
      "BEGIN:VEVENT",
      `UID:${event.id}@wwuvsa`,
      `DTSTAMP:${icsStamp(new Date())}`,
      `DTSTART:${icsStamp(zonedToUtc(event.start))}`,
      `DTEND:${icsStamp(eventEnd(event))}`,
      `SUMMARY:${escapeIcs(event.title)}`,
    );
    if (event.description) lines.push(`DESCRIPTION:${escapeIcs(event.description)}`);
    if (event.location) lines.push(`LOCATION:${escapeIcs(event.location)}`);
    lines.push("END:VEVENT");
  }
  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}

export function googleCalendarUrl(event: CalendarEvent): string {
  const dates = `${icsStamp(zonedToUtc(event.start))}/${icsStamp(eventEnd(event))}`;
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates,
    ctz: TIME_ZONE,
  });
  if (event.description) params.set("details", event.description);
  if (event.location) params.set("location", event.location);
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function downloadIcs(event: CalendarEvent): void {
  const blob = new Blob([buildIcs([event])], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${event.id}.ics`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

/* ------------------------------- formatting ------------------------------ */

export function formatEventDate(event: CalendarEvent): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(zonedToUtc(event.start));
}

export function formatEventTime(event: CalendarEvent): string {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    hour: "numeric",
    minute: "2-digit",
  });
  const start = fmt.format(zonedToUtc(event.start));
  if (!event.end) return start;
  return `${start} to ${fmt.format(zonedToUtc(event.end))}`;
}

export function isPastEvent(event: CalendarEvent): boolean {
  return eventEnd(event).getTime() < Date.now();
}
