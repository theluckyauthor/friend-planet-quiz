import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

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
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="glass-card w-full max-w-md p-8 space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter">Friend Planet Quiz</h1>
          <p className="text-muted-foreground">Discover your cosmic friendship connection</p>
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Input
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Input
              placeholder="Your friend's name"
              value={friendName}
              onChange={(e) => setFriendName(e.target.value)}
              className="w-full"
            />
          </div>
        </div>

        <Button 
          onClick={handleStart}
          className="w-full bg-primary hover:bg-primary/90 text-white"
        >
          Start Quiz
        </Button>
      </Card>
    </div>
  );
};