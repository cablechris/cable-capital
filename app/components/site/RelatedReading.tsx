import Link from 'next/link';

export type ReadingLink = { href: string; title: string };

export default function RelatedReading({ entries }: { entries: ReadingLink[] }) {
  if (!entries.length) return null;

  return (
    <section className="related-reading" aria-labelledby="related-reading-heading">
      <h2 id="related-reading-heading">Related reading</h2>
      <div className="related-reading-links">
        {entries.map(entry => (
          <Link key={entry.href} href={entry.href}>
            <span>{entry.title}</span><span aria-hidden="true">↗</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
