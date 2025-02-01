import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Share2 } from "lucide-react";
import { PlanetType } from "@/utils/analytics";
import React from "react";
import { toast } from "@/components/ui/use-toast";
import { planetData } from "@/utils/planetData";

interface ComparisonProps {
  myPlanet: PlanetType;
  friendPlanet?: PlanetType;
  myName: string;
  friendName: string;
  myDescription: string;
  friendDescription?: string;
}

const PlanetComparison = ({ myPlanet, friendPlanet, myName, friendName, myDescription, friendDescription }: ComparisonProps) => {
  if (!friendPlanet) {
    return null;
  }

  return (
    <div className="space-y-6 text-center">
      <h2 className="text-2xl font-bold text-white">Friendship Dynamic</h2>
      <div className="flex justify-center gap-8">
        <div className="floating">
          <div className="text-6xl mb-2">
            {planetData[myPlanet].emoji}
          </div>
          <p className="text-white mt-2">{myName}</p>
          <p className="text-white/80 italic text-sm mt-2">"{myDescription}"</p>
        </div>
        <div className="floating delay-75">
          <div className="text-6xl mb-2">
            {planetData[friendPlanet].emoji}
          </div>
          <p className="text-white mt-2">{friendName}</p>
          <p className="text-white/80 italic text-sm mt-2">"{friendDescription}"</p>
        </div>
      </div>
    </div>
  );
};

export const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { resultId, name, friendName, planetType, description, comparisonResult } = location.state || {};

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
    try {
      // Create a data object with the essential information
      const shareData = {
        n: name, // original sharer's name
        fn: friendName, // friend's name
        pt: planetType, // planet type
        d: description // description
      };

      // Encode the data as base64 to make it URL-safe
      const encodedData = btoa(JSON.stringify(shareData));
      
      // Create the share URL with the encoded data
      const shareUrl = `${window.location.origin}/quiz?data=${encodedData}`;
      
      // Create share text
      const shareText = `${name} wants to compare your friendship! Take the quiz and see how your views match. 🌟`;
      
      // Try native share first
      if (navigator.share) {
        await navigator.share({
          title: "Friend Planet Quiz",
          text: shareText,
          url: shareUrl
        });
        
        toast({
          title: "Share sent!",
          description: "Waiting for your friend to take the quiz"
        });
      } else {
        // Fallback to clipboard
        await navigator.clipboard.writeText(shareUrl);
        
        toast({
          title: "Link copied!",
          description: "Share it with your friend to compare results",
          action: (
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(shareText + "\n\n" + shareUrl)}`, '_blank')}
            >
              Share on WhatsApp
            </Button>
          ),
        });
      }
    } catch (error) {
      console.error("Sharing failed", error);
      toast({
        title: "Couldn't share",
        description: "Please try copying the link manually",
        variant: "destructive"
      });
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
            <div className="text-8xl mb-4">
              {planetData[planetType as keyof typeof planetData].emoji}
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xl text-white/80">Your Friendship Planet is:</p>
            <h1 className="text-3xl font-bold text-white">
              {planetData[planetType as keyof typeof planetData].title}
            </h1>
          </div>
          <p className="text-muted-foreground">
            {name} & {friendName}
          </p>
        </div>

        <p className="text-center text-white">
          {planetData[planetType as keyof typeof planetData].description}
        </p>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {planetData[planetType as keyof typeof planetData].traits.map((trait, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-white/10 text-white text-sm"
              >
                {trait}
              </span>
            ))}
          </div>
          
          <p className="text-center text-white/80 italic">
            💫 {planetData[planetType as keyof typeof planetData].nurture}
          </p>
        </div>

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
            myDescription={description}
            friendDescription={comparisonResult.description}
          />
        ) : (
          <div className="space-y-4">
            <Button
              onClick={handleShare}
              className="w-full bg-white/10 hover:bg-white/20 text-white"
              variant="outline"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Share & Compare with Friend
            </Button>
            <p className="text-center text-white/60 text-sm">
              Share this quiz with {friendName} to see how they view your friendship! 
              <span role="img" aria-label="sparkles"> ✨</span>
            </p>
          </div>
        )}
      </Card>
    </div>
  );
};