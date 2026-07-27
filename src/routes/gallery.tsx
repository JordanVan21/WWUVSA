import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | WWU VSA" },
      { name: "description", content: "A visual journey through WWU VSA heritage, community, and shared memories at Western Washington University." },
      { property: "og:title", content: "Gallery | WWU VSA" },
      { property: "og:description", content: "Captured moments from Heritage Night, Tết Festival, ACCE socials, and workshops." },
    ],
  }),
  component: GalleryPage,
});

const HERO = "https://lh3.googleusercontent.com/aida-public/AB6AXuDfX911ngX4FrCv5JghJ27a1rR4XAMci5E2xAuheVNRT58WnLBida3BSK3-icM9g-cpRMH_kqCpXfgH5D-O7MFu1BXbIV10ey6VBwEfun6S9PpUC09u5kTclw7yLzrTsjt1-DZpV4rH297nf8eGUgpN0JYbyWE1kDSfgdy4EaV8-APYwqx41dPLr_j7713bN53Ce0hXj34NVgfbNNT8k37HaFTlOJL8z69QpLFF28IOLz4gLvqxsv-zoFvjNTBLU9y7kORQIXVWC9s2";
const FEAT1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuAoVvnWTwHymFaPGud3yjPNzr9LjOz0_xtZpEEe1IwDNfz0KDAjZrkBYHLA9MgC0qCTwfWlr0AoJSzkPNVLc7SBGvTrC0ExneW0-lYtdHJKT9ksPekf7oW0-JZ7KZyFE7MaIJ9K0xwvYMKHQXdLnE7oiKWvbhca2eRXeQ5N1xUKLbirZhX3tmv_bwzzJrnv8E0shtbyx0fbxUIjZ6nralVEfFFn9yHiNZgcuP1XGU51u5NlVBJSIy7GFsGW1KVKCYQwdYt6i1xFC9hd";
const FEAT2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuDBSCz0w9mRjH5ga5kiObTs4A2oOBYS16rrvyE5IgR6htUTznOMHQ1VnwGa4ZDGpXTgBIm5i9-Bs4jeP8f7xQI5WIEIJwvja4OCNl1uICToVM43DJDo9O8HPCOs_F7tPNkjd7mqpvP71eHWTzyFnvxBIzPv3tCW9jPS8IXAbZM7U0zRGKfN8_5A7JWkiXOXEyddF3qedXH_4xLQV8oqV9ybBdrpSdKlZ7Rfd5F83jrzA7ms7lxNzEd-8GIMWtA2xC9cbotVmAIvvTNT";

const gallery = [
  { span: "col-span-2 row-span-1", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1_C1lFukvKJipGVi9ukS5LdDIPzMFUYDEd5caa4qvTAZs2TubU0a3FDpvg2HuDMCUj0TUbwwo1yKqa1Ol955Dki_SJhe5PqoUTrW1oEIrez6JTuo0T3ApN6oNKV9YJy1THwrYWV2BxHA526NHqTsRJOz6X1Dn5N8QZP5rmGB2LkAuQ-cgWB1A30bcuQ9SefeIIfDupiY4HjU_5wSD439fYaidbLcybc6hY6WObiRp0Gpbj-5Txvfzwi_pEMRwOCi5qtTuMmewKfkj", alt: "Students sharing a meal at an ACCE social" },
  { span: "col-span-1 row-span-2", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRqhJpH36x8ISR9rn20BAQfFYy7j2EJ-GMCIxAHixNbzfmCOGTie1QRRoCs0kBECA8-J3VECULPz4YUmGSkOMizvE5oBpdcaxT-iQPA3jJdHpVAq2Ln5fbqepXSoubsflwlcjeXMTjKSLynC7Fu7xuUX2cgbPE5DBPYCIa-HSlJoND6MEaaOy9s8LT_8bGpYqOlzD8JsKZjvwowg8IOHlG_4qNNcSRAxSNdw27zUa7T6M4e8uKaMLd7ciT7TlYxOF5BGXAIaxDhIRU", alt: "Portrait of a student in a white ao dai" },
  { span: "col-span-1 row-span-1", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAO1HsrOOAD12Y8uOBrYSf7wokPB8yQwt2dVYfHop6IXdlhHQ55GQcQaDVj0xFG_G2xQgR4drvBe6ARCPRKWt5ixd2SRtF3K5ZV-d5tYNMc2Vtn0SLH0mnLjYGbkfiZS_rEBsfx8ITFNxeXzc2kihek35xSCSMc0cEOsMYYNMupGygOwZnN8RjnzkQzBp1-FNoBIAQHXzTlfifu1pxJydQUP22H5-Lw4Pj2OC8XwnOg7p4Q3Zo_KLseNcVWlsMjPWmAa1NTFyyXFpMO", alt: "Hands crafting a Non La conical hat" },
  { span: "col-span-1 row-span-2", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx6d32ysioFpU0odI_vk-SArWXvys7EW59SFm0_YQLW3bsIEuNUjC_-jnnjnGdTRfZsRywAE1qCI5LOPXCR2K1yC6fHwCc7r77Im64cZWzzQoWYtV1PQcc0V4erUtb-H2brGZAhRpXRmh32wkKgcytwBSK3pL2yY6sHg23hzUNteqR53Ia8APJnY2eKNB__ipHD10aRcaOH8b0MlW7cR_jWue7bd9D-NgjnHqCCbFM1A0otEX5r6s7ra8z95gtQX3qp-zGDB7L17sE", alt: "Volleyball match mid-air spike" },
  { span: "col-span-2 row-span-2", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoXaghr936JdqA8cV8WGnvlznNF_KlPs0gC6-npqAvEtxQDzo1fgn6ibvDm8lHLkV59dHtlx26P4BmtPeUgzW8veY8azDEcJxsBe1CkCCybu9DZZv_VXGmTWqhh_OWX07cDIRCmog6gKNO9Pi2Bc3EbwsIHsDaLf1rNV6K72wgULMUEDCO5tGjYEzY6SvWtFN4J8JyecombpaOUKDH5trfFxygcp3cWlATGzjRotP3zZmrY5m_IoXHGXu71OtgGdPfj1lr60bxe1s-", alt: "VSA general body meeting in a lecture hall" },
  { span: "col-span-1 row-span-1", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDt1SdkMLT_GJ2laY9398cNbbjAJPtyIYm-9P-aDiAbUpgesb2_63H85c8vORu4WoSq2r-tWYOly8lC-witrV7cAAuNmnJ-MGmq_z9gS6Pn0FtqsG0W9R9MlfuGfP9KcCw5PwWx7VRSO22JDOgSFIv9ywiI7FHLcbAeAfFHiJbElmfDdS_TIGujEbcnRrsNc9wlx1hA0ZTAp7a7jIEih_itbpoL3JzMsnHOo504ao7n-qjQp3SbqM8vtM3uKBQN4o_Uv3A3DtvGUA7B", alt: "Board members collaborating in a lounge" },
];

function GalleryPage() {
  const [time, setTime] = useState("All Time");
  const [cat, setCat] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[520px] items-center justify-center overflow-hidden bg-ink-black">
        <div className="absolute inset-0 opacity-45">
          <img src={HERO} alt="Vietnamese cultural performance" className="h-full w-full object-cover" loading="eager" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink-black/85 to-transparent" />
        <div className="relative z-10 px-5 text-center">
          <h1 className="font-display text-4xl text-white md:text-6xl">Captured Moments</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            A visual journey through our heritage, community growth, and the vibrant memories
            we've built together at WWU.
          </p>
          <div className="dong-son-divider mx-auto mt-6 h-px w-48" />
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="bg-rice-paper px-5 md:px-20 py-16 md:py-24">
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap gap-2">
              {["All Time", "2024-25", "2023-24"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTime(t)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                    time === t
                      ? "bg-vietnamese-red text-white shadow-sm"
                      : "border border-[color:var(--color-outline-variant)] bg-surface text-on-surface-variant hover:border-vietnamese-red"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 text-sm font-semibold text-on-surface-variant">Category:</span>
              {["Heritage Night", "Tết Festival", "ACCE Socials", "Workshops"].map((c) => (
                <button
                  key={c}
                  onClick={() => setCat((prev) => (prev === c ? null : c))}
                  className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition ${
                    cat === c ? "bg-vietnamese-red text-white" : "bg-surface-container-high text-on-surface-variant hover:bg-vietnamese-red hover:text-white"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Featured */}
          <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="group relative h-[420px] overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-xl md:col-span-8">
              <img src={FEAT1} alt="Heritage Night finale" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="mb-2 inline-block rounded bg-vietnamese-red px-3 py-1 text-xs font-semibold uppercase text-white">Featured Album</span>
                <h3 className="font-display text-2xl text-white md:text-3xl">Heritage Night 2024: Roots &amp; Wings</h3>
                <p className="text-white/85">142 Photos • April 2024</p>
              </div>
            </div>
            <div className="group relative h-[420px] overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-xl md:col-span-4">
              <img src={FEAT2} alt="Tết festival decorations" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-display text-2xl text-white">Tết Festival</h3>
                <p className="text-white/85">86 Photos • Feb 2024</p>
              </div>
            </div>
          </div>

          {/* Organic grid */}
          <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {gallery.map((g, i) => (
              <figure key={i} className={`group relative overflow-hidden rounded-lg shadow-sm ${g.span}`}>
                <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <figcaption className="pointer-events-none absolute inset-0 flex items-center justify-center bg-vietnamese-red/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="material-symbols-outlined text-4xl text-white">zoom_in</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contribute CTA */}
      <section className="bg-surface-container-low px-5 md:px-20 py-16 md:py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-vietnamese-red">
            Have Photos to Share?
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-ink-black">Contribute to our Archive</h2>
          <p className="mt-4 text-on-surface-variant">
            Our story is written by everyone. If you have photos from a VSA event you'd like to see
            featured, please share them with the board.
          </p>
        </div>
      </section>
    </>
  );
}