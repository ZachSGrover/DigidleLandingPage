export function MIFooterSections() {
  const year = new Date().getFullYear();

  return (
    <>
      <section className="border-t border-white/10 bg-transparent py-16 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="mb-4 text-2xl font-medium tracking-tight text-white md:text-3xl">Ready to build the backend?</h2>
          <p className="mb-8 text-sm text-gray-400 md:text-base">
            Tell us what you&apos;re working on—we&apos;ll help you figure out the right next move.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-200"
          >
            Work with us
          </a>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-transparent py-12 text-xs">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="text-gray-500">
            <span className="mr-1 font-medium text-white">© {year} Digidle.</span>
            All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-6 font-medium text-gray-500">
            <a href="https://modernsalesagency.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
              Modern Sales Agency
            </a>
            <a href="https://www.modernathlete.io" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
              Modern Athlete
            </a>
            <a href="https://discord.gg/digidle" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
              Discord
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
