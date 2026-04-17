import { Link } from "react-router-dom";
import { Users } from "lucide-react";

export function MINetworkSection() {
  return (
    <section className="scroll-mt-20 border-t border-white/5 bg-transparent py-24" id="network">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="mb-8 inline-flex h-32 w-32 items-center justify-center overflow-hidden rounded-2xl border border-emerald-500/20 bg-emerald-500/5 shadow-inner">
          <img 
            src="/favicon-removebg.png" 
            alt="Digidle Logo" 
            className="h-full w-full scale-150 object-cover"
          />
        </div>
        <h2 className="mb-4 text-3xl font-medium tracking-tight text-white md:text-4xl">Digidle Network</h2>
        <p className="mb-10 text-base leading-relaxed text-gray-400 md:text-lg">
          The Digidle Network is a growing extension of Digidle for people looking to find or plug into specialized talent. It is
          being built to support projects, roles, and collaborations across different business needs. If you are looking for
          support, talent, or a possible fit, join the community below.
        </p>
        <Link
          to="/network"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-200"
        >
          Join The Digidle Network
        </Link>
      </div>
    </section>
  );
}
