const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js', './lib/**/*.js'],
  darkMode: 'class',
  theme: {
    fontSize: {
      '10xl': '10rem',
    },
    letterSpacing: {
      tightest: '-.06em',
    },
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      gradientColorStops: {
        // https://coolors.co/2d00f7-6a00f4-8900f2-a100f2-b100e8-bc00dd-d100d1-db00b6-e500a4-f20089
        "gradient-1-start": "#F20089",
        "gradient-1-end": "#D100D1",
        "gradient-2-start": "#D100D1",
        "gradient-2-end": "#A100F2",
        "gradient-3-start": "#A100F2",
        "gradient-3-end": "#2D00F7",
      },
      colors: {
        // Generated from https://colors.eva.design/
        primary: {
          100: "#EAEBF6",
          200: "#D6D8EE",
          300: "#AFB0CE",
          400: "#7F819D",
          500: "#45465C",
          600: "#32334F",
          700: "#222342",
          800: "#161635",
          900: "#0D0E2C",
        },
        success: {
          100: "#D0F9CD",
          200: "#9EF39F",
          300: "#68DB75",
          400: "#3FB758",
          500: "#118736",
          600: "#0C7437",
          700: "#086135",
          800: "#054E31",
          900: "#03402E",
        },
        info: {
          100: "#CDE7FA",
          200: "#9ECCF6",
          300: "#6AA4E3",
          400: "#427EC9",
          500: "#124DA5",
          600: "#0D3B8D",
          700: "#092C76",
          800: "#051E5F",
          900: "#03154F",
        },
        warning: {
          100: "#FBECC9",
          200: "#F8D595",
          300: "#EBB35F",
          400: "#D88F37",
          500: "#BF6001",
          600: "#A44A00",
          700: "#893700",
          800: "#6E2600",
          900: "#5B1B00",
        },
        danger: {
          100: "#FAD3CF",
          200: "#F5A1A1",
          300: "#E16E79",
          400: "#C3465F",
          500: "#9B173E",
          600: "#85103E",
          700: "#6F0B3C",
          800: "#590737",
          900: "#4A0434"
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: theme('colors.primary.600'),
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.900'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.900'),
            },
            code: {
              color: theme('colors.green.500'),
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code:before': {
              content: 'none',
            },
            'code:after': {
              content: 'none',
            },
            details: {
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.500'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.500'),
            },
            strong: { color: theme('colors.gray.600') },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: theme('colors.primary.400'),
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.100'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
            code: {
              backgroundColor: theme('colors.gray.800'),
            },
            details: {
              backgroundColor: theme('colors.gray.800'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.400'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.400'),
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              color: theme('colors.gray.100'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700'),
            },
          },
        },
      }),
      keyframes: {
        shrink: {
          "0% , 100%": {
            height: "0.75rem",
          },
          "50%": {
            height: "0.375rem",
          },
        },
        expand: {
          "0% , 100%": {
            height: "0.375rem",
          },
          "50%": {
            height: "0.75rem",
          },
        },
        "gradient-foreground-1": {
          "0%, 16.667%, 100%": {
            opacity: 1,
          },
          "33.333%, 83.333%": {
            opacity: 0,
          },
        },
        "gradient-background-1": {
          "0%, 16.667%, 100%": {
            opacity: 0,
          },
          "25%, 91.667%": {
            opacity: 1,
          },
        },
        "gradient-foreground-2": {
          "0%, 100%": {
            opacity: 0,
          },
          "33.333%, 50%": {
            opacity: 1,
          },
          "16.667%, 66.667%": {
            opacity: 0,
          },
        },
        "gradient-background-2": {
          "0%, to": {
            opacity: 1,
          },
          "33.333%, 50%": {
            opacity: 0,
          },
          "25%, 58.333%": {
            opacity: 1,
          },
        },
        "gradient-foreground-3": {
          "0%, 50%, 100%": {
            opacity: 0,
          },
          "66.667%, 83.333%": {
            opacity: 1,
          },
        },
        "gradient-background-3": {
          "0%, 58.333%, 91.667%, 100%": {
            opacity: 1,
          },
          "66.667%, 83.333%": {
            opacity: 0,
          },
        },
      },
      animation: {
        shrink: "shrink 1.5s infinite",
        expand: "expand 1.5s infinite",
        "gradient-background-1": "gradient-background-1 8s infinite",
        "gradient-foreground-1": "gradient-foreground-1 8s infinite",
        "gradient-background-2": "gradient-background-2 8s infinite",
        "gradient-foreground-2": "gradient-foreground-2 8s infinite",
        "gradient-background-3": "gradient-background-3 8s infinite",
        "gradient-foreground-3": "gradient-foreground-3 8s infinite",
      },
    },
  },
  variants: {
    typography: ['dark'],
    animation: ["motion-safe"]
  },
  plugins: [
    require('@tailwindcss/forms'), 
    require('@tailwindcss/typography')
  ],
}
