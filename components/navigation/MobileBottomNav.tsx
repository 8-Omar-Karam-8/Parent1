"use client"

import { HomeIcon, MessageSquareIcon, SettingsIcon, BotIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MobileBottomNavProps {
  currentView: "dashboard" | "messages" | "settings"
  onViewChange: (view: "dashboard" | "messages" | "settings") => void
  onAIToggle: () => void
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentView,
  onViewChange,
  onAIToggle
}) => {
  const navigationItems = [
    {
      id: "dashboard",
      label: "Home",
      icon: HomeIcon,
      onClick: () => onViewChange("dashboard"),
      isActive: currentView === "dashboard"
    },
    {
      id: "messages",
      label: "Messages",
      icon: MessageSquareIcon,
      onClick: () => onViewChange("messages"),
      isActive: currentView === "messages",
      badge: 3
    },
    {
      id: "ai-assistant",
      label: "AI Helper",
      icon: BotIcon,
      onClick: onAIToggle,
      isActive: false
    },
    {
      id: "settings",
      label: "Settings",
      icon: SettingsIcon,
      onClick: () => onViewChange("settings"),
      isActive: currentView === "settings"
    }
  ]

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{ background: 'var(--background-card)' }}
      role="navigation"
      aria-label="Mobile bottom navigation"
    >
      <div className="border-t border-purple-500/20 shadow-lg shadow-purple-500/10">
        <div className="grid grid-cols-4 h-16">
          {navigationItems.map((item) => {
            const Icon = item.icon
            
            return (
              <button
                key={item.id}
                onClick={item.onClick}
                className={cn(
                  "flex flex-col items-center justify-center p-2 transition-all duration-200",
                  "hover:bg-purple-500/10 active:scale-95",
                  "focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-inset",
                  item.isActive 
                    ? "text-white" 
                    : "rafiq-text-muted hover:rafiq-text-body"
                )}
                style={{
                  background: item.isActive ? 'var(--gradient-primary)' : 'transparent'
                }}
                aria-label={`Navigate to ${item.label}`}
                aria-current={item.isActive ? "page" : undefined}
              >
                <div className="relative">
                  <Icon className="w-5 h-5 mb-1" />
                  {item.badge && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className="text-xs font-medium truncate">
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}