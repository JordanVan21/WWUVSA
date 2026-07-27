import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/calendar")({
  head: () => ({
    meta: [
      { title: "Calendar | WWU VSA" },
      { name: "description", content: "Upcoming WWU VSA general body meetings, recurring events, and cultural programming." },
      { property: "og:title", content: "Calendar | WWU VSA" },
      { property: "og:description", content: "See when GBMs, Vietnamese Table, fan dance practice, and events happen this month." },
    ],
  }),
  component: CalendarPage,
});

type Day = { d: number; muted?: boolean; event?: { label: string; color: string } };

const days: Day[] = [
  { d: 27, muted: true }, { d: 28, muted: true }, { d: 29, muted: true }, { d: 30, muted: true }, { d: 31, muted: true }, { d: 1 }, { d: 2 },
  { d: 3 }, { d: 4 }, { d: 5, event: { label: "GBM @ 6PM", color: "bg-vietnamese-red text-white" } }, { d: 6 }, { d: 7 }, { d: 8, event: { label: "Phở Social", color: "bg-viking-blue text-white" } }, { d: 9 },
  { d: 10 }, { d: 11 }, { d: 12, event: { label: "GBM @ 6PM", color: "bg-vietnamese-red text-white" } }, { d: 13 }, { d: 14, event: { label: "Heritage Night Apps Due", color: "bg-[color:var(--color-imperial-gold)] text-on-tertiary-container" } }, { d: 15 }, { d: 16 },
  { d: 17 }, { d: 18 }, { d: 19, event: { label: "GBM @ 6PM", color: "bg-vietnamese-red text-white" } }, { d: 20 }, { d: 21 }, { d: 22 }, { d: 23 },
  { d: 24 }, { d: 25 }, { d: 26 }, { d: 27, event: { label: "Turkey Bowl", color: "bg-viking-blue text-white" } }, { d: 28 }, { d: 29 }, { d: 30 },
];

function CalendarPage() {
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
              <span className="material-symbols-outlined text-vietnamese-red" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_view_week</span>
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
              <span className="material-symbols-outlined text-viking-blue" style={{ fontVariationSettings: "'FILL' 1" }}>event_repeat</span>
              <h2 className="font-display text-2xl">Recurring Events</h2>
            </div>
            <ul className="space-y-4">
              {[
                ["translate", "Vietnamese Table", "Bi-weekly language practice socials."],
                ["settings_accessibility", "Wavy Fan Dance Practice", "Traditional dance rehearsals."],
                ["sports_kabaddi", "Event Practice", "For Turkey Bowl and SpikeFest."],
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
        <div className="space-y-6 lg:col-span-8">
          <div className="overflow-hidden rounded-2xl border border-[color:var(--color-outline-variant)] bg-white p-1 shadow-lg">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[color:var(--color-outline-variant)] bg-rice-paper p-6">
              <h2 className="font-display text-2xl">November 2024</h2>
              <div className="flex items-center gap-3 text-xs font-semibold">
                <span className="flex items-center gap-1"><span className="h-3 w-3 rounded-full bg-vietnamese-red" />GBM</span>
                <span className="flex items-center gap-1"><span className="h-3 w-3 rounded-full bg-viking-blue" />Social</span>
                <span className="flex items-center gap-1"><span className="h-3 w-3 rounded-full bg-[color:var(--color-imperial-gold)]" />Deadline</span>
              </div>
            </div>
            <div className="grid grid-cols-7 border-b border-[color:var(--color-outline-variant)] bg-surface-container text-xs font-bold uppercase text-on-surface-variant">
              {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (
                <div key={d} className="p-3 text-center">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7">
              {days.map((day, i) => (
                <div
                  key={i}
                  className={`min-h-[92px] border-b border-r border-[color:var(--color-outline-variant)] p-2 text-sm ${
                    day.muted ? "bg-surface-variant/30 text-on-surface-variant/50" : "font-semibold text-ink-black"
                  }`}
                >
                  {day.d}
                  {day.event && (
                    <div className={`mt-1 rounded p-1 text-[10px] ${day.event.color}`}>{day.event.label}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-viking-blue p-6 text-white">
            <span className="material-symbols-outlined text-4xl">notifications_active</span>
            <h3 className="mt-2 font-display text-2xl">Never miss an update</h3>
            <p className="mt-2 text-sm opacity-90">
              Subscribe to our digital calendar to get instant notifications about venue changes or new socials.
            </p>
            <button className="mt-4 w-fit rounded-lg bg-white px-4 py-2 text-sm font-semibold text-viking-blue transition hover:bg-white/90">
              Add to Device
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}