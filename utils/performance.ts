// Performance measurement utilities
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now()
  fn()
  const end = performance.now()
  
  const duration = end - start
  console.log(`⚡ ${name} took ${duration.toFixed(2)}ms`)
  
  // Send to analytics in production
  if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
    (window as any).gtag?.('event', 'timing_complete', {
      name: name,
      value: Math.round(duration),
      event_category: 'Performance'
    })
  }
  
  return duration
}

// Core Web Vitals tracking
export const trackWebVitals = (metric: any) => {
  const value = Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value)
  
  console.log(`📊 ${metric.name}: ${value}${metric.name === 'CLS' ? '' : 'ms'}`)
  
  if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
    (window as any).gtag?.('event', metric.name, {
      event_category: 'Web Vitals',
      value: value,
      event_label: metric.id,
      non_interaction: true,
    })
  }
}

// Debounce utility for search and filtering
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

// Throttle utility for scroll events
export const throttle = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let lastCall = 0
  
  return (...args: Parameters<T>) => {
    const now = Date.now()
    if (now - lastCall >= delay) {
      lastCall = now
      func(...args)
    }
  }
}

// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (
  ref: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.1, ...options }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [ref, options])

  return isIntersecting
}

// Bundle size analyzer
export const logBundleSize = () => {
  if (process.env.NODE_ENV === 'development') {
    const scripts = document.querySelectorAll('script[src]')
    let totalSize = 0
    
    scripts.forEach(async (script) => {
      const src = (script as HTMLScriptElement).src
      if (src.includes('_next')) {
        try {
          const response = await fetch(src)
          const size = parseInt(response.headers.get('content-length') || '0')
          totalSize += size
          console.log(`📦 ${src.split('/').pop()}: ${(size / 1024).toFixed(2)}KB`)
        } catch (error) {
          console.log(`❌ Could not measure: ${src}`)
        }
      }
    })
    
    setTimeout(() => {
      console.log(`📦 Total estimated JS bundle: ${(totalSize / 1024).toFixed(2)}KB`)
    }, 1000)
  }
}

import { useState, useEffect } from 'react'