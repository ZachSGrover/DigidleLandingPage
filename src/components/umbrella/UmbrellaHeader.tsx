import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const external = {
  modernSales: "https://modernsalesagency.com",
  modernAthlete: "https://www.modernathlete.io",
} as const;

const navItems = [
  { label: "Network", to: "/network", external: false },
  { label: "Modern Sales", href: external.modernSales, external: true },
  { label: "Modern Athlete", href: external.modernAthlete, external: true },
] as const;

export function UmbrellaHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-90 sm:gap-3"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-black p-1.5 sm:h-10 sm:w-10">
            <img src="/favicon.png" alt="" width={32} height={32} className="h-full w-full object-contain" />
          </span>
          <span className="font-serif text-xl font-bold tracking-tight text-foreground sm:text-2xl">DIGIDLE</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex lg:gap-2">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {item.label}
                <ExternalLink className="h-3.5 w-3.5 opacity-60" aria-hidden />
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "border-b border-white/5 bg-background/95 backdrop-blur-xl md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <nav className="container flex flex-col gap-1 px-4 py-4 pb-6">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
                <ExternalLink className="h-4 w-4 opacity-60" />
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
