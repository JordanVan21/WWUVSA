import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Lightbox } from "@/components/Lightbox";
import { GalleryImage } from "@/components/GalleryImage";
import { getProgramMedia, type Program } from "@/lib/programs";
import { FEATURES } from "@/lib/site-config";
import { DividedDetails, EditorialFeatureColumns } from "@/components/EditorialInfo";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

export function ProgramDetailPage({ program }: { program: Program }) {
  const media = getProgramMedia(program);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const details = [
    { label: "Who it's for", value: program.audience },
    { label: "Experience level", value: program.experienceLevel },
    { label: "When it runs", value: program.typicalSchedule },
    { label: "Participation", value: program.participationDetails },
  ].filter((d) => Boolean(d.value));

  const hasImageHero = program.accentStyle === "image" && program.heroImage;
  const isBlue = program.accentStyle === "blue";

  return (
    <>
      {/* Compact hero */}
      <section
        className={`relative overflow-hidden ${
          hasImageHero
            ? "text-white"
            : isBlue
              ? "bg-viking-blue text-white"
              : "bg-surface-container"
        }`}
      >
        {hasImageHero && (
          <>
            <img
              src={program.heroImage}
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-black/85 via-ink-black/60 to-ink-black/30" />
          </>
        )}
        <div className="relative z-10 mx-auto max-w-screen-2xl px-5 py-10 md:px-20 md:py-14">
          <Link
            to="/about"
            className="group inline-flex items-center gap-1 text-sm font-semibold opacity-90 transition hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <span className="material-symbols-outlined text-base transition-transform group-hover:-translate-x-1">
              chevron_left
            </span>
            Back to Programs
          </Link>
          <span
            className={`mt-5 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
              hasImageHero || isBlue
                ? "bg-white/20"
                : "bg-imperial-gold/20 text-on-tertiary-container"
            }`}
          >
            {program.category}
          </span>
          <h1
            className={`mt-3 font-display text-3xl md:text-5xl ${hasImageHero || isBlue ? "" : "text-ink-black"}`}
          >
            {program.name}
          </h1>
          <p
            className={`mt-3 max-w-2xl text-lg ${hasImageHero || isBlue ? "opacity-90" : "text-on-surface-variant"}`}
          >
            {program.shortDescription}
          </p>
        </div>
      </section>

      {/* About the Program */}
      <motion.section {...fade} className="px-5 md:px-20 py-14 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="dong-son-border font-display text-2xl md:text-3xl text-ink-black">
            About the Program
          </h2>
          <div className="mt-6 space-y-4">
            {program.fullDescription.map((p) => (
              <p key={p.slice(0, 24)} className="text-base leading-relaxed text-on-surface-variant">
                {p}
              </p>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How It Works */}
      {program.howItWorks && program.howItWorks.length > 0 && (
        <motion.section {...fade} className="bg-surface-container-low px-5 md:px-20 py-14 md:py-20">
          <div className="mx-auto max-w-screen-2xl">
            <h2 className="font-display text-2xl md:text-3xl text-ink-black">How It Works</h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-imperial-gold" />
            <div className="mt-8">
              <EditorialFeatureColumns
                numbered
                columns={4}
                items={program.howItWorks.map((step, index) => ({
                  ...step,
                  accent: (["red", "gold", "blue"] as const)[index % 3],
                }))}
              />
            </div>
          </div>
        </motion.section>
      )}

      {/* Program sections */}
      {program.sections && program.sections.length > 0 && (
        <motion.section {...fade} className="px-5 md:px-20 py-14 md:py-20">
          <div className="mx-auto max-w-3xl space-y-12">
            {program.sections.map((s) => (
              <div key={s.title}>
                <h2 className="dong-son-border font-display text-2xl md:text-3xl text-ink-black">
                  {s.title}
                </h2>
                {s.body?.map((p) => (
                  <p
                    key={p.slice(0, 24)}
                    className="mt-4 text-base leading-relaxed text-on-surface-variant"
                  >
                    {p}
                  </p>
                ))}
                {s.bullets && s.bullets.length > 0 && (
                  <ul className="mt-4 space-y-3">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-base leading-relaxed text-on-surface-variant"
                      >
                        <span
                          className="material-symbols-outlined mt-0.5 shrink-0 text-lg text-[color:var(--color-imperial-gold)]"
                          aria-hidden="true"
                        >
                          check_circle
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </motion.section>
      )}
      {/* Who It Is For */}
      {details.length > 0 && (
        <motion.section {...fade} className="px-5 md:px-20 py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl text-ink-black">Who It Is For</h2>
            <div className="mt-6">
              <DividedDetails items={details} />
            </div>
          </div>
        </motion.section>
      )}

      {/* Featured media */}
      {(program.videoUrl || media.length > 0) && (
        <motion.section {...fade} className="lotus-pattern px-5 md:px-20 py-14 md:py-20">
          <div className="mx-auto max-w-screen-2xl">
            <h2 className="font-display text-2xl md:text-3xl text-ink-black">Featured Media</h2>
            {program.videoUrl && (
              <div className="mt-8 aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
                <iframe
                  src={program.videoUrl}
                  title={`${program.name} video`}
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            )}
            {media.length > 0 && (
              <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
                {media.map((m, i) => (
                  <button
                    key={m.id}
                    onClick={() => setLightbox(i)}
                    aria-label={`View photo: ${m.altText}`}
                    className="group overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vietnamese-red"
                  >
                    <GalleryImage
                      src={m.thumbnailUrl}
                      alt={m.altText}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.section>
      )}

      {/* Participation CTA */}
      <section className="px-5 md:px-20 py-14 md:py-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[color:var(--color-outline-variant)]/40 bg-surface-container-low p-8 text-center shadow-sm">
          <h2 className="font-display text-2xl text-ink-black">Interested in {program.name}?</h2>
          <p className="mt-2 text-on-surface-variant">
            Come to a meeting or reach out, and we'll point you to the right people.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {FEATURES.calendar && (
              <Link
                to="/calendar"
                className="inline-flex items-center gap-2 rounded-lg bg-vietnamese-red px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-vietnamese-red/25 transition hover:brightness-110"
              >
                View Upcoming Meetings
              </Link>
            )}
            <Link
              to="/contact"
              className={
                FEATURES.calendar
                  ? "inline-flex items-center rounded-lg border-2 border-vietnamese-red px-6 py-3 text-sm font-semibold text-vietnamese-red transition hover:bg-vietnamese-red hover:text-white"
                  : "inline-flex items-center gap-2 rounded-lg bg-vietnamese-red px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-vietnamese-red/25 transition hover:brightness-110"
              }
            >
              Contact WWU VSA
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center rounded-lg border border-[color:var(--color-outline-variant)] px-6 py-3 text-sm font-semibold text-on-surface-variant transition hover:bg-surface-container"
            >
              Explore Our Events
            </Link>
          </div>
        </div>
      </section>

      {lightbox !== null && media.length > 0 && (
        <Lightbox
          items={media}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onIndex={setLightbox}
        />
      )}
    </>
  );
}
