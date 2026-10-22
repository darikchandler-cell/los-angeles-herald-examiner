export interface Author {
  slug: string;
  name: string;
  title: string;
  bio: string;
  email: string;
}

export const AUTHORS: Author[] = [
  {
    slug: 'dj-henderson',
    name: 'DJ Henderson',
    title: 'Contributor, Consumer Products & Trade Shows',
    bio: 'DJ Henderson covers consumer products, retail, and the trade show circuit for the Herald Examiner, with a focus on new products from the convenience, electrical, and gift industries.',
    email: 'dhenderson@losangelesheraldexaminer.com',
  },
];

export function getAuthor(slug: string): Author | undefined {
  return AUTHORS.find((author) => author.slug === slug);
}

export function authorByName(name: string): Author | undefined {
  return AUTHORS.find((author) => author.name === name);
}

/** Names in a byline such as "By Ada Lovelace and Grace Hopper". */
export function bylineNames(byline: string): string[] {
  return byline
    .replace(/^By\s+/, '')
    .split(/\s+and\s+|,\s+/)
    .map((name) => name.trim())
    .filter(Boolean);
}
