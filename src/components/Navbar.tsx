import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onRequestQuote: () => void;
}

const NAV_LINKS = [
  { label: 'Works', href: '#works' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onRequestQuote }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-6">
        <a
          href="#top"
          className="font-display shrink-0 whitespace-nowrap text-lg font-extrabold tracking-tight text-slate-950"
        >
          WestGrid Electrical
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 whitespace-nowrap text-sm font-medium text-slate-600 underline-offset-4 transition-colors duration-150 hover:text-slate-950 hover:underline"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={onRequestQuote}
            className="hidden shrink-0 whitespace-nowrap rounded-lg bg-amber-500 px-4 py-2 text-sm font-bold text-slate-950 transition-colors duration-150 hover:bg-amber-400 sm:inline-flex"
          >
            Request Quote
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-900 md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center text-sm font-semibold text-slate-700"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onRequestQuote();
              }}
              className="mt-2 flex min-h-[44px] w-full items-center justify-center rounded-lg bg-amber-500 px-4 py-2 text-sm font-bold text-slate-950"
            >
              Request Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
