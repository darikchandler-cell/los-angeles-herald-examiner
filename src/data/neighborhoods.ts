// The neighborhoods that make up Los Angeles — each with its own column,
// its own rhythm, and its own version of the city.
export interface Neighborhood {
  name: string;
  tagline: string;
  blurb: string;
  image?: string;
}

export const NEIGHBORHOODS: Neighborhood[] = [
  {
    name: 'Santa Monica',
    image: '/images/art-santa-monica-pier-centennial.jpg',
    tagline: 'Where the city meets the Pacific',
    blurb:
      'The pier lights, the Promenade buskers, and the fog that rolls in at 4 p.m. like clockwork. Santa Monica is Los Angeles’ front porch — and its conscience.',
  },
  {
    name: 'Beverly Hills',
    image: '/images/art-rodeo-drive-quiet-shift.jpg',
    tagline: 'The golden mile',
    blurb:
      'Rodeo Drive’s polish, the canyon’s quiet money, and a city that runs on precision. Beverly Hills keeps its own counsel — and its own zip code mystique.',
  },
  {
    name: 'Compton',
    image: '/images/art-compton-richland-farms.jpg',
    tagline: 'Rich land, rich history',
    blurb:
      'From the Richland Farms’ backyard horses to the sound that changed global music, Compton is a city of legacy, family, and unstoppable reinvention.',
  },
  {
    name: 'Venice',
    image: '/images/art-venice-canals-climate.jpg',
    tagline: 'The boardwalk and beyond',
    blurb:
      'Skate culture, Muscle Beach iron, and canals that feel stolen from another continent. Venice is where Los Angeles comes to perform — and to disappear.',
  },
  {
    name: 'Koreatown',
    image: '/images/art-koreatown-midnight-economy.jpg',
    tagline: 'The city that never sleeps here',
    blurb:
      'Twenty-four-hour bulgogi houses, rooftop karaoke, and the densest nightlife grid west of the Hudson. Koreatown is LA’s midnight engine room.',
  },
  {
    name: 'Boyle Heights',
    image: '/images/art-boyle-heights-mariachi-plaza.jpg',
    tagline: 'Where Mariachi Plaza sings',
    blurb:
      'Mariachi musicians waiting for work under the plaza’s kiosk, taquerías that draw lines around the block, and murals that keep the neighborhood’s memory alive.',
  },
  {
    name: 'Hollywood',
    image: '/images/art-hollywood-soundstage-boom.jpg',
    tagline: 'Still the dream factory',
    blurb:
      'The walk of fame’s brass stars, soundstages running around the clock, and a residential village behind the noise. Hollywood remains the world’s idea of LA.',
  },
  {
    name: 'Inglewood',
    image: '/images/art-inglewood-corridor-transforms.jpg',
    tagline: 'The new center of gravity',
    blurb:
      'SoFi Stadium’s spaceship skyline, the Intuit Dome rising down the street, and longtime residents watching their city become the region’s biggest stage.',
  },
  {
    name: 'Echo Park & Silver Lake',
    image: '/images/art-echo-park-lotus-festival.jpg',
    tagline: 'The hills and the lake',
    blurb:
      'Gentrification’s front line and its bohemian heart — songwriter nights, hillside staircases, and a lotus festival on the lake every July.',
  },
  {
    name: 'The Valley',
    image: '/images/art-valley-heat-islands.jpg',
    tagline: 'Beyond the hill',
    blurb:
      'Van Nuys Boulevard cruising, the NoHo arts district, and 100-degree summers that bake the boulevards. The Valley is LA’s vast, underestimated backyard.',
  },
  {
    name: 'Long Beach',
    image: '/images/art-long-beach-waterfront.jpg',
    tagline: 'The port city',
    blurb:
      'Queen Mary silhouettes, Cambodian doughnut shops, and a waterfront that handles the nation’s trade. Long Beach answers to LA — and to the sea.',
  },
  {
    name: 'Malibu',
    image: '/images/art-malibu-fire-season.jpg',
    tagline: 'Twenty-one miles of coast',
    blurb:
      'Surf breaks, ridgeline estates, and a colony of artists, scientists, and stubborn locals holding the line between the mountains and the ocean.',
  },
  {
    name: 'Downtown',
    image: '/images/art-air-quality-report.jpg',
    tagline: 'The old center, new again',
    blurb:
      'From the Bradbury’s iron lace to the towers of the Arts District, downtown is the city’s oldest layer and its newest argument about what comes next.',
  },
  {
    name: 'West Adams',
    image: '/images/art-west-adams-preservation.jpg',
    tagline: 'Victorian bones, new pulse',
    blurb:
      'Craftsman porches, 1920s mansions, and a restaurant row on Adams Boulevard that keeps winning citywide votes. West Adams wears its history in wood and paint.',
  },
];
