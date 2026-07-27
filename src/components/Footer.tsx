import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-outline-variant)]/60 bg-rice-paper">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-10 px-5 md:px-20 py-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-vietnamese-red text-white font-display font-bold">
              V
            </div>
            <span className="font-display text-xl font-bold text-viking-blue">WWU VSA</span>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-on-surface-variant">
            Representing the Vietnamese student body at Western Washington University — celebrating
            heritage, empowering leadership, and building community since 1996.
          </p>
          <div className="pt-2">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink-black">
              Part of the Community
            </h4>
            <div className="flex flex-wrap items-start gap-6 pt-2">
              {[
                { code: "ESC", label: "Ethnic Student Center" },
                { code: "NWVSA", label: "Northwest Vietnamese\nStudent Association" },
                { code: "WWU", label: "Western Washington\nUniversity" },
              ].map((p) => (
                <div key={p.code} className="flex flex-col items-center gap-1 text-center">
                  <div className="grid h-12 w-12 place-items-center rounded-full border border-[color:var(--color-outline-variant)] bg-white font-bold text-viking-blue">
                    {p.code.slice(0, 1)}
                  </div>
                  <span className="text-sm font-bold text-on-surface-variant">{p.code}</span>
                  <span className="whitespace-pre text-[11px] leading-tight text-on-surface-variant">
                    {p.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-vietnamese-red">
            Explore
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="text-on-surface-variant hover:text-viking-blue">About Us</Link></li>
            <li><Link to="/events" className="text-on-surface-variant hover:text-viking-blue">Events</Link></li>
            <li><Link to="/gallery" className="text-on-surface-variant hover:text-viking-blue">Gallery</Link></li>
            <li><Link to="/products" className="text-on-surface-variant hover:text-viking-blue">Products</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-vietnamese-red">
            Connect
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/calendar" className="text-on-surface-variant hover:text-viking-blue">Calendar</Link></li>
            <li><Link to="/contact" className="text-on-surface-variant hover:text-viking-blue">Contact</Link></li>
            <li><a href="mailto:westernvsa@gmail.com" className="text-on-surface-variant hover:text-viking-blue">westernvsa@gmail.com</a></li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--color-outline-variant)] text-on-surface-variant hover:border-viking-blue hover:text-viking-blue transition-colors">
              <span className="material-symbols-outlined text-lg">alternate_email</span>
            </a>
            <a href="mailto:westernvsa@gmail.com" aria-label="Email" className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--color-outline-variant)] text-on-surface-variant hover:border-viking-blue hover:text-viking-blue transition-colors">
              <span className="material-symbols-outlined text-lg">mail</span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[color:var(--color-outline-variant)]/40 px-5 md:px-20 py-5 text-center text-xs text-on-surface-variant">
        © {new Date().getFullYear()} WWU Vietnamese Student Association. Heritage &amp; Future.
      </div>
    </footer>
  );
}