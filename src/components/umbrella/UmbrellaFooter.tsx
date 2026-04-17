import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

export function UmbrellaFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-umbrella-surface py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-2.5 md:justify-start">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-black p-1.5">
                <img src="/favicon.png" alt="" width={32} height={32} className="h-full w-full object-contain" />
              </span>
              <p className="font-serif text-xl font-bold text-foreground">DIGIDLE</p>
            </div>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Infrastructure for online businesses—networks, monetization, and AI systems.
            </p>
          </div>
          <nav className="flex flex-col items-center gap-3 sm:flex-row sm:gap-8 md:items-end">
            <Link to="/network" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Digidle Network
            </Link>
            <a
              href="https://modernsalesagency.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Modern Sales Agency
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
            <a
              href="https://www.modernathlete.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Modern Athlete
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
            <a
              href="https://discord.gg/digidle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Discord
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          </nav>
        </div>
        <p className="mt-10 text-center text-xs text-muted-foreground/80 md:text-left">
          © {year} Digidle. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
