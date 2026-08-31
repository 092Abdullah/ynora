import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { FormEvent, useState } from "react";
import { Logo } from "./logo";

const NAV = [
  { href: "#top", label: "Home" },
  { href: "#who", label: "About" },
  { href: "#why", label: "Services" },
  { href: "#pricing", label: "Projects" },
  { href: "#why", label: "Articles" },
  { href: "#contact", label: "Compliance" },
];

export function SiteFooter() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <footer className="relative bg-ink text-snow">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-12">
        <div className="border-white/10 px-5 py-12 sm:px-6 lg:col-span-7 lg:border-r lg:px-12 lg:py-14">
          <Logo invert markClassName="size-14" wordmarkClassName="text-4xl sm:text-5xl" />
          <p className="mt-8 max-w-sm text-xl font-bold text-snow sm:text-2xl">
            Empowering businesses with smarter automation, built for growth and simplicity.
          </p>
          <div className="mt-8 flex gap-2 text-snow">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Twitter, label: "Twitter" },
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Instagram, label: "Instagram" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#contact"
                aria-label={label}
                className="flex size-11 items-center justify-center border border-white/15 transition-all duration-200 hover:-translate-y-0.5 hover:border-orange hover:text-orange"
              >
                <Icon className="size-[18px]" />
              </a>
            ))}
          </div>
          <form
            onSubmit={onSubmit}
            className="mt-10 flex w-full max-w-md items-center gap-1 rounded-full border border-white/15 bg-transparent p-1.5 pl-4"
          >
            <input
              type="email"
              required
              autoComplete="email"
              name="email"
              placeholder="Enter your email"
              className="min-h-9 min-w-0 flex-1 bg-transparent text-sm text-snow outline-none placeholder:text-muted"
            />
            <button
              type="submit"
              className="min-h-9 shrink-0 rounded-full bg-snow px-5 text-sm font-semibold text-ink transition-colors hover:bg-orange hover:text-snow"
            >
              {sent ? "Joined" : "Submit"}
            </button>
          </form>
        </div>

        <nav className="px-5 py-4 sm:px-6 lg:col-span-5 lg:px-0 lg:py-0">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex min-h-12 items-center justify-between border-b border-white/10 px-2 py-4 text-sm font-bold tracking-[0.1em] text-snow uppercase transition-all duration-200 hover:translate-x-1 hover:text-orange sm:px-8 lg:py-6"
            >
              {item.label}
              <span>→</span>
            </a>
          ))}
        </nav>
      </div>
      <p className="border-t border-white/10 px-5 py-5 text-center text-[11px] text-muted">
        Copyright<span className="text-orange">©</span> <span className="text-orange">2026</span> I Published
        by <span className="text-orange">Qudra Team</span> - Powered by{" "}
        <span className="text-orange">Qudra.</span>
      </p>
    </footer>
  );
}
