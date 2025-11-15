const fs = require("fs");

const postMethods = require("./posts");
const config = require("./config");
const addHomePage = require("./homepage");
const createRSSFeed = require("./rss");
const createSitemap = require("./sitemap");
const copyAssets = require("./assets");

console.log("🔨 Building your static site...\n");

// Create output directory if it doesn't exist
if (!fs.existsSync(config.dev.outdir)) {
  fs.mkdirSync(config.dev.outdir, { recursive: true });
}

// Read and process all markdown posts
const posts = fs
  .readdirSync(config.dev.postsdir)
  .filter(file => file.endsWith('.md'))
  .map(post => post.slice(0, -3))
  .map(post => postMethods.createPost(post))
  .sort(function(a, b) {
    // Sort by date, newest first
    const dateA = new Date(a.attributes.date || 0);
    const dateB = new Date(b.attributes.date || 0);
    return dateB - dateA;
  });

console.log(`📝 Found ${posts.length} post(s)\n`);

// Generate all posts
postMethods.createPosts(posts);

// Generate homepage
addHomePage(posts);

// Generate RSS feed
createRSSFeed(posts);

// Generate sitemap
createSitemap(posts);

// Copy assets (images, etc.)
copyAssets();

console.log("\n✅ Build complete!\n");
console.log(`📦 Output directory: ${config.dev.outdir}`);
console.log(`🌐 To preview: cd ${config.dev.outdir} && npx http-server\n`);
