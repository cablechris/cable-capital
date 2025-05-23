# Chris Cable's Blog

A personal blog and portfolio site built with Next.js, TypeScript, and Tailwind CSS.

## Project Structure

```
app/
├── components/           # Shared components
│   ├── Layout.tsx        # Main layout component used by all pages
│   ├── ResearchPaper.tsx # Research paper component with visualizations
│   ├── TableOfContents.tsx # Table of contents component
│   ├── games/           # Game components
│   │   └── RetroPixelCollector.tsx
│   ├── layout/          # Layout components
│   │   └── MainLayout.tsx  # Alternative layout (not currently used)
│   ├── ui/             # UI components
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── visualizations/ # Research paper visualizations
│   │   ├── TraitSurvivalVisualization.tsx
│   │   ├── TraitPropagationVisualization.tsx
│   │   ├── MetaPreferenceVisualization.tsx
│   │   ├── BaselineTraitPersistenceVisualization.tsx
│   │   └── SubculturalNetworkVisualization.tsx
│   └── content/        # Content-specific components
│
├── lib/                # Utilities and data
│   ├── types/         # Shared TypeScript types
│   │   └── index.ts
│   └── utils/         # Helper functions
│
├── content/           # Content files
│   ├── blog/         # Blog posts (future MDX support)
│   ├── papers/       # Research papers
│   └── projects/     # Project showcases
│
└── styles/           # Global styles
    └── globals.css
```

## Features

- Responsive design with Tailwind CSS
- Dark mode support
- Type-safe components with TypeScript
- Interactive games and visualizations
- Research paper showcase
- Blog with TypeScript data source (MDX support can be added in the future)
- Project portfolio

## Blog Post Management

**Current Approach:**
- Blog posts are managed as a TypeScript array in `app/data/posts.ts`.
- Each post is an object with `slug`, `title`, `date`, and `content` fields.
- The blog index (`/blog`) and homepage display posts by mapping over this array.
- Individual blog posts are rendered via a dynamic route: `app/blog/[slug]/page.tsx`.

**To add a new post:**
1. Open `app/data/posts.ts`.
2. Add a new object to the `posts` array with the required fields.
3. The post will automatically appear on the blog index and have its own page at `/blog/[slug]`.

**Example post object:**
```ts
{
  slug: 'my-new-post',
  title: 'My New Post',
  date: 'June 10, 2024',
  content: [
    'First paragraph...',
    'Second paragraph...'
  ]
}
```

**Dynamic Routing:**
- The file `app/blog/[slug]/page.tsx` handles rendering individual blog posts based on the URL slug.
- If a post is not found, a "Post not found" message is shown.

## Development

### Components

- Use the shared UI components in `components/ui/` for consistent styling
- Game components should be placed in `components/games/`
- Layout components in `components/layout/` handle page structure
- Content-specific components go in `components/content/`

### Types

All shared TypeScript types are in `lib/types/index.ts`. This includes:
- Blog post types
- Research paper types
- Project types
- Game types

### Styling

- Uses Tailwind CSS for styling
- Dark mode support with `dark:` variants
- Consistent color scheme and spacing
- Responsive design patterns

### Content Management

- Blog posts are currently managed in `app/data/posts.ts` (MDX support can be added in the future)
- Research papers include interactive visualizations
- Projects showcase technical details and live demos
- Games are built with TypeScript and modern web technologies

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details
