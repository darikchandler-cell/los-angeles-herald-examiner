import { useState } from 'react';
import { Link } from 'react-router';
import { ARTICLES } from '@/data/articles';

/* ------------------------------------------------------------------ */
/* Most Read — ranked rail module                                       */
/* ------------------------------------------------------------------ */
const MOST_READ_IDS = [
  'koreatown-midnight-economy',
  'compton-richland-farms',
  'metro-line-completion',
  'malibu-fire-season',
  'housing-bond-vote',
];

export function MostRead() {
  const stories = MOST_READ_IDS.map((id) => ARTICLES.find((a) => a.id === id)!).filter(Boolean);
  return (
    <section aria-label="Most read stories">
      <h2 className="mb-1 border-b-4 border-double border-terra pb-1.5 text-center font-display text-xl uppercase tracking-[0.15em] text-dusk">
        Most Read
      </h2>
      <ol className="divide-y divide-dusk/15">
        {stories.map((a, i) => (
          <li key={a.id} className="flex gap-3 py-3">
            <span className="font-display text-3xl leading-none text-coral">
              {i + 1}
            </span>
            <div>
              <Link
                to={`/article/${a.id}`}
                className="font-serif text-[15px] font-bold leading-snug text-dusk hover:text-terra"
              >
                {a.headline}
              </Link>
              {a.neighborhood && (
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.25em] text-terra/70">
                  {a.neighborhood}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Newsletter subscribe band                                            */
/* ------------------------------------------------------------------ */
export function NewsletterBand() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  return (
    <section className="my-10 border-2 border-dusk bg-gradient-to-r from-terra via-coral to-sun p-6 text-center shadow-[6px_6px_0_0_#43203a] sm:p-8">
      <h2 className="font-display text-2xl uppercase tracking-[0.12em] text-cream drop-shadow-[0_2px_0_rgba(43,26,38,0.4)] sm:text-3xl">
        Get the Morning Edition
      </h2>
      <p className="mx-auto mt-2 max-w-md font-serif text-sm italic text-cream/90">
        The city's front page, in your inbox by 6 a.m. — free, every day,
        from the pier to the palms.
      </p>
      {done ? (
        <p className="mt-5 inline-block bg-dusk px-5 py-2 font-display text-sm uppercase tracking-[0.2em] text-sun">
          You're on the list ✦ See you at sunrise
        </p>
      ) : (
        <form
          className="mx-auto mt-5 flex max-w-md items-stretch border-2 border-dusk bg-cream"
          onSubmit={(e) => {
            e.preventDefault();
            if (email.trim()) setDone(true);
          }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@losangeles.com"
            aria-label="Email address"
            className="w-full bg-transparent px-4 py-2.5 font-body text-sm normal-case tracking-normal text-dusk placeholder:text-plum/40 focus:outline-none"
          />
          <button
            type="submit"
            className="whitespace-nowrap bg-dusk px-5 text-xs font-bold uppercase tracking-widest text-cream hover:bg-plum"
          >
            Sign Up
          </button>
        </form>
      )}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Share row for article pages                                          */
/* ------------------------------------------------------------------ */
export function ShareRow() {
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const [copied, setCopied] = useState(false);

  const share = (network: string) => {
    const text = document.title;
    const targets: Record<string, string> = {
      x: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    };
    if (targets[network]) window.open(targets[network], '_blank', 'noopener');
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const btn =
    'border-2 border-dusk bg-cream px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-dusk hover:bg-terra hover:text-cream';

  return (
    <div className="mt-4 flex items-center justify-center gap-3">
      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-plum/60">
        Share
      </span>
      <button onClick={() => share('x')} className={btn}>
        𝕏 Post
      </button>
      <button onClick={() => share('facebook')} className={btn}>
        Share
      </button>
      <button onClick={copy} className={btn}>
        {copied ? 'Copied ✓' : 'Copy Link'}
      </button>
    </div>
  );
}
