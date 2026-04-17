import { PlaceholderImage, PlaceholderVideo } from "@/components/ui/PlaceholderAsset";

export function UmbrellaHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 pt-24 pb-16 sm:pt-28 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-transparent">
        <div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(153_100%_50%/0.12),transparent)]" />
      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-[10px] font-medium text-accent">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Online business infrastructure
          </div>
          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            We build the systems behind online businesses.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Digidle is the umbrella for vetted talent networks, creator monetization, and AI-powered coaching
            infrastructure—so the right people find the right growth path.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2 lg:items-stretch">
          <PlaceholderVideo
            label="Hero video (placeholder)"
            aspectRatio="16:9"
            className="glass-card min-h-[200px] rounded-xl border-white/10 lg:min-h-0"
          />
          <PlaceholderImage
            label="Brand / ecosystem visual"
            aspectRatio="4:3"
            className="glass-card min-h-[200px] flex-1 rounded-xl border-white/10 lg:min-h-0"
          />
        </div>
      </div>
    </section>
  );
}
