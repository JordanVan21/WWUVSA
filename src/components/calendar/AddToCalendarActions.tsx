import { downloadIcs, googleCalendarUrl, isPastEvent, type CalendarEvent } from "@/lib/calendar";

const btn =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-[color:var(--color-outline-variant)] bg-white px-4 py-2 text-sm font-semibold text-ink-black transition hover:bg-surface-container-low focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vietnamese-red";

/**
 * Level 1 (Solo): adds only this event to a personal calendar.
 */
export function AddToCalendarActions({
  event,
  compact = false,
}: {
  event: CalendarEvent;
  compact?: boolean;
}) {
  if (isPastEvent(event)) {
    return (
      <p className="text-sm text-on-surface-variant">
        This event has already happened, so it can no longer be added to a calendar.
      </p>
    );
  }

  return (
    <div>
      {!compact && (
        <>
          <h3 className="font-display text-lg text-ink-black">Add just this event</h3>
          <p className="mt-1 text-sm text-on-surface-variant">
            Only interested in this event? Add it directly to your personal calendar without
            subscribing to the rest of the WWU VSA schedule.
          </p>
        </>
      )}
      <div className="mt-3 flex flex-wrap gap-2">
        <a className={btn} href={googleCalendarUrl(event)} target="_blank" rel="noreferrer">
          <span className="material-symbols-outlined text-base" aria-hidden="true">
            event
          </span>
          Google Calendar
        </a>
        <button type="button" className={btn} onClick={() => downloadIcs(event)}>
          <span className="material-symbols-outlined text-base" aria-hidden="true">
            download
          </span>
          Apple Calendar (.ics)
        </button>
        <button type="button" className={btn} onClick={() => downloadIcs(event)}>
          <span className="material-symbols-outlined text-base" aria-hidden="true">
            download
          </span>
          Outlook (.ics)
        </button>
      </div>
      <p className="mt-2 text-xs text-on-surface-variant/80">
        Individual events may not automatically update if event details change.
      </p>
    </div>
  );
}
