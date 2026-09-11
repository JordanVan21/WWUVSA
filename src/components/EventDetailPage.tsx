import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbox } from "@/components/Lightbox";
import { GalleryImage } from "@/components/GalleryImage";
import { getCategoryPreview } from "@/data/gallery";
import { getRelatedEvents, type EventMeta } from "@/lib/media";

const ACCENT_TEXT: Record<EventMeta["accent"], string> = {
  red: "text-vietnamese-red",
  gold: "text-[color:var(--color-imperial-gold)]",
  blue: "text-viking-blue",
};
const ACCENT_BORDER: Record<EventMeta["accent"], string> = {
  red: "border-vietnamese-red",
  gold: "border-imperial-gold",
  blue: "border-viking-blue",
};
const ACCENT_PILL: Record<EventMeta["accent"], string> = {
  red: "bg-vietnamese-red/90 text-white",
  gold: "bg-[color:var(--color-imperial-gold)]/90 text-on-tertiary-container",
  blue: "bg-viking-blue/90 text-white",
};

const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 },
};

export function EventDetailPage({ event }: { event: EventMeta }) {
  const media = getCategoryPreview(event.slug, { limit: 12 });
  const related = getRelatedEvents(event.slug, 3);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const facts = [
    event.season && { label: "Time of Year", value: event.season },
    event.location && { label: "Location", value: event.location },
    event.audience && { label: "Who Can Attend", value: event.audience },
    event.category && { label: "Format", value: event.category },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[42vh] min-h-[320px] w-full items-end overflow-hidden bg-ink-black md:h-[58vh] md:min-h-[420px]">
        {event.heroImage && (
          <img
            src={event.heroImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-80"
            loading="eager"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-black/90 via-ink-black/45 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-5 md:px-20 pb-10 md:pb-14">
          <Link
            to="/events"
            className="mb-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.25em] text-imperial-gold hover:underline"
          >
            <span className="material-symbols-outlined text-base" aria-hidden="true">
              arrow_back
            </span>
            Back to Events
          </Link>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${ACCENT_PILL[event.accent]}`}>
              {event.season}
            </span>
            {event.category && (
              <span className="rounded-full border border-white/40 px-3 py-1 text-xs font-semibold text-white/90">
                {event.category}
              </span>
            )}
          </div>
          <h1 className="max-w-3xl font-display text-3xl leading-tight text-white md:text-5xl">
            {event.name}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-white/85 md:text-lg">{event.description}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-screen-2xl px-5 md:px-20 py-14 md:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-14">
          <motion.div {...reveal} className="lg:col-span-2">
            <span className={`text-xs font-semibold uppercase tracking-[0.25em] ${ACCENT_TEXT[event.accent]}`}>
              Overview
            </span>
            <h2 className="mt-2 font-display text-2xl text-ink-black md:text-3xl">About the Event</h2>
            <div className="mt-4 max-w-2xl space-y-4 text-on-surface-variant">
              <p>{event.happens}</p>
              <p>{event.meaning}</p>
            </div>
          </motion.div>

          {facts.length > 0 && (
            <motion.aside
              {...reveal}
              className={`h-fit rounded-lg border-t-4 ${ACCENT_BORDER[event.accent]} bg-white p-5 shadow-sm md:p-6`}
            >
              <h3 className="font-display text-xl text-ink-black">Event Details</h3>
              <dl className="mt-4 space-y-4">
                {facts.map((f) => (
                  <div key={f.label}>
                    <dt className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
                      {f.label}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-ink-black">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </motion.aside>
          )}
        </div>
      </section>

      {/* What to Expect */}
      {event.expectations && event.expectations.length > 0 && (
        <section className="bg-surface-container-low px-5 md:px-20 py-14 md:py-20">
          <div className="mx-auto max-w-screen-2xl">
            <div className="mb-10 flex flex-col items-center">
              <span className={`text-xs font-semibold uppercase tracking-[0.25em] ${ACCENT_TEXT[event.accent]}`}>
                Highlights
              </span>
              <h2 className="mt-2 text-center font-display text-2xl text-ink-black md:text-3xl">
                What to Expect
              </h2>
              <div className="dong-son-divider mt-6 h-px w-full max-w-md" />
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {event.expectations.map((x) => (
                <motion.article
                  key={x.title}
                  {...reveal}
                  className={`flex flex-col rounded-lg border-t-4 ${ACCENT_BORDER[event.accent]} bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md`}
                >
                  <span
                    className={`material-symbols-outlined text-2xl ${ACCENT_TEXT[event.accent]}`}
                    aria-hidden="true"
                  >
                    {x.icon}
                  </span>
                  <h3 className="mt-3 font-display text-xl text-ink-black">{x.title}</h3>
                  <p className="mt-2 text-sm text-on-surface-variant">{x.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Video */}
      {/* Evergreen detail sections */}
      {event.sections && event.sections.length > 0 && (
        <section className="mx-auto max-w-screen-2xl px-5 md:px-20 py-14 md:py-20">
          <div className="mx-auto max-w-3xl space-y-12">
            {event.sections.map((s) => (
              <motion.div key={s.title} {...reveal}>
                <h2 className="dong-son-border font-display text-2xl text-ink-black md:text-3xl">
                  {s.title}
                </h2>
                {s.body?.map((p) => (
                  <p key={p.slice(0, 24)} className="mt-4 text-base leading-relaxed text-on-surface-variant">
                    {p}
                  </p>
                ))}
                {s.bullets && s.bullets.length > 0 && (
                  <ul className="mt-4 space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-base leading-relaxed text-on-surface-variant">
                        <span
                          className={`material-symbols-outlined mt-0.5 shrink-0 text-lg ${ACCENT_TEXT[event.accent]}`}
                          aria-hidden="true"
                        >
                          check_circle
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Current-year details (edit yearly) */}
      {event.currentYear && (
        <section className="mx-auto max-w-screen-2xl px-5 md:px-20 pb-14 md:pb-20">
          <div className={`mx-auto max-w-3xl rounded-lg border-t-4 ${ACCENT_BORDER[event.accent]} bg-surface-container-low p-6 shadow-sm md:p-8`}>
            <span className={`text-xs font-semibold uppercase tracking-[0.25em] ${ACCENT_TEXT[event.accent]}`}>
              This Year
            </span>
            <h2 className="mt-2 font-display text-2xl text-ink-black">Current-Year Details</h2>
            {event.currentYear.note && (
              <p className="mt-4 text-on-surface-variant">{event.currentYear.note}</p>
            )}
            {event.currentYear.details && event.currentYear.details.length > 0 && (
              <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {event.currentYear.details.map((d) => (
                  <div key={d.label}>
                    <dt className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
                      {d.label}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-ink-black">{d.value}</dd>
                  </div>
                ))}
              </dl>
            )}
            {event.currentYear.link && (
              <a
                href={event.currentYear.link.url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-vietnamese-red px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
              >
                {event.currentYear.link.label}
                <span className="material-symbols-outlined text-base" aria-hidden="true">open_in_new</span>
              </a>
            )}
          </div>
        </section>
      )}

      {event.videoUrl && (
        <section className="mx-auto max-w-screen-2xl px-5 md:px-20 py-14 md:py-20">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-lg shadow-sm">
              <video
                src={event.videoUrl}
                controls
                preload="metadata"
                playsInline
                poster={event.heroImage || undefined}
                className="aspect-video w-full bg-ink-black object-cover"
              />
            </div>
            <div>
              <span className={`text-xs font-semibold uppercase tracking-[0.25em] ${ACCENT_TEXT[event.accent]}`}>
                Featured Video
              </span>
              <h2 className="mt-2 font-display text-2xl text-ink-black md:text-3xl">
                {event.videoTitle ?? event.name}
              </h2>
              {event.videoDescription && (
                <p className="mt-4 max-w-xl text-on-surface-variant">{event.videoDescription}</p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Featured Moments */}
      {media.length > 0 && (
        <section className="bg-rice-paper px-5 md:px-20 py-14 md:py-20">
          <div className="mx-auto max-w-screen-2xl">
            <div className="mb-10 flex flex-col items-center">
              <span className={`text-xs font-semibold uppercase tracking-[0.25em] ${ACCENT_TEXT[event.accent]}`}>
                Gallery
              </span>
              <h2 className="mt-2 text-center font-display text-2xl text-ink-black md:text-3xl">
                Featured Moments
              </h2>
              <div className="dong-son-divider mt-6 h-px w-full max-w-md" />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
              {media.map((m, i) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="group relative aspect-square overflow-hidden rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-vietnamese-red focus:ring-offset-2"
                  aria-label={`Open ${m.altText}`}
                >
                  <GalleryImage
                    src={m.thumbnailUrl}
                    alt={m.altText}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-vietnamese-red/35 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="material-symbols-outlined text-3xl text-white" aria-hidden="true">
                      zoom_in
                    </span>
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                to="/gallery"
                search={{ event: event.slug, year: "all", type: "all" }}
                className="inline-flex items-center gap-2 rounded-full bg-vietnamese-red px-6 py-3 text-sm font-semibold text-white shadow-md shadow-vietnamese-red/25 transition-transform hover:scale-105 active:scale-95"
              >
                View Full {event.name} Gallery
                <span className="material-symbols-outlined text-base" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Explore More Events */}
      {related.length > 0 && (
        <section className="mx-auto max-w-screen-2xl px-5 md:px-20 py-14 md:py-20">
          <div className="mb-10 flex flex-col items-center">
            <h2 className="text-center font-display text-2xl text-vietnamese-red md:text-3xl">
              Explore More Events
            </h2>
            <div className="dong-son-divider mt-6 h-px w-full max-w-md" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((e) => (
              <article
                key={e.slug}
                className={`group flex flex-col overflow-hidden rounded-lg border-t-4 ${ACCENT_BORDER[e.accent]} bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={e.heroImage}
                    alt={e.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute right-2 top-2 rounded-full px-3 py-1 text-xs font-semibold ${ACCENT_PILL[e.accent]}`}>
                    {e.season}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-2xl text-ink-black">{e.name}</h3>
                  <p className="mt-2 flex-1 text-on-surface-variant">{e.description}</p>
                  <Link
                    to="/events/$slug"
                    params={{ slug: e.slug }}
                    className={`mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${ACCENT_TEXT[e.accent]}`}
                  >
                    Learn More
                    <span className="material-symbols-outlined text-base" aria-hidden="true">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          items={media}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndex={setLightboxIndex}
        />
      )}
    </>
  );
}