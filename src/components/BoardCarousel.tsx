import { useCallback, useEffect, useRef, useState } from "react";
import { BOARD_MEMBERS } from "@/lib/board";

const GAP = 24;

function perPageFor(width: number) {
  if (width < 560) return 1;
  if (width < 900) return 2;
  if (width < 1200) return 3;
  return 4;
}

export function BoardCarousel() {
  const members = BOARD_MEMBERS;
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);
  const [page, setPage] = useState(0);
  const dragStart = useRef<number | null>(null);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    ro.observe(el);
    setWidth(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  const perPage = perPageFor(width || 1200);
  const pageCount = Math.max(1, Math.ceil(members.length / perPage));
  const cardWidth = width > 0 ? (width - GAP * (perPage - 1)) / perPage : 280;
  const totalWidth = members.length * cardWidth + (members.length - 1) * GAP;
  const maxOffset = Math.max(0, totalWidth - width);
  const offset = Math.min(page * (width + GAP), maxOffset);

  useEffect(() => {
    setPage((p) => Math.min(p, pageCount - 1));
  }, [pageCount]);

  const go = useCallback(
    (dir: number) => setPage((p) => Math.min(pageCount - 1, Math.max(0, p + dir))),
    [pageCount],
  );

  const atStart = page === 0;
  const atEnd = page >= pageCount - 1;

  return (
    <div>
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl md:text-4xl">Meet the Board</h2>
          <p className="mt-2 text-on-surface-variant">The passionate team behind our current vision.</p>
        </div>
        <div className="flex gap-2">
          <button
            aria-label="Previous board members"
            onClick={() => go(-1)}
            disabled={atStart}
            className="grid h-11 w-11 place-items-center rounded-full bg-white text-viking-blue shadow-md transition hover:bg-viking-blue hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-viking-blue disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-viking-blue"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            aria-label="Next board members"
            onClick={() => go(1)}
            disabled={atEnd}
            className="grid h-11 w-11 place-items-center rounded-full bg-white text-viking-blue shadow-md transition hover:bg-viking-blue hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-viking-blue disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-viking-blue"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>

      <div
        ref={viewportRef}
        role="group"
        aria-roledescription="carousel"
        aria-label="WWU VSA board members and interns"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
          if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
        }}
        onTouchStart={(e) => { dragStart.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          const start = dragStart.current;
          dragStart.current = null;
          if (start == null) return;
          const dx = e.changedTouches[0].clientX - start;
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        }}
        className="overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-viking-blue"
      >
        <div
          className="flex motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out"
          style={{ gap: GAP, transform: `translateX(-${offset}px)` }}
        >
          {members.map((m) => (
            <div
              key={m.id}
              className="group shrink-0"
              style={{ width: cardWidth }}
              aria-hidden={undefined}
            >
              <div className="relative mb-3 overflow-hidden rounded-2xl border-2 border-rice-paper shadow-sm">
                <img
                  src={m.imageUrl}
                  alt={m.altText}
                  loading="lazy"
                  width={400}
                  height={500}
                  className="aspect-[4/5] w-full object-cover transition-transform motion-safe:group-hover:scale-105"
                />
                {m.major && (
                  <div className={`absolute bottom-0 left-0 w-full translate-y-full p-3 text-xs text-white backdrop-blur-sm transition-transform group-hover:translate-y-0 ${m.accent ?? "bg-ink-black/90"}`}>
                    Major: {m.major}
                  </div>
                )}
              </div>
              <h4 className="font-display text-xl text-ink-black">{m.name}</h4>
              <p className={`text-xs font-semibold uppercase tracking-wider ${m.roleColor ?? "text-on-surface-variant"}`}>
                {m.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {pageCount > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to board members page ${i + 1}`}
              aria-current={i === page}
              onClick={() => setPage(i)}
              className={`h-2.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-viking-blue ${
                i === page ? "w-6 bg-vietnamese-red" : "w-2.5 bg-on-surface-variant/30 hover:bg-on-surface-variant/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
