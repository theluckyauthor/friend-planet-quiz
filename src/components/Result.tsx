import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Share2 } from "lucide-react";
import { PlanetType } from "@/utils/analytics";

const planetData = {
  sun: {
    title: "Sun Friends",
    description: "Your friendship burns bright and warm, providing energy and light to those around you.",
  },
  mercury: {
    title: "Mercury Friends",
    description: "Quick, dynamic, and always in motion - your friendship is marked by swift communication and adaptability.",
  },
  venus: {
    title: "Venus Friends",
    description: "Your friendship is harmonious and beautiful. Like Venus, you share a deep appreciation for beauty, art, and emotional connection.",
  },
  earth: {
    title: "Earth Friends",
    description: "Your friendship is grounded and reliable, just like Earth. You provide each other with stability and support.",
  },
  mars: {
    title: "Mars Friends",
    description: "Your friendship is adventurous and energetic! Like the red planet, you share a passion for exploration.",
  },
  jupiter: {
    title: "Jupiter Friends",
    description: "Your friendship is larger than life! Like Jupiter, you bring growth and expansion to each other's lives.",
  },
  saturn: {
    title: "Saturn Friends",
    description: "Like Saturn's rings, your friendship has many layers and is uniquely beautiful.",
  },
  uranus: {
    title: "Uranus Friends",
    description: "Your friendship is unique and unconventional, following its own path.",
  },
  neptune: {
    title: "Neptune Friends",
    description: "Deep and mysterious, your friendship has spiritual and emotional depths.",
  },
  pluto: {
    title: "Pluto Friends",
    description: "Though distant at times, your friendship maintains a powerful connection.",
  },
  moon: {
    title: "Moon Friends",
    description: "Your friendship waxes and wanes but maintains a constant presence.",
  },
  comet: {
    title: "Comet Friends",
    description: "Your friendship brings excitement when paths cross, leaving lasting memories.",
  },
};

interface ComparisonProps {
  myPlanet: PlanetType;
  friendPlanet?: PlanetType;
}

const PlanetComparison = ({ myPlanet, friendPlanet }: ComparisonProps) => {
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
          <p className="text-white mt-2">You</p>
        </div>
        <div className="floating delay-75">
          <img
            src={`/planets/${friendPlanet}.png`}
            alt={friendPlanet}
            className="w-24 h-24"
          />
          <p className="text-white mt-2">Your Friend</p>
        </div>
      </div>
    </div>
  );
};

export const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, friendName, planetType, description } = location.state || {};

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
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-purple-900 to-black">
      <Card className="glass-card w-full max-w-md p-8 space-y-8">
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
            className="w-full bg-primary hover:bg-primary/90"
          >
            Take Quiz Again
          </Button>
        </div>
      </Card>
    </div>
  );
};