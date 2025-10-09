
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import digidleLogo from "@/assets/digidle-logo.png";
import { useIsMobile } from "@/hooks/use-mobile";
import { trackJoinCommunity } from "@/lib/analytics";

const navigationItems = [
  { name: "What is Digidle", href: "#what-is-digidle" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Why Digidle", href: "#value-proposition" },
  { name: "Features", href: "#social-proof" }
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#hero")}
            className="flex items-center space-x-2 sm:space-x-3 hover:opacity-50 transition-opacity"
          >
            <img
              src={digidleLogo}
              alt="Digidle"
              className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
            />
            <span
              className={`font-serif text-xl sm:text-2xl font-bold ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              DIGIDLE
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-opacity hover:opacity-50 ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant={scrolled ? "outline" : "outline-white"}
              size="sm"
              onClick={() => scrollToSection("#community")}
            >
              Join Community
            </Button>
            <Button
              variant={scrolled ? "default" : "hero"}
              size="sm"
              onClick={() => scrollToSection("#hero")}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 bg-black/50 backdrop-blur-sm z-40" onClick={() => setIsMenuOpen(false)}>
            <div className="bg-white shadow-xl rounded-b-lg mx-4 mt-2 p-6" onClick={(e) => e.stopPropagation()}>
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-base font-medium transition-colors hover:text-accent text-foreground py-2"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => scrollToSection("#community")}
                    className="w-full"
                  >
                    Join Community
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => scrollToSection("#hero")}
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
