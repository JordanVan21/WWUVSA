import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products | WWU VSA" },
      { name: "description", content: "Limited edition merch supporting WWU VSA cultural programs: tees, hoodies, pins, and more." },
      { property: "og:title", content: "Products | WWU VSA" },
      { property: "og:description", content: "Celebrate our heritage and fuel our future. All proceeds support VSA programs." },
    ],
  }),
  component: ProductsPage,
});

type Product = {
  title: string;
  tagline: string;
  price: string;
  border: string;
  priceColor: string;
  badge?: { text: string; color: string };
  img?: string;
  icon?: string;
};

const products: Product[] = [
  { title: "'Soi Sang Con Duong' Tee", tagline: "Light the Path. Limited edition essential.", price: "$20", border: "border-vietnamese-red", priceColor: "text-vietnamese-red", badge: { text: "Limited Edition", color: "bg-vietnamese-red" }, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTd5w7SlDJRTuL6YD1XjRq7R88i9Lg7juHqqyUK0akTeqszRGLYgNtR5mQOrA0vBvS3xi9C_G4bxJQhgmz_aJAoFmXypD-tDXX98knt0yZtOQ9-o7jHXvOGzoRXVp1lOdNUJFbG_bbmkNOZR0L3JSHWBf4T0Tb6v_Yp8FmCU02b-Y0HSnSsd5pZOySiLHleJz1Bbrlcp3E7s2jEJQl1TTsgim0mipMCcMze9NuLVcKFT7YTXV6k1FE6mFehMEaGDFj26kFF69V11dD" },
  { title: "WWU VSA Hoodie", tagline: "Premium comfort for campus life.", price: "$45", border: "border-viking-blue", priceColor: "text-viking-blue", badge: { text: "Limited Edition", color: "bg-viking-blue" }, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ35cKNdHcgbF90_m0EgcnVRhSyE3s7vG2HQvFFm58n_c8Dm0eDUx7czIr5kz06M_Gl0q9U5qIGF013BmZHk-IIAUAMVM4ALVkGmHBx2nULMBxQFz4c8jm7jO609AExyzKbvt7pBcBgdlRwhBo9riRX0_xLlnFvl0bOKnLGtYdgusvSuT41rs-qcVgVy6rt-_RBesgs-OSXMMQxe741EGsfEERPhutCvVoC3Cbz8zA-wYxWTc3rpNImhPdRUSiqL4U8M9qGclYxfbE" },
  { title: "Heritage Enamel Pins", tagline: "A touch of tradition for your bag.", price: "$10", border: "border-imperial-gold", priceColor: "text-[color:var(--color-tertiary)]", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8UPFJJVE2FJIj0oNMji8qf3Gzi4sR1OCysnC9QBLCkWH1dIrsVSx7XJ1NsOHSvCpYNnuF2Fjj7FNe5iEiPMoim0DM31454xj_7yY0yVXZ2d1LPwozTYjlih2OUq_Xbgr3OjMy3RwW9R46qcywXNp1bq6qeCadFBgDHZI_cosfdwndDUmevCR1C1SzV_9NDP8Id1Q7vOzvg7jPpwPNJQKxL6d2UvYO-2yeXJSZD03YPUwMC-bEaPauwOvB9h4GuK5XJ8zl7LqrqWTB" },
  { title: "Lotus Crest Stickers", tagline: "Durable vinyl. Perfect for laptops.", price: "$3", border: "border-outline", priceColor: "text-on-surface-variant", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCTzacWleivIYoyFvvjR3XVbZygu6iUAUFO8xh5IG77KLEMrk71rBQo0P5SSThHNJkz2-uYumqvKFHrgafUwsuTJuQvYonJ_PIeV6VZPx5B5E5-NEkCTGEHeWuGg03fW2qCetGLbdh8IKeAKzLaSSjkK4HpvQmE3cIuBCsSHpL6xUAe6xDqIDCdJP5zXGkQBF291-20TAy-gKdp7xE-HjLqjnN4NCjkt_oClqBrLWleSX1k8-joD8oQQF03zp5c0D-n7pKRT_hdWPl" },
  { title: "Canvas Tote", tagline: "Eco-friendly cultural carryall.", price: "$15", border: "border-vietnamese-red", priceColor: "text-vietnamese-red", icon: "shopping_bag" },
  { title: "VSA Dad Hat", tagline: "Embroidered classic fit.", price: "$25", border: "border-viking-blue", priceColor: "text-viking-blue", icon: "hat_graduation" },
  { title: "Pattern Lanyard", tagline: "Dong Son inspired patterns.", price: "$8", border: "border-imperial-gold", priceColor: "text-[color:var(--color-tertiary)]", icon: "badge" },
  { title: "Acrylic Keychain", tagline: "Double-sided charm.", price: "$6", border: "border-outline", priceColor: "text-on-surface-variant", icon: "key" },
  { title: "Heritage Journal", tagline: "Dotted grid for your ideas.", price: "$12", border: "border-vietnamese-red", priceColor: "text-vietnamese-red", icon: "menu_book" },
  { title: "Ceramic Mug", tagline: "Matte finish with gold logo.", price: "$18", border: "border-viking-blue", priceColor: "text-viking-blue", icon: "coffee" },
  { title: "Crew Socks", tagline: "Comfortable cultural patterns.", price: "$10", border: "border-imperial-gold", priceColor: "text-[color:var(--color-tertiary)]", icon: "checkroom" },
  { title: "Art Poster", tagline: "18x24 high-quality print.", price: "$12", border: "border-outline", priceColor: "text-on-surface-variant", icon: "image" },
];

function ProductsPage() {
  return (
    <>
      <header className="relative overflow-hidden bg-rice-paper px-5 md:px-20 pt-16 pb-12">
        <div className="mx-auto max-w-screen-2xl text-center">
          <h1 className="mx-auto max-w-2xl font-display text-4xl leading-tight text-on-surface md:text-6xl">
            Limited Edition Merch
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-on-surface-variant">
            Celebrate our heritage and fuel our future. All proceeds directly support WWU VSA's
            cultural programs and community initiatives.
          </p>
          <div className="dong-son-divider mx-auto mt-8 h-px w-32" />
        </div>
      </header>

      <section className="bg-surface px-5 md:px-20 py-16 md:py-24">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <article key={p.title} className={`group overflow-hidden rounded-2xl border-t-4 ${p.border} bg-white shadow-sm transition-all duration-300 hover:shadow-xl`}>
                <div className="relative aspect-[4/5] overflow-hidden bg-surface-container">
                  {p.badge && (
                    <div className={`absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md ${p.badge.color}`}>
                      {p.badge.text}
                    </div>
                  )}
                  {p.img ? (
                    <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  ) : (
                    <div className="grid h-full w-full place-items-center bg-surface-container-high text-on-surface-variant">
                      <span className="material-symbols-outlined text-5xl">{p.icon}</span>
                    </div>
                  )}
                </div>
                <div className="space-y-1 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl text-on-surface">{p.title}</h3>
                    <span className={`shrink-0 text-sm font-bold ${p.priceColor}`}>{p.price}</span>
                  </div>
                  <p className="text-sm text-on-surface-variant">{p.tagline}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container px-5 md:px-20 py-16 md:py-24">
        <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="space-y-5">
            <h2 className="font-display text-3xl text-on-surface md:text-4xl">How to Purchase</h2>
            <p className="text-lg text-on-surface-variant">
              We currently offer two convenient ways to get your hands on our limited edition collection.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-vietnamese-red text-white">
                  <span className="material-symbols-outlined">groups</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wide">In-Person at Meetings</h4>
                  <p className="text-on-surface-variant">Visit our weekly general body meetings to see samples and pay via cash or Venmo.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-viking-blue text-white">
                  <span className="material-symbols-outlined">send</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wide">DM on Instagram</h4>
                  <p className="text-on-surface-variant">Send a direct message to <span className="font-bold text-viking-blue">@wwuvsa</span> with your order details and size.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border-l-4 border-imperial-gold bg-white/70 p-8">
            <div className="absolute -right-8 -top-8 opacity-10">
              <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
            </div>
            <h3 className="font-display text-2xl text-on-surface">Support the Club</h3>
            <p className="mt-3 text-on-surface-variant">Every purchase is more than a piece of clothing. 100% of proceeds fund Heritage Night, service trips, and cultural workshops throughout the year.</p>
            <div className="mt-6 rounded-lg border border-[color:var(--color-outline-variant)]/40 bg-white/60 p-4 text-xs italic text-on-surface-variant">
              Disclaimer: All sales are final. Sizes are subject to availability. Please contact a board member for exchange inquiries regarding defective items.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}