import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Share2, Download } from "lucide-react";
import { PlanetType } from "@/utils/analytics";
import React from "react";
import { toast } from "@/components/ui/use-toast";
import { planetData } from "@/utils/planetData";
import html2canvas from "html2canvas";
import { PlanetIllustration } from "@/components/ui/planet-illustration";

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
          <PlanetIllustration planet={myPlanet} size="md" className="mx-auto mb-2" />
          <p className="text-white mt-2">{myName}</p>
          <p className="text-white/80 italic text-sm mt-2">"{myDescription}"</p>
        </div>
        <div className="floating delay-75">
          <PlanetIllustration planet={friendPlanet} size="md" className="mx-auto mb-2" />
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
  const resultsRef = useRef<HTMLDivElement>(null);

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
      
      // Create the share URL - link directly to comparison quiz
      const shareUrl = `https://planety-quiz.vercel.app/compare?data=${encodedData}`;
      
      // Create share text
      const shareText = `${name} wants to compare your friendship! Take the quiz and see how your views match.`;
      
      // Try native share first
      if (navigator.share) {
        await navigator.share({
          title: "Friend Planet Quiz",
          text: shareText,
          url: shareUrl
        });
      } 
    } catch (error) {
      console.error("Sharing failed", error);
    } finally {
      // Always show the URL for manual copying
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

  const handleDownloadImage = async () => {
    if (!resultsRef.current) return;

    try {
      toast({
        title: "Creating your cosmic snapshot...",
        description: "Please wait while we capture your results.",
      });

      const canvas = await html2canvas(resultsRef.current, {
        backgroundColor: '#0f172a',
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true,
      });

      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = `cosmic-friendship-${name}.png`;
      link.click();

      toast({
        title: "Success!",
        description: "Your cosmic friendship snapshot is ready to share.",
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
    <div className="cosmic-bg flex items-center justify-center p-4">
      <Card className="cosmic-card w-full max-w-2xl p-8 space-y-8">
        <div ref={resultsRef} className="space-y-8 p-8 rounded-lg">
          <div className="space-y-4 text-center">
            <div className="floating inline-block">
              <PlanetIllustration planet={planetType as PlanetType} size="lg" className="mx-auto mb-4" />
            </div>
            <div className="space-y-2">
              <p className="text-xl text-white/80">
                {getCelestialLabel(planetType)} is:
              </p>
              <h1 className="text-3xl font-bold text-white">
                {planetType === 'comet' ? 'Comet' : (planetType.charAt(0).toUpperCase() + planetType.slice(1) + ' - ')}
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
              Nurture tip: {planetData[planetType as keyof typeof planetData].nurture}
            </p>
          </div>

          {description && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white text-center">Your Friendship Description</h3>
              <p className="text-center text-white/80 italic">"{description}"</p>
            </div>
          )}

          {/* Add watermark */}
          <div className="text-center text-white/40 text-sm mt-4">
            https://planety-quiz.vercel.app/
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              onClick={handleShare}
              className="border border-white/20 bg-white/5 hover:bg-white/10 text-white"
              variant="outline"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Share & Compare with Friend
            </Button>
            <Button
              onClick={handleDownloadImage}
              className="bg-slate-100 text-slate-900 hover:bg-slate-200"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Result
            </Button>
            <Button
              onClick={handleRetake}
              className="border border-white/20 bg-white/5 hover:bg-white/10 text-white"
            >
              Retake Quiz
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
          
          {showShareUrl && (
            <div className="space-y-2">
              <p className="text-center text-white/60 text-sm">
                Share this link with {friendName} to compare results:
              </p>
              <div 
                className="p-3 bg-white/5 rounded border border-white/10 text-white/90 text-sm break-all cursor-text"
              >
                {`${window.location.origin}/compare?data=${btoa(JSON.stringify({
                  n: name,
                  fn: friendName,
                  pt: planetType,
                  d: description
                }))}`}
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};