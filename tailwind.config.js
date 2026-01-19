/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primitive Colors - Light
        'light-primary': {
                  '100': 'var(--light-primary-100)',
                  '200': 'var(--light-primary-200)',
                  '300': 'var(--light-primary-300)',
                  '400': 'var(--light-primary-400)',
                  '500': 'var(--light-primary-500)',
                  '600': 'var(--light-primary-600)',
                  '700': 'var(--light-primary-700)',
                  '800': 'var(--light-primary-800)',
                  '900': 'var(--light-primary-900)'
        },
        'light-gray': {
                  '100': 'var(--light-gray-100)',
                  '200': 'var(--light-gray-200)',
                  '300': 'var(--light-gray-300)',
                  '400': 'var(--light-gray-400)',
                  '500': 'var(--light-gray-500)',
                  '600': 'var(--light-gray-600)',
                  '700': 'var(--light-gray-700)',
                  '800': 'var(--light-gray-800)',
                  '900': 'var(--light-gray-900)',
                  '000': 'var(--light-gray-000)'
        },
        // Primitive Colors - Dark
        'dark-primary': {
                  '100': 'var(--dark-primary-100)',
                  '200': 'var(--dark-primary-200)',
                  '300': 'var(--dark-primary-300)',
                  '400': 'var(--dark-primary-400)',
                  '500': 'var(--dark-primary-500)',
                  '600': 'var(--dark-primary-600)',
                  '700': 'var(--dark-primary-700)',
                  '800': 'var(--dark-primary-800)',
                  '900': 'var(--dark-primary-900)'
        },
        'dark-gray': {
                  '100': 'var(--dark-gray-100)',
                  '200': 'var(--dark-gray-200)',
                  '300': 'var(--dark-gray-300)',
                  '400': 'var(--dark-gray-400)',
                  '500': 'var(--dark-gray-500)',
                  '600': 'var(--dark-gray-600)',
                  '700': 'var(--dark-gray-700)',
                  '800': 'var(--dark-gray-800)',
                  '900': 'var(--dark-gray-900)',
                  '000': 'var(--dark-gray-000)'
        },
        // Status Colors
        green: {
                  '100': 'var(--green-100)',
                  '200': 'var(--green-200)',
                  '300': 'var(--green-300)',
                  '400': 'var(--green-400)',
                  '500': 'var(--green-500)',
                  '600': 'var(--green-600)',
                  '700': 'var(--green-700)',
                  '800': 'var(--green-800)',
                  '900': 'var(--green-900)'
        },
        blue: {
                  '100': 'var(--blue-100)',
                  '200': 'var(--blue-200)',
                  '300': 'var(--blue-300)',
                  '400': 'var(--blue-400)',
                  '500': 'var(--blue-500)',
                  '600': 'var(--blue-600)',
                  '700': 'var(--blue-700)',
                  '800': 'var(--blue-800)',
                  '900': 'var(--blue-900)'
        },
        indigo: {
                  '100': 'var(--indigo-100)',
                  '200': 'var(--indigo-200)',
                  '300': 'var(--indigo-300)',
                  '400': 'var(--indigo-400)',
                  '500': 'var(--indigo-500)',
                  '600': 'var(--indigo-600)',
                  '700': 'var(--indigo-700)',
                  '800': 'var(--indigo-800)',
                  '900': 'var(--indigo-900)'
        },
        red: {
                  '100': 'var(--red-100)',
                  '200': 'var(--red-200)',
                  '300': 'var(--red-300)',
                  '400': 'var(--red-400)',
                  '500': 'var(--red-500)',
                  '600': 'var(--red-600)',
                  '700': 'var(--red-700)',
                  '800': 'var(--red-800)',
                  '900': 'var(--red-900)'
        },
        // Semantic Colors - Background
        bg: {
                  'primary-level1': 'var(--bg-primary-level1)',
                  'primary-level1-hover': 'var(--bg-primary-level1-hover)',
                  'neutral-level1': 'var(--bg-neutral-level1)',
                  'neutral-level1-hover': 'var(--bg-neutral-level1-hover)',
                  'neutral-level2': 'var(--bg-neutral-level2)',
                  'neutral-surface': 'var(--bg-neutral-surface)',
                  'neutral-surface-hover': 'var(--bg-neutral-surface-hover)',
                  'neutral-base': 'var(--bg-neutral-base)',
                  'neutral-base-hover': 'var(--bg-neutral-base-hover)',
                  'neutral-disabled-checked': 'var(--bg-neutral-disabled-checked)',
                  'status-negative': 'var(--bg-status-negative)',
                  'status-positive': 'var(--bg-status-positive)',
                  'status-information': 'var(--bg-status-information)'
        },
        // Semantic Colors - Border
        border: {
                  'primary-level1': 'var(--border-primary-level1)',
                  'neutral-level1': 'var(--border-neutral-level1)',
                  'status-negative': 'var(--border-status-negative)',
                  'status-positive': 'var(--border-status-positive)',
                  'status-information': 'var(--border-status-information)',
                  'neutral-level1-hover': 'var(--border-neutral-level1-hover)',
                  'neutral-level2': 'var(--border-neutral-level2)',
                  'neutral-disabled': 'var(--border-neutral-disabled)',
                  'neutral-active': 'var(--border-neutral-active)'
        },
        // Semantic Colors - Icon
        icon: {
                  'primary-level1': 'var(--icon-primary-level1)',
                  'neutral-level1': 'var(--icon-neutral-level1)',
                  'status-negative': 'var(--icon-status-negative)',
                  'status-positive': 'var(--icon-status-positive)',
                  'status-information': 'var(--icon-status-information)',
                  'neutral-level2': 'var(--icon-neutral-level2)',
                  'neutral-white': 'var(--icon-neutral-white)',
                  'neutral-inverse': 'var(--icon-neutral-inverse)',
                  'neutral-disabled': 'var(--icon-neutral-disabled)'
        },
        // Semantic Colors - Text
        text: {
                  'primary-base': 'var(--text-primary-base)',
                  'neutral-base': 'var(--text-neutral-base)',
                  'neutral-description': 'var(--text-neutral-description)',
                  'neutral-disabled': 'var(--text-neutral-disabled)',
                  'neutral-inverse': 'var(--text-neutral-inverse)',
                  'neutral-white': 'var(--text-neutral-white)',
                  'status-negative': 'var(--text-status-negative)',
                  'status-positive': 'var(--text-status-positive)',
                  'status-information': 'var(--text-status-information)'
        },
        // Component Colors - Button
        btn: {
                  'bg-primary-base': 'var(--btn-bg-primary-base)',
                  'bg-primary-hover': 'var(--btn-bg-primary-hover)',
                  'border-primary': 'var(--btn-border-primary)',
                  'border-normal': 'var(--btn-border-normal)',
                  'bg-normal-base': 'var(--btn-bg-normal-base)',
                  'bg-normal-hover': 'var(--btn-bg-normal-hover)',
                  'bg-error-base': 'var(--btn-bg-error-base)',
                  'bg-error-hover': 'var(--btn-bg-error-hover)',
                  'text-primary': 'var(--btn-text-primary)',
                  'text-normal': 'var(--btn-text-normal)',
                  'text-disabled': 'var(--btn-text-disabled)',
                  'text-error': 'var(--btn-text-error)',
                  'text-inverse': 'var(--btn-text-inverse)',
                  'text-white': 'var(--btn-text-white)'
        },
        // Component Colors - Input
        input: {
                  'bg-base': 'var(--input-bg-base)',
                  'bg-disabled': 'var(--input-bg-disabled)',
                  'border-base': 'var(--input-border-base)',
                  'border-hover': 'var(--input-border-hover)',
                  'border-active': 'var(--input-border-active)',
                  'border-error': 'var(--input-border-error)',
                  'text-normal': 'var(--input-text-normal)',
                  'text-disabled': 'var(--input-text-disabled)',
                  'text-error': 'var(--input-text-error)',
                  'icon-normal': 'var(--input-icon-normal)',
                  'icon-disabled': 'var(--input-icon-disabled)'
        },
        // Component Colors - Control
        control: {
                  'bg-primary': 'var(--control-bg-primary)',
                  'bg-normal': 'var(--control-bg-normal)',
                  'bg-disabled': 'var(--control-bg-disabled)',
                  'bg-disabled-checked': 'var(--control-bg-disabled-checked)',
                  'border-primary': 'var(--control-border-primary)',
                  'border-level1': 'var(--control-border-level1)',
                  'border-level1-hover': 'var(--control-border-level1-hover)',
                  'border-disabled': 'var(--control-border-disabled)',
                  'text-normal': 'var(--control-text-normal)',
                  'text-disabled': 'var(--control-text-disabled)',
                  'icon-primary': 'var(--control-icon-primary)',
                  'icon-normal': 'var(--control-icon-normal)',
                  'icon-white': 'var(--control-icon-white)',
                  'icon-inverse': 'var(--control-icon-inverse)',
                  'icon-disabled': 'var(--control-icon-disabled)'
        },
        // Component Colors - Toggle
        toggle: {
                  'bg-primary': 'var(--toggle-bg-primary)',
                  'bg-normal': 'var(--toggle-bg-normal)',
                  'bg-disabled': 'var(--toggle-bg-disabled)',
                  'bg-disabled-checked': 'var(--toggle-bg-disabled-checked)',
                  'text-normal': 'var(--toggle-text-normal)',
                  'text-disabled': 'var(--toggle-text-disabled)',
                  'icon-inverse': 'var(--toggle-icon-inverse)',
                  'icon-white': 'var(--toggle-icon-white)'
        },
      },
      spacing: {
        // Height tokens
        ...{
                'h-1': 'var(--height-1)',
                'h-2': 'var(--height-2)',
                'h-3': 'var(--height-3)',
                'h-4': 'var(--height-4)',
                'h-5': 'var(--height-5)',
                'h-6': 'var(--height-6)',
                'h-7': 'var(--height-7)',
                'h-8': 'var(--height-8)',
                'h-9': 'var(--height-9)'
        },
        // Padding tokens
        ...{
                'p-1': 'var(--padding-1)',
                'p-2': 'var(--padding-2)',
                'p-3': 'var(--padding-3)',
                'p-4': 'var(--padding-4)',
                'p-5': 'var(--padding-5)',
                'p-6': 'var(--padding-6)',
                'p-7': 'var(--padding-7)',
                'p-8': 'var(--padding-8)',
                'p-9': 'var(--padding-9)'
        },
        // Gap tokens
        ...{
                'g-1': 'var(--gap-1)',
                'g-2': 'var(--gap-2)',
                'g-3': 'var(--gap-3)',
                'g-4': 'var(--gap-4)',
                'g-5': 'var(--gap-5)',
                'g-6': 'var(--gap-6)',
                'g-7': 'var(--gap-7)',
                'g-8': 'var(--gap-8)',
                'g-9': 'var(--gap-9)'
        },
      },
      borderRadius: {
              'mini': 'var(--radius-mini)',
              'small': 'var(--radius-small)',
              'medium': 'var(--radius-medium)',
              'large': 'var(--radius-large)',
              'xlarge': 'var(--radius-xlarge)',
              'xxlarge': 'var(--radius-xxlarge)',
              'full': 'var(--radius-full)'
      },
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
      fontSize: {
        // Base font sizes (for individual use)
        ...{
                'heading-small': 'var(--font-size-heading-small)',
                'heading-medium': 'var(--font-size-heading-medium)',
                'heading-large': 'var(--font-size-heading-large)',
                'heading-xlarge': 'var(--font-size-heading-xlarge)',
                'body-small': 'var(--font-size-body-small)',
                'body-medium': 'var(--font-size-body-medium)',
                'body-large': 'var(--font-size-body-large)'
        },
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
