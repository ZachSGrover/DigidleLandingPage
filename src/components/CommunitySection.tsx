import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Sparkles } from "lucide-react";

const communityPerks = [
  {
    icon: Users,
    text: "1,000+ entrepreneurs and creators",
  },
  {
    icon: Sparkles,
    text: "Exclusive opportunities and tips",
  },
  {
    icon: MessageCircle,
    text: "Active daily discussions",
  },
];

export const CommunitySection = () => {
  return (
    <section id="community" className="py-24 bg-gradient-to-br from-secondary to-sage/10">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Not ready to go all in? Start free.
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
          Digidle’s free community is the open tier where talent and businesses can network, share insights, and explore opportunities. Apply later for vetting, or upgrade to premium when you’re ready.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            {communityPerks.map((perk, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-foreground">
                <perk.icon className="h-5 w-5 text-accent text-green-500 flex-shrink-0" />
                <span>{perk.text}</span>
              </div>
            ))}
          </div>

          <Button 
            variant="discord" 
            size="lg"
            className="min-w-[280px]"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Join Free Community
          </Button>
        </div>
      </div>
    </section>
  );
};
