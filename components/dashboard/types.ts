export interface ChildData {
  id: string
  name: string
  avatarSrc: string
  gradeLevel: string
  courseCompletion: number
  quizAverage: number
  studyStreaks: number
  personalBestStreak?: number
  moodEmoji: string
  moodType: "happy" | "neutral" | "sad"
  status: "Improving" | "Stable" | "Needs attention"
  nextQuizDate: string
  nextQuizSubject: string
  alerts?: ("Missed Quiz" | "Study Drop")[]
  tooltip?: string
  recentActivity?: {
    completedLessons: number
    hoursStudied: number
    badgesEarned: number
  }
  quizTrend?: "up" | "down" | "stable"
  lastMoodUpdate?: string
}

export interface ParentDashboardCarouselProps {
  childrenData: ChildData[]
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
}