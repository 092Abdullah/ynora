import { Crosshair, Pentagon } from "lucide-react";

export function WhoWeAre() {
  return (
    <section id="who" className="bg-ink text-snow">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
        {/* Row 1 */}
        <div className="flex items-start gap-2 border-b border-white/10 px-5 pt-10 pb-8 sm:px-6 lg:px-8 lg:pt-10 lg:pb-10 xl:px-10">
          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-orange" />
          <p className="section-kicker text-muted">Who we are</p>
        </div>

        <div className="border-b border-white/10 px-5 pt-2 pb-8 sm:px-6 lg:col-span-3 lg:px-10 lg:pt-10 lg:pb-10 lg:pr-24">
          <h2 className="display-md max-w-2xl font-medium">
            <span className="mr-1.5 inline-block bg-orange px-1.5 py-[0.06em] leading-none text-snow">
              Dedicated
            </span>
            to AI, we build solutions that transform workflows and accelerate success
          </h2>
        </div>

        {/* Row 2 */}
        <div className="relative px-5 py-8 sm:px-6 lg:flex lg:flex-col lg:justify-end lg:px-8 lg:py-10 xl:px-10">
          <span className="pointer-events-none absolute top-0 left-0 h-5 w-5 border-t border-l border-white/40 sm:h-6 sm:w-6" />
          <article className="group h-full p-0 lg:flex lg:min-h-[220px] lg:flex-col lg:justify-end">
            <div className="mb-8 flex size-11 items-center justify-center text-snow lg:mb-10">
              <Pentagon className="size-6" strokeWidth={1.5} />
            </div>
            <h3 className="section-kicker mb-3 text-snow">Mechanization</h3>
            <p className="text-[13px] leading-relaxed text-muted">
              We design AI-driven systems that automate repetitive tasks, freeing your team to focus on
              creativity, strategy, and high-value work.
            </p>
          </article>
        </div>

        <div className="relative px-5 py-8 sm:px-6 lg:flex lg:flex-col lg:justify-end lg:px-8 lg:py-10 xl:px-10">
          <span className="pointer-events-none absolute top-0 right-0 h-5 w-5 border-t border-r border-white/40 sm:h-6 sm:w-6" />
          <article className="group h-full p-0 lg:flex lg:min-h-[220px] lg:flex-col lg:justify-end">
            <div className="mb-8 flex size-11 items-center justify-center text-snow lg:mb-10">
              <Crosshair className="size-6" strokeWidth={1.5} />
            </div>
            <h3 className="section-kicker mb-3 text-snow">Intelligence</h3>
            <p className="text-[13px] leading-relaxed text-muted">
              Our AI analyzes data in real time to deliver actionable insights—helping your business
              anticipate trends and make smarter decisions.
            </p>
          </article>
        </div>

        <div className="hidden lg:block" />

        <div className="px-5 pb-10 sm:px-6 lg:px-0 lg:py-0">
          <div className="group h-full min-h-[160px] overflow-hidden sm:min-h-[200px] lg:min-h-full">
            <img
              src="/images/particles.jpg"
              alt="Neural particle field"
              className="h-full min-h-[160px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:min-h-[200px] lg:min-h-[260px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}