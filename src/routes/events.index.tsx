import { createFileRoute, Link } from "@tanstack/react-router";
import { EVENT_META, MAJOR_EVENT_SLUGS } from "@/lib/media";

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "Events | WWU VSA" },
      { name: "description", content: "Signature annual events: Heritage Night, Tết, Turkey Bowl, SpikeFest, and more from WWU VSA." },
      { property: "og:title", content: "Events | WWU VSA" },
      { property: "og:description", content: "Experience the soul of Vietnam through our annual celebrations at Western Washington University." },
    ],
  }),
  component: EventsPage,
});

const HERO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC95vjnJOVq3r7-oMEzY8BJtxf8Zzo0XB5vKIxIQl3AoPW7LXXLBDC-JeuIqPOhirOXYds_apFTyBEOcuDfUCuvIWMZGOSPhp4wWCFX94Sz9lk8k07YaclCFS8hc_LjfbDHHVUmpHdiEFKRq0B8j9u0bAr5UfgGlG9pfx_RunHsTfqmHBfFEbFZClEe2Ry8F7IC2jQh_gac0BP3SH6-a8uOXYfFAKBO0pq1PY9LNBEYROg2O0EMRpu8dhkC8cJgnFFz5w21yaBifyDO";

const OLY =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA4XLGnVWM3FeTaeqnf4fJsGayOR_R8Zg_8Ys40jx-mvYnjTHoVaLr_iEOR4wbizALuIGW2ZvqOjzfDEfK62VPIZ_vVHON2ncM8TLNdxysVgBV0CAjY9ijG0WupQ0eiJqFdhADn1nVoDtkVu4SxoJmxdl1CT5Dj-f03FsbShTgifCkAzBBzMzS8v-nDYa41LnuQPULG5b0VR4AVwqXJ3LOFI3BF4cojBASaIexUNZnHtxvlq51tOsRFXcgCA1PApwe8K871d9DOL-VY";

const ACCENT: Record<"red" | "gold" | "blue", { border: string; pill: string; cta: string }> = {
  red:  { border: "border-vietnamese-red", pill: "bg-vietnamese-red/90 text-white", cta: "text-vietnamese-red" },
  gold: { border: "border-imperial-gold", pill: "bg-[color:var(--color-imperial-gold)]/90 text-on-tertiary-container", cta: "text-[color:var(--color-imperial-gold)]" },
  blue: { border: "border-viking-blue", pill: "bg-viking-blue/90 text-white", cta: "text-viking-blue" },
};

function EventsPage() {
  return (
    <>
      <section className="relative flex h-[62vh] min-h-[440px] w-full items-end overflow-hidden bg-ink-black">
        <img src={HERO} alt="Vietnamese cultural performance on stage" className="absolute inset-0 h-full w-full object-cover opacity-90" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-black/85 via-ink-black/30 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-5 md:px-20 pb-14">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-imperial-gold">
            Cultural Legacy
          </span>
          <h1 className="max-w-2xl font-display text-4xl leading-tight text-white md:text-6xl">
            Signature Events
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/85">
            Experience the soul of Vietnam through our annual celebrations, uniting tradition with
            our vibrant student community.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-screen-2xl px-5 md:px-20 py-16 md:py-24">
        <div className="mb-12 flex flex-col items-center">
          <h2 className="text-center font-display text-3xl text-vietnamese-red md:text-4xl">
            Our Annual Traditions
          </h2>
          <div className="dong-son-divider mt-6 h-px w-full max-w-md" />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MAJOR_EVENT_SLUGS.map((slug) => {
            const e = EVENT_META[slug];
            const a = ACCENT[e.accent];
            return (
              <article
                key={slug}
                className={`group flex flex-col overflow-hidden rounded-lg border-t-4 ${a.border} bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={e.heroImage} alt={e.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className={`absolute right-2 top-2 rounded-full px-3 py-1 text-xs font-semibold ${a.pill}`}>{e.season}</div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-2xl text-ink-black">{e.name}</h3>
                  <p className="mt-2 flex-1 text-on-surface-variant">{e.description}</p>
                  <Link
                    to="/events/$slug"
                    params={{ slug }}
                    className={`mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${a.cta}`}
                  >
                    Learn More
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="overflow-hidden bg-surface-container-low py-16 md:py-24">
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 items-center gap-16 px-5 md:px-20 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-lg lg:mx-0">
              <div className="absolute -bottom-2 -right-2 -z-10 hidden h-full w-full translate-x-2 translate-y-2 rounded-lg border-2 border-imperial-gold sm:block" />
              <img src={OLY} alt="ACCE families gathering together" loading="lazy" className="aspect-video w-full rounded-lg object-cover shadow-lg" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-viking-blue">
              ACCE Program
            </span>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <h2 className="font-display text-3xl text-ink-black md:text-4xl">ACCE Olympics</h2>
              <span className="inline-flex items-center rounded-full bg-viking-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-viking-blue">
                In the Works
              </span>
            </div>
            <p className="mt-4 text-lg text-on-surface-variant">
              ACCE Olympics is a developing program idea centered around bringing ACCE families together through team activities, friendly competition, and shared experiences. The goal is to give families another opportunity to bond, connect with one another, and strengthen the ACCE community.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                ["emoji_events", "Friendly Competition"],
                ["favorite", "Family Bonding"],
                ["groups", "ACCE Community"],
              ].map(([i, l]) => (
                <li key={l} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-viking-blue">{i}</span>
                  <span className="text-sm font-semibold">{l}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-on-surface-variant">
              Details are still being developed.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
