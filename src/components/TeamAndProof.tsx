import { User } from 'lucide-react';
import { CLIENT_QUOTES, TEAM_MEMBERS } from '../data/electricalData';

export default function TeamAndProof() {
  return (
    <section id="team" className="border-b border-slate-200 bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <p className="text-xs font-bold tracking-wider text-amber-700 uppercase">The Crew</p>
          <h2 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Licensed tradespeople you deal with directly
          </h2>
          <p className="mt-3 text-base text-slate-600">
            No call centres or subcontracted handoffs—our Parramatta leadership and site supervisors oversee every
            job from quote to CCEW sign-off.
          </p>
        </div>

        {/* 3 People Cards with generous spacing */}
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {TEAM_MEMBERS.map((member) => (
            <article key={member.name} className="flex flex-col">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-200">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  <User className="h-10 w-10" />
                </div>
                <img
                  src={member.imageSrc}
                  alt={member.imageAlt}
                  referrerPolicy="no-referrer"
                  className="relative h-full w-full object-cover object-top"
                />
              </div>

              <h3 className="font-display mt-5 text-lg font-bold text-slate-950">{member.name}</h3>
              <p className="text-sm font-semibold text-amber-800">{member.role}</p>
              <p className="font-mono-num mt-1 text-xs text-slate-500">{member.credential}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{member.bio}</p>
            </article>
          ))}
        </div>

        {/* 2 concise client outcomes separated cleanly by whitespace & hairline */}
        <div className="mt-20 grid gap-10 border-t border-slate-200 pt-16 md:grid-cols-2">
          {CLIENT_QUOTES.map((item) => (
            <blockquote key={item.author} className="flex flex-col justify-between">
              <p className="text-base leading-relaxed text-slate-800">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-5 text-xs">
                <strong className="text-sm font-bold text-slate-950">{item.author}</strong>
                <span className="text-slate-600">
                  {' '}
                  · {item.role}, {item.company} ({item.location})
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
