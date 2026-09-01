import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

function WorkBtn({ className }: { className?: string }) {
  return (
    <a
      href="#contact"
      className={cn(
        "inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-[13px] font-semibold text-snow shadow-[0_8px_20px_rgba(255,118,42,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-hot hover:shadow-[0_12px_28px_rgba(255,118,42,0.45)]",
        className,
      )}
    >
      Work with us
      <ArrowUpRight className="size-3.5" strokeWidth={2.6} />
    </a>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[560px] overflow-hidden bg-paper bg-bottom bg-no-repeat sm:min-h-[680px] lg:min-h-[840px]"
      style={{
        backgroundImage: "url(/images/hero-wave-bg.jpg)",
        backgroundSize: "100% auto",
      }}
    >
      <p className="v-label absolute bottom-[14%] left-6 hidden max-w-[140px] text-left lg:block">
        Continuous
        <br />
        Maintenance &
        <br />
        Enterprise Security
      </p>
      <p className="v-label absolute top-[22%] right-6 hidden max-w-[140px] text-right lg:block">
        AI Consulting &
        <br />
        Strategic Roadmaps
      </p>
      <p
        className="v-label absolute top-[42%] right-6 hidden lg:block"
        style={{ writingMode: "vertical-rl" }}
      >
        System Integration &
        <br />
        Cloud Architecture
      </p>

      <div className="relative z-10 mx-auto flex max-w-[1320px] justify-center px-6 pt-8 pb-10 sm:px-10 sm:pt-12 sm:pb-14 lg:px-16 lg:pt-14 lg:pb-20">
        <div className="inline-flex max-w-full flex-col items-stretch">
          <h1 className="hero-display text-center text-ink">
            EMP
            <span className="relative mx-[0.01em] inline-flex h-[0.78em] w-[0.78em] translate-y-[0.03em] items-center justify-center align-middle">
              <img
                src="/images/sphere.jpg"
                alt=""
                className="size-full rounded-full object-cover transition-transform duration-500 hover:rotate-12 hover:scale-105"
              />
            </span>
            WERING
          </h1>

          <WorkBtn className="mx-auto mt-5 mb-3 lg:hidden" />

          <div className="mt-1 flex items-center justify-center lg:justify-between">
            <WorkBtn className="hidden lg:inline-flex" />
            <p className="hero-display text-ink">
              TO
              <span className="relative mx-[0.1em] inline-flex h-[0.7em] w-[0.7em] translate-y-[0.06em] items-center justify-center overflow-hidden rounded-[16%] align-middle">
                <img
                  src="/images/hex.jpg"
                  alt=""
                  className="size-[140%] max-w-none object-cover mix-blend-multiply transition-transform duration-500 hover:rotate-6 hover:scale-110"
                />
              </span>
              EVOLVE
            </p>
          </div>

          <p className="hero-display mt-1 text-center text-orange">
            SMAR
            <span className="relative mx-[0.03em] inline-flex h-[0.7em] w-[0.7em] translate-y-[0.05em] items-center justify-center rounded-[16%] bg-orange align-middle text-ink shadow-[0_10px_24px_rgba(255,118,42,0.35)] transition-transform duration-300 hover:scale-110 hover:rotate-6">
              <ArrowUpRight className="size-[55%]" strokeWidth={2.8} />
            </span>
            TER
          </p>
        </div>
      </div>
    </section>
  );
}