import { ArrowUpRight } from "lucide-react";

const brands = [
  {
    name: "Modern Athlete",
    subtitle: "For fitness coaches looking to automate and scale",
    description:
      "Modern Athlete helps fitness coaches build the backend of their business so they can grow without doing everything themselves. From systems and lead flow to content support and automation, it is built to help coaches scale with more structure.",
    href: "https://www.modernathlete.io",
    logoSrc: "/ModernAthleteLogo-removebg-preview.png",
    accent: "athlete" as const,
  },
  {
    name: "Modern Sales Agency",
    subtitle: "For creators looking to monetize content",
    description:
      "Modern Sales Agency helps creators turn attention into revenue through stronger backend systems, monetization strategy, content support, and specialized talent built around growth.",
    href: "https://modernsalesagency.com",
    logoSrc: "/MSALogo.png",
    accent: "sales" as const,
  },
];

const accentRing =
  "group relative flex min-h-[280px] w-full flex-col overflow-hidden rounded-2xl border p-8 text-left transition-all duration-300 hover:-translate-y-0.5 md:min-h-[320px]";

export function MIBrandsSection() {
  return (
    <section className="scroll-mt-20 border-t border-white/5 bg-transparent py-24" id="brands">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="mb-3 text-3xl font-medium tracking-tight text-white md:text-4xl">Our Brands</h2>
          <p className="text-sm text-gray-400">Two focused paths—same Digidle standard of execution.</p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
          {brands.map((b) => (
            <a
              key={b.name}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              className={
                b.accent === "athlete"
                  ? `${accentRing} border-cyan-400/25 bg-gradient-to-b from-cyan-500/[0.06] to-transparent hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10`
                  : `${accentRing} border-purple-400/25 bg-gradient-to-b from-purple-500/[0.06] to-transparent hover:border-purple-400/40 hover:shadow-lg hover:shadow-purple-500/10`
              }
            >
              <div className="pointer-events-none absolute inset-0 opacity-[0.12] [mask-image:linear-gradient(to_bottom,black,transparent)] bg-grid" />
              <div className="relative mb-6 flex items-start justify-between gap-4">
                <div
                  className={
                    b.accent === "athlete"
                      ? "flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-black/30 p-2 shadow-inner md:h-20 md:w-20"
                      : "flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-2xl border border-purple-400/20 bg-black/30 p-2 shadow-inner md:h-20 md:w-20"
                  }
                >
                  <img src={b.logoSrc} alt={`${b.name} logo`} className="h-full w-full object-contain" />
                </div>
                <span
                  className={
                    b.accent === "athlete"
                      ? "inline-flex items-center gap-1 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-cyan-200/90"
                      : "inline-flex items-center gap-1 rounded-full border border-purple-400/25 bg-purple-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-purple-200/90"
                  }
                >
                  Explore
                  <ArrowUpRight className="h-3 w-3" strokeWidth={2} />
                </span>
              </div>
              <h3 className="relative mb-2 text-2xl font-medium tracking-tight text-white md:text-3xl">{b.name}</h3>
              <p
                className={
                  b.accent === "athlete" ? "relative mb-4 text-sm font-medium text-cyan-200/90" : "relative mb-4 text-sm font-medium text-purple-200/90"
                }
              >
                {b.subtitle}
              </p>
              <p className="relative flex-1 text-sm leading-relaxed text-gray-400">{b.description}</p>
              <div className="relative mt-8 flex items-center gap-2 text-sm font-medium text-white">
                <span>Open {b.name}</span>
                <ArrowUpRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
