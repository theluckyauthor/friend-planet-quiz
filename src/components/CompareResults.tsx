import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Share2, Download } from "lucide-react";
import { PlanetType } from "@/utils/analytics";
import { planetData } from "@/utils/planetData";
import html2canvas from "html2canvas";
import { toast } from "@/components/ui/use-toast";
import { combinations } from "@/utils/planetData"; // Import combinations

interface ComparisonResultProps {
  resultId: string;
  name: string;
  friendName: string;
  planetType: PlanetType;
  description: string;
  comparisonResult: {
    name: string;
    friendName: string;
    planetType: PlanetType;
    description: string;
  };
}

const PlanetComparison = ({ myPlanet, friendPlanet, myName, friendName, myDescription, friendDescription }: {
  myPlanet: PlanetType;
  friendPlanet: PlanetType;
  myName: string;
  friendName: string;
  myDescription: string;
  friendDescription: string;
}) => {
  const myPlanetInfo = planetData[myPlanet];
  const friendPlanetInfo = planetData[friendPlanet];

  return (
    <div className="space-y-6 text-center">
      <h2 className="text-2xl font-bold text-white">{myName}'s View</h2>
      <div className="floating">
        <div className="text-8xl mb-4">
          {myPlanetInfo.emoji}
        </div>
        <h2 className="text-xl text-white">
          {myPlanetInfo.title}
        </h2>
      </div>
      <p className="text-white/80 italic">"{myDescription}"</p>
      <p className="text-white/60">{myPlanetInfo.description}</p>
      <h3 className="text-lg text-white">Traits: {myPlanetInfo.traits.join(", ")}</h3>
      <p className="text-white/60">Nurture: {myPlanetInfo.nurture}</p>
      
      <hr className="my-4 border-t border-white/30" />
    </div>
  );
};

// New CombinedResults component for the combined results
const CombinedResults = ({ planet1, planet2 }) => {
  const getCombinedFlavorTip = (planet1: string, planet2: string) => {
    const [first, second] = [planet1, planet2].sort();
    
    // Check if a combination exists for the two planets in both orders
    const combination = combinations[first]?.[second] || combinations[second]?.[first];
        return combination 
        ? ` ${combination.tip}` 
        : `Cosmic Connection ${planetData[planet1].emoji}${planetData[planet2].emoji} - Keep working on your frienship!`;
  };
  const getCombinedFlavor = (planet1: string, planet2: string) => {
    const [first, second] = [planet1, planet2].sort();
    
    // Check if a combination exists for the two planets in both orders
    const combination = combinations[first]?.[second] || combinations[second]?.[first];
    
    // Return the combination description if it exists, otherwise return the default message
    return combination 
        ? `${combination.description}` 
        : `Cosmic Connection ${planetData[planet1].emoji}${planetData[planet2].emoji} - A unique bond that transcends celestial boundaries!`;
  };

  const planet1Info = planetData[planet1];
  const planet2Info = planetData[planet2];

  return (
    <div className="space-y-4 text-center mt-8">
      <h2 className="text-2xl font-bold text-white">Your Combined Cosmic Energy</h2>
      <p className="text-white/90 text-lg">
        {getCombinedFlavor(planet1, planet2)}
      </p>
      <h2 className="text-2xl font-bold text-white">Friendship Tip:</h2>
      <p className="text-white/90 text-lg">
        {getCombinedFlavorTip(planet1, planet2)}
      </p>
    </div>
  );
};

export const CompareResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as ComparisonResultProps;
  const resultsRef = useRef<HTMLDivElement>(null);

  // Redirect if missing required data
  useEffect(() => {
    if (!state || !state.planetType || !state.comparisonResult) {
      navigate("/");
    }
  }, [state, navigate]);

  if (!state) return null; // Early return if state is not available

  const handleDownloadImage = async () => {
    if (!resultsRef.current) return;

    try {
      toast({
        title: "Creating your cosmic snapshot...",
        description: "Please wait while we capture your results ✨",
      });

      const canvas = await html2canvas(resultsRef.current, {
        backgroundColor: "#6b5b9a",
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true,
      });

      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = `cosmic-friendship-comparison.png`;
      document.body.appendChild(link); // Append link to body
      link.click();
      document.body.removeChild(link); // Remove link after clicking

      toast({
        title: "Success!",
        description: "Your cosmic friendship comparison snapshot is ready to share! ✨",
      });
    } catch (error) {
      console.error("Screenshot failed:", error);
      toast({
        title: "Oops!",
        description: "Failed to create image. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-purple-900 to-black">
      <Card className="glass-card w-full max-w-2xl p-8 space-y-8">
        <div ref={resultsRef} className="space-y-8 p-8 rounded-lg">
          <div className="text-center text-white mb-4">
            <h2 className="text-xl font-bold">
              {state.friendName} has invited you, {state.name}, to take this friendship quiz!
            </h2>
          </div>

          <div>
            <PlanetComparison 
              myPlanet={state.planetType}
              friendPlanet={state.comparisonResult.planetType}
              myName={state.name}
              friendName={state.comparisonResult.name}
              myDescription={state.description}
              friendDescription={state.comparisonResult.description}
            />
          </div>
          <div>
            <PlanetComparison 
              myPlanet={state.comparisonResult.planetType}
              friendPlanet={state.planetType}
              myName={state.comparisonResult.name}
              friendName={state.name}
              myDescription={state.comparisonResult.description}
              friendDescription={state.description}
            />
          </div>
          <div>
            <CombinedResults 
              planet1={state.planetType}
              planet2={state.comparisonResult.planetType}
            />
          </div>

          <div className="text-center text-white/40 text-sm mt-4">
            https://planety-quiz.vercel.app/ ✨
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              onClick={() => navigate("/")}
              className="bg-white/10 hover:bg-white/20 text-white w-full sm:w-auto"
            >
              Take New Quiz
            </Button>
            <Button
              onClick={handleDownloadImage}
              className="bg-white/10 hover:bg-white/20 text-white w-full sm:w-auto"
            >
              Download Results
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="text-center mt-4">
            <a
              href="https://forms.gle/f3vUAD96ADCarQjUA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline hover:text-gray-300"
            >
              Give us your feedback!
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
};