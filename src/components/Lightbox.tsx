import { useCallback, useEffect } from "react";

/** Structural shape shared by gallery views and previews. */
export type LightboxItem = {
  title: string;
  eventName?: string;
  categoryLabel?: string;
  year?: string | number;
  altText: string;
  mediaType: "photo" | "video";
  mediaUrl: string;
};

type Props = {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onIndex: (i: number) => void;
};

export function Lightbox({ items, index, onClose, onIndex }: Props) {
  const item = items[index];

  const prev = useCallback(
    () => onIndex((index - 1 + items.length) % items.length),
    [index, items.length, onIndex],
  );
  const next = useCallback(
    () => onIndex((index + 1) % items.length),
    [index, items.length, onIndex],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, prev, next]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.eventName ?? item.categoryLabel ?? "WWU VSA"}: ${item.altText}`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-black/95 p-4"
      onClick={onClose}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close viewer"
        className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
      >
        <span className="material-symbols-outlined">close</span>
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="Previous"
        className="absolute left-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="Next"
        className="absolute right-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
      <figure
        className="relative flex max-h-full max-w-6xl flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        {item.mediaType === "video" ? (
          <video
            src={item.mediaUrl}
            controls
            playsInline
            preload="metadata"
            aria-label={item.altText}
            className="h-auto max-h-[calc(100vh-9rem)] w-auto max-w-full rounded-lg object-contain"
          />
        ) : (
          <img
            src={item.mediaUrl}
            alt={item.altText}
            className="h-auto max-h-[calc(100vh-9rem)] w-auto max-w-full rounded-lg object-contain"
          />
        )}
        <figcaption className="text-center text-sm text-white/80">
          <div className="font-semibold text-white">{item.title}</div>
          <div>
            {[item.eventName ?? item.categoryLabel, item.year].filter(Boolean).join(" · ")}
            {(item.eventName ?? item.categoryLabel ?? item.year) ? " · " : ""}
            {index + 1} / {items.length}
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
