import ResearchPaper from '../../components/ResearchPaper';
import JsonLd from '../../components/JsonLd';
import { articleStructuredData } from '../../lib/structured-data';

const title = 'Culture Without Function: Emergent Coordination in Artificial Systems';
const description = 'Research paper on emergent coordination through costly signals and social learning in artificial systems.';

export default function EmergentCulturePage() {
  return (
    <>
      <JsonLd
        data={articleStructuredData({
          path: '/papers/emergent-culture',
          title,
          description,
          datePublished: '2025-01-01',
          section: 'Research',
          keywords: ['artificial intelligence', 'emergent coordination', 'costly signals', 'social learning'],
        })}
      />
      <ResearchPaper />
    </>
  );
}

export const metadata = {
  title,
  description,
};
