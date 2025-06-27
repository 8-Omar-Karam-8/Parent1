"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ChildData } from "./types"
import {
  SendIcon,
  SearchIcon,
  FilterIcon,
  MoreVerticalIcon,
  PinIcon,
  StarIcon,
  ClockIcon,
  CheckCheckIcon,
  PhoneIcon,
  VideoIcon,
  PlusIcon,
  BookOpenIcon,
  TrendingUpIcon,
  AlertTriangleIcon,
  SmileIcon,
  PaperclipIcon,
  MicIcon,
  ImageIcon,
  ArrowLeftIcon,
  MessageSquareIcon,
  CheckIcon,
  ArchiveIcon,
  BellOffIcon,
  ReplyIcon,
  ForwardIcon
} from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  childId: string
  childName: string
  childAvatar: string
  content: string
  timestamp: Date
  isRead: boolean
  isFromParent: boolean
  type: "text" | "progress" | "alert" | "achievement"
  attachments?: string[]
  isPinned?: boolean
  isStarred?: boolean
  messageStatus?: "sent" | "delivered" | "read"
}

interface MessagesProps {
  childrenData: ChildData[]
  onBackToDashboard?: () => void
}

export const MessagesSection: React.FC<MessagesProps> = ({ 
  childrenData, 
  onBackToDashboard
}) => {
  const [selectedChild, setSelectedChild] = useState<string | null>(null)
  const [newMessage, setNewMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [filterType, setFilterType] = useState<"all" | "unread" | "pinned" | "starred">("all")
  const [isTyping, setIsTyping] = useState(false)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [hoveredMessage, setHoveredMessage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Enhanced sample messages with exact styling requirements
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      childId: "1",
      childName: "Emma Rodriguez",
      childAvatar: "https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      content: "Great job on completing your math homework! You've improved so much this week. 🎉",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      isRead: true,
      isFromParent: true,
      type: "achievement",
      isPinned: false,
      isStarred: true,
      messageStatus: "read"
    },
    {
      id: "2",
      childId: "3",
      childName: "Sophia Chen",
      childAvatar: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      content: "I noticed you missed your reading quiz yesterday. Let's schedule some extra practice time together. 📚",
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      isRead: false,
      isFromParent: true,
      type: "alert",
      isPinned: true,
      isStarred: false,
      messageStatus: "delivered"
    },
    {
      id: "3",
      childId: "2",
      childName: "Marcus Thompson",
      childAvatar: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      content: "Your 25-day study streak is amazing! Keep up the excellent work. Maybe we can celebrate this weekend? 🏆",
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
      isRead: true,
      isFromParent: true,
      type: "achievement",
      isPinned: false,
      isStarred: true,
      messageStatus: "read"
    },
    {
      id: "4",
      childId: "1",
      childName: "Emma Rodriguez",
      childAvatar: "https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      content: "Thank you for the encouragement! I'm really enjoying the new math unit on fractions.",
      timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
      isRead: true,
      isFromParent: false,
      type: "text",
      isPinned: false,
      isStarred: false,
      messageStatus: "read"
    },
    {
      id: "5",
      childId: "1",
      childName: "Emma Rodriguez",
      childAvatar: "https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      content: "That's wonderful to hear! Your positive attitude makes such a difference. Keep asking questions! 💪",
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      isRead: true,
      isFromParent: true,
      type: "text",
      isPinned: false,
      isStarred: false,
      messageStatus: "read"
    }
  ])

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Focus input when child is selected
  useEffect(() => {
    if (selectedChild && inputRef.current) {
      inputRef.current.focus()
    }
  }, [selectedChild])

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedChild) return

    const selectedChildData = childrenData.find(child => child.id === selectedChild)
    if (!selectedChildData) return

    setIsLoading(true)
    
    const message: Message = {
      id: Date.now().toString(),
      childId: selectedChild,
      childName: selectedChildData.name,
      childAvatar: selectedChildData.avatarSrc,
      content: newMessage.trim(),
      timestamp: new Date(),
      isRead: true,
      isFromParent: true,
      type: "text",
      messageStatus: "sent"
    }

    // Simulate network delay
    setTimeout(() => {
      setMessages(prev => [...prev, message])
      setNewMessage("")
      setIsLoading(false)
      
      // Update message status after delay
      setTimeout(() => {
        setMessages(prev => prev.map(msg => 
          msg.id === message.id ? { ...msg, messageStatus: "delivered" } : msg
        ))
      }, 1000)
      
      setTimeout(() => {
        setMessages(prev => prev.map(msg => 
          msg.id === message.id ? { ...msg, messageStatus: "read" } : msg
        ))
      }, 2000)
    }, 300)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const getMessageIcon = (type: Message["type"]) => {
    switch (type) {
      case "progress":
        return <TrendingUpIcon className="size-3 text-blue-600" />
      case "alert":
        return <AlertTriangleIcon className="size-3 text-orange-600" />
      case "achievement":
        return <StarIcon className="size-3 text-yellow-600" />
      default:
        return null
    }
  }

  const getMessageStatusIcon = (status?: Message["messageStatus"], isFromParent?: boolean) => {
    if (!isFromParent) return null
    
    switch (status) {
      case "sent":
        return <CheckIcon className="size-3 text-white/70" />
      case "delivered":
        return <CheckCheckIcon className="size-3 text-white/70" />
      case "read":
        return <CheckCheckIcon className="size-3 text-blue-200" />
      default:
        return null
    }
  }

  const filteredMessages = messages.filter(message => {
    const matchesSearch = message.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         message.childName.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesFilter = () => {
      switch (filterType) {
        case "unread":
          return !message.isRead
        case "pinned":
          return message.isPinned
        case "starred":
          return message.isStarred
        default:
          return true
      }
    }

    return matchesSearch && matchesFilter()
  })

  const selectedChildMessages = selectedChild 
    ? filteredMessages.filter(msg => msg.childId === selectedChild)
    : []

  // Get conversation list (latest message per child)
  const conversations = childrenData.map(child => {
    const childMessages = filteredMessages.filter(msg => msg.childId === child.id)
    const lastMessage = childMessages[childMessages.length - 1]
    const unreadCount = childMessages.filter(msg => !msg.isRead && !msg.isFromParent).length
    
    return {
      child,
      lastMessage,
      unreadCount,
      isPinned: lastMessage?.isPinned || false
    }
  }).sort((a, b) => {
    // Sort by pinned first, then by last message time
    if (a.isPinned && !b.isPinned) return -1
    if (!a.isPinned && b.isPinned) return 1
    if (a.lastMessage && b.lastMessage) {
      return b.lastMessage.timestamp.getTime() - a.lastMessage.timestamp.getTime()
    }
    return 0
  })

  const emojis = ["😊", "👍", "❤️", "😄", "🎉", "📚", "⭐", "🏆", "👏", "💪", "🤔", "😮", "🙌", "💯"]

  // Loading skeleton component
  const MessageSkeleton = () => (
    <div className="space-y-2">
      {[1, 2, 3].map(i => (
        <div key={i} className={cn("flex", i % 2 === 0 ? "justify-end" : "justify-start")}>
          <div className="max-w-[70%] h-12 bg-gray-200 rounded-xl animate-pulse" />
        </div>
      ))}
    </div>
  )

  return (
    <div className="w-full h-full bg-background">
      {/* Compact Header */}
      <div className="mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={onBackToDashboard}
            className="p-2 rounded-lg hover:bg-accent transition-colors"
          >
            <ArrowLeftIcon className="size-6 text-muted-foreground" />
          </button>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
              <MessageSquareIcon className="size-8 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-primary">Messages</h1>
              <p className="text-muted-foreground">
                Communicate with your children about their learning progress
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Container with exact specifications */}
      <div 
        className="overflow-hidden"
        style={{ 
          height: 'calc(100vh - 180px)',
          background: '#f7f8fa',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }}
      >
        <div className="flex h-full">
          {/* Children List Sidebar */}
          <div className="w-80 border-r border-gray-200 bg-white flex flex-col">
            {/* Search and Filter */}
            <div className="p-4 border-b border-gray-100">
              <div className="space-y-3">
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search messages..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
                  />
                </div>

                <div className="flex gap-1.5">
                  {["all", "unread", "pinned", "starred"].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setFilterType(filter as any)}
                      className={cn(
                        "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors capitalize",
                        filterType === filter
                          ? "bg-green-500 text-white shadow-sm"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      )}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Children List */}
            <div className="flex-1 overflow-y-auto">
              {conversations.map(({ child, lastMessage, unreadCount, isPinned }) => (
                <button
                  key={child.id}
                  onClick={() => setSelectedChild(child.id)}
                  className={cn(
                    "w-full p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors text-left relative",
                    selectedChild === child.id && "bg-green-50 border-r-4 border-r-green-500"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Image
                        src={child.avatarSrc}
                        alt={child.name}
                        width={48}
                        height={48}
                        className="size-12 rounded-full object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 size-4 rounded-full bg-green-500 border-2 border-white" />
                      {unreadCount > 0 && (
                        <div className="absolute -top-1 -left-1 size-5 rounded-full bg-green-500 flex items-center justify-center">
                          <span className="text-xs font-bold text-white">{unreadCount}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-900 truncate flex items-center gap-1 text-sm">
                          {child.name}
                          {isPinned && <PinIcon className="size-3 text-gray-400" />}
                        </h3>
                        {lastMessage && (
                          <span className="text-xs text-gray-500">
                            {lastMessage.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mb-1">{child.gradeLevel}</p>
                      {lastMessage && (
                        <div className="flex items-center gap-1">
                          {getMessageIcon(lastMessage.type)}
                          <p className="text-xs text-gray-600 truncate">
                            {lastMessage.isFromParent ? "You: " : ""}
                            {lastMessage.content.substring(0, 30)}...
                          </p>
                          {getMessageStatusIcon(lastMessage.messageStatus, lastMessage.isFromParent)}
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col bg-white">
            {selectedChild ? (
              <>
                {/* Chat Header with exact specifications */}
                <div 
                  className="border-b bg-white"
                  style={{ 
                    borderBottomColor: 'rgba(0,0,0,0.08)',
                    borderBottomWidth: '1px',
                    padding: '12px 16px'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {(() => {
                        const child = childrenData.find(c => c.id === selectedChild)
                        return child ? (
                          <>
                            <div className="relative">
                              <Image
                                src={child.avatarSrc}
                                alt={child.name}
                                width={40}
                                height={40}
                                className="rounded-full object-cover"
                                style={{ width: '40px', height: '40px' }}
                              />
                              <div className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full bg-green-500 border-2 border-white" />
                            </div>
                            <div>
                              <h3 
                                className="font-semibold text-gray-900"
                                style={{ fontSize: '16px' }}
                              >
                                {child.name}
                              </h3>
                              <p 
                                className="text-gray-500 flex items-center gap-1"
                                style={{ fontSize: '14px' }}
                              >
                                <div className="size-2 rounded-full bg-green-500" />
                                {child.gradeLevel} • Active now
                              </p>
                            </div>
                          </>
                        ) : null
                      })()}
                    </div>

                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <VideoIcon className="size-5 text-gray-600" />
                      </button>
                      <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <PhoneIcon className="size-5 text-gray-600" />
                      </button>
                      <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <MoreVerticalIcon className="size-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Messages Area with exact styling */}
                <div 
                  className="flex-1 overflow-y-auto bg-gray-50"
                  style={{ 
                    padding: '16px',
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f0f0f0" fill-opacity="0.05"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
                  }}
                >
                  {isLoading && <MessageSkeleton />}
                  
                  <div className="space-y-2">
                    {selectedChildMessages.map((message, index) => (
                      <div 
                        key={message.id} 
                        className={cn("flex", message.isFromParent ? "justify-end" : "justify-start")}
                        style={{ marginBottom: '8px' }}
                      >
                        <div 
                          className={cn(
                            "relative group transition-all duration-200",
                            "shadow-sm"
                          )}
                          style={{
                            maxWidth: '70%',
                            borderRadius: '12px',
                            padding: '10px 14px',
                            backgroundColor: message.isFromParent ? '#25D366' : 'white',
                            opacity: message.isFromParent ? 0.95 : 1,
                            color: message.isFromParent ? 'white' : '#000'
                          }}
                          onMouseEnter={() => setHoveredMessage(message.id)}
                          onMouseLeave={() => setHoveredMessage(null)}
                        >
                          {/* Message Type Icon */}
                          {!message.isFromParent && message.type !== "text" && (
                            <div className="flex items-center gap-1 mb-1">
                              {getMessageIcon(message.type)}
                              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {message.type}
                              </span>
                            </div>
                          )}

                          {/* Message Content */}
                          <p className="text-sm leading-relaxed">{message.content}</p>

                          {/* Message Footer with exact timestamp styling */}
                          <div 
                            className="flex items-center justify-end gap-1 mt-1"
                            style={{ marginTop: '4px' }}
                          >
                            <span 
                              className={message.isFromParent ? "text-white/70" : "text-gray-400"}
                              style={{ fontSize: '12px' }}
                            >
                              {message.timestamp.toLocaleTimeString([], { 
                                hour: '2-digit', 
                                minute: '2-digit' 
                              })}
                            </span>
                            {hoveredMessage === message.id && getMessageStatusIcon(message.messageStatus, message.isFromParent)}
                          </div>

                          {/* Hover Actions with exact specifications */}
                          <div 
                            className={cn(
                              "absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-white rounded-full shadow-lg p-1 flex gap-1 transition-opacity duration-200",
                              hoveredMessage === message.id ? "opacity-100" : "opacity-0"
                            )}
                          >
                            <button 
                              className="p-1 hover:bg-gray-100 rounded-full group/icon"
                              title="Star message"
                            >
                              <StarIcon 
                                className="text-gray-600 group-hover/icon:text-yellow-500 transition-colors" 
                                style={{ width: '16px', height: '16px' }}
                              />
                            </button>
                            <button 
                              className="p-1 hover:bg-gray-100 rounded-full group/icon"
                              title="Reply to message"
                            >
                              <ReplyIcon 
                                className="text-gray-600 group-hover/icon:text-blue-500 transition-colors" 
                                style={{ width: '16px', height: '16px' }}
                              />
                            </button>
                            <button 
                              className="p-1 hover:bg-gray-100 rounded-full group/icon"
                              title="Forward message"
                            >
                              <ForwardIcon 
                                className="text-gray-600 group-hover/icon:text-green-500 transition-colors" 
                                style={{ width: '16px', height: '16px' }}
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Typing Indicator with exact specifications */}
                  {isTyping && (
                    <div className="flex justify-start mb-4">
                      <div 
                        className="bg-white shadow-sm"
                        style={{
                          borderRadius: '12px',
                          padding: '10px 14px'
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
                            <div 
                              className="rounded-full bg-gray-400 animate-bounce" 
                              style={{ 
                                width: '6px', 
                                height: '6px',
                                animationDelay: '0ms' 
                              }} 
                            />
                            <div 
                              className="rounded-full bg-gray-400 animate-bounce" 
                              style={{ 
                                width: '6px', 
                                height: '6px',
                                animationDelay: '150ms' 
                              }} 
                            />
                            <div 
                              className="rounded-full bg-gray-400 animate-bounce" 
                              style={{ 
                                width: '6px', 
                                height: '6px',
                                animationDelay: '300ms' 
                              }} 
                            />
                          </div>
                          <span className="text-xs text-gray-500 ml-1">Teacher is typing...</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Emoji Picker */}
                {showEmojiPicker && (
                  <div className="bg-white border-t border-gray-200 p-3">
                    <div className="flex gap-2 flex-wrap">
                      {emojis.map((emoji, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setNewMessage(prev => prev + emoji)
                            setShowEmojiPicker(false)
                            inputRef.current?.focus()
                          }}
                          className="p-2 hover:bg-gray-100 rounded-lg text-lg transition-colors"
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input Area with exact specifications */}
                <div 
                  className="bg-white border-t border-gray-200 flex items-center gap-3"
                  style={{ 
                    height: '56px',
                    padding: '12px 16px'
                  }}
                >
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                      <SmileIcon 
                        className="text-gray-500" 
                        style={{ width: '20px', height: '20px' }}
                      />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                      <PaperclipIcon 
                        className="text-gray-500" 
                        style={{ width: '20px', height: '20px' }}
                      />
                    </button>
                  </div>
                  
                  <div className="flex-1 relative">
                    <input
                      ref={inputRef}
                      type="text"
                      placeholder="Type a message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="w-full rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      disabled={isLoading}
                    />
                  </div>
                  
                  {newMessage.trim() ? (
                    <button 
                      onClick={handleSendMessage}
                      disabled={isLoading}
                      className="p-2 rounded-full bg-green-500 text-white shadow-lg disabled:opacity-50 transition-all duration-200 ease-in-out hover:bg-green-400 active:bg-green-600"
                      style={{ 
                        backgroundColor: '#25D366',
                        width: '40px',
                        height: '40px'
                      }}
                    >
                      <SendIcon 
                        className="text-white" 
                        style={{ width: '20px', height: '20px' }}
                      />
                    </button>
                  ) : (
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                      <MicIcon 
                        className="text-gray-500" 
                        style={{ width: '20px', height: '20px' }}
                      />
                    </button>
                  )}
                </div>
              </>
            ) : (
              /* No Chat Selected */
              <div className="flex-1 flex items-center justify-center bg-gray-50">
                <div className="text-center space-y-6 max-w-md">
                  <div className="size-24 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                    <MessageSquareIcon className="size-12 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Select a Child to Start Messaging</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Choose a child from the sidebar to start a conversation and track their educational progress through personalized messages.
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <div className="size-2 rounded-full bg-green-500" />
                    <span>Keep your messages private and secure</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}