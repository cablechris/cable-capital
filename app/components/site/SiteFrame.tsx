'use client';

import { usePathname } from 'next/navigation';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';
import RelatedReading, { type ReadingLink } from './RelatedReading';

export default function SiteFrame({ children, relatedReadingByPath }: {
  children: React.ReactNode;
  relatedReadingByPath: Record<string, ReadingLink[]>;
}) {
  const pathname = usePathname();
  const home = pathname === '/' || pathname === '/v2';

  return (
    <div className={`ocean-site ${home ? 'is-home' : 'is-reading'}`}>
      {!home && <><a className="site-skip" href="#site-content">Skip to content</a><SiteHeader /></>}
      <div id="site-content" tabIndex={-1}>{children}</div>
      {!home && <><RelatedReading entries={relatedReadingByPath[pathname] ?? []} /><SiteFooter /></>}
    </div>
  );
}
