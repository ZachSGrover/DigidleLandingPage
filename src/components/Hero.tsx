import { Button } from "@/components/ui/button";
import { CheckCircle2, Star } from "lucide-react";
import digidleLogo from "@/assets/digidle-logo.png";
import { trackSubscribeNow, trackApplyAsTalent, trackJoinCommunity } from "@/lib/analytics";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-b from-primary via-primary/80 to-primary/40 text-primary-foreground overflow-hidden">
      {/* Subtle floating shapes for visual interest */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-40 left-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 py-12">
        {/* Hero Content */}
        <div className="pt-16 sm:pt-20 max-w-5xl mx-auto text-center animate-fade-in">
          {/* 5 Star Rating */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 sm:h-6 sm:w-6 text-accent fill-current text-yellow-300" strokeWidth={0.1} />
            ))}
          </div>
          
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            A Smarter Way to Connect Talent and Business.
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-primary-foreground/90 max-w-3xl mx-auto font-light px-4">
          A vetted network connecting ambitious businesses with verified specialists
          </p>

          {/* 3-step preview with checkmarks */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-8 sm:mb-12 text-left sm:text-center px-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base">Vetted specialists only</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base">Competitive bidding</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base">Launch in days, not weeks</span>
            </div>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4 mb-8 sm:mb-12">
            <Button 
              variant="hero" 
              size="xl"
              className="bg-primary/90 text-white w-full sm:w-auto min-w-[200px] sm:min-w-[240px] hover:bg-primary/60 text-sm sm:text-base"
              onClick={() => {
                trackSubscribeNow();
                window.open('https://community.digidle.com/checkout/join-the-digidle-network', '_blank');
              }}
            >
              Subscribe Now
            </Button>
            <Button 
              variant="outline-white" 
              size="xl"
              className="w-full sm:w-auto min-w-[200px] sm:min-w-[240px] text-sm sm:text-base"
              onClick={() => {
                trackApplyAsTalent();
                window.open('https://tally.so/r/w4RyoX', '_blank');
              }}
            >
              Apply as Talent
            </Button>
          </div>
        </div>

        {/* Free Community Banner - At bottom of hero section */}
        <div className="absolute bottom-0 left-0 right-0 py-4 sm:py-5 bg-primary/90 backdrop-blur-sm border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center">
              <h3 className="text-white text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                Join Our Community
              </h3>
              <p className="text-white/80 text-xs sm:text-sm mb-3 sm:mb-4 max-w-2xl mx-auto">
                Connect with like-minded professionals, share insights, and access exclusive opportunities before they go public.
              </p>
              <button 
                className="bg-accent text-primary font-semibold px-4 sm:px-6 py-2 rounded-full hover:bg-accent/90 transition-colors text-sm sm:text-base"
                onClick={() => {
                  trackJoinCommunity();
                  window.open('https://discord.digidle.com', '_blank');
                }}
              >
                Join Free Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
