import { Link, useParams } from 'react-router';
import { TopBar, Masthead, Footer } from '@/components/Chrome';
import { StoryCard, DoubleRule } from '@/components/StoryCard';
import { ARTICLES } from '@/data/articles';
import { bylineNames, getAuthor } from '@/data/authors';

export default function AuthorPage() {
  const { slug } = useParams<{ slug: string }>();
  const author = slug ? getAuthor(slug) : undefined;

  if (!author) {
    return (
      <div className="grain min-h-screen bg-cream">
        <TopBar />
        <Masthead slim />
        <main className="mx-auto max-w-3xl px-4 py-20 text-center">
          <h1 className="font-display text-4xl uppercase tracking-wide text-dusk">
            Contributor Not Found
          </h1>
          <p className="mt-4 font-serif italic text-plum/80">
            That contributor isn't in today's edition.
          </p>
          <Link
            to="/"
            className="mt-6 inline-block border-2 border-dusk bg-terra px-6 py-2 text-sm font-bold uppercase tracking-widest text-cream shadow-[4px_4px_0_0_#2b1a26] hover:-translate-y-0.5"
          >
            Return to Front Page
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const stories = ARTICLES.filter((article) =>
    bylineNames(article.byline).includes(author.name)
  );

  return (
    <div className="grain min-h-screen bg-cream text-dusk">
      <TopBar />
      <Masthead slim />

      <main className="mx-auto max-w-3xl px-4 py-10">
        <p className="mb-3 text-center text-[11px] font-bold uppercase tracking-[0.3em] text-terra">
          Contributor
        </p>
        <h1 className="text-center font-display text-4xl uppercase leading-[1.02] tracking-tight text-dusk sm:text-5xl">
          {author.name}
        </h1>
        <p className="mt-4 text-center font-serif text-lg italic text-plum/80">
          {author.title}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-center font-serif text-lg leading-relaxed text-dusk">
          {author.bio}
        </p>
        <p className="mt-4 text-center text-sm text-plum/70">
          <span className="uppercase tracking-widest">Contact</span>{' '}
          <a
            href={`mailto:${author.email}`}
            className="underline decoration-terra/60 underline-offset-2 hover:text-terra"
          >
            {author.email}
          </a>
        </p>

        <DoubleRule />

        <section className="py-6">
          <h2 className="mb-1 border-b-4 border-double border-terra pb-1.5 text-center font-display text-xl uppercase tracking-[0.15em] text-dusk">
            Articles
          </h2>
          {stories.length === 0 ? (
            <p className="pt-6 text-center font-serif italic text-plum/70">
              No stories in this edition.
            </p>
          ) : (
            <div className="grid gap-6 pt-4 sm:grid-cols-2">
              {stories.map((article) => (
                <StoryCard key={article.id} article={article} showImage={false} />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
