/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        likeAnim: {
          to: { 'background-position': 'right' },
        },
      },
      blur: {
        xs: '10px',
        xl: '20px',
        '2xl': '40px',
      },
      margin: {
        inherit: 'inherit',
      },
      animation: {
        like: 'likeAnim 0.7s steps(28) forwards',
      },
      filter: {
        'invert-custom': 'invert(1)',
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        russo: ['Russo One', 'sans-serif'],
      },
      backgroundImage: {
        // dialogBackground: 'url("/assets/layout1/images/homePage/dialogBackground.png")',
        // arcBackground: 'url("/assets/layout1/images/homePage/stock.png")',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-button': ' radial-gradient(124.42% 124.42% at 50% -30.23%, #FFE81A 0%, #C5910B 100%)',
        Accountbackground: 'linear-gradient(0deg, rgba(255, 230, 26, 0.3) 0%, rgba(255, 230, 26, 0) 100%)',
        LayoutGradient: 'linear-gradient(177deg, #4983FE 2.73%, #1754D5 97.21%)',
      },
      colors: {
        // Layout2 Start
        primaryMain: {
          50: 'var(--primaryMain-50)',
          100: 'var(--primaryMain-100)',
          150: 'var(--primaryMain-150)',
          200: 'var(--primaryMain-200)',
          250: 'var(--primaryMain-250)',
          300: 'var(--primaryMain-300)',
          350: 'var(--primaryMain-350)',
          400: 'var(--primaryMain-400)',
          450: 'var(--primaryMain-450)',
          500: 'var(--primaryMain-500)',
          550: 'var(--primaryMain-550)',
          600: 'var(--primaryMain-600)',
          650: 'var(--primaryMain-650)',
          700: 'var(--primaryMain-700)',
          750: 'var(--primaryMain-750)',
          800: 'var(--primaryMain-800)',
          850: 'var(--primaryMain-850)',
          900: 'var(--primaryMain-900)',
          950: 'var(--primaryMain-950)',
          1000: 'var(--primaryMain-1000)',
        },

        primaryLight: {
          50: 'var(--primaryLight-50)',
          100: 'var(--primaryLight-100)',
          150: 'var(--primaryLight-150)',
          200: 'var(--primaryLight-200)',
          250: 'var(--primaryLight-250)',
          300: 'var(--primaryLight-300)',
          350: 'var(--primaryLight-350)',
          400: 'var(--primaryLight-400)',
          450: 'var(--primaryLight-450)',
          500: 'var(--primaryLight-500)',
          550: 'var(--primaryLight-550)',
          600: 'var(--primaryLight-600)',
          650: 'var(--primaryLight-650)',
          700: 'var(--primaryLight-700)',
          750: 'var(--primaryLight-750)',
          800: 'var(--primaryLight-800)',
          850: 'var(--primaryLight-850)',
          900: 'var(--primaryLight-900)',
          950: 'var(--primaryLight-950)',
          1000: 'var(--primaryLight-1000)',
        },

        primaryDark: {
          50: 'var(--primaryDark-50)',
          100: 'var(--primaryDark-100)',
          150: 'var(--primaryDark-150)',
          200: 'var(--primaryDark-200)',
          250: 'var(--primaryDark-250)',
          300: 'var(--primaryDark-300)',
          350: 'var(--primaryDark-350)',
          400: 'var(--primaryDark-400)',
          450: 'var(--primaryDark-450)',
          500: 'var(--primaryDark-500)',
          550: 'var(--primaryDark-550)',
          600: 'var(--primaryDark-600)',
          650: 'var(--primaryDark-650)',
          700: 'var(--primaryDark-700)',
          750: 'var(--primaryDark-750)',
          800: 'var(--primaryDark-800)',
          850: 'var(--primaryDark-850)',
          900: 'var(--primaryDark-900)',
          950: 'var(--primaryDark-950)',
          1000: 'var(--primaryDark-1000)',
        },

        black: {
          50: 'var(--black-50)',
          100: 'var(--black-100)',
          150: 'var(--black-150)',
          200: 'var(--black-200)',
          250: 'var(--black-250)',
          300: 'var(--black-300)',
          350: 'var(--black-350)',
          400: 'var(--black-400)',
          450: 'var(--black-450)',
          500: 'var(--black-500)',
          550: 'var(--black-550)',
          600: 'var(--black-600)',
          650: 'var(--black-650)',
          700: 'var(--black-700)',
          750: 'var(--black-750)',
          800: 'var(--black-800)',
          850: 'var(--black-850)',
          900: 'var(--black-900)',
          950: 'var(--black-950)',
          1000: 'var(--black-1000)',
        },

        white: {
          50: 'var(--white-50)',
          100: 'var(--white-100)',
          150: 'var(--white-150)',
          200: 'var(--white-200)',
          250: 'var(--white-250)',
          300: 'var(--white-300)',
          350: 'var(--white-350)',
          400: 'var(--white-400)',
          450: 'var(--white-450)',
          500: 'var(--white-500)',
          550: 'var(--white-550)',
          600: 'var(--white-600)',
          650: 'var(--white-650)',
          700: 'var(--white-700)',
          750: 'var(--white-750)',
          800: 'var(--white-800)',
          850: 'var(--white-850)',
          900: 'var(--white-900)',
          950: 'var(--white-950)',
          1000: 'var(--white-1000)',
        },
        // Layout2 End

        arcHomeBackGround: '#23252a',
        arcHomeBackGroundLayout2: '#ffffff00',
        arcCustomButton: '#FFE81A',
        arcCustomBorder: '#FBB500',
        arcCustomButtonColor: '#707070',
        arcCustomBackground: '#1E2024',
        arcHeaderBackground: '#282A2E',
        arcSocialButtonBackground: '#787878',
        arcCardBackground: '#31343C',
        arcTabsBackground: '#191A1E',
        arcFooterBackGround: '#1b1d21',
        arcFooterTextColor: '#5C5C5C',
        arcSidebarButtonHoverColor: '#2E3035',
        // arcAuthInput: 'rgba(255, 255, 255, 0.5)',
        arcSidebarListBackground: '#24262B',
        arcTableBackground: '#16181b',
        arcActiveTextColor: '#423100',

        // Light Mode
        grayBackground: '#E2E8F0',
        yellowIshFilter: '#fffbd7',
        lightWhite: '#fff',
        lightModeBlack: '#000',

      },
      color: {
        light: {
          background: '#FFFFFF',
          text: '#333333',
          primary: '#1F1333',
          secondary: '#E2E8F0',
          accent: '#FBBF24',
          grayBackground: '#E2E8F0',
        },
        dark: {
          background: '#1A202C',
          text: '#E2E8F0',
          primary: '#1F1333',
          secondary: '#4A5568',
          accent: '#ECC94B',
        },
      },
      boxShadow: {
        'custom-inset': '0px 0px 16px 0px #FF7A00 inset',
        buttonShadow: 'box-shadow: 0px 0px 16px 0px #FF7A00, 0px 0px 12px 0px rgba(255, 244, 144, 0.25)',
      },
      screens: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2md': '991px',
      },
      height: {
        // Layout 2 Start
        headerHeight: 'var(--headerHeight)',
        sidebarWidth: 'var(--sidebarWidth)',
        // Layout 2 End

      },
    },
  },
  plugins: [],
};
