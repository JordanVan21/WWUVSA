import { motion } from "framer-motion";
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
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className={cn(
              "group relative min-w-0 border-b border-[color:var(--color-outline-variant)]/55 py-7 last:border-b-0 sm:px-7 sm:first:pl-0 sm:nth-[2]:border-l sm:nth-[2]:border-[color:var(--color-outline-variant)]/55",
              columns === 3
                ? "lg:border-b-0 lg:border-l lg:border-[color:var(--color-outline-variant)]/55 lg:first:border-l-0 lg:nth-[2]:border-l"
                : "lg:border-b-0 lg:border-l lg:border-[color:var(--color-outline-variant)]/55 lg:first:border-l-0",
            )}
          >
            <div className="flex items-center gap-3">
              {item.icon && (
                <span
                  className={cn(
                    "grid h-10 w-10 shrink-0 place-items-center rounded-full",
                    accentSurface[accent],
                    accentText[accent],
                  )}
                  aria-hidden="true"
                >
                  <span className="material-symbols-outlined text-xl">{item.icon}</span>
                </span>
              )}
              {numbered && (
                <span className={cn("font-display text-xl", accentText[accent])} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              )}
            </div>
            <h3 className="mt-4 font-display text-xl text-ink-black md:text-2xl">{item.title}</h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-on-surface-variant md:text-base">
              {item.description}
            </p>
            <div
              className={cn(
                "mt-5 h-px w-full bg-gradient-to-r to-transparent opacity-70 transition-all duration-300 motion-reduce:transition-none",
                accentRule[accent],
              )}
              aria-hidden="true"
            />
          </motion.article>
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
        <div key={item.label} className="grid gap-1 py-4 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6">
          <dt className={cn("text-xs font-semibold uppercase tracking-wider", accentText[accent])}>
            {item.label}
          </dt>
          <dd className="min-w-0 text-sm leading-relaxed text-on-surface-variant">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}