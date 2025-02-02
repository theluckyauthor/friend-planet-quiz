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
    const combinations: Record<string, Record<string, string>> = {
        sun: {
          sun: "A Radiant Bond ☀️☀️ - Two kindred souls whose friendship is like the sun—constant, warm, and illuminating every dark corner of life with trust and unwavering support.",
          moon: "Cosmic Balance ☀️🌙 - The brilliance of the sun meets the reflective calm of the moon, creating a harmonious blend of energy and introspection that perfectly balances passion with quiet understanding.",
          venus: "Warm Embrace ☀️💖 - Sun's vibrant energy complements Venus's nurturing heart, forming a bond that not only lights up your world but also fosters growth, care, and emotional depth.",
          mercury: "Dynamic Duo ☀️💫 - The radiant energy of the sun paired with Mercury's quick wit sparks lively, engaging conversations that keep your friendship fresh and ever-evolving.",
          mars: "Power Pair ☀️🔥 - The unstoppable drive of Mars fuels the sun's brilliant light, resulting in a high-energy, action-packed friendship that motivates and inspires both of you.",
          jupiter: "Expansive Joy ☀️🌟 - With the sun's warmth and Jupiter's expansive optimism, your friendship blossoms into a universe of shared opportunities, growth, and boundless possibilities.",
          saturn: "Timeless Bond ☀️⭐ - Sun's constant radiance combined with Saturn's enduring stability creates a friendship that stands the test of time—a steadfast light in both your lives.",
          comet: "Cyclical Magic ☀️☄️ - The steady glow of the sun is enlivened by Comet's unpredictable brilliance, bringing delightful bursts of reconnection that keep your friendship sparkling."
        },
        moon: {
          moon: "Lunar Symphony 🌙🌙 - Two souls in quiet harmony, your friendship is like a gentle nocturne—a deep, intuitive connection where unspoken understanding flows effortlessly.",
          venus: "Gentle Tides 🌙💖 - Moon’s serene, reflective nature mingles with Venus’s warm tenderness, creating a soothing bond that ebbs and flows with natural, nurturing rhythm.",
          mercury: "Night Whispers 🌙💫 - The soft glow of the moon and the swift insights of Mercury come together in a friendship marked by subtle communication and heartfelt exchanges.",
          mars: "Moonlit Adventures 🌙🔥 - The calm of the moon inspires bold ventures with Mars’s fiery energy, leading to moments of quiet excitement and meaningful, shared explorations.",
          jupiter: "Cosmic Growth 🌙🌟 - Moon’s introspection coupled with Jupiter’s expansive vision nurtures a friendship that encourages personal evolution and the blossoming of shared dreams.",
          saturn: "Steady Reflection 🌙⭐ - The contemplative nature of the moon, balanced by Saturn’s grounding presence, creates a reliable, reflective bond that offers comfort and wise counsel.",
          comet: "Phases of Wonder 🌙☄️ - Like the ever-changing phases of the moon, your friendship experiences cycles of intensity and calm, each reunion filled with renewed awe and connection."
        },
        venus: {
          venus: "Heart Connection 💖💖 - Two hearts deeply intertwined, your friendship is a sanctuary of trust, vulnerability, and genuine care—a place where both feel truly seen and valued.",
          mercury: "Social Harmony 💖💫 - Venus’s warm, nurturing nature dances with Mercury’s swift intellect, forging a friendship that is both emotionally rich and playfully engaging.",
          mars: "Passionate Support 💖🔥 - The fire of Mars ignites Venus’s caring spirit, producing a vibrant, dynamic friendship where encouragement and shared passion fuel each other’s growth.",
          jupiter: "Growing Together 💖🌟 - With Venus’s intimacy and Jupiter’s expansive optimism, your bond transforms into a journey of mutual development, where both hearts flourish.",
          saturn: "Lasting Love 💖⭐ - Venus’s tenderness, when grounded by Saturn’s dependability, creates a nurturing and enduring friendship that remains a constant source of comfort and strength.",
          comet: "Sweet Returns 💖☄️ - Even if life takes you in different directions, the gravitational pull of Venus ensures that every reunion rekindles the warmth and depth of your cherished bond."
        },
        mercury: {
          mercury: "Swift Spirits 💫💫 - Two minds in rapid sync, your friendship is marked by lightning-fast communication and a dynamic interplay of ideas that keeps your connection ever lively.",
          mars: "Quick Action 💫🔥 - Mercury’s agile intellect pairs perfectly with Mars’s adventurous spirit, sparking a friendship full of spontaneous ideas and energetic pursuits.",
          jupiter: "Bright Ideas 💫🌟 - The clever, quick-thinking Mercury and the expansive, visionary Jupiter merge to create a friendship where every conversation opens up new horizons.",
          saturn: "Thoughtful Bond 💫⭐ - Mercury’s rapid-fire insights find depth and structure with Saturn’s reflective wisdom, resulting in a balanced friendship built on both spontaneity and thoughtfulness.",
          comet: "Sparking Joy 💫☄️ - Brief yet brilliant, Mercury’s energetic spark, when met with Comet’s cyclical flair, lights up your interactions with moments of dazzling, unexpected delight."
        },
        mars: {
          mars: "Dynamic Force 🔥🔥 - A powerhouse of energy, your friendship with Mars is an unyielding force that drives both of you to conquer challenges and seize every adventure.",
          jupiter: "Bold Adventures 🔥🌟 - Mars’s daring spirit, combined with Jupiter’s limitless optimism, forms a friendship that’s not afraid to push boundaries and explore new frontiers together.",
          saturn: "Steady Strength 🔥⭐ - Mars’s raw, enthusiastic energy is beautifully balanced by Saturn’s dependable steadiness, creating a friendship that channels passion into lasting progress.",
          comet: "Fierce Returns 🔥☄️ - Even when separated, the fiery bond of Mars is reignited by Comet’s intermittent brilliance, delivering intense, passionate reunions that leave a lasting impression."
        },
        jupiter: {
          jupiter: "Cosmic Expansion 🌟🌟 - Two expansive spirits join forces to create a friendship that continually grows, inspiring both to embrace new opportunities and share endless joy.",
          saturn: "Wise Growth ⭐🌟 - Jupiter’s buoyant optimism, when tempered by Saturn’s grounded wisdom, fosters a friendship where learning and personal evolution go hand in hand.",
          comet: "Joyful Returns 🌟☄️ - The vibrant energy of Jupiter, combined with the ever-surprising Comet, ensures that each reunion is filled with fresh excitement, renewed creativity, and boundless inspiration."
        },
        saturn: {
          saturn: "Eternal Bond ⭐⭐ - A rock-solid connection that only deepens over time, Saturn’s steady presence anchors a friendship built on mutual respect, reliability, and quiet strength.",
          comet: "Patient Love ⭐☄️ - Saturn’s enduring stability meets Comet’s whimsical returns, forming a friendship characterized by measured understanding and heartwarming reunions that are worth the wait."
        },
        comet: {
          comet: "Celestial Dance ☄️☄️ - Two unique souls engaged in an ever-evolving dance, your friendship is defined by its rhythmic cycles—each phase, departure, and return adding a new dimension to your shared journey."
        }
      };
      

    const [first, second] = [planet1, planet2].sort();
    return combinations[first]?.[second] || 
      `Cosmic Connection ${planetData[planet1].emoji}${planetData[planet2].emoji} - A unique bond that transcends celestial boundaries!`;
  };

  const handleDownloadImage = async () => {
    if (!resultsRef.current) return;

    try {
      toast({
        title: "Creating your cosmic snapshot...",
        description: "Please wait while we capture your results ✨",
      });

      const canvas = await html2canvas(resultsRef.current, {
        backgroundColor: null,
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true,
      });

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
        </div>
      </Card>
    </div>
  );
};