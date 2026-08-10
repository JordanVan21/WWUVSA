import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MISSION_PARAGRAPHS } from "@/lib/mission";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WWU VSA — Vietnamese Student Association" },
      {
        name: "description",
        content:
          "Heritage in heart, horizon in sight. Bridging Vietnamese cultural heritage with university leadership at Western Washington University.",
      },
      { property: "og:title", content: "WWU VSA — Vietnamese Student Association" },
      {
        property: "og:description",
        content: "Community, culture, and leadership at Western Washington University.",
      },
    ],
  }),
  component: HomePage,
});

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBrG1VQZOamnusybK_XYk8nRln9wSuc2hzmOypzai8Ak8UOW384_Hm89NormpQZLFl9uXPl5Ln8eq_hUyglASS9IMT4r7WPUR7ywwSPPu8g46yb1lJuKS2V9Yv6tilnb1wA-GoynP1F9d2NGb18VuX2HQU6Lxj93Uj3QFUm-cUP-z7bsTZLqqnczKr14srEno91dSPWo_8i-QBzPKO6kxyPKWoli_vMAHUl-iiS_l1_mo0fc7GvOP45tXjx5eFjHJr-tW9DF-bGXsgG";
const WELCOME_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAG_c2hqhx_3JvU7NR7CmMsUbWNmPcL20cGKKwUlUb7jJzaLC6HsaFHTXv52TTV87TLG2v2aORcArH5rzp1x4QuI6MdZaWd7CSReNL5dQjPyRYhRZxOdWyYj2LTM5z-BV2LOgz0OuRfRSxKNFdxpkbupq2Mb3r98XaSGIGUvtP_HHK6HMAf6vFHwtL5r1eNJ9oLcdYxedpkfKMYXYOz5jy-Un0M_myOO78PhLabMel97l4biMTzNTnau4XT_WYEr-8pmuHXdf2VbIjx";
const ACCE_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAfvNsQPY_vy3tadTkiVMCNI3BZBL5dIDsMW3YXyD7BtwYyPLYrnUE8AtGTFED1wr91tQ72KyY1MFWo7NczBzji8l8lRVZV5HqO8Mm2qAHHDvyN4WeaTaHH3hIoDyKnUGs1jNuy3DhsJiAedGqkI6_Cb8w6NVL7dwZ5FeuzJtgXhD4pnjbZ9krQsG_90tZDNAH7o0FzbYphYOY_vkwwHkhIilJnx6gu-hKkl4iAba9h5rlXXS2vTQnpCnZJqv2jugRF_UehGbWulatt";
const FAN_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA8taNmeh1Rp_lSUTYkYh4ZFy80TT21x8KIe9ze--W1miMgEl_5iyEOEnUTKTC-HkxN39Hq7-w04vMjjfSkjgemH_2sfHCHKmOtYRfpJ9Rh2cl542iUxDgNqhX9Z0UO15UBk-kj3sPWXHdn6l-CZmxbecyquF7YyR5nDuM6w-Rak_KqYKBO4yseSQTbQLjaE2N2bTv1ONZXW4o9LQR3ZSiZqacFJM-sVzMq5-45pRKx_0DpOms6qsKYyciLGtRAwuSjZMLfyHjv_RsN";
const VIET_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCIT-lCIIgiejiP0_QDHfDmeFd4F14eCq46vyxtcSSVQSgnulr8qPhiwV6XwXCKxCAUiAS8g4q96DT6UYfRZtIR7DRVEof-_o756-e4FyBtvpgof_Q8mBAIYo0PU0URN6m-VnwPI39TTrswY63Q6r1XcPfdf60bPvRzCcbi4NiYHi99TJkvJrII8QwICEgl4D6Fw0APDfBh7catdK2BLzPVkA764lydsTFzA9_pPqIl24GExVJT59E0LUGK8fml3lAF-L5BtmJT3Klz";

const events = [
  {
    date: "FEB 10",
    title: "Tết Celebration",
    desc: "Ring in the Lunar New Year with authentic food, games, and traditional performances.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAc_DyIjGrSgSHJZ9apzBNKCwlRWEFPrIR0LKeSeP5trYLWPIm4IpRm-xyxHer4lMisEGgeyi6lf7Ck_r1gp7GkwjrtdIXvytqeNqyxGtKF7EBhFwttMsXzJVQATBMLRXOwjedglhc6mtgMS1PTb9CRsekjEgfLTZWSjBk6QvGmpyoEtzt6trdXvlOaj7P6ZHM9QWGawtJX7U6bwRIgf4Ip7yPOu-JChMmTFQ9Y_FfsX6gIAZ6Gpq2FE-Tj9bJ5ArSbGNOPcIsMz-K-",
  },
  {
    date: "MAY 15",
    title: "Heritage Night",
    desc: "Our flagship showcase of dance, music, and storytelling across the Vietnamese diaspora.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyIv9SdYQQIA-h7Wa9KWUgXH2FFn-d1iOoZMqZ5eJ9tzIeQ-YEXTan99PsnQL-C-4zRlRY1ab-6ngTZG1HJyHxZu1yXgLP1rI88HSqOG4ZNa6iE1SGTlzqdbog23DEuFfD-KDFHQ0hPkIYlNoMqPBClcoCHlBKXcYCmfEAEpCAeZ5s72TmUo7Val-M5YOIJ9jqHYb7Tn23w8eyrOETTi0PEZxTU5dlzvUqROD6l0qgfkxzLGU0u1VmEWy93fQB2cqQHn33cPJrFgIu",
  },
  {
    date: "NOV 22",
    title: "Turkey Bowl",
    desc: "Our Thanksgiving-week flag football tournament bringing regional VSA chapters together.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXG1WqjA9jCmAtpoLxz4RHcRzjcdl_VfteJ8TZuzibyWE3AiiJGD6f0oHX5hONSG67IsWw5mCjrr8iVFIXWF50NyT4hPXPfxr2Ov7LkGZKJLG94mNcfCcpsctTqgI15THWNtrhzlO0t8IEF2Q2FueumKl3IViJx3e89MJkfXhRRgvvr69LiJy8KR0RWcDMmr9sBofprbSgyLTAu88vWo9Zt9oHEiEUqze1jkRvY0iRwmHKmFZ2o-Yo3_mxjAf7K82bc7tPtKdnyLmt",
  },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[600px] h-[88vh] items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMG} alt="WWU VSA students celebrating together at a cultural event" className="h-full w-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-black/85 via-ink-black/45 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-5xl px-5 md:px-20">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-imperial-gold">
            Western Washington University
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="font-display text-4xl md:text-6xl lg:text-[56px] leading-tight text-white drop-shadow-2xl">
            Heritage in Heart,
            <br />
            <span className="italic text-vietnamese-red">Horizon in Sight.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35, duration: 0.6 }} className="mt-6 max-w-xl text-lg text-white/90">
            Bridging Vietnamese cultural heritage with university leadership through community,
            education, and shared experience.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }} className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-vietnamese-red px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-vietnamese-red/30 transition hover:brightness-110">
              Get Involved
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
            <Link to="/calendar" className="inline-flex items-center rounded-lg border border-white/40 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
              View Calendar
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Xin Chào */}
      <section className="lotus-pattern px-5 md:px-20 py-16 md:py-24">
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 items-center gap-14 md:grid-cols-2">
          <div className="relative">
            <img src={WELCOME_IMG} alt="Student leaders collaborating in a bright campus lounge" className="relative z-10 aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl" loading="lazy" />
            <div className="absolute -bottom-6 -right-6 -z-10 hidden h-full w-full translate-x-3 translate-y-3 rounded-2xl border-2 border-imperial-gold/40 sm:block" />
          </div>
          <div>
            <h2 className="dong-son-border font-display text-3xl md:text-4xl text-vietnamese-red">
              Xin Chào &amp; Welcome
            </h2>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-on-surface-variant">
              Welcome to Western Washington University’s Vietnamese Student Association—a community where students can celebrate Vietnamese culture, build meaningful connections, and create lasting memories together.
            </p>
            <p className="mt-4 text-base leading-relaxed text-on-surface-variant">
              Whether you are looking to explore your cultural identity, meet new people, attend engaging events, or find a supportive community on campus, WWU VSA welcomes students of all backgrounds and experiences.
            </p>
            <Link to="/about" hash="executive-board" className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-viking-blue">
              Meet Our Executive Board
              <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">chevron_right</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="bg-surface-container-low px-5 md:px-20 py-16 md:py-24">
        <div className="mx-auto max-w-screen-2xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-display text-3xl md:text-4xl text-ink-black">A Community Built for You</h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-imperial-gold" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { icon: "diversity_3", title: "Lifelong Friends", color: "border-imperial-gold", desc: "A supportive network of peers who share your values and experiences, from study sessions to late-night boba runs." },
              { icon: "temple_buddhist", title: "Cultural Heritage", color: "border-vietnamese-red", desc: "Reconnect with or discover the beauty of Vietnamese traditions, history, and cuisine through hands-on events." },
              { icon: "military_tech", title: "Leadership Growth", color: "border-viking-blue", desc: "Grow through board roles, event coordination, and regional networking with our NWVSA partners." },
            ].map((c) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className={`rounded-2xl border-t-4 ${c.color} bg-white p-8 shadow-sm transition-shadow hover:shadow-xl`}
              >
                <span className="material-symbols-outlined text-4xl text-vietnamese-red">{c.icon}</span>
                <h3 className="mt-6 font-display text-2xl text-ink-black">{c.title}</h3>
                <p className="mt-3 text-base text-on-surface-variant">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Alternating */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-20">
          <div className="order-2 md:order-1">
            <span className="mb-4 inline-block rounded-full bg-imperial-gold/20 px-4 py-1 text-xs font-semibold text-[color:var(--color-tertiary)]">
              Regional Program
            </span>
            <h2 className="dong-son-border font-display text-3xl md:text-4xl text-ink-black">
              ACCE Family &amp; Mentorship
            </h2>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-on-surface-variant">
              ACCE is WWU VSA's family and mentorship program. Members are matched into families
              that encourage mentorship, friendship, cultural connection, and a welcoming sense of
              belonging.
            </p>
            <ul className="mt-5 space-y-3 text-base text-on-surface-variant">
              <li className="flex items-start gap-3"><span className="material-symbols-outlined text-imperial-gold">star</span>Em (Littles) matched with Anh, Chi, or Chanh who support them all year</li>
              <li className="flex items-start gap-3"><span className="material-symbols-outlined text-imperial-gold">star</span>Monthly family gatherings, weekly check-ins, and time together at VSA events</li>
            </ul>
            <Link
              to="/programs/$slug"
              params={{ slug: "acce" }}
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-viking-blue"
            >
              Learn About ACCE
              <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">chevron_right</span>
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <img src={ACCE_IMG} alt="Two students studying together in a modern library" loading="lazy" className="aspect-video w-full rotate-2 rounded-3xl object-cover shadow-lg transition-transform duration-500 hover:rotate-0" />
          </div>
        </div>

        <div className="mt-16 bg-surface-container py-16 md:py-20">
          <div className="mx-auto grid max-w-screen-2xl grid-cols-1 items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-20">
            <img src={FAN_IMG} alt="Traditional Vietnamese fan dance performance" loading="lazy" className="aspect-square w-full -rotate-2 rounded-3xl object-cover shadow-xl transition-transform duration-500 hover:rotate-0" />
            <div>
              <span className="mb-4 inline-block rounded-full bg-vietnamese-red/20 px-4 py-1 text-xs font-semibold text-vietnamese-red">
                Art &amp; Performance
              </span>
              <h2 className="dong-son-border font-display text-3xl md:text-4xl text-ink-black">
                Fan Dance &amp; Performance
              </h2>
              <p className="mt-6 text-lg text-on-surface-variant">
                Showcase the elegance of Vietnamese arts through our performance troupes — from
                traditional fan dancing to modern choreography brought to the stage each year.
              </p>
              <button className="mt-6 rounded-lg border-2 border-vietnamese-red px-8 py-3 text-sm font-semibold text-vietnamese-red transition hover:bg-vietnamese-red hover:text-white">
                Join the Troupe
              </button>
            </div>
          </div>
        </div>

        {/* Viet 101 — no stats cards per updated brief */}
        <div className="mx-auto mt-16 grid max-w-screen-2xl grid-cols-1 items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-20">
          <div className="order-2 md:order-1">
            <span className="mb-4 inline-block rounded-full bg-viking-blue/15 px-4 py-1 text-xs font-semibold text-viking-blue">
              Educational Series
            </span>
            <h2 className="dong-son-border font-display text-3xl md:text-4xl text-ink-black">
              Viet 101 Workshops
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-on-surface-variant">
              Dive deep into the nuances of Vietnamese history, language, and modern issues. These
              interactive workshops are designed for everyone — whether you grew up speaking
              Vietnamese at home or are hearing your first words of it this quarter.
            </p>
            <p className="mt-4 text-base text-on-surface-variant">
              Each session is student-led, casual, and pairs conversation with cultural context —
              perfect for building fluency and connection.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img src={VIET_IMG} alt="Students in a bright workshop with Vietnamese calligraphy and cultural artifacts" loading="lazy" className="aspect-video w-full rounded-3xl object-cover shadow-lg" />
          </div>
        </div>
      </section>

      {/* Signature Events */}
      <section className="lotus-pattern px-5 md:px-20 py-16 md:py-24">
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <h2 className="dong-son-border font-display text-3xl md:text-4xl text-ink-black">Signature Events</h2>
              <p className="mt-4 text-base text-on-surface-variant">
                Mark your calendar for our most anticipated annual celebrations — from Lunar New
                Year to our regional conferences, there's always something happening.
              </p>
            </div>
            <Link to="/events" className="rounded-full bg-viking-blue px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90">
              View All Events
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {events.map((e) => (
              <div key={e.title} className="group cursor-pointer">
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <img src={e.img} alt={e.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="absolute left-4 top-4 rounded bg-white/90 px-3 py-1 text-xs font-bold uppercase text-vietnamese-red backdrop-blur-sm">
                    {e.date}
                  </div>
                </div>
                <h3 className="font-display text-2xl text-ink-black transition-colors group-hover:text-vietnamese-red">
                  {e.title}
                </h3>
                <p className="mt-2 text-on-surface-variant">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support / Products preview */}
      <section className="px-5 md:px-20 py-16 md:py-24">
        <div className="mx-auto max-w-screen-2xl text-center">
          <h2 className="dong-son-border mx-auto inline-block font-display text-3xl md:text-4xl text-ink-black">
            Support the Association
          </h2>
          <p className="mt-4 text-on-surface-variant">
            Every purchase helps fund our cultural programs and student scholarships.
          </p>
          <Link to="/products" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-vietnamese-red px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-vietnamese-red/25 transition hover:brightness-110">
            Shop Our Products
            <span className="material-symbols-outlined text-base">shopping_bag</span>
          </Link>
        </div>
      </section>
    </>
  );
}
