import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
          My Blog
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">Home</Link></li>
            <li><Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
