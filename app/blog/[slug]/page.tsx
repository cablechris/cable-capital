import { posts } from '../../data/posts';
import Layout from '../../components/Layout';
import Link from 'next/link';

interface PageProps {
  params: { slug: string };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = posts.find(p => p.slug === params.slug);

  if (!post) {
    return (
      <Layout>
        <div className="py-16">
          <p className="text-gray-500">Post not found.</p>
          <Link href="/blog" className="text-sm text-primary hover:text-primary/80 mt-4 inline-block">
            ← Back to writing
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-16 max-w-2xl">
        <Link href="/blog" className="text-xs text-gray-400 hover:text-gray-600 transition-colors mb-10 inline-block">
          ← Writing
        </Link>
        <p className="text-xs text-gray-400 mb-4">{post.date}</p>
        <h1 className="font-serif text-3xl md:text-4xl text-gray-900 leading-tight mb-10">
          {post.title}
        </h1>
        <div className="space-y-5">
          {post.content.map((para, i) => (
            <p
              key={i}
              className="text-gray-700 leading-relaxed text-base"
              dangerouslySetInnerHTML={{ __html: para }}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
