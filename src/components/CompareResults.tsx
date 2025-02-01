import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Share2, Download } from "lucide-react";
import { PlanetType } from "@/utils/analytics";
import { planetData } from "@/utils/planetData";
import html2canvas from "html2canvas";
import { toast } from "@/components/ui/use-toast";

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
            {planetData[myPlanet].title}
          </h2>
        </div>
        <h2 className="text-2xl font-bold text-white">{myName}'s View</h2>
        <p className="text-white/80">{planetData[myPlanet].title}</p>
        <p className="text-white/60 italic">"{myDescription}"</p>
      </div>

      <div className="space-y-6 text-center">
        <div className="floating delay-75">
          <div className="text-8xl mb-4">
            {planetData[friendPlanet].emoji}
          </div>
          <h2 className="text-xl text-white">
            {planetData[friendPlanet].title}
          </h2>
        </div>
        <h2 className="text-2xl font-bold text-white">{friendName}'s View</h2>
        <p className="text-white/80">{planetData[friendPlanet].title}</p>
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
    if (!state?.planetType || !state?.comparisonResult) {
      navigate("/");
    }
  }, [state, navigate]);

  if (!state?.planetType) return null;

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

    const [first, second] = [planet1, planet2].sort();
    return combinations[first]?.[second] || 
      `Cosmic Connection ${planetData[planet1].emoji}${planetData[planet2].emoji} - A unique bond that transcends celestial boundaries!`;
  };

  const handleDownloadImage = async () => {
    if (!resultsRef.current) return;

    try {
      // Show loading toast
      toast({
        title: "Creating your cosmic snapshot...",
        description: "Please wait while we capture your results ✨",
      });

      const canvas = await html2canvas(resultsRef.current, {
        backgroundColor: null,
        scale: 2, // Higher quality
        logging: false,
        useCORS: true,
        allowTaint: true,
      });

      // Create download link
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = `cosmic-friendship-${state.name}-${state.friendName}.png`;
      link.click();

      toast({
        title: "Success!",
        description: "Your cosmic friendship snapshot is ready to share! ✨",
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
      <Card className="glass-card w-full max-w-4xl p-8 space-y-8">
        {/* Display invitation message if it's a comparison quiz */}
        {location.state?.originalResult && (
          <div className="text-center text-white mb-4">
            <h2 className="text-xl font-bold">
              {location.state.friendName} has invited you, {location.state.originalResult.n}, to take this friendship quiz!
            </h2>
          </div>
        )}

        {/* Wrap only the content we want to capture in resultsRef */}
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

          {/* Add watermark */}
          <div className="text-center text-white/40 text-sm mt-4">
            friendplanet.app ✨
          </div>
        </div>

        {/* Buttons outside of the captured area */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button
            onClick={() => navigate("/")}
            className="bg-white/10 hover:bg-white/20 text-white"
          >
            Take New Quiz
          </Button>
          <Button
            onClick={handleDownloadImage}
            className="bg-white/10 hover:bg-white/20 text-white"
          >
            Download Results
            <Download className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
};