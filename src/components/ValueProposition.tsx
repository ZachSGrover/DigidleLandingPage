import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, Clock, Target, Sparkles, Award, Users } from "lucide-react";
import { trackSubscribeNow, trackApplyAsTalent } from "@/lib/analytics";

const businessBenefits = [
  {
    icon: Clock,
    text: "FASTER project deployment",
  },
  {
    icon: Shield,
    text: "Vetted specialists only",
  },
  {
    icon: TrendingUp,
    text: "Competitive bidding",
  },
];

const talentBenefits = [
  {
    icon: Sparkles,
    text: "Get discovered by quality clients",
  },
  {
    icon: Users,
    text: "Network with like minded individuals",
  },
  {
    icon: Target,
    text: "Bid on projects you actually want",
  },
  {
    icon: Award,
    text: "Completely FREE",
  },
];

export const ValueProposition = () => {
  return (
    <section id="value-proposition" className="py-24">
      <div className="container mx-auto px-6">
        <div className="transition-all duration-1000">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Why Digidle?
          </h2>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover the unique advantages that make Digidle the preferred choice for both businesses seeking top talent and specialists looking for meaningful projects.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* For Businesses */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-12 animate-fade-in">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">
              Why Businesses Choose Digidle
            </h2>
            
            <div className="space-y-6 mb-10">
              {businessBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-accent" />
                  </div>
                  <p className="text-2xl font-bold pt-2">{benefit.text}</p>
                </div>
              ))}
            </div>

            <Button 
              variant="hero" 
              size="xl" 
              className="w-full sm:w-auto"
              onClick={() => {
                trackSubscribeNow();
                window.open('https://community.digidle.com/checkout/join-the-digidle-network', '_blank');
              }}
            >
              Subscribe Now
            </Button>
          </div>

          {/* For Talent */}
          <div className="bg-secondary rounded-2xl p-12 border-2 border-sage/20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Why Talent Thrives Here
            </h2>
            
            <div className="space-y-6 mb-10">
              {talentBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <benefit.icon className="h-5 w-5 text-accent text-green-800" />
                  </div>
                  <p className="text-lg pt-2 text-foreground">{benefit.text}</p>
                </div>
              ))}
            </div>

            <Button 
              variant="default" 
              size="xl" 
              className="w-full sm:w-auto bg-primary hover:bg-primary/90"
              onClick={() => {
                trackApplyAsTalent();
                window.open('https://tally.so/r/w4RyoX', '_blank');
              }}
            >
              Apply as Talent
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
