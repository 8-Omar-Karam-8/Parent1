"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ProgressBar } from "./ProgressBar"
import { getSubjectInfo, getStatusVariant } from "./utils"
import { ChildData } from "./types"
import {
  TrendingUpIcon,
  TrendingDownIcon,
  MinusIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CalendarIcon,
  FlameIcon,
  BarChart3Icon,
  BookOpenIcon,
  ClockIcon,
  EyeIcon,
  HelpCircleIcon,
  SparklesIcon
} from "lucide-react"
import { cn } from "@/lib/utils"

interface ChildCardProps {
  child: ChildData
  onClick: (child: ChildData) => void
  isLoading?: boolean
  hasError?: boolean
}

export const ChildCard: React.FC<ChildCardProps> = ({ 
  child, 
  onClick, 
  isLoading = false,
  hasError = false
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  
  const subjectInfo = getSubjectInfo(child.nextQuizSubject)
  
  // Enhanced status styles with Rafiq theme
  const getStatusStyle = () => {
    switch (child.status) {
      case "Improving":
        return "rafiq-pill-improving"
      case "Stable":
        return "rafiq-pill-stable"
      case "Needs attention":
        return "rafiq-pill-needs-attention"
      default:
        return "rafiq-pill-stable"
    }
  }

  // Enhanced trend indicator with animations
  const getTrendIcon = () => {
    switch (child.quizTrend) {
      case "up":
        return <TrendingUpIcon className="w-4 h-4 text-green-400 rafiq-animate-pulse" />
      case "down":
        return <TrendingDownIcon className="w-4 h-4 text-red-400 rafiq-animate-pulse" />
      default:
        return <MinusIcon className="w-4 h-4 rafiq-text-subtle" />
    }
  }

  const handleCardClick = () => {
    if (!isLoading && !hasError) {
      onClick(child)
    }
  }

  const statusStyle = getStatusStyle()

  // Enhanced loading state
  if (isLoading) {
    return (
      <div className="w-full max-w-[320px] md:max-w-[400px] mx-auto">
        <div className="rafiq-card rafiq-animate-pulse">
          <div className="flex flex-col items-center space-y-4 mb-5">
            <div className="w-16 h-16 bg-slate-600 rounded-full"></div>
            <div className="h-5 bg-slate-600 rounded w-32"></div>
            <div className="h-4 bg-slate-600 rounded w-20"></div>
          </div>
          <div className="rafiq-grid-compact">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-16 bg-slate-600 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Enhanced error state
  if (hasError) {
    return (
      <div className="w-full max-w-[320px] md:max-w-[400px] mx-auto">
        <div className="rafiq-card border-red-500/30 bg-red-500/10">
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-400 text-xl">⚠️</span>
            </div>
            <h3 className="text-lg font-semibold rafiq-text-heading mb-2">Unable to Load</h3>
            <p className="text-sm rafiq-text-body mb-4">
              We couldn't load this student's data. Please try again.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="rafiq-button-primary"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="group relative w-full max-w-[320px] md:max-w-[400px] mx-auto cursor-pointer focus:outline-none rafiq-animate-slide-up"
      onClick={handleCardClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleCardClick()
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${child.name}, ${child.gradeLevel}, ${child.status}`}
    >
      <div className="rafiq-card rafiq-card-compact group-hover:border-blue-500/30 group-focus:border-blue-500/30">
        {/* Alert indicators */}
        {child.alerts && child.alerts.length > 0 && (
          <div className="absolute top-3 right-3 z-10 flex flex-col gap-1">
            {child.alerts.map((alert, index) => (
              <div
                key={index}
                className="px-2 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-400 border border-red-500/30 rafiq-animate-pulse"
              >
                {alert === "Missed Quiz" ? "Missed" : "Drop"}
              </div>
            ))}
          </div>
        )}

        {/* Top Section */}
        <div className="text-center mb-4">
          {/* Profile image with glow effect */}
          <div className="relative inline-block mb-3">
            <div className={cn(
              "absolute inset-0 rounded-full transition-all duration-300",
              isHovered ? "shadow-lg shadow-purple-500/20 blur-sm scale-110" : ""
            )} />
            <Image
              src={child.avatarSrc}
              alt={`${child.name}'s profile photo`}
              width={64}
              height={64}
              className="relative w-16 h-16 rounded-full object-cover ring-2 ring-purple-500/30 shadow-lg transition-all duration-300 group-hover:scale-110"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-slate-800 shadow-lg rafiq-animate-pulse" />
            {/* Achievement sparkle effect */}
            {child.status === "Improving" && (
              <SparklesIcon className="absolute -top-2 -right-2 w-5 h-5 text-yellow-400 rafiq-animate-float" />
            )}
          </div>
          
          {/* Student name */}
          <h3 className="text-lg font-semibold mb-1 rafiq-text-heading">
            {child.name}
          </h3>
          
          {/* Grade level */}
          <p className="text-base rafiq-text-body mb-3 font-medium">
            {child.gradeLevel}
          </p>

          {/* Status indicator */}
          <div 
            className={cn(
              "inline-flex items-center justify-center max-w-[120px]",
              "rafiq-focus-ring cursor-default",
              statusStyle
            )}
            tabIndex={0}
            role="status"
            aria-label={`Student status: ${child.status}`}
          >
            {child.status === "Needs attention" ? "Needs Help" : child.status}
          </div>
        </div>

        {/* Main metrics grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {/* Quiz Average */}
          <div className="rafiq-metric p-3 border-blue-500/20 hover:border-blue-500/40">
            <div className="flex items-center gap-2 mb-2">
              <BookOpenIcon className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">Quiz Avg</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="rafiq-metric-value text-lg">{child.quizAverage}%</span>
              {getTrendIcon()}
            </div>
            <p className="text-xs rafiq-text-subtle">Last 30 days</p>
          </div>

          {/* Course Progress */}
          <div className="rafiq-metric p-3 border-green-500/20 hover:border-green-500/40">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3Icon className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-300 font-medium">Progress</span>
            </div>
            <div className="mb-2">
              <span className="rafiq-metric-value text-lg">{child.courseCompletion}%</span>
            </div>
            <div className="rafiq-progress mb-1">
              <div 
                className={cn(
                  "rafiq-progress-bar",
                  child.courseCompletion >= 80 ? "rafiq-progress-improving" : 
                  child.courseCompletion >= 60 ? "rafiq-progress-stable" : 
                  "rafiq-progress-needs-attention"
                )}
                style={{ width: `${Math.min(100, Math.max(0, child.courseCompletion))}%` }}
              />
            </div>
            <p className="text-xs rafiq-text-subtle">Unit completion</p>
          </div>

          {/* Study Streak */}
          <div className="rafiq-metric p-3 border-orange-500/20 hover:border-orange-500/40">
            <div className="flex items-center gap-2 mb-2">
              <FlameIcon className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-300 font-medium">Streak</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="rafiq-metric-value text-lg">{child.studyStreaks}</span>
              <span className="text-sm rafiq-text-muted">days</span>
            </div>
            <p className="text-xs rafiq-text-subtle">Consecutive</p>
          </div>

          {/* Next Quiz */}
          <div className="rafiq-metric p-3 border-purple-500/20 hover:border-purple-500/40">
            <div className="flex items-center gap-2 mb-2">
              <CalendarIcon className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300 font-medium">Next Quiz</span>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-bold rafiq-text-heading truncate">{child.nextQuizSubject}</p>
              <p className="text-sm rafiq-text-muted">{child.nextQuizDate}</p>
            </div>
          </div>
        </div>

        {/* Mobile expansion */}
        <div className="md:hidden">
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsExpanded(!isExpanded)
            }}
            className="w-full flex items-center justify-center gap-2 py-2 text-sm text-blue-400 hover:text-blue-300 transition-all duration-200 hover:bg-blue-500/10 rounded-lg"
            aria-expanded={isExpanded}
            aria-controls="expanded-content"
          >
            <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
            {isExpanded ? (
              <ChevronUpIcon className="w-4 h-4 transition-transform duration-200" />
            ) : (
              <ChevronDownIcon className="w-4 h-4 transition-transform duration-200" />
            )}
          </button>
          
          {isExpanded && (
            <div 
              id="expanded-content"
              className="mt-4 space-y-3 rafiq-animate-slide-up"
            >
              {child.recentActivity && (
                <div className="rafiq-card p-3">
                  <h5 className="text-sm font-medium rafiq-text-heading mb-2">Recent Activity</h5>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 bg-slate-700/50 rounded-lg shadow-sm transition-transform hover:scale-105">
                      <p className="text-base font-bold text-blue-400">{child.recentActivity.completedLessons}</p>
                      <p className="text-xs rafiq-text-subtle">Lessons</p>
                    </div>
                    <div className="p-2 bg-slate-700/50 rounded-lg shadow-sm transition-transform hover:scale-105">
                      <p className="text-base font-bold text-green-400">{child.recentActivity.hoursStudied}h</p>
                      <p className="text-xs rafiq-text-subtle">Studied</p>
                    </div>
                    <div className="p-2 bg-slate-700/50 rounded-lg shadow-sm transition-transform hover:scale-105">
                      <p className="text-base font-bold text-purple-400">{child.recentActivity.badgesEarned}</p>
                      <p className="text-xs rafiq-text-subtle">Badges</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Hover indicator */}
        <div className={cn(
          "absolute bottom-3 right-3 transition-all duration-200 pointer-events-none",
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}>
          <div 
            className="text-white px-3 py-2 rounded-full text-xs font-medium shadow-lg flex items-center gap-2"
            style={{ background: 'var(--gradient-primary)' }}
          >
            <EyeIcon className="w-3 h-3" />
            View Details
          </div>
        </div>
      </div>
    </div>
  )
}