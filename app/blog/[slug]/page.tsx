import { posts } from '../../data/posts';
import Layout from '../../components/Layout';

interface PageProps {
  params: { slug: string };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = posts.find(p => p.slug === params.slug);

  if (!post) {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto py-16">
          <h1 className="text-2xl font-bold">Post not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-2xl mx-auto py-16">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-600 text-sm mb-8">{post.date}</div>
        <div className="prose prose-lg">
          {post.content.map((para, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
          ))}
        </div>
      </div>
    </Layout>
  );
} 