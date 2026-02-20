import type { ComponentProps } from 'react';
import Callout from './Callout';

const MDXComponents = {
  // Override standard HTML elements
  h1: (props: ComponentProps<'h1'>) => (
    <h1 className="text-4xl font-extrabold mb-6 mt-8 text-gray-900 dark:text-white border-b pb-2" {...props} />
  ),
  h2: (props: ComponentProps<'h2'>) => (
    <h2 className="text-3xl font-bold mb-4 mt-8 text-gray-800 dark:text-gray-100" {...props} />
  ),
  p: (props: ComponentProps<'p'>) => (
    <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300" {...props} />
  ),
  a: (props: ComponentProps<'a'>) => (
    <a className="text-blue-600 dark:text-blue-400 hover:underline font-medium transition-colors" {...props} />
  ),
  blockquote: (props: ComponentProps<'blockquote'>) => (
    <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic text-gray-600 dark:text-gray-400 my-6" {...props} />
  ),

  // Custom components available in MDX
  Callout,
};

export default MDXComponents;
