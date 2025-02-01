import { PlanetType } from "@/utils/analytics";
import { planetData, getComparisonDescription } from "@/utils/planetData";

interface ComparisonProps {
  myPlanet: PlanetType;
  friendPlanet: PlanetType;
  myName: string;
  friendName: string;
}

const PlanetComparison = ({ myPlanet, friendPlanet, myName, friendName }: ComparisonProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-white">Friendship Comparison</h2>
      
      <div className="flex justify-between items-center gap-4">
        <div className="text-center space-y-2">
          <div className="floating">
            <img
              src={`/planets/${myPlanet}.png`}
              alt={myPlanet}
              className="w-24 h-24"
            />
          </div>
          <p className="text-white font-medium">{myName}</p>
          <p className="text-sm text-white/70">{planetData[myPlanet].title}</p>
        </div>
        
        <div className="text-4xl text-white/50">⟷</div>
        
        <div className="text-center space-y-2">
          <div className="floating delay-75">
            <img
              src={`/planets/${friendPlanet}.png`}
              alt={friendPlanet}
              className="w-24 h-24"
            />
          </div>
          <p className="text-white font-medium">{friendName}</p>
          <p className="text-sm text-white/70">{planetData[friendPlanet].title}</p>
        </div>
      </div>
      
      <p className="text-center text-white/80">
        {getComparisonDescription(myPlanet, friendPlanet)}
      </p>
    </div>
  );
};
