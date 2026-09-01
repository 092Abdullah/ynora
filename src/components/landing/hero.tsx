import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

function WorkBtn({ className }: { className?: string }) {
  return (
    <a
      href="#contact"
      className={cn(
        "inline-flex h-[46px] shrink-0 items-center justify-between gap-7 rounded-[15px] bg-orange px-[21px] text-[14px] font-semibold tracking-[-0.02em] text-ink shadow-[0_8px_20px_rgba(255,118,42,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-hot",
        className,
      )}
    >
      <span>Work with us</span>

      <ArrowUpRight
        className="size-[21px]"
        strokeWidth={2.8}
      />
    </a>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="
        relative
        min-h-[680px]
        overflow-hidden
        bg-paper
        sm:min-h-[760px]
        lg:min-h-[865px]
      "
    >
      {/* HERO VIDEO */}
      <video
        className="
          absolute
          inset-0
          z-0
          h-full
          w-full
          object-cover
          object-bottom
        "
        src="/images/hero-wave-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* =========================================================
          SIDE LABELS
      ========================================================= */}

      {/* LEFT */}
      <p
        className="
          absolute
          bottom-[28%]
          left-[11.4%]
          z-20
          hidden
          w-[150px]
          text-[12px]
          font-medium
          uppercase
          leading-[1.15]
          tracking-[-0.025em]
          text-[#777]
          lg:block
        "
      >
        Continuous
        <br />
        Maintenance &
        <br />
        Enterprise Security
      </p>

      {/* TOP RIGHT */}
      <p
        className="
          absolute
          right-[13.7%]
          top-[21%]
          z-20
          hidden
          w-[145px]
          text-[11px]
          font-medium
          uppercase
          leading-[1.35]
          tracking-[-0.02em]
          text-[#777]
          lg:block
        "
      >
        AI Consulting &
        <br />
        Strategic Roadmaps
      </p>

      {/* VERTICAL RIGHT */}
      <p
        className="
          absolute
          right-[17.5%]
          top-[38%]
          z-20
          hidden
          text-[10px]
          font-medium
          uppercase
          leading-[1.2]
          tracking-[-0.01em]
          text-[#777]
          lg:block
        "
        style={{ writingMode: "vertical-rl" }}
      >
        System Integration & Cloud Architecture
      </p>

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          h-full
          min-h-[680px]
          max-w-[1440px]
          sm:min-h-[760px]
          lg:min-h-[865px]
        "
      >
        {/* =======================================================
            HEADLINE
        ======================================================= */}

        <div
          className="
            absolute
            left-1/2
            top-[14.8%]
            w-[94%]
            -translate-x-1/2
            sm:w-[90%]
            lg:w-[780px]
          "
        >
          {/* =====================================================
              LINE 1
          ===================================================== */}

          <h1
            className="
              hero-display
              whitespace-nowrap
              text-center
              text-[clamp(62px,10.5vw,112px)]
              font-black
              leading-[0.84]
              tracking-[-0.075em]
              text-snow
            "
          >
            EMP
            <span
              className="
                relative
                mx-[0.015em]
                inline-flex
                h-[0.73em]
                w-[0.73em]
                translate-y-[0.015em]
                items-center
                justify-center
                overflow-hidden
                rounded-full
                align-middle
              "
            >
              <img
                src="/images/sphere.jpg"
                alt=""
                className="
                  h-full
                  w-full
                  rounded-full
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-110
                  hover:rotate-12
                "
              />
            </span>
            WERING
          </h1>

          {/* =====================================================
              LINE 2
          ===================================================== */}

          <div
            className="
              mt-[29px]
              flex
              items-center
              justify-center
              lg:mt-[28px]
              lg:translate-x-[7px]
            "
          >
            <p
              className="
                hero-display
                whitespace-nowrap
                text-[clamp(62px,10.5vw,112px)]
                font-black
                leading-[0.84]
                tracking-[-0.075em]
                text-snow
              "
            >
              TO

              <span
                className="
                  relative
                  mx-[0.10em]
                  inline-flex
                  h-[0.67em]
                  w-[0.67em]
                  translate-y-[0.035em]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[15%]
                  align-middle
                "
              >
                <img
                  src="/images/hex.jpg"
                  alt=""
                  className="
                    h-[145%]
                    w-[145%]
                    max-w-none
                    object-cover
                    mix-blend-multiply
                    transition-transform
                    duration-500
                    hover:scale-110
                    hover:rotate-6
                  "
                />
              </span>

              EVOLVE
            </p>
          </div>

          {/* =====================================================
              LINE 3
          ===================================================== */}

          <p
            className="
              hero-display
              mt-[29px]
              whitespace-nowrap
              text-center
              text-[clamp(62px,10.5vw,112px)]
              font-black
              leading-[0.84]
              tracking-[-0.075em]
              text-orange
              lg:mt-[30px]
            "
          >
            SMAR

            <span
              className="
                relative
                mx-[0.025em]
                inline-flex
                h-[0.67em]
                w-[0.67em]
                translate-y-[0.025em]
                items-center
                justify-center
                rounded-[4%]
                bg-ink
                align-middle
              "
            >
              <ArrowUpRight
                className="size-[57%] text-orange"
                strokeWidth={2.8}
              />
            </span>

            TER
          </p>
        </div>

        {/* =======================================================
            DESKTOP CTA
        ======================================================= */}

        <WorkBtn
          className="
            absolute
            left-[11.4%]
            top-[30.4%]
            z-20
            hidden
            w-[211px]
            lg:inline-flex
          "
        />

        {/* =======================================================
            MOBILE CTA
        ======================================================= */}

        <WorkBtn
          className="
            absolute
            left-1/2
            top-[57%]
            w-[190px]
            -translate-x-1/2
            lg:hidden
          "
        />
      </div>
    </section>
  );
}