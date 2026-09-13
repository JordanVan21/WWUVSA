import { Link } from "@tanstack/react-router";
import { COMMUNITY_ORGANIZATIONS } from "@/lib/community";
import { BrandLogo } from "@/components/BrandLogo";
import { FEATURES } from "@/lib/site-config";

const linkClasses =
  "inline-flex min-h-[32px] items-center text-on-surface-variant transition-colors hover:text-viking-blue hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vietnamese-red rounded-sm";

export function Footer() {
  return (
    <footer className="col-span-full w-full min-w-0 border-t border-[color:var(--color-outline-variant)]/60 bg-rice-paper">
      <div className="mx-auto grid w-full min-w-0 max-w-screen-2xl grid-cols-1 gap-y-10 px-5 py-12 sm:px-6 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,0.75fr)_minmax(0,0.9fr)] lg:gap-x-16 lg:px-8">
        <section className="w-full min-w-0 space-y-4 md:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <BrandLogo className="h-12 w-12" />
            <span className="font-display text-xl font-bold text-viking-blue">WWU VSA</span>
          </div>
          <p className="w-full text-sm leading-relaxed text-on-surface-variant sm:max-w-md">
            Representing the Vietnamese student body at Western Washington University, celebrating
            heritage, empowering leadership, and building community since 1996.
          </p>
          <div className="w-full min-w-0">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink-black">
              Part of the Community
            </h4>
            <ul className="grid w-full min-w-0 grid-cols-1 items-start gap-5 sm:grid-cols-3">
              {COMMUNITY_ORGANIZATIONS.map((org) => (
                <li key={org.id} className="w-full min-w-0">
                  <a
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${org.accessibleLabel} (opens in a new tab)`}
                    className="group flex w-full min-w-0 flex-col items-center gap-1 rounded-lg p-1 text-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vietnamese-red"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[color:var(--color-outline-variant)] bg-white text-viking-blue transition-colors group-hover:border-viking-blue">
                      <span className="material-symbols-outlined text-xl" aria-hidden="true">
                        {org.icon}
                      </span>
                    </span>
                    <span className="break-words text-sm font-bold text-on-surface-variant group-hover:text-viking-blue group-hover:underline">
                      {org.acronym}
                    </span>
                    <span className="max-w-full break-words text-[11px] leading-tight text-on-surface-variant [overflow-wrap:anywhere]">
                      {org.shortName.replace(/\n/g, " ")}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <nav aria-label="Explore" className="w-full min-w-0">
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-vietnamese-red">
            Explore
          </h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/about" className={linkClasses}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/events" className={linkClasses}>
                Events
              </Link>
            </li>
            <li>
              <Link to="/gallery" className={linkClasses}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/products" className={linkClasses}>
                Products
              </Link>
            </li>
          </ul>
        </nav>

        <section className="w-full min-w-0">
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-vietnamese-red">
            Connect
          </h4>
          <ul className="space-y-1 text-sm">
            {FEATURES.calendar && (
              <li>
                <Link to="/calendar" className={linkClasses}>
                  Calendar
                </Link>
              </li>
            )}
            <li>
              <Link to="/contact" className={linkClasses}>
                Contact
              </Link>
            </li>
            <li>
              <a href="mailto:westernvsa@gmail.com" className={`${linkClasses} break-all`}>
                westernvsa@gmail.com
              </a>
            </li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a
              href="https://instagram.com/wwuvsa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WWU VSA on Instagram (opens in a new tab)"
              className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--color-outline-variant)] text-on-surface-variant transition-colors hover:border-viking-blue hover:text-viking-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vietnamese-red"
            >
              <span className="material-symbols-outlined text-lg">alternate_email</span>
            </a>
            <a
              href="mailto:westernvsa@gmail.com"
              aria-label="Email WWU VSA"
              className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--color-outline-variant)] text-on-surface-variant transition-colors hover:border-viking-blue hover:text-viking-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vietnamese-red"
            >
              <span className="material-symbols-outlined text-lg">mail</span>
            </a>
          </div>
        </section>
      </div>
      <div className="w-full border-t border-[color:var(--color-outline-variant)]/40">
        <div className="mx-auto w-full max-w-screen-2xl px-5 py-5 text-center text-xs text-on-surface-variant sm:px-6 lg:px-8">
          © {new Date().getFullYear()} WWU Vietnamese Student Association. Heritage &amp; Future.
        </div>
      </div>
    </footer>
  );
}
