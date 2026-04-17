import { BarChart3, Bot, Layers, LayoutGrid, MessageCircle, Palette, Target, TrendingUp, UserPlus } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const capabilities: { title: string; body: string; icon: typeof Layers }[] = [
  {
    title: "Backend Buildout",
    body: "We help build the structure, systems, and moving parts behind your business.",
    icon: Layers,
  },
  {
    title: "Monetization Strategy",
    body: "We help turn attention, content, traffic, and offers into real revenue.",
    icon: TrendingUp,
  },
  {
    title: "Content Systems",
    body: "From planning and execution to scheduling and support, we help organize content for growth.",
    icon: LayoutGrid,
  },
  {
    title: "Lead Generation",
    body: "We build systems that bring in leads, organize demand, and create opportunities.",
    icon: Target,
  },
  {
    title: "Media Buying & Market Research",
    body: "We help identify opportunities, test strategy, study markets, and use paid traffic where it makes sense.",
    icon: BarChart3,
  },
  {
    title: "Chatting & DM Systems",
    body: "We help manage conversations, outbound messaging, and backend communication systems that support sales and conversion.",
    icon: MessageCircle,
  },
  {
    title: "Automation & AI",
    body: "We use AI and automation where it actually improves speed, output, and efficiency.",
    icon: Bot,
  },
  {
    title: "Design & Development",
    body: "We help with branding, creative assets, websites, landing pages, backend tools, and digital infrastructure.",
    icon: Palette,
  },
  {
    title: "Specialized Talent",
    body: "We bring in the right people for the job based on what your business needs.",
    icon: UserPlus,
  },
];

export function MICapabilitiesSection() {
  const [sectionRef, isVisible] = useScrollAnimation(0.05);

  return (
    <section 
      ref={sectionRef as any}
      className="relative scroll-mt-20 overflow-hidden py-24" 
      id="capabilities"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className={cn(
          "mb-14 text-center transition-all duration-700 delay-100",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        )}>
          <h2 className="mb-4 text-3xl font-medium tracking-tight text-white md:text-5xl">Core Capabilities</h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            What we help build, automate, and staff—so you can focus on the business, not the busywork.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                "glass-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 p-6 transition-all duration-700 hover:border-emerald-500/20",
                isVisible 
                  ? "translate-y-0 opacity-100" 
                  : "translate-y-8 opacity-0"
              )}
              style={{ 
                transitionDelay: `${(index * 100) + 200}ms` 
              }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/15 bg-emerald-500/10 text-emerald-400 transition-transform duration-300 group-hover:scale-105">
                <item.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mb-2 text-base font-medium text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
