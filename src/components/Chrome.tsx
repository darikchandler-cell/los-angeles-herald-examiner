import { useState } from 'react';
import { Link } from 'react-router';
import { SECTIONS } from '@/data/articles';

export const EDITION_DATE = 'Wednesday, September 30, 2026';

/* ------------------------------------------------------------------ */
/* Palm silhouette — used in the masthead and footer                    */
/* ------------------------------------------------------------------ */
export function Palm({
  className = '',
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 100 210"
      className={`${className} ${flip ? '-scale-x-100' : ''}`}
      fill="currentColor"
      aria-hidden="true"
    >
      {/* trunk */}
      <path d="M53 210 C50 168 47 130 43 94 L49 92 C55 128 58 168 61 210 Z" />
      {/* fronds */}
      <path d="M46 94 Q30 62 10 64 Q32 76 48 96 Z" />
      <path d="M46 94 Q20 86 4 96 Q28 100 48 98 Z" />
      <path d="M46 94 Q36 60 42 38 Q52 62 48 96 Z" />
      <path d="M48 94 Q54 58 48 34 Q60 58 50 96 Z" />
      <path d="M49 94 Q66 60 88 62 Q66 76 51 96 Z" />
      <path d="M49 96 Q74 88 92 98 Q68 102 50 100 Z" />
      {/* coconuts */}
      <circle cx="44" cy="98" r="3.2" />
      <circle cx="51" cy="99" r="2.8" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Top bar                                                              */
/* ------------------------------------------------------------------ */
export function TopBar() {
  return (
    <div className="bg-dusk text-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 whitespace-nowrap px-4 py-2 text-[11px] uppercase tracking-widest">
        <span>{EDITION_DATE}</span>
        <span className="flex items-center gap-4">
          <span className="hidden md:inline">☀ 84°F Downtown</span>
          <Link to="/" className="hover:underline">
            Today's Paper
          </Link>
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Masthead                                                             */
/* ------------------------------------------------------------------ */
export function Masthead({ slim = false }: { slim?: boolean }) {
  if (slim) {
    return (
      <header className="bg-dusk text-cream">
        <div className="relative mx-auto flex max-w-6xl items-center justify-center gap-3 overflow-hidden px-4 py-4">
          <Palm className="h-16 w-8 text-coral/70" />
          <Link
            to="/"
            className="text-center font-blackletter text-3xl leading-none hover:text-sun sm:text-4xl"
          >
            Los Angeles Herald Examiner
          </Link>
          <Palm className="h-16 w-8 -scale-x-100 text-coral/70" flip />
        </div>
      </header>
    );
  }
  return (
    <header className="sunset-sky relative overflow-hidden">
      {/* sun disc — rises and sets behind the title */}
      <div
        className="pointer-events-none absolute left-1/2 top-6 h-64 w-64 animate-sun-bob rounded-full opacity-90 blur-[2px] motion-reduce:animate-none sm:h-80 sm:w-80"
        style={{
          background:
            'radial-gradient(circle, #ffe3ae 0%, #f6a83c 45%, #f4845f 75%, rgba(244,132,95,0) 100%)',
        }}
      />
      {/* palms */}
      <Palm className="pointer-events-none absolute -left-3 bottom-0 h-32 w-12 text-dusk/60 sm:-left-2 sm:h-48 sm:w-20 sm:text-dusk/80" />
      <Palm className="pointer-events-none absolute bottom-0 left-10 hidden h-32 w-14 text-dusk/60 md:block" flip />
      <Palm className="pointer-events-none absolute -right-3 bottom-0 h-32 w-12 -scale-x-100 text-dusk/60 sm:-right-2 sm:h-48 sm:w-20 sm:text-dusk/80" flip />
      <Palm className="pointer-events-none absolute bottom-0 right-10 hidden h-32 w-14 text-dusk/60 lg:block" />

      <div className="relative mx-auto max-w-6xl px-4 pb-5 pt-4 text-center sm:pb-9 sm:pt-6">
        <p className="mb-1.5 font-serif text-[11px] italic tracking-wide text-cream/95 drop-shadow-[0_1px_2px_rgba(43,26,38,0.6)] sm:text-xs">
          Serving Los Angeles Since 1903
        </p>
        <h1 className="whitespace-nowrap font-blackletter leading-[1.05] text-cream drop-shadow-[0_3px_0_rgba(43,26,38,0.45)] text-[clamp(1.7rem,7vw,4.9rem)]">
          Los Angeles Herald Examiner
        </h1>
        <p className="mx-auto mt-3 hidden max-w-xl font-serif text-xs italic text-dusk sm:block sm:text-sm">
          “All the News That’s Fit to Serve — from the pier to the palms”
        </p>
        <div className="mx-auto mt-4 hidden max-w-4xl items-center justify-between border-y border-dusk/30 py-1 text-[10px] font-semibold uppercase tracking-widest text-dusk sm:flex sm:text-[11px]">
          <span>Vol. CXXIII — No. 271</span>
          <span className="hidden md:inline">{EDITION_DATE}</span>
          <span>$2.50 Daily</span>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Section nav — hamburger drawer on mobile, scroll row on desktop      */
/* ------------------------------------------------------------------ */
export function SectionNav() {
  const [open, setOpen] = useState(false);

  const links = [
    ...SECTIONS.filter((s) => s !== 'Front Page').map((s) => ({
      label: s,
      href: `/#${s.toLowerCase().replace(' ', '-')}`,
    })),
    { label: 'The City', href: '/#the-city' },
  ];

  return (
    <nav className="sticky top-0 z-40 border-b-2 border-terra bg-dusk">
      {/* Mobile bar */}
      <div className="flex items-center justify-between px-3 sm:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-label="Open sections menu"
          className="flex items-center gap-2 px-2 py-3 text-xs font-bold uppercase tracking-widest text-cream hover:text-sun"
        >
          <span className="text-base leading-none">☰</span> Sections
        </button>
        <Link
          to="/search"
          className="px-2 py-3 text-xs font-bold uppercase tracking-widest text-cream hover:text-sun"
        >
          ⌕ Search
        </Link>
      </div>

      {/* Desktop row */}
      <div className="mx-auto hidden max-w-6xl items-center justify-center gap-1 px-2 sm:flex">
        {links.map((l, i) => (
          <a
            key={l.label}
            href={l.href}
            className={`whitespace-nowrap px-3 py-2.5 text-xs font-semibold uppercase tracking-widest hover:bg-terra hover:text-cream ${
              i === links.length - 1
                ? 'border-l border-cream/20 font-bold text-sun'
                : 'text-cream/85'
            }`}
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 sm:hidden">
          <div
            className="absolute inset-0 bg-dusk/70"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute left-0 top-0 flex h-full w-72 max-w-[85%] flex-col overflow-y-auto border-r-2 border-terra bg-dusk p-5">
            <div className="flex items-center justify-between border-b border-cream/15 pb-3">
              <span className="font-blackletter text-xl leading-none text-sun">
                Sections
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="px-2 text-lg text-cream/70 hover:text-sun"
              >
                ✕
              </button>
            </div>
            <div className="flex flex-col pt-2">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-cream/10 py-3.5 font-display text-lg uppercase tracking-[0.15em] text-cream hover:text-sun"
                >
                  {l.label}
                </a>
              ))}
              <Link
                to="/search"
                onClick={() => setOpen(false)}
                className="py-3.5 font-display text-lg uppercase tracking-[0.15em] text-sun"
              >
                Search the Archive
              </Link>
            </div>
            <p className="mt-auto pt-6 font-serif text-xs italic text-cream/40">
              From the pier to the palms, since 1903.
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                               */
/* ------------------------------------------------------------------ */
export function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden bg-dusk text-cream">
      {/* sunset horizon strip */}
      <div
        className="h-2 w-full"
        style={{
          background:
            'linear-gradient(90deg, #f6a83c, #f4845f, #bc4b51, #7a2d4e, #43203a)',
        }}
      />
      <Palm className="pointer-events-none absolute -left-4 bottom-0 h-64 w-32 text-cream/5" />
      <Palm className="pointer-events-none absolute -right-4 bottom-0 h-64 w-32 -scale-x-100 text-cream/5" flip />

      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-4">
        <div>
          <h3 className="font-display text-xl uppercase tracking-wide text-sun">
            Los Angeles Herald Examiner
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-cream/70">
            Founded in 1903, the Herald Examiner chronicled Los Angeles for
            eighty-six years. Revived for the digital age, it remains an
            independent voice for the city it never stopped loving.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-cream/50">
            Sections
          </h4>
          <ul className="space-y-2 text-sm">
            {['Local', 'Politics', 'Business', 'Culture'].map((s) => (
              <li key={s}>
                <a
                  href={`/#${s.toLowerCase()}`}
                  className="text-cream/80 hover:text-sun"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-cream/50">
            More
          </h4>
          <ul className="space-y-2 text-sm">
            {['Sports', 'Opinion', 'Weather', 'The City'].map((s) => (
              <li key={s}>
                <a
                  href={
                    s === 'The City'
                      ? '/#the-city'
                      : `/#${s.toLowerCase()}`
                  }
                  className="text-cream/80 hover:text-sun"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-cream/50">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-cream/80">
            <li>newsroom@losangelesheraldexaminer.com</li>
            <li>tips@losangelesheraldexaminer.com</li>
            <li>Los Angeles, California</li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 pt-4 text-[11px] uppercase tracking-widest text-cream/50">
          {[
            'About the Paper',
            'Newsroom Ethics',
            'Privacy Policy',
            'Terms of Service',
            'Careers',
            'Advertise',
            'RSS',
          ].map((l) => (
            <a key={l} href="/search" className="hover:text-sun">
              {l}
            </a>
          ))}
        </div>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-[11px] uppercase tracking-widest text-cream/40 sm:flex-row">
          <span>© 2026 Los Angeles Herald Examiner. All rights reserved.</span>
          <span>Independent. Reader-supported. Since 1903.</span>
        </div>
      </div>
    </footer>
  );
}
