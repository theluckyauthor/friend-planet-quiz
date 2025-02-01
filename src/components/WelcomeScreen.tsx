"use client"

import { useState, useEffect } from "react"
import { useNavigate, useLocation, useSearchParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Stars } from "lucide-react"

export const WelcomeScreen = () => {
  const [userName, setUserName] = useState("")
  const [friendName, setFriendName] = useState("")
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const location = useLocation()
  
  // Get comparison data from URL if it exists
  const encodedData = searchParams.get('data')
  let comparisonData = null
  try {
    if (encodedData) {
      comparisonData = JSON.parse(atob(encodedData))
      // Pre-fill friend's name automatically when data exists
      useEffect(() => {
        setFriendName(comparisonData.n)
      }, [])
    }
  } catch (error) {
    console.error("Failed to parse comparison data", error)
  }

  const handleStartQuiz = (e: React.FormEvent) => {
    e.preventDefault()
    
    // If this is a comparison quiz, include the original data
    const quizState = comparisonData ? {
      name: userName,
      friendName: comparisonData.n,
      originalResult: {
        n: comparisonData.n,
        fn: comparisonData.fn,
        pt: comparisonData.pt,
        d: comparisonData.d
      }
    } : {
      name: userName,
      friendName
    }

    navigate("/quiz", { state: quizState })
  }

  const handleNewQuiz = () => {
    // Clear form and start fresh
    setUserName("")
    setFriendName("")
    navigate("/")
  }

  const handleViewComparison = () => {
    // Navigate to the comparison result using the stored data
    if (location.state?.comparisonResult) {
      navigate("/result", { state: location.state.comparisonResult })
    }
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
          {comparisonData ? (
            <div className="space-y-2">
              <p className="text-white text-lg">
                <span className="font-semibold text-primary">{comparisonData.n}</span> has invited you, <span className="font-semibold text-primary">{userName}</span>, to take this friendship test!
              </p>
              <p className="text-white/60 text-sm">
                Take the quiz to see how your views of the friendship align ✨
              </p>
            </div>
          ) : (
            <p className="text-muted-foreground">
              Discover your cosmic friendship connection
            </p>
          )}
        </div>

        {comparisonData ? (
          <div className="space-y-4">
            <Button 
              onClick={handleNewQuiz}
              className="w-full bg-primary hover:bg-primary/90 text-white group relative overflow-hidden"
            >
              <span className="relative z-10">
                Take New Quiz with Another Friend
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button 
              onClick={handleViewComparison}
              variant="outline"
              className="w-full bg-white/10 hover:bg-white/20 text-white"
            >
              View Friendship Comparison
            </Button>
          </div>
        ) : (
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
                disabled={!!comparisonData}
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white group relative overflow-hidden"
            >
              <span className="relative z-10">
                {comparisonData ? "Start Comparison Quiz" : "Start Quiz"}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </form>
        )}

        <p className="text-xs text-center text-white/60">
          No login required • Takes only 2 minutes • Get instant results
        </p>
      </div>
    </div>
  )
}