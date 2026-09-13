import { createFileRoute, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { MonthCalendar } from "@/components/calendar/MonthCalendar";
import { EventDialog } from "@/components/calendar/EventDialog";
import { SubscriptionSection } from "@/components/calendar/SubscriptionSection";
import { todayInZone, type CalendarEvent } from "@/lib/calendar";
import { FEATURES } from "@/lib/site-config";

export const Route = createFileRoute("/calendar")({
  // Calendar is hidden while FEATURES.calendar is false; see src/lib/site-config.ts
  beforeLoad: () => {
    if (!FEATURES.calendar) {
      throw redirect({ to: "/events" });
    }
  },
  head: () => ({
    meta: [
      { title: "Calendar | WWU VSA" },
      {
        name: "description",
        content:
          "Browse upcoming WWU VSA general body meetings and events, add a single event to your calendar, or follow a specific activity.",
      },
      { property: "og:title", content: "Calendar | WWU VSA" },
      {
        property: "og:description",
        content:
          "See when GBMs, Vietnamese Table, fan dance practice, and events happen, then add just one event or follow a whole series.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CalendarPage,
});

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const navBtn =
  "inline-grid h-10 w-10 place-items-center rounded-full border border-[color:var(--color-outline-variant)] bg-white text-ink-black transition hover:bg-surface-container-low focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vietnamese-red";

function CalendarPage() {
  const today = todayInZone();
  const [view, setView] = useState({ year: today.year, month: today.month });
  const [selected, setSelected] = useState<CalendarEvent | null>(null);

  const shift = (delta: number) =>
    setView((v) => {
      const next = new Date(Date.UTC(v.year, v.month + delta, 1));
      return { year: next.getUTCFullYear(), month: next.getUTCMonth() };
    });

  return (
    <main className="mx-auto max-w-screen-2xl px-5 md:px-20 py-16 md:py-24">
      <header className="mb-12 flex flex-col gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--color-imperial-gold)]">
          Our Schedule
        </span>
        <h1 className="font-display text-4xl text-ink-black md:text-6xl">What's Happening</h1>
        <div className="dong-son-divider mt-2 h-px w-32" />
      </header>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Sidebar */}
        <aside className="space-y-6 lg:col-span-4">
          <div className="rounded-2xl border-t-4 border-vietnamese-red bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <span
                className="material-symbols-outlined text-vietnamese-red"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                calendar_view_week
              </span>
              <h2 className="font-display text-2xl">Bi-Weekly Meetings</h2>
            </div>
            <div className="rounded-lg border border-[color:var(--color-outline-variant)] bg-surface-container-low p-4">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-vietnamese-red">
                General Body Meeting
              </p>
              <p className="font-bold text-ink-black">Tuesdays at 6:00 PM</p>
              <div className="mt-2 flex items-center gap-1 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-base">location_on</span>
                Viking Union (VU) 552
              </div>
            </div>
            <p className="mt-4 text-sm italic text-on-surface-variant">
              Join us for community updates, cultural workshops, and snacks. Everyone is welcome.
            </p>
          </div>

          <div className="rounded-2xl border-t-4 border-viking-blue bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <span
                className="material-symbols-outlined text-viking-blue"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                event_repeat
              </span>
              <h2 className="font-display text-2xl">Recurring Events</h2>
            </div>
            <ul className="space-y-4">
              {[
                ["translate", "Vietnamese Table", "Bi-weekly language practice socials."],
                ["settings_accessibility", "Wavy Fan Dance Practice", "Traditional dance rehearsals."],
                [
                  "sports_kabaddi",
                  "Event Practice",
                  "Preparation for events such as Turkey Bowl and SpikeFest.",
                ],
                [
                  "directions_car",
                  "Rides & Transportation",
                  "WWU VSA works to coordinate rides so members who want to attend an event have a way to get there whenever possible. Details are announced per event.",
                ],
              ].map(([i, t, d]) => (
                <li key={t} className="flex gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-viking-blue/10 text-viking-blue">
                    <span className="material-symbols-outlined">{i}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{t}</h3>
                    <p className="text-sm text-on-surface-variant">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Calendar */}
        <div className="space-y-8 lg:col-span-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button type="button" className={navBtn} onClick={() => shift(-1)} aria-label="Previous month">
                <span className="material-symbols-outlined" aria-hidden="true">
                  chevron_left
                </span>
              </button>
              <h2 aria-live="polite" className="font-display text-xl text-ink-black sm:text-2xl">
                {MONTHS[view.month]} {view.year}
              </h2>
              <button type="button" className={navBtn} onClick={() => shift(1)} aria-label="Next month">
                <span className="material-symbols-outlined" aria-hidden="true">
                  chevron_right
                </span>
              </button>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setView({ year: today.year, month: today.month })}
                className="rounded-lg border border-[color:var(--color-outline-variant)] bg-white px-4 py-2 text-sm font-semibold text-ink-black transition hover:bg-surface-container-low focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vietnamese-red"
              >
                Today
              </button>
              <div className="flex items-center gap-3 text-xs font-semibold text-on-surface-variant">
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-vietnamese-red" aria-hidden="true" />
                  Meeting
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-viking-blue" aria-hidden="true" />
                  Activity
                </span>
              </div>
            </div>
          </div>

          <MonthCalendar year={view.year} month={view.month} onSelect={setSelected} />

          <p className="text-sm text-on-surface-variant">
            All times are Bellingham local time. Select any event to see details and add just that
            event to your own calendar.
          </p>

          <SubscriptionSection />
        </div>
      </div>

      <EventDialog event={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
