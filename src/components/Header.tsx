import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { BrandLogo } from "@/components/BrandLogo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/products", label: "Products" },
  { to: "/calendar", label: "Calendar" },
  { to: "/contact", label: "Contact" },
] as const;

type JoinLink =
  | { type: "external"; label: string; href: string }
  | { type: "internal"; label: string; to: string };

const joinLinks: JoinLink[] = [
  { type: "external", label: "WWU WIN", href: "#" },
  { type: "external", label: "WWU Instagram", href: "https://instagram.com/wwuvsa" },
  { type: "internal", label: "Calendar", to: "/calendar" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);
  const joinRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!joinOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setJoinOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (joinRef.current && !joinRef.current.contains(e.target as Node)) {
        setJoinOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClick);
    };
  }, [joinOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-md bg-[color:var(--color-surface)]/85 border-b border-[color:var(--color-outline-variant)]/40 transition-shadow ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-screen-2xl items-center justify-between px-5 md:px-20 h-16">
        <Link to="/" className="flex items-center gap-3" aria-label="WWU VSA home">
          <BrandLogo className="h-11 w-11" />
          <span className="font-display text-xl font-bold text-vietnamese-red tracking-tight">WWU VSA</span>
        </Link>

        <div className="hidden min-w-0 items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-semibold text-on-surface-variant hover:text-vietnamese-red transition-colors"
              activeProps={{ className: "text-vietnamese-red border-b-2 border-vietnamese-red pb-1" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <div ref={joinRef} className="relative ml-2">
            <button
              onClick={() => setJoinOpen((v) => !v)}
              aria-expanded={joinOpen}
              aria-haspopup="menu"
              aria-controls="join-us-menu"
              className="inline-flex items-center gap-1 rounded-full bg-vietnamese-red px-5 py-2 text-sm font-semibold text-white shadow-md shadow-vietnamese-red/25 hover:scale-105 active:scale-95 transition-transform"
            >
              Join Us
              <span className="material-symbols-outlined text-base" aria-hidden="true">
                {joinOpen ? "expand_less" : "expand_more"}
              </span>
            </button>
            {joinOpen && (
              <div
                id="join-us-menu"
                role="menu"
                className="absolute right-0 top-full mt-2 w-56 rounded-2xl border border-[color:var(--color-outline-variant)]/60 bg-[color:var(--color-surface)] p-2 shadow-xl"
              >
                {joinLinks.map((item) => {
                  const baseClasses =
                    "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors hover:bg-surface-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vietnamese-red/50";
                  const icon = item.type === "external" ? "open_in_new" : "arrow_forward";
                  const content = (
                    <>
                      <span>{item.label}</span>
                      <span className="material-symbols-outlined text-base text-on-surface-variant" aria-hidden="true">
                        {icon}
                      </span>
                    </>
                  );
                  return item.type === "internal" ? (
                    <Link
                      key={item.label}
                      to={item.to}
                      role="menuitem"
                      className={`${baseClasses} text-on-surface`}
                      onClick={() => setJoinOpen(false)}
                    >
                      {content}
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      role="menuitem"
                      className={`${baseClasses} text-on-surface`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setJoinOpen(false)}
                    >
                      {content}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <button
          className="p-2 text-vietnamese-red lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-[color:var(--color-outline-variant)]/40 bg-[color:var(--color-surface)] lg:hidden">
          <div className="flex flex-col px-5 py-4 gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-semibold text-on-surface-variant hover:bg-surface-container hover:text-vietnamese-red"
                activeProps={{ className: "text-vietnamese-red bg-surface-container" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <div className="my-2 h-px bg-[color:var(--color-outline-variant)]/40" />
            <p className="px-3 pt-1 text-xs font-semibold uppercase tracking-wide text-on-surface-variant">Join Us</p>
            {joinLinks.map((item) => {
              const icon = item.type === "external" ? "open_in_new" : "arrow_forward";
              const classes = "flex items-center justify-between rounded-lg px-3 py-3 text-base font-semibold text-on-surface-variant hover:bg-surface-container hover:text-vietnamese-red";
              return item.type === "internal" ? (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={classes}
                >
                  <span>{item.label}</span>
                  <span className="material-symbols-outlined text-base">{icon}</span>
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className={classes}
                >
                  <span>{item.label}</span>
                  <span className="material-symbols-outlined text-base">{icon}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}