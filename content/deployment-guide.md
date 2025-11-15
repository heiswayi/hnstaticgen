---
title: Deployment Guide
description: Learn how to deploy your static site to various hosting platforms
date: "2025-01-13"
tags: ["deployment", "hosting", "guide"]
draft: false
---

Once you've built your static site, you'll want to deploy it so the world can see it. This guide covers several popular deployment options.

## Build Your Site

Before deploying, make sure to build your site:

```bash
npm run build
```

This creates all the static files in the `public/` directory.

## GitHub Pages

GitHub Pages is a free hosting service for static sites.

### Steps:

1. Create a new repository on GitHub
2. Build your site locally
3. Push the `public/` folder to the `gh-pages` branch:

```bash
cd public
git init
git add .
git commit -m "Deploy to GitHub Pages"
git branch -M gh-pages
git remote add origin https://github.com/username/repo.git
git push -u origin gh-pages
```

4. Enable GitHub Pages in your repository settings

## Netlify

Netlify offers continuous deployment from Git repositories.

### Steps:

1. Create a `netlify.toml` configuration:

```toml
[build]
  command = "npm run build"
  publish = "public"
```

2. Connect your GitHub repository to Netlify
3. Netlify will automatically build and deploy on every push

## Vercel

Vercel provides excellent performance and easy deployment.

### Steps:

1. Install Vercel CLI:

```bash
npm install -g vercel
```

2. Deploy:

```bash
vercel --prod
```

3. Or connect your GitHub repository for automatic deployments

## Custom Server

You can host on any web server:

1. Build your site: `npm run build`
2. Upload the `public/` folder to your web server
3. Configure your web server to serve the files

### Nginx Example

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/html/public;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

## Important Configuration

Before deploying, update your `src/config.js`:

```javascript
const config = {
  // ... other settings
  siteUrl: "https://yourdomain.com", // Update this!
  // ...
};
```

This ensures your RSS feed and sitemap have the correct URLs.

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify RSS feed at `/rss.xml`
- [ ] Check sitemap at `/sitemap.xml`
- [ ] Test mobile responsiveness
- [ ] Verify all links work
- [ ] Check syntax highlighting
- [ ] Test on different browsers

## Continuous Deployment

Set up automated builds whenever you push new content:

1. Use GitHub Actions, Netlify, or Vercel
2. Configure automatic builds on push
3. Write posts locally and push to deploy

Example GitHub Action:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

Happy deploying!
