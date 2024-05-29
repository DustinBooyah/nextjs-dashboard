import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
// import type { Config } from "tailwindcss";
// import xBeshTheme from "@xbeshui/core";
// import defautTheme from "tailwindcss/defaultTheme";
 
// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./system/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     screens: {
//       sm: xBeshTheme.xBeshTheme.screens.sm,
//       md: xBeshTheme.xBeshTheme.screens.md,
//       lg: xBeshTheme.xBeshTheme.screens.lg,
//       xl: xBeshTheme.xBeshTheme.screens.xl,
//       '2xl': xBeshTheme.xBeshTheme.screens['2xl']
//     },
//     colors: defautTheme.colors,
//     extend: {
//       colors: xBeshTheme.xBeshTheme.colors,
//       container: xBeshTheme.xBeshTheme.container,
//       fontFamily: xBeshTheme.xBeshTheme.fontFamily,
//       animation: xBeshTheme.xBeshTheme.animation,
//       borderRadius: xBeshTheme.xBeshTheme.borderRadius,
//       keyframes: xBeshTheme.xBeshTheme.keyframes,
//       opacity: xBeshTheme.xBeshTheme.opacity,
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;