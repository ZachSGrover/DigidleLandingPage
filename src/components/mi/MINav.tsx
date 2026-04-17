import { Link } from "react-router-dom";

const links = [
  { href: "#brands", label: "Brands" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#faq", label: "FAQ" },
  { href: "#network", label: "Network" },
];

export function MINav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#030303]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-6">
        <Link
          to="/"
          className="group flex min-w-0 items-center gap-3 text-lg font-medium tracking-tight text-white transition-opacity hover:opacity-90"
          aria-label="Digidle home"
        >
          <span className="relative aspect-square h-12 w-12 shrink-0 overflow-hidden sm:h-14 sm:w-14">
            <img
              src="/favicon-removebg.png"
              alt=""
              width={56}
              height={56}
              className="h-full w-full object-cover object-center"
            />
          </span>
          <span className="truncate">Digidle</span>
        </Link>

        <div className="flex shrink-0 items-center gap-3 sm:gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden text-xs font-medium text-gray-400 transition-colors hover:text-white lg:block"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md bg-white px-3 py-1.5 text-xs font-medium tracking-tight text-black transition-colors hover:bg-gray-200"
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}
