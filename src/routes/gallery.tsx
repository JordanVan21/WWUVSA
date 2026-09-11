import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { z } from "zod";
import { fallback, zodValidator } from "@tanstack/zod-adapter";
import {
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  GALLERY_YEARS,
  filterGallery,
  isGalleryCategory,
  type GalleryCategory,
} from "@/data/gallery";
import { Lightbox } from "@/components/Lightbox";
import { GalleryImage } from "@/components/GalleryImage";

const searchSchema = z.object({
  event: fallback(z.string(), "all").default("all"),
  year: fallback(z.string(), "all").default("all"),
  type: fallback(z.string(), "all").default("all"),
});

export const Route = createFileRoute("/gallery")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Gallery | WWU VSA" },
      { name: "description", content: "The full WWU VSA media archive: filter by event, year, and media type." },
      { property: "og:title", content: "Gallery | WWU VSA" },
      { property: "og:description", content: "Photos and videos from Heritage Night, Tết, Turkey Bowl, SpikeFest, meetings, and more." },
    ],
  }),
  component: GalleryPage,
});

const HERO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDfX911ngX4FrCv5JghJ27a1rR4XAMci5E2xAuheVNRT58WnLBida3BSK3-icM9g-cpRMH_kqCpXfgH5D-O7MFu1BXbIV10ey6VBwEfun6S9PpUC09u5kTclw7yLzrTsjt1-DZpV4rH297nf8eGUgpN0JYbyWE1kDSfgdy4EaV8-APYwqx41dPLr_j7713bN53Ce0hXj34NVgfbNNT8k37HaFTlOJL8z69QpLFF28IOLz4gLvqxsv-zoFvjNTBLU9y7kORQIXVWC9s2";

const EVENT_FILTERS: { value: "all" | GalleryCategory; label: string }[] = [
  { value: "all", label: "All" },
  ...GALLERY_CATEGORIES.map((c) => ({ value: c.slug as GalleryCategory, label: c.label })),
];

const TYPE_FILTERS: { value: "all" | "photo" | "video"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "photo", label: "Photos" },
  { value: "video", label: "Videos" },
];

function GalleryPage() {
  const raw = Route.useSearch();
  const navigate = useNavigate({ from: "/gallery" });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const event: "all" | GalleryCategory = isGalleryCategory(raw.event) ? raw.event : "all";
  const year: string | "all" = GALLERY_YEARS.includes(raw.year) ? raw.year : "all";
  const type = raw.type === "photo" || raw.type === "video" ? raw.type : "all";

  const items = useMemo(
    () => filterGallery({ category: event, year, type }),
    [event, year, type],
  );

  const categoryMeta = GALLERY_CATEGORIES.find((c) => c.slug === event);

  const setFilter = (key: "event" | "year" | "type", value: string) => {
    navigate({
      search: (prev: Record<string, string>) => ({ ...prev, [key]: value }),
      replace: true,
    });
  };

  const reset = () => {
    navigate({ search: { event: "all", year: "all", type: "all" }, replace: true });
  };

  const activeCount = GALLERY_ITEMS.length;

  return (
    <>
      <section className="relative flex h-[420px] items-center justify-center overflow-hidden bg-ink-black md:h-[520px]">
        <div className="absolute inset-0 opacity-45">
          <img src={HERO} alt="" className="h-full w-full object-cover" loading="eager" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink-black/85 to-transparent" />
        <div className="relative z-10 px-5 text-center">
          <h1 className="font-display text-4xl text-white md:text-6xl">
            {categoryMeta ? `${categoryMeta.label} Gallery` : "Captured Moments"}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            {categoryMeta
              ? categoryMeta.description
              : "A visual journey through our heritage, community growth, and the vibrant memories we've built together at WWU."}
          </p>
          <div className="dong-son-divider mx-auto mt-6 h-px w-48" />
        </div>
      </section>

      <section className="bg-rice-paper px-5 md:px-20 py-12 md:py-16">
        <div className="mx-auto max-w-screen-2xl">
          {/* Filters */}
          <div className="mb-8 space-y-5 rounded-2xl border border-[color:var(--color-outline-variant)]/60 bg-white/70 p-5 md:p-6">
            <FilterRow label="Event">
              {EVENT_FILTERS.map((f) => (
                <FilterChip
                  key={f.value}
                  active={event === f.value}
                  onClick={() => setFilter("event", f.value)}
                >
                  {f.label}
                </FilterChip>
              ))}
            </FilterRow>

            <FilterRow label="Year">
              <FilterChip active={year === "all"} onClick={() => setFilter("year", "all")}>
                All
              </FilterChip>
              {GALLERY_YEARS.map((y) => (
                <FilterChip
                  key={y}
                  active={year === y}
                  onClick={() => setFilter("year", y)}
                >
                  {y}
                </FilterChip>
              ))}
            </FilterRow>

            <FilterRow label="Media Type">
              {TYPE_FILTERS.map((f) => (
                <FilterChip
                  key={f.value}
                  active={type === f.value}
                  onClick={() => setFilter("type", f.value)}
                >
                  {f.label}
                </FilterChip>
              ))}
            </FilterRow>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <p className="text-sm text-on-surface-variant">
                Showing <span className="font-semibold text-ink-black">{items.length}</span> of {activeCount} items
              </p>
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 rounded-full border border-vietnamese-red/40 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-vietnamese-red hover:bg-vietnamese-red hover:text-white"
              >
                <span className="material-symbols-outlined text-base">refresh</span>
                Reset Filters
              </button>
            </div>
          </div>

          {items.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-[color:var(--color-outline-variant)] bg-white/60 p-12 text-center">
              <p className="font-display text-2xl text-ink-black">
                {categoryMeta
                  ? `No photos have been added for ${categoryMeta.label} yet.`
                  : "No media matches these filters."}
              </p>
              <p className="mt-2 text-on-surface-variant">Try clearing a filter or viewing all media.</p>
              <button
                onClick={reset}
                className="mt-6 inline-flex rounded-full bg-vietnamese-red px-5 py-2 text-sm font-semibold text-white"
              >
                View All Media
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
              {items.map((m, i) => (
                <button
                  key={m.id}
                  onClick={() => setLightboxIndex(i)}
                  className="group relative aspect-square overflow-hidden rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-vietnamese-red focus:ring-offset-2"
                  aria-label={`Open ${m.altText}`}
                >
                  <GalleryImage
                    src={m.thumbnailUrl}
                    alt={m.altText}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-2 top-2 rounded bg-black/55 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                    {m.categoryLabel}
                  </span>
                  {m.mediaType === "video" && (
                    <span className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-black/60 text-white">
                      <span className="material-symbols-outlined text-base">play_arrow</span>
                    </span>
                  )}
                  <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-vietnamese-red/40 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="material-symbols-outlined text-4xl text-white">zoom_in</span>
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          items={items}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndex={setLightboxIndex}
        />
      )}
    </>
  );
}

function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
      <span className="w-24 shrink-0 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
        active
          ? "bg-vietnamese-red text-white shadow-sm"
          : "border border-[color:var(--color-outline-variant)] bg-white text-on-surface-variant hover:border-vietnamese-red hover:text-vietnamese-red"
      }`}
    >
      {children}
    </button>
  );
}
