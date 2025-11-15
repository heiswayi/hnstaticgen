const fs = require("fs");
const path = require("path");
const config = require("./config");

const watch = (buildFn) => {
  const contentDir = path.resolve(config.dev.postsdir);
  const assetsDir = path.resolve(config.dev.assetsdir || "./assets");

  console.log("👀 Watching for changes...\n");
  console.log(`  - Content: ${contentDir}`);
  console.log(`  - Assets: ${assetsDir}`);
  console.log(`  - Source: ./src\n`);

  let rebuilding = false;

  const rebuild = () => {
    if (rebuilding) return;
    rebuilding = true;

    console.log("\n🔄 Changes detected, rebuilding...\n");

    try {
      buildFn();
      console.log("✅ Rebuild complete!\n");
    } catch (error) {
      console.error("❌ Build failed:", error.message);
    }

    rebuilding = false;
  };

  // Watch content directory
  if (fs.existsSync(contentDir)) {
    fs.watch(contentDir, { recursive: true }, (eventType, filename) => {
      if (filename && filename.endsWith('.md')) {
        console.log(`📝 ${filename} changed`);
        rebuild();
      }
    });
  }

  // Watch assets directory
  if (fs.existsSync(assetsDir)) {
    fs.watch(assetsDir, { recursive: true }, (eventType, filename) => {
      if (filename) {
        console.log(`🎨 Asset ${filename} changed`);
        rebuild();
      }
    });
  }

  // Watch src directory
  const srcDir = path.resolve("./src");
  if (fs.existsSync(srcDir)) {
    fs.watch(srcDir, { recursive: true }, (eventType, filename) => {
      if (filename && filename.endsWith('.js')) {
        console.log(`🔧 Source ${filename} changed`);
        rebuild();
      }
    });
  }
};

module.exports = watch;
