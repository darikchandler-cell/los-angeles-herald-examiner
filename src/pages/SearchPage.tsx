import { Link, useSearchParams } from 'react-router';
import { TopBar, Masthead, Footer } from '@/components/Chrome';
import { StoryCard } from '@/components/StoryCard';
import { searchArticles } from '@/data/articles';

export default function SearchPage() {
  const [params] = useSearchParams();
  const q = params.get('q') ?? '';
  const results = searchArticles(q);

  return (
    <div className="grain min-h-screen bg-cream text-dusk">
      <TopBar />
      <Masthead slim />

      <main className="mx-auto max-w-4xl px-4 py-10">
        <p className="mb-2 text-center text-[11px] font-bold uppercase tracking-[0.3em] text-terra">
          Search the Archive
        </p>
        <h1 className="text-center font-display text-3xl uppercase tracking-wide text-dusk sm:text-4xl">
          {q ? `Results for “${q}”` : 'Search'}
        </h1>
        <SearchForm initial={q} />

        {q && (
          <p className="mt-6 text-center text-sm uppercase tracking-widest text-plum/60">
            {results.length} {results.length === 1 ? 'story' : 'stories'} found
          </p>
        )}

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {results.map((a) => (
            <StoryCard key={a.id} article={a} />
          ))}
        </div>

        {q && results.length === 0 && (
          <p className="mt-10 text-center font-serif text-lg italic text-plum/70">
            Nothing in today's edition matches “{q}.” Try a neighborhood,
            a topic, or a name.
          </p>
        )}

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-block border-2 border-dusk bg-terra px-6 py-2 text-sm font-bold uppercase tracking-widest text-cream shadow-[4px_4px_0_0_#2b1a26] hover:-translate-y-0.5"
          >
            Back to the Front Page
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export function SearchForm({ initial = '' }: { initial?: string }) {
  return (
    <form
      action="/search"
      role="search"
      className="mx-auto mt-6 flex max-w-xl items-stretch border-2 border-dusk bg-white shadow-[4px_4px_0_0_#f6a83c]"
    >
      <input
        type="search"
        name="q"
        defaultValue={initial}
        placeholder="Search headlines, neighborhoods, topics…"
        className="w-full bg-transparent px-4 py-2.5 font-body text-sm text-dusk placeholder:text-plum/40 focus:outline-none"
      />
      <button
        type="submit"
        className="whitespace-nowrap bg-dusk px-5 text-xs font-bold uppercase tracking-widest text-cream hover:bg-terra"
      >
        Search
      </button>
    </form>
  );
}
