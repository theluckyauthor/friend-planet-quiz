import React from 'react';
import Slider from "react-slick";
import { planetData } from "@/utils/planetData";
import { Card } from "@/components/ui/card";

const Glossary = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-purple-900 to-black">
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

       {/* Title for the cards */}
       <h2 className="text-2xl font-bold text-white mb-4">Explore Your Planet Types</h2>

      {/* Carousel for planet information */}
      <Slider {...settings} className="w-full max-w-2xl">
        {Object.keys(planetData).map((planet) => (
          <Card key={planet} className="bg-white/10 p-6 rounded-lg shadow-lg text-white text-center">
            <div className="text-6xl mb-2">
              {planetData[planet as keyof typeof planetData].emoji}
            </div>
            <h2 className="text-2xl font-semibold">
              {planetData[planet as keyof typeof planetData].title}
            </h2>
            <h3 className="text-lg font-medium mt-2">{planet.charAt(0).toUpperCase() + planet.slice(1)}</h3>
            <p className="text-white/90 mt-2">{planetData[planet as keyof typeof planetData].description}</p>
            <h4 className="text-lg mt-4">Traits:</h4>
            <p className="text-white/70">{planetData[planet as keyof typeof planetData].traits.join(", ")}</p>
            <h4 className="text-lg mt-4">Nurture:</h4>
            <p className="text-white/70">{planetData[planet as keyof typeof planetData].nurture}</p>
          </Card>
        ))}
      </Slider>
    </div>
  );
};

export default Glossary;
