import { cn } from "@/lib/utils"

export const SkeletonCard = () => (
  <div className="rafiq-card animate-pulse">
    <div className="flex flex-col items-center space-y-4 mb-5">
      <div className="w-16 h-16 bg-slate-600 rounded-full" />
      <div className="h-4 bg-slate-600 rounded w-32" />
      <div className="h-3 bg-slate-600 rounded w-20" />
    </div>
    <div className="grid grid-cols-2 gap-3">
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="h-16 bg-slate-600 rounded-lg" />
      ))}
    </div>
  </div>
)

export const LoadingSpinner = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => (
  <div className={cn(
    "animate-spin rounded-full border-2 border-purple-500/20 border-t-purple-500",
    size === 'sm' && "w-4 h-4",
    size === 'md' && "w-6 h-6",
    size === 'lg' && "w-8 h-8"
  )} />
)

export const ContentLoader = ({ children, isLoading }: { 
  children: React.ReactNode
  isLoading: boolean 
}) => {
  if (isLoading) {
    return (
      <div className="space-y-4">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    )
  }
  
  return <>{children}</>
}

export const ButtonLoader = ({ 
  isLoading, 
  children, 
  ...props 
}: { 
  isLoading: boolean
  children: React.ReactNode
  [key: string]: any
}) => (
  <button 
    {...props}
    disabled={isLoading || props.disabled}
    className={cn(
      "rafiq-button-primary",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      props.className
    )}
  >
    {isLoading ? (
      <div className="flex items-center gap-2">
        <LoadingSpinner size="sm" />
        <span>Loading...</span>
      </div>
    ) : children}
  </button>
)