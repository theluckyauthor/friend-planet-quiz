import { useEffect, useState } from "react";
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
  const [showShareUrl, setShowShareUrl] = useState(false);

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
        n: name,
        fn: friendName,
        pt: planetType,
        d: description
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
      } else {
        // Show the URL for manual copying
        setShowShareUrl(true);
      }
    } catch (error) {
      console.error("Sharing failed", error);
      setShowShareUrl(true);
    }
  };

  const handleRetake = () => {
    navigate("/");
  };

  const getCelestialLabel = (planetType: string) => {
    switch (planetType) {
      case 'sun':
        return 'Your Friendship Star';
      case 'moon':
        return 'Your Friendship Satellite';
      case 'comet':
        return 'Your Friendship';
      default:
        return 'Your Friendship Planet';
    }
  };

  const getCombinedFlavor = (planet1: string, planet2: string) => {
    const combinations: Record<string, Record<string, string>> = {
      sun: {
        sun: "A Radiant Bond ☀️☀️ - Two bright stars illuminating each other's lives with warmth and energy!",
        moon: "Cosmic Balance 🌞🌙 - A perfect harmony of energy and reflection, day and night united.",
        venus: "Warm Embrace ☀️💖 - A nurturing connection that helps both friends grow and shine.",
        mercury: "Dynamic Duo ☀️💫 - Quick-witted exchanges that keep the friendship energized and bright.",
        mars: "Power Pair ☀️🔥 - A high-energy bond that motivates and inspires both friends.",
        jupiter: "Expansive Joy ☀️🌟 - A friendship that brings growth, wisdom, and endless possibilities.",
        saturn: "Timeless Bond ☀️⭐ - A stable, enduring connection that stands the test of time.",
        comet: "Cyclical Magic ☀️☄️ - An energizing friendship that reignites with every meeting."
      },
      moon: {
        moon: "Lunar Symphony 🌙🌙 - A deeply intuitive connection where both friends understand each other without words.",
        venus: "Gentle Tides 🌙💖 - A soothing, nurturing bond that ebbs and flows with natural rhythm.",
        mercury: "Night Whispers 🌙💫 - Quiet conversations that bring clarity and understanding.",
        mars: "Moonlit Adventures 🌙🔥 - A dynamic blend of reflection and action.",
        jupiter: "Cosmic Growth 🌙🌟 - An emotionally enriching bond that helps both friends evolve.",
        saturn: "Steady Reflection 🌙⭐ - A reliable connection grounded in emotional wisdom.",
        comet: "Phases of Wonder 🌙☄️ - A friendship that waxes and wanes but never truly fades."
      },
      venus: {
        venus: "Heart Connection 💖💖 - A deeply nurturing bond where both friends feel truly seen and valued.",
        mercury: "Social Harmony 💖💫 - Quick to laugh, quick to care, this friendship brings joy to both.",
        mars: "Passionate Support 💖🔥 - A dynamic friendship that combines care with motivation.",
        jupiter: "Growing Together 💖🌟 - An expansive bond that nurtures personal growth.",
        saturn: "Lasting Love 💖⭐ - A stable, nurturing friendship that stands the test of time.",
        comet: "Sweet Returns 💖☄️ - A tender connection that strengthens with each reunion."
      },
      mercury: {
        mercury: "Swift Spirits 💫💫 - A friendship full of wit, banter, and lightning-fast understanding.",
        mars: "Quick Action 💫🔥 - Energetic exchanges that spark ideas and drive.",
        jupiter: "Bright Ideas 💫🌟 - An intellectually stimulating friendship that expands horizons.",
        saturn: "Thoughtful Bond 💫⭐ - Deep conversations that build lasting understanding.",
        comet: "Sparking Joy 💫☄️ - Brief but brilliant exchanges that light up both lives."
      },
      mars: {
        mars: "Dynamic Force 🔥🔥 - A powerhouse friendship that motivates and energizes both.",
        jupiter: "Bold Adventures 🔥🌟 - An expansive connection that pushes boundaries together.",
        saturn: "Steady Strength 🔥⭐ - A grounding force that channels energy into growth.",
        comet: "Fierce Returns 🔥☄️ - An intense bond that blazes bright with each meeting."
      },
      jupiter: {
        jupiter: "Cosmic Expansion 🌟🌟 - A friendship that constantly grows and brings new opportunities.",
        saturn: "Wise Growth ⭐🌟 - Balancing expansion with stability for lasting wisdom.",
        comet: "Joyful Returns 🌟☄️ - Each reunion brings new adventures and insights."
      },
      saturn: {
        saturn: "Eternal Bond ⭐⭐ - A rock-solid friendship that grows stronger with time.",
        comet: "Patient Love ⭐☄️ - A steady presence that welcomes each return."
      },
      comet: {
        comet: "Celestial Dance ☄️☄️ - A unique rhythm of connection that creates its own orbit."
      }
    };

    // Ensure consistent ordering of planets for lookup
    const [first, second] = [planet1, planet2].sort();
    
    // Try to get the combination, fallback to default if not found
    return combinations[first]?.[second] || 
      `Cosmic Connection ${planetData[planet1].emoji}${planetData[planet2].emoji} - A unique bond that transcends celestial boundaries!`;
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
            <p className="text-xl text-white/80">
              {getCelestialLabel(planetType)} is:
            </p>
            <h1 className="text-3xl font-bold text-white">
              {planetType === 'comet' ? 'Comet: A Cosmic ' : (planetType.charAt(0).toUpperCase() + planetType.slice(1) + ' - ')}
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
          <>
            <PlanetComparison 
              myPlanet={planetType} 
              friendPlanet={comparisonResult.planetType}
              myName={name}
              friendName={comparisonResult.name}
              myDescription={description}
              friendDescription={comparisonResult.description}
            />
            
            <div className="space-y-4 text-center">
              <h2 className="text-2xl font-bold text-white">Your Combined Cosmic Energy</h2>
              <p className="text-white/90 text-lg">
                {getCombinedFlavor(planetType, comparisonResult.planetType)}
              </p>
            </div>
          </>
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
            
            {showShareUrl && (
              <div className="space-y-2">
                <p className="text-center text-white/60 text-sm">
                  Share this link with {friendName} to compare results:
                </p>
                <div 
                  className="p-3 bg-white/5 rounded border border-white/10 text-white/90 text-sm break-all cursor-text"
                  onClick={(e) => e.currentTarget.select()}
                >
                  {`${window.location.origin}/quiz?data=${btoa(JSON.stringify({
                    n: name,
                    fn: friendName,
                    pt: planetType,
                    d: description
                  }))}`}
                </div>
              </div>
            )}
            
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