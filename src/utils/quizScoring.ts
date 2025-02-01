import { PlanetType } from './analytics';

type ScoreMap = Record<PlanetType, number>;

interface PlanetScore {
  planet: PlanetType;
  score: number;
  frequency: number;
}

const PLANET_SCORES: Record<number, Record<string, PlanetType[]>> = {
  1: { // How often do you talk
    A: ['sun', 'earth'],
    B: ['venus', 'mars', 'moon'],
    C: ['jupiter', 'comet'],
    D: ['mercury', 'saturn'],
    E: ['neptune', 'uranus', 'pluto']
  },
  2: { // Feeling after hangout
    A: ['sun', 'earth'],
    B: ['venus', 'mars', 'moon'],
    C: ['mercury', 'jupiter'],
    D: ['saturn', 'uranus', 'comet'],
    E: ['neptune', 'pluto']
  },
  3: { // Friendship duration
    A: ['sun', 'earth'],
    B: ['mars', 'moon'],
    C: ['venus', 'jupiter'],
    D: ['mercury', 'saturn', 'uranus', 'comet'],
    E: ['neptune', 'pluto']
  },
  4: { // Usual interaction
    A: ['sun', 'earth'],
    B: ['venus', 'mars', 'moon'],
    C: ['mercury', 'jupiter', 'comet'],
    D: ['saturn', 'neptune'],
    E: ['uranus', 'pluto']
  },
  5: { // Sharing personal news
    A: ['sun', 'earth'],
    B: ['venus', 'mars', 'moon'],
    C: ['jupiter'],
    D: ['mercury', 'saturn', 'comet'],
    E: ['uranus', 'neptune', 'pluto']
  },
  6: { // Expected support
    A: ['sun', 'earth'],
    B: ['venus', 'mars', 'moon'],
    C: ['mercury', 'jupiter'],
    D: ['saturn', 'uranus', 'comet'],
    E: ['neptune', 'pluto']
  },
  7: { // Planning a trip
    A: ['sun', 'earth'],
    B: ['venus', 'mars', 'moon'],
    C: ['jupiter', 'comet'],
    D: ['mercury', 'saturn'],
    E: ['uranus', 'neptune', 'pluto']
  },
  8: { // Conflict handling
    A: ['sun', 'earth'],
    B: ['venus', 'mars', 'moon'],
    C: ['jupiter'],
    D: ['mercury', 'saturn', 'comet'],
    E: ['uranus', 'neptune', 'pluto']
  },
  9: { // Future interaction
    A: ['sun', 'earth'],
    B: ['venus', 'mars', 'moon'],
    C: ['jupiter', 'comet'],
    D: ['mercury', 'saturn'],
    E: ['uranus', 'neptune', 'pluto']
  }
};

const SCORE_WEIGHTS: Record<string, number> = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
  E: 1
};

export const calculatePlanetType = (answers: (number | string)[]): PlanetType => {
  const scores: ScoreMap = {
    sun: 0,
    mercury: 0,
    venus: 0,
    earth: 0,
    mars: 0,
    jupiter: 0,
    saturn: 0,
    uranus: 0,
    neptune: 0,
    pluto: 0,
    moon: 0,
    comet: 0
  };

  const frequency: ScoreMap = { ...scores };

  // Process multiple choice answers (first 9 questions)
  answers.slice(0, 9).forEach((answer, index) => {
    if (typeof answer === 'number') {
      const questionNumber = index + 1;
      const letterScore = String.fromCharCode(65 + answer); // Convert 0-4 to A-E
      const weight = SCORE_WEIGHTS[letterScore];
      
      // Get planets associated with this answer
      const planets = PLANET_SCORES[questionNumber][letterScore] || [];
      
      // Add weighted score and increase frequency counter
      planets.forEach(planet => {
        scores[planet] += weight;
        frequency[planet]++;
      });
    }
  });

  // Find highest scoring planets
  const planetScores: PlanetScore[] = Object.entries(scores).map(([planet, score]) => ({
    planet: planet as PlanetType,
    score,
    frequency: frequency[planet as PlanetType]
  }));

  // Sort by score first, then by frequency if scores are tied
  planetScores.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return b.frequency - a.frequency;
  });

  // Return the highest scoring planet
  return planetScores[0].planet;
};

export const getPlanetDescription = (planetType: PlanetType): string => {
  const descriptions = {
    sun: "This friend is like family—whether by blood or deep emotional connection, they're always there for you. Your bond is built on trust, loyalty, and unconditional support.",
    mercury: "This is a new and exciting connection—one that feels instant and effortless. Whether it's a short-lived spark or the beginning of something lasting, it's full of energy and curiosity.",
    venus: "This is a deeply personal, one-on-one connection. You support and uplift each other, sharing thoughts, feelings, and dreams. This friendship is intimate and emotionally fulfilling.",
    earth: "This is the center of your social world—your ride-or-die, the friend you always turn to. You talk regularly and share life's ups and downs, making this a solid, essential bond.",
    mars: "This friend is all about doing things together—whether it's sports, travel, challenges, or shared goals, your bond thrives on action and shared experiences.",
    jupiter: "This friendship thrives in crowds—whether it's group outings, events, or social gatherings, this friend makes your social world bigger and more exciting.",
    saturn: "This is a low-maintenance, circumstantial friendship—you may work, study, or share a space together. You get along but don't go too deep.",
    uranus: "This is a unique and unconventional friendship—you might have weird inside jokes, unexpected conversations, or a dynamic that doesn't fit into a box.",
    neptune: "Even if you're far apart, this friendship remains strong through texts, calls, and online chats. No matter how much time passes, you always pick up where you left off.",
    pluto: "You were once close, but life has taken you in different directions. Maybe you'll reconnect, or maybe this is a friendship you'll always remember fondly.",
    moon: "This is a steady, reliable friendship that doesn't need constant attention. Whether you talk every week or once a year, the connection never fades.",
    comet: "This friendship has cycles—sometimes you're super close, other times you drift apart. But when you reconnect, it's like no time has passed."
  };

  return descriptions[planetType];
};