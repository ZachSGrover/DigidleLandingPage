import { Shield, Eye, Zap, Users, Crown, BookOpen } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Shield,
    title: "Vetted Specialists",
    description: "Every member is screened for expertise in their role.",
  },
  {
    icon: Eye,
    title: "Transparent Opportunities",
    description: "Businesses post directly into role-specific communities.",
  },
  {
    icon: Zap,
    title: "Faster Outcomes",
    description: "Clear briefs, direct access, and trusted connections mean projects move in days, not weeks.",
  },
  {
    icon: Users,
    title: "Talent Communities",
    description: "Specialists network inside their niche, share wins, exchange tools, and grow together.",
  },
  {
    icon: Crown,
    title: "The Founder's High Table",
    description: "A space where businesses, startups, and creators connect, collaborate, and learn from one another.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Access to insights, playbooks, and shared knowledge across both sides of the network.",
  },
];

export const SocialProof = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.1);

  return (
    <section ref={sectionRef} id="social-proof" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="transition-all duration-1000">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            What Digidle Offers
          </h2>
          <p className="text-xl text-muted-foreground text-center max-w-4xl mx-auto mb-16 leading-relaxed">
            Digidle removes the friction between talent and business. We provide everything you need to connect, collaborate, and succeed together.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`text-center transition-all duration-1000 ${
                isSectionVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ 
                transitionDelay: isSectionVisible ? `${index * 200 + 400}ms` : '0ms'
              }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4 transition-all duration-500 hover:scale-110 hover:bg-accent/20 group">
                <feature.icon 
                  className="h-8 w-8 text-accent text-green-800 transition-all duration-500 group-hover:scale-110" 
                  strokeWidth={1.5} 
                />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3 transition-all duration-500 group-hover:text-accent">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mb-16 pt-20">
            <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">Our Mission</h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              To create a network where talent finds real opportunities and businesses find the right people—clearly, transparently, and profitably.
            </p>
          </div>
      </div>
    </section>
  );
};
