import { ArrowRight, Zap } from 'lucide-react';

interface HeroSectionProps {
  onRequestQuote: () => void;
}

export default function HeroSection({ onRequestQuote }: HeroSectionProps) {
  return (
    <section id="top" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left: Clear, concise B2B proposition */}
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold tracking-wide text-slate-500">
              <span className="text-amber-700">Parramatta NSW 2150</span>
              <span aria-hidden="true"> · </span>
              <span className="font-mono-num">NSW Lic #384912C</span>
              <span aria-hidden="true"> · </span>
              <span className="font-mono-num">$20M Insured</span>
            </p>

            <h1
              className="font-display mt-4 font-extrabold tracking-tight text-slate-950"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.4rem)', lineHeight: 1.08 }}
            >
              Commercial electrical work built around your trading hours.
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
              Licensed NSW electricians and data technicians delivering switchboards, fit-outs, compliance testing,
              and 24/7 fault repair for Australian businesses.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <button
                type="button"
                onClick={onRequestQuote}
                className="inline-flex min-h-[46px] items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-sm font-bold text-slate-950 transition-colors duration-150 hover:bg-amber-400"
              >
                Request Site Quote
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="#works"
                className="inline-flex min-h-[46px] items-center text-sm font-semibold text-slate-900 underline-offset-4 hover:text-amber-700 hover:underline"
              >
                See current works →
              </a>
            </div>
          </div>

          {/* Right: Editorial site photography with people */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-900">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-slate-900 text-slate-400">
                <Zap className="h-7 w-7 text-amber-400" />
                <span className="text-xs font-medium">WestGrid Switchboard Inspection</span>
              </div>
              <img
                src="/src/assets/images/hero_electricians_site_1794916996135.jpg"
                alt="Two WestGrid licensed Australian electricians inspecting a commercial main switchboard in Sydney"
                referrerPolicy="no-referrer"
                className="relative h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Quiet 4-item trust row with generous spacing */}
        <div className="mt-14 grid grid-cols-2 gap-6 border-t border-slate-200 pt-8 sm:grid-cols-4">
          <div>
            <p className="font-mono-num text-lg font-bold text-slate-950">24/7</p>
            <p className="mt-0.5 text-xs text-slate-500">Sydney Metro Fault Dispatch</p>
          </div>
          <div>
            <p className="font-mono-num text-lg font-bold text-slate-950">100%</p>
            <p className="mt-0.5 text-xs text-slate-500">NSW CCEW Compliance Lodgement</p>
          </div>
          <div>
            <p className="font-mono-num text-lg font-bold text-slate-950">AS/NZS 3000</p>
            <p className="mt-0.5 text-xs text-slate-500">3760 &amp; 2293 Certified Works</p>
          </div>
          <div>
            <p className="font-mono-num text-lg font-bold text-slate-950">After-Hours</p>
            <p className="mt-0.5 text-xs text-slate-500">Night &amp; Weekend Cutovers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
