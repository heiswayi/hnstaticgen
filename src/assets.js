const fs = require("fs");
const path = require("path");
const config = require("./config");

const copyDir = (src, dest) => {
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // Read source directory
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      // Recursively copy subdirectories
      copyDir(srcPath, destPath);
    } else {
      // Copy file
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

const copyAssets = () => {
  const assetsDir = config.dev.assetsdir || "./assets";

  if (!fs.existsSync(assetsDir)) {
    console.log(`No assets directory found at ${assetsDir}, skipping asset copy`);
    return;
  }

  const destDir = path.join(config.dev.outdir, "assets");

  try {
    copyDir(assetsDir, destDir);
    console.log(`Assets copied successfully from ${assetsDir} to ${destDir}`);
  } catch (error) {
    console.error(`Error copying assets: ${error.message}`);
  }
};

module.exports = copyAssets;
