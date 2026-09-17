import { Link } from "@tanstack/react-router";
import { COMMUNITY_ORGANIZATIONS } from "@/lib/community";
import { BrandLogo } from "@/components/BrandLogo";
import { FEATURES } from "@/lib/site-config";

const linkClasses =
  "inline-flex min-h-[32px] items-center text-on-surface-variant transition-colors hover:text-viking-blue hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vietnamese-red rounded-sm";

export function Footer() {
  return (
    <footer className="col-span-full w-full min-w-0 border-t border-[color:var(--color-outline-variant)]/60 bg-rice-paper">
      <div className="mx-auto grid w-full min-w-0 max-w-site grid-cols-1 gap-y-14 px-4 py-16 sm:px-6 md:grid-cols-2 md:gap-x-14 md:px-8 md:py-20 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,0.75fr)_minmax(0,0.9fr)] lg:gap-x-20 lg:px-12 xl:px-16">
        <section className="w-full min-w-0 space-y-5 md:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <BrandLogo className="h-14 w-14" />
            <span className="font-display text-2xl font-bold text-viking-blue">WWU VSA</span>
          </div>
          <p className="w-full text-base leading-relaxed text-on-surface-variant sm:max-w-md">
            Representing the Vietnamese student body at Western Washington University, celebrating
            heritage, empowering leadership, and building community since 1996.
          </p>
          <div className="w-full min-w-0">
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-ink-black">
              Part of the Community
            </h4>
            <ul className="grid w-full min-w-0 grid-cols-1 items-start gap-6 sm:grid-cols-3">
              {COMMUNITY_ORGANIZATIONS.map((org) => (
                <li key={org.id} className="w-full min-w-0">
                  <a
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${org.accessibleLabel} (opens in a new tab)`}
                    className="group flex w-full min-w-0 flex-col items-center gap-1.5 rounded-lg p-1 text-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vietnamese-red"
                  >
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-[color:var(--color-outline-variant)] bg-white text-viking-blue transition-colors group-hover:border-viking-blue">
                      <span className="material-symbols-outlined text-2xl" aria-hidden="true">
                        {org.icon}
                      </span>
                    </span>
                    <span className="break-words text-base font-bold text-on-surface-variant group-hover:text-viking-blue group-hover:underline">
                      {org.acronym}
                    </span>
                    <span className="max-w-full break-words text-xs leading-tight text-on-surface-variant [overflow-wrap:anywhere]">
                      {org.shortName.replace(/\n/g, " ")}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <nav aria-label="Explore" className="w-full min-w-0">
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-vietnamese-red">
            Explore
          </h4>
          <ul className="space-y-2 text-base">
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
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-vietnamese-red">
            Connect
          </h4>
          <ul className="space-y-2 text-base">
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
          <div className="mt-5 flex gap-4">
            <a
              href="https://instagram.com/wwuvsa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WWU VSA on Instagram (opens in a new tab)"
              className="grid h-14 w-14 place-items-center rounded-full border border-[color:var(--color-outline-variant)] text-on-surface-variant transition-colors hover:border-viking-blue hover:text-viking-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vietnamese-red"
            >
              <span className="material-symbols-outlined text-xl">alternate_email</span>
            </a>
            <a
              href="mailto:westernvsa@gmail.com"
              aria-label="Email WWU VSA"
              className="grid h-14 w-14 place-items-center rounded-full border border-[color:var(--color-outline-variant)] text-on-surface-variant transition-colors hover:border-viking-blue hover:text-viking-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vietnamese-red"
            >
              <span className="material-symbols-outlined text-xl">mail</span>
            </a>
          </div>
        </section>
      </div>
      <div className="w-full border-t border-[color:var(--color-outline-variant)]/40">
        <div className="mx-auto w-full max-w-site px-4 py-6 text-center text-sm text-on-surface-variant sm:px-6 md:px-8 lg:px-12 xl:px-16">
          © {new Date().getFullYear()} WWU Vietnamese Student Association. Heritage &amp; Future.
        </div>
      </div>
    </footer>
  );
}
