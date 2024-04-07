/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */

// copyTypes.js
const fs = require('fs-extra');
const path = require('path');

// Define the source and destination directories
const srcDir = path.join(__dirname, 'src');
const destDir = path.join(__dirname, 'dist');

// Function to copy .d.ts files from src to dest
async function copyTypes(src, dest) {
  const entries = await fs.readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyTypes(srcPath, destPath); // Recurse into subdirectories
    } else if (entry.isFile() && srcPath.endsWith('.d.ts')) {
      await fs.ensureDir(dest); // Ensure the directory exists
      await fs.copy(srcPath, destPath); // Copy the .d.ts file
      console.log(`Copied: ${srcPath} to ${destPath}`);
    }
  }
}

// Start the copying process
copyTypes(srcDir, destDir).catch(console.error);
