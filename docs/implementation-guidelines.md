# Color System Implementation Guidelines

## Maximum Colors Per View Rules

### Primary Interface Areas
- **Dashboard Home**: Maximum 3 primary colors (primary blue, secondary beige, accent green)
- **Status Indicators**: Maximum 2 status colors simultaneously unless showing status overview
- **Interactive Elements**: Maximum 2 primary interaction colors (primary blue + accent green)
- **Text Hierarchy**: Unlimited neutral colors for readability

### Component-Level Limits
- **Cards**: 1 primary color + neutrals + 1 status color maximum
- **Buttons**: 1 primary color + 1 secondary color maximum
- **Navigation**: 1 primary color + neutrals + accent for active states
- **Alerts**: 1 status color + neutrals maximum

## Color Combination Guidelines

### ✅ Recommended Combinations
```css
/* High contrast, color-blind friendly */
Primary Blue + Warning Amber    /* #3b82f6 + #f59e0b */
Success Green + Error Rose      /* #22c55e + #f43f5e (with icons) */
Primary Blue + Success Green    /* #3b82f6 + #22c55e */
Neutral Gray + Any primary      /* #78716c + any brand color */

/* Warm, comfortable combinations */
Secondary Beige + Primary Blue  /* #efe2ad + #3b82f6 */
Success Green + Neutral Warm    /* #22c55e + #78716c */
```

### ❌ Combinations to Avoid
```css
/* Accessibility violations */
Red + Green as only differentiators          /* Colorblind unfriendly */
Blue links on blue backgrounds               /* Poor contrast */
Yellow text on white                         /* WCAG failure */
Orange on red backgrounds                    /* Poor visibility */

/* Visual conflicts */
High saturation warm + cool colors           /* Visual tension */
More than 3 bright colors in one area       /* Overwhelming */
Neon colors in educational context          /* Unprofessional */
```

## Spacing Requirements Between Colored Elements

### Minimum Spacing (8px Grid System)
```css
/* Adjacent colored elements */
--spacing-xs: 0.5rem;  /* 8px - Same-type colored elements */

/* Related colored sections */
--spacing-sm: 1rem;    /* 16px - Status badges, related buttons */

/* Unrelated colored sections */
--spacing-md: 1.5rem;  /* 24px - Different content areas */

/* Major colored blocks */
--spacing-lg: 2rem;    /* 32px - Cards, major sections */

/* Separated colored regions */
--spacing-xl: 3rem;    /* 48px - Dashboard sections */
```

### Implementation Examples
```jsx
{/* Correct spacing between status badges */}
<div className="flex gap-4">  {/* 16px gap for related elements */}
  <span className="status-badge-improving">Improving</span>
  <span className="status-badge-stable">Stable</span>
</div>

{/* Correct spacing between colored cards */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">  {/* 24px gap */}
  <Card className="bg-primary-50">...</Card>
  <Card className="bg-success-50">...</Card>
</div>

{/* Correct spacing between major sections */}
<div className="space-y-12">  {/* 48px vertical spacing */}
  <section className="bg-gradient-primary">...</section>
  <section className="bg-gradient-success">...</section>
</div>
```

## Accessibility Considerations for Color-blind Users

### Pattern-Based Differentiation
```css
/* Use patterns in addition to colors */
.status-improving::before {
  content: '●';  /* Solid circle for success */
  color: currentColor;
  margin-right: 0.5rem;
}

.status-needs-attention::before {
  content: '▲';  /* Triangle for warning */
  color: currentColor;
  margin-right: 0.5rem;
}

.status-stable::before {
  content: '■';  /* Square for stable */
  color: currentColor;
  margin-right: 0.5rem;
}
```

### Icon-Based Communication
```jsx
// Always pair colors with meaningful icons
<div className="status-improving">
  <CheckCircleIcon className="w-4 h-4" />
  <span>Improving</span>
</div>

<div className="status-needs-attention">
  <AlertTriangleIcon className="w-4 h-4" />
  <span>Needs Help</span>
</div>
```

### Text-Based Clarification
```jsx
// Provide text labels alongside colors
<div className="flex items-center gap-2">
  <div className="w-3 h-3 rounded-full bg-success-500" />
  <span className="text-sm font-medium">Success (Green)</span>
</div>
```

## Dark Mode Implementation

### Automatic Color Adaptation
```css
/* Colors automatically adapt using CSS custom properties */
.status-improving {
  background: hsl(var(--status-improving-bg));
  color: hsl(var(--status-improving-text));
  border: 1px solid hsl(var(--status-improving-border));
}

/* Dark mode values are automatically applied via .dark class */
.dark .status-improving {
  /* Uses dark mode variables automatically */
}
```

### Manual Dark Mode Overrides
```jsx
// Use Tailwind's dark: prefix for specific overrides
<div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
  <p className="text-primary-600 dark:text-primary-400">
    Educational content
  </p>
</div>
```

## Performance Considerations

### CSS Custom Properties Usage
```css
/* Efficient: Use CSS custom properties */
.element {
  background-color: hsl(var(--primary-500));
  transition: background-color 0.3s;
}

/* Avoid: Inline styles with computed values */
/* <div style={{backgroundColor: computedColor}}> */
```

### Gradient Optimization
```css
/* Use predefined gradients for consistency and performance */
.gradient-bg {
  background: var(--gradient-primary);
}

/* Avoid creating gradients inline */
```

## Testing Guidelines

### Contrast Ratio Verification
1. Test all text/background combinations with tools like WebAIM Contrast Checker
2. Ensure minimum 4.5:1 ratio for normal text (WCAG AA)
3. Ensure minimum 3:1 ratio for large text (WCAG AA)
4. Aim for 7:1 ratio when possible (WCAG AAA)

### Color-blind Testing
1. Use Stark plugin or similar tools to simulate different types of color vision
2. Test with Deuteranopia (green-blind) - most common
3. Test with Protanopia (red-blind)
4. Test with Tritanopia (blue-blind)
5. Test with Monochromacy (complete color blindness)

### Device Testing
1. Test on various screen types (OLED, LCD, e-ink)
2. Test under different lighting conditions
3. Test at different brightness levels
4. Test with blue light filters enabled

## Code Examples

### Semantic Color Usage
```jsx
// Correct semantic usage
<button className="comfort-button-primary">
  Primary Action
</button>

<div className="status-badge-improving">
  <TrendingUpIcon className="w-4 h-4" />
  Improving
</div>

<p className="text-success-600">
  Great job! Keep up the excellent work.
</p>
```

### Responsive Color Adjustments
```jsx
// Colors that adapt to screen size
<div className="bg-primary-50 md:bg-primary-100 lg:bg-primary-200">
  <h1 className="text-primary-700 md:text-primary-800">
    Responsive heading
  </h1>
</div>
```

### Animation-Safe Colors
```jsx
// Colors that work well with animations
<div className="transition-all duration-300 hover:bg-primary-100 hover:text-primary-700">
  <span className="transition-colors duration-300">
    Animated element
  </span>
</div>
```

This implementation guide ensures consistent, accessible, and performant use of the color system across your educational parent dashboard.