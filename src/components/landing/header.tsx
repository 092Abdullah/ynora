import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./logo";

const LINKS = [
  { href: "#who", label: "About" },
  { href: "#why", label: "Why us" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 bg-paper">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-6 lg:px-12">
        <Logo />
        <a
          href="#contact"
          className="absolute left-1/2 hidden min-h-11 -translate-x-1/2 items-center text-xs font-semibold tracking-[0.12em] text-ink/80 transition-colors hover:text-orange md:flex"
        >
          CONTACT
        </a>
        <button
          type="button"
          className="flex min-h-11 min-w-11 items-center justify-center gap-2.5 text-xs font-semibold tracking-[0.12em] text-ink transition-opacity hover:opacity-70"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          MENU
          {open ? <X className="size-[18px]" strokeWidth={1.75} /> : <Menu className="size-[18px]" strokeWidth={1.75} />}
        </button>
      </div>

      {open ? (
        <div className="absolute inset-x-0 top-full z-50 border-t border-ink/10 bg-ink text-snow shadow-2xl">
          <nav className="mx-auto flex max-w-[1440px] flex-col px-5 py-4 sm:px-6 lg:px-12">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center justify-between border-b border-white/10 py-4 text-sm font-semibold tracking-[0.18em] uppercase transition-colors hover:text-orange"
              >
                {l.label}
                <span>→</span>
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
