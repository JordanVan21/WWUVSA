import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BoardCarousel } from "@/components/BoardCarousel";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | WWU VSA" },
      { name: "description", content: "Our story, mission, signature programs, and the executive board leading WWU VSA." },
      { property: "og:title", content: "About Us | WWU VSA" },
      { property: "og:description", content: "Rooted at Western Washington University since 1996, weaving heritage into modern student life." },
    ],
  }),
  component: AboutPage,
});

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDpMRTz-LT8VWiynjUW6pjt8hq82IywnnbnJZXIkBB5BTEJDE7ZiExEYTMr_OPrf0yO9uXiODRpRHHnR9DfvGdPOmGaW4a2NzNk_oduU3uYGqXR7P15WrCqVrZ9jFKp3kKzqKZQu_N9oMSX0T-a-TGUBi3PcpFLTGs--sKKxjV-kgoCxh4YEBq6yluDbI-33gQ3Ooe_8WDiZzl60Sx0PjMoRteemQMqpJPA_fYDSvFtUE9VuHCBKVBktEdIDqYYYp2DYbd9kphtZSQF";

const ACCE_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCOKt9p1ajL1X_TpC_ppJkAD4lgET5s0Vt88sCQYvqNtkI1j3LioOoBYXnyUk9dKj8qj2Twmwvptb5e5uaMz7w3w7GdfgFCux2_UirR-icKRq3eKtyOgfX8Cn3wrSs58dPoZBbGXQLHv9KFjmxdpmRHHzDq-UyQ1mBXoKuCRWSC9FkCslYy7DKXSroA73DGBk78hYtBF6-enP6G-42KQ9TLUCQcieho4n1lq2j6AklFkhusIQyv2CbGePiMldeUFcrdLUqmQOzcwKKI";

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-rice-paper px-5 md:px-20 py-16 md:py-24">
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="order-2 lg:order-1">
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-vietnamese-red">
              Since 1996
            </span>
            <h1 className="font-display text-4xl md:text-6xl leading-tight text-on-surface">Our Story</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-surface-variant">
              Rooted in the heart of Western Washington University, the Vietnamese Student
              Association has been a home away from home for generations. We weave the vibrant
              threads of our heritage into the modern tapestry of student life.
            </p>
          </motion.div>
          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-3 -z-10 translate-x-4 translate-y-4 rounded-2xl border-2 border-imperial-gold/40" />
            <img src={HERO_IMG} alt="Students laughing together in a warm campus setting" className="h-[420px] w-full rounded-2xl object-cover shadow-lg md:h-[500px]" loading="eager" />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-surface-container-low px-5 md:px-20 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="dong-son-divider mx-auto mb-8 h-px w-full" />
          <h2 className="font-display text-3xl md:text-4xl">Mission &amp; Values</h2>
          <p className="mt-6 text-lg italic leading-relaxed text-on-surface-variant">
            "To empower Vietnamese students by fostering a supportive community, preserving our
            rich cultural heritage, and nurturing future leaders through academic excellence and
            community engagement."
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { icon: "diversity_3", title: "Community", desc: "Building a family where every student feels seen and heard.", border: "border-vietnamese-red", color: "text-vietnamese-red" },
              { icon: "temple_buddhist", title: "Heritage", desc: "Preserving traditions while creating new memories at WWU.", border: "border-imperial-gold", color: "text-[color:var(--color-imperial-gold)]" },
              { icon: "school", title: "Leadership", desc: "Preparing the next generation of visionary professionals.", border: "border-viking-blue", color: "text-viking-blue" },
            ].map((v) => (
              <div key={v.title} className={`rounded-2xl border-t-4 ${v.border} bg-white p-6 text-left shadow-sm`}>
                <span className={`material-symbols-outlined text-4xl ${v.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{v.icon}</span>
                <h3 className="mt-4 font-display text-2xl">{v.title}</h3>
                <p className="mt-2 text-on-surface-variant">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Bento */}
      <section className="bg-rice-paper px-5 md:px-20 py-16 md:py-24">
        <div className="mx-auto max-w-screen-2xl">
          <h2 className="mb-10 text-center font-display text-3xl md:text-4xl">Our Signature Programs</h2>
          <div className="grid h-auto grid-cols-1 gap-6 md:h-[600px] md:grid-cols-6 md:grid-rows-2">
            {/* ACCE big tile */}
            <Link
              to="/programs/$slug"
              params={{ slug: "acce" }}
              aria-label="Learn more about ACCE, our family-style mentorship program"
              className="group relative block overflow-hidden rounded-2xl p-8 text-white md:col-span-3 md:row-span-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vietnamese-red"
            >
              <img src={ACCE_IMG} alt="ACCE family gathering" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink-black/85 to-transparent" />
              <div className="relative z-20 flex h-full flex-col justify-end">
                <span className="mb-3 w-fit rounded-full bg-vietnamese-red px-3 py-1 text-xs font-semibold">ACCE (Family System)</span>
                <h3 className="font-display text-3xl">A Core Connection Effort</h3>
                <p className="mt-2 max-w-sm opacity-90">Our mentorship program that pairs incoming students with experienced upperclassmen — creating lifelong "families" within VSA.</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold">
                  Learn More
                  <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
                </span>
              </div>
            </Link>
            {/* Viet 101 — no stats cards per brief */}
            <Link
              to="/programs/$slug"
              params={{ slug: "viet-101" }}
              aria-label="Learn more about Viet 101, our language and culture workshop series"
              className="group relative block overflow-hidden rounded-2xl bg-surface-container p-8 transition-shadow hover:shadow-xl md:col-span-3 md:row-span-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vietnamese-red"
            >
              <div className="flex h-full flex-col items-start gap-6 md:flex-row md:items-center">
                <div className="flex-1">
                  <span className="mb-2 inline-block rounded-full bg-imperial-gold/20 px-3 py-1 text-xs font-semibold text-on-tertiary-container">Culture &amp; Language</span>
                  <h3 className="font-display text-2xl">Viet 101</h3>
                  <p className="mt-2 text-on-surface-variant">Dive into Vietnamese language, history, and modern nuances in a casual, student-led workshop series that meets you where you are.</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-viking-blue">
                    Learn More
                    <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </span>
                </div>
                <div className="grid h-24 w-24 shrink-0 place-items-center rounded-2xl bg-white p-4 shadow-sm">
                  <span className="material-symbols-outlined text-5xl text-[color:var(--color-imperial-gold)]">translate</span>
                </div>
              </div>
            </Link>
            {/* Wavy Fan Dance */}
            <Link
              to="/programs/$slug"
              params={{ slug: "wavy-fan-dance" }}
              aria-label="Learn more about Wavy Fan Dance, our performance troupe"
              className="group relative block overflow-hidden rounded-2xl bg-viking-blue p-8 text-white transition-shadow hover:shadow-xl md:col-span-3 md:row-span-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-imperial-gold"
            >
              <div className="relative z-20 flex h-full items-center justify-between">
                <div>
                  <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">Art &amp; Performance</span>
                  <h3 className="font-display text-2xl">Wavy Fan Dance</h3>
                  <p className="mt-2 opacity-90">Graceful storytelling through traditional dance, showcased at Heritage Night each year.</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold">
                    Learn More
                    <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </span>
                </div>
                <span className="material-symbols-outlined shrink-0 text-5xl">auto_awesome</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Board Slider */}
      <section className="bg-surface px-5 md:px-20 py-16 md:py-24">
        <div className="mx-auto max-w-screen-2xl">
          <BoardCarousel />
          <div className="mt-12 text-center">
            <p className="mb-4 text-on-surface-variant">Want to make an impact? Applications for next year's board open in Spring.</p>
          </div>
        </div>
      </section>

      {/* Community Roots — only ESC, NWVSA, WWU */}
      <section className="bg-rice-paper px-5 md:px-20 py-16 md:py-24">
        <div className="mx-auto flex max-w-screen-2xl flex-col items-center text-center">
          <h2 className="font-display text-3xl md:text-4xl">Community Roots</h2>
          <p className="mt-4 max-w-2xl text-lg text-on-surface-variant">
            We're part of a larger ecosystem of cultural advocacy and student support.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-12">
            {[
              { code: "ESC", label: "Ethnic Student Center", icon: "groups_2", color: "text-vietnamese-red" },
              { code: "NWVSA", label: "Northwest VSA", icon: "hub", color: "text-viking-blue" },
              { code: "WWU", label: "Western Washington University", icon: "school", color: "text-[color:var(--color-imperial-gold)]" },
            ].map((p) => (
              <div key={p.code} className="flex flex-col items-center gap-2">
                <div className="grid h-24 w-24 place-items-center rounded-full bg-white p-4 shadow-sm">
                  <span className={`material-symbols-outlined text-4xl ${p.color}`}>{p.icon}</span>
                </div>
                <span className="text-sm font-semibold text-on-surface">{p.code}</span>
                <span className="text-xs text-on-surface-variant">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}