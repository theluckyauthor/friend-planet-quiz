import { PlanetType } from "./analytics";

interface PlanetInfo {
  title: string;
  description: string;
}

export const planetData: Record<PlanetType, PlanetInfo> = {
    sun: {
      title: "Sun Friends",
      description: "Your friendship burns bright and warm, providing energy and light to those around you.",
    },
    mercury: {
      title: "Mercury Friends",
      description: "Quick, dynamic, and always in motion - your friendship is marked by swift communication and adaptability.",
    },
    venus: {
      title: "Venus Friends",
      description: "Your friendship is harmonious and beautiful. Like Venus, you share a deep appreciation for beauty, art, and emotional connection.",
    },
    earth: {
      title: "Earth Friends",
      description: "Your friendship is grounded and reliable, just like Earth. You provide each other with stability and support.",
    },
    mars: {
      title: "Mars Friends",
      description: "Your friendship is adventurous and energetic! Like the red planet, you share a passion for exploration.",
    },
    jupiter: {
      title: "Jupiter Friends",
      description: "Your friendship is larger than life! Like Jupiter, you bring growth and expansion to each other's lives.",
    },
    saturn: {
      title: "Saturn Friends",
      description: "Like Saturn's rings, your friendship has many layers and is uniquely beautiful.",
    },
    uranus: {
      title: "Uranus Friends",
      description: "Your friendship is unique and unconventional, following its own path.",
    },
    neptune: {
      title: "Neptune Friends",
      description: "Deep and mysterious, your friendship has spiritual and emotional depths.",
    },
    pluto: {
      title: "Pluto Friends",
      description: "Though distant at times, your friendship maintains a powerful connection.",
    },
    moon: {
      title: "Moon Friends",
      description: "Your friendship waxes and wanes but maintains a constant presence.",
    },
    comet: {
      title: "Comet Friends",
      description: "Your friendship brings excitement when paths cross, leaving lasting memories.",
    },
  };

export const getComparisonDescription = (planet1: PlanetType, planet2: PlanetType) => {
  return `${planetData[planet1].title} and ${planetData[planet2].title} create a unique cosmic connection!`;
}; 