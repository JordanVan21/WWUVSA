# WWU VSA photo library

This folder is the single home for WWU VSA event, program, and organization photography.
Merchandise product images are NOT stored here.

## Folders

```
public/images/gallery/
  general/          general WWU VSA photos (meetings, hangouts, tabling)
  heritage-night/
  tet/
  turkey-bowl/      tournament and banquet photos
  spikefest/
  acce/             ACCE families, mentorship, gatherings
  board/            official executive board portraits (not shown in the public gallery)
```

Inside each folder, create one subfolder per collection year, for example:

```
heritage-night/2024-25/
tet/2025-26/
turkey-bowl/2025/
spikefest/2026/
acce/2025-26/
```

Use the academic-year format (2025-26) for events tied to the school year, and the
calendar year (2026) for events named after a single year, such as Turkey Bowl and SpikeFest.

## Adding a new collection

1. Drop the images into the correct event and year folder.
2. Add one entry per image to `src/data/gallery.ts` (see the file header for the fields).
3. Optionally mark a few images as `featured: true` so they show on event previews.
4. Optionally set `order` to control which images appear first.

No gallery component needs to change when photos are added.
