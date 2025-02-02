import React, { useState } from 'react';
import { planetData, combinations } from "@/utils/planetData";

// Define the relationship type
interface Relationship {
  title: string;
  description: string;
  tip: string;
}

const Glossary = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<keyof typeof planetData>("sun"); // Default to "sun"

  const handlePlanetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPlanet(event.target.value as keyof typeof planetData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-gray-800 to-black">
      <h1 className="text-4xl font-bold text-white text-center mb-6">Planet Glossary</h1>
      
      {/* Dropdown for planet selection */}
      <div className="mb-4">
        <label htmlFor="planet-select" className="text-white">Select a Planet:</label>
        <select
          id="planet-select"
          value={selectedPlanet}
          onChange={handlePlanetChange}
          className="ml-2 p-2 rounded bg-white/20 text-white border border-white/40"
        >
          {Object.keys(planetData).map((planet) => (
            <option key={planet} value={planet}>
              {planetData[planet as keyof typeof planetData].title}
            </option>
          ))}
        </select>
      </div>

      {/* Display selected planet information */}
      <div className="bg-white/10 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl text-white">{planetData[selectedPlanet].title} {planetData[selectedPlanet].emoji}</h2>
        <p className="text-white/90">{planetData[selectedPlanet].description}</p>
        <h3 className="text-lg text-white">Traits: {planetData[selectedPlanet].traits.join(", ")}</h3>
        <p className="text-white/70">Nurture: {planetData[selectedPlanet].nurture}</p>

        {/* Relationships */}
        <h3 className="text-lg text-white mt-4">Relationships:</h3>
        {combinations[selectedPlanet] && Object.entries(combinations[selectedPlanet]).map(([relatedPlanet, relationship]) => (
          <div key={relatedPlanet} className="mt-2 bg-white/20 p-2 rounded">
            <h4 className="text-md text-white">{relationship.title}</h4>
            <p className="text-white/80">{relationship.description}</p>
            <p className="text-white/60 italic">Tip: {relationship.tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Glossary;
