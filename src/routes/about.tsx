import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useRef } from "react";

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

const board = [
  { name: "Linh Nguyen", role: "President", major: "Behavioral Neuroscience", accent: "bg-vietnamese-red/90", roleColor: "text-vietnamese-red", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB178x-Fdi11e9WcSxBBTqxapUBKHyOZDDzDlUhOjbTpcJnwKX6EA8mAeITC09NE-gBUV-P8hg8aAktPhXlvKwhMzXSH-LQ5cAZkrvrP02Nfx8I4X_b9JbmuAcmMIrsrfu_ZI1M35NrWDur6MTDKTFZm9y0jRRU56rb3g3LrdbVvfe50s8K1NzhtWJan8PhpPySZa0j-ljuCU-wOM_tjYQ-FoTWTItfAxweB8Dqi6h9Q9kFGtV4I9Mkr4x81WQ3qgrJiyhC56pkhGES" },
  { name: "Minh Tran", role: "Internal Vice President", major: "Business Administration", accent: "bg-viking-blue/90", roleColor: "text-viking-blue", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjo2XTfrVusklk3Z5gSs2iavIJdi5ES4Pj2Vab5oRWkTVt2LgRAIukbKXuCNt9C5fk5X5o7WvqsSonFNJ93BGGU6e9x200QAX7UUSF79b2u8Vewk0r1WnU_5IjPBCe6ckggkCItupLF8BhMNO3jcxsdWcN76R2PDw-omonWWGURJH1f254-JBOFBo8LxhaNMVITtlyVm8lwEqShvwanXrv5j_Zssr8B4mA00zjnA6YdOBtcXQ9Kkd36pmAaC0j3ctT2GiSAWA9QdUI" },
  { name: "Anh Le", role: "External Vice President", major: "Graphic Design", accent: "bg-imperial-gold/90", roleColor: "text-[color:var(--color-imperial-gold)]", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxPiQ37g5Fex9BfKlJ3B1pmRsFukpCJDoOHSGOH46jnjpOYirR74pzSBkqbXV9-NTSHazkytXCBYEoUa-tkAE_Dm_Esppz-WFIO5X7epL_EJm3QXZ4t3MvJcZA5zA_uzpNUWb3TDOz1h5d8DDNGS5i5R_p1UId9VTj9KU1RY2bAUF8yIqP-PqDS7OowTswzeWgvTSw0vLsjUviVXtqY-rO-M1dFkxYfMjSGJCgq3rx1X0lLQoUPlXiWNHpSJko4Dt6XQiE5zrcJxdZ" },
  { name: "Duy Pham", role: "Secretary", major: "Computer Science", accent: "bg-ink-black/90", roleColor: "text-on-surface-variant", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCdCjGVLD132GUL94UQa8t0vRMH0pZ2xxTw51Rdd7yJGhBoWWENDvQdzrZp-yjenC8O147CrKKK34YwVlvGPKRfef1u-TWfbeRmWHWTlG6rN232-l8nCsopxtNjOhR3pMIfSwq77FYOgXL0peTKBzSRWnPgFEH_BWKzZB9RRZyGe7Md3aC2nOat2yz_VX3yUg5j2uT4bpJEU5KUl3L5zoQX1Ee4mP0qjVPpfZzZSzxO_XVQkDrRkzNviUnJiR7cwakjla29FfPquuV" },
];

function AboutPage() {
  const slider = useRef<HTMLDivElement | null>(null);
  const scroll = (dir: number) => slider.current?.scrollBy({ left: dir * 320, behavior: "smooth" });

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
            <div className="group relative overflow-hidden rounded-2xl p-8 text-white md:col-span-3 md:row-span-2">
              <img src={ACCE_IMG} alt="ACCE family gathering" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink-black/85 to-transparent" />
              <div className="relative z-20 flex h-full flex-col justify-end">
                <span className="mb-3 w-fit rounded-full bg-vietnamese-red px-3 py-1 text-xs font-semibold">ACCE (Family System)</span>
                <h3 className="font-display text-3xl">A Core Connection Effort</h3>
                <p className="mt-2 max-w-sm opacity-90">Our mentorship program that pairs incoming students with experienced upperclassmen — creating lifelong "families" within VSA.</p>
              </div>
            </div>
            {/* Viet 101 — no stats cards per brief */}
            <div className="group relative overflow-hidden rounded-2xl bg-surface-container p-8 md:col-span-3 md:row-span-1">
              <div className="flex h-full flex-col items-start gap-6 md:flex-row md:items-center">
                <div className="flex-1">
                  <span className="mb-2 inline-block rounded-full bg-imperial-gold/20 px-3 py-1 text-xs font-semibold text-on-tertiary-container">Culture &amp; Language</span>
                  <h3 className="font-display text-2xl">Viet 101</h3>
                  <p className="mt-2 text-on-surface-variant">Dive into Vietnamese language, history, and modern nuances in a casual, student-led workshop series that meets you where you are.</p>
                </div>
                <div className="grid h-24 w-24 shrink-0 place-items-center rounded-2xl bg-white p-4 shadow-sm">
                  <span className="material-symbols-outlined text-5xl text-[color:var(--color-imperial-gold)]">translate</span>
                </div>
              </div>
            </div>
            {/* Wavy Fan Dance */}
            <div className="group relative overflow-hidden rounded-2xl bg-viking-blue p-8 text-white md:col-span-3 md:row-span-1">
              <div className="relative z-20 flex h-full items-center justify-between">
                <div>
                  <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">Art &amp; Performance</span>
                  <h3 className="font-display text-2xl">Wavy Fan Dance</h3>
                  <p className="mt-2 opacity-90">Graceful storytelling through traditional dance, showcased at Heritage Night each year.</p>
                </div>
                <span className="material-symbols-outlined shrink-0 text-5xl">auto_awesome</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Slider */}
      <section className="bg-surface px-5 md:px-20 py-16 md:py-24">
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl md:text-4xl">Meet the Board</h2>
              <p className="mt-2 text-on-surface-variant">The passionate team behind our current vision.</p>
            </div>
            <div className="flex gap-2">
              <button aria-label="Scroll left" onClick={() => scroll(-1)} className="grid h-11 w-11 place-items-center rounded-full bg-white text-viking-blue shadow-md transition hover:bg-viking-blue hover:text-white">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button aria-label="Scroll right" onClick={() => scroll(1)} className="grid h-11 w-11 place-items-center rounded-full bg-white text-viking-blue shadow-md transition hover:bg-viking-blue hover:text-white">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div ref={slider} className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-6">
            {board.map((m) => (
              <div key={m.name} className="group min-w-[260px] max-w-[260px] snap-start sm:min-w-[280px] sm:max-w-[280px]">
                <div className="relative mb-3 overflow-hidden rounded-2xl border-2 border-rice-paper shadow-sm">
                  <img src={m.img} alt={`${m.name}, ${m.role}`} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform group-hover:scale-105" />
                  <div className={`absolute bottom-0 left-0 w-full translate-y-full p-3 text-xs text-white backdrop-blur-sm transition-transform group-hover:translate-y-0 ${m.accent}`}>
                    Major: {m.major}
                  </div>
                </div>
                <h4 className="font-display text-xl text-ink-black">{m.name}</h4>
                <p className={`text-xs font-semibold uppercase tracking-wider ${m.roleColor}`}>{m.role}</p>
              </div>
            ))}
          </div>
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