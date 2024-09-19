/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
      garamond: ['"EB Garamond"', "serif"],
      lora: ["Lora", "serif"],
      Namdhinggo: ["Namdhinggo", "serif"],
      Gothic: ["Nanum Gothic", "serif"],
      Kalnia: ["Kalnia", "serif"],
      Merienda: ["Merienda", "cursive"],
      "protest-guerrilla": ["Protest Guerrilla", "sans-serif"],
      Comfortaa: ["Comfortaa", "serif"],
      Rubik: ["Rubik Doodle Shadow", "serif"],
      RubikM: ["Rubik Moonrocks", 'serif'],
      RubikWet: ["Rubik Wet Paint", 'serif'],
      'protest-rev': ["Protest Revolution", 'serif'],
      Cabin: ["Cabin Sketch", 'serif'],
      Lilita: ["Lilita One", 'serif'],
      Madimi: ["Madimi One", 'serif'],
      anta: ["Anta", 'serif'],
      Dancing: ["Dancing Script", 'serif'],
      Exo: ["Exo 2", 'serif'],
      Exo: ["Exo 2", 'serif'],
      Signika: ["Signika Negative", 'serif'],
      Courier: ["Courier Prime", 'serif'],
      Cinzel: ["Cinzel", 'serif'],
      Rowdies: ["Rowdies",'serif']
    },
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        gradient: {
          '0%': { backgroundPosition: '200% 0%' },
          '100%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '-200% 0%' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        gradient: 'gradient 10s linear infinite',
        shine: 'shine 3.5s linear infinite',
      },
    },
    
  },
  plugins: [require("tailwindcss-animate")],
}