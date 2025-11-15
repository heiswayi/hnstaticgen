---
title: Welcome to HN Static Site Generator
description: An introduction to this simple yet powerful static site generator with a retro Apple System 6 design
date: "2025-01-15"
tags: ["introduction", "getting-started"]
draft: false
---

Welcome to **HN Static Site Generator**! This is a simple, elegant static site generator built with Node.js that transforms your markdown files into a beautiful retro-styled website.

## Features

This static site generator comes with many powerful features:

- **Retro Design**: Beautiful Apple System 6 inspired design using system.css
- **Markdown Support**: Write your content in markdown with extended features
- **RSS Feed**: Automatic RSS feed generation for your blog
- **Sitemap**: SEO-friendly sitemap generation
- **Tags/Categories**: Organize your posts with tags
- **Draft Posts**: Mark posts as drafts to hide them from publication
- **Development Server**: Built-in server for local preview
- **Watch Mode**: Auto-rebuild when files change
- **Asset Management**: Automatic copying of images and other assets

## Getting Started

### Writing Your First Post

Create a new markdown file in the `content/` folder with front-matter:

```markdown
---
title: My First Post
description: This is my first blog post
date: "2025-01-15"
tags: ["blog", "first-post"]
draft: false
---

Your content goes here...
```

### Available Commands

- `npm run build` - Build your static site
- `npm run serve` - Start development server
- `npm run dev` - Watch for changes and auto-rebuild

### Configuration

Edit `src/config.js` to customize your site:

- Blog name and description
- Author information
- Site URL for RSS and sitemap
- Output directories

## Markdown Features

This generator supports many markdown features:

### Code Highlighting

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("World");
```

### Tables

| Feature | Supported |
|---------|-----------|
| Markdown | ✓ |
| Tables | ✓ |
| Code | ✓ |
| Footnotes | ✓ |

### Task Lists

- [x] Set up the generator
- [x] Write first post
- [ ] Customize design
- [ ] Deploy to production

### Keyboard Shortcuts

Press [[Ctrl]]+[[S]] to save or [[Cmd]]+[[Q]] to quit.

## What's Next?

Start writing your own posts and customize the configuration to make this site your own. Happy blogging!

---

*This post was generated automatically as an example.*
