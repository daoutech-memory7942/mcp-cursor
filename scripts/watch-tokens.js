import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tokenFilePath = path.join(__dirname, '../figma-design-token.json');
let lastModified = null;

/**
 * Run the token generation script
 */
function generateTokens() {
  console.log('🔄 Design tokens changed, regenerating Tailwind config...');
  
  const scriptPath = path.join(__dirname, 'generate-tailwind-tokens.js');
  const child = spawn('node', [scriptPath], {
    stdio: 'inherit',
    shell: true,
  });
  
  child.on('close', (code) => {
    if (code === 0) {
      console.log('✅ Tailwind config updated!\n');
    } else {
      console.error('❌ Failed to update Tailwind config\n');
    }
  });
}

/**
 * Check if file has changed
 */
function checkFile() {
  try {
    const stats = fs.statSync(tokenFilePath);
    const currentModified = stats.mtimeMs;
    
    if (lastModified === null) {
      lastModified = currentModified;
      console.log('👀 Watching figma-design-token.json for changes...');
      console.log('   Press Ctrl+C to stop\n');
      // Generate tokens on first run
      generateTokens();
    } else if (currentModified !== lastModified) {
      lastModified = currentModified;
      generateTokens();
    }
  } catch (error) {
    console.error('Error watching file:', error.message);
  }
}

// Watch for file changes
console.log('🚀 Starting token watcher...\n');

// Check immediately
checkFile();

// Check every 1 second
setInterval(checkFile, 1000);

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Stopping token watcher...');
  process.exit(0);
});
