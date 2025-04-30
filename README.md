# Chris Cable's Blog

A personal blog and portfolio site built with Next.js, TypeScript, and Tailwind CSS.

## Project Structure

```
app/
├── components/           # Shared components
│   ├── Layout.jsx        # Main layout component used by all pages
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
│   ├── blog/         # Blog posts
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
- Blog with MDX support
- Project portfolio

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/cablechris/my-blog.git
cd my-blog
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

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

- Blog posts are written in MDX
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
