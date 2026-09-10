import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** Eager only for above-the-fold hero imagery. */
  eager?: boolean;
  sizes?: string;
};

/**
 * Gallery image with native lazy loading and a design-consistent fallback
 * so a missing file never shows a broken image icon.
 */
export function GalleryImage({ src, alt, className = "", eager = false, sizes }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex h-full w-full flex-col items-center justify-center gap-1 bg-rice-paper text-on-surface-variant ${className}`}
      >
        <span className="material-symbols-outlined text-2xl text-imperial-gold" aria-hidden="true">
          image
        </span>
        <span className="px-3 text-center text-[11px] font-medium">Photo unavailable</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      sizes={sizes}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
