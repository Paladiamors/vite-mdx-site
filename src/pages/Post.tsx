import { useParams, Link } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import { getPost } from '../lib/posts';
import MDXComponents from '../components/MDXComponents';

export default function Post() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : undefined;

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Post not found</h2>
        <Link to="/" className="text-blue-600 hover:underline flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Go back home
        </Link>
      </div>
    );
  }

  const MDXContent = post.component;

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white dark:bg-gray-900 shadow-sm rounded-lg my-8">
      <div className="text-center mb-10 pb-8 border-b border-gray-100 dark:border-gray-800">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 sm:text-5xl leading-tight">{post.title}</h1>
        <time className="text-gray-500 dark:text-gray-400 font-medium block mb-4">{new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</time>
        <p className="text-xl text-gray-600 dark:text-gray-300 italic">{post.description}</p>
      </div>

      <div className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-500 max-w-none">
        <MDXProvider components={MDXComponents}>
          <MDXContent />
        </MDXProvider>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
        <Link to="/" className="text-blue-600 hover:underline inline-flex items-center font-medium transition-colors hover:text-blue-800 dark:hover:text-blue-400">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to all posts
        </Link>
      </div>
    </article>
  );
}
