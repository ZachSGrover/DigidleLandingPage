import { Link } from "react-router-dom";
import { ArrowRight, Cpu, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/ui/PlaceholderAsset";
import { cn } from "@/lib/utils";

const brands = [
  {
    name: "Digidle Network",
    tagline: "A vetted network connecting talent and business.",
    bullets: ["Verified specialists and competitive bidding", "Community and launch support", "On-site experience at digidle.com/network"],
    href: "/network",
    external: false,
    cta: "Explore the Network",
    Icon: Users,
    accent: "network" as const,
    placeholderLabel: "Network logo / graphic",
  },
  {
    name: "Modern Sales Agency",
    tagline: "Full-stack monetization infrastructure for creators.",
    bullets: ["24/7 DM sales and multi-platform presence", "Media buying with shared expense model", "Professional systems, not guesswork"],
    href: "https://modernsalesagency.com",
    external: true,
    cta: "Visit Modern Sales Agency",
    Icon: TrendingUp,
    accent: "sales" as const,
    placeholderLabel: "MSA brand asset",
  },
  {
    name: "Modern Athlete",
    tagline: "AI-powered coaching systems for fitness professionals.",
    bullets: ["AI avatar and programming at scale", "Automated revenue and client journeys", "Powered by SWEEP AI backend"],
    href: "https://www.modernathlete.io",
    external: true,
    cta: "Visit Modern Athlete",
    Icon: Cpu,
    accent: "athlete" as const,
    placeholderLabel: "Modern Athlete asset",
  },
];

const accentStyles = {
  network: "border-brand-network/35 shadow-[0_0_24px_-12px_hsl(var(--brand-network)/0.35)]",
  sales: "border-brand-sales/30 shadow-[0_0_24px_-12px_hsl(var(--brand-sales)/0.2)]",
  athlete: "border-brand-athlete/35 shadow-[0_0_24px_-12px_hsl(var(--brand-athlete)/0.35)]",
};

const iconStyles = {
  network: "bg-brand-network/15 text-brand-network",
  sales: "bg-brand-sales/12 text-brand-sales",
  athlete: "bg-brand-athlete/15 text-brand-athlete",
};

const bulletClass = {
  network: "bg-brand-network",
  sales: "bg-brand-sales",
  athlete: "bg-brand-athlete",
};

export function BrandShowcase() {
  return (
    <section className="border-b border-white/10 py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Where do you fit?</h2>
          <p className="mt-4 text-muted-foreground">
            Three brands, one thesis: professional infrastructure for people building online. Choose your path—we’ll send you
            to the right experience.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-3">
          {brands.map((brand) => (
            <article
              key={brand.name}
              className={cn(
                "glass-card flex flex-col overflow-hidden rounded-2xl border transition-transform hover:-translate-y-0.5",
                accentStyles[brand.accent]
              )}
            >
              <div className="p-6 pb-0">
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
                      iconStyles[brand.accent]
                    )}
                  >
                    <brand.Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground">{brand.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{brand.tagline}</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
                  {brand.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span
                        className={cn("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full", bulletClass[brand.accent])}
                        aria-hidden
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 px-6">
                <PlaceholderImage
                  label={brand.placeholderLabel}
                  aspectRatio="16:9"
                  className="min-h-[120px] rounded-xl border-white/10 bg-black/20 py-6"
                />
              </div>
              <div className="mt-auto p-6 pt-4">
                {brand.external ? (
                  <Button
                    asChild
                    className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <a href={brand.href} target="_blank" rel="noopener noreferrer">
                      {brand.cta}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                ) : (
                  <Button asChild className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link to={brand.href}>
                      {brand.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
