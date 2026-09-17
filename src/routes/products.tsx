import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Merch | WWU VSA" },
      { name: "description", content: "WWU VSA merchandise: shirts, hoodies, sweatpants, and stickers. DM @wwuvsa for current availability, sizes, and pricing." },
      { property: "og:title", content: "Merch | WWU VSA" },
      { property: "og:description", content: "Represent the WWU VSA community. Contact us for current sizes and availability." },
    ],
  }),
  component: ProductsPage,
});

type Product = {
  title: string;
  variant?: string;
  tagline: string;
  border: string;
  accent: string;
  badge?: { text: string; color: string };
  img?: string;
  alt?: string;
  icon?: string;
  apparel?: boolean;
};

const products: Product[] = [
  {
    title: "VSA 24-25 Shirt",
    tagline: "Featuring our Soi Sáng Con Đường design with Vietnamese lettering and lantern-inspired details.",
    border: "border-vietnamese-red",
    accent: "text-vietnamese-red",
    badge: { text: "Latest Design", color: "bg-vietnamese-red" },
    img: "https://i.imgur.com/gV5YbD2.png",
    alt: "WWU VSA 2024-25 shirt",
    apparel: true,
  },
  {
    title: "VSA 23-24 Hoodie",
    tagline: "Cozy WWU VSA apparel featuring a bold design made for chilly days, events, and everyday wear.",
    border: "border-viking-blue",
    accent: "text-viking-blue",
    img: "https://i.imgur.com/Bvcezad.png",
    alt: "WWU VSA 2023-24 hoodie",
    apparel: true,
  },
  {
    title: "VSA 23-24 Shirt",
    tagline: "A comfortable WWU VSA shirt celebrating Vietnamese heritage through a bold cultural design.",
    border: "border-imperial-gold",
    accent: "text-[color:var(--color-tertiary)]",
    img: "https://i.imgur.com/9sP9hq2.png",
    alt: "WWU VSA 2023-24 shirt",
    apparel: true,
  },
  {
    title: "VSA 25-26 Sweatpants",
    tagline: "Comfortable WWU VSA sweatpants designed for everyday wear while representing the VSA community.",
    border: "border-vietnamese-red",
    accent: "text-vietnamese-red",
    badge: { text: "New", color: "bg-vietnamese-red" },
    img: "https://i.imgur.com/4YyTmLR.png",
    alt: "WWU VSA 2025-26 sweatpants",
    apparel: true,
  },
  {
    title: "VSA Sticker",
    tagline: "A WWU VSA logo sticker representing community, connection, and pride in our organization.",
    border: "border-viking-blue",
    accent: "text-viking-blue",
    img: "https://i.imgur.com/fu1dQgu.png",
    alt: "WWU VSA logo sticker",
  },
  {
    title: "VSA Phoenix Sticker",
    tagline: "A vibrant phoenix design inspired by strength, resilience, and Vietnamese cultural pride.",
    border: "border-imperial-gold",
    accent: "text-[color:var(--color-tertiary)]",
    img: "https://i.imgur.com/BuCb7WL.png",
    alt: "WWU VSA phoenix sticker",
  },
  {
    title: "I Heart VSA Sticker",
    tagline: "A playful I Heart VSA design made for showing your love and pride for the WWU VSA community.",
    border: "border-viking-blue",
    accent: "text-viking-blue",
    img: "https://i.imgur.com/jL3nFsm.png",
    alt: "WWU VSA I Heart VSA sticker",
  },
  {
    title: "I Heart VSA Sticker",
    variant: "Black Version",
    tagline: "A black variation of our I Heart VSA sticker for another way to represent the WWU VSA community.",
    border: "border-outline",
    accent: "text-on-surface-variant",
    img: "https://i.imgur.com/YA2IwWQ.png",
    alt: "WWU VSA I Heart VSA sticker black version",
  },
];

function ProductsPage() {
  return (
    <>
      <header className="relative overflow-hidden bg-rice-paper px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-16 pb-12">
        <div className="mx-auto max-w-site text-center">
          <h1 className="mx-auto max-w-2xl font-display text-4xl leading-tight text-on-surface md:text-6xl">
            WWU VSA Merch
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-on-surface-variant">
            Celebrate our heritage and represent the community. Every purchase directly supports
            WWU VSA's cultural programs and events.
          </p>
          <div className="dong-son-divider mx-auto mt-8 h-px w-32" />
        </div>
      </header>

      <section className="bg-surface px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 md:py-24">
        <div className="mx-auto max-w-site">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <article key={p.title + (p.variant ?? "")} className={`group flex flex-col overflow-hidden rounded-2xl border-t-4 ${p.border} bg-white shadow-sm transition-all duration-300 hover:shadow-xl`}>
                <div className="relative aspect-square overflow-hidden bg-surface-container">
                  {p.badge && (
                    <div className={`absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md ${p.badge.color}`}>
                      {p.badge.text}
                    </div>
                  )}
                  {p.img ? (
                    <img src={p.img} alt={p.alt ?? p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="grid h-full w-full place-items-center bg-surface-container-high text-on-surface-variant">
                      <div className="flex flex-col items-center gap-2 px-6 text-center">
                        <span className="material-symbols-outlined text-5xl">{p.icon}</span>
                        <span className="text-xs font-medium uppercase tracking-wide">Photo coming soon</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h3 className={`font-display text-xl text-on-surface`}>
                    {p.title}
                    {p.variant && <span className={`ml-2 align-middle text-xs font-bold uppercase tracking-wide ${p.accent}`}>{p.variant}</span>}
                  </h3>
                  <p className="text-sm text-on-surface-variant">{p.tagline}</p>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-3">
                    <a
                      href="https://www.instagram.com/wwuvsa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 text-sm font-semibold ${p.accent} hover:underline`}
                    >
                      {p.apparel ? "Ask About Sizes" : "Ask About Availability"}
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                    <Link to="/contact" className="text-xs font-medium text-on-surface-variant hover:underline">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 md:py-24">
        <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="space-y-5">
            <h2 className="font-display text-3xl text-on-surface md:text-4xl">How to Get Yours</h2>
            <p className="text-lg text-on-surface-variant">
              We offer two easy ways to pick up merch from the current collection.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-vietnamese-red text-white">
                  <span className="material-symbols-outlined">groups</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wide">In-Person at Meetings</h4>
                  <p className="text-on-surface-variant">Visit our general body meetings to see items and pay via cash or Venmo.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-viking-blue text-white">
                  <span className="material-symbols-outlined">send</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wide">DM on Instagram</h4>
                  <p className="text-on-surface-variant">
                    Message{" "}
                    <a href="https://www.instagram.com/wwuvsa" target="_blank" rel="noopener noreferrer" className="font-bold text-viking-blue hover:underline">@wwuvsa</a>{" "}
                    for current sizes, availability, and pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border-l-4 border-imperial-gold bg-white/70 p-8">
            <div className="absolute -right-8 -top-8 opacity-10">
              <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
            </div>
            <h3 className="font-display text-2xl text-on-surface">Support the Club</h3>
            <p className="mt-3 text-on-surface-variant">Every purchase is more than merch. Proceeds help fund Heritage Night, cultural workshops, and community events throughout the year.</p>
            <p className="mt-6 rounded-lg border border-[color:var(--color-outline-variant)]/40 bg-white/60 p-4 text-xs text-on-surface-variant">
              Merchandise is not sold directly through this website. For current availability, sizes, and pricing, DM us on Instagram at{" "}
              <a href="https://www.instagram.com/wwuvsa" target="_blank" rel="noopener noreferrer" className="font-semibold text-viking-blue hover:underline">@wwuvsa</a>{" "}
              or email <a href="mailto:westernvsa@gmail.com" className="font-semibold text-viking-blue hover:underline">westernvsa@gmail.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
