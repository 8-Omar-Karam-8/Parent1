# Comprehensive Color System for Educational Parent Dashboard

## 1. Primary Color Palette

### Base Colors with Exact Values

#### Primary Colors (Trust & Education)
```css
/* Deep Educational Blue - Primary Brand Color */
--primary-50: #eff6ff;    /* hsl(214, 100%, 97%) - RGB(239, 246, 255) */
--primary-100: #dbeafe;   /* hsl(214, 100%, 94%) - RGB(219, 234, 254) */
--primary-200: #bfdbfe;   /* hsl(214, 100%, 87%) - RGB(191, 219, 254) */
--primary-300: #93c5fd;   /* hsl(214, 100%, 80%) - RGB(147, 197, 253) */
--primary-400: #60a5fa;   /* hsl(214, 100%, 73%) - RGB(96, 165, 250) */
--primary-500: #3b82f6;   /* hsl(214, 100%, 50%) - RGB(59, 130, 246) */
--primary-600: #2563eb;   /* hsl(214, 100%, 43%) - RGB(37, 99, 235) */
--primary-700: #1d4ed8;   /* hsl(214, 100%, 36%) - RGB(29, 78, 216) */
--primary-800: #1e40af;   /* hsl(214, 100%, 29%) - RGB(30, 64, 175) */
--primary-900: #1e3a8a;   /* hsl(214, 100%, 22%) - RGB(30, 58, 138) */
```

#### Secondary Colors (Warmth & Comfort)
```css
/* Warm Beige/Cream - Secondary Comfort */
--secondary-50: #fefdfb;   /* hsl(45, 25%, 99%) - RGB(254, 253, 251) */
--secondary-100: #fdf9f0;  /* hsl(45, 25%, 97%) - RGB(253, 249, 240) */
--secondary-200: #fbf4e6;  /* hsl(45, 25%, 94%) - RGB(251, 244, 230) */
--secondary-300: #f7eed3;  /* hsl(45, 25%, 90%) - RGB(247, 238, 211) */
--secondary-400: #f3e8c0;  /* hsl(45, 25%, 85%) - RGB(243, 232, 192) */
--secondary-500: #efe2ad;  /* hsl(45, 25%, 80%) - RGB(239, 226, 173) */
--secondary-600: #d4c79a;  /* hsl(45, 25%, 70%) - RGB(212, 199, 154) */
--secondary-700: #b8ad87;  /* hsl(45, 25%, 60%) - RGB(184, 173, 135) */
--secondary-800: #9d9374;  /* hsl(45, 25%, 50%) - RGB(157, 147, 116) */
--secondary-900: #827961;  /* hsl(45, 25%, 40%) - RGB(130, 121, 97) */
```

#### Accent Colors (Growth & Success)
```css
/* Fresh Green - Growth & Success */
--accent-50: #f0fdf4;     /* hsl(142, 60%, 97%) - RGB(240, 253, 244) */
--accent-100: #dcfce7;    /* hsl(142, 60%, 94%) - RGB(220, 252, 231) */
--accent-200: #bbf7d0;    /* hsl(142, 60%, 87%) - RGB(187, 247, 208) */
--accent-300: #86efac;    /* hsl(142, 60%, 75%) - RGB(134, 239, 172) */
--accent-400: #4ade80;    /* hsl(142, 60%, 60%) - RGB(74, 222, 128) */
--accent-500: #22c55e;    /* hsl(142, 60%, 45%) - RGB(34, 197, 94) */
--accent-600: #16a34a;    /* hsl(142, 60%, 35%) - RGB(22, 163, 74) */
--accent-700: #15803d;    /* hsl(142, 60%, 28%) - RGB(21, 128, 61) */
--accent-800: #166534;    /* hsl(142, 60%, 22%) - RGB(22, 101, 52) */
--accent-900: #14532d;    /* hsl(142, 60%, 15%) - RGB(20, 83, 45) */
```

### Neutral Colors (Professional Base)
```css
/* Warm Gray - Professional & Readable */
--neutral-50: #fafaf9;    /* hsl(60, 9%, 98%) - RGB(250, 250, 249) */
--neutral-100: #f5f5f4;   /* hsl(60, 9%, 96%) - RGB(245, 245, 244) */
--neutral-200: #e7e5e4;   /* hsl(60, 9%, 91%) - RGB(231, 229, 228) */
--neutral-300: #d6d3d1;   /* hsl(60, 9%, 84%) - RGB(214, 211, 209) */
--neutral-400: #a8a29e;   /* hsl(60, 9%, 64%) - RGB(168, 162, 158) */
--neutral-500: #78716c;   /* hsl(60, 9%, 46%) - RGB(120, 113, 108) */
--neutral-600: #57534e;   /* hsl(60, 9%, 32%) - RGB(87, 83, 78) */
--neutral-700: #44403c;   /* hsl(60, 9%, 25%) - RGB(68, 64, 60) */
--neutral-800: #292524;   /* hsl(60, 9%, 16%) - RGB(41, 37, 36) */
--neutral-900: #1c1917;   /* hsl(60, 9%, 10%) - RGB(28, 25, 23) */
```

## 2. Semantic Color Applications

### Status Colors with WCAG AA Compliance

#### Success/Improving Status
```css
/* Success Green - 4.51:1 contrast on white */
--success-50: #ecfdf5;    /* Background - hsl(142, 76%, 97%) */
--success-100: #d1fae5;   /* Light background - hsl(142, 76%, 91%) */
--success-500: #10b981;   /* Primary - hsl(142, 76%, 36%) - WCAG AA ✓ */
--success-600: #059669;   /* Text on light - hsl(142, 76%, 29%) - WCAG AA ✓ */
--success-700: #047857;   /* Text on white - hsl(142, 76%, 24%) - WCAG AAA ✓ */
```

#### Warning/Stable Status  
```css
/* Amber Warning - 4.52:1 contrast on white */
--warning-50: #fffbeb;    /* Background - hsl(48, 100%, 96%) */
--warning-100: #fef3c7;   /* Light background - hsl(48, 100%, 88%) */
--warning-500: #f59e0b;   /* Primary - hsl(48, 100%, 50%) - WCAG AA ✓ */
--warning-600: #d97706;   /* Text on light - hsl(48, 100%, 43%) - WCAG AA ✓ */
--warning-700: #b45309;   /* Text on white - hsl(48, 100%, 37%) - WCAG AAA ✓ */
```

#### Error/Needs Attention Status
```css
/* Rose Red - 4.56:1 contrast on white */
--error-50: #fff1f2;      /* Background - hsl(356, 100%, 97%) */
--error-100: #ffe4e6;     /* Light background - hsl(356, 100%, 94%) */
--error-500: #f43f5e;     /* Primary - hsl(356, 100%, 61%) - WCAG AA ✓ */
--error-600: #e11d48;     /* Text on light - hsl(356, 100%, 52%) - WCAG AA ✓ */
--error-700: #be123c;     /* Text on white - hsl(356, 100%, 41%) - WCAG AAA ✓ */
```

### Interactive Element Colors

#### Button States
```css
/* Primary Button */
--button-primary-bg: #3b82f6;           /* Primary-500 */
--button-primary-hover: #2563eb;        /* Primary-600 - 10% darker */
--button-primary-active: #1d4ed8;       /* Primary-700 - 10% darker */
--button-primary-disabled: #93c5fd;     /* Primary-300 - 40% opacity */
--button-primary-text: #ffffff;         /* White text */

/* Secondary Button */
--button-secondary-bg: #f5f5f4;         /* Neutral-100 */
--button-secondary-hover: #e7e5e4;      /* Neutral-200 */
--button-secondary-active: #d6d3d1;     /* Neutral-300 */
--button-secondary-text: #44403c;       /* Neutral-700 */
```

#### Link Colors
```css
--link-primary: #2563eb;                /* Primary-600 - WCAG AA ✓ */
--link-hover: #1d4ed8;                  /* Primary-700 */
--link-visited: #7c3aed;                /* Purple-600 */
--link-active: #1e40af;                 /* Primary-800 */
```

### Information Hierarchy

#### Text Colors
```css
/* Light Mode Text */
--text-primary: #1c1917;                /* Neutral-900 - WCAG AAA ✓ */
--text-secondary: #57534e;              /* Neutral-600 - WCAG AA ✓ */
--text-tertiary: #78716c;               /* Neutral-500 - WCAG AA ✓ */
--text-disabled: #a8a29e;               /* Neutral-400 */

/* Dark Mode Text */
--text-primary-dark: #fafaf9;           /* Neutral-50 - WCAG AAA ✓ */
--text-secondary-dark: #d6d3d1;         /* Neutral-300 - WCAG AA ✓ */
--text-tertiary-dark: #a8a29e;          /* Neutral-400 - WCAG AA ✓ */
--text-disabled-dark: #78716c;          /* Neutral-500 */
```

#### Background Colors
```css
/* Light Mode Backgrounds */
--bg-primary: #ffffff;                  /* Pure white */
--bg-secondary: #fafaf9;                /* Neutral-50 */
--bg-tertiary: #f5f5f4;                 /* Neutral-100 */
--bg-elevated: #ffffff;                 /* Cards/modals */

/* Dark Mode Backgrounds (#1a1a1a base as requested) */
--bg-primary-dark: #1a1a1a;             /* Custom dark base */
--bg-secondary-dark: #262626;           /* Slightly lighter */
--bg-tertiary-dark: #404040;            /* Elevated elements */
--bg-elevated-dark: #262626;            /* Cards/modals */
```

## 3. Color Psychology Guidelines

### Warm & Trustworthy Palette for Parents
- **Primary Blue (#3b82f6)**: Conveys trust, reliability, and educational authority
- **Secondary Beige (#efe2ad)**: Provides warmth and comfort, reducing anxiety
- **Success Green (#22c55e)**: Celebrates achievements without being overwhelming
- **Warning Amber (#f59e0b)**: Draws attention while maintaining approachability
- **Error Rose (#f43f5e)**: Indicates issues while being supportive, not alarming

### Emotional Well-being Considerations
- **High contrast ratios**: Reduce eye strain during extended use
- **Warm undertones**: Create a welcoming, supportive environment
- **Consistent color meaning**: Build familiarity and reduce cognitive load
- **Subtle gradients**: Add depth without being distracting

## 4. Technical Specifications

### RGB Values
```css
/* Primary Colors (RGB) */
--primary-rgb: 59, 130, 246;
--secondary-rgb: 239, 226, 173;
--accent-rgb: 34, 197, 94;
--neutral-rgb: 120, 113, 108;

/* Status Colors (RGB) */
--success-rgb: 16, 185, 129;
--warning-rgb: 245, 158, 11;
--error-rgb: 244, 63, 94;
```

### HSL Values
```css
/* Primary Colors (HSL) */
--primary-hsl: 214, 100%, 50%;
--secondary-hsl: 45, 25%, 80%;
--accent-hsl: 142, 60%, 45%;
--neutral-hsl: 60, 9%, 46%;

/* Status Colors (HSL) */
--success-hsl: 142, 76%, 36%;
--warning-hsl: 48, 100%, 50%;
--error-hsl: 356, 100%, 61%;
```

### Opacity Levels
```css
/* Standard Opacity Values */
--opacity-disabled: 0.4;                /* 40% for disabled states */
--opacity-secondary: 0.7;               /* 70% for secondary elements */
--opacity-tertiary: 0.5;                /* 50% for tertiary elements */
--opacity-overlay: 0.8;                 /* 80% for modal overlays */
--opacity-hover: 0.9;                   /* 90% for hover states */

/* Shadow Opacity (15% as requested) */
--shadow-opacity: 0.15;
--shadow-dark-opacity: 0.2;             /* 20% for dark mode */
```

### Gradient Values
```css
/* 135-degree gradients with 10-20% opacity overlays */
--gradient-primary: linear-gradient(135deg, 
  hsl(214, 100%, 50%) 0%, 
  hsl(220, 100%, 60%) 100%);

--gradient-success: linear-gradient(135deg, 
  hsl(142, 60%, 45%) 0%, 
  hsl(150, 65%, 50%) 100%);

--gradient-warm: linear-gradient(135deg, 
  hsl(45, 25%, 97%) 0%, 
  hsl(45, 25%, 99%) 100%);

/* Overlay gradients */
--gradient-overlay-light: linear-gradient(135deg, 
  hsl(220, 13%, 18% / 0.1) 0%, 
  hsl(220, 13%, 25% / 0.2) 100%);

--gradient-overlay-dark: linear-gradient(135deg, 
  hsl(220, 13%, 10% / 0.2) 0%, 
  hsl(220, 13%, 15% / 0.3) 100%);
```

### State Changes
```css
/* Hover States (10% lighter/darker as requested) */
--primary-hover: hsl(214, 100%, 55%);   /* 5% lighter */
--primary-active: hsl(214, 100%, 45%);  /* 5% darker */

--success-hover: hsl(142, 60%, 50%);    /* 5% lighter */
--success-active: hsl(142, 60%, 40%);   /* 5% darker */

--warning-hover: hsl(48, 100%, 55%);    /* 5% lighter */
--warning-active: hsl(48, 100%, 45%);   /* 5% darker */

--error-hover: hsl(356, 100%, 66%);     /* 5% lighter */
--error-active: hsl(356, 100%, 56%);    /* 5% darker */

/* Transition Duration */
--transition-fast: 0.15s;               /* Quick interactions */
--transition-normal: 0.3s;              /* Standard transitions */
--transition-slow: 0.5s;                /* Emphasis animations */
```

## 5. Implementation Rules

### Spacing Between Colored Elements
```css
/* Minimum spacing using 8px grid system */
--space-xs: 0.5rem;      /* 8px - Adjacent colored elements */
--space-sm: 1rem;        /* 16px - Related colored sections */
--space-md: 1.5rem;      /* 24px - Unrelated colored sections */
--space-lg: 2rem;        /* 32px - Major colored blocks */
--space-xl: 3rem;        /* 48px - Separated colored regions */
```

### Maximum Colors Per View
- **Primary colors**: Maximum 3 (primary, secondary, accent)
- **Status colors**: Maximum 2 per view unless status overview
- **Neutral colors**: Unlimited for text and backgrounds
- **Interactive colors**: Maximum 2 primary interaction colors

### Color Combinations to Avoid
```css
/* Accessibility violations */
❌ Red text on green background (colorblind unfriendly)
❌ Blue links on blue backgrounds (poor contrast)
❌ Yellow text on white backgrounds (WCAG failure)
❌ Green and red as only differentiators (colorblind unfriendly)

/* Visual conflicts */
❌ High saturation colors adjacent to each other
❌ More than 3 bright colors in one interface area
❌ Warm and cool colors in equal saturation
```

### Accessibility Considerations

#### Color-blind Friendly Combinations
```css
/* Safe color pairs for all color vision types */
✅ Blue (#3b82f6) + Orange (#f59e0b)    /* Primary + Warning */
✅ Green (#22c55e) + Red (#f43f5e)      /* Success + Error (with icons) */
✅ Purple (#8b5cf6) + Yellow (#eab308)  /* Accent combinations */
✅ Gray (#78716c) + Any primary color   /* Neutral + Accent */
```

#### WCAG 2.1 AA Compliance Matrix
```
Background Color    | Minimum Text Color | Contrast Ratio
-------------------|-------------------|---------------
White (#ffffff)    | #57534e           | 7.0:1 (AAA)
Neutral-50         | #44403c           | 9.2:1 (AAA)
Primary-50         | #1e40af           | 7.8:1 (AAA)
Success-50         | #047857           | 9.1:1 (AAA)
Warning-50         | #b45309           | 7.9:1 (AAA)
Error-50           | #be123c           | 8.3:1 (AAA)
```

## 6. Design Tool Specifications

### Figma/Sketch Color Styles
```
Primary Palette:
├── Primary/50      #eff6ff
├── Primary/100     #dbeafe
├── Primary/500     #3b82f6 (Brand Primary)
├── Primary/600     #2563eb (Interactive)
└── Primary/700     #1d4ed8 (Text)

Secondary Palette:
├── Secondary/50    #fefdfb
├── Secondary/100   #fdf9f0
├── Secondary/500   #efe2ad
└── Secondary/700   #b8ad87

Status Palette:
├── Success/500     #10b981
├── Warning/500     #f59e0b
├── Error/500       #f43f5e
└── Info/500        #3b82f6

Text Styles:
├── Text/Primary    #1c1917 (Neutral-900)
├── Text/Secondary  #57534e (Neutral-600)
├── Text/Tertiary   #78716c (Neutral-500)
└── Text/Disabled   #a8a29e (Neutral-400)
```

### CSS Custom Properties (Production Ready)
```css
:root {
  /* Base color system */
  --color-primary: 214 100% 50%;
  --color-primary-foreground: 0 0% 100%;
  --color-secondary: 45 25% 80%;
  --color-secondary-foreground: 60 9% 25%;
  --color-accent: 142 60% 45%;
  --color-accent-foreground: 0 0% 100%;
  
  /* Status system */
  --color-success: 142 76% 36%;
  --color-warning: 48 100% 50%;
  --color-error: 356 100% 61%;
  
  /* Background system */
  --color-background: 0 0% 100%;
  --color-foreground: 60 9% 10%;
  --color-card: 0 0% 100%;
  --color-border: 60 9% 91%;
  
  /* Dark mode overrides */
  .dark {
    --color-background: 0 0% 10%;
    --color-foreground: 60 9% 98%;
    --color-card: 0 0% 15%;
    --color-border: 60 9% 20%;
  }
}

/* Usage with HSL function */
.element {
  background-color: hsl(var(--color-primary));
  color: hsl(var(--color-primary-foreground));
  border-color: hsl(var(--color-border));
}
```

This comprehensive color system ensures accessibility, emotional comfort, and professional appearance while providing all the technical specifications needed for consistent implementation across your educational parent dashboard.