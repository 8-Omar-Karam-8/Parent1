"use client"

import { useState, useMemo } from 'react'
import { SearchIcon, XIcon } from 'lucide-react'
import { ChildData } from './types'
import { cn } from '@/lib/utils'

interface SearchBarProps {
  childrenData: ChildData[]
  onResults: (results: ChildData[]) => void
  placeholder?: string
}

export const SearchBar: React.FC<SearchBarProps> = ({
  childrenData,
  onResults,
  placeholder = "Search children..."
}) => {
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const searchChildren = useMemo(() => {
    if (!query.trim()) {
      onResults(childrenData)
      return childrenData
    }

    const searchTerm = query.toLowerCase()
    const filtered = childrenData.filter(child =>
      child.name.toLowerCase().includes(searchTerm) ||
      child.gradeLevel.toLowerCase().includes(searchTerm) ||
      child.status.toLowerCase().includes(searchTerm) ||
      child.nextQuizSubject.toLowerCase().includes(searchTerm)
    )
    
    onResults(filtered)
    return filtered
  }, [query, childrenData, onResults])

  const handleClear = () => {
    setQuery('')
    onResults(childrenData)
  }

  return (
    <div className="relative max-w-md mx-auto">
      <div className={cn(
        "relative transition-all duration-200",
        isFocused && "transform scale-[1.02]"
      )}>
        <input
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={cn(
            "w-full pl-10 pr-10 py-3 rounded-xl text-sm transition-all duration-200",
            "rafiq-card border border-purple-500/20",
            "focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20",
            "placeholder:rafiq-text-subtle rafiq-text-body"
          )}
          aria-label="Search children by name, grade, status, or subject"
        />
        
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 rafiq-text-subtle" />
        
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 rafiq-text-subtle hover:rafiq-text-body transition-colors"
            aria-label="Clear search"
          >
            <XIcon className="w-4 h-4" />
          </button>
        )}
      </div>
      
      {/* Search Results Count */}
      {query && (
        <div className="mt-2 text-center">
          <span className="text-sm rafiq-text-subtle">
            {searchChildren.length} of {childrenData.length} children found
          </span>
        </div>
      )}
    </div>
  )
}