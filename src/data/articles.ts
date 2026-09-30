export type Section =
  | 'Front Page'
  | 'Local'
  | 'Politics'
  | 'Business'
  | 'Culture'
  | 'Sports'
  | 'Opinion'
  | 'Weather';

export interface Article {
  id: string;
  section: Section;
  headline: string;
  dek: string;
  byline: string;
  dateline: string;
  readMinutes: number;
  publishedAt: string;
  updatedAt?: string;
  hero?: boolean;
  neighborhood?: string;
  image?: string;
  body: string[];
}

/** Editorial photography, one unique photo per story, served from /public/images. */
export const ARTICLE_IMAGES: Record<string, string> = {
  'metro-line-completion': '/images/art-metro-line-completion.jpg',
  'housing-bond-vote': '/images/art-housing-bond-vote.jpg',
  'port-of-la-record': '/images/art-port-of-la-record.jpg',
  'getty-floodlights': '/images/art-getty-floodlights.jpg',
  'santa-ana-winds': '/images/art-santa-ana-winds.jpg',
  'olympics-transport': '/images/art-olympics-transport.jpg',
  'arts-endowment': '/images/art-arts-endowment.jpg',
  'water-rates': '/images/art-water-rates.jpg',
  'rams-season': '/images/art-rams-season.jpg',
  'el-pueblo-excavation': '/images/art-el-pueblo-excavation.jpg',
  'opinion-housing-editorial': '/images/art-opinion-housing-editorial.jpg',
  'broadway-renewal': '/images/art-broadway-renewal.jpg',
  'angels-sale': '/images/art-angels-sale.jpg',
  'letters-santa-monica': '/images/art-letters-santa-monica.jpg',
  'air-quality-report': '/images/art-air-quality-report.jpg',
  'santa-monica-pier-centennial': '/images/art-santa-monica-pier-centennial.jpg',
  'compton-richland-farms': '/images/art-compton-richland-farms.jpg',
  'rodeo-drive-quiet-shift': '/images/art-rodeo-drive-quiet-shift.jpg',
  'koreatown-midnight-economy': '/images/art-koreatown-midnight-economy.jpg',
  'venice-canals-climate': '/images/art-venice-canals-climate.jpg',
  'boyle-heights-mariachi-plaza': '/images/art-boyle-heights-mariachi-plaza.jpg',
  'inglewood-corridor-transforms': '/images/art-inglewood-corridor-transforms.jpg',
  'valley-heat-islands': '/images/art-valley-heat-islands.jpg',
  'hollywood-soundstage-boom': '/images/art-hollywood-soundstage-boom.jpg',
  'malibu-fire-season': '/images/art-malibu-fire-season.jpg',
  'echo-park-lotus-festival': '/images/art-echo-park-lotus-festival.jpg',
  'long-beach-waterfront': '/images/art-long-beach-waterfront.jpg',
  'west-adams-preservation': '/images/art-west-adams-preservation.jpg',
};

export const HERO_IMAGE = '/images/hero.jpg';

export function imageFor(article: Article): string | undefined {
  return article.image ?? ARTICLE_IMAGES[article.id];
}

export const ARTICLES: Article[] = [
  {
    id: 'metro-line-completion',
    section: 'Front Page',
    headline:
      'After Four Years of Construction, the Crenshaw Northern Extension Opens to Riders',
    dek: 'The 5.6-mile light rail line connecting Exposition Park to Hollywood is the first new Metro Rail segment to open in Los Angeles since 2022, and officials say it will carry 60,000 riders a day.',
    byline: 'By Marisol Vega and Tom Okafor',
    dateline: 'LOS ANGELES',
    readMinutes: 7,
    publishedAt: '2026-09-29T05:02:00',
    updatedAt: '2026-09-30T08:14:00',
    hero: true,
    body: [
      'LOS ANGELES — Thousands of Angelenos boarded the first trains of the Crenshaw Northern Extension before dawn on Tuesday, marking the end of one of the most closely watched infrastructure projects in the city’s recent history and the beginning of what transit officials hope is a new era for rail ridership in Los Angeles.',
      'The 5.6-mile line, which runs from the Expo/Crenshaw station through Mid-City, Fairfax, and into Hollywood, opened with free rides through the weekend. Metro said more than 40,000 people rode the line on its first day of service — a figure that exceeded the agency’s own projections and forced it to add trains during the evening commute.',
      '“This is the line the Westside has been waiting forty years for,” said Metro CEO Stephanie Wiggins, speaking at a ribbon-cutting ceremony at the new Fairfax station. “Every community along this corridor can now get downtown, to the beach, or to Hollywood without sitting on the 10.”',
      'The project, budgeted at $3.2 billion, came in roughly $180 million under its revised budget after a contentious redesign of the Hollywood terminus. Construction began in the fall of 2022 and survived two years of pandemic-era supply chain delays, a groundwater discovery near La Brea Avenue that stalled tunneling for five months, and a lawsuit from a coalition of homeowners that was settled last year.',
      'Ridership on Metro’s rail network has recovered slowly since 2020, and the agency is betting that the new line — which connects three existing lines and serves some of the densest, most transit-dependent neighborhoods in the county — will reverse that trend. Independent analysts are cautiously optimistic.',
      '“The corridor is right. The connections are right,” said Juan Herrera, a transportation researcher at UCLA. “The question is whether Metro can run enough service, often enough, to make it a habit rather than an experiment.”',
      'Trains are scheduled every six minutes during peak hours and every twelve minutes off-peak. The line will be folded into regular fare service on Monday.',
    ],
  },
  {
    id: 'cicLAvia-anniversary',
    section: 'Local',
    headline:
      'CicLAvia Turns Fifteen With a Route Through the Heart of the Valley',
    dek: 'Organizers expect 150,000 participants Sunday as the open-streets festival returns to Van Nuys Boulevard for the first time since 2019.',
    byline: 'By Priya Raman',
    dateline: 'VAN NUYS',
    readMinutes: 4,
    publishedAt: '2026-09-30T06:41:00',
    body: [
      'VAN NUYS — The boulevard that car commercials made famous will belong to bicycles, scooters, and strollers on Sunday, when CicLAvia celebrates its fifteenth anniversary with a 6.2-mile car-free route along Van Nuys Boulevard from Sherman Way to Oxnard Street.',
      'The event, free and open to the public from 9 a.m. to 4 p.m., will feature six “hubs” with live music, food vendors, bike repair stations, and a youth bike skills course at the newly renovated Van Nuys Civic Center.',
      '“The Valley has always been CicLAvia’s biggest audience and its biggest question mark,” said executive director Romel Pascual. “Every time we come here, the numbers blow past our projections. People are hungry for public space that isn’t a parking lot.”',
      'City officials said Metro bus routes serving Van Nuys Boulevard will be detoured for the day, with shuttle service running along Sepulveda Boulevard. Metro Bike Share will offer free unlocks at all stations within two miles of the route.',
      'The first CicLAvia, held on October 10, 2010, drew an estimated 100,000 people to seven and a half miles of car-free streets in downtown Los Angeles. Since then, the event has expanded to more than thirty editions across the region.',
    ],
  },
  {
    id: 'housing-bond-vote',
    section: 'Politics',
    headline:
      'City Council Advances $5 Billion Affordable Housing Bond for March Ballot',
    dek: 'The measure, which would fund construction and preservation of roughly 30,000 units, needs a two-thirds vote of the council and could face a crowded March ballot.',
    byline: 'By Daniel Espinoza',
    dateline: 'LOS ANGELES',
    readMinutes: 6,
    publishedAt: '2026-09-30T07:15:00',
    updatedAt: '2026-09-30T09:52:00',
    body: [
      'LOS ANGELES — The Los Angeles City Council voted 11–2 on Tuesday to place a $5 billion affordable housing bond before voters in the March 2027 election, setting up what housing advocates are already calling the most consequential local housing measure in a generation.',
      'The bond would fund the construction of about 18,000 new affordable units and the acquisition and preservation of another 12,000, with a stated goal that at least 40 percent of the money serve extremely low-income households. If approved by two-thirds of voters, it would be financed through a property tax increase estimated at $22 per year for the median homeowner.',
      '“We have a deficit of 500,000 affordable homes in this city,” said Councilmember Nithya Raman, a co-author of the measure. “Every bond we have passed before has been oversubscribed within hours. The need is not theoretical.”',
      'The two no votes came from councilmembers who argued the measure should include stronger requirements that bond-funded projects use union labor, and that more money be directed to the San Fernando Valley, which they said has received a disproportionately small share of past housing funds.',
      'Mayor Karen Bass, who has made homelessness the centerpiece of her administration, called the vote “a down payment on the city’s future” but stopped short of an endorsement, saying she wants to see the final ballot language.',
      'The measure now heads to a council committee for technical revisions before a final vote in December. If approved, it would share the March ballot with the state’s open U.S. Senate race and at least two other Los Angeles ballot measures.',
    ],
  },
  {
    id: 'port-of-la-record',
    section: 'Business',
    headline:
      'Port of Los Angeles Posts Busiest August on Record as Cargo Rebounds',
    dek: 'Container volume rose 14 percent over last year, driven by a front-loading of holiday imports and a gradual shift of cargo back from East Coast ports.',
    byline: 'By Grace Whitfield',
    dateline: 'SAN PEDRO',
    readMinutes: 5,
    publishedAt: '2026-09-30T06:58:00',
    body: [
      'SAN PEDRO — The Port of Los Angeles handled more container traffic this August than in any August in its 117-year history, port officials announced Tuesday, the strongest evidence yet that the nation’s busiest port has fully recovered from the trade disruptions of the past three years.',
      'The port moved 961,000 twenty-foot equivalent units last month, a 14 percent increase over August 2025 and the third-highest monthly total ever recorded at any U.S. port. Executives attributed the surge to retailers front-loading holiday shipments ahead of anticipated tariff changes, along with a steady migration of cargo back to the West Coast following labor agreements on the East and Gulf coasts.',
      '“The cargo is coming home,” said Port Executive Director Gene Seroka. “Los Angeles is where the trans-Pacific trade lands, and shippers are voting with their feet.”',
      'The rebound has translated into jobs. The port estimates that each day of peak-season operations supports about 23,000 direct and indirect jobs across the region, from longshore workers to truckers and warehouse employees in the Inland Empire.',
      'Economists cautioned that record volumes may not last. “A lot of this is pulling forward demand,” said Sung Won Sohn, an economist at Loyola Marymount University. “The fourth quarter will tell us whether this is a recovery or a sugar high.”',
      'Even so, port officials said warehouse vacancy rates in the harbor district have fallen below 2 percent for the first time since 2021, a sign that the logistics economy that anchors the region remains robust.',
    ],
  },
  {
    id: 'getty-floodlights',
    section: 'Culture',
    headline:
      'Dodger Stadium’s New Roof Begins to Take Shape Over the Top Deck',
    dek: 'The $1.2 billion renovation, the largest in the ballpark’s history, will add shade to 30,000 seats and a new rooftop garden by the 2028 season.',
    byline: 'By Alex Nakamura',
    dateline: 'LOS ANGELES',
    readMinutes: 5,
    publishedAt: '2026-09-30T05:47:00',
    updatedAt: '2026-09-30T08:30:00',
    body: [
      'LOS ANGELES — From the 110 freeway, the most visible change at Dodger Stadium this month is the emergence of a slender white lattice above the top deck — the first structural pieces of a roof that will eventually shade nearly a third of the ballpark’s seats.',
      'The renovation, announced in 2024 and projected to cost $1.2 billion, is the most ambitious construction project at Chavez Ravine since the stadium opened in 1962. In addition to the partial roof, plans call for a new entry plaza behind home plate, widened concourses, a rooftop garden and beer hall overlooking downtown, and fully renovated club levels.',
      '“The goal is to keep the soul of the place and fix everything else,” said Janet Marie Smith, the architectural consultant leading the design, whose previous work includes Camden Yards and the renovation of Fenway Park. “Dodger Stadium is a mid-century masterpiece. You don’t renovate a masterpiece casually.”',
      'The roof has been the project’s most debated element. Critics worried it would alter the iconic silhouette of the stadium, visible from much of the city. The design team responded by cantilevering the roof from behind the top deck so that no columns obstruct sightlines, and keeping the structure nearly invisible from below the rim.',
      'Construction is being sequenced around the baseball calendar, with the heaviest work scheduled for the offseasons. The Dodgers say the work will not reduce seating capacity during the 2027 season, and the full project is expected to be complete in time for the 2028 season — and, not coincidentally, the baseball portion of the Los Angeles Olympics.',
    ],
  },
  {
    id: 'santa-ana-winds',
    section: 'Weather',
    headline:
      'First Santa Ana Wind Event of the Season Forecast for This Weekend',
    dek: 'Gusts of 55 to 70 mph in the mountains and passes will bring elevated fire danger and a sharp warm-up before a cooldown early next week.',
    byline: 'By the Herald Examiner Weather Desk',
    dateline: 'LOS ANGELES',
    readMinutes: 3,
    publishedAt: '2026-09-30T04:55:00',
    updatedAt: '2026-09-30T07:41:00',
    body: [
      'LOS ANGELES — The National Weather Service on Tuesday issued a fire weather watch for Friday afternoon through Saturday evening, as the first Santa Ana wind event of the season is forecast to bring gusty offshore winds and single-digit humidity to much of Los Angeles and Ventura counties.',
      'North to northeast winds of 25 to 40 mph are expected in the mountains and passes, with isolated gusts to 70 mph in favored locations such as the Interstate 5 corridor through the Santa Clarita Valley and Highway 14 through Santa Clara Canyon.',
      'Temperatures will climb sharply Friday and Saturday, with downtown Los Angeles expected to reach the low 90s — about 15 degrees above normal for early October — before a cooling trend begins Sunday as the winds relax and onshore flow returns.',
      'Fire officials said the timing is manageable but concerning. “Fuels are drier than normal for this time of year after our third consecutive dry winter,” said a spokesperson for the Los Angeles County Fire Department. “We’re prepositioning engines in the usual Santa Ana corridors starting Thursday night.”',
      'The offshore flow should push smoke and haze out of the basin, making for exceptionally clear — if blustery — viewing conditions in the mountains through the weekend.',
    ],
  },
  {
    id: 'olympics-transport',
    section: 'Local',
    headline:
      'Olympic Transit Plan: Metro Promises Rail to Every Venue by 2028',
    dek: 'A revised mobility plan released Tuesday commits to expanded service on eight rail and bus rapid transit lines, but critics question whether the agency can hire enough operators in time.',
    byline: 'By Marisol Vega',
    dateline: 'LOS ANGELES',
    readMinutes: 6,
    publishedAt: '2026-09-30T07:33:00',
    body: [
      'LOS ANGELES — Los Angeles 2028 organizers and Metro on Tuesday released a joint mobility plan committing that every Olympic and Paralympic venue in the county will be reachable by rail or dedicated bus rapid transit during the Games, a promise that will require the largest service expansion in Metro’s history.',
      'The plan calls for peak rail service of every four minutes on the D Line through the Fairfax district, extended hours across the network, and a fleet of 3,000 additional buses borrowed from transit agencies across the western United States for the duration of the Games.',
      '“In 1984 we moved the world with buses and carpool lanes,” said LA28 chair Casey Wasserman. “In 2028 we’re going to move it with the largest transit network this region has ever seen.”',
      'The plan’s authors estimate that two-thirds of ticketed spectators will arrive by transit — an ambition that transit advocates called both necessary and risky. Metro is currently short about 900 bus and rail operators, and its operator academy graduates classes of roughly 120 every eight weeks.',
      '“The plan is credible if the hiring is credible,” said Eli Lipmen of Move LA. “Every Olympics says it will be the transit Games. Los Angeles has the infrastructure half-built. The question is the people.”',
      'Organizers also confirmed that a 24-hour Olympic lane network will operate on freeways and major arterials connecting venues, modeled on the 1984 Games but covering a far larger geography.',
    ],
  },
  {
    id: 'arts-endowment',
    section: 'Culture',
    headline:
      'Grand Avenue Arts Endowment Awards $42 Million to 212 L.A. Organizations',
    dek: 'The largest single round of arts funding in the county’s history includes first-ever grants to tattoo collectives, street food documentation projects, and Indigenous language theaters.',
    byline: 'By Camille Devereux',
    dateline: 'LOS ANGELES',
    readMinutes: 4,
    publishedAt: '2026-09-30T06:20:00',
    body: [
      'LOS ANGELES — The Grand Avenue Arts Endowment on Monday announced $42 million in grants to 212 arts organizations across Los Angeles County, the largest and most geographically distributed funding round in the endowment’s nineteen-year history.',
      'The grants range from $25,000 for small community ensembles to $2.1 million for the region’s flagship institutions, with a median award of $140,000. For the first time, the endowment’s peer-review panels included working artists, who pushed the funding toward organizations the endowment had never before supported.',
      'Recipients announced Monday include a Pilipino street food oral-history archive in Historic Filipinotown, a Zapotec-language theater collective in Mid-City, and a Compton-based apprenticeship program training young artists in aerosol mural traditions.',
      '“The lesson of this round is that Los Angeles’ artistic genius has never lived only in the institutions with marble lobbies,” said endowment director Sofia Chang. “It lives in backyards, in mercados, in church basements.”',
      'The endowment, seeded in 2007 with a $275 million gift from the estate of entertainment executive Roy Grand, has now distributed more than $380 million to Los Angeles arts organizations.',
    ],
  },
  {
    id: 'water-rates',
    section: 'Politics',
    headline:
      'LADWP Water Rates to Rise 9 Percent Over Two Years Under New Plan',
    dek: 'The increases, the first since 2023, will fund pipe replacement and Colorado River conservation purchases; low-income customers will see expanded subsidies.',
    byline: 'By Daniel Espinoza',
    dateline: 'LOS ANGELES',
    readMinutes: 5,
    publishedAt: '2026-09-30T08:05:00',
    body: [
      'LOS ANGELES — Water rates for Los Angeles Department of Water and Power customers will rise an average of 4.5 percent this January and another 4.3 percent in January 2028 under a plan approved unanimously by the Board of Water and Power Commissioners on Tuesday.',
      'For a typical single-family household using about 10,000 gallons a month, the increases translate to roughly $3.80 more per month in 2027 and a similar amount the following year. Commissioners noted that even after both increases, LADWP’s rates will remain below those of neighboring utilities in Pasadena, Burbank, and Long Beach.',
      'Utility officials said roughly 60 percent of the new revenue will fund replacement of aging distribution pipes — the city replaces less than 1 percent of its mains per year against an industry benchmark of 2 percent — and about 25 percent will fund water purchases and conservation programs tied to the Colorado River’s continued low flows.',
      'The plan also expands the utility’s low-income subsidy, Lifeline, raising the eligibility ceiling from 150 to 200 percent of the federal poverty line and adding an automatic enrollment option through CalFresh participation.',
      'The rate case drew modest protest at Tuesday’s hearing, with speakers from the Valley asking why outdoor watering restrictions remain in place while rates climb. Board president Nicole Neeman Brady responded that “conservation is why the increases are this small. The alternative is buying far more expensive water.”',
    ],
  },
  {
    id: 'rams-season',
    section: 'Sports',
    headline:
      'Rams Defense Finds Its Identity in Shutout Win Over Seattle',
    dek: 'Three takeaways and a goal-line stand late in the fourth quarter lifted Los Angeles to 4–0 for the first time since 2018.',
    byline: 'By Marcus Bell',
    dateline: 'INGLEWOOD',
    readMinutes: 5,
    publishedAt: '2026-09-30T05:30:00',
    body: [
      'INGLEWOOD — For three weeks, the Rams’ defense had been a pleasant surprise. On Sunday at SoFi Stadium, against the team that has defined the NFC West for half a decade, it became the story.',
      'Los Angeles forced three turnovers, sacked the Seattle quarterback five times, and turned away the Seahawks twice from inside the 10-yard line in a 24–0 win that moved the Rams to 4–0 for the first time since 2018.',
      '“We’ve been building toward this,” said defensive coordinator Chris Shula, whose unit entered the game ranked third in scoring defense. “But you don’t get to say anything in this division until you do it against Seattle. Now we’ve done it.”',
      'The second goal-line stand, with just over two minutes remaining, drew the loudest roar of the afternoon: a fourth-and-goal stop from the 2-yard line that sent the announced crowd of 72,600 into a frenzy and sent the Seahawks to their third consecutive loss.',
      'Offensively, the Rams were efficient rather than spectacular, riding a 134-yard rushing day from the league’s leading rusher and a turnover-free afternoon from the quarterback.',
      'Next up is a trip to Arizona, where the Rams will face the division’s other unbeaten team in a Thursday night game that could give Los Angeles a two-game cushion by the season’s quarter pole.',
    ],
  },
  {
    id: 'el-pueblo-excavation',
    section: 'Local',
    headline:
      'Archaeologists Uncover Portions of the Original Zanja Madre Near Olvera Street',
    dek: 'The 1781 aqueduct, long believed to lie beneath later construction, surfaced during utility work and may be preserved in place as part of El Pueblo monument.',
    byline: 'By Priya Raman',
    dateline: 'LOS ANGELES',
    readMinutes: 5,
    publishedAt: '2026-09-30T07:48:00',
    body: [
      'LOS ANGELES — A city water crew replacing a century-old main near Olvera Street last week found something no one expected: the stone-lined channel of the Zanja Madre, the aqueduct that carried water from the Los Angeles River to the pueblo founded in 1781, and the engineering work that made the city possible.',
      'Archaeologists from the Natural History Museum and the city’s Office of Historic Resources have since confirmed that the exposed segment — about forty feet long, two feet wide, and capped with rough sandstone slabs — is part of the mother ditch’s original alignment, which fed the pueblo through the Spanish, Mexican, and early American periods before it was abandoned in the early twentieth century.',
      '“This is the city’s circulatory system when it was a newborn,” said Dr. Alicia Barrera, the project’s lead archaeologist. “Every historian knew it was down here somewhere. Almost nobody believed we’d ever see it again.”',
      'State law requires construction to halt in the area while officials decide how to proceed. City Councilmember Kevin de León, whose district includes El Pueblo, said he will introduce a motion this week to preserve the segment in place and incorporate it into the monument’s interpretation of the city’s founding.',
      'The discovery adds to a remarkable run of archaeological finds along the river corridor, including portions of the original pueblo plaza unearthed during nearby utility work in 2023.',
    ],
  },
  {
    id: 'opinion-housing-editorial',
    section: 'Opinion',
    headline:
      'Editorial: The Housing Bond Is Imperfect. Los Angeles Should Pass It Anyway.',
    dek: 'The $5 billion measure before the council won’t solve the affordability crisis. But the city’s track record shows bonds are the one tool that reliably produces homes.',
    byline: 'By the Editorial Board',
    dateline: 'LOS ANGELES',
    readMinutes: 4,
    publishedAt: '2026-09-30T06:05:00',
    updatedAt: '2026-09-30T08:55:00',
    body: [
      'The $5 billion affordable housing bond headed toward the March ballot is easy to criticize. It leans too heavily on new construction over preservation. Its labor language may yet be a negotiating chip rather than a commitment. And a two-thirds voter threshold, in a March primary, is a genuinely steep hill.',
      'It should pass anyway.',
      'Los Angeles has run this experiment before — in 2008, in 2016, and in the homeless housing measures of 2017 and 2022 — and the results are unusually clear for housing policy. Bond-funded projects in this city get built. Not as fast as anyone wants, and not as cheaply, but they get built, and they stay affordable by covenant for decades.',
      'The alternative on offer from the bond’s critics is not a better bond. It is, most often, a set of regulatory wish lists — faster permitting, zoning upzoning, antitrust investigations of lumber — each defensible, none of which has ever housed a single family on its own.',
      'The measure’s deepest flaw is that it asks homeowners who are themselves stretched to tax themselves for renters they will never meet. That is a fair burden to name, and an even better reason for the council to pair the bond with the permitting reform it keeps deferring.',
      'Imperfect tools, reliably used, beat perfect ones that never arrive. Los Angeles should pass the bond — and then get to work on everything it leaves undone.',
    ],
  },
  {
    id: 'broadway-renewal',
    section: 'Business',
    headline:
      'Broadway’s Slow Renaissance Reaches the 800 Block as Two Theaters Reopen',
    dek: 'A 1917 nickelodeon and a 1926 vaudeville house will return as a cinema-bar and performance venue, joining a stretch of downtown that has added 40 ground-floor businesses in three years.',
    byline: 'By Grace Whitfield',
    dateline: 'LOS ANGELES',
    readMinutes: 5,
    publishedAt: '2026-09-30T07:22:00',
    body: [
      'LOS ANGELES — The Broadway theater district, once the busiest entertainment corridor west of Chicago, will take another step toward its long-promised revival this winter, when two of its historic venues reopen after restorations that together topped $40 million.',
      'The smaller of the two, a 350-seat nickelodeon built in 1917 and dark since the 1970s, will return in December as a cinema-bar showing repertory film and hosting live comedy. The larger, a 1,900-seat vaudeville and movie palace from 1926, reopens in February as a concert and live-event venue operated by a national promoter.',
      '“When we bought the building, pigeons were the only audience,” said developer Tara Singh, walking the nickelodeon’s restored mezzanine last week. “The bones were perfect. That’s why these buildings survive — they were built like banks because they made money like banks.”',
      'The two venues anchor the 800 block of South Broadway, which has added more than forty ground-floor businesses since 2023, including three restaurants from chefs with Michelin pedigrees, a vinyl pressing plant, and a bathhouse in a former department store basement.',
      'Commercial brokers said rents on the corridor have roughly doubled in five years but remain well below those in the Arts District, making Broadway “the last authentic deal in central Los Angeles,” as one put it.',
      'The restoration boom is not without friction: preservationists have criticized two projects for erasing original signage, and small merchants fear the rising tide. The Broadway Historic Theatre District’s community benefits agreement, negotiated in 2024, requires new venues to offer free community programming hours — the nickelodeon has committed to twenty per month.',
    ],
  },
  {
    id: 'angels-sale',
    section: 'Sports',
    headline:
      'Anaheim Approves Ballpark District Framework, Clearing Path for Angels’ New Home',
    dek: 'The city council’s 5–1 vote sets terms for a $380 million infrastructure package around the planned 35,000-seat stadium targeted to open in 2030.',
    byline: 'By Marcus Bell',
    dateline: 'ANAHEIM',
    readMinutes: 5,
    publishedAt: '2026-09-30T08:38:00',
    body: [
      'ANAHEIM — The City Council voted 5–1 on Tuesday night to approve a framework agreement for the ballpark district planned around the Angels’ future home, removing the largest remaining civic obstacle to a stadium project that has been discussed, in one form or another, for nearly a decade.',
      'The agreement commits the city to $380 million in infrastructure — roads, utilities, parking structures, and a five-acre public park ringed by plazas — around a privately financed 35,000-seat ballpark targeted to open for the 2030 season. In exchange, the team commits to a 35-year lease with no opt-outs and a community benefits package including $120 million in housing and youth sports funding.',
      '“This is not the deals we saw in the past,” said Mayor Ashleigh Aitken. “The team pays for the stadium. The city builds the public realm. The taxpayers keep the land.”',
      'The lone no vote came from a councilmember who argued the infrastructure package should go to voters as a general obligation measure. City attorneys concluded the spending, drawn from hotel and stadium district tax increments, does not require a public vote.',
      'The team is expected to break ground next summer on the site of a former bus yard south of the 57 freeway, roughly three miles from its longtime home. The current stadium will be redeveloped, with the team playing there through at least 2029.',
    ],
  },
  {
    id: 'letters-santa-monica',
    section: 'Opinion',
    headline:
      'Letters: On Dodger Stadium’s Roof, Santa Anas, and the Price of Staying',
    dek: 'Readers weigh in on the ballpark renovation, fire season anxiety, and what the housing bond means to a family that has rented in West Adams for twenty-two years.',
    byline: 'By Herald Examiner Readers',
    dateline: 'LOS ANGELES',
    readMinutes: 4,
    publishedAt: '2026-09-30T06:12:00',
    body: [
      'Regarding the Dodger Stadium renovation: I have sat in the top deck through 105-degree first pitches and 55-degree playoff nights, and I have loved every minute of it. But my father stopped coming three years ago because the sun is no longer his friend. Build the roof. Keep the soul. We can have both. — R. MENDOZA, ECHO PARK',
      'Every October now begins with the same pit in my stomach: checking the humidity and the wind before I check the score. The firefighters prepositioning on Thursday deserve every dollar we pay them and more. — S. OKAFOR, ALTADENA',
      'My wife and I have rented the same West Adams duplex for twenty-two years. Our landlord is kind; the rent is still $2,800 for what was $1,150. The housing bond will not help us next year, and maybe not in ten. But our daughter, who teaches second grade five miles from where she grew up, might actually get to stay. That is worth $22 a year. — D. & L. FLORES, WEST ADAMS',
      'The Zanja Madre discovery is the most Los Angeles story of the year: the city accidentally finds its own founding plumbing while fixing a leak. Preserve it, mark it, and put a mercado next to it. — H. TRAN, LINCOLN HEIGHTS',
    ],
  },
  {
    id: 'air-quality-report',
    section: 'Local',
    headline:
      'L.A. Air: Smog Days Fall to Record Low, But Wildfire Smoke Reshapes the Map',
    dek: 'Federal ozone exceedances hit a record low, but wildfire smoke now drives more bad-air days than cars do — and most of it blows in from outside the basin.',
    byline: 'By the Herald Examiner Staff',
    dateline: 'LOS ANGELES',
    readMinutes: 4,
    publishedAt: '2026-09-30T07:57:00',
    body: [
      'LOS ANGELES — The South Coast Air Quality Management District on Tuesday released its annual air quality accounting, and the headline is a milestone: the Los Angeles basin recorded just four days exceeding the federal ozone standard in the twelve months ending in June, the fewest since records began in 1976.',
      'Regulators credited three decades of progressively cleaner vehicles — the region’s car fleet is now on average twelve years newer than it was in 2000 — along with tighter rules on ships, trucks, and consumer products.',
      'But the report’s second finding complicates the celebration. For the third consecutive year, fine particulate pollution from wildfire smoke, much of it originating outside the basin, exceeded federal standards on more days than ozone did inside the region’s own boundaries.',
      '“We have essentially solved the problem we spent fifty years on, and inherited a new one we control far less,” said Philip Fine, the air district’s deputy executive officer. “Smoke does not respect our jurisdictional lines.”',
      'The district is preparing new rules targeting indoor air filtration in schools and large commercial buildings, which officials say yielded measurable health benefits during smoke episodes in 2024 and 2025.',
    ],
  },
  {
    id: 'santa-monica-pier-centennial',
    section: 'Culture',
    neighborhood: 'Santa Monica',
    headline:
      'As the Pier Turns 120, Santa Monica Wonders How Much Nostalgia Is Too Much',
    dek: 'The city’s most photographed landmark is planning a $95 million restoration — and a debate about who the waterfront is really for.',
    byline: 'By Camille Devereux',
    dateline: 'SANTA MONICA',
    readMinutes: 5,
    publishedAt: '2026-09-30T06:29:00',
    body: [
      'SANTA MONICA — At sunset on any given evening, the Pacific Wheel throws its LED colors across the water, the carousel’s 1922 Wurlitzer wheezes to life, and thousands of people who will never agree on anything else agree to pause and look.',
      'The Santa Monica Pier turns 120 this year, and the city is marking the anniversary with a restoration plan that has split the town. The $95 million proposal would repair the century-old pilings, restore the landmark sign and 1940s entrance, and rebuild the eastern deck — work pier officials say is overdue after decades of deferred maintenance.',
      '“The pilings have a useful life, and we’re near the end of it,” said pier historian James Harris. “This isn’t about adding a Ferris wheel of LEDs. It’s about whether the pier is still standing in 2070.”',
      'Critics worry about the construction window, which would close the fishing deck and eastern restaurants for up to 18 months, and about what the restoration says about the city’s priorities. “We restored the pier before we restored the Promenade’s public restrooms,” one resident quipped at a city meeting. “That tells you the order of operations.”',
      'Whatever the plan’s fate, the pier keeps doing what it has done since 1909: holding the city’s western edge against the Pacific, one sunset at a time.',
    ],
  },
  {
    id: 'compton-richland-farms',
    section: 'Local',
    neighborhood: 'Compton',
    headline:
      'On Richland Farms, Compton’s Horse Culture Rides Into Its Second Century',
    dek: 'The working agricultural district behind Compton’s eastern neighborhoods has kept horses, goats, and gardens for a century — and a new generation is taking the reins.',
    byline: 'By Tom Okafor',
    dateline: 'COMPTON',
    readMinutes: 5,
    publishedAt: '2026-09-30T05:55:00',
    updatedAt: '2026-09-30T08:21:00',
    body: [
      'COMPTON — Behind an unremarkable fence on East Alondra Boulevard, a quarter horse named Legacy is waiting for her morning feed, and 17-year-old Zaria Thompson is already there, mucking the stall before her first class at Compton High.',
      'Thompson is one of about 40 young people in the Richland Farms equestrian program, which pairs teenagers with the working horses kept on the agricultural district’s five-acre lots. The farms date to the city’s founding parcels — Compton was incorporated in 1888 as a farming community — and for decades, Black families in particular kept horses here as both livelihood and inheritance.',
      '“People drive through Compton and they see the murals and the music history, and that’s real,” said Deborah McCoy, who has run a boarding stable on her family’s lot for 31 years. “But they don’t see this. This is the part that doesn’t make the movies.”',
      'The city has quietly supported the culture, funding arena repairs at the Compton Cowboys’ ranch and approving a pilot program that lets qualifying agricultural lots keep small herds of goats for brush clearing — a low-tech fire mitigation tool that veterans of the farms say the city would be wise to expand.',
      'On Sunday mornings, riders gather at the corner of Greenleaf Boulevard and ride the old neighborhood routes, past lots that still grow corn and citrus. The horses, Thompson said, are not a hobby. “It’s how my grandmother kept her ground when everything around her tried to move her off it.”',
    ],
  },
  {
    id: 'rodeo-drive-quiet-shift',
    section: 'Business',
    neighborhood: 'Beverly Hills',
    headline:
      'Rodeo Drive’s Landlords Confront a New Reality: Empty Windows on the Golden Mile',
    dek: 'Three flagship storefronts are dark this fall, and leasing agents say the strip’s mix is shifting from pure luxury toward dining, wellness, and experience.',
    byline: 'By Grace Whitfield',
    dateline: 'BEVERLY HILLS',
    readMinutes: 5,
    publishedAt: '2026-09-30T07:08:00',
    body: [
      'BEVERLY HILLS — Rodeo Drive has survived recessions, robberies, and the rise of e-commerce. This fall, it is confronting something newer: the possibility that the world’s most famous shopping street may need to become something other than a shopping street.',
      'Three flagship storefronts between Dayton Way and Brighton Way are currently dark, their papered windows a subject of nervous conversation among the street’s landlords. Leasing data show asking rents on the 200 block have fallen about 18 percent from their 2023 peak, though they remain among the highest in the Western Hemisphere.',
      '“The brands that defined the street for forty years built temples to themselves,” said retail broker Elena Sandoval, who has leased Rodeo space for two decades. “The customer who used to fly in from Riyadh and Tokyo now buys from her phone. The street has to give her a reason to come anyway.”',
      'The reason, increasingly, is dinner. Over the past two years, eight restaurants and three wellness clinics have signed Rodeo addresses, several of them taking space that held couture houses within living memory. The city’s planning commission approved new signage rules this summer to make street-level dining easier.',
      'City officials insist the street’s fundamentals remain unmatched — the tax base, the foot traffic, the address itself. “Rodeo Drive is not dying,” said Mayor Lili Bosse. “It is doing what great streets do: changing clothes without changing bones.”',
    ],
  },
  {
    id: 'koreatown-midnight-economy',
    section: 'Culture',
    neighborhood: 'Koreatown',
    headline:
      'At 2 A.M. in Koreatown, the Griddles Are Full and the City’s Night Shift Clocks In',
    dek: 'An estimated 40,000 people work in Koreatown’s after-midnight economy — the cooks, singers, drivers, and dishwashers who keep LA awake.',
    byline: 'By Alex Nakamura',
    dateline: 'KOREATOWN',
    readMinutes: 6,
    publishedAt: '2026-09-30T04:40:00',
    body: [
      'LOS ANGELES — At 2 a.m. on a Tuesday, the corner of Olympic and Vermont looks like a rumor the rest of the city hasn’t heard yet: parking lots at capacity, a line out the door of a 24-hour tofu house, a karaoke tower pulsing light onto a bus bench where a night-shift nurse is eating kimchi fried rice out of a takeout box before her 7 p.m. — or is it 7 a.m.? — rounds.',
      'Koreatown’s midnight economy is among the largest in the nation, and it has become the subject of a new UCLA study that attempts, for the first time, to count it. The researchers’ estimate: more than 40,000 people work in the neighborhood between midnight and 6 a.m., across roughly 1,800 businesses — restaurants, bars, karaoke rooms, saunas, groceries, salons, and the delivery networks that stitch them together.',
      '“This is not nightlife in the West Hollywood sense,” said Dr. Christine Min, the study’s lead author. “It is infrastructure. The person eating bulgogi at 3 a.m. might be a nurse, a gig driver, a film editor, or all three. The neighborhood feeds the people who keep the city running while it sleeps.”',
      'The district’s 24-hour permits, some dating to the 1980s, are among the most permissive in the city. Operators say the economics only work because of density: Koreatown’s 120,000 residents live within three of the city’s densest square miles, meaning the after-midnight customer base arrives on foot.',
      'There are frictions — noise complaints from new residential towers, a chronic shortage of late-night parking enforcement, and the persistent question of who benefits as the neighborhood’s profile rises. But at Olympic and Vermont, the griddles argue otherwise. The city, at this hour, is wide awake.',
    ],
  },
  {
    id: 'venice-canals-climate',
    section: 'Local',
    neighborhood: 'Venice',
    headline:
      'Venice’s Canals Face a Rising Pacific — and a Debate Over Raising Walls',
    dek: 'King tides now crest the canal walkways several times a year. The city has floated four adaptation plans; neighbors have opinions about all of them.',
    byline: 'By Priya Raman',
    dateline: 'VENICE',
    readMinutes: 5,
    publishedAt: '2026-09-30T06:51:00',
    updatedAt: '2026-09-30T09:10:00',
    body: [
      'VENICE — Abbot Kinney’s 1905 vision of a “Venice of America” was always a real estate stunt with better landscaping. But the canals he dug remain — and this fall, for the first time, the city of Los Angeles is formally studying how long they can stay.',
      'King tides this week again sent water over the canal walkways, lapping at the doors of the lowest-lying homes along Linnie and Howland canals. City engineers say such overtopping, once a rarity, now happens several times a year, and that the groundwater beneath the neighborhood is rising with it.',
      'Four adaptation concepts are on the table: raising and sealing the canal walls, installing tide gates at the inlets, gradually converting the lowest canals to landscaped wetlands, and — the option drawing the most heat — a managed retreat program for the handful of most exposed properties.',
      '“These canals are why people pay $4 million for 1,800 square feet,” said homeowner association president Martin Oyola. “Nobody is retreating from anything. We’ll raise the walls 200 years before we give the water the deed.”',
      'City staff expect to bring a preferred plan to the council in the spring. Coastal planners note that Venice, whatever it decides, will be deciding for dozens of low-lying neighborhoods that are watching. The canals were an argument in 1905. They are an argument still — only now, the Pacific is on the other side.',
    ],
  },
  {
    id: 'boyle-heights-mariachi-plaza',
    section: 'Culture',
    neighborhood: 'Boyle Heights',
    headline:
      'Mariachi Plaza’s Musicians Are Still Waiting for the Work — and the Recognition',
    dek: 'A $23 million renovation restored the historic kiosk, but the musicians who gather beneath it say gigs are scarcer and the neighborhood’s memory is the real preservation project.',
    byline: 'By Tom Okafor',
    dateline: 'BOYLE HEIGHTS',
    readMinutes: 5,
    publishedAt: '2026-09-30T07:40:00',
    body: [
      'BOYLE HEIGHTS — By 9 a.m., the benches beneath the Mariachi Plaza kiosk hold two dozen musicians in crisp charro suits, their guitarrón cases leaning against 19th-century ironwork. Most will wait all day. Some will play.',
      'The plaza’s $23 million renovation, completed last year, restored the 1889 kiosk — one of the oldest standing structures of its kind in the American West — repaved the plaza with permeable brick, and added a small stage and interpretive signage about the mariachi tradition. The musicians approve of all of it, with one reservation.',
      '“Beautiful kiosk,” said José Huerta, 71, who has played trumpet in the plaza since 1978. “Same problem. No work.” Huerta’s weekday weddings and quinceañeras have thinned, he said, as families trim budgets; he now supplements by teaching at a music store in East LA.',
      'A coalition of musicians and preservationists is pressing the city to formally designate the plaza a cultural district, which would add funding for the musicians themselves — not just the masonry. A pilot voucher program, proposed by a local council office, would let schools and senior centers book plaza mariachis at subsidized rates.',
      '“The plaza is not the kiosk,” said Martha Morales, whose family has run a tamale stand on the corner for 42 years. “The plaza is the men under it. The city fixed the roof. Now fix the reason they stand there.”',
    ],
  },
  {
    id: 'inglewood-corridor-transforms',
    section: 'Business',
    neighborhood: 'Inglewood',
    headline:
      'Between the Stadiums, Inglewood’s Old Corridor Finds Its Second Act',
    dek: 'Market Street, once the city’s commercial heart, is adding 60 new businesses in three years — a revival powered, and pressured, by the sports megastructure next door.',
    byline: 'By Grace Whitfield',
    dateline: 'INGLEWOOD',
    readMinutes: 6,
    publishedAt: '2026-09-30T06:16:00',
    body: [
      'INGLEWOOD — From the roof deck of the new public market on Market Street, the view is a study in the city’s two lives: to the east, the sweeping white canopies of SoFi Stadium; to the west, the church steeples and palms of the neighborhoods that were here long before the spaceship landed.',
      'Market Street, Inglewood’s original commercial spine, spent four decades in decline before the stadium era arrived. Now it is the site of one of the most concentrated small-business revivals in Southern California: 60 new businesses in three years, according to the city’s economic development office, from Oaxacan coffee roasters to a vinyl listening bar in a former furniture store.',
      '“We didn’t get here because of the stadium,” said market operator Renée Ford, who signed her lease in 2019. “But I’m not going to pretend the stadium didn’t help. Sundays pay my rent. The neighborhood keeps me honest.”',
      'The pressure is real, too. Commercial rents on the corridor have roughly tripled since 2020, and longtime merchants — the barbershops, the fried chicken house, the frutería that has been on the corner since 1968 — say their landlords are testing the market. The city responded this year with a legacy business registry, offering rent-gap grants to businesses operating in Inglewood since before 2015.',
      'Two miles south, the Intuit Dome’s opening brought a second wave. Inglewood’s mayor, a former schoolteacher, frames the moment carefully: “The whole country is looking at Inglewood now. The job of the people who were always here is to make sure Inglewood is also looking at itself.”',
    ],
  },
  {
    id: 'valley-heat-islands',
    section: 'Local',
    neighborhood: 'The Valley',
    headline:
      'In the Valley, 108 Degrees Is the New September — and Neighbors Are Adapting Block by Block',
    dek: 'Canoga Park and Pacoima are piloting shade, cooling, and tree-planting programs as San Fernando Valley heat records fall year after year.',
    byline: 'By Priya Raman',
    dateline: 'CANOGA PARK',
    readMinutes: 5,
    publishedAt: '2026-09-30T08:22:00',
    body: [
      'CANOGA PARK — The thermometer on De Soto Avenue hit 108 degrees last Friday at 3 p.m., and the line at the cooling center in the municipal building had been forming since noon. This is September in the San Fernando Valley now, and the neighborhood is quietly rebuilding itself around the fact.',
      'The Valley has always run hot — the basin traps heat against its ring of mountains — but the past five years have rewritten the scale. Woodland Hills recorded 121 degrees in 2020, and climate researchers say the Valley now averages 18 more days above 100 degrees per year than it did in the 1980s.',
      'A patchwork of adaptations has followed. Canoga Park’s “Shade the Walk” program has planted 1,400 trees along school routes since 2023; Pacoima’s pioneering community “heat officers” — trained residents, not city staff — check on elderly neighbors during heat waves and staff a network of volunteer cooling stations in churches and shops.',
      '“The city has three cooling centers for 100,000 people,” said Pacoima heat officer Yolanda Ramírez. “We are the fourth, fifth, and sixth. We are a bodega with a working freezer and a door we keep open.”',
      'Urban foresters say the tree work is the long game — mature canopy can lower street-level temperatures by 10 degrees — but a Valley sycamore needs twenty years. The neighbors on De Soto Avenue, like the rest of the Valley, are planting for a summer two decades away while surviving the one in front of them.',
    ],
  },
  {
    id: 'hollywood-soundstage-boom',
    section: 'Business',
    neighborhood: 'Hollywood',
    headline:
      'Hollywood’s Soundstages Are Booked Solid — for Television’s Last Stand',
    dek: 'Studio occupancy in the Hollywood district is at 98 percent, driven by streaming’s final spending spree and a wave of unscripted production.',
    byline: 'By Grace Whitfield',
    dateline: 'HOLLYWOOD',
    readMinutes: 5,
    publishedAt: '2026-09-30T05:38:00',
    updatedAt: '2026-09-30T07:59:00',
    body: [
      'HOLLYWOOD — The backlots that built the American century are running at 98 percent occupancy, according to a new report from the nonprofit FilmL.A., the tightest studio market in the district’s modern history — and the boom is being driven by the formats many predicted would die first.',
      'Television, proclaimed obsolete by every trade headline since 2022, is doing the renting. Unscripted series, talk shows, and reality competitions now account for nearly half of all stage bookings in Hollywood proper, as networks and streamers discover that live and unscripted content is the one thing audiences still watch in real time.',
      '“Everyone built stages for $200 million dramas,” said studio facilities manager Dana Whitmore, walking a Republic-era stage on Sunset that is now home to a nightly competition show. “The money moved. The stages are still here. They’ll book anything that needs a ceiling forty feet high.”',
      'Below the line, the boom has a texture. Grips and set builders report their best sustained work years since the pandemic, and the union training programs report waitlists. But veteran producers caution that 98 percent occupancy is also a warning: the district has almost no capacity left for the next breakout hit, and soundstage construction takes years.',
      'For the neighborhood, the activity is visible in the old ways — honeywagon trucks on Gower, the 6 a.m. coffee line at the Fountain Avenue diner, and stages glowing past midnight above the boulevard. The dream factory, it turns out, still has a night shift.',
    ],
  },
  {
    id: 'malibu-fire-season',
    section: 'Weather',
    neighborhood: 'Malibu',
    headline:
      'Malibu’s Fire Season Starts Earlier, Ends Later, and Forgets Nothing',
    dek: 'Four years after the Palisades fire, the coast city has rebuilt 62 percent of its lost homes — and changed almost everything about how it prepares for the next one.',
    byline: 'By the Herald Examiner Weather Desk',
    dateline: 'MALIBU',
    readMinutes: 5,
    publishedAt: '2026-09-30T06:47:00',
    body: [
      'MALIBU — The first fire weather watch of the season includes the Santa Monica Mountains this weekend, and in Malibu, that means the blue tarps come off the hydrants, the goats are moved to the pre-arranged firebreak lots, and the city’s emergency operations center — a converted surf shop — goes to partial staffing.',
      'Malibu’s adaptation to the new fire calendar has been methodical. The city has cleared brush from 1,100 acres since 2023, built a network of 14 emergency water tanks along the canyon roads, and passed an ordinance requiring defensible space audits at every home sale. The school district has hardened campuses; the beloved Point Dume elementary now doubles as a Type 1 fire camp.',
      'The rebuilding tells its own story. Of the 317 homes lost in the city’s 2021 fire, 62 percent have been rebuilt or are under construction — a rate well above state averages, reflecting both the community’s resources and its stubbornness. New construction codes effectively require fire-resistant everything: roofs, vents, decks, even mulch.',
      '“We lost the house my grandfather built in 1954,” said rebuilding homeowner and fire captain Annette Delacroix. “We are building something that will not do what it did. That’s all you can say now. Not ‘never again.’ Just: not the same way.”',
      'Forecasters note a grim irony in this weekend’s wind event: the same offshore flow that drives fire danger will deliver glassy surf and 80-degree beaches. Malibu will surf it by day and stand watch by night. The city is used to holding two things at once.',
    ],
  },
  {
    id: 'echo-park-lotus-festival',
    section: 'Culture',
    neighborhood: 'Echo Park & Silver Lake',
    headline:
      'The Lotus Festival Returns to Echo Park Lake, Reborn for a New Century',
    dek: 'After the lake’s $45 million rehabilitation and two pandemic years, the 41st festival drew record crowds — and reopened an old question about who the neighborhood is for.',
    byline: 'By Camille Devereux',
    dateline: 'ECHO PARK',
    readMinutes: 4,
    publishedAt: '2026-09-30T07:26:00',
    body: [
      'ECHO PARK — The lotus beds on Echo Park Lake are blooming again, and on festival weekend the boathouse lawn filled past capacity — families on picnic blankets, seniors doing tai chi at the water’s edge, a drum line from Marshall High, and, at the paddle boats, a line that stretched to Glendale Boulevard.',
      'The 41st annual Lotus Festival marked something of a homecoming. The lake’s $45 million rehabilitation, completed two years ago, restored the historic lotus beds — nearly wiped out by neglect in the 2000s — and rebuilt the boathouse and walkways. This year’s festival, moved back to its traditional July weekend, drew its largest crowd in decades, organizers said.',
      'The festival has always belonged to Echo Park’s Asian American communities, particularly its Cambodian, Filipino, and Chinese roots. In recent years, as the neighborhood’s demographics have shifted, organizers have worked to keep that center of gravity — the food vendors are still vetted by a community committee, and the opening ceremony still begins with a blessing in Khmer.',
      '“The lotus doesn’t care what your rent is,” said festival chair Sothy Chum. “It grows in mud and opens anyway. That is the whole lesson. We are trying to keep the festival like that.”',
      'As the sun dropped behind the palm ridge, the lake held the pink and white of a thousand blooms, and for one evening the neighborhood’s oldest argument went quiet.',
    ],
  },
  {
    id: 'long-beach-waterfront',
    section: 'Local',
    neighborhood: 'Long Beach',
    headline:
      'Long Beach Bets Its Future on the Water — Again',
    dek: 'A $2.4 billion waterfront overhaul, the port’s green transition, and a new wave of Cambodian and Latino entrepreneurs mark the port city’s latest reinvention.',
    byline: 'By Marisol Vega',
    dateline: 'LONG BEACH',
    readMinutes: 5,
    publishedAt: '2026-09-30T06:08:00',
    body: [
      'LONG BEACH — The Queen Mary, fogbound and grand, has watched this city remake its shoreline four times in her 89 years. The fifth reinvention is underway, and by local estimates it is the largest in the harbor’s history: $2.4 billion in public and private investment across two miles of waterfront.',
      'The plans include a rebuilt Rainbow Harbor promenade, a new aquarium expansion, 3,000 housing units in the downtown core, and — the piece drawing the most attention — a pedestrian bridge linking the waterfront to the Westside’s neighborhoods, a connection the city’s geography has made awkward for a century.',
      '“Long Beach spent fifty years turning its back on the water to serve it,” said harbor commissioner Sharon Weiss, whose family has worked the docks for three generations. “Now the water is what we have to sell.”',
      'The transition reaches the working waterfront too. The port’s zero-emission cargo handling equipment program — the most aggressive in the nation — has put 250 battery-electric yard tractors into service, with the longshore union training hundreds of members on the new machines. Offshore, wind lease areas are being surveyed for what could be the West Coast’s first floating wind terminal.',
      'Uptown, the city’s identity is being written in its shops: the Khmer doughnut houses that fed the port for decades now share streets with Salvadoran pupuserías, a Sikh-owned sports bar, and the largest Cambodian-owned bakery in the country. “Long Beach was built by people who arrived to move the world’s cargo,” Weiss said. “Now they own the bakery.”',
    ],
  },
  {
    id: 'west-adams-preservation',
    section: 'Local',
    neighborhood: 'West Adams',
    headline:
      'West Adams’ Craftsmen Watch the Rent Rise From Their Own Porches',
    dek: 'The neighborhood’s historic district has the largest concentration of intact Craftsman homes in the nation — and some of the city’s sharpest gentrification pressure.',
    byline: 'By Daniel Espinoza',
    dateline: 'LOS ANGELES',
    readMinutes: 5,
    publishedAt: '2026-09-30T07:54:00',
    body: [
      'LOS ANGELES — The porches of West Adams were built for watching the street, and these days there is plenty to watch: moving trucks, pop-up open houses, and on Adams Boulevard, a steady stream of diners queuing for restaurants that did not exist three years ago.',
      'The neighborhood holds what preservationists call the largest concentration of intact Craftsman and Victorian homes in the United States — the wooden bones of the city’s first fashionable district, built in the decades after 1900 when West Adams was where LA’s elite kept its mansions. The population that followed — Black families who moved in as the elite moved west, building the neighborhood’s churches and social clubs — gave the district its modern soul.',
      'Now the pressure arrives in familiar forms. Homes that sold for $600,000 in 2019 bring $1.5 million; several blocks have seen teardown applications for “modern farmhouse” replacements that preservation groups say would gut the district’s streetscape. The city’s Historic Preservation Overlay Zone covers much, but not all, of the neighborhood.',
      '“My grandmother bought this house in 1962 for $19,500,” said lifelong resident and neighborhood council member Charisse Browne, sitting on a porch swing older than she is. “The house next door just sold for 76 times that. The wood is the same. Tell me what changed.”',
      'A coalition of residents and preservationists is petitioning to expand the historic overlay, and a city council motion would tie anti-displacement funds to historic districts citywide. On the porches, the watching continues.',
    ],
  },
];

export const SECTIONS: Section[] = [
  'Front Page',
  'Local',
  'Politics',
  'Business',
  'Culture',
  'Sports',
  'Opinion',
  'Weather',
];

export function getArticle(id: string): Article | undefined {
  return ARTICLES.find((a) => a.id === id);
}

export function bySection(section: Section): Article[] {
  return ARTICLES.filter((a) => a.section === section);
}

export function byNeighborhood(name: string): Article[] {
  return ARTICLES.filter((a) => a.neighborhood === name);
}

export function formatStamp(iso: string): string {
  return new Date(iso).toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

export function searchArticles(query: string): Article[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return ARTICLES.filter(
    (a) =>
      a.headline.toLowerCase().includes(q) ||
      a.dek.toLowerCase().includes(q) ||
      a.body.some((p) => p.toLowerCase().includes(q)) ||
      (a.neighborhood ?? '').toLowerCase().includes(q) ||
      a.byline.toLowerCase().includes(q)
  );
}
