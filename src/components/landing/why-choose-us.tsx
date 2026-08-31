import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";

const QUOTES = [
  {
    text: "Partnering with Synora changed everything. Their vision and execution reshaped our entire digital strategy.",
    name: "David Acklicknez",
    role: "Marketing Director",
    photo: "/images/david.jpg",
  },
  {
    text: "Ynora didn’t just install models — they rebuilt how our team decides. The roadmap paid for itself in a quarter.",
    name: "Amelia Chen",
    role: "Head of Operations",
    photo: "/images/avatars.jpg",
  },
];

export function WhyChooseUs() {
  const [i, setI] = useState(0);
  const q = QUOTES[i];

  return (
    <section id="why" className="bg-paper py-14 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12">
        <div className="mb-8 grid grid-cols-1 items-start gap-4 lg:mb-14 lg:grid-cols-12 lg:gap-6">
          <div className="flex items-center gap-2 lg:col-span-4 lg:pt-3">
            <span className="size-1.5 rounded-full bg-orange" />
            <p className="section-kicker text-ink/55">Why choose us</p>
          </div>
          <h2 className="display-md text-ink lg:col-span-8">
            Building{" "}
            <span className="inline-block bg-orange px-1.5 py-[0.06em] leading-none text-snow">
              AI solutions
            </span>{" "}
            that
            <br className="hidden sm:block" /> work in real life
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:items-stretch">
          <div className="flex flex-col gap-3">
            <article className="flex flex-1 flex-col rounded-2xl bg-snow p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1 sm:p-6">
              <p className="flex-1 text-[15px] leading-relaxed text-ink/80">“{q.text}”</p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={q.photo}
                  alt={q.name}
                  className="size-10 rounded-full object-cover object-top"
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-ink">{q.name}</p>
                  <p className="text-xs text-ink/45">{q.role}</p>
                </div>
                <div className="ml-auto flex gap-1">
                  <button
                    type="button"
                    className="flex size-11 items-center justify-center rounded-full border border-ink/10 text-ink/60 transition-colors hover:bg-ink hover:text-snow md:size-7"
                    onClick={() => setI((v) => (v === 0 ? QUOTES.length - 1 : v - 1))}
                    aria-label="Previous quote"
                  >
                    <ArrowLeft className="size-3.5" />
                  </button>
                  <button
                    type="button"
                    className="flex size-11 items-center justify-center rounded-full border border-ink/10 text-ink/60 transition-colors hover:bg-ink hover:text-snow md:size-7"
                    onClick={() => setI((v) => (v + 1) % QUOTES.length)}
                    aria-label="Next quote"
                  >
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </div>
            </article>

            <div className="flex items-center gap-3 rounded-2xl bg-ink px-5 py-4 text-snow transition-transform duration-300 hover:scale-[1.02]">
              <div className="flex -space-x-2">
                <img src="/images/avatars.jpg" alt="" className="size-8 rounded-full object-cover object-[18%_center] ring-2 ring-ink" />
                <img src="/images/avatars.jpg" alt="" className="size-8 rounded-full object-cover object-center ring-2 ring-ink" />
                <img src="/images/avatars.jpg" alt="" className="size-8 rounded-full object-cover object-[82%_center] ring-2 ring-ink" />
              </div>
              <div>
                <p className="text-xl font-bold leading-none">3K+</p>
                <p className="mt-1 text-[11px] text-muted">Happy customers</p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-2xl sm:min-h-[320px]">
            <img
              src="/images/vr.jpg"
              alt="Specialist in a VR headset"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/90 via-ink/55 to-transparent px-5 pb-5 pt-16 text-snow">
              <div>
                <p className="text-3xl font-bold leading-none">83%</p>
                <p className="mt-1 text-[11px] text-muted">Customer Satisfaction Rate</p>
              </div>
              <span className="flex size-9 items-center justify-center rounded-full border border-orange/50 text-orange">
                <Check className="size-4" strokeWidth={2.4} />
              </span>
            </div>
          </div>

          <article className="flex flex-col rounded-2xl bg-snow p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1 sm:p-6">
            <h3 className="text-lg font-bold text-ink">Verified Expertise</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">
              We combine deep technical knowledge with creative strategy to deliver AI solutions that
              drive measurable business impact.
            </p>
            <a
              href="#who"
              className="mt-5 inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-snow transition-colors hover:bg-orange"
            >
              More about us
              <ArrowUpRight className="size-3.5" />
            </a>
            <div className="mt-5 flex -space-x-3">
              <img
                src="/images/vr.jpg"
                alt=""
                className="size-16 rounded-lg object-cover ring-2 ring-snow transition-transform duration-300 hover:-translate-y-1 hover:z-10"
              />
              <img
                src="/images/particles.jpg"
                alt=""
                className="size-16 rounded-lg object-cover ring-2 ring-snow transition-transform duration-300 hover:-translate-y-1 hover:z-10"
              />
              <img
                src="/images/david.jpg"
                alt=""
                className="size-16 rounded-lg object-cover ring-2 ring-snow transition-transform duration-300 hover:-translate-y-1 hover:z-10"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
