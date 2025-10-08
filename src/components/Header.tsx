import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import digidleLogo from "@/assets/digidle-logo.png";

const navigationItems = [
  { name: "What is Digidle", href: "#what-is-digidle" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Why Digidle", href: "#value-proposition" },
  { name: "Features", href: "#social-proof" }
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("#hero")}
              className="flex items-center space-x-3 hover:opacity-50 transition-opacity"
            >
              <img
                src={digidleLogo}
                alt="Digidle"
                className="h-10 w-10 object-contain"
              />
              <span
                className={`font-serif text-2xl font-bold ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                DIGIDLE
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
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
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
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
            className="md:hidden p-2"
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-sm font-medium transition-colors hover:text-accent text-foreground"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
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
        )}
      </div>
    </header>
  );
};
