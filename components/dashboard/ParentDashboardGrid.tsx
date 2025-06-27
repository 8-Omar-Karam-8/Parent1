"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ChildCard } from "./ChildCard"
import { ChildReportModal } from "./ChildReportModal"
import { ChildData } from "./types"
import { cn } from "@/lib/utils"
import { BookOpenIcon, TrendingUpIcon, AlertTriangleIcon, UsersIcon, CalendarIcon, AwardIcon, ArrowRightIcon, EyeIcon, FilterIcon, HeartIcon, CheckCircleIcon, ClockIcon } from "lucide-react"

interface ParentDashboardGridProps {
  childrenData: ChildData[]
  sidebarCollapsed?: boolean
  onViewChange?: (view: "dashboard" | "messages" | "settings") => void
}

export const ParentDashboardGrid: React.FC<ParentDashboardGridProps> = ({
  childrenData,
  sidebarCollapsed = false,
  onViewChange
}) => {
  const [selectedChild, setSelectedChild] = useState<ChildData | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [activeFilter, setActiveFilter] = useState<"all" | "improving" | "stable" | "needs-help">("all")

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleCardClick = (child: ChildData) => {
    setSelectedChild(child)
  }

  // Calculate summary statistics
  const totalChildren = childrenData.length
  const averageCompletion = Math.round(
    childrenData.reduce((sum, child) => sum + child.courseCompletion, 0) / totalChildren
  )
  const childrenImproving = childrenData.filter(child => child.status === "Improving").length
  const childrenStable = childrenData.filter(child => child.status === "Stable").length
  const childrenNeedingAttention = childrenData.filter(child => child.status === "Needs attention").length
  const totalStudyStreak = childrenData.reduce((sum, child) => sum + child.studyStreaks, 0)

  // Filter children based on active filter
  const filteredChildren = childrenData.filter(child => {
    switch (activeFilter) {
      case "improving":
        return child.status === "Improving"
      case "stable":
        return child.status === "Stable"
      case "needs-help":
        return child.status === "Needs attention"
      default:
        return true
    }
  })

  const handleViewChildDetails = (child: ChildData) => {
    setSelectedChild(child)
  }

  const filterTabs = [
    { 
      id: "all", 
      label: "All Children", 
      count: totalChildren, 
      icon: UsersIcon,
      description: "View all your children"
    },
    { 
      id: "improving", 
      label: "Improving", 
      count: childrenImproving, 
      icon: TrendingUpIcon,
      description: "Children showing progress"
    },
    { 
      id: "stable", 
      label: "Stable", 
      count: childrenStable, 
      icon: CheckCircleIcon,
      description: "Maintaining steady progress"
    },
    { 
      id: "needs-help", 
      label: "Needs Help", 
      count: childrenNeedingAttention, 
      icon: AlertTriangleIcon,
      description: "May need additional support"
    },
  ]

  return (
    <div className="w-full min-h-screen rafiq-background">
      {/* Enhanced Header Section - Fixed padding and height issues */}
      <div className="rafiq-background-card border-b border-purple-500/20 shadow-lg shadow-purple-500/10">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="text-center space-y-8">
            {/* Fixed gradient text clipping issue */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <HeartIcon className="w-12 h-12 text-pink-400" />
              <h1 
                className="text-4xl md:text-5xl font-bold leading-[1.1] pb-2"
                style={{
                  background: 'linear-gradient(135deg, hsl(262.1 83.3% 57.8%) 0%, hsl(316 73% 52%) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                  paddingBottom: '0.125rem', // Extra padding to prevent clipping
                }}
              >
                Your Family Learning Journey
              </h1>
            </div>
            
            <p className="text-xl rafiq-text-body max-w-3xl mx-auto leading-relaxed">
              Celebrating progress, supporting growth, and nurturing your children's love for learning every step of the way
            </p>
          </div>

          {/* Enhanced Summary Bar */}
          <div 
            className="mt-10 p-6 rounded-2xl border border-purple-500/30 shadow-lg shadow-purple-500/10"
            style={{ background: 'var(--gradient-primary)' }}
          >
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-white">Family Learning Summary</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm backdrop-blur-sm">
                  <UsersIcon className="w-10 h-10 text-white" />
                </div>
                <p className="text-4xl font-bold text-white mb-2">{totalChildren}</p>
                <p className="text-lg text-white/90 font-semibold">Learning Together</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm backdrop-blur-sm">
                  <TrendingUpIcon className="w-10 h-10 text-white" />
                </div>
                <p className="text-4xl font-bold text-white mb-2">{childrenImproving}</p>
                <p className="text-lg text-white/90 font-semibold">Improving</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-500/30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm backdrop-blur-sm">
                  <CalendarIcon className="w-10 h-10 text-white" />
                </div>
                <p className="text-4xl font-bold text-white mb-2">{childrenStable}</p>
                <p className="text-lg text-white/90 font-semibold">Stable</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-500/30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm backdrop-blur-sm">
                  <AlertTriangleIcon className="w-10 h-10 text-white" />
                </div>
                <p className="text-4xl font-bold text-white mb-2">{childrenNeedingAttention}</p>
                <p className="text-lg text-white/90 font-semibold">Needs Help</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-8 py-10 space-y-10">
        {/* Enhanced Filter Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold rafiq-text-heading mb-6 flex items-center justify-center gap-4">
              <BookOpenIcon className="w-10 h-10 text-blue-400" />
              Your Children's Progress
            </h2>
            
            {/* Enhanced Filter Chips */}
            <div className="rafiq-filter">
              {filterTabs.map((tab) => {
                const Icon = tab.icon
                const isActive = activeFilter === tab.id
                
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFilter(tab.id as any)}
                    className={cn(
                      "rafiq-filter-chip",
                      isActive ? "rafiq-filter-chip-active" : "rafiq-filter-chip-inactive"
                    )}
                    title={tab.description}
                  >
                    <Icon className="w-4 h-4 text-current opacity-75" />
                    {tab.label}
                    {tab.count > 0 && (
                      <span className="ml-2 text-xs rounded-full bg-white/20 text-current px-2 py-0.5 backdrop-blur-sm">
                        {tab.count}
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Enhanced Student Cards Grid */}
          <div 
            className={cn(
              "rafiq-grid",
              sidebarCollapsed && "2xl:grid-cols-5"
            )}
          >
            {filteredChildren.map((child) => (
              <ChildCard 
                key={child.id} 
                child={child} 
                onClick={handleCardClick}
              />
            ))}
          </div>

          {/* Enhanced No results message */}
          {filteredChildren.length === 0 && (
            <div className="text-center py-12">
              <div className="rounded-full bg-slate-600/20 w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/10">
                <FilterIcon className="w-8 h-8 rafiq-text-subtle" />
              </div>
              <h3 className="text-xl font-semibold rafiq-text-heading mb-2">No children found</h3>
              <p className="rafiq-text-body">
                Try adjusting your filter to see more results.
              </p>
            </div>
          )}
        </div>

        {/* Enhanced Achievement Highlights */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold rafiq-text-heading flex items-center justify-center gap-4">
            <AwardIcon className="w-10 h-10 text-green-400" />
            🎉 Celebrating Recent Achievements
          </h2>
          
          <div className="rafiq-card border-green-500/30 bg-green-500/5">
            {childrenData.filter(child => child.studyStreaks >= 14 || child.quizAverage >= 90).length > 0 ? (
              <div className="rafiq-grid">
                {childrenData
                  .filter(child => child.studyStreaks >= 14 || child.quizAverage >= 90)
                  .slice(0, 3)
                  .map((child) => (
                    <button
                      key={child.id} 
                      onClick={() => handleCardClick(child)}
                      className="rafiq-card hover:border-green-500/40 text-left rafiq-focus-ring"
                    >
                      <div className="flex items-center gap-6 mb-6">
                        <Image
                          src={child.avatarSrc}
                          alt={child.name}
                          width={64}
                          height={64}
                          className="w-16 h-16 rounded-full object-cover ring-4 ring-green-500/30 shadow-md"
                        />
                        <div>
                          <p className="text-xl font-bold rafiq-text-heading">{child.name}</p>
                          <p className="text-lg rafiq-text-body">{child.gradeLevel}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        {child.studyStreaks >= 14 && (
                          <div className="flex items-center gap-4">
                            <span className="text-3xl">🔥</span>
                            <span className="text-lg font-semibold rafiq-text-heading">
                              Amazing {child.studyStreaks}-day study streak!
                            </span>
                          </div>
                        )}
                        {child.quizAverage >= 90 && (
                          <div className="flex items-center gap-4">
                            <span className="text-3xl">⭐</span>
                            <span className="text-lg font-semibold rafiq-text-heading">
                              Outstanding {child.quizAverage}% quiz average
                            </span>
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-yellow-400/10">
                  <span className="text-4xl">🌟</span>
                </div>
                <h3 className="text-2xl font-bold rafiq-text-heading mb-4">Great Things Are Coming!</h3>
                <p className="text-xl rafiq-text-body leading-relaxed">
                  Your children are working hard and making progress every day. 
                  New achievements will appear here as they reach their milestones.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <ChildReportModal
        child={selectedChild}
        onClose={() => setSelectedChild(null)}
      />
    </div>
  )
}