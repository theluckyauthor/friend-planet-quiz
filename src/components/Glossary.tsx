import React from 'react';
import { planetData, combinations } from "@/utils/planetData";

// Define the relationship type
interface Relationship {
  title: string;
  description: string;
  tip: string;
}

const Glossary = () => {
  return (
    <div className="p-4 bg-gradient-to-b from-purple-900 to-black min-h-screen">
      <h1 className="text-3xl font-bold text-white text-center mb-6">Planet Glossary</h1>
      <div className="space-y-8">
        {Object.entries(planetData).map(([planet, info]) => (
          <div key={planet} className="bg-white/10 p-4 rounded-lg">
            <h2 className="text-xl text-white">{info.title} {info.emoji}</h2>
            <p className="text-white/80">{info.description}</p>
            <h3 className="text-lg text-white">Traits: {info.traits.join(", ")}</h3>
            <p className="text-white/60">Nurture: {info.nurture}</p>

            {/* Relationships */}
            <h3 className="text-lg text-white mt-4">Relationships:</h3>
            {combinations[planet] && Object.entries(combinations[planet]).map(([relatedPlanet, relationship]) => {
              const rel = relationship as Relationship; // Type assertion
              return (
                <div key={relatedPlanet} className="mt-2 bg-white/20 p-2 rounded">
                  <h4 className="text-md text-white">{rel.title}</h4>
                  <p className="text-white/80">{rel.description}</p>
                  <p className="text-white/60 italic">Tip: {rel.tip}</p>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Glossary;
