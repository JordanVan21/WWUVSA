import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/products", label: "Products" },
  { to: "/calendar", label: "Calendar" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-md bg-[color:var(--color-surface)]/85 border-b border-[color:var(--color-outline-variant)]/40 transition-shadow ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-screen-2xl items-center justify-between px-5 md:px-20 h-16">
        <Link to="/" className="flex items-center gap-3" aria-label="WWU VSA — home">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-vietnamese-red text-white font-display font-bold">
            V
          </div>
          <span className="font-display text-xl font-bold text-vietnamese-red tracking-tight">WWU VSA</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
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
          <Link
            to="/contact"
            className="ml-2 rounded-full bg-vietnamese-red px-5 py-2 text-sm font-semibold text-white shadow-md shadow-vietnamese-red/25 hover:scale-105 active:scale-95 transition-transform"
          >
            Join Us
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-vietnamese-red"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[color:var(--color-outline-variant)]/40 bg-[color:var(--color-surface)]">
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
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-vietnamese-red px-5 py-3 text-center text-sm font-semibold text-white shadow-md"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}