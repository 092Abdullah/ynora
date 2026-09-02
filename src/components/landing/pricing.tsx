import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowSwap } from "./arrow-swap";
import { Reveal } from "./reveal";

export function Pricing() {
  const [monthly, setMonthly] = useState(true);

  return (
    <section id="pricing" className="bg-black py-10 text-snow lg:py-14">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12">
        <Reveal className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-[#FE7428]" />
              <p className="section-kicker text-muted">Price</p>
            </div>
            <h2 className="display-md">
              Our <span className="inline-block bg-[#FE7428] px-2 py-[0.08em] text-snow">Pricing</span>
            </h2>
          </div>
          <div className="flex w-fit items-center rounded-full bg-[#141414] p-1 text-xs font-medium">
            <button
              type="button"
              onClick={() => setMonthly(false)}
              className={cn(
                "min-h-10 rounded-full px-4 py-1.5 transition-colors",
                !monthly ? "bg-snow text-ink" : "text-muted hover:text-snow",
              )}
            >
              Per Project
            </button>
            <button
              type="button"
              onClick={() => setMonthly(true)}
              className={cn(
                "min-h-10 rounded-full px-4 py-1.5 transition-colors",
                monthly ? "bg-snow text-ink" : "text-muted hover:text-snow",
              )}
            >
              Monthly
            </button>
          </div>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-[1fr_1.35fr]">
          <Reveal delay={0} as="article" className="rounded-none border border-white/8 bg-[#141414] p-5 transition-all duration-300 hover:border-[#FE7428]/50 sm:p-6">
            <h3 className="text-lg font-semibold">AI Strategy & Consulting</h3>
            <p className="mt-1 text-sm text-muted">Boost performance with bespoke AI models</p>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              <li className="flex gap-2">
                <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-[#FE7428]" />
                Predictive analytics & automation
              </li>
              <li className="flex gap-2">
                <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-[#FE7428]" />
                NLP & data intelligence
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-3 sm:mt-8">
              <p className="text-3xl font-bold">{monthly ? "$1,320" : "$8,400"}</p>
              <button
                type="button"
                role="switch"
                aria-checked={monthly}
                onClick={() => setMonthly((v) => !v)}
                className={cn(
                  "relative h-6 w-11 rounded-full transition-colors",
                  monthly ? "bg-[#FE7428]" : "bg-white/15",
                )}
              >
                <span
                  className={cn(
                    "absolute top-0.5 left-0.5 size-5 rounded-full bg-snow transition-transform",
                    monthly && "translate-x-5",
                  )}
                />
              </button>
            </div>
          </Reveal>

          <Reveal delay={120} as="article" className="flex flex-col rounded-none border border-white/8 bg-[#141414] p-5 transition-all duration-300 hover:border-[#FE7428]/50 sm:p-6">
            <p className="flex items-baseline gap-1">
              <span className="text-4xl font-bold">{monthly ? "$2,299" : "$14,900"}</span>
              <span className="text-sm text-muted">{monthly ? "/monthly" : "/project"}</span>
            </p>
            <ul className="mt-6 flex-1 space-y-3 text-sm text-muted">
              {[
                "Tailored AI roadmap aligned with your goals",
                "Discovery workshops & strategy sessions",
                "Industry-specific insights",
                "Ongoing advisory support",
              ].map((item) => (
                <li key={item} className="group flex gap-2">
                  <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-[#FE7428] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col items-stretch gap-4 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted">
                Delivery Time: <span className="text-snow">2-3 weeks</span>
              </p>
              <a
                href="#contact"
                className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#FE7428] px-5 py-2.5 text-sm font-semibold text-snow transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-hot hover:shadow-[0_10px_24px_rgba(254,116,40,0.4)]"
              >
                Get Started
                <ArrowSwap className="size-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}