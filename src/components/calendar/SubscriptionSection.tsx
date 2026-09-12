import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CALENDAR_GROUPS, FULL_CALENDAR_FEED, webcalUrl, type CalendarGroup } from "@/lib/calendar";

const primaryBtn =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-vietnamese-red px-4 py-2 text-sm font-semibold text-white transition hover:bg-vietnamese-red/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vietnamese-red";
const quietBtn =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-[color:var(--color-outline-variant)] bg-white px-4 py-2 text-sm font-semibold text-ink-black transition hover:bg-surface-container-low focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vietnamese-red";

export function SubscribeButton({
  url,
  label,
  variant = "primary",
}: {
  url?: string;
  label: string;
  variant?: "primary" | "quiet";
}) {
  if (!url) {
    return (
      <span className="inline-flex items-center gap-2 rounded-lg border border-dashed border-[color:var(--color-outline-variant)] px-4 py-2 text-sm font-semibold text-on-surface-variant">
        Feed not available yet
      </span>
    );
  }
  return (
    <a className={variant === "primary" ? primaryBtn : quietBtn} href={webcalUrl(url)}>
      <span className="material-symbols-outlined text-base" aria-hidden="true">
        event_repeat
      </span>
      {label}
    </a>
  );
}

export function GroupCard({ group }: { group: CalendarGroup }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-[color:var(--color-outline-variant)] bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="font-semibold text-ink-black">{group.name}</h3>
        <p className="text-sm text-on-surface-variant">{group.description}</p>
      </div>
      <SubscribeButton url={group.subscriptionUrl} label="Subscribe" variant="quiet" />
    </div>
  );
}

export function UnsubscribeHelp({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`text-sm font-semibold text-viking-blue underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 ${className}`}
      >
        How to Unsubscribe
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[85vh] w-[calc(100vw-2rem)] max-w-lg overflow-y-auto rounded-2xl">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-ink-black">
              How to unsubscribe
            </DialogTitle>
          </DialogHeader>
          <p className="text-sm text-on-surface-variant">
            You can remove a WWU VSA calendar or group subscription at any time from your calendar
            app. The same steps apply whether you followed Wavy Fan Dance, Turkey Bowl, another
            group, or the complete public calendar.
          </p>
          <ul className="space-y-3 text-sm text-on-surface-variant">
            <li>
              <span className="font-semibold text-ink-black">Google Calendar:</span> open Settings,
              choose the WWU VSA calendar under "Settings for other calendars", and select
              Unsubscribe.
            </li>
            <li>
              <span className="font-semibold text-ink-black">Apple Calendar:</span> open Calendar
              settings, find the WWU VSA subscription in the accounts or calendar list, and delete
              it.
            </li>
            <li>
              <span className="font-semibold text-ink-black">Outlook:</span> open your calendar
              list, right-click the WWU VSA calendar, and choose Remove.
            </li>
          </ul>
          <p className="text-sm text-on-surface-variant">
            Want to keep the calendar but receive fewer alerts? You can change notification settings
            in your calendar app.
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
}

export function SubscriptionSection() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="font-display text-2xl text-ink-black md:text-3xl">
          Choose what you want to follow
        </h2>
        <p className="mt-1 max-w-2xl text-on-surface-variant">
          Add one event, follow a specific WWU VSA activity, or subscribe to everything. All of this
          is optional.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border-t-4 border-[color:var(--color-imperial-gold)] bg-white p-5 shadow-sm">
          <h3 className="font-display text-xl text-ink-black">Add One Event</h3>
          <p className="mt-1 text-sm text-on-surface-variant">
            Just this event. Pick any event on the calendar and add it to Google, Apple, or Outlook.
          </p>
        </div>
        <div className="rounded-xl border-t-4 border-viking-blue bg-white p-5 shadow-sm">
          <h3 className="font-display text-xl text-ink-black">Follow a Group</h3>
          <p className="mt-1 text-sm text-on-surface-variant">
            A specific series, like Turkey Bowl or Wavy Fan Dance, including future dates.
          </p>
        </div>
        <div className="rounded-xl border-t-4 border-vietnamese-red bg-white p-5 shadow-sm">
          <h3 className="font-display text-xl text-ink-black">Subscribe to Everything</h3>
          <p className="mt-1 text-sm text-on-surface-variant">
            All public WWU VSA events, best for active members who want the full schedule.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-[color:var(--color-outline-variant)] bg-surface-container-low p-6">
        <h3 className="font-display text-xl text-ink-black">Follow a specific group</h3>
        <p className="mt-1 text-sm text-on-surface-variant">
          Only want certain activities? Subscribe to a group and automatically keep its related
          events on your calendar.
        </p>
        <div className="mt-4 grid gap-3 lg:grid-cols-2">
          {CALENDAR_GROUPS.map((group) => (
            <GroupCard key={group.id} group={group} />
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-viking-blue p-6 text-white">
        <h3 className="font-display text-2xl">Want every WWU VSA event on your calendar?</h3>
        <p className="mt-2 max-w-2xl text-sm opacity-90">
          Subscribe to our public calendar to automatically keep up with upcoming public meetings
          and events. Best for active members who want the full schedule.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          {FULL_CALENDAR_FEED ? (
            <a
              className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-viking-blue transition hover:bg-white/90"
              href={webcalUrl(FULL_CALENDAR_FEED)}
            >
              Subscribe to Full Calendar
            </a>
          ) : (
            <span className="rounded-lg border border-dashed border-white/60 px-4 py-2 text-sm font-semibold">
              Full calendar feed not available yet
            </span>
          )}
          <span className="text-sm opacity-90">
            Notification settings are managed through your calendar app.
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 text-sm text-on-surface-variant">
        <UnsubscribeHelp />
        <span>Subscriptions never collect your email address or add you as an event guest.</span>
      </div>
    </section>
  );
}
