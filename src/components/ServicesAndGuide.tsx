import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  CORE_SERVICES,
  COST_GUIDE_ITEMS,
  type CoreService,
  type CostGuideItem,
} from '../data/electricalData';

interface ServicesAndGuideProps {
  onSelectService: (service: CoreService) => void;
  onApplyCostGuide: (item: CostGuideItem, summary: string) => void;
}

export default function ServicesAndGuide({
  onSelectService,
  onApplyCostGuide,
}: ServicesAndGuideProps) {
  const [selectedId, setSelectedId] = useState(COST_GUIDE_ITEMS[0].id);
  const [gstMode, setGstMode] = useState<'ex' | 'inc'>('ex');

  const selected = COST_GUIDE_ITEMS.find((item) => item.id === selectedId) ?? COST_GUIDE_ITEMS[0];
  const mult = gstMode === 'inc' ? 1.1 : 1;
  const minPrice = Math.round((selected.exGstMin * mult) / 10) * 10;
  const maxPrice = Math.round((selected.exGstMax * mult) / 10) * 10;

  const handleLock = () => {
    const note = selected.isTender
      ? 'Full commercial fit-out / maintenance tender'
      : `${selected.label} — Est. $${minPrice.toLocaleString('en-AU')}–$${maxPrice.toLocaleString('en-AU')} AUD (${
          gstMode === 'inc' ? 'incl. GST' : 'ex-GST'
        })`;
    onApplyCostGuide(selected, note);
  };

  return (
    <section id="services" className="border-b border-slate-200 bg-white py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-14 px-6 lg:grid-cols-12">
        {/* Left: Clean numbered capabilities list */}
        <div className="lg:col-span-7">
          <p className="text-xs font-bold tracking-wider text-amber-700 uppercase">Capabilities</p>
          <h2 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Design, install, test &amp; maintain under one team
          </h2>

          <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
            {CORE_SERVICES.map((service) => (
              <div
                key={service.num}
                className="flex flex-col justify-between gap-4 py-6 sm:flex-row sm:items-center"
              >
                <div className="max-w-lg">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono-num text-sm font-bold text-amber-700">{service.num}.</span>
                    <h3 className="font-display text-lg font-bold text-slate-950">{service.title}</h3>
                  </div>
                  <p className="mt-1.5 pl-8 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectService(service)}
                  className="ml-8 inline-flex shrink-0 items-center gap-1.5 self-start whitespace-nowrap text-xs font-bold text-slate-950 underline-offset-4 hover:text-amber-700 hover:underline sm:ml-0 sm:self-center"
                >
                  Quote this
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Clean, quiet AUD Cost Guide */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-7 lg:col-span-5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-display text-xl font-bold text-slate-950">AUD Cost Guide</h3>
            <div
              role="group"
              aria-label="GST mode"
              className="inline-flex rounded-lg bg-slate-200/70 p-1"
            >
              <button
                type="button"
                onClick={() => setGstMode('ex')}
                className={`min-h-[30px] rounded-md px-2.5 text-xs font-semibold transition-colors ${
                  gstMode === 'ex' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-600'
                }`}
              >
                Ex-GST
              </button>
              <button
                type="button"
                onClick={() => setGstMode('inc')}
                className={`min-h-[30px] rounded-md px-2.5 text-xs font-semibold transition-colors ${
                  gstMode === 'inc' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-600'
                }`}
              >
                Incl. GST
              </button>
            </div>
          </div>

          <p className="mt-1 text-xs text-slate-500">
            Typical commercial ranges in Greater Sydney.
          </p>

          <div className="mt-5">
            <label htmlFor="cost-guide-select" className="mb-1.5 block text-xs font-semibold text-slate-700">
              Select typical scope
            </label>
            <select
              id="cost-guide-select"
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
              className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-900 focus:border-amber-500 focus:outline-none"
            >
              {COST_GUIDE_ITEMS.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-6 rounded-lg border border-slate-200 bg-white p-5">
            <p className="text-xs font-semibold text-slate-500">
              Indicative Estimate ({gstMode === 'inc' ? 'AUD Incl. GST' : 'AUD Excl. GST'})
            </p>
            <p className="font-mono-num mt-1 text-2xl font-bold text-slate-950">
              {selected.isTender
                ? 'Site Walk-Through'
                : `$${minPrice.toLocaleString('en-AU')} – $${maxPrice.toLocaleString('en-AU')}`}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">{selected.note}</p>
          </div>

          <button
            type="button"
            onClick={handleLock}
            className="mt-5 flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-slate-800"
          >
            Request Exact Quote
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
