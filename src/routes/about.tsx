import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { BoardCarousel } from "@/components/BoardCarousel";
import { COMMUNITY_ORGANIZATIONS } from "@/lib/community";
import { MISSION_PARAGRAPHS } from "@/lib/mission";
import { GALLERY_USAGE } from "@/data/gallery";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | WWU VSA" },
      {
        name: "description",
        content: "Our story, mission, signature programs, and the executive board leading WWU VSA.",
      },
      { property: "og:title", content: "About Us | WWU VSA" },
      {
        property: "og:description",
        content:
          "Rooted at Western Washington University since 1996, weaving heritage into modern student life.",
      },
    ],
  }),
  component: AboutPage,
});

const HERO_IMG = GALLERY_USAGE.aboutHero;

const ACCE_IMG = GALLERY_USAGE.acceCommunity;

function AboutPage() {
  const boardHeadingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash !== "#executive-board") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const id = window.setTimeout(() => {
      const el = document.getElementById("executive-board");
      if (!el) return;
      el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
      boardHeadingRef.current?.focus({ preventScroll: true });
    }, 50);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-rice-paper px-5 md:px-20 py-16 md:py-24">
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-vietnamese-red">
              Since 1996
            </span>
            <h1 className="font-display text-4xl md:text-6xl leading-tight text-on-surface">
              Our Story
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-surface-variant">
              WWU VSA brings students together through Vietnamese culture, community, and shared
              experiences at Western. Through cultural celebrations, mentorship, social events, and
              connections with VSAs across the Pacific Northwest, we create opportunities to build
              friendships, celebrate identity, and find a welcoming community on and beyond campus.
            </p>
          </motion.div>
          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-3 -z-10 translate-x-0 translate-y-4 rounded-2xl border-2 border-imperial-gold/40 md:translate-x-4" />
            <img
              src={HERO_IMG}
              alt="Students laughing together in a warm campus setting"
              className="h-[420px] w-full rounded-2xl object-cover shadow-lg md:h-[500px]"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-surface-container-low px-5 md:px-20 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="dong-son-divider mx-auto mb-8 h-px w-full" />
          <h2 className="font-display text-3xl md:text-4xl">Purpose, Mission &amp; Values</h2>
          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-left sm:text-center">
            {MISSION_PARAGRAPHS.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="text-base md:text-lg leading-relaxed text-on-surface-variant"
              >
                {p}
              </p>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: "diversity_3",
                title: "Community",
                desc: "Building a family where every student feels seen and heard.",
                border: "border-vietnamese-red",
                color: "text-vietnamese-red",
              },
              {
                icon: "temple_buddhist",
                title: "Heritage",
                desc: "Preserving traditions while creating new memories at WWU.",
                border: "border-imperial-gold",
                color: "text-[color:var(--color-imperial-gold)]",
              },
              {
                icon: "school",
                title: "Leadership",
                desc: "Preparing the next generation of visionary professionals.",
                border: "border-viking-blue",
                color: "text-viking-blue",
              },
            ].map((v) => (
              <div
                key={v.title}
                className={`rounded-2xl border-t-4 ${v.border} bg-white p-6 text-left shadow-sm`}
              >
                <span
                  className={`material-symbols-outlined text-4xl ${v.color}`}
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {v.icon}
                </span>
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
          <h2 className="mb-10 text-center font-display text-3xl md:text-4xl">
            Our Signature Programs
          </h2>
          <div className="grid h-auto grid-cols-1 gap-6 md:h-[600px] md:grid-cols-6 md:grid-rows-2">
            {/* ACCE big tile */}
            <Link
              to="/programs/$slug"
              params={{ slug: "acce" }}
              aria-label="Learn more about ACCE, our family-style mentorship program"
              className="group relative block overflow-hidden rounded-2xl p-8 text-white md:col-span-3 md:row-span-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vietnamese-red"
            >
              <img
                src={ACCE_IMG}
                alt="ACCE family gathering"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink-black/85 to-transparent" />
              <div className="relative z-20 flex h-full flex-col justify-end">
                <span className="mb-3 w-fit rounded-full bg-vietnamese-red px-3 py-1 text-xs font-semibold">
                  ACCE (Family System)
                </span>
                <h3 className="font-display text-3xl">A Core Connection Effort</h3>
                <p className="mt-2 max-w-sm opacity-90">
                  Our mentorship program that pairs incoming students with experienced
                  upperclassmen, creating lifelong "families" within VSA.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold">
                  Learn More
                  <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </span>
              </div>
            </Link>
            {/* Viet 101 - no stats cards per brief */}
            <Link
              to="/programs/$slug"
              params={{ slug: "viet-101" }}
              aria-label="Learn more about Viet 101, our language and culture workshop series"
              className="group relative block overflow-hidden rounded-2xl bg-surface-container p-8 transition-shadow hover:shadow-xl md:col-span-3 md:row-span-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vietnamese-red"
            >
              <div className="flex h-full flex-col items-start justify-center">
                <div className="flex-1">
                  <span className="mb-2 inline-block rounded-full bg-imperial-gold/20 px-3 py-1 text-xs font-semibold text-on-tertiary-container">
                    Culture &amp; Language
                  </span>
                  <h3 className="font-display text-2xl">Viet 101</h3>
                  <p className="mt-2 text-on-surface-variant">
                    Dive into Vietnamese language, history, and modern nuances in a casual,
                    student-led workshop series that meets you where you are.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-viking-blue">
                    Learn More
                    <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </span>
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
                  <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
                    Art &amp; Performance
                  </span>
                  <h3 className="font-display text-2xl">Wavy Fan Dance</h3>
                  <p className="mt-2 opacity-90">
                    Graceful storytelling through traditional dance, showcased at Heritage Night
                    each year.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold">
                    Learn More
                    <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </span>
                </div>
                <span className="material-symbols-outlined shrink-0 text-5xl">auto_awesome</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Board Slider */}
      <section
        id="executive-board"
        className="scroll-mt-24 bg-surface px-5 md:px-20 py-16 md:py-24 md:scroll-mt-28"
      >
        <div className="mx-auto max-w-screen-2xl">
          <BoardCarousel headingRef={boardHeadingRef} />
          <div className="mt-12 text-center">
            <p className="mb-4 text-on-surface-variant">
              Want to make an impact? Applications for next year's board open in Spring.
            </p>
          </div>
        </div>
      </section>

      {/* Community Roots - WWU ESC, NWVSA, UNAVSA */}
      <section className="bg-rice-paper px-5 md:px-20 py-16 md:py-24">
        <div className="mx-auto flex max-w-screen-2xl flex-col items-center text-center">
          <h2 className="font-display text-3xl md:text-4xl">Community Roots</h2>
          <p className="mt-4 max-w-2xl text-lg text-on-surface-variant">
            WWU VSA is connected to a wider network of campus support, regional community, and
            Vietnamese student leadership across North America.
          </p>
          <ul className="mt-12 grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {COMMUNITY_ORGANIZATIONS.map((org, i) => {
              const color = [
                "text-vietnamese-red",
                "text-viking-blue",
                "text-[color:var(--color-imperial-gold)]",
              ][i % 3];
              return (
                <li key={org.id} className="flex">
                  <div className="group flex h-full w-full flex-col rounded-2xl border border-[color:var(--color-outline-variant)]/60 bg-white/60 px-6 py-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-viking-blue/40 focus-within:border-viking-blue/60 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                    <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-white p-4 shadow-sm transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
                      {org.logoUrl ? (
                        <img
                          src={org.logoUrl}
                          alt=""
                          className="h-full w-full object-contain"
                          loading="lazy"
                        />
                      ) : (
                        <span
                          className={`material-symbols-outlined text-3xl ${color}`}
                          aria-hidden="true"
                        >
                          {org.icon}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-4 text-center font-display text-xl text-on-surface">
                      {org.acronym}
                    </h3>
                    <p className="mt-1 text-center text-xs leading-snug text-on-surface-variant">
                      {org.fullName}
                    </p>
                    <span className="mx-auto mt-3 rounded-full bg-imperial-gold/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-on-tertiary-container">
                      {org.scope}
                    </span>
                    <p className="mt-5 text-sm leading-relaxed text-on-surface-variant">
                      {org.description}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
                      <span className="font-semibold text-on-surface">How WWU VSA connects: </span>
                      {org.connectionDescription}
                    </p>
                    <a
                      href={org.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${org.accessibleLabel} (opens in a new tab)`}
                      className="mt-6 inline-flex items-center gap-1 self-start rounded-md text-sm font-semibold text-viking-blue hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vietnamese-red"
                    >
                      Visit website
                      <span
                        className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
                        aria-hidden="true"
                      >
                        open_in_new
                      </span>
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
