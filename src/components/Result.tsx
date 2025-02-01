import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Share2 } from "lucide-react";
import { PlanetType } from "@/utils/analytics";
import React from "react";
import { toast } from "@/components/ui/use-toast";
import { planetData} from "@/utils/planetData";


interface ComparisonProps {
  myPlanet: PlanetType;
  friendPlanet?: PlanetType;
  myName: string;
  friendName: string;
}

const PlanetComparison = ({ myPlanet, friendPlanet, myName, friendName }: ComparisonProps) => {
  if (!friendPlanet) {
    return null;
  }

  return (
    <div className="space-y-4 text-center">
      <h2 className="text-2xl font-bold text-white">Friendship Dynamic</h2>
      <div className="flex justify-center gap-8">
        <div className="floating">
          <img
            src={`/planets/${myPlanet}.png`}
            alt={myPlanet}
            className="w-24 h-24"
          />
          <p className="text-white mt-2">{myName}</p>
        </div>
        <div className="floating delay-75">
          <img
            src={`/planets/${friendPlanet}.png`}
            alt={friendPlanet}
            className="w-24 h-24"
          />
          <p className="text-white mt-2">{friendName}</p>
        </div>
      </div>
    </div>
  );
};

export const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { resultId, comparisonId, name, friendName, planetType, description } = location.state || {};

  // Get comparison result if it exists
  const comparisonResult = React.useMemo(() => {
    if (!comparisonId) return null;
    const comparedResultId = localStorage.getItem(`quiz_comparison_${comparisonId}`);
    if (!comparedResultId) return null;
    
    const result = localStorage.getItem(`quiz_result_${comparedResultId}`);
    return result ? JSON.parse(result) : null;
  }, [comparisonId]);

  // Redirect if missing required data
  useEffect(() => {
    if (!name || !friendName || !planetType) {
      navigate("/");
    }
  }, [name, friendName, planetType, navigate]);

  // Show loading or return null while redirecting
  if (!planetType || !planetData[planetType as keyof typeof planetData]) {
    return null;
  }

  const handleShare = async () => {
    // Generate a unique comparison ID
    const newComparisonId = crypto.randomUUID();
    
    // Store the current result ID for comparison
    localStorage.setItem(`quiz_comparison_${newComparisonId}`, resultId);
    
    const shareUrl = `${window.location.origin}/quiz?compare=${newComparisonId}`;
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Friend Planet Quiz",
          text: `${name} wants to compare your friendship! Take the quiz and see how your views match.`,
          url: shareUrl
        });
      } else {
        // Fallback to copying to clipboard
        await navigator.clipboard.writeText(shareUrl);
        toast({
          title: "Link copied!",
          description: "Share it with your friend to compare results"
        });
      }
    } catch (error) {
      console.error("Sharing failed", error);
    }
  };

  const handleRetake = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-purple-900 to-black">
      <Card className="glass-card w-full max-w-2xl p-8 space-y-8">
        <div className="space-y-4 text-center">
          <div className="floating inline-block">
            <img
              src={`/planets/${planetType}.png`}
              alt={planetType}
              className="w-32 h-32 mx-auto"
            />
          </div>
          <h1 className="text-3xl font-bold text-white">
            {planetData[planetType as keyof typeof planetData].title}
          </h1>
          <p className="text-muted-foreground">
            {name} & {friendName}
          </p>
        </div>

        <p className="text-center text-white">
          {planetData[planetType as keyof typeof planetData].description}
        </p>

        {description && (
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white text-center">Your Friendship Description</h3>
            <p className="text-center text-white/80 italic">"{description}"</p>
          </div>
        )}

        {comparisonResult ? (
          <PlanetComparison 
            myPlanet={planetType} 
            friendPlanet={comparisonResult.planetType}
            myName={name}
            friendName={comparisonResult.name}
          />
        ) : (
          <div className="space-y-4">
            <Button
              onClick={handleShare}
              className="w-full"
              variant="outline"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Share & Compare with Friend
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};