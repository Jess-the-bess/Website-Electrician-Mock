import { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, PhoneCall } from 'lucide-react';
import { QUOTE_SCOPES } from '../data/electricalData';

export interface QuoteFormPrefill {
  scope?: string;
  notes?: string;
  nonce: number;
}

interface ContactSectionProps {
  prefill: QuoteFormPrefill;
  onCopyPhone: () => void;
}

export default function ContactSection({ prefill, onCopyPhone }: ContactSectionProps) {
  const [urgency, setUrgency] = useState<'scheduled' | 'urgent'>('scheduled');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [postcode, setPostcode] = useState('');
  const [scope, setScope] = useState<string>(QUOTE_SCOPES[0]);
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const companyRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (prefill.nonce === 0) return;
    if (prefill.scope) setScope(prefill.scope);
    if (prefill.notes !== undefined) setNotes(prefill.notes);
    setSubmittedRef(null);
    setError('');
    setTimeout(() => companyRef.current?.focus(), 350);
  }, [prefill]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPostcode = postcode.trim();
    const cleanPhone = phone.replace(/\s+/g, '');

    if (company.trim().length < 2) {
      setError('Please enter your business or contact name.');
      return;
    }
    if (!/^(\+?61|0)[2-9]\d{8}$/.test(cleanPhone)) {
      setError('Please enter a valid Australian phone or mobile number.');
      return;
    }
    if (!/^\d{4}$/.test(cleanPostcode)) {
      setError('Please enter a 4-digit NSW postcode.');
      return;
    }

    setError('');
    setSubmittedRef(`WG-${cleanPostcode}-${Math.floor(1000 + Math.random() * 9000)}`);
  };

  return (
    <section id="contact" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto grid max-w-6xl items-start gap-14 px-6 lg:grid-cols-12">
        {/* Left: Direct Aussie business details */}
        <div className="lg:col-span-5">
          <p className="text-xs font-bold tracking-wider text-amber-400 uppercase">Get in Touch</p>
          <h2 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Request a quote or site walk-through
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Speak directly with our Parramatta office for written quotes, SWMS &amp; insurance certificates, or
            24/7 fault dispatch across Greater Sydney.
          </p>

          <div className="mt-8 space-y-5 border-t border-slate-800 pt-8 text-sm">
            <div>
              <p className="text-xs font-semibold text-slate-400">Parramatta Dispatch &amp; Office</p>
              <button
                type="button"
                onClick={onCopyPhone}
                className="font-mono-num mt-1 inline-flex items-center gap-2 text-lg font-bold text-amber-400 hover:text-amber-300"
              >
                <PhoneCall className="h-4 w-4" />
                (02) 9635 4820
              </button>
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-400">Address &amp; Hours</p>
              <p className="mt-1 text-slate-200">Suite 3, 88 Macquarie St, Parramatta NSW 2150</p>
              <p className="mt-0.5 text-slate-400">Mon–Fri 7:00am – 5:30pm · 24/7 Emergency Faults</p>
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-400">Compliance Credentials</p>
              <p className="font-mono-num mt-1 text-xs text-slate-300">
                NSW Lic #384912C · ABN 48 612 904 318 · $20M Public Liability
              </p>
            </div>
          </div>
        </div>

        {/* Right: Clean, uncrowded form */}
        <div className="rounded-xl bg-white p-7 text-slate-900 sm:p-9 lg:col-span-7">
          {submittedRef ? (
            <div className="py-10 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <p className="font-mono-num text-xs font-semibold text-slate-500">Ref: {submittedRef}</p>
              <h3 className="font-display mt-1 text-2xl font-bold text-slate-950">Enquiry Received</h3>
              <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
                Thank you, <strong className="text-slate-900">{company}</strong>. Our Parramatta team will contact
                you shortly regarding <strong className="text-slate-900">{scope}</strong> (NSW {postcode}).
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmittedRef(null);
                  setCompany('');
                  setPhone('');
                  setPostcode('');
                  setNotes('');
                }}
                className="mt-6 rounded-lg bg-slate-950 px-5 py-2.5 text-sm font-bold text-white hover:bg-slate-800"
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-2 gap-1 rounded-lg bg-slate-100 p-1">
                <button
                  type="button"
                  onClick={() => setUrgency('scheduled')}
                  className={`min-h-[38px] rounded-md text-xs font-semibold transition-colors ${
                    urgency === 'scheduled' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Scheduled Quote
                </button>
                <button
                  type="button"
                  onClick={() => setUrgency('urgent')}
                  className={`min-h-[38px] rounded-md text-xs font-semibold transition-colors ${
                    urgency === 'urgent' ? 'bg-red-700 text-white shadow-xs' : 'text-slate-600'
                  }`}
                >
                  24/7 Urgent Fault
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-company" className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Business / Contact Name
                  </label>
                  <input
                    ref={companyRef}
                    id="c-company"
                    type="text"
                    placeholder="e.g. Cumberland Strata"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 focus:border-amber-500 focus:bg-white focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="c-phone" className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Direct Phone / Mobile
                  </label>
                  <input
                    id="c-phone"
                    type="tel"
                    placeholder="0412 345 678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="font-mono-num h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 focus:border-amber-500 focus:bg-white focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="sm:col-span-2">
                  <label htmlFor="c-scope" className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Work Required
                  </label>
                  <select
                    id="c-scope"
                    value={scope}
                    onChange={(e) => setScope(e.target.value)}
                    className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm font-medium text-slate-900 focus:border-amber-500 focus:bg-white focus:outline-none"
                  >
                    {QUOTE_SCOPES.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="c-postcode" className="mb-1.5 block text-xs font-semibold text-slate-700">
                    NSW Postcode
                  </label>
                  <input
                    id="c-postcode"
                    type="text"
                    inputMode="numeric"
                    maxLength={4}
                    placeholder="2150"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    className="font-mono-num h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 focus:border-amber-500 focus:bg-white focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="c-notes" className="mb-1.5 block text-xs font-semibold text-slate-700">
                  Project Notes / Preferred Timing (Optional)
                </label>
                <textarea
                  id="c-notes"
                  rows={2}
                  placeholder="Switchboard details, out-of-hours access, or site summary..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900 focus:border-amber-500 focus:bg-white focus:outline-none"
                />
              </div>

              {error && (
                <p role="alert" className="text-xs font-semibold text-red-700">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="flex min-h-[46px] w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-5 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-amber-400"
              >
                {urgency === 'urgent' ? 'Request Urgent Metro Dispatch' : 'Send Quote Request'}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
