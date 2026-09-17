/**
 * Resolves a local asset path (e.g. one stored under `public/`) against the
 * app's configured base path (`import.meta.env.BASE_URL`, set via Vite's
 * `base` config — "/" locally, "/WWUVSA/" on GitHub Pages).
 *
 * External URLs and data/blob URIs are returned unchanged.
 */
export function assetPath(path: string): string {
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:") ||
    path.startsWith("blob:")
  ) {
    return path;
  }

  const cleanPath = path.replace(/^\/+/, "");
  const base = import.meta.env.BASE_URL;
  return base.endsWith("/") ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
}
