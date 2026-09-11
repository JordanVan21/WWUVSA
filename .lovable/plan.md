# Populate and verify the WWU VSA gallery

## Scope
Integrate the real files already stored under `public/images/gallery/` without changing the approved layouts, merchandise, board portraits, or unrelated content.

## Implementation
- Register every eligible public image in `src/data/gallery.ts` using exact browser paths, stable category/year/filename IDs, safe alt text, display order, and selective featured flags.
- Keep filesystem folder categories authoritative. Preserve Turkey Bowl's tournament subtype where supported, keep board media separate, and leave Tết empty because no real Tết files currently exist.
- Remove legacy stock media from the public Gallery while retaining compatibility where older site code still needs it.
- Make event detail Featured Moments read from the shared gallery registry, including correct filtered Gallery links and image fallbacks.
- Replace only well-matched stock imagery on Home, About, Events, and ACCE/program areas with varied real photos from the appropriate category. Keep Tết and any unsuitable placeholders unchanged.
- Use representative real photos for Heritage Night, Turkey Bowl, SpikeFest, ACCE, and general community sections without reusing one photo excessively.

## Verification
- Audit registration completeness, duplicate IDs, exact path existence, category/year accuracy, board/product separation, alt text, and featured selections.
- Test Gallery event/year/type URL filters, empty categories, lightbox opening, previous/next and keyboard controls, event-specific links, and event-only Featured Moments.
- Check desktop, tablet, and mobile layouts for cropping, overflow, broken images, and console errors.
- Run TypeScript checks, configured linting, and the complete production build.

## Current inventory baseline
- 332 real public gallery images found: ACCE 84 (2026), General 17 (2026), Heritage Night 183 (2026), SpikeFest 40 (2026), Turkey Bowl 8 (2025).
- No real Tết images are currently present, so its existing imagery and Gallery empty behavior will remain.
