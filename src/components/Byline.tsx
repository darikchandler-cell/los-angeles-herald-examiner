import { Link } from 'react-router';
import { authorByName, bylineNames } from '@/data/authors';

/**
 * Renders a byline, linking only contributors who have a page.
 * Other names stay plain text.
 */
export function Byline({ byline }: { byline: string }) {
  const names = bylineNames(byline);
  if (!names.some((name) => authorByName(name))) {
    return <>{byline}</>;
  }

  return (
    <>
      By{' '}
      {names.map((name, index) => {
        const author = authorByName(name);
        const separator =
          index === 0 ? null : index === names.length - 1 ? ' and ' : ', ';
        return (
          <span key={`${name}-${index}`}>
            {separator}
            {author ? (
              <Link
                to={`/author/${author.slug}`}
                className="underline decoration-current underline-offset-2 hover:text-terra"
              >
                {name}
              </Link>
            ) : (
              name
            )}
          </span>
        );
      })}
    </>
  );
}
