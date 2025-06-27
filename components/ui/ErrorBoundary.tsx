"use client"

import { Component, ReactNode, ErrorInfo } from 'react'
import { AlertTriangleIcon, RefreshCwIcon } from 'lucide-react'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Dashboard Error:', error, errorInfo)
    // In production, send to error reporting service
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="rafiq-card text-center py-8 mx-auto max-w-md">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangleIcon className="w-8 h-8 text-red-400" />
          </div>
          <h3 className="text-lg font-semibold rafiq-text-heading mb-2">
            Something went wrong
          </h3>
          <p className="rafiq-text-body mb-4">
            We encountered an error loading this section. This might be a temporary issue.
          </p>
          <div className="space-y-2">
            <button
              onClick={() => this.setState({ hasError: false })}
              className="rafiq-button-primary w-full"
            >
              <RefreshCwIcon className="w-4 h-4 mr-2" />
              Try Again
            </button>
            <button
              onClick={() => window.location.reload()}
              className="rafiq-button-secondary w-full"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Hook for error boundary
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  fallback?: ReactNode
) => {
  return (props: P) => (
    <ErrorBoundary fallback={fallback}>
      <Component {...props} />
    </ErrorBoundary>
  )
}