import { cn } from "@/lib/utils"

interface ProgressBarProps {
  progress: number
  className?: string
  variant?: "default" | "success" | "warning" | "danger"
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  className,
  variant = "default"
}) => {
  const getProgressStyle = () => {
    switch (variant) {
      case "success":
        return "rafiq-progress-improving"
      case "warning":
        return "rafiq-progress-stable"
      case "danger":
        return "rafiq-progress-needs-attention"
      default:
        return "rafiq-progress-improving"
    }
  }

  const getTrackStyle = () => {
    return "bg-slate-700/50"
  }

  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-full border border-slate-600/30",
        getTrackStyle(),
        className,
      )}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Progress: ${progress}%`}
    >
      <div
        className={cn(
          "h-full rounded-full transition-all duration-500 ease-out shadow-sm",
          "rafiq-progress-bar",
          getProgressStyle()
        )}
        style={{ 
          width: `${Math.min(100, Math.max(0, progress))}%`
        }}
      />
    </div>
  )
}