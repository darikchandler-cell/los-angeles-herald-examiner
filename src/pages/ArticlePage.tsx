import { Link, useParams } from 'react-router';
import { TopBar, Masthead, Footer } from '@/components/Chrome';
import { StoryCard, DoubleRule } from '@/components/StoryCard';
import { ShareRow } from '@/components/Extras';
import { getArticle, ARTICLES, imageFor, formatStamp } from '@/data/articles';

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const article = id ? getArticle(id) : undefined;

  if (!article) {
    return (
      <div className="grain min-h-screen bg-cream">
        <TopBar />
        <Masthead slim />
        <main className="mx-auto max-w-3xl px-4 py-20 text-center">
          <h1 className="font-display text-4xl uppercase tracking-wide text-dusk">
            Story Not Found
          </h1>
          <p className="mt-4 font-serif italic text-plum/80">
            The article you're looking for isn't in today's edition.
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

  const img = imageFor(article);
  const related = ARTICLES.filter(
    (a) => a.id !== article.id && a.section === article.section
  ).slice(0, 3);
  const more = related.length
    ? related
    : ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="grain min-h-screen bg-cream text-dusk">
      <TopBar />
      <Masthead slim />

      <main className="mx-auto max-w-3xl px-4 py-10">
        <p className="mb-3 text-center text-[11px] font-bold uppercase tracking-[0.3em] text-terra">
          {article.neighborhood
            ? `${article.section} · ${article.neighborhood}`
            : article.section}
        </p>
        <h1 className="text-center font-display text-3xl uppercase leading-[1.02] tracking-tight text-dusk sm:text-5xl">
          {article.headline}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-center font-serif text-lg italic leading-relaxed text-plum/80 sm:text-xl">
          {article.dek}
        </p>
        <div className="mt-6 border-y-2 border-terra/60 py-3 text-center text-xs uppercase tracking-widest text-plum/70">
          {article.byline} — {article.dateline} — {article.readMinutes} min
          read
        </div>
        <p className="mt-2 text-center text-[11px] uppercase tracking-widest text-plum/50">
          Published {formatStamp(article.publishedAt)}
          {article.updatedAt && <> · Updated {formatStamp(article.updatedAt)}</>}
        </p>
        <ShareRow />

        {img && (
          <figure className="mx-auto mb-8 mt-8 max-w-2xl">
            <div className="border-4 border-dusk bg-sand p-1.5 shadow-[6px_6px_0_0_#bc4b51]">
              <img
                src={img}
                alt={article.headline}
                className="h-56 w-full object-cover sm:h-72"
              />
            </div>
          </figure>
        )}

        <article className="font-serif text-lg leading-[1.8] text-dusk">
          {article.body.map((para, i) => (
            <p key={i} className={i === 0 ? 'first-para' : 'mt-6'}>
              {para}
            </p>
          ))}
        </article>

        <DoubleRule />

        <section className="py-6">
          <h2 className="mb-1 border-b-4 border-double border-terra pb-1.5 text-center font-display text-xl uppercase tracking-[0.15em] text-dusk">
            Related Coverage
          </h2>
          <div className="grid gap-6 pt-4 sm:grid-cols-3">
            {more.map((a, i) => (
              <StoryCard key={a.id} article={a} showDek={false} showImage={i === 0} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
