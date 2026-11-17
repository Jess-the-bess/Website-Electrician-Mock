import { useCallback, useState } from 'react';
import ContactSection, { type QuoteFormPrefill } from './components/ContactSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ServicesAndGuide from './components/ServicesAndGuide';
import TeamAndProof from './components/TeamAndProof';
import WorksSection from './components/WorksSection';
import type { CoreService, CostGuideItem, ProjectWork } from './data/electricalData';

export default function App() {
  const [quotePrefill, setQuotePrefill] = useState<QuoteFormPrefill>({ nonce: 0 });
  const [toast, setToast] = useState<string | null>(null);

  const scrollToContact = useCallback(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleRequestQuote = useCallback(() => {
    setQuotePrefill((prev) => ({ nonce: prev.nonce + 1 }));
    scrollToContact();
  }, [scrollToContact]);

  const handleSelectService = useCallback(
    (service: CoreService) => {
      setQuotePrefill((prev) => ({
        scope: service.scopeOption,
        notes: `${service.title}`,
        nonce: prev.nonce + 1,
      }));
      scrollToContact();
    },
    [scrollToContact]
  );

  const handleQuoteSimilarWork = useCallback(
    (work: ProjectWork) => {
      setQuotePrefill((prev) => ({
        notes: `Similar scope to: ${work.title} (${work.specLine})`,
        nonce: prev.nonce + 1,
      }));
      scrollToContact();
    },
    [scrollToContact]
  );

  const handleApplyCostGuide = useCallback(
    (item: CostGuideItem, summary: string) => {
      setQuotePrefill((prev) => ({
        scope: item.scopeOption,
        notes: summary,
        nonce: prev.nonce + 1,
      }));
      scrollToContact();
    },
    [scrollToContact]
  );

  const handleCopyPhone = useCallback(() => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('(02) 9635 4820').catch(() => {});
    }
    const msg = 'Parramatta number (02) 9635 4820 copied to clipboard.';
    setToast(msg);
    setTimeout(() => setToast((cur) => (cur === msg ? null : cur)), 2800);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar onRequestQuote={handleRequestQuote} />

      <main>
        <HeroSection onRequestQuote={handleRequestQuote} />
        <WorksSection onQuoteSimilarWork={handleQuoteSimilarWork} />
        <ServicesAndGuide
          onSelectService={handleSelectService}
          onApplyCostGuide={handleApplyCostGuide}
        />
        <TeamAndProof />
        <ContactSection prefill={quotePrefill} onCopyPhone={handleCopyPhone} />
      </main>

      <Footer onCopyPhone={handleCopyPhone} />

      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed right-6 bottom-6 z-50 rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-xs font-semibold text-white shadow-lg"
        >
          {toast}
        </div>
      )}
    </div>
  );
}
