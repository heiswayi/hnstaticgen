# HN Static Site Generator

A simple, elegant static site generator with a retro Apple System 6 design powered by [system.css](https://github.com/sakofchit/system.css). Transform your markdown files into a beautiful nostalgic website with ease!

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D12.0.0-brightgreen.svg)

## Features

- **🎨 Retro Design** - Beautiful Apple System 6 inspired interface using system.css
- **📝 Markdown Support** - Write in markdown with extended features (tables, footnotes, task lists, code highlighting)
- **🚀 Zero Configuration** - Works out of the box with sensible defaults
- **📡 RSS Feed** - Automatic RSS feed generation for your blog
- **🗺️ Sitemap** - SEO-friendly sitemap generation
- **🏷️ Tags/Categories** - Organize your posts with tags
- **📋 Draft Posts** - Mark posts as drafts to hide them from publication
- **⚡ Development Server** - Built-in server for local preview
- **👀 Watch Mode** - Auto-rebuild when files change
- **📦 Asset Management** - Automatic copying of images and other assets
- **💅 Syntax Highlighting** - Beautiful code highlighting with highlight.js

## Quick Start

### Installation

```bash
git clone https://github.com/heiswayi/hnstaticgen.git
cd hnstaticgen
npm install
```

### Create Your First Post

Create a markdown file in the `content/` folder (e.g., `my-first-post.md`):

```markdown
---
title: My First Post
description: This is my first blog post
date: "2025-01-15"
tags: ["blog", "first-post"]
draft: false
---

# Hello World!

This is my first post using **HN Static Site Generator**.
```

### Build and Preview

```bash
# Build your site
npm run build

# Start development server
npm run serve

# Or do both with watch mode (recommended for development)
npm run dev
```

Visit http://localhost:8080 to see your site!

## Commands

| Command | Description |
|---------|-------------|
| `npm run build` | Build the static site |
| `npm run serve` | Start development server |
| `npm run dev` | Build, watch for changes, and serve |
| `npm run help` | Show help information |

## Configuration

Edit `src/config.js` to customize your site:

```javascript
const config = {
  blogName: "Your Blog Name",
  authorName: "Your Name",
  authorDescription: "A brief description about you",
  authorWebsite: "https://yourwebsite.com",
  blogDescription: "Your blog description",
  siteUrl: "https://yourdomain.com", // Important for RSS and sitemap
  dev: {
    postsdir: "./content",      // Where your markdown files are
    outdir: "./public",          // Where to generate the site
    assetsdir: "./assets",       // Where your images/assets are
    port: 8080                   // Development server port
  }
};
```

## Front Matter

Each markdown file should start with front matter:

```yaml
---
title: Post Title                 # Required
description: Post description     # Required
date: "2025-01-15"               # Required (YYYY-MM-DD format)
tags: ["tag1", "tag2"]           # Optional
draft: false                      # Optional (default: false)
---
```

## Extended Markdown Features

### Syntax Highlighting

\`\`\`javascript
function hello() {
  console.log("Hello, World!");
}
\`\`\`

### Tables

| Feature | Status |
|---------|--------|
| Tables  | ✓      |
| Tasks   | ✓      |

### Task Lists

- [x] Completed task
- [ ] Pending task

### Footnotes

Text with footnote[^1]

[^1]: Footnote content

### Keyboard Shortcuts

Press [[Ctrl]]+[[S]] to save

## Project Structure

```
hnstaticgen/
├── content/              # Your markdown posts
├── assets/              # Images and other assets (optional)
├── src/
│   ├── cli.js          # CLI interface
│   ├── build.js        # Build logic
│   ├── config.js       # Configuration
│   ├── index.js        # Entry point
│   ├── posts.js        # Post generation
│   ├── homepage.js     # Homepage generation
│   ├── rss.js          # RSS feed generation
│   ├── sitemap.js      # Sitemap generation
│   ├── assets.js       # Asset copying
│   ├── serve.js        # Development server
│   └── watch.js        # File watching
├── public/              # Generated site (git-ignored)
└── package.json
```

## Deployment

### GitHub Pages

```bash
npm run build
cd public
git init
git add .
git commit -m "Deploy"
git branch -M gh-pages
git remote add origin https://github.com/username/repo.git
git push -u origin gh-pages
```

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `public`

### Vercel

```bash
npm install -g vercel
vercel --prod
```

See the [Deployment Guide](content/deployment-guide.md) post for more options.

## Tips

- **Draft Posts**: Set `draft: true` in front matter to hide posts from publication
- **Tags**: Add tags to organize your posts by topic
- **Assets**: Place images in `assets/` folder and reference them in markdown
- **Custom Styles**: Edit `public/assets/styles/main.css` to customize the design
- **RSS Feed**: Available at `/rss.xml`
- **Sitemap**: Available at `/sitemap.xml`

## Development

To modify the generator:

1. Edit files in `src/` directory
2. Run `npm run dev` to test changes with live reload
3. The site will auto-rebuild when you save changes

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

**Heiswayi Nrird**
- Website: [heiswayi.nrird.com](https://heiswayi.nrird.com)
- GitHub: [@heiswayi](https://github.com/heiswayi)

## License

MIT License - see [LICENSE](LICENSE) file for details

## Acknowledgments

- Design inspired by [system.css](https://github.com/sakofchit/system.css)
- Markdown parsing by [markdown-it](https://github.com/markdown-it/markdown-it)
- Syntax highlighting by [highlight.js](https://highlightjs.org/)

---

Made with ❤️ using Node.js and a touch of nostalgia
