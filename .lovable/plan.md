# Full media, board, and branding update

## Goal
Integrate every eligible current gallery file, add playable event videos, install the supplied officer portraits and official logo, and preserve the approved site design.

## Implementation

1. **Reconcile the media library**
   - Compare every browser-viewable photo and video under the six approved gallery categories with the shared registry.
   - Register new files with stable IDs, correct category/year/type, useful event-level alt text, and existing ordering conventions.
   - Remove or repair registry references whose exact filesystem paths changed, while retaining curated descriptions and featured choices where possible.
   - Exclude exact binary duplicates, unsupported source formats, the separate fan-dance folder, board portraits, and branding assets from the public gallery.

2. **Validate and integrate videos**
   - Validate each video’s container, codecs, dimensions, duration, and readability.
   - Register all valid Heritage Night, Tết, Turkey Bowl, and other event videos in the shared gallery source.
   - Generate representative poster images where needed without changing the original videos.
   - Feature one strongest available video on each applicable event page. Keep all videos available through event and media-type URL filters.

3. **Install official branding**
   - Upload the supplied official logo through the project asset system and reuse that single source in the header and footer.
   - Preserve its proportions with contained sizing inside the existing header/footer layouts.
   - Create a small optimized favicon from the same logo, update the browser icon reference, and remove the old temporary favicon.

4. **Update the board portraits**
   - Upload the three supplied portraits through the project asset system and map them exactly: IMG_5998 to Kenzie Vu, IMG_5665 to Tommy Ngo, and IMG_5854 to Elizabeth Kirse.
   - Keep the shared board data source and all 12 members.
   - Replace every other reused/stock portrait with one consistent “Photo not currently available” card state.
   - Preserve portrait proportions, names, roles, carousel controls, keyboard support, and 4/2–3/1 responsive visibility.

5. **Curate real imagery without redesigning**
   - Review prominent heroes, cards, program imagery, and featured moments against the expanded registry.
   - Replace only clearly obsolete placeholders or weak reused media when an appropriate, sufficiently large real image exists.
   - Keep Wavy Fan Dance references limited to verified fan-dance photos from Heritage Night or Tết without duplicating or reclassifying them.
   - Preserve natural gallery ratios and original-quality lightbox sources.

6. **Verification**
   - Audit unique IDs, duplicate sources/content, missing paths, General 2024 loading, category/year/type filters, and filtered URLs.
   - Browser-test event videos, lightbox behavior, board navigation, official logo, unavailable-photo states, and overflow at desktop, laptop, tablet, mobile portrait, and mobile landscape sizes.
   - Check console/network failures, TypeScript, lint, the full production build, and the site-wide no-em-dash requirement.

## Technical details
- The filesystem remains the source of truth; `src/data/gallery.ts` remains the single public media registry.
- HTML5 videos use controls, `playsInline`, `preload="metadata"`, no autoplay, and contained natural proportions.
- Uploaded board and logo files remain outside public gallery metadata and are referenced through immutable asset pointers; only the optimized favicon is stored directly in `public/`.
- Exact duplicate files are not registered twice, even when multiple filename copies exist.
