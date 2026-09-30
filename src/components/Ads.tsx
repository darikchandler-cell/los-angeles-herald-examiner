/* Vintage-poster display ads, Coachella program style. */

export interface AdSpec {
  image: string;
  alt: string;
  brand: string;
  copy: string;
  cta?: string;
  tall?: boolean;
}

export const ADS: AdSpec[] = [
  {
    image: '/images/ad-donuts.jpg',
    alt: 'Vintage-style ad for a roadside donut shop',
    brand: 'Randy’s on the 405',
    copy: 'Hot glazed at 3 a.m. Since 1962. You’ve seen the sign from the freeway. Exit already.',
    cta: 'Open 24 hours · Inglewood',
  },
  {
    image: '/images/ad-tacos.jpg',
    alt: 'Vintage-style ad for a street taco stand',
    brand: 'Tacos La Palma',
    copy: 'Al pastor off the trompo, tortillas pressed to order. The line moves fast. The flavor stays.',
    cta: 'Grand & Adams · Cash only',
  },
  {
    image: '/images/ad-sunscreen.jpg',
    alt: 'Vintage-style ad for sunglasses and sun care',
    brand: 'Sunset Optic Co.',
    copy: '105 SPF and polarized lenses. Because in this city, the sun is a headline, not a forecast.',
    cta: 'Locations countywide',
  },
  {
    image: '/images/ad-records.jpg',
    alt: 'Vintage-style ad for a vinyl record shop',
    brand: 'Spin City Records',
    copy: 'Crates of soul, cumbia, and G-funk. Ask about the wall of Compton pressings.',
    cta: 'Melrose & Fairfax',
  },
];

export function AdSlot({
  ad,
  className = '',
}: {
  ad: AdSpec;
  className?: string;
}) {
  return (
    <aside className={`text-center ${className}`}>
      <p className="mb-1 text-[9px] uppercase tracking-[0.35em] text-terra/70">
        Advertisement
      </p>
      <div className="border-2 border-dusk bg-sand p-2 shadow-[5px_5px_0_0_#43203a]">
        <img
          src={ad.image}
          alt={ad.alt}
          loading="lazy"
          className={`w-full object-cover ${ad.tall ? 'aspect-[4/5]' : 'aspect-square'}`}
        />
        <div className="px-1 pb-1 pt-3 text-left">
          <p className="font-display text-base uppercase tracking-wide text-dusk">
            {ad.brand}
          </p>
          <p className="mt-1 font-serif text-[13px] italic leading-snug text-plum/80">
            {ad.copy}
          </p>
          {ad.cta && (
            <p className="mt-2 inline-block bg-terra px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-cream">
              {ad.cta}
            </p>
          )}
        </div>
      </div>
    </aside>
  );
}
