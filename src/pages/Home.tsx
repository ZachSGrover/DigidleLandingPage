import { useEffect } from "react";
import { DigidleMIPage } from "@/components/mi";

const Home = () => {
  // Unicorn Studio’s loader may run before the host div exists (SPA). Re-init after mount so the aura attaches.
  useEffect(() => {
    const id = window.setTimeout(() => {
      try {
        const U = (window as unknown as { UnicornStudio?: { init?: () => void } }).UnicornStudio;
        U?.init?.();
      } catch {
        /* ignore */
      }
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div className="theme-umbrella relative min-h-screen antialiased">
      {/* Unicorn Studio: use z-0 (not negative) so layers aren’t hidden behind root/body backgrounds */}
      <div
        data-us-project="cqcLtDwfoHqqRPttBbQE"
        className="pointer-events-none fixed inset-0 z-0 h-full w-full"
        aria-hidden
      />
      <div className="pointer-events-none fixed inset-0 z-0 bg-black/40" aria-hidden />
      <div className="relative z-10">
        <DigidleMIPage />
      </div>
    </div>
  );
};

export default Home;
