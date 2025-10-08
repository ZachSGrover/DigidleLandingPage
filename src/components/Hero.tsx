import { Button } from "@/components/ui/button";
import { CheckCircle2, Star } from "lucide-react";
import digidleLogo from "@/assets/digidle-logo.png";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-b from-primary via-primary/80 to-primary/40 text-primary-foreground overflow-hidden">
      {/* Subtle floating shapes for visual interest */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-40 left-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 py-12">
        {/* Logo
        <div className="mb-20">
          <img 
            src={digidleLogo} 
            alt="Digidle" 
            className="h-16 w-16 object-contain"
          />
        </div> */}

        {/* Hero Content */}
        <div className="pt-20 max-w-5xl mx-auto text-center animate-fade-in">
          {/* 5 Star Rating */}
          <div className="flex items-center justify-center gap-4 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-accent fill-current text-yellow-300" strokeWidth={0.1} />
            ))}
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            A Smarter Way to Connect Talent and Business.
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto font-light">
          A vetted network connecting ambitious businesses with verified specialists
          </p>

          {/* 3-step preview with checkmarks */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-left md:text-center">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
              <span className="text-sm md:text-base">Vetted specialists only</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
              <span className="text-sm md:text-base">Competitive bidding</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
              <span className="text-sm md:text-base">Launch in days, not weeks</span>
            </div>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              variant="hero" 
              size="xl"
              className="bg-primary/90 text-white w-full sm:w-auto min-w-[240px] hover:bg-primary/60"
            >
              Subscribe Now
            </Button>
            <Button 
              variant="outline-white" 
              size="xl"
              className="w-full sm:w-auto min-w-[240px]"
            >
              Apply as Talent
            </Button>
          </div>
        </div>

        {/* Free Community Banner */}
        <div className="absolute bottom-0 left-0 right-0 py-5 bg-primary/90 backdrop-blur-sm border-t border-white/10">
          <div className="text-center">
            <h3 className="text-white text-lg font-semibold mb-2">
              Join Our Community
            </h3>
            <p className="text-white/80 text-sm mb-4 max-w-2xl mx-auto">
              Connect with like-minded professionals, share insights, and access exclusive opportunities before they go public.
            </p>
            <button className="bg-accent text-primary font-semibold px-6 py-2 rounded-full hover:bg-accent/90 transition-colors">
            Join Free Community
            </button>
          </div>
        </div>

        {/* Logo Banner - Commented Out */}
        {/* <div className="absolute bottom-0 left-0 right-0 py-8 bg-primary/90 backdrop-blur-sm border-t border-white/10">
          <div className="text-center mb-6">
            <p className="text-white/90 text-sm font-medium tracking-wider uppercase">
              Connected with Industry Leaders
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-16">
            <img 
              src="/ModernAthlete_logo.png" 
              alt="Modern Athlete" 
              className="h-10 w-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
            />
            <img 
              src="/MSA_logo.png" 
              alt="MSA" 
              className="h-10 w-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
            />
            <img 
              src="/SWEEP_Logo.png" 
              alt="Sweep" 
              className="h-10 w-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};
