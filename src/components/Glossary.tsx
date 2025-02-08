import React, { useState } from 'react';
import Slider from "react-slick";
import { planetData } from "@/utils/planetData";

const Glossary = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<keyof typeof planetData>("sun"); // Default to "sun"

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handlePlanetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPlanet(event.target.value as keyof typeof planetData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-gray-800 to-black">
      <h1 className="text-4xl font-bold text-white text-center mb-6">Planet Glossary</h1>
      
      {/* Introduction to the quiz */}
      <div className="mb-6 text-white text-center max-w-2xl">
        <p className="text-lg">
          Welcome to the Friendship Quiz! This quiz is designed to help you explore the dynamics of your friendship with a specific person. 
          By answering a series of questions, you will gain insights into the nature of your relationship and how it fits into your life.
        </p>
        <p className="mt-4">
          After completing the quiz, you will receive results that categorize your friendship into different "planet types," each representing unique traits and characteristics. 
          Use this glossary to understand the meanings behind each planet type and how they relate to your friendship.
        </p>
      </div>

      {/* Step-by-step guide */}
      <div className="mb-6 text-white text-center max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">How the Quiz Works</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Answer a series of questions about your friendship.</li>
          <li>Each question will help you reflect on different aspects of your relationship.</li>
          <li>At the end of the quiz, you will receive a "planet type" that represents your friendship.</li>
          <li>You can then share your results with your friend to compare your perspectives.</li>
          <li>Simply click the "Share" button to generate a link that you can send to them.</li>
        </ol>
      </div>

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

      {/* Carousel for planet information */}
      <Slider {...settings} className="w-full max-w-2xl">
        {Object.keys(planetData).map((planet) => (
          <div key={planet} className="bg-white/10 p-6 rounded-lg shadow-lg text-white">
            <h2 className="text-2xl">{planetData[planet as keyof typeof planetData].title} {planetData[planet as keyof typeof planetData].emoji}</h2>
            <p className="text-white/90">{planetData[planet as keyof typeof planetData].description}</p>
            <h3 className="text-lg">Traits: {planetData[planet as keyof typeof planetData].traits.join(", ")}</h3>
            <p className="text-white/70">Nurture: {planetData[planet as keyof typeof planetData].nurture}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Glossary;
