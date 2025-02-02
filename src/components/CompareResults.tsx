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
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6 text-center">
        <div className="floating">
          <div className="text-8xl mb-4">
            {planetData[myPlanet].emoji}
          </div>
          <h2 className="text-xl text-white">
            {myPlanet.charAt(0).toUpperCase() + myPlanet.slice(1)}
          </h2>
        </div>
        <h2 className="text-2xl font-bold text-white">{myName}'s View</h2>
        <p className="text-white/80">{planetData[myPlanet].description}</p>
        <p className="text-white/60 italic">"{myDescription}"</p>
      </div>

      <div className="space-y-6 text-center">
        <div className="floating delay-75">
          <div className="text-8xl mb-4">
            {planetData[friendPlanet].emoji}
          </div>
          <h2 className="text-xl text-white">
            {friendPlanet.charAt(0).toUpperCase() + friendPlanet.slice(1)}
          </h2>
        </div>
        <h2 className="text-2xl font-bold text-white">{friendName}'s View</h2>
        <p className="text-white/80">{planetData[friendPlanet].description}</p>
        <p className="text-white/60 italic">"{friendDescription}"</p>
      </div>
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

  const getCombinedFlavor = (planet1: string, planet2: string) => {
    const [first, second] = [planet1, planet2].sort();
    
    // Check if a combination exists for the two planets in both orders
    const combination = combinations[first]?.[second] || combinations[second]?.[first];
    
    // Return the combination description if it exists, otherwise return the default message
    return combination 
        ? `${combination.description} ${combination.tip}` 
        : `Cosmic Connection ${planetData[planet1].emoji}${planetData[planet2].emoji} - A unique bond that transcends celestial boundaries!`;
  };

  const handleDownloadImage = async () => {
    if (!resultsRef.current) return;

    try {
      toast({
        title: "Creating your cosmic snapshot...",
        description: "Please wait while we capture your results ✨",
      });

      const canvas = await html2canvas(resultsRef.current, {
        backgroundColor: "#000",
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true,
      });

      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = `cosmic-friendship-comparison-${state.name}-${state.friendName}.png`;
      link.click();

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
        <div className="text-center text-white mb-4">
          <h2 className="text-xl font-bold">
            {state.friendName} has invited you, {state.name}, to take this friendship quiz!
          </h2>
        </div>

        <div ref={resultsRef} className="space-y-8 p-8 rounded-lg">
          <h1 className="text-3xl font-bold text-center text-white mb-8">
            Your Cosmic Friendship Comparison
          </h1>

          <PlanetComparison 
            myPlanet={state.planetType}
            friendPlanet={state.comparisonResult.planetType}
            myName={state.name}
            friendName={state.comparisonResult.name}
            myDescription={state.description}
            friendDescription={state.comparisonResult.description}
          />

          <div className="space-y-4 text-center mt-8">
            <h2 className="text-2xl font-bold text-white">Your Combined Cosmic Energy</h2>
            <p className="text-white/90 text-lg">
              {getCombinedFlavor(state.planetType, state.comparisonResult.planetType)}
            </p>
          </div>

          <div className="text-center text-white/40 text-sm mt-4">
            https://planety-quiz.vercel.app/ ✨
          </div>
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
          <Button
            onClick={() => navigate("/compare-results")}
            className="bg-white/10 hover:bg-white/20 text-white w-full sm:w-auto"
          >
            Share Result with Friend
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
      </Card>
    </div>
  );
};