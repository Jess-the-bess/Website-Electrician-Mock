import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Wrench, X, Zap } from 'lucide-react';
import { WORKS_LIST, type ProjectWork, type WorkSector } from '../data/electricalData';

interface WorksSectionProps {
  onQuoteSimilarWork: (work: ProjectWork) => void;
}

const FILTERS: Array<'All' | WorkSector> = ['All', 'Commercial', 'Industrial', 'Strata & Comms'];

export default function WorksSection({ onQuoteSimilarWork }: WorksSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<'All' | WorkSector>('All');
  const [activeWork, setActiveWork] = useState<ProjectWork | null>(null);

  const visibleWorks =
    selectedFilter === 'All'
      ? WORKS_LIST
      : WORKS_LIST.filter((work) => work.sector === selectedFilter);

  return (
    <section id="works" className="border-b border-slate-200 bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-bold tracking-wider text-amber-700 uppercase">
              Works Being Done
            </p>
            <h2 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Current &amp; recently completed jobs across Sydney
            </h2>
          </div>

          {/* Clean segmented filter */}
          <div
            role="tablist"
            aria-label="Filter works by sector"
            className="inline-flex flex-wrap gap-1 self-start rounded-lg bg-slate-200/70 p-1"
          >
            {FILTERS.map((filter) => {
              const active = selectedFilter === filter;
              return (
                <button
                  key={filter}
                  role="tab"
                  aria-selected={active}
                  type="button"
                  onClick={() => setSelectedFilter(filter)}
                  className={`min-h-[36px] whitespace-nowrap rounded-md px-3.5 text-xs font-semibold transition-colors ${
                    active ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Spacious 2-column grid with breathing room */}
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {visibleWorks.map((work) => (
            <article
              key={work.id}
              className="flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-900 text-slate-400">
                    <Zap className="h-6 w-6 text-amber-400" />
                  </div>
                  <img
                    src={work.imageSrc}
                    alt={work.imageAlt}
                    referrerPolicy="no-referrer"
                    className="relative h-full w-full object-cover object-top"
                  />
                </div>

                <div className="p-7">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-slate-500">
                    <span className="inline-flex items-center gap-1.5 font-semibold">
                      {work.status === 'In Progress' ? (
                        <Wrench className="h-3.5 w-3.5 text-amber-700" aria-hidden="true" />
                      ) : (
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-700" aria-hidden="true" />
                      )}
                      <span className={work.status === 'In Progress' ? 'text-amber-800' : 'text-emerald-800'}>
                        {work.status}
                      </span>
                    </span>
                    <span>{work.location}</span>
                  </div>

                  <h3 className="font-display mt-3 text-xl font-bold text-slate-950">{work.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{work.summary}</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-slate-100 px-7 py-4">
                <span className="font-mono-num text-xs font-semibold text-slate-700">{work.specLine}</span>
                <button
                  type="button"
                  onClick={() => setActiveWork(work)}
                  className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap text-xs font-bold text-slate-950 underline-offset-4 hover:text-amber-700 hover:underline"
                >
                  View Scope
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Clean Scope Modal */}
      {activeWork && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="work-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xs"
          onClick={() => setActiveWork(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-xl border border-slate-200 bg-white p-7 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-slate-500">
                  {activeWork.status} · {activeWork.location}
                </p>
                <h3 id="work-modal-title" className="font-display mt-1 text-2xl font-bold text-slate-950">
                  {activeWork.title}
                </h3>
                <p className="mt-0.5 text-sm text-slate-600">{activeWork.client}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveWork(null)}
                aria-label="Close scope details"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-5 aspect-[16/10] overflow-hidden rounded-lg bg-slate-900">
              <img
                src={activeWork.imageSrc}
                alt={activeWork.imageAlt}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="mt-6">
              <h4 className="text-xs font-bold tracking-wider text-slate-500 uppercase">Scope Delivered</h4>
              <ul className="mt-3 space-y-2.5">
                {activeWork.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-5 border-t border-slate-200 pt-4 text-xs font-semibold text-emerald-800">
              Outcome: {activeWork.outcome}
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveWork(null)}
                className="min-h-[42px] rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const chosen = activeWork;
                  setActiveWork(null);
                  onQuoteSimilarWork(chosen);
                }}
                className="inline-flex min-h-[42px] items-center gap-1.5 rounded-lg bg-amber-500 px-5 py-2 text-sm font-bold text-slate-950 hover:bg-amber-400"
              >
                Quote Similar Works
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
