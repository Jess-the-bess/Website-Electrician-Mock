interface FooterProps {
  onCopyPhone: () => void;
}

export default function Footer({ onCopyPhone }: FooterProps) {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-10 text-xs text-slate-500">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-6 sm:flex-row sm:items-center">
        <div>
          <span className="font-display text-sm font-bold text-white">WestGrid Electrical Pty Ltd</span>
          <span className="mx-2 text-slate-700">·</span>
          <span>88 Macquarie St, Parramatta NSW 2150</span>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          <a href="#works" className="hover:text-slate-300">
            Works
          </a>
          <a href="#services" className="hover:text-slate-300">
            Services
          </a>
          <a href="#team" className="hover:text-slate-300">
            Team
          </a>
          <button type="button" onClick={onCopyPhone} className="font-mono-num text-slate-300 hover:text-amber-400">
            (02) 9635 4820
          </button>
        </div>
      </div>
    </footer>
  );
}
