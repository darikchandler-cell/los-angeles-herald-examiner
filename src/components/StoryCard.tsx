import { Link } from 'react-router';
import type { Article } from '@/data/articles';
import { imageFor, formatStamp } from '@/data/articles';

function Kicker({ article }: { article: Article }) {
  return (
    <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-terra">
      {article.neighborhood
        ? `${article.section} · ${article.neighborhood}`
        : article.section}
    </p>
  );
}

export function HeroStory({ article }: { article: Article }) {
  const img = imageFor(article);
  return (
    <article className="py-8">
      {img && (
        <figure className="mx-auto mb-6 max-w-4xl">
          <div className="border-4 border-dusk bg-sand p-1.5 shadow-[6px_6px_0_0_#bc4b51]">
            <img
              src={img}
              alt={article.headline}
              className="h-56 w-full object-cover sm:h-80"
            />
          </div>
        </figure>
      )}
      <div className="text-center">
        <Kicker article={article} />
        <Link to={`/article/${article.id}`}>
          <h2 className="font-display text-3xl uppercase leading-[1.02] tracking-tight text-dusk hover:text-terra sm:text-5xl">
            {article.headline}
          </h2>
        </Link>
        <p className="mx-auto mt-4 max-w-3xl font-serif text-lg italic leading-relaxed text-plum/80 sm:text-xl">
          {article.dek}
        </p>
        <p className="mt-4 text-xs uppercase tracking-widest text-terra">
          {article.byline} — {article.dateline} —{' '}
          {formatStamp(article.publishedAt)} — {article.readMinutes} min read
        </p>
      </div>
    </article>
  );
}

export function StoryCard({
  article,
  showDek = true,
  showImage = true,
}: {
  article: Article;
  showDek?: boolean;
  showImage?: boolean;
}) {
  const img = showImage ? imageFor(article) : undefined;
  return (
    <article className="border-t-2 border-dusk/70 pt-4">
      {img && (
        <Link to={`/article/${article.id}`} className="mb-3 block">
          <div className="border-2 border-dusk bg-sand p-1 shadow-[4px_4px_0_0_#f6a83c]">
            <img
              src={img}
              alt={article.headline}
              loading="lazy"
              className="aspect-[3/2] w-full object-cover"
            />
          </div>
        </Link>
      )}
      <Kicker article={article} />
      <Link to={`/article/${article.id}`}>
        <h3 className="font-serif text-lg font-bold leading-snug text-dusk hover:text-terra">
          {article.headline}
        </h3>
      </Link>
      {showDek && (
        <p className="mt-2 text-sm leading-relaxed text-plum/75 line-clamp-3">
          {article.dek}
        </p>
      )}
      <p className="mt-2 text-[11px] uppercase tracking-wider text-terra/80">
        {formatStamp(article.publishedAt)} — {article.readMinutes} min read
      </p>
    </article>
  );
}

export function Rule() {
  return <hr className="border-0 border-t-2 border-terra" />;
}

export function DoubleRule() {
  return <hr className="border-4 border-double border-terra" />;
}
