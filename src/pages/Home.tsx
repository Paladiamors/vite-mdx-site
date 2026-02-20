import { Link } from 'react-router-dom';
import { getPosts } from '../lib/posts';

export default function Home() {
  const posts = getPosts();

  return (
    <div className="space-y-8">
      <div className="text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Welcome to My Blog</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Exploring technology, one post at a time.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
            <div className="p-6">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">
                {new Date(post.date).toLocaleDateString()}
              </div>
              <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100 line-clamp-2">
                <Link to={`/posts/${post.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {post.description}
              </p>
              <Link
                to={`/posts/${post.slug}`}
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Read more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
