import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Convert RGBA values (0-1 range) to hex color
 */
function rgbaToHex(r, g, b, a = 1) {
  const toHex = (value) => {
    const hex = Math.round(value * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  
  // If alpha is less than 1, return with alpha
  if (a < 1) {
    const alphaHex = Math.round(a * 255).toString(16);
    return `${hex}${alphaHex.length === 1 ? '0' + alphaHex : alphaHex}`;
  }
  
  return hex;
}

/**
 * Convert Figma token name to Tailwind CSS format
 * Example: "light/primary/100" -> "primary-100"
 */
function convertTokenName(name) {
  // Remove "light/" prefix if present
  let tokenName = name.replace(/^light\//, '');
  
  // Replace slashes with hyphens
  tokenName = tokenName.replace(/\//g, '-');
  
  return tokenName;
}

/**
 * Parse design tokens and extract color tokens
 */
function parseColorTokens(tokensData) {
  const colorTokens = {};
  
  if (!tokensData.collections || !Array.isArray(tokensData.collections)) {
    console.warn('No collections found in design tokens');
    return colorTokens;
  }
  
  tokensData.collections.forEach((collection) => {
    if (!collection.variables || !Array.isArray(collection.variables)) {
      return;
    }
    
    collection.variables.forEach((variable) => {
      // Only process COLOR type variables
      if (variable.resolvedType !== 'COLOR') {
        return;
      }
      
      // Get the first mode's value (assuming single mode for now)
      const modeId = Object.keys(variable.valuesByMode || {})[0];
      if (!modeId || !variable.valuesByMode[modeId]) {
        return;
      }
      
      const colorValue = variable.valuesByMode[modeId];
      
      // Convert RGBA to hex
      const hexColor = rgbaToHex(
        colorValue.r || 0,
        colorValue.g || 0,
        colorValue.b || 0,
        colorValue.a !== undefined ? colorValue.a : 1
      );
      
      // Convert token name to Tailwind format
      const tailwindName = convertTokenName(variable.name);
      
      colorTokens[tailwindName] = hexColor;
    });
  });
  
  return colorTokens;
}

/**
 * Generate Tailwind config with color tokens
 */
function generateTailwindConfig(colorTokens) {
  const colorsConfig = {};
  
  // Organize colors by category (e.g., primary, secondary, etc.)
  Object.keys(colorTokens).forEach((key) => {
    const parts = key.split('-');
    
    if (parts.length >= 2) {
      const category = parts[0];
      const shade = parts.slice(1).join('-');
      
      if (!colorsConfig[category]) {
        colorsConfig[category] = {};
      }
      
      colorsConfig[category][shade] = colorTokens[key];
    } else {
      // If no category, use the key directly
      colorsConfig[key] = colorTokens[key];
    }
  });
  
  return {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: colorsConfig,
      },
    },
    plugins: [],
  };
}

/**
 * Main function
 */
function main() {
  const tokenFilePath = path.join(__dirname, '../figma-design-token.json');
  const configFilePath = path.join(__dirname, '../tailwind.config.js');
  
  try {
    // Read design tokens file
    console.log('Reading design tokens from:', tokenFilePath);
    const tokensData = JSON.parse(fs.readFileSync(tokenFilePath, 'utf-8'));
    
    // Parse color tokens
    console.log('Parsing color tokens...');
    const colorTokens = parseColorTokens(tokensData);
    
    console.log(`Found ${Object.keys(colorTokens).length} color tokens`);
    
    // Generate Tailwind config
    const tailwindConfig = generateTailwindConfig(colorTokens);
    
    // Write Tailwind config
    const configContent = `/** @type {import('tailwindcss').Config} */
// This file is auto-generated from figma-design-token.json
// Do not edit manually - run: npm run generate:tailwind-tokens

export default ${JSON.stringify(tailwindConfig, null, 2)};
`;
    
    fs.writeFileSync(configFilePath, configContent, 'utf-8');
    
    console.log('✅ Tailwind config updated successfully!');
    console.log(`   Generated ${Object.keys(colorTokens).length} color tokens`);
    
    // Print some examples
    const exampleKeys = Object.keys(colorTokens).slice(0, 5);
    if (exampleKeys.length > 0) {
      console.log('\nExample tokens:');
      exampleKeys.forEach((key) => {
        console.log(`   ${key}: ${colorTokens[key]}`);
      });
    }
  } catch (error) {
    console.error('❌ Error generating Tailwind config:', error.message);
    process.exit(1);
  }
}

main();
