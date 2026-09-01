import { ArrowUpRight } from "lucide-react";

export function Cta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-paper py-16 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute top-10 left-8 hidden h-16 w-16 border-t-2 border-l-2 border-ink/15 md:block" />
      <div className="pointer-events-none absolute right-8 bottom-10 hidden h-16 w-16 border-r-2 border-b-2 border-ink/15 md:block" />

      <svg
        viewBox="0 0 32 32"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 opacity-[0.07] sm:h-[280px] sm:w-[280px] lg:h-[420px] lg:w-[420px]"
        aria-hidden
      >
        <path d="M16 3.2 28.4 16 16 28.8 3.6 16 16 3.2Z" fill="#171717" />
        <path d="M16 3.2 28.4 16 16 16 16 3.2Z" fill="#FF762A" />
      </svg>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12">
        <div className="mb-8 flex justify-center sm:mb-10 md:justify-end">
          <div className="text-left md:text-right">
            <div className="flex items-center gap-3 md:flex-row-reverse">
              <div className="flex -space-x-2">
                <img src="/images/avatars.jpg" alt="" className="size-9 rounded-full object-cover object-[18%_center] ring-2 ring-orange/60" />
                <img src="/images/avatars.jpg" alt="" className="size-9 rounded-full object-cover object-center ring-2 ring-ink/20" />
                <img src="/images/david.jpg" alt="" className="size-9 rounded-full object-cover ring-2 ring-ink/20" />
              </div>
              <p className="text-2xl font-bold leading-none text-ink">3K+</p>
            </div>
            <p className="mt-3 max-w-[22ch] text-base font-semibold leading-snug text-ink uppercase md:ml-auto">
              Creating intelligence that drives real results
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="section-kicker mb-5 text-ink/50">Start your AI journey today</p>
          <h2 className="connect-display text-ink">Connect</h2>
          <p className="mt-2 text-lg font-medium tracking-[0.18em] text-ink/70 uppercase sm:text-2xl">
            with us
          </p>
        </div>

        <div className="mt-10 text-left sm:mt-14">
          <p className="max-w-xs text-sm leading-relaxed text-ink/50">
            Kickstart your AI journey with expert guidance, tailored strategies, and transformative
            results designed for your success.
          </p>
          <a
            href="mailto:hello@ynora.ai"
            className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-sm font-semibold text-snow shadow-[0_10px_28px_rgba(255,118,42,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-hot"
          >
            Contact Us
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
