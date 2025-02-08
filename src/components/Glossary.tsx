import React from 'react';
import Slider from "react-slick";
import { planetData } from "@/utils/planetData";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Glossary = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-purple-900 to-black">
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

      {/* Back to Home Button */}
      <button 
        onClick={() => navigate("/")} 
        className="mt-6 w-full bg-primary hover:bg-primary/90 text-white p-2 rounded"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Glossary;
