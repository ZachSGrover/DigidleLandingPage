import { FileText, Users, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: FileText,
    title: "Post a Role or Project",
    description: "Share your project details and requirements with the right talent communities—direct, clear, and tailored to your niche.",
  },
  {
    icon: Users,
    title: "Get Vetted Talent Bids",
    description: "Receive proposals only from pre-screened specialists. Competitive bids, no wasted time.",
  },
  {
    icon: CheckCircle,
    title: "Pick the Perfect Fit",
    description: "Review profiles, compare offers, and choose the talent that matches your project with confidence.",
  },
];

export const HowItWorks = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.1);

  return (
    <section ref={sectionRef} id="how-it-works" className="py-24 bg-gradient-to-b from-primary/50 to-secondary">
      <div className="container mx-auto px-6 pt-15">
        <div 
          className={`transition-all duration-1500 ${
            isSectionVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            How It Works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`text-center transition-all duration-1000 ${
                isSectionVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: isSectionVisible ? `${index * 400 + 600}ms` : '0ms'
              }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6 transition-all duration-500 hover:scale-110 hover:bg-accent/20">
                <step.icon 
                  className="h-10 w-10 text-accent text-green-500 transition-all duration-500 hover:scale-110" 
                  strokeWidth={1.5} 
                />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
