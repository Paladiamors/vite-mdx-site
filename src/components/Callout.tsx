import type { ReactNode } from 'react';

type CalloutProps = {
  type?: 'info' | 'warning' | 'error';
  title?: string;
  children: ReactNode;
};

export default function Callout({ type = 'info', title, children }: CalloutProps) {
  const styles = {
    info: 'bg-blue-100 dark:bg-blue-900/50 border-blue-500 text-blue-900 dark:text-blue-100',
    warning: 'bg-yellow-100 dark:bg-yellow-900/50 border-yellow-500 text-yellow-900 dark:text-yellow-100',
    error: 'bg-red-100 dark:bg-red-900/50 border-red-500 text-red-900 dark:text-red-100',
  };

  return (
    <div className={`border-l-4 p-4 my-6 rounded-r shadow-sm ${styles[type]}`}>
      {title && <div className="font-bold text-lg mb-2">{title}</div>}
      <div className="text-base">{children}</div>
    </div>
  );
}
