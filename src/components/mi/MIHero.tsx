import { Icon } from "@iconify/react";

export function MIHero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full bg-transparent">
        <div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[10px] font-medium text-emerald-300">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          Agency · Systems · Talent
        </div>

        <h1 className="mb-4 text-5xl font-medium leading-[1.1] tracking-tight text-white md:text-7xl">Welcome to Digidle</h1>

        <p className="mb-8 text-xl font-medium tracking-tight text-emerald-300/95 md:text-2xl">The Digital Money Middleman</p>

        <p className="mb-12 max-w-2xl text-lg font-light leading-relaxed text-gray-400">
          Digidle is an agency built to help people monetize and scale online businesses the right way. Whether you&apos;re a
          creator, a UGC brand, a fitness coach, or building something else online, we build the backend of your business and bring
          in the right specialized talent for the job. From AI, design, and development to content, lead systems, and copy, we
          turn ideas into execution.
        </p>

        <div className="relative z-20 mb-14 w-full max-w-2xl">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#121212]/80 shadow-2xl backdrop-blur-sm">
            <div className="absolute inset-0 bg-grid opacity-40" />
            <div className="relative flex flex-col gap-4 p-6 text-left md:flex-row md:items-center md:justify-between md:gap-8">
              <div className="flex flex-1 flex-col gap-3">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                  <Icon icon="lucide:workflow" className="text-emerald-400" width={14} />
                  How we work with you
                </div>
                <p className="text-sm leading-relaxed text-gray-300">
                  Backend buildout, monetization strategy, content systems, and specialized talent—wired together so your business
                  can run and grow.
                </p>
              </div>
              <div className="hidden h-px w-full bg-white/10 md:hidden" />
              <div className="flex shrink-0 flex-wrap gap-2 md:justify-end">
                {["Systems", "Talent", "Execution"].map((label) => (
                  <span
                    key={label}
                    className="rounded-lg border border-emerald-500/25 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-200"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20">
          <a href="#contact" className="shiny-cta-digidle group inline-flex transition-all">
            <span className="relative z-10 flex items-center gap-2">
              Work With Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="transition-transform group-hover:translate-x-0.5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-3 font-mono text-xs text-white/70">
          <span className="text-gray-500">Our brands:</span>
          <span className="flex items-center gap-1.5 rounded border border-white/10 bg-white/5 px-2 py-1">
            <Icon icon="mdi:arm-flex" width={14} />
            Modern Athlete
          </span>
          <span className="flex items-center gap-1.5 rounded border border-white/10 bg-white/5 px-2 py-1">
            <Icon icon="mdi:trending-up" width={14} />
            Modern Sales Agency
          </span>
        </div>
      </div>
    </section>
  );
}
