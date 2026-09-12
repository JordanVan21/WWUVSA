/**
 * WWU VSA public calendar: single source of truth.
 *
 * FOR FUTURE BOARD MEMBERS
 * ------------------------
 * Everything the website calendar shows, every "Add to Calendar" button, and
 * every subscription feed is generated from the data in THIS FILE.
 *
 * To add an event, add one entry to `ONE_TIME_EVENTS` (a single date) or to
 * `RECURRING_SERIES` (something that repeats). Set `isPublic: false` for board
 * or internal items so they never reach the public calendar or any feed.
 *
 * Times are written in Bellingham local time (America/Los_Angeles) as
 * "YYYY-MM-DDTHH:MM". Daylight saving is handled automatically.
 */

export type CalendarGroupId =
  | "general-meetings"
  | "wavy-fan-dance"
  | "turkey-bowl"
  | "acce"
  | "cultural-events";

export type CalendarGroup = {
  id: CalendarGroupId;
  name: string;
  description: string;
  /** Public ICS feed URL. Leave undefined until a real feed exists. */
  subscriptionUrl?: string;
};

export type CalendarEvent = {
  id: string;
  title: string;
  description?: string;
  /** Local start, "YYYY-MM-DDTHH:MM" */
  start: string;
  /** Local end, "YYYY-MM-DDTHH:MM" */
  end?: string;
  location?: string;
  category: string;
  groupIds?: CalendarGroupId[];
  /** Slug of an /events/$slug page, when one exists. */
  eventSlug?: string;
  /** Slug of a /programs/$slug page, when one exists. */
  programSlug?: string;
  isPublic: boolean;
};

/** Subscription groups. Add a new group here and tag events with its id. */
export const CALENDAR_GROUPS: CalendarGroup[] = [
  {
    id: "general-meetings",
    name: "General Meetings",
    description: "Bi-weekly general body meetings in the Viking Union.",
  },
  {
    id: "wavy-fan-dance",
    name: "Wavy Fan Dance",
    description: "Practices, rehearsals, and performances.",
  },
  {
    id: "turkey-bowl",
    name: "Turkey Bowl",
    description: "Practices, the tournament, and related activities.",
  },
  {
    id: "acce",
    name: "ACCE",
    description: "Family gatherings and ACCE program activities.",
  },
  {
    id: "cultural-events",
    name: "Major Cultural Events",
    description: "Heritage Night, Tết, and other cultural celebrations.",
  },
];

/**
 * Full public calendar feed. Add the published ICS URL here once WWU VSA has
 * one; until then the website shows the option as not yet available.
 */
export const FULL_CALENDAR_FEED: string | undefined = undefined;

export function getGroup(id: CalendarGroupId): CalendarGroup | undefined {
  return CALENDAR_GROUPS.find((g) => g.id === id);
}

/** One-off events. Board members: add real dated events here. */
export const ONE_TIME_EVENTS: CalendarEvent[] = [];

export type RecurringSeries = Omit<CalendarEvent, "id" | "start" | "end"> & {
  id: string;
  /** 0 = Sunday ... 6 = Saturday */
  weekday: number;
  /** "weekly" or "biweekly" */
  frequency: "weekly" | "biweekly";
  /** Local start time "HH:MM" */
  startTime: string;
  /** Local end time "HH:MM" */
  endTime?: string;
  /** First date the series can occur, "YYYY-MM-DD". Anchors biweekly spacing. */
  seriesStart: string;
  /** Optional last date, "YYYY-MM-DD". */
  seriesEnd?: string;
};

/** Repeating events. */
export const RECURRING_SERIES: RecurringSeries[] = [
  {
    id: "gbm",
    title: "General Body Meeting",
    description:
      "Community updates, cultural workshops, and snacks. Everyone is welcome, no membership required.",
    location: "Viking Union (VU) 552, Western Washington University",
    category: "General Meeting",
    groupIds: ["general-meetings"],
    isPublic: true,
    weekday: 2,
    frequency: "biweekly",
    startTime: "18:00",
    endTime: "19:00",
    seriesStart: "2026-09-29",
  },
];
