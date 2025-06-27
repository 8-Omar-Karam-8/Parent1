"use client"

import { useState } from "react"
import { MenuIcon, BellIcon, XIcon, CheckIcon, ClockIcon, AlertTriangleIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/ui/theme-toggle"

interface Notification {
  id: string
  title: string
  message: string
  time: string
  isRead: boolean
  type: "info" | "warning" | "success"
}

interface TopBarProps {
  onSidebarToggle: () => void
  className?: string
}

export const TopBar: React.FC<TopBarProps> = ({ 
  onSidebarToggle, 
  className 
}) => {
  const [showNotifications, setShowNotifications] = useState(false)
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "Progress Update",
      message: "Emma completed her math homework with 95% accuracy!",
      time: "2 hours ago",
      isRead: false,
      type: "success"
    },
    {
      id: "2", 
      title: "Attention Needed",
      message: "Sophia missed her reading quiz yesterday.",
      time: "4 hours ago",
      isRead: false,
      type: "warning"
    },
    {
      id: "3",
      title: "Weekly Report",
      message: "Your weekly family learning report is ready.",
      time: "1 day ago",
      isRead: true,
      type: "info"
    }
  ])

  const unreadCount = notifications.filter(n => !n.isRead).length

  const handleNotificationsClick = () => {
    setShowNotifications(!showNotifications)
  }

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, isRead: true }
          : notification
      )
    )
  }

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, isRead: true }))
    )
  }

  const getNotificationIcon = (type: Notification["type"]) => {
    switch (type) {
      case "success":
        return <CheckIcon className="w-4 h-4 text-green-500" />
      case "warning":
        return <AlertTriangleIcon className="w-4 h-4 text-orange-500" />
      case "info":
      default:
        return <ClockIcon className="w-4 h-4 text-blue-500" />
    }
  }

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-16",
        "bg-background/80 backdrop-blur-md border-b border-border",
        "flex items-center justify-between px-6",
        "shadow-lg transition-all duration-300",
        className
      )}
    >
      {/* Left Section - Sidebar Button + Logo */}
      <div className="flex items-center gap-4">
        {/* Sidebar Toggle Button */}
        <button
          onClick={onSidebarToggle}
          className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-200",
            "border border-border hover:border-primary/40 active:scale-95",
            "hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
            "shadow-sm hover:shadow-md"
          )}
          aria-label="Toggle sidebar navigation"
          title="Open sidebar"
        >
          <MenuIcon className="w-7 h-7 text-foreground" />
        </button>

        {/* Rafiq Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Rafiq
        </h1>
      </div>

      {/* Right Section - Notifications + Theme Toggle */}
      <div className="flex items-center gap-3">
        {/* Notifications Button & Dropdown */}
        <div className="relative">
          <button
            onClick={handleNotificationsClick}
            className={cn(
              "relative w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200",
              "border border-border hover:border-primary/40 active:scale-95",
              "hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              "shadow-sm hover:shadow-md",
              showNotifications && "bg-accent border-primary/40"
            )}
            aria-label="View notifications"
            title="Notifications"
          >
            <BellIcon className="w-5 h-5 text-foreground" />
            {/* Notification badge */}
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold border border-background">
                {unreadCount > 9 ? "9+" : unreadCount}
              </span>
            )}
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <>
              {/* Backdrop */}
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setShowNotifications(false)}
              />
              
              {/* Dropdown */}
              <div className="absolute top-full right-0 mt-2 w-80 bg-card border border-border rounded-xl shadow-2xl z-50 overflow-hidden">
                {/* Header */}
                <div className="p-4 border-b border-border bg-muted/50">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-foreground">Notifications</h3>
                    <div className="flex items-center gap-2">
                      {unreadCount > 0 && (
                        <button
                          onClick={markAllAsRead}
                          className="text-xs text-primary hover:text-primary/80 font-medium transition-colors"
                        >
                          Mark all read
                        </button>
                      )}
                      <button
                        onClick={() => setShowNotifications(false)}
                        className="w-6 h-6 rounded-md hover:bg-accent flex items-center justify-center transition-colors"
                      >
                        <XIcon className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Notifications List */}
                <div className="max-h-96 overflow-y-auto">
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={cn(
                          "p-4 border-b border-border last:border-b-0 transition-colors cursor-pointer hover:bg-muted/50",
                          !notification.isRead && "bg-blue-50/50 dark:bg-blue-950/20"
                        )}
                        onClick={() => markAsRead(notification.id)}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-0.5">
                            {getNotificationIcon(notification.type)}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <h4 className={cn(
                                "text-sm font-medium truncate",
                                notification.isRead ? "text-muted-foreground" : "text-foreground"
                              )}>
                                {notification.title}
                              </h4>
                              {!notification.isRead && (
                                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                              )}
                            </div>
                            
                            <p className={cn(
                              "text-xs leading-relaxed mb-2",
                              notification.isRead ? "text-muted-foreground" : "text-muted-foreground"
                            )}>
                              {notification.message}
                            </p>
                            
                            <span className="text-xs text-muted-foreground">
                              {notification.time}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-8 text-center">
                      <BellIcon className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">No notifications yet</p>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="p-3 border-t border-border bg-muted/50">
                  <button className="w-full text-center text-sm text-primary hover:text-primary/80 font-medium transition-colors py-1">
                    View all notifications
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        <ThemeToggle />
      </div>
    </header>
  )
}