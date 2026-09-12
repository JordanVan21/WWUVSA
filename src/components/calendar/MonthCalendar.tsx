import { useMemo } from "react";
import {
  formatEventTime,
  getMonthEvents,
  isPastEvent,
  todayInZone,
  zonedDateKey,
  zonedToUtc,
  type CalendarEvent,
} from "@/lib/calendar";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CATEGORY_DOT: Record<string, string> = {
  "General Meeting": "bg-vietnamese-red",
  Practice: "bg-viking-blue",
  Performance: "bg-[color:var(--color-imperial-gold)]",
};

function dotClass(category: string): string {
  return CATEGORY_DOT[category] ?? "bg-viking-blue";
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function MonthCalendar({
  year,
  month,
  onSelect,
}: {
  year: number;
  month: number;
  onSelect: (event: CalendarEvent) => void;
}) {
  const events = useMemo(() => getMonthEvents(year, month), [year, month]);
  const today = todayInZone();

  const byDay = useMemo(() => {
    const map = new Map<string, CalendarEvent[]>();
    for (const event of events) {
      const key = zonedDateKey(zonedToUtc(event.start));
      map.set(key, [...(map.get(key) ?? []), event]);
    }
    return map;
  }, [events]);

  const firstWeekday = new Date(Date.UTC(year, month, 1)).getUTCDay();
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  const cells: (number | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <>
      {/* Month grid: tablet and up */}
      <div className="hidden overflow-hidden rounded-2xl border border-[color:var(--color-outline-variant)] bg-white shadow-sm sm:block">
        <div
          className="grid grid-cols-7 border-b border-[color:var(--color-outline-variant)] bg-surface-container text-xs font-bold uppercase text-on-surface-variant"
          role="presentation"
        >
          {WEEKDAYS.map((d) => (
            <div key={d} className="p-3 text-center">
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {cells.map((day, i) => {
            if (day === null) {
              return (
                <div
                  key={`empty-${i}`}
                  className="min-h-[96px] border-b border-r border-[color:var(--color-outline-variant)] bg-surface-variant/20"
                />
              );
            }
            const key = `${year}-${pad(month + 1)}-${pad(day)}`;
            const dayEvents = byDay.get(key) ?? [];
            const isToday = key === today.key;
            return (
              <div
                key={key}
                className="min-h-[96px] border-b border-r border-[color:var(--color-outline-variant)] p-2 text-sm"
              >
                <span
                  className={`inline-grid h-7 w-7 place-items-center rounded-full font-semibold ${
                    isToday
                      ? "bg-vietnamese-red/10 text-vietnamese-red ring-1 ring-vietnamese-red"
                      : "text-ink-black"
                  }`}
                >
                  {day}
                  {isToday && <span className="sr-only">Today</span>}
                </span>
                <div className="mt-1 space-y-1">
                  {dayEvents.map((event) => (
                    <button
                      key={event.id}
                      type="button"
                      onClick={() => onSelect(event)}
                      className={`flex w-full items-center gap-1 rounded px-1 py-0.5 text-left text-[11px] font-semibold transition hover:bg-surface-container focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vietnamese-red ${
                        isPastEvent(event) ? "text-on-surface-variant/60" : "text-ink-black"
                      }`}
                    >
                      <span
                        className={`h-2 w-2 shrink-0 rounded-full ${dotClass(event.category)}`}
                        aria-hidden="true"
                      />
                      <span className="truncate">{event.title}</span>
                      <span className="sr-only">
                        , {event.category}, {formatEventTime(event)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Chronological list: small phones */}
      <div className="space-y-3 sm:hidden">
        {events.length === 0 && (
          <p className="rounded-xl border border-[color:var(--color-outline-variant)] bg-white p-4 text-sm text-on-surface-variant">
            No public events scheduled this month.
          </p>
        )}
        {events.map((event) => {
          const date = zonedToUtc(event.start);
          const key = zonedDateKey(date);
          return (
            <button
              key={event.id}
              type="button"
              onClick={() => onSelect(event)}
              className={`flex w-full items-center gap-4 rounded-xl border bg-white p-4 text-left transition hover:bg-surface-container-low focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vietnamese-red ${
                key === today.key
                  ? "border-vietnamese-red"
                  : "border-[color:var(--color-outline-variant)]"
              } ${isPastEvent(event) ? "opacity-60" : ""}`}
            >
              <div className="w-12 shrink-0 text-center">
                <div className="text-xs font-semibold uppercase text-vietnamese-red">
                  {new Intl.DateTimeFormat("en-US", {
                    timeZone: "America/Los_Angeles",
                    weekday: "short",
                  }).format(date)}
                </div>
                <div className="font-display text-2xl text-ink-black">{Number(key.slice(8))}</div>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2 w-2 shrink-0 rounded-full ${dotClass(event.category)}`}
                    aria-hidden="true"
                  />
                  <span className="truncate font-semibold text-ink-black">{event.title}</span>
                </div>
                <div className="text-sm text-on-surface-variant">
                  {formatEventTime(event)}
                  {event.location ? ` · ${event.location}` : ""}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}
