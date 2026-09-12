import { Link } from "@tanstack/react-router";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AddToCalendarActions } from "@/components/calendar/AddToCalendarActions";
import {
  formatEventDate,
  formatEventTime,
  getGroupsFor,
  type CalendarEvent,
} from "@/lib/calendar";

export function EventDialog({
  event,
  onClose,
}: {
  event: CalendarEvent | null;
  onClose: () => void;
}) {
  const groups = event ? getGroupsFor(event) : [];

  return (
    <Dialog open={Boolean(event)} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[85vh] w-[calc(100vw-2rem)] max-w-lg overflow-y-auto rounded-2xl">
        {event && (
          <>
            <DialogHeader>
              <span className="w-fit rounded-full bg-vietnamese-red/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-vietnamese-red">
                {event.category}
              </span>
              <DialogTitle className="font-display text-2xl text-ink-black">
                {event.title}
              </DialogTitle>
              <DialogDescription className="text-on-surface-variant">
                {formatEventDate(event)} at {formatEventTime(event)}
              </DialogDescription>
            </DialogHeader>

            <dl className="space-y-2 text-sm">
              {event.location && (
                <div className="flex gap-2">
                  <dt className="sr-only">Location</dt>
                  <span className="material-symbols-outlined text-base text-vietnamese-red" aria-hidden="true">
                    location_on
                  </span>
                  <dd className="text-on-surface-variant">{event.location}</dd>
                </div>
              )}
              {event.description && (
                <div>
                  <dt className="sr-only">Description</dt>
                  <dd className="text-on-surface-variant">{event.description}</dd>
                </div>
              )}
            </dl>

            {(event.eventSlug || event.programSlug) && (
              <div className="flex flex-wrap gap-3 text-sm font-semibold">
                {event.eventSlug && (
                  <Link
                    to="/events/$slug"
                    params={{ slug: event.eventSlug }}
                    className="text-vietnamese-red underline-offset-4 hover:underline"
                  >
                    View event page
                  </Link>
                )}
                {event.programSlug && (
                  <Link
                    to="/programs/$slug"
                    params={{ slug: event.programSlug }}
                    className="text-viking-blue underline-offset-4 hover:underline"
                  >
                    View program page
                  </Link>
                )}
              </div>
            )}

            <div className="rounded-xl border border-[color:var(--color-outline-variant)] bg-surface-container-low p-4">
              <AddToCalendarActions event={event} />
            </div>

            {groups.length > 0 && (
              <p className="text-xs text-on-surface-variant">
                Part of the {groups.map((g) => g.name).join(", ")} calendar{" "}
                {groups.length > 1 ? "groups" : "group"}. You can follow the whole series from the
                subscription options below the calendar.
              </p>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
