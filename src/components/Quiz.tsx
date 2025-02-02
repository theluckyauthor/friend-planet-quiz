import { useState, useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { calculatePlanetType } from "@/utils/quizScoring";
import { trackQuizStart, trackQuizCompletion } from "@/utils/analytics";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import React from "react";

const questions = [
  {
    question: "How often do you talk to this friend?",
    options: [
      "Every day 🌞",
      "A few times a week 📅",
      "A few times a month 📆",
      "Occasionally, when something comes up ☄️",
      "Rarely, but we always pick up where we left off 🌌",
    ],
  },
  {
    question: "How do you feel after hanging out or talking to this friend?",
    options: [
      "Energized and deeply connected 💖",
      "Happy and comfortable 😊",
      "It's fun, but we don't go too deep 😆",
      "It depends on the situation 🤷‍♂️",
      "Nostalgic—we don't talk much anymore but have history ⏳",
    ],
  },
  {
    question: "How long have you known this friend?",
    options: [
      "My whole life or close to it 🌞",
      "Many years—solid history 💡",
      "A couple of years, but we bonded quickly ⏳",
      "A recent friendship! ⏩",
      "We had a phase of being close, but now we've drifted 🪐",
    ],
  },
  {
    question: "What's your usual way of interacting?",
    options: [
      "Deep one-on-one convos about everything 🗣️",
      "Hanging out in small groups 🎭",
      "We mostly see each other at events or group settings 🎉",
      "We text/meme each other more than we meet IRL 📱😂",
      "Just occasional check-ins here and there 📞",
    ],
  },
  {
    question: "If something important happens in your life, how likely are you to tell this friend?",
    options: [
      "Immediately—they're one of the first people I tell 🚀",
      "Pretty soon, but not always first 📣",
      "If it comes up naturally in conversation 🤔",
      "Probably wouldn't bring it up unless they asked 🕵️‍♂️",
      "They wouldn't be the first to know, but I'd tell them eventually 📜",
    ],
  },
  {
    question: "What kind of support do you expect from this friend?",
    options: [
      "Emotional support, deep convos, and life advice 💙",
      "Fun and adventure—they make life exciting! 🎢",
      "Someone to chill and share good vibes with 🎶",
      "A reliable presence, even if we don't talk all the time 🌙",
      "We don't really rely on each other much anymore 🚀",
    ],
  },
  {
    question: "If you and this friend planned a trip together, what would it look like?",
    options: [
      "A deep bonding experience—just us exploring together 🏕️",
      "A fun adventure with a small, close-knit group 🏝️",
      "A huge group trip with lots of social energy 🎡",
      "We'd probably just send memes about planning a trip but never actually go 😂",
      "We used to do stuff like this, but not anymore 🛰️",
    ],
  },
  {
    question: "How do you handle conflicts with this friend?",
    options: [
      "We talk it out openly and honestly 💬",
      "We give each other space, then resolve it when ready 🌍",
      "We avoid drama and let things slide 😅",
      "We rarely fight, but when we do, it's intense 🌀",
      "If there's conflict, we just drift apart 🚶‍♂️",
    ],
  },
  {
    question: "What's the most likely way you and this friend will interact in the future?",
    options: [
      "We'll always be in each other's lives, no question 🔥",
      "We'll stay connected, even if it's not super frequent 🌐",
      "We'll probably keep it casual, meeting up when we can 🚗",
      "Not sure—it depends on life's direction 🛤️",
      "We may not talk much, but the memories will always be there 📸",
    ],
  },
  {
    question: "Describe your friendship in a few words!",
    isOpenEnded: true,
  },
];

// Add this helper function at the top of the file
function generateUID(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export const Quiz = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | string)[]>([]);
  const [description, setDescription] = useState("");
  
  // Get data from URL if it exists (for direct comparison)
  const encodedData = searchParams.get('data');
  
  // Check if the quiz is from a comparison route
  const isComparisonQuiz = location.state?.originalResult;
  
  useEffect(() => {
    if (encodedData) {
      try {
        const comparisonData = JSON.parse(atob(encodedData));
        // Set up the quiz state for comparison
        const quizState = {
          name: "", // Will be filled by user
          friendName: comparisonData.n,
          originalResult: {
            n: comparisonData.n,
            fn: comparisonData.fn,
            pt: comparisonData.pt,
            d: comparisonData.d
          }
        };
        // If we don't have a state yet, set it up
        if (!location.state) {
          navigate("", { state: quizState, replace: true });
        }
      } catch (error) {
        console.error("Failed to parse comparison data", error);
        navigate("/");
      }
    }
  }, [encodedData, navigate, location.state]);

  // Start tracking when quiz begins
  useEffect(() => {
    trackQuizStart();
  }, []);
  
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
    
    // Add a slight delay before moving to the next question
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      }
    }, 300); // 300ms delay for visual feedback
  };


  const handleNextQuestion = () => {
    if (answers[currentQuestion] === undefined) {
      toast({
        title: "Please select an answer",
        description: "You need to choose an option before continuing",
        variant: "destructive"
      });
      return;
    }
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleDescriptionSubmit = () => {
    // Ensure we have all required answers
    if (answers.length < questions.length - 1) {
      toast({
        title: "Please answer all questions",
        description: "Some questions are still unanswered",
        variant: "destructive"
      });
      return;
    }

    if (!description.trim()) {
      toast({
        title: "Please add a description",
        description: "Share your thoughts about this friendship",
        variant: "destructive"
      });
      return;
    }

    // Calculate planet type based on multiple choice answers
    const planetType = calculatePlanetType(answers);
    
    // Track quiz completion
    trackQuizCompletion(planetType);
    
    const resultId = generateUID();
    
    // If this is a comparison quiz, navigate to comparison results
    if (location.state?.originalResult) {
      navigate("/compare-results", {
        state: {
          resultId,
          name: location.state.originalResult.fn,
          friendName: location.state.originalResult.n,
          planetType,
          description,
          comparisonResult: {
            name: location.state.originalResult.n,
            friendName: location.state.originalResult.fn,
            planetType: location.state.originalResult.pt,
            description: location.state.originalResult.d
          }
        }
      });
    } else {
      // Regular result navigation
      navigate("/result", {
        state: {
          resultId,
          name: location.state.name,
          friendName: location.state.friendName,
          planetType,
          description
        }
      });
    }
  };

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-purple-900 to-black">
      <Card className="glass-card w-full max-w-2xl p-8 space-y-8 bg-black/30 backdrop-blur-lg border-white/10 overflow-hidden">
        {/* Display invitation message if it's a comparison quiz */}
        {isComparisonQuiz && (
          <div className="text-center text-white mb-4">
            <h2 className="text-xl font-bold">
              {location.state.originalResult.n} has invited you, {location.state.originalResult.fn}, to take this friendship quiz!
            </h2>
          </div>
        )}
        <div className="space-y-4">
          <Progress value={progress} className="w-full" />
          <p className="text-sm text-white/70 text-center">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-center text-white">
            {currentQ.question}
          </h2>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {currentQ.isOpenEnded ? (
              <div className="flex justify-center">
                <Textarea
                  placeholder="Share your thoughts..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="min-h-[200px] w-full max-w-md bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
            ) : (
              <div className="grid gap-4">
                {currentQ.options?.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className={cn(
                      "w-full text-left justify-start h-auto p-4",
                      "text-white border-white/20",
                      "bg-white/10 hover:bg-white/20",
                      "transition-all duration-200",
                      answers[currentQuestion] === index && "bg-white/30 border-white/50",
                      "whitespace-normal",
                      "overflow-hidden"
                    )}
                    onClick={() => handleAnswer(index)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            )}
          </div>

          {currentQ.isOpenEnded && (
            <Button
              onClick={handleDescriptionSubmit}
              className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20"
              disabled={!description.trim()}
            >
              Complete Quiz
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};
