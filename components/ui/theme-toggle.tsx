"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-muted border border-border animate-pulse" />
    )
  }

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200",
        "border border-border hover:border-muted-foreground/40 active:scale-95",
        "hover:bg-muted focus:outline-none focus:ring-2 focus:ring-muted-foreground focus:ring-offset-2",
        "shadow-sm hover:shadow-md",
        "bg-muted/50 hover:bg-muted"
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <SunIcon className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
      ) : (
        <MoonIcon className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
      )}
      
      {/* Subtle indicator */}
      <div className={cn(
        "absolute inset-0 rounded-lg border transition-all duration-200",
        isDark 
          ? "border-muted-foreground/20 bg-muted-foreground/5" 
          : "border-muted-foreground/10 bg-muted-foreground/5"
      )} />
    </button>
  )
}