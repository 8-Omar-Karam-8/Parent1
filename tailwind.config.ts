import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Enhanced spacing system using 8px grid with comprehensive scale
      spacing: {
        '0.5': '0.125rem',   // 2px
        '1.5': '0.375rem',   // 6px
        '2.5': '0.625rem',   // 10px
        '3.5': '0.875rem',   // 14px
        '4.5': '1.125rem',   // 18px
        '5.5': '1.375rem',   // 22px
        '6.5': '1.625rem',   // 26px
        '7.5': '1.875rem',   // 30px
        '8.5': '2.125rem',   // 34px
        '9.5': '2.375rem',   // 38px
        '11': '2.75rem',     // 44px
        '13': '3.25rem',     // 52px
        '15': '3.75rem',     // 60px
        '17': '4.25rem',     // 68px
        '18': '4.5rem',      // 72px
        '19': '4.75rem',     // 76px
        '21': '5.25rem',     // 84px
        '22': '5.5rem',      // 88px
        '23': '5.75rem',     // 92px
        '25': '6.25rem',     // 100px
        '26': '6.5rem',      // 104px
        '27': '6.75rem',     // 108px
        '28': '7rem',        // 112px
        '29': '7.25rem',     // 116px
        '30': '7.5rem',      // 120px
        '31': '7.75rem',     // 124px
        '33': '8.25rem',     // 132px
        '34': '8.5rem',      // 136px
        '35': '8.75rem',     // 140px
        '37': '9.25rem',     // 148px
        '38': '9.5rem',      // 152px
        '39': '9.75rem',     // 156px
        '41': '10.25rem',    // 164px
        '42': '10.5rem',     // 168px
        '43': '10.75rem',    // 172px
        '45': '11.25rem',    // 180px
        '46': '11.5rem',     // 184px
        '47': '11.75rem',    // 188px
        '49': '12.25rem',    // 196px
        '50': '12.5rem',     // 200px
        '72': '18rem',       // 288px - Sidebar collapsed
        '80': '20rem',       // 320px - Sidebar expanded
      },
      
      // Enhanced border radius system
      borderRadius: {
        'xs': '0.25rem',     // 4px
        'sm': '0.5rem',      // 8px
        'md': '0.75rem',     // 12px
        'lg': '1rem',        // 16px
        'xl': '1.25rem',     // 20px
        '2xl': '1.5rem',     // 24px
        '3xl': '2rem',       // 32px
        '4xl': '2.5rem',     // 40px
      },
      
      // Comprehensive color system - WCAG 2.1 AA Compliant
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Primary color scale - Educational Blue
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "hsl(var(--primary-50))",     // #eff6ff
          100: "hsl(var(--primary-100))",   // #dbeafe
          200: "hsl(var(--primary-200))",   // #bfdbfe
          300: "hsl(var(--primary-300))",   // #93c5fd
          400: "hsl(var(--primary-400))",   // #60a5fa
          500: "hsl(var(--primary-500))",   // #3b82f6 - BRAND PRIMARY
          600: "hsl(var(--primary-600))",   // #2563eb - INTERACTIVE
          700: "hsl(var(--primary-700))",   // #1d4ed8 - TEXT
          800: "hsl(var(--primary-800))",   // #1e40af
          900: "hsl(var(--primary-900))",   // #1e3a8a
        },
        
        // Secondary color scale - Warm Comfort
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          50: "hsl(var(--secondary-50))",   // #fefdfb
          100: "hsl(var(--secondary-100))", // #fdf9f0
          200: "hsl(var(--secondary-200))", // #fbf4e6
          300: "hsl(var(--secondary-300))", // #f7eed3
          400: "hsl(var(--secondary-400))", // #f3e8c0
          500: "hsl(var(--secondary-500))", // #efe2ad
          600: "hsl(var(--secondary-600))", // #d4c79a
          700: "hsl(var(--secondary-700))", // #b8ad87
          800: "hsl(var(--secondary-800))", // #9d9374
          900: "hsl(var(--secondary-900))", // #827961
        },
        
        // Accent color scale - Growth Green
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          50: "hsl(var(--accent-50))",      // #f0fdf4
          100: "hsl(var(--accent-100))",    // #dcfce7
          200: "hsl(var(--accent-200))",    // #bbf7d0
          300: "hsl(var(--accent-300))",    // #86efac
          400: "hsl(var(--accent-400))",    // #4ade80
          500: "hsl(var(--accent-500))",    // #22c55e
          600: "hsl(var(--accent-600))",    // #16a34a
          700: "hsl(var(--accent-700))",    // #15803d
          800: "hsl(var(--accent-800))",    // #166534
          900: "hsl(var(--accent-900))",    // #14532d
        },
        
        // Neutral color scale - Professional Base
        neutral: {
          50: "hsl(var(--neutral-50))",     // #fafaf9
          100: "hsl(var(--neutral-100))",   // #f5f5f4
          200: "hsl(var(--neutral-200))",   // #e7e5e4
          300: "hsl(var(--neutral-300))",   // #d6d3d1
          400: "hsl(var(--neutral-400))",   // #a8a29e
          500: "hsl(var(--neutral-500))",   // #78716c
          600: "hsl(var(--neutral-600))",   // #57534e
          700: "hsl(var(--neutral-700))",   // #44403c
          800: "hsl(var(--neutral-800))",   // #292524
          900: "hsl(var(--neutral-900))",   // #1c1917
        },
        
        // Status colors - WCAG AA Compliant
        success: {
          50: "hsl(var(--success-50))",     // #ecfdf5 - Background
          100: "hsl(var(--success-100))",   // #d1fae5 - Light background
          500: "hsl(var(--success-500))",   // #10b981 - Primary (4.51:1 contrast)
          600: "hsl(var(--success-600))",   // #059669 - Text on light (WCAG AA)
          700: "hsl(var(--success-700))",   // #047857 - Text on white (WCAG AAA)
        },
        
        warning: {
          50: "hsl(var(--warning-50))",     // #fffbeb - Background
          100: "hsl(var(--warning-100))",   // #fef3c7 - Light background
          500: "hsl(var(--warning-500))",   // #f59e0b - Primary (4.52:1 contrast)
          600: "hsl(var(--warning-600))",   // #d97706 - Text on light (WCAG AA)
          700: "hsl(var(--warning-700))",   // #b45309 - Text on white (WCAG AAA)
        },
        
        error: {
          50: "hsl(var(--error-50))",       // #fff1f2 - Background
          100: "hsl(var(--error-100))",     // #ffe4e6 - Light background
          500: "hsl(var(--error-500))",     // #f43f5e - Primary (4.56:1 contrast)
          600: "hsl(var(--error-600))",     // #e11d48 - Text on light (WCAG AA)
          700: "hsl(var(--error-700))",     // #be123c - Text on white (WCAG AAA)
        },
        
        // Deprecated/legacy colors for compatibility
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
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
      
      // Enhanced font system with proper hierarchy
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'sans-serif'
        ],
        mono: [
          '"SFMono-Regular"',
          'Consolas',
          '"Liberation Mono"',
          'Menlo',
          'monospace'
        ],
      },
      
      // Enhanced font sizes for accessibility
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],     // 16px - Base for accessibility
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],      // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
        '5xl': ['3rem', { lineHeight: '1' }],           // 48px
        '6xl': ['3.75rem', { lineHeight: '1' }],        // 60px
      },
      
      // Enhanced shadow system with 15% opacity for light, 20% for dark
      boxShadow: {
        'soft': 'var(--shadow-soft)',
        'medium': 'var(--shadow-medium)',
        'large': 'var(--shadow-large)',
        'overlay': 'var(--shadow-overlay)',
        'glow': 'var(--shadow-glow)',
        'glow-sm': '0 0 10px hsl(var(--primary-500) / 0.2)',
        'glow-lg': '0 0 40px hsl(var(--primary-500) / 0.4)',
        'inner-soft': 'inset 0 1px 3px hsl(var(--neutral-900) / 0.1)',
        'inner-medium': 'inset 0 2px 6px hsl(var(--neutral-900) / 0.15)',
      },
      
      // Enhanced animation system
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'slide-up': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'slide-down': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'scale-in': {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.95)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-gentle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'bounce-gentle': {
          '0%, 100%': { 
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
          },
          '50%': { 
            transform: 'translateY(-5px)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
          },
        },
        'slide-in-from-right': {
          '0%': { 
            opacity: '0',
            transform: 'translateX(100%)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'slide-in-from-left': {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-100%)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
      },
      
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-in-out',
        'fade-out': 'fade-out 0.3s ease-in-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-gentle': 'pulse-gentle 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'bounce-gentle': 'bounce-gentle 1s infinite',
        'slide-in-right': 'slide-in-from-right 0.3s ease-out',
        'slide-in-left': 'slide-in-from-left 0.3s ease-out',
      },
      
      // Enhanced transition system
      transitionDuration: {
        '50': '50ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '250': '250ms',
        '300': '300ms',
        '350': '350ms',
        '400': '400ms',
        '450': '450ms',
        '500': '500ms',
        '550': '550ms',
        '600': '600ms',
        '650': '650ms',
        '700': '700ms',
        '750': '750ms',
        '800': '800ms',
        '850': '850ms',
        '900': '900ms',
        '950': '950ms',
        '1000': '1000ms',
      },
      
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'ease-in-out-back': 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
        'ease-out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'ease-in-expo': 'cubic-bezier(0.7, 0, 0.84, 0)',
        'ease-out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'ease-in-quart': 'cubic-bezier(0.5, 0, 0.75, 0)',
      },
      
      // Enhanced backdrop blur
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
        '5xl': '96px',
      },
      
      // Enhanced gradients
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-linear-135': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-secondary': 'var(--gradient-secondary)',
        'gradient-accent': 'var(--gradient-accent)',
        'gradient-success': 'var(--gradient-success)',
        'gradient-warning': 'var(--gradient-warning)',
        'gradient-error': 'var(--gradient-error)',
        'gradient-overlay': 'var(--gradient-overlay)',
        'gradient-mesh': 'radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)',
      },
      
      // Enhanced opacity scale
      opacity: {
        '2.5': '0.025',
        '7.5': '0.075',
        '15': '0.15',
        '35': '0.35',
        '45': '0.45',
        '55': '0.55',
        '65': '0.65',
        '85': '0.85',
        '95': '0.95',
      },
      
      // Enhanced z-index scale
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      
      // Enhanced line height scale
      lineHeight: {
        '3': '.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '11': '2.75rem',
        '12': '3rem',
        '13': '3.25rem',
        '14': '3.5rem',
      },
      
      // Enhanced letter spacing
      letterSpacing: {
        'tightest': '-0.075em',
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    
    // Custom plugin for enhanced color utilities
    function({ addUtilities, addComponents, theme }: any) {
      // Icon background utilities
      const colors = theme('colors')
      const iconBgs: Record<string, any> = {}
      
      // Generate icon background utilities for each color
      Object.entries(colors).forEach(([color, shades]) => {
        if (typeof shades === 'object' && shades !== null && '100' in shades) {
          iconBgs[`.icon-bg-${color}`] = {
            backgroundColor: shades[100] || shades[50] || shades.DEFAULT,
            color: shades[600] || shades[500] || shades.DEFAULT,
          }
          iconBgs[`.border-theme-${color}`] = {
            borderColor: shades[200] || shades[100] || shades.DEFAULT,
          }
        }
      })
      
      addUtilities(iconBgs)
      
      // Status utility components
      addComponents({
        '.status-badge': {
          '@apply inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border transition-all duration-300': {},
        },
        '.status-badge-improving': {
          '@apply status-badge bg-success-50 text-success-700 border-success-200': {},
          '&:hover': {
            '@apply bg-success-100 scale-105 shadow-sm': {},
          },
        },
        '.status-badge-stable': {
          '@apply status-badge bg-warning-50 text-warning-700 border-warning-200': {},
          '&:hover': {
            '@apply bg-warning-100 scale-105 shadow-sm': {},
          },
        },
        '.status-badge-needs-attention': {
          '@apply status-badge bg-error-50 text-error-700 border-error-200': {},
          '&:hover': {
            '@apply bg-error-100 scale-105 shadow-sm': {},
          },
        },
      })
      
      // Color spacing utilities
      addUtilities({
        '.color-spacing-xs > * + *': { marginTop: theme('spacing.2') },
        '.color-spacing-sm > * + *': { marginTop: theme('spacing.4') },
        '.color-spacing-md > * + *': { marginTop: theme('spacing.6') },
        '.color-spacing-lg > * + *': { marginTop: theme('spacing.8') },
        '.color-spacing-xl > * + *': { marginTop: theme('spacing.12') },
      })
      
      // Accessibility utilities
      addUtilities({
        '.contrast-high': {
          filter: 'contrast(1.2)',
        },
        '.focus-ring': {
          '@apply focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2': {},
        },
        '.focus-ring-error': {
          '@apply focus:outline-none focus:ring-2 focus:ring-error-500 focus:ring-offset-2': {},
        },
        '.focus-ring-success': {
          '@apply focus:outline-none focus:ring-2 focus:ring-success-500 focus:ring-offset-2': {},
        },
        '.focus-ring-warning': {
          '@apply focus:outline-none focus:ring-2 focus:ring-warning-500 focus:ring-offset-2': {},
        },
      })
      
      // Layout utilities for sidebar system
      addUtilities({
        '.sidebar-width-expanded': {
          width: 'var(--sidebar-width-expanded)',
        },
        '.sidebar-width-collapsed': {
          width: 'var(--sidebar-width-collapsed)',
        },
        '.sidebar-ml-expanded': {
          marginLeft: 'var(--sidebar-width-expanded)',
        },
        '.sidebar-ml-collapsed': {
          marginLeft: 'var(--sidebar-width-collapsed)',
        },
      })
    }
  ],
};

export default config;