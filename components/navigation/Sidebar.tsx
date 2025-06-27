"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ChildData } from "@/components/dashboard/types"
import {
  UserIcon,
  SettingsIcon,
  HelpCircleIcon,
  HomeIcon,
  MessageSquareIcon,
  XIcon,
  BookOpenIcon,
  ShieldCheckIcon,
  BotIcon
} from "lucide-react"
import { cn } from "@/lib/utils"

type ViewType = "dashboard" | "messages" | "settings"

interface SidebarProps {
  className?: string
  onAIToggle?: () => void
  onToggle?: (collapsed: boolean) => void
  onViewChange?: (view: ViewType) => void
  currentView?: ViewType
  childrenData?: ChildData[]
  onMobileMenuClose?: () => void
  isOpen?: boolean
  onClose?: () => void
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  className, 
  onAIToggle, 
  onToggle,
  onViewChange,
  currentView = "dashboard",
  childrenData = [],
  onMobileMenuClose,
  isOpen = false,
  onClose
}) => {
  const navigationItems = [
    {
      id: "dashboard",
      label: "Home",
      icon: HomeIcon,
      badge: null,
      onClick: () => {
        onViewChange?.("dashboard")
        onMobileMenuClose?.()
        onClose?.()
      },
      ariaLabel: "Navigate to family dashboard home page"
    },
    {
      id: "ai-assistant",
      label: "AI Assistant",
      icon: BotIcon,
      badge: "New",
      onClick: () => {
        onAIToggle?.()
        onMobileMenuClose?.()
        onClose?.()
      },
      ariaLabel: "Open AI learning assistant chat"
    },
    {
      id: "messages",
      label: "Messages",
      icon: MessageSquareIcon,
      badge: "3",
      onClick: () => {
        onViewChange?.("messages")
        onMobileMenuClose?.()
        onClose?.()
      },
      ariaLabel: "View messages and updates, 3 unread messages"
    },
    {
      id: "settings",
      label: "Settings",
      icon: SettingsIcon,
      badge: null,
      onClick: () => {
        onViewChange?.("settings")
        onMobileMenuClose?.()
        onClose?.()
      },
      ariaLabel: "Open account settings and preferences"
    },
    {
      id: "help",
      label: "Help",
      icon: HelpCircleIcon,
      badge: null,
      onClick: () => {
        onMobileMenuClose?.()
        onClose?.()
      },
      ariaLabel: "Access help and support resources"
    }
  ]

  const handleItemClick = (item: any) => {
    if (item.onClick) {
      item.onClick()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      action()
    }
  }

  return (
    <>
      {/* Overlay backdrop - only visible when sidebar is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      
      {/* Sidebar - Always rendered, slides in from left */}
      <nav
        className={cn(
          "fixed top-0 left-0 h-screen w-80 bg-card border-r border-border shadow-2xl z-50",
          "transform transition-transform duration-500 ease-in-out",
          "rafiq-sidebar flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full",
          className
        )}
        role="navigation"
        aria-label="Main navigation sidebar"
        aria-hidden={!isOpen}
      >
        {/* Header Section */}
        <div className="flex items-center justify-between border-b border-border p-4">
          <div className="flex items-center gap-3">
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'var(--gradient-primary)' }}
              role="img"
              aria-label="Rafiq Education logo"
            >
              <BookOpenIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-sm font-semibold rafiq-text-heading">Rafiq Education</h1>
              <p className="text-xs rafiq-text-subtle">Parent Portal</p>
            </div>
          </div>
          
          {/* Exit Button */}
          <button
            onClick={onClose}
            onKeyDown={(e) => handleKeyDown(e, onClose!)}
            className={cn(
              "w-8 h-8 rounded-md flex items-center justify-center transition-all duration-200",
              "rafiq-focus-ring rafiq-text-subtle hover:rafiq-text-body hover:bg-accent"
            )}
            aria-label="Close sidebar"
            title="Close sidebar"
          >
            <XIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = (item.id === "dashboard" && currentView === "dashboard") || 
                             (item.id === "messages" && currentView === "messages") ||
                             (item.id === "settings" && currentView === "settings")
              
              return (
                <div key={item.id} className="relative group">
                  <button
                    onClick={() => handleItemClick(item)}
                    onKeyDown={(e) => handleKeyDown(e, () => handleItemClick(item))}
                    className={cn(
                      "w-full flex items-center rounded-xl transition-all duration-200 relative p-4 gap-4",
                      "rafiq-focus-ring hover:bg-purple-500/10 active:scale-95"
                    )}
                    style={{
                      background: isActive ? 'var(--gradient-primary)' : 'transparent',
                      color: isActive ? 'var(--text-light)' : 'var(--text-muted)'
                    }}
                    aria-label={item.ariaLabel}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <div 
                        className="absolute top-0 left-0 w-1 h-full rounded-r-full"
                        style={{ background: 'rgba(255, 255, 255, 0.3)' }}
                      />
                    )}
                    
                    <div className="flex items-center justify-center w-6 h-6">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    
                    <div className="flex-1 flex items-center justify-between min-w-0">
                      <span className="font-medium truncate text-base">
                        {item.label}
                      </span>
                      {item.badge && (
                        <Badge 
                          className={cn(
                            "ml-3 text-xs font-medium border-0",
                            item.id === "ai-assistant" 
                              ? "bg-blue-600 text-white"
                              : item.id === "messages"
                              ? "bg-green-600 text-white"
                              : "bg-slate-600 text-white"
                          )}
                          aria-label={item.id === "messages" ? `${item.badge} unread messages` : undefined}
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* User Profile Section */}
        <div className="border-t border-border flex-shrink-0 p-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
                alt="Your profile photo"
                width={40}
                height={40}
                className="w-10 h-10 rounded-xl object-cover border-2 border-purple-500/30 shadow-sm transition-all duration-200 hover:shadow-purple-500/20 hover:shadow-lg"
              />
              {/* Status indicator */}
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-800 shadow-sm" />
              <div className="absolute -top-1 -left-1 w-4 h-4 rounded-md rafiq-card border border-purple-500/30 flex items-center justify-center shadow-sm">
                <ShieldCheckIcon className="w-2 h-2 text-purple-400" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold rafiq-text-heading truncate">Sarah Johnson</h3>
              <p className="text-xs rafiq-text-subtle truncate">Premium Parent</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}