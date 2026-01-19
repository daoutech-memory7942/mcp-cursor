#!/usr/bin/env node

/**
 * Design Tokens Sync Script
 *
 * Parses variables.css and generates tailwind.config.js with design tokens
 *
 * Usage: node scripts/sync-design-tokens.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VARIABLES_CSS_PATH = path.join(__dirname, '../design/variables.css');
const TAILWIND_CONFIG_PATH = path.join(__dirname, '../tailwind.config.js');

// Parse CSS variables from :root selector
function parseRootVariables(cssContent) {
  const rootMatch = cssContent.match(/:root\s*\{([^}]+)\}/s);
  if (!rootMatch) return {};

  const variables = {};
  const varRegex = /--([a-zA-Z0-9-]+):\s*([^;]+);/g;
  let match;

  while ((match = varRegex.exec(rootMatch[1])) !== null) {
    variables[match[1]] = match[2].trim();
  }

  return variables;
}

// Categorize variables by prefix
function categorizeVariables(variables) {
  const categories = {
    colors: {
      lightPrimary: {},
      lightGray: {},
      darkPrimary: {},
      darkGray: {},
      green: {},
      blue: {},
      indigo: {},
      red: {},
      bg: {},
      border: {},
      icon: {},
      text: {},
      btn: {},
      input: {},
      control: {},
      toggle: {},
    },
    spacing: {
      height: {},
      padding: {},
      gap: {},
    },
    borderRadius: {},
    fontSize: {},
    fontWeight: {},
  };

  for (const [key, value] of Object.entries(variables)) {
    // Colors - Primitive
    if (key.startsWith('light-primary-')) {
      const num = key.replace('light-primary-', '');
      categories.colors.lightPrimary[num] = `var(--${key})`;
    } else if (key.startsWith('light-gray-')) {
      const num = key.replace('light-gray-', '');
      categories.colors.lightGray[num] = `var(--${key})`;
    } else if (key.startsWith('dark-primary-')) {
      const num = key.replace('dark-primary-', '');
      categories.colors.darkPrimary[num] = `var(--${key})`;
    } else if (key.startsWith('dark-gray-')) {
      const num = key.replace('dark-gray-', '');
      categories.colors.darkGray[num] = `var(--${key})`;
    }
    // Colors - Status
    else if (key.startsWith('green-')) {
      const num = key.replace('green-', '');
      categories.colors.green[num] = `var(--${key})`;
    } else if (key.startsWith('blue-')) {
      const num = key.replace('blue-', '');
      categories.colors.blue[num] = `var(--${key})`;
    } else if (key.startsWith('indigo-')) {
      const num = key.replace('indigo-', '');
      categories.colors.indigo[num] = `var(--${key})`;
    } else if (key.startsWith('red-')) {
      const num = key.replace('red-', '');
      categories.colors.red[num] = `var(--${key})`;
    }
    // Colors - Semantic
    else if (key.startsWith('bg-')) {
      const name = key.replace('bg-', '');
      categories.colors.bg[name] = `var(--${key})`;
    } else if (key.startsWith('border-')) {
      const name = key.replace('border-', '');
      categories.colors.border[name] = `var(--${key})`;
    } else if (key.startsWith('icon-')) {
      const name = key.replace('icon-', '');
      categories.colors.icon[name] = `var(--${key})`;
    } else if (key.startsWith('text-')) {
      const name = key.replace('text-', '');
      categories.colors.text[name] = `var(--${key})`;
    }
    // Colors - Component
    else if (key.startsWith('btn-')) {
      const name = key.replace('btn-', '');
      categories.colors.btn[name] = `var(--${key})`;
    } else if (key.startsWith('input-')) {
      const name = key.replace('input-', '');
      categories.colors.input[name] = `var(--${key})`;
    } else if (key.startsWith('control-')) {
      const name = key.replace('control-', '');
      categories.colors.control[name] = `var(--${key})`;
    } else if (key.startsWith('toggle-')) {
      const name = key.replace('toggle-', '');
      categories.colors.toggle[name] = `var(--${key})`;
    }
    // Spacing
    else if (key.startsWith('height-')) {
      const num = key.replace('height-', '');
      categories.spacing.height[`h-${num}`] = `var(--${key})`;
    } else if (key.startsWith('padding-')) {
      const num = key.replace('padding-', '');
      categories.spacing.padding[`p-${num}`] = `var(--${key})`;
    } else if (key.startsWith('gap-')) {
      const num = key.replace('gap-', '');
      categories.spacing.gap[`g-${num}`] = `var(--${key})`;
    }
    // Border Radius
    else if (key.startsWith('radius-')) {
      const name = key.replace('radius-', '');
      categories.borderRadius[name] = `var(--${key})`;
    }
    // Font Size
    else if (key.startsWith('font-size-')) {
      const name = key.replace('font-size-', '');
      categories.fontSize[name] = `var(--${key})`;
    }
    // Font Weight
    else if (key.startsWith('font-weight-')) {
      const name = key.replace('font-weight-', '');
      categories.fontWeight[name] = `var(--${key})`;
    }
  }

  return categories;
}

// Generate Tailwind config content
function generateTailwindConfig(categories) {
  const config = `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primitive Colors - Light
        'light-primary': ${JSON.stringify(categories.colors.lightPrimary, null, 10).replace(/"/g, "'").replace(/\n/g, '\n        ')},
        'light-gray': ${JSON.stringify(categories.colors.lightGray, null, 10).replace(/"/g, "'").replace(/\n/g, '\n        ')},
        // Primitive Colors - Dark
        'dark-primary': ${JSON.stringify(categories.colors.darkPrimary, null, 10).replace(/"/g, "'").replace(/\n/g, '\n        ')},
        'dark-gray': ${JSON.stringify(categories.colors.darkGray, null, 10).replace(/"/g, "'").replace(/\n/g, '\n        ')},
        // Status Colors
        green: ${JSON.stringify(categories.colors.green, null, 10).replace(/"/g, "'").replace(/\n/g, '\n        ')},
        blue: ${JSON.stringify(categories.colors.blue, null, 10).replace(/"/g, "'").replace(/\n/g, '\n        ')},
        indigo: ${JSON.stringify(categories.colors.indigo, null, 10).replace(/"/g, "'").replace(/\n/g, '\n        ')},
        red: ${JSON.stringify(categories.colors.red, null, 10).replace(/"/g, "'").replace(/\n/g, '\n        ')},
        // Semantic Colors - Background
        bg: ${JSON.stringify(categories.colors.bg, null, 10).replace(/"/g, "'").replace(/\n/g, '\n        ')},
        // Semantic Colors - Border
        border: ${JSON.stringify(categories.colors.border, null, 10).replace(/"/g, "'").replace(/\n/g, '\n        ')},
        // Semantic Colors - Icon
        icon: ${JSON.stringify(categories.colors.icon, null, 10).replace(/"/g, "'").replace(/\n/g, '\n        ')},
        // Semantic Colors - Text
        text: ${JSON.stringify(categories.colors.text, null, 10).replace(/"/g, "'").replace(/\n/g, '\n        ')},
        // Component Colors - Button
        btn: ${JSON.stringify(categories.colors.btn, null, 10).replace(/"/g, "'").replace(/\n/g, '\n        ')},
        // Component Colors - Input
        input: ${JSON.stringify(categories.colors.input, null, 10).replace(/"/g, "'").replace(/\n/g, '\n        ')},
        // Component Colors - Control
        control: ${JSON.stringify(categories.colors.control, null, 10).replace(/"/g, "'").replace(/\n/g, '\n        ')},
        // Component Colors - Toggle
        toggle: ${JSON.stringify(categories.colors.toggle, null, 10).replace(/"/g, "'").replace(/\n/g, '\n        ')},
      },
      spacing: {
        // Height tokens
        ...${JSON.stringify(categories.spacing.height, null, 8).replace(/"/g, "'").replace(/\n/g, '\n        ')},
        // Padding tokens
        ...${JSON.stringify(categories.spacing.padding, null, 8).replace(/"/g, "'").replace(/\n/g, '\n        ')},
        // Gap tokens
        ...${JSON.stringify(categories.spacing.gap, null, 8).replace(/"/g, "'").replace(/\n/g, '\n        ')},
      },
      borderRadius: ${JSON.stringify(categories.borderRadius, null, 8).replace(/"/g, "'").replace(/\n/g, '\n      ')},
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
      fontSize: {
        // Base font sizes (for individual use)
        ...${JSON.stringify(categories.fontSize, null, 8).replace(/"/g, "'").replace(/\n/g, '\n        ')},
        // Typography tokens (complete styles with size, lineHeight, fontWeight)
        'typo-heading-xlarge': ['var(--font-size-heading-xlarge)', { lineHeight: '1.5', fontWeight: '500' }],
        'typo-heading-large': ['var(--font-size-heading-large)', { lineHeight: '1.5', fontWeight: '500' }],
        'typo-heading-medium': ['var(--font-size-heading-medium)', { lineHeight: '1.5', fontWeight: '700' }],
        'typo-heading-small': ['var(--font-size-heading-small)', { lineHeight: '1.5', fontWeight: '700' }],
        'typo-body-large-regular': ['var(--font-size-body-large)', { lineHeight: '1.5', fontWeight: '400' }],
        'typo-body-medium-bold': ['var(--font-size-body-medium)', { lineHeight: '1.6', fontWeight: '500' }],
        'typo-body-medium-regular': ['var(--font-size-body-medium)', { lineHeight: '1.6', fontWeight: '400' }],
        'typo-body-small-regular': ['var(--font-size-body-small)', { lineHeight: '1.5', fontWeight: '400' }],
      },
      fontWeight: {
        regular: '400',
        semibold: '500',
        bold: '700',
      },
      lineHeight: {
        tight: '1.5',
        normal: '1.6',
      },
    },
  },
  plugins: [],
}
`;

  return config;
}

// Main execution
function main() {
  console.log('🎨 Syncing design tokens from variables.css to tailwind.config.js...\n');

  // Read variables.css
  if (!fs.existsSync(VARIABLES_CSS_PATH)) {
    console.error('❌ Error: variables.css not found at', VARIABLES_CSS_PATH);
    process.exit(1);
  }

  const cssContent = fs.readFileSync(VARIABLES_CSS_PATH, 'utf-8');
  console.log('✅ Read variables.css');

  // Parse variables
  const variables = parseRootVariables(cssContent);
  const variableCount = Object.keys(variables).length;
  console.log(`✅ Parsed ${variableCount} CSS variables`);

  // Categorize variables
  const categories = categorizeVariables(variables);
  console.log('✅ Categorized variables');

  // Generate Tailwind config
  const tailwindConfig = generateTailwindConfig(categories);
  console.log('✅ Generated Tailwind config');

  // Write Tailwind config
  fs.writeFileSync(TAILWIND_CONFIG_PATH, tailwindConfig);
  console.log('✅ Written to tailwind.config.js');

  console.log('\n🎉 Design tokens synced successfully!');
  console.log('\nSummary:');
  console.log(`  - Colors: ${Object.keys(categories.colors.lightPrimary).length + Object.keys(categories.colors.lightGray).length + Object.keys(categories.colors.darkPrimary).length + Object.keys(categories.colors.darkGray).length} primitive, ${Object.keys(categories.colors.green).length + Object.keys(categories.colors.blue).length + Object.keys(categories.colors.indigo).length + Object.keys(categories.colors.red).length} status`);
  console.log(`  - Semantic: ${Object.keys(categories.colors.bg).length} bg, ${Object.keys(categories.colors.border).length} border, ${Object.keys(categories.colors.icon).length} icon, ${Object.keys(categories.colors.text).length} text`);
  console.log(`  - Component: ${Object.keys(categories.colors.btn).length} btn, ${Object.keys(categories.colors.input).length} input, ${Object.keys(categories.colors.control).length} control, ${Object.keys(categories.colors.toggle).length} toggle`);
  console.log(`  - Spacing: ${Object.keys(categories.spacing.height).length} height, ${Object.keys(categories.spacing.padding).length} padding, ${Object.keys(categories.spacing.gap).length} gap`);
  console.log(`  - Border Radius: ${Object.keys(categories.borderRadius).length}`);
  console.log(`  - Font Size: ${Object.keys(categories.fontSize).length}`);
}

main();
