# Vite + React + MDX Blog

A modern blog template built with Vite, React, TypeScript, Tailwind CSS, and MDX.

## Features

*   **MDX Support**: Write posts using Markdown with embedded React components.
*   **Tailwind CSS**: Utility-first styling with `@tailwindcss/typography` for beautiful prose.
*   **Custom Components**: Easily integrate custom React components into your posts.
*   **Routing**: Client-side routing with `react-router-dom`.
*   **Responsive Design**: Fully responsive layout including a contact form.

## Getting Started

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm (or yarn/pnpm)

### Installation

1.  Clone the repository.
2.  Install dependencies:

    ```bash
    npm install
    ```

### Running Development Server

To start the development server with hot module replacement:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

### Building for Production

To create a production build:

```bash
npm run build
```

The output will be in the `dist/` directory. You can preview the production build locally:

```bash
npm run preview
```

## Adding New Posts

1.  Create a new `.mdx` file in the `src/posts/` directory.
2.  Add the required frontmatter at the top of the file:

    ```markdown
    ---
    title: "Your Post Title"
    date: "YYYY-MM-DD"
    description: "A brief description of your post."
    ---
    ```

3.  Write your content below the frontmatter using Markdown or MDX.

## Using Custom Components

You can import and use custom components directly in your MDX files:

```jsx
import Callout from '../components/Callout';

<Callout type="info" title="Note">
  This is a custom component!
</Callout>
```

## Project Structure

*   `src/components/`: Reusable UI components (Header, Footer, Layout, MDX components).
*   `src/pages/`: Page components (Home, Post, Contact).
*   `src/posts/`: MDX blog post files.
*   `src/lib/`: Utility functions (e.g., post loading logic).
