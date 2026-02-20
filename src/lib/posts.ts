import type { ComponentType } from 'react';

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  component: ComponentType<any>;
}

// Load all MDX files from src/posts
const postsGlob = import.meta.glob('/src/posts/*.mdx', { eager: true });

export const getPosts = (): Post[] => {
  const posts = Object.entries(postsGlob).map(([path, module]: [string, any]) => {
    const slug = path.split('/').pop()?.replace('.mdx', '') || '';
    const { frontmatter, default: Component } = module;

    // Ensure frontmatter exists, or provide defaults
    return {
      slug,
      title: frontmatter?.title || 'Untitled',
      date: frontmatter?.date || new Date().toISOString(),
      description: frontmatter?.description || '',
      component: Component,
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPost = (slug: string): Post | undefined => {
  const posts = getPosts();
  return posts.find((post) => post.slug === slug);
};
