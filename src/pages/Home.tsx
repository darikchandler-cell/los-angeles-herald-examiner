import { Link } from 'react-router';
import { TopBar, Masthead, SectionNav, Footer } from '@/components/Chrome';
import { HeroStory, StoryCard, DoubleRule } from '@/components/StoryCard';
import { AdSlot, ADS } from '@/components/Ads';
import { ARTICLES, bySection, byNeighborhood } from '@/data/articles';
import { NEIGHBORHOODS } from '@/data/neighborhoods';
import { MostRead, NewsletterBand } from '@/components/Extras';

export default function Home() {
  const hero = ARTICLES.find((a) => a.hero)!;
  const local = bySection('Local');
  const politics = bySection('Politics');
  const business = bySection('Business');
  const culture = bySection('Culture');
  const sports = bySection('Sports');
  const opinion = bySection('Opinion');
  const weather = bySection('Weather');

  return (
    <div className="grain min-h-screen bg-cream text-dusk">
      <TopBar />
      <Masthead />
      <SectionNav />

      <main className="mx-auto max-w-6xl px-4">
        {/* Lead story */}
        <HeroStory article={hero} />
        <AdSlot ad={ADS[0]} className="mx-auto max-w-xs pb-8" />
        <DoubleRule />

        {/* Three-column news band */}
        <div className="grid gap-8 py-6 sm:grid-cols-3">
          <NewsColumn id="local" title="Local" articles={local} />
          <NewsColumn id="politics" title="Politics" articles={politics} />
          <NewsColumn id="business" title="Business" articles={business} />
        </div>

        <DoubleRule />

        {/* The City — neighborhood dispatch */}
        <section id="the-city" className="py-6">
          <SectionHeading title="The City · A Neighborhood Dispatch" />
          <p className="mx-auto mt-3 max-w-2xl text-center font-serif text-sm italic leading-relaxed text-plum/80">
            One paper, one city, a hundred neighborhoods. From the pier at
            Santa Monica to the stables of Compton, from the midnight griddles
            of Koreatown to the porches of West Adams — this is Los Angeles,
            block by block.
          </p>
          <div className="grid gap-x-6 gap-y-8 pt-6 sm:grid-cols-2 lg:grid-cols-3">
            {NEIGHBORHOODS.map((n) => (
              <NeighborhoodCard key={n.name} neighborhood={n} />
            ))}
          </div>
          <AdSlot ad={ADS[3]} className="mx-auto mt-10 max-w-xs" />
        </section>

        <DoubleRule />

        {/* Culture + Sports */}
        <div className="grid gap-8 py-6 sm:grid-cols-2">
          <NewsColumn id="culture" title="Culture" articles={culture} />
          <NewsColumn id="sports" title="Sports" articles={sports} />
        </div>

        <DoubleRule />

        {/* Opinion + Weather + Ad */}
        <div className="grid gap-8 py-6 sm:grid-cols-3">
          <section id="opinion" className="sm:col-span-2">
            <SectionHeading title="Opinion" />
            <div className="grid gap-6 sm:grid-cols-2">
              {opinion.map((a, i) => (
                <StoryCard key={a.id} article={a} showDek showImage={i === 0} />
              ))}
            </div>
          </section>
          <div className="space-y-8">
            <MostRead />
            <section id="weather">
              <SectionHeading title="Weather" />
              <div className="border-2 border-dusk bg-sand p-5 shadow-[5px_5px_0_0_#f4845f]">
                <p className="font-display text-5xl tracking-wide text-terra">
                  84°F
                </p>
                <p className="mt-1 text-sm uppercase tracking-widest text-plum/70">
                  Downtown Los Angeles
                </p>
                <div className="mt-4 space-y-1.5 text-sm text-plum">
                  <p>☀ Today: Sunny, high 84°F</p>
                  <p>🌬 Fri–Sat: Santa Ana winds, 91°F, gusts to 70 mph in passes</p>
                  <p>🌤 Sun: Cooling, high 76°F</p>
                </div>
                {weather.map((a) => (
                  <StoryCard key={a.id} article={a} showDek={false} showImage={false} />
                ))}
              </div>
            </section>
            <AdSlot ad={ADS[2]} />
          </div>
        </div>

        <DoubleRule />

        <NewsletterBand />

        <DoubleRule />
        <AdSlot ad={ADS[1]} className="mx-auto max-w-xs py-8" />
      </main>

      <Footer />
    </div>
  );
}

function NewsColumn({
  id,
  title,
  articles,
}: {
  id: string;
  title: string;
  articles: ReturnType<typeof bySection>;
}) {
  return (
    <section id={id}>
      <SectionHeading title={title} />
      {articles.map((a, i) => (
        <StoryCard key={a.id} article={a} showDek showImage={i === 0} />
      ))}
    </section>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="mb-1 border-b-4 border-double border-terra pb-1.5 text-center font-display text-xl uppercase tracking-[0.15em] text-dusk">
      {title}
    </h2>
  );
}

function NeighborhoodCard({
  neighborhood: n,
}: {
  neighborhood: (typeof NEIGHBORHOODS)[number];
}) {
  const story = byNeighborhood(n.name)[0];
  return (
    <div className="group">
      {n.image && (
        <div className="mb-3 border-2 border-dusk bg-sand p-1 shadow-[4px_4px_0_0_#bc4b51] transition-transform group-hover:-translate-y-0.5">
          <img
            src={n.image}
            alt={n.name}
            loading="lazy"
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
      )}
      <h3 className="font-display text-lg uppercase leading-tight tracking-wide text-dusk">
        {n.name}
      </h3>
      <p className="mt-0.5 font-serif text-sm italic text-terra">
        {n.tagline}
      </p>
      <p className="mt-2 text-[13px] leading-relaxed text-plum/80">{n.blurb}</p>
      {story && (
        <Link
          to={`/article/${story.id}`}
          className="mt-3 block text-[13px] font-semibold leading-snug text-terra hover:underline"
        >
          {story.headline} <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
}
