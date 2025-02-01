import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Stars } from "lucide-react";

export const WelcomeScreen = () => {
  const [name, setName] = useState("");
  const [friendName, setFriendName] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleStart = () => {
    if (!name || !friendName) {
      toast({
        title: "Please fill in both names",
        description: "We need to know who's taking the quiz!",
        variant: "destructive",
      });
      return;
    }
    navigate("/quiz", { state: { name, friendName } });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-purple-900 to-black overflow-hidden relative">
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars absolute inset-0" />
        <div className="twinkling absolute inset-0" />
      </div>
      
      <Card className="glass-card w-full max-w-md p-8 space-y-8 relative z-10">
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
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Input
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
          </div>
          <div className="space-y-2">
            <Input
              placeholder="Your friend's name"
              value={friendName}
              onChange={(e) => setFriendName(e.target.value)}
              className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
          </div>
        </div>

        <Button 
          onClick={handleStart}
          className="w-full bg-primary hover:bg-primary/90 text-white group relative overflow-hidden"
        >
          <span className="relative z-10">Start Quiz</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Button>

        <p className="text-xs text-center text-white/60">
          No login required • Takes only 2 minutes • Get instant results
        </p>
      </Card>
    </div>
  );
};