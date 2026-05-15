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

  const handleGoToGlossary = () => {
    navigate("/glossary");
  };

  const handleGoToAbout = () => {
    navigate("/about");
  };

  return (
    <div className="cosmic-bg flex flex-col items-center justify-center p-4 overflow-hidden relative">
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="stars absolute inset-0" />
        <div className="twinkling absolute inset-0" />
        <div className="nebula-layer nebula-layer-1" />
        <div className="nebula-layer nebula-layer-2" />
        <div className="nebula-layer nebula-layer-3" />
        <div className="nebula-cloud nebula-cloud-a" />
        <div className="nebula-cloud nebula-cloud-b" />
        <div className="nebula-cloud nebula-cloud-c" />
        <div className="nebula-vignette" />
      </div>
      
      <div className="cosmic-card w-full max-w-md p-8 space-y-8 relative z-10">
        <div className="space-y-2 text-center">
          <div className="flex justify-center mb-4">
            <Stars className="w-12 h-12 text-cyan-300/90 animate-pulse" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-100">
            Friend Planet Quiz
          </h1>
          {comparisonData ? (
            <div className="space-y-2">
              <p className="text-white text-lg">
                <span className="font-semibold text-primary">{comparisonData.n}</span> has invited you, <span className="font-semibold text-primary">{userName}</span>, to take this friendship test!
              </p>
              <p className="text-white/60 text-sm">
                Take the quiz to see how your views of the friendship align.
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
              className="w-full bg-slate-100 text-slate-900 hover:bg-slate-200"
            >
              Take New Quiz with Another Friend
            </Button>
            <Button 
              onClick={handleViewComparison}
              variant="outline"
              className="w-full border border-white/20 bg-white/5 hover:bg-white/10 text-white"
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
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
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
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                disabled={!!comparisonData}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-slate-100 text-slate-900 hover:bg-slate-200"
            >
              {comparisonData ? "Start Comparison Quiz" : "Start Quiz"}
            </Button>
          </form>
        )}

        {/* Buttons for navigation */}
        <div className="mt-4 w-full flex justify-between">
          <Button 
            onClick={handleGoToGlossary} 
            className="w-full rounded mr-2 border border-white/20 bg-white/5 text-white hover:bg-white/10"
          >
            Glossary
          </Button>
          <Button 
            onClick={handleGoToAbout} 
            className="w-full rounded ml-2 border border-white/20 bg-white/5 text-white hover:bg-white/10"
          >
            About
          </Button>
        </div>

        <p className="text-xs text-center text-white/60">
          No login required • Takes only 2 minutes • Get instant results
        </p>
      </div>
    </div>
  )
}