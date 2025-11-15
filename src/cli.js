#!/usr/bin/env node

const build = require("./build");
const serve = require("./serve");
const watch = require("./watch");

const args = process.argv.slice(2);
const command = args[0];

const printHelp = () => {
  console.log(`
╔═══════════════════════════════════════════════════════╗
║           HN Static Site Generator v1.0               ║
║       A simple, elegant static site generator         ║
╚═══════════════════════════════════════════════════════╝

Usage:
  npm run build           Build the static site
  npm run serve           Serve the site locally
  npm run dev             Build, watch, and serve with auto-reload

Commands:
  build                   Generate static site from markdown files
  serve                   Start development server
  dev                     Watch for changes and auto-rebuild

Examples:
  npm run build           # Build your site
  npm run serve           # Preview at http://localhost:8080
  npm run dev             # Develop with auto-reload

Configuration:
  Edit src/config.js to customize your site settings.

Content:
  Place your markdown files in the content/ folder.
  Each file should have front-matter with title, description, and date.

Front-matter example:
  ---
  title: My First Post
  description: This is my first blog post
  date: 2025-01-15
  tags: ["javascript", "web"]
  draft: false
  ---

Learn more: https://github.com/heiswayi/hnstaticgen
`);
};

switch (command) {
  case 'build':
    console.log("🔨 Building your static site...\n");
    build();
    console.log("\n✅ Build complete!\n");
    console.log("🌐 To preview: npm run serve\n");
    break;

  case 'serve':
    serve();
    break;

  case 'dev':
    console.log("🚀 Starting development mode...\n");
    console.log("🔨 Building your static site...\n");
    build();
    console.log("\n✅ Initial build complete!\n");
    watch(build);
    serve();
    break;

  case 'help':
  case '--help':
  case '-h':
    printHelp();
    break;

  default:
    console.log(`Unknown command: ${command}\n`);
    printHelp();
    process.exit(1);
}
