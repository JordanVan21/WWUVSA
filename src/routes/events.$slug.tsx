import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { EVENT_META, getEventMedia, isEventSlug, type EventSlug } from "@/lib/media";
import { Lightbox } from "@/components/Lightbox";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    if (!isEventSlug(params.slug)) throw notFound();
    const event = EVENT_META[params.slug as EventSlug];
    const media = getEventMedia(params.slug as EventSlug).slice(0, 12);
    return { event, media };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Event not found | WWU VSA" }, { name: "robots", content: "noindex" }] };
    }
    const { event } = loaderData;
    return {
      meta: [
        { title: `${event.name} | WWU VSA` },
        { name: "description", content: event.description },
        { property: "og:title", content: `${event.name} | WWU VSA` },
        { property: "og:description", content: event.description },
        ...(event.heroImage ? [
          { property: "og:image", content: event.heroImage },
          { name: "twitter:image", content: event.heroImage },
        ] : []),
      ],
    };
  },
  component: EventDetail,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-24 text-center">
      <h1 className="font-display text-3xl text-vietnamese-red">Event not found</h1>
      <p className="mt-4 text-on-surface-variant">We couldn't find that event.</p>
      <Link to="/events" className="mt-6 inline-block rounded-full bg-vietnamese-red px-5 py-2 text-sm font-semibold text-white">
        Back to Events
      </Link>
    </div>
  ),
});

const ACCENT: Record<"red" | "gold" | "blue", string> = {
  red: "text-vietnamese-red",
  gold: "text-[color:var(--color-imperial-gold)]",
  blue: "text-viking-blue",
};
const ACCENT_BG: Record<"red" | "gold" | "blue", string> = {
  red: "bg-vietnamese-red",
  gold: "bg-[color:var(--color-imperial-gold)]",
  blue: "bg-viking-blue",
};

function EventDetail() {
  const { event, media } = Route.useLoaderData();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <section className="relative flex h-[62vh] min-h-[440px] w-full items-end overflow-hidden bg-ink-black">
        {event.heroImage && (
          <img src={event.heroImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-80" loading="eager" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-black/90 via-ink-black/40 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-5 md:px-20 pb-14">
          <Link to="/events" className="mb-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.25em] text-imperial-gold hover:underline">
            <span className="material-symbols-outlined text-base">arrow_back</span>
            All Events
          </Link>
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-imperial-gold">
            {event.season} · {event.tagline}
          </span>
          <h1 className="max-w-3xl font-display text-4xl leading-tight text-white md:text-6xl">
            {event.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">{event.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-screen-2xl px-5 md:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <span className={`text-xs font-semibold uppercase tracking-[0.25em] ${ACCENT[event.accent]}`}>What Happens</span>
            <h2 className="mt-2 font-display text-3xl text-ink-black">Inside the celebration</h2>
            <p className="mt-4 text-lg text-on-surface-variant">{event.happens}</p>
          </div>
          <div>
            <span className={`text-xs font-semibold uppercase tracking-[0.25em] ${ACCENT[event.accent]}`}>Why It Matters</span>
            <h2 className="mt-2 font-display text-3xl text-ink-black">To our community</h2>
            <p className="mt-4 text-lg text-on-surface-variant">{event.meaning}</p>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low px-5 md:px-20 py-16 md:py-24">
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-10 flex flex-col items-center">
            <span className={`text-xs font-semibold uppercase tracking-[0.25em] ${ACCENT[event.accent]}`}>Featured Media</span>
            <h2 className="mt-2 text-center font-display text-3xl text-ink-black md:text-4xl">
              Moments from {event.name}
            </h2>
            <div className="dong-son-divider mt-6 h-px w-full max-w-md" />
          </div>

          {media.length === 0 ? (
            <p className="text-center text-on-surface-variant">Photos coming soon — check back after our next {event.name}.</p>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
              {media.map((m, i) => (
                <button
                  key={m.id}
                  onClick={() => setLightboxIndex(i)}
                  className="group relative aspect-square overflow-hidden rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-vietnamese-red focus:ring-offset-2"
                  aria-label={`Open ${m.altText}`}
                >
                  <img src={m.thumbnailUrl} alt={m.altText} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-vietnamese-red/40 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="material-symbols-outlined text-4xl text-white">zoom_in</span>
                  </span>
                </button>
              ))}
            </div>
          )}

          <div className="mt-10 flex justify-center">
            <Link
              to="/gallery"
              search={{ event: event.slug }}
              className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105 active:scale-95 ${ACCENT_BG[event.accent]}`}
            >
              View Full {event.name} Gallery
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

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
