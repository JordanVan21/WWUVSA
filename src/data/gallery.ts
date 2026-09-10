/**
 * Central WWU VSA gallery metadata.
 *
 * This file is the single source of truth for photos and videos shown anywhere
 * on the site (main gallery, event pages, home page sections). Define a photo
 * once here; every page reads it through the filter helpers below.
 *
 * ---------------------------------------------------------------------------
 * HOW TO ADD PHOTOS (for future board members)
 * ---------------------------------------------------------------------------
 * 1. Put the image files in public/images/gallery/<event>/<year>/
 * 2. Add one entry per image to GALLERY_PHOTOS below:
 *
 *    {
 *      id: "spikefest-2026-01",
 *      src: "/images/gallery/spikefest/2026/01.jpg",
 *      category: "spikefest",
 *      year: "2026",
 *      type: "photo",
 *      alt: "WWU VSA members playing volleyball at SpikeFest",
 *      caption: "Pool play on Saturday morning",   // optional
 *      featured: true,                              // optional
 *      order: 1,                                    // optional
 *      subtype: "tournament",                       // optional (Turkey Bowl: tournament | banquet)
 *    }
 *
 * 3. `alt` is required and must describe the photo. Never use a file name as
 *    alt text, and do not name people unless their name was explicitly supplied.
 * ---------------------------------------------------------------------------
 */

import { MEDIA, type EventSlug, type MediaItem } from "@/lib/media";

/** Gallery categories: the event slugs plus program and organization buckets. */
export type GalleryCategory = EventSlug | "acce" | "general";

/** Optional finer grouping inside a category (Turkey Bowl uses these). */
export type GallerySubtype = "tournament" | "banquet" | "families" | "community" | string;

export type GalleryMediaType = "photo" | "video";

export type GalleryPhoto = {
  id: string;
  /** Path under public/, e.g. "/images/gallery/tet/2025-26/01.jpg" */
  src: string;
  /** Optional separate thumbnail; falls back to `src`. */
  thumbnail?: string;
  category: GalleryCategory;
  /** Academic year ("2025-26") or calendar year ("2026"). Optional. */
  year?: string;
  type: GalleryMediaType;
  subtype?: GallerySubtype;
  title?: string;
  caption?: string;
  /** Required, meaningful description of the image. */
  alt: string;
  featured?: boolean;
  order?: number;
};

export const GALLERY_CATEGORIES: {
  slug: GalleryCategory;
  label: string;
  /** Folder in public/images/gallery where these photos live. */
  folder: string;
  /** Shown in the gallery hero when this category is selected. */
  description: string;
}[] = [
  {
    slug: "general",
    label: "General",
    folder: "general",
    description: "Everyday moments from WWU VSA: hangouts, tabling, and time spent together on campus.",
  },
  {
    slug: "heritage-night",
    label: "Heritage Night",
    folder: "heritage-night",
    description: "Performances, storytelling, and community from WWU VSA's cultural showcase at the Viking Union.",
  },
  { slug: "tet", label: "Tết", folder: "tet", description: "Our Lunar New Year celebration with food, tradition, and community." },
  {
    slug: "turkey-bowl",
    label: "Turkey Bowl",
    folder: "turkey-bowl",
    description: "Tournament and banquet photos from the Northwest VSA Turkey Bowl weekend.",
  },
  {
    slug: "spikefest",
    label: "SpikeFest",
    folder: "spikefest",
    description: "Volleyball, teams, and supporters from the Northwest VSA community at SpikeFest.",
  },
  {
    slug: "acce",
    label: "ACCE",
    folder: "acce",
    description: "ACCE families, mentorship, and gatherings across the program.",
  },
  { slug: "fundraisers", label: "Fundraisers", folder: "general", description: "Fundraising events run by and for our community." },
  { slug: "general-meetings", label: "General Meetings", folder: "general", description: "Weekly meetings where the community comes together." },
  { slug: "community-events", label: "Community Events", folder: "general", description: "Collaborations and gatherings around Bellingham and the region." },
  { slug: "other", label: "Other", folder: "general", description: "More moments from the WWU VSA community." },
];

export const CATEGORY_LABEL: Record<string, string> = Object.fromEntries(
  GALLERY_CATEGORIES.map((c) => [c.slug, c.label]),
);

export function isGalleryCategory(value: string): value is GalleryCategory {
  return GALLERY_CATEGORIES.some((c) => c.slug === value);
}

/**
 * Real WWU VSA photo entries live here. Empty until collections are added.
 * Board photos belong in BOARD_PHOTOS below so they stay out of the public gallery.
 */
export const GALLERY_PHOTOS: GalleryPhoto[] = [];

/** Official executive board portraits. Intentionally NOT part of the public gallery feed. */
export const BOARD_PHOTOS: GalleryPhoto[] = [];

/** A single normalized shape used by the gallery grid, previews, and lightbox. */
export type GalleryItem = {
  id: string;
  title: string;
  caption?: string;
  category: GalleryCategory;
  categoryLabel: string;
  year?: string;
  mediaType: GalleryMediaType;
  subtype?: GallerySubtype;
  thumbnailUrl: string;
  mediaUrl: string;
  altText: string;
  featured: boolean;
  order: number;
};

function fromGalleryPhoto(p: GalleryPhoto, index: number): GalleryItem {
  return {
    id: p.id,
    title: p.title ?? CATEGORY_LABEL[p.category] ?? "WWU VSA",
    caption: p.caption,
    category: p.category,
    categoryLabel: CATEGORY_LABEL[p.category] ?? "WWU VSA",
    year: p.year,
    mediaType: p.type,
    subtype: p.subtype,
    thumbnailUrl: p.thumbnail ?? p.src,
    mediaUrl: p.src,
    altText: p.alt,
    featured: p.featured ?? false,
    order: p.order ?? index,
  };
}

function fromMediaItem(m: MediaItem, index: number): GalleryItem {
  return {
    id: m.id,
    title: m.title,
    caption: m.description,
    category: m.eventSlug,
    categoryLabel: m.eventName,
    year: String(m.year),
    mediaType: m.mediaType,
    thumbnailUrl: m.thumbnailUrl,
    mediaUrl: m.mediaUrl,
    altText: m.altText,
    featured: m.featured ?? false,
    order: m.displayOrder ?? index,
  };
}

/** Every publicly visible item: existing official media plus the new photo library. */
export const GALLERY_ITEMS: GalleryItem[] = [
  ...MEDIA.map(fromMediaItem),
  ...GALLERY_PHOTOS.map(fromGalleryPhoto),
];

/** Year labels present in the library, newest first. */
export const GALLERY_YEARS: string[] = Array.from(
  new Set(GALLERY_ITEMS.map((i) => i.year).filter((y): y is string => Boolean(y))),
).sort((a, b) => b.localeCompare(a));

/** Categories that actually have media, in the order defined above. */
export const ACTIVE_CATEGORIES = GALLERY_CATEGORIES.filter((c) =>
  GALLERY_ITEMS.some((i) => i.category === c.slug),
);

function byOrder(a: GalleryItem, b: GalleryItem) {
  return a.order - b.order;
}

export function filterGallery(opts: {
  category?: GalleryCategory | "all";
  year?: string | "all";
  type?: GalleryMediaType | "all";
  subtype?: GallerySubtype | "all";
} = {}): GalleryItem[] {
  const { category = "all", year = "all", type = "all", subtype = "all" } = opts;
  return GALLERY_ITEMS.filter((i) => {
    if (category !== "all" && i.category !== category) return false;
    if (year !== "all" && i.year !== year) return false;
    if (type !== "all" && i.mediaType !== type) return false;
    if (subtype !== "all" && i.subtype !== subtype) return false;
    return true;
  }).sort(byOrder);
}

/** Featured items first, falling back to everything in the category. */
export function getCategoryPreview(
  category: GalleryCategory,
  opts: { year?: string; limit?: number; subtype?: GallerySubtype } = {},
): GalleryItem[] {
  const { year, limit = 8, subtype } = opts;
  const pool = filterGallery({
    category,
    year: year ?? "all",
    subtype: subtype ?? "all",
  });
  const featured = pool.filter((i) => i.featured);
  return (featured.length > 0 ? featured : pool).slice(0, limit);
}

export function getFeaturedItems(limit = 12): GalleryItem[] {
  return GALLERY_ITEMS.filter((i) => i.featured).sort(byOrder).slice(0, limit);
}

/** Link to the main gallery with filters applied, e.g. /gallery?event=spikefest&year=2026 */
export function galleryLinkFor(category: GalleryCategory, year?: string): string {
  const params = new URLSearchParams({ event: category });
  if (year) params.set("year", year);
  return `/gallery?${params.toString()}`;
}
