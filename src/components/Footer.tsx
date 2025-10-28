import { Button } from "@/components/ui/button";
import digidleLogo from "@/assets/digidle-logo.png";
import { trackSubscribeNow, trackApplyAsTalent, trackJoinDiscord } from "@/lib/analytics";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Logo and Tagline */}
          <div className="mb-12 text-center">
            <img 
              src={digidleLogo} 
              alt="Digidle" 
              className="h-12 w-12 object-contain mx-auto mb-4"
            />
            <p className="text-lg text-primary-foreground/80">
              The digital talent marketplace for the modern creator economy
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              variant="hero" 
              size="default"
              className="w-full sm:w-auto"
              onClick={() => {
                trackSubscribeNow();
                window.open('https://community.digidle.com/checkout/join-the-digidle-network', '_blank');
              }}
            >
              Subscribe Now
            </Button>
            <Button 
              variant="outline-white" 
              size="default"
              className="w-full sm:w-auto"
              onClick={() => {
                trackApplyAsTalent();
                window.open('https://tally.so/r/w4RyoX', '_blank');
              }}
            >
              Apply as Talent
            </Button>
            <Button 
              variant="ghost" 
              size="default"
              className="w-full sm:w-auto text-primary-foreground hover:bg-white/10"
              onClick={() => {
                trackJoinDiscord();
                window.open('https://discord.gg/digidle', '_blank');
              }}
            >
              Join Discord
            </Button>
          </div>

          {/* Footer Links */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
              <div>
                © 2025 Digidle. All rights reserved.
              </div>
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
