module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        "poppins": ["Poppins", "ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-ring": {
          "0%": {
            transform: "scale(0.33)",
            opacity: "1",
          },
          "80%, 100%": {
            transform: "scale(2.4)",
            opacity: "0",
          },
        },
        "scale-pulse": {
          "0%": {
            transform: "scale(0.8)",
            opacity: "1",
          },
          "50%": {
            transform: "scale(1.4)",
            opacity: "0.6",
          },
          "100%": {
            transform: "scale(0.8)",
            opacity: "0.3",
          },
        },
        "flow-down": {
          "0%": {
            transform: "translateY(-10px)",
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(10px)",
            opacity: "1",
          },
        },
        "slideInFromLeft": {
          '0%': { opacity: '0.5', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      "flow-x": {
       "0%": {
          transform: "translateX(0%)",
        },
        "100%": {
          transform: "translateX(100%)",
        }
      },
      'flow': {
        '0%': { transform: 'translateY(20px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
      animation: {
        'slideInFromLeft': 'slideInFromLeft 1s ease-out forwards',
        "animate-flow-x": "flow-x 10s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-ring": "pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
        "scale-pulse": "scale-pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "flow-down": "flow-down 3s ease-in-out infinite",
        'flow': 'flow 0.8s ease-out forwards',
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
