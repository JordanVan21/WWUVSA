import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  CATEGORY_LABEL,
  getCategoryPreview,
  galleryLinkFor,
  type GalleryCategory,
  type GallerySubtype,
} from "@/data/gallery";
import { GalleryImage } from "@/components/GalleryImage";
import { Lightbox } from "@/components/Lightbox";

type Props = {
  /** Gallery category, e.g. "spikefest" or "turkey-bowl". */
  event: GalleryCategory;
  /** Optional year label, e.g. "2026" or "2025-26". */
  year?: string;
  /** Optional finer grouping, e.g. "banquet". */
  subtype?: GallerySubtype;
  /** Maximum photos to show. */
  limit?: number;
  heading?: string;
  intro?: string;
  /** Override the "view full gallery" destination. */
  galleryHref?: string;
  ctaLabel?: string;
};

/**
 * Shows a limited set of photos for one event, pulled from the central
 * gallery data. No component keeps its own image list.
 */
export function EventGalleryPreview({
  event,
  year,
  subtype,
  limit = 8,
  heading,
  intro,
  galleryHref,
  ctaLabel,
}: Props) {
  const items = getCategoryPreview(event, { year, limit, subtype });
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const label = CATEGORY_LABEL[event] ?? "WWU VSA";
  const href = galleryHref ?? galleryLinkFor(event, year);

  return (
    <section className="bg-rice-paper px-5 py-12 md:px-20 md:py-16">
      <div className="mx-auto max-w-screen-2xl">
        <h2 className="font-display text-3xl text-ink-black md:text-4xl">
          {heading ?? `${label} Moments`}
        </h2>
        {intro && <p className="mt-3 max-w-2xl text-on-surface-variant">{intro}</p>}

        {items.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-dashed border-[color:var(--color-outline-variant)] bg-white/60 p-10 text-center">
            <p className="text-on-surface-variant">
              No photos have been added for this event yet. Check back soon.
            </p>
          </div>
        ) : (
          <>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
              {items.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => setOpenIndex(i)}
                  aria-label={`Open ${item.altText}`}
                  className="group relative aspect-square overflow-hidden rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-vietnamese-red focus:ring-offset-2"
                >
                  <GalleryImage
                    src={item.thumbnailUrl}
                    alt={item.altText}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
            <div className="mt-8">
              <Link
                to={href}
                className="inline-flex items-center gap-2 rounded-full bg-vietnamese-red px-6 py-3 text-sm font-semibold text-white transition hover:bg-vietnamese-red/90"
              >
                {ctaLabel ?? `View all ${label} photos`}
                <span className="material-symbols-outlined text-base" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
            </div>
          </>
        )}

        {openIndex !== null && (
          <Lightbox
            items={items}
            index={openIndex}
            onClose={() => setOpenIndex(null)}
            onIndex={setOpenIndex}
          />
        )}
      </div>
    </section>
  );
}
