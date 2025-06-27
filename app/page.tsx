"use client"

import { useState } from "react"
import { ParentDashboardGrid } from "@/components/dashboard/ParentDashboardGrid"
import { MessagesSection } from "@/components/dashboard/MessagesSection"
import { SettingsSection } from "@/components/dashboard/SettingsSection"
import { Sidebar } from "@/components/navigation/Sidebar"
import { TopBar } from "@/components/navigation/TopBar"
import { RafiqAIChatbot } from "@/components/dashboard/RafiqAIChatbot"
import { ChildData } from "@/components/dashboard/types"

const sampleChildrenData: ChildData[] = [
  {
    id: "1",
    name: "Emma Rodriguez",
    avatarSrc: "https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
    gradeLevel: "5th Grade",
    courseCompletion: 85,
    quizAverage: 92,
    studyStreaks: 18,
    personalBestStreak: 25,
    moodEmoji: "😊",
    moodType: "happy",
    status: "Improving",
    nextQuizDate: "Nov 2",
    nextQuizSubject: "Mathematics",
    alerts: [],
    quizTrend: "up",
    lastMoodUpdate: "Updated 2 hours ago",
    recentActivity: {
      completedLessons: 12,
      hoursStudied: 8.5,
      badgesEarned: 3
    }
  },
  {
    id: "2",
    name: "Marcus Thompson",
    avatarSrc: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
    gradeLevel: "7th Grade", 
    courseCompletion: 94,
    quizAverage: 96,
    studyStreaks: 25,
    personalBestStreak: 30,
    moodEmoji: "😎",
    moodType: "happy",
    status: "Stable",
    nextQuizDate: "Nov 5",
    nextQuizSubject: "Science",
    alerts: [],
    quizTrend: "stable",
    lastMoodUpdate: "Updated 1 hour ago",
    recentActivity: {
      completedLessons: 15,
      hoursStudied: 12,
      badgesEarned: 5
    }
  },
  {
    id: "3", 
    name: "Sophia Chen",
    avatarSrc: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
    gradeLevel: "3rd Grade",
    courseCompletion: 48,
    quizAverage: 67,
    studyStreaks: 4,
    personalBestStreak: 12,
    moodEmoji: "😓",
    moodType: "sad",
    status: "Needs attention",
    nextQuizDate: "Nov 1",
    nextQuizSubject: "Reading",
    alerts: ["Study Drop", "Missed Quiz"],
    quizTrend: "down",
    lastMoodUpdate: "Updated 3 hours ago",
    tooltip: "Reading comprehension scores dropped 15% this week. Consider additional practice sessions.",
    recentActivity: {
      completedLessons: 5,
      hoursStudied: 3.5,
      badgesEarned: 1
    }
  },
  {
    id: "4",
    name: "Alexander Kim",
    avatarSrc: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1", 
    gradeLevel: "6th Grade",
    courseCompletion: 78,
    quizAverage: 88,
    studyStreaks: 14,
    personalBestStreak: 20,
    moodEmoji: "😐",
    moodType: "neutral",
    status: "Stable",
    nextQuizDate: "Nov 7",
    nextQuizSubject: "History",
    alerts: [],
    quizTrend: "stable",
    lastMoodUpdate: "Updated 4 hours ago",
    recentActivity: {
      completedLessons: 10,
      hoursStudied: 7,
      badgesEarned: 2
    }
  },
  {
    id: "5",
    name: "Isabella Martinez",
    avatarSrc: "https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
    gradeLevel: "4th Grade", 
    courseCompletion: 91,
    quizAverage: 93,
    studyStreaks: 22,
    personalBestStreak: 28,
    moodEmoji: "😄",
    moodType: "happy",
    status: "Improving",
    nextQuizDate: "Nov 3",
    nextQuizSubject: "Art",
    alerts: [],
    quizTrend: "up",
    lastMoodUpdate: "Updated 1 hour ago",
    recentActivity: {
      completedLessons: 14,
      hoursStudied: 9,
      badgesEarned: 4
    }
  }
]

type ViewType = "dashboard" | "messages" | "settings"

export default function Home() {
  const [isAIOpen, setIsAIOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [currentView, setCurrentView] = useState<ViewType>("dashboard")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleAIToggle = () => {
    setIsAIOpen(!isAIOpen)
  }

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleSidebarClose = () => {
    setIsSidebarOpen(false)
  }

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view)
    // Close mobile menu when navigating
    setIsMobileMenuOpen(false)
  }

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case "messages":
        return (
          <MessagesSection
            childrenData={sampleChildrenData}
            onBackToDashboard={() => setCurrentView("dashboard")}
          />
        )
      case "settings":
        return (
          <SettingsSection
            childrenData={sampleChildrenData}
            onBackToDashboard={() => setCurrentView("dashboard")}
          />
        )
      default:
        return (
          <ParentDashboardGrid
            childrenData={sampleChildrenData}
            sidebarCollapsed={true}
            onViewChange={handleViewChange}
          />
        )
    }
  }

  return (
    <>
      {/* Top Bar */}
      <TopBar onSidebarToggle={handleSidebarToggle} />

      {/* Mobile Menu Button - Visible only on small screens */}
      <button
        onClick={handleMobileMenuToggle}
        className="fixed top-20 left-4 z-50 p-2 bg-white border border-gray-200 rounded-lg shadow-lg md:hidden transition-all duration-300 hover:shadow-xl"
        aria-label="Toggle mobile menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
          <span className={`block h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </div>
      </button>

      {/* Mobile Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar 
        onAIToggle={handleAIToggle} 
        onViewChange={handleViewChange}
        currentView={currentView}
        childrenData={sampleChildrenData}
        onMobileMenuClose={() => setIsMobileMenuOpen(false)}
        isOpen={isSidebarOpen}
        onClose={handleSidebarClose}
        className="h-full"
      />

      {/* Main Content Area - Full width with top padding for the top bar */}
      <div className="min-h-screen bg-background w-full pt-16">
        <div className="min-h-screen">
          <div className="w-full h-full">
            {renderCurrentView()}
          </div>
        </div>
      </div>

      {/* AI Chatbot */}
      <RafiqAIChatbot isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />
    </>
  )
}