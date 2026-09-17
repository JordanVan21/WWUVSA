import { cn } from "@/lib/utils";

type Accent = "red" | "gold" | "blue";

export type EditorialFeature = {
  icon?: string;
  title: string;
  description: string;
  accent?: Accent;
};

const accentText: Record<Accent, string> = {
  red: "text-vietnamese-red",
  gold: "text-[color:var(--color-imperial-gold)]",
  blue: "text-viking-blue",
};

const accentSurface: Record<Accent, string> = {
  red: "bg-vietnamese-red/10",
  gold: "bg-imperial-gold/20",
  blue: "bg-viking-blue/10",
};

const accentRule: Record<Accent, string> = {
  red: "from-vietnamese-red",
  gold: "from-imperial-gold",
  blue: "from-viking-blue",
};

export function EditorialFeatureColumns({
  items,
  numbered = false,
  columns = 3,
}: {
  items: EditorialFeature[];
  numbered?: boolean;
  columns?: 3 | 4;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2",
        columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3",
      )}
    >
      {items.map((item, index) => {
        const accent = item.accent ?? (["red", "gold", "blue"][index % 3] as Accent);
        return (
          <article
            key={item.title}
            className={cn(
              "group relative min-w-0 border-b border-[color:var(--color-outline-variant)]/55 py-9 last:border-b-0 sm:px-8 sm:first:pl-0 sm:[&:nth-child(2)]:border-l sm:[&:nth-child(2)]:border-[color:var(--color-outline-variant)]/55",
              columns === 3
                ? "lg:border-b-0 lg:border-l lg:border-[color:var(--color-outline-variant)]/55 lg:first:border-l-0 lg:[&:nth-child(2)]:border-l"
                : "lg:border-b-0 lg:border-l lg:border-[color:var(--color-outline-variant)]/55 lg:first:border-l-0",
            )}
          >
            <div className="flex items-center gap-4">
              {item.icon && (
                <span
                  className={cn(
                    "grid h-12 w-12 shrink-0 place-items-center rounded-full",
                    accentSurface[accent],
                    accentText[accent],
                  )}
                  aria-hidden="true"
                >
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </span>
              )}
              {numbered && (
                <span className={cn("font-display text-2xl", accentText[accent])} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              )}
            </div>
            <h3 className="mt-5 font-display text-2xl text-ink-black md:text-3xl">{item.title}</h3>
            <p className="mt-3 max-w-md text-base leading-relaxed text-on-surface-variant md:text-lg">
              {item.description}
            </p>
            <div
              className={cn(
                "mt-6 h-px w-full bg-gradient-to-r to-transparent opacity-70 transition-all duration-300 motion-reduce:transition-none",
                accentRule[accent],
              )}
              aria-hidden="true"
            />
          </article>
        );
      })}
    </div>
  );
}

export function DividedDetails({
  items,
  accent = "blue",
}: {
  items: { label: string; value: string }[];
  accent?: Accent;
}) {
  return (
    <dl className="divide-y divide-[color:var(--color-outline-variant)]/50 border-y border-[color:var(--color-outline-variant)]/50">
      {items.map((item) => (
        <div
          key={item.label}
          className="grid gap-1 py-4 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6"
        >
          <dt className={cn("text-xs font-semibold uppercase tracking-wider", accentText[accent])}>
            {item.label}
          </dt>
          <dd className="min-w-0 text-sm leading-relaxed text-on-surface-variant">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
