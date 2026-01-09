/** @type {import('tailwindcss').Config} */
// This file is auto-generated from figma-design-token.json
// Do not edit manually - run: npm run generate:tailwind-tokens

export default {
  "content": [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  "theme": {
    "extend": {
      "colors": {
        "primary": {
          "100": "#bfe3e8",
          "200": "#8cd9e3",
          "300": "#5ccfde",
          "400": "#29bdd4",
          "500": "#08a6bf",
          "600": "#058fa6",
          "700": "#005461",
          "800": "#053b42",
          "900": "#0a262b"
        },
        "gray": {
          "100": "#e6edf5",
          "200": "#c9d6e0",
          "300": "#bdccd9",
          "400": "#a8bacc",
          "500": "#8a9eb3",
          "600": "#6b7d8f",
          "700": "#59697a",
          "800": "#424d59",
          "900": "#2e363b",
          "000": "#ffffff"
        },
        "dark": {
          "primary-100": "#0a262b",
          "primary-200": "#053b42",
          "primary-300": "#005461",
          "primary-400": "#058fa6",
          "primary-500": "#08a6bf",
          "primary-600": "#29bdd4",
          "primary-700": "#5ccfde",
          "primary-800": "#8cd9e3",
          "primary-900": "#bfe3e8",
          "gray-000": "#17171c",
          "gray-100": "#262629",
          "gray-200": "#33363b",
          "gray-300": "#3d4247",
          "gray-400": "#4d5257",
          "gray-500": "#5c636e",
          "gray-600": "#787d87",
          "gray-700": "#8c94a1",
          "gray-800": "#adb8c4",
          "gray-900": "#e8e8e8"
        },
        "green": {
          "100": "#8afcbd",
          "200": "#45e88c",
          "300": "#29e67d",
          "400": "#12db6b",
          "500": "#03c759",
          "600": "#03b552",
          "700": "#059c47",
          "800": "#007d38",
          "900": "#035224"
        },
        "blue": {
          "100": "#cfe3ff",
          "200": "#9ec4ff",
          "300": "#6ea8ff",
          "400": "#3d8cfc",
          "500": "#0d6efc",
          "600": "#0a59c9",
          "700": "#084299",
          "800": "#052b66",
          "900": "#031733"
        },
        "indigo": {
          "100": "#e0cffc",
          "200": "#c29efa",
          "300": "#a370f7",
          "400": "#8540f5",
          "500": "#660ff2",
          "600": "#520dc2",
          "700": "#3d0a91",
          "800": "#290561",
          "900": "#140330"
        },
        "red": {
          "100": "#ffe3e6",
          "200": "#f2adb5",
          "300": "#eb878f",
          "400": "#e35c6b",
          "500": "#db3645",
          "600": "#b02938",
          "700": "#852129",
          "800": "#59141c",
          "900": "#2b0a0d"
        },
        "bg": {
          "primary-level1": "#000000",
          "primary-level1-hover": "#000000",
          "neutral-level1": "#000000",
          "neutral-level1-hover": "#000000",
          "neutral-level2": "#000000",
          "neutral-surface": "#000000",
          "neutral-surface-hover": "#000000",
          "neutral-base": "#000000",
          "neutral-base-hover": "#000000",
          "neutral-disabled-checked": "#000000",
          "status-negative": "#000000",
          "status-positive": "#000000",
          "status-information": "#000000"
        },
        "border": {
          "primary-level1": "#000000",
          "neutral-level1": "#000000",
          "status-negative": "#000000",
          "status-positive": "#000000",
          "status-information": "#000000",
          "neutral-level1-hover": "#000000",
          "neutral-level2": "#000000",
          "neutral-disabled": "#000000",
          "neutral-active": "#000000"
        },
        "icon": {
          "primary-level1": "#000000",
          "neutral-level1": "#000000",
          "status-negative": "#000000",
          "status-positive": "#000000",
          "status-information": "#000000",
          "neutral-level2": "#000000",
          "neutral-white": "#000000",
          "neutral-inverse": "#000000",
          "neutral-disabled": "#000000"
        },
        "text": {
          "primary-base": "#000000",
          "neutral-base": "#000000",
          "neutral-description": "#000000",
          "neutral-disabled": "#000000",
          "neutral-inverse": "#000000",
          "neutral-white": "#000000",
          "status-negative": "#000000",
          "status-positive": "#000000",
          "status-information": "#000000"
        },
        "btn": {
          "bg-primary-base": "#000000",
          "bg-primary-hover": "#000000",
          "border-primary": "#000000",
          "border-normal": "#000000",
          "bg-normal-base": "#000000",
          "bg-normal-hover": "#000000",
          "bg-error-base": "#000000",
          "bg-error-hover": "#000000",
          "text-primary": "#000000",
          "text-normal": "#000000",
          "text-disabled": "#000000",
          "text-error": "#000000",
          "text-inverse": "#000000",
          "text-white": "#000000"
        },
        "input": {
          "bg-base": "#000000",
          "bg-disabled": "#000000",
          "border-base": "#000000",
          "border-hover": "#000000",
          "border-active": "#000000",
          "border-error": "#000000",
          "text-normal": "#000000",
          "text-disabled": "#000000",
          "text-error": "#000000",
          "icon-normal": "#000000",
          "icon-disabled": "#000000"
        },
        "control": {
          "bg-primary": "#000000",
          "bg-normal": "#000000",
          "bg-disabled": "#000000",
          "bg-disabled-checked": "#000000",
          "border-primary": "#000000",
          "border-level1": "#000000",
          "border-level1-hover": "#000000",
          "border-disabled": "#000000",
          "text-normal": "#000000",
          "text-disabled": "#000000",
          "icon-primary": "#000000",
          "icon-normal": "#000000",
          "icon-white": "#000000",
          "icon-inverse": "#000000",
          "icon-disabled": "#000000"
        },
        "toggle": {
          "bg-primary": "#000000",
          "bg-normal": "#000000",
          "bg-disabled": "#000000",
          "bg-disabled-checked": "#000000",
          "text-normal": "#000000",
          "text-disabled": "#000000",
          "icon-inverse": "#000000",
          "icon-white": "#000000"
        }
      }
    }
  },
  "plugins": []
};
