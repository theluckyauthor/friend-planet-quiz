import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const questions = [
  {
    question: "How did you meet your friend?",
    options: [
      "Through mutual friends",
      "At school/work",
      "Online",
      "By chance/randomly",
    ],
  },
  {
    question: "What's your favorite activity together?",
    options: [
      "Deep conversations",
      "Adventure and exploration",
      "Relaxing and chilling",
      "Creative projects",
    ],
  },
  {
    question: "How do you handle disagreements?",
    options: [
      "Talk it out immediately",
      "Need some space first",
      "Compromise quickly",
      "Rarely disagree",
    ],
  },
  // Add more questions here
];

export const Quiz = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  
  const { name, friendName } = location.state || {};
  
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result based on answers
      navigate("/result", { 
        state: { 
          name, 
          friendName, 
          planetType: calculatePlanetType(newAnswers) 
        } 
      });
    }
  };

  const calculatePlanetType = (answers: number[]) => {
    // Simple algorithm - can be made more sophisticated
    const sum = answers.reduce((a, b) => a + b, 0);
    if (sum <= 4) return "earth";
    if (sum <= 8) return "mars";
    if (sum <= 12) return "venus";
    return "jupiter";
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="glass-card w-full max-w-2xl p-8 space-y-8">
        <div className="space-y-4">
          <Progress value={progress} className="w-full" />
          <p className="text-sm text-muted-foreground text-center">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-center">
            {questions[currentQuestion].question}
          </h2>
          
          <div className="grid gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full text-left justify-start h-auto p-4 hover:bg-primary/10"
                onClick={() => handleAnswer(index)}
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};