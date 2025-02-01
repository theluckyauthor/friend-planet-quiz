import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Share2 } from "lucide-react";

const planetData = {
  earth: {
    title: "Earth Friends",
    description: "Your friendship is grounded and reliable, just like Earth. You provide each other with stability and support, creating a safe space for growth and understanding.",
  },
  mars: {
    title: "Mars Friends",
    description: "Your friendship is adventurous and energetic! Like the red planet, you both share a passion for exploration and taking on new challenges together.",
  },
  venus: {
    title: "Venus Friends",
    description: "Your friendship is harmonious and beautiful. Like Venus, you share a deep appreciation for beauty, art, and emotional connection.",
  },
  jupiter: {
    title: "Jupiter Friends",
    description: "Your friendship is larger than life! Like Jupiter, you bring growth and expansion to each other's lives, creating grand adventures together.",
  },
};

export const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, friendName, planetType } = location.state || {};

  const handleShare = async () => {
    try {
      await navigator.share({
        title: "Friend Planet Quiz Result",
        text: `${name} and ${friendName} are ${planetData[planetType as keyof typeof planetData].title}! Take the quiz to discover your Friend Planet!`,
        url: window.location.origin,
      });
    } catch (error) {
      console.log("Sharing failed", error);
    }
  };

  const handleRetake = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="glass-card w-full max-w-md p-8 space-y-8">
        <div className="space-y-4 text-center">
          <div className="floating inline-block">
            <img
              src={`/planets/${planetType}.png`}
              alt={planetType}
              className="w-32 h-32 mx-auto"
            />
          </div>
          <h1 className="text-3xl font-bold">
            {planetData[planetType as keyof typeof planetData].title}
          </h1>
          <p className="text-muted-foreground">
            {name} & {friendName}
          </p>
        </div>

        <p className="text-center">
          {planetData[planetType as keyof typeof planetData].description}
        </p>

        <div className="space-y-4">
          <Button
            onClick={handleShare}
            className="w-full"
            variant="outline"
          >
            <Share2 className="mr-2 h-4 w-4" />
            Share Result
          </Button>
          <Button
            onClick={handleRetake}
            className="w-full"
          >
            Take Quiz Again
          </Button>
        </div>
      </Card>
    </div>
  );
};