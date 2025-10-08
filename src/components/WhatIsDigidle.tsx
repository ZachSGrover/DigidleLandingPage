import { Play, Users, Zap, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const WhatIsDigidle = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.1);

  return (
    <section ref={sectionRef} id="what-is-digidle" className="py-24 bg-gradient-to-b from-primary/95 via-primary/85 to-primary/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* VSL Placeholder */}
          <div className="relative">
            <div className="relative bg-black/20 rounded-2xl overflow-hidden shadow-2xl">
              {/* Video placeholder with play button overlay */}
              <div className="aspect-video bg-gradient-to-br from-primary/60 to-primary/40 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm border border-white/30">
                    <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                  </div>
                  <p className="text-white/80 text-sm font-medium">Watch Our Story</p>
                </div>
              </div>
              
              {/* Subtle overlay for video-like appearance */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/20 rounded-full blur-sm"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/30 rounded-full blur-sm"></div>
          </div>

          {/* Content */}
          <div className="text-white space-y-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
                What is Digidle?
              </h2>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                We're the digital talent marketplace that connects entrepreneurs and creators with vetted specialists in today's most in-demand niches. No more endless searching through unvetted freelancers.
              </p>
            </div>

            {/* Key points */}
            <div className="space-y-6">
              <div 
              className={`flex items-start gap-4 transition-all duration-1000 ${
                isSectionVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}
              style={{ 
                transitionDelay: isSectionVisible ? '400ms' : '0ms'
              }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:bg-accent/30">
                  <Users className="h-6 w-6 text-accent transition-all duration-500 hover:scale-110" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Vetted Talent Only</h3>
                  <p className="text-white/80">Every specialist is pre-screened and verified for quality and expertise in their niche.</p>
                </div>
              </div>

              <div 
              className={`flex items-start gap-4 transition-all duration-1000 ${
                isSectionVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}
              style={{ 
                transitionDelay: isSectionVisible ? '800ms' : '0ms'
              }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:bg-accent/30">
                  <Zap className="h-6 w-6 text-accent transition-all duration-500 hover:scale-110" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Competitive Bidding</h3>
                  <p className="text-white/80">Get multiple proposals from qualified specialists, ensuring you find the best fit at the right price.</p>
                </div>
              </div>

              <div 
              className={`flex items-start gap-4 transition-all duration-1000 ${
                isSectionVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}
              style={{ 
                transitionDelay: isSectionVisible ? '1200ms' : '0ms'
              }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:bg-accent/30">
                  <Shield className="h-6 w-6 text-accent transition-all duration-500 hover:scale-110" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Launch Faster</h3>
                  <p className="text-white/80">Skip the lengthy hiring process and launch your projects in days, not weeks.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button className="inline-flex items-center gap-2 bg-primary/90 text-white font-semibold px-8 py-4 rounded-full hover:bg-accent/25 transition-colors">
                <Play className="h-5 w-5" />
                Watch Full Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
