import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events | WWU VSA" },
      { name: "description", content: "Signature annual events — Heritage Night, Tết, Turkey Bowl, SpikeFest, and more from WWU VSA." },
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

const events = [
  { title: "Heritage Night", season: "Late Spring", desc: "Our largest cultural showcase featuring dance, music, and skits exploring Vietnamese-American identity.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDW5tFk9K3CZ3_mzHRSRTAGDm4H0fS-raQMQA2D5nYcawU6dSDhqJhz7MpT_Ii5CBd-WU-ofdUcfeD9BRiTuxuS0IlMiZsAbWl-2sC9zlDh4LaSQGqFtMzL0n97gy5LGWf49shEI49MsnZpJsqRPgGoLtEdQyU3tTVYDO5SRYHWBIEJAcrFa4LtJEYC8RnnCcwMJmqANDqjXctvMuDNngPaHFlnLylMNHKBwTxd9ajWiYhKC33qT_E2Qkz9YyXr_s-8knViggNaQZR1", border: "border-vietnamese-red", pill: "bg-vietnamese-red/90 text-white", cta: "text-vietnamese-red" },
  { title: "Tết", season: "Winter", desc: "Celebrating the Lunar New Year with authentic food, traditional games, and the warmth of family.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjtwJ8LxgYzy7NqHc-BcEpJqg16pz417VkLlBvw0FILUWfq87reyQqGT6SXfRncz6ebZgu_2uFo5g-ZwAhtcqKUGxz59hr-6kssFT7lkHeGBBvQ5n54qauzzwNr9FycTlfEnFENTqcMRW11eztctb1ZHmNVGT4kgLDaQAmi7yGFv9kv2gZzHnfgBobjQStUqjZd3XuNt_768Wrg47gCBy_mqm7aRIaeoKO2bbrJcBx4YejeWbHq7Cv7b7QkPvZ7iFgtckhac-foEFj", border: "border-imperial-gold", pill: "bg-[color:var(--color-imperial-gold)]/90 text-on-tertiary-container", cta: "text-[color:var(--color-imperial-gold)]" },
  { title: "Turkey Bowl", season: "Fall", desc: "Our annual friendly flag football tournament — a chance to compete and bond with fellow VSA chapters.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXG1WqjA9jCmAtpoLxz4RHcRzjcdl_VfteJ8TZuzibyWE3AiiJGD6f0oHX5hONSG67IsWw5mCjrr8iVFIXWF50NyT4hPXPfxr2Ov7LkGZKJLG94mNcfCcpsctTqgI15THWNtrhzlO0t8IEF2Q2FueumKl3IViJx3e89MJkfXhRRgvvr69LiJy8KR0RWcDMmr9sBofprbSgyLTAu88vWo9Zt9oHEiEUqze1jkRvY0iRwmHKmFZ2o-Yo3_mxjAf7K82bc7tPtKdnyLmt", border: "border-viking-blue", pill: "bg-viking-blue/90 text-white", cta: "text-viking-blue" },
  { title: "SpikeFest", season: "Spring", desc: "A competitive volleyball tournament bringing students together for a day of athletic excellence and fun.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaqqqy1hzZH3qlyScHHBEb4WcPcg-JquOcNB5eBTcFbJ7ZTzpaLUERJhL1-4CuwMQ6DBKtCH_2uPRSIa0oZUQVVsfAySJkTsdcOZoRPrxbod76EgpugDEYzM809w1Z8nmDC0LSnNTYmbH09RehsWltQ0n61L1ubSIzSsRGDWlRyE4lda-_BW5ucxOcuuYLtCNeJcoaGS3BaluNET-zsj2n6NM1BbUF0DQUlUvpOsMdw3IvwH9syWAFEYzBLWTXihFyXl9xYIzhIUAb", border: "border-vietnamese-red", pill: "bg-vietnamese-red/90 text-white", cta: "text-vietnamese-red" },
];

function EventsPage() {
  return (
    <>
      {/* Hero */}
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

      {/* Grid */}
      <section className="mx-auto max-w-screen-2xl px-5 md:px-20 py-16 md:py-24">
        <div className="mb-12 flex flex-col items-center">
          <h2 className="text-center font-display text-3xl text-vietnamese-red md:text-4xl">
            Our Annual Traditions
          </h2>
          <div className="dong-son-divider mt-6 h-px w-full max-w-md" />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((e) => (
            <div key={e.title} className={`group overflow-hidden rounded-lg border-t-4 ${e.border} bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl`}>
              <div className="relative h-48 overflow-hidden">
                <img src={e.img} alt={e.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className={`absolute right-2 top-2 rounded-full px-3 py-1 text-xs font-semibold ${e.pill}`}>{e.season}</div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl text-ink-black">{e.title}</h3>
                <p className="mt-2 text-on-surface-variant">{e.desc}</p>
                <button className={`mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${e.cta}`}>
                  Learn More
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACCE Olympics */}
      <section className="overflow-hidden bg-surface-container-low py-16 md:py-24">
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 items-center gap-16 px-5 md:px-20 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-lg lg:mx-0">
              <div className="absolute -bottom-2 -right-2 -z-10 h-full w-full translate-x-2 translate-y-2 rounded-lg border-2 border-imperial-gold" />
              <img src={OLY} alt="Students at a regional ACCE Olympics event" loading="lazy" className="aspect-video w-full rounded-lg object-cover shadow-lg" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-viking-blue">
              WWU Campus Event
            </span>
            <h2 className="mt-2 font-display text-3xl text-ink-black md:text-4xl">ACCE Olympics</h2>
            <p className="mt-4 text-lg text-on-surface-variant">
              Join us for the WWU VSA Olympics — a day of traditional and modern sporting events
              that bring our community together for unity and friendly competition.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                ["emoji_events", "Campus Competition"],
                ["groups", "Peer-to-Peer Networking"],
                ["favorite", "Community Spirit"],
              ].map(([i, l]) => (
                <li key={l} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-viking-blue">{i}</span>
                  <span className="text-sm font-semibold">{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}