"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Stars } from "lucide-react"

export const WelcomeScreen = () => {
  const [userName, setUserName] = useState("")
  const [friendName, setFriendName] = useState("")
  const navigate = useNavigate()

  const handleStartQuiz = (e: React.FormEvent) => {
    e.preventDefault()
    navigate("/quiz", { 
      state: { 
        name: userName, 
        friendName 
      }
    })
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-purple-900 to-black overflow-hidden relative">
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars absolute inset-0" />
        <div className="twinkling absolute inset-0" />
      </div>
      
      <div className="glass-card w-full max-w-md p-8 space-y-8 relative z-10">
        <div className="space-y-2 text-center">
          <div className="flex justify-center mb-4">
            <Stars className="w-12 h-12 text-primary animate-pulse" />
          </div>
          <h1 className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Friend Planet Quiz
          </h1>
          <p className="text-muted-foreground">
            Discover your cosmic friendship connection
          </p>
        </div>

        <form onSubmit={handleStartQuiz} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="userName" className="text-white">Your Name</Label>
            <Input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="friendName" className="text-white">Friend's Name</Label>
            <Input
              type="text"
              id="friendName"
              value={friendName}
              onChange={(e) => setFriendName(e.target.value)}
              placeholder="Enter your friend's name"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
          </div>
          <Button 
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white group relative overflow-hidden"
          >
            <span className="relative z-10">Start Quiz</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
        </form>

        <p className="text-xs text-center text-white/60">
          No login required • Takes only 2 minutes • Get instant results
        </p>
      </div>
    </div>
  )
}