import { PlanetType } from './analytics';

type ScoreMap = Record<PlanetType, number>;
type QuestionWeights = Record<PlanetType, number>;

// Define which questions are most important for identifying each planet type
const PLANET_IDENTIFIERS: Record<PlanetType, number[]> = {
  sun: [1, 2, 5, 8, 12],      // Frequency, feeling, sharing news, conflicts, history
  mercury: [1, 4, 7, 11, 13],  // Frequency, interaction style, planning, disagreements, evolution
  venus: [2, 5, 6, 8, 15],     // Feeling, sharing news, support, conflicts, creativity
  earth: [1, 3, 9, 12, 14],    // Frequency, duration, future, history, vision
  mars: [2, 6, 7, 10, 16],     // Feeling, support, planning, celebration, personal impact
  jupiter: [4, 7, 10, 17, 18], // Interaction, planning, celebration, social circle, foundation
  saturn: [1, 4, 6, 11, 14],   // Frequency, interaction, support, disagreements, vision
  uranus: [4, 8, 13, 16, 18],  // Interaction, conflicts, evolution, impact, foundation
  neptune: [2, 15, 16, 17, 18],// Feeling, creativity, impact, social circle, foundation
  pluto: [3, 13, 14, 16, 18],  // Duration, evolution, vision, impact, foundation
  moon: [1, 6, 8, 11, 14],     // Frequency, support, conflicts, disagreements, vision
  comet: [1, 4, 7, 13, 17],    // Frequency, interaction, planning, evolution, social circle
  cluster: [4, 7, 10, 17, 18], // Interaction, planning, celebration, social circle, foundation
  satellite: [1, 4, 12, 17, 18]// Frequency, interaction, history, social circle, foundation
};

// Define base weight multipliers for key identifying questions
const getQuestionWeight = (questionIndex: number, planet: PlanetType): number => {
  // Key identifying questions get higher weight
  if (PLANET_IDENTIFIERS[planet].includes(questionIndex + 1)) {
    return 2.5;
  }
  return 1;
};

// Define answer weights based on position (A-E)
const ANSWER_WEIGHTS: Record<string, number> = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
  E: 1
};

export const calculatePlanetType = (answers: (number | string)[]): PlanetType => {
  const scores: ScoreMap = {
    sun: 0, mercury: 0, venus: 0, earth: 0, mars: 0,
    jupiter: 0, saturn: 0, uranus: 0, neptune: 0, pluto: 0,
    moon: 0, comet: 0, cluster: 0, satellite: 0
  };

  // Process multiple choice answers
  answers.slice(0, 18).forEach((answer, index) => {
    if (typeof answer === 'number') {
      const letterScore = String.fromCharCode(65 + answer); // Convert 0-4 to A-E
      const baseWeight = ANSWER_WEIGHTS[letterScore];
      
      // Apply weights for each planet based on this answer
      Object.keys(scores).forEach((planet) => {
        const planetType = planet as PlanetType;
        const questionWeight = getQuestionWeight(index, planetType);
        
        // If this answer pattern matches the planet's typical pattern
        if (PLANET_SCORES[index + 1]?.[letterScore]?.includes(planetType)) {
          scores[planetType] += baseWeight * questionWeight;
        }
      });
    }
  });

  // Normalize scores to account for different weight distributions
  const maxPossibleScore = Object.values(PLANET_IDENTIFIERS).reduce(
    (max, questions) => Math.max(max, questions.length * 5 * 2.5), 0
  );

  Object.keys(scores).forEach((planet) => {
    scores[planet as PlanetType] = (scores[planet as PlanetType] / maxPossibleScore) * 100;
  });

  // Find the highest scoring planet
  const [topPlanet] = Object.entries(scores)
    .sort(([, scoreA], [, scoreB]) => scoreB - scoreA);

  return topPlanet[0] as PlanetType;
};

const PLANET_SCORES: Record<number, Record<string, PlanetType[]>> = {
  1: { // How often do you talk
    A: ['sun', 'earth'],
    B: ['venus', 'mars', 'moon'],
    C: ['jupiter', 'comet'],
    D: ['mercury', 'saturn'],
    E: ['neptune', 'uranus', 'pluto', 'satellite']
  },
  2: { // Feeling after hangout
    A: ['sun', 'earth'],
    B: ['venus', 'mars', 'moon'],
    C: ['mercury', 'jupiter'],
    D: ['saturn', 'uranus', 'comet'],
    E: ['neptune', 'pluto', 'satellite']
  },
  3: { // Friendship duration
    A: ['sun', 'earth'],
    B: ['mars', 'moon'],
    C: ['venus', 'jupiter'],
    D: ['mercury', 'saturn', 'uranus', 'comet', 'satellite'],
    E: ['neptune', 'pluto']
  },
  4: { // Usual interaction
    A: ['sun', 'earth'],
    B: ['venus', 'mars', 'moon'],
    C: ['mercury', 'jupiter', 'comet'],
    D: ['saturn', 'neptune', 'satellite'],
    E: ['uranus', 'pluto']
  },
  5: { // Sharing personal news
    A: ['sun', 'earth'],
    B: ['venus', 'mars', 'moon'],
    C: ['jupiter'],
    D: ['mercury', 'saturn', 'comet'],
    E: ['uranus', 'neptune', 'pluto', 'satellite']
  },
  6: { // Expected support
    A: ['sun', 'earth'],
    B: ['venus', 'mars', 'moon'],
    C: ['mercury', 'jupiter'],
    D: ['saturn', 'uranus', 'comet'],
    E: ['neptune', 'pluto', 'satellite']
  },
  7: { // Planning a trip
    A: ['sun', 'earth'],
    B: ['venus', 'mars', 'moon'],
    C: ['jupiter', 'comet', 'cluster'],
    D: ['mercury', 'saturn'],
    E: ['uranus', 'neptune', 'pluto', 'satellite']
  },
  8: { // Conflict handling
    A: ['sun', 'earth'],
    B: ['venus', 'mars', 'moon'],
    C: ['jupiter'],
    D: ['mercury', 'saturn', 'comet'],
    E: ['uranus', 'neptune', 'pluto', 'satellite']
  },
  9: { // Future interaction
    A: ['sun', 'earth'],
    B: ['venus', 'mars', 'moon'],
    C: ['jupiter', 'comet', 'cluster'],
    D: ['mercury', 'saturn'],
    E: ['uranus', 'neptune', 'pluto', 'satellite']
  },
  10: { // Celebrating successes
    A: ['jupiter', 'sun', 'cluster'],
    B: ['venus', 'earth'],
    C: ['mercury', 'mars'],
    D: ['saturn', 'moon', 'satellite'],
    E: ['uranus', 'pluto']
  },
  11: { // Handling disagreements
    A: ['sun', 'earth'],
    B: ['mars', 'mercury'],
    C: ['venus', 'moon'],
    D: ['saturn', 'comet'],
    E: ['uranus', 'neptune', 'satellite']
  },
  12: { // Knowing personal history
    A: ['sun', 'earth'],
    B: ['venus', 'mars'],
    C: ['mercury', 'jupiter'],
    D: ['saturn', 'moon'],
    E: ['uranus', 'neptune', 'pluto', 'satellite']
  },
  13: { // Evolution of friendship
    A: ['sun', 'earth'],
    B: ['venus', 'mars'],
    C: ['mercury', 'jupiter'],
    D: ['saturn', 'moon'],
    E: ['uranus', 'pluto', 'satellite']
  },
  14: { // Future vision for the friendship
    A: ['sun', 'earth'],
    B: ['venus', 'mars'],
    C: ['mercury', 'jupiter'],
    D: ['saturn', 'moon', 'satellite'],
    E: ['uranus', 'pluto']
  },
  // New questions (15-18):
  15: { // How do you and your friend express creativity or share interests?
    A: ['neptune', 'cluster'],       // Creative, group inspiration
    B: ['venus', 'earth'],           // Personal, shared hobbies
    C: ['mercury', 'saturn'],          // Casual, light interaction
    D: ['uranus', 'comet'],            // Unconventional, spontaneous creativity
    E: ['pluto', 'satellite']          // Drifted, or past shared interests
  },
  16: { // Has this friendship changed who you are as a person?
    A: ['pluto', 'neptune'],         // Profound transformation
    B: ['venus', 'sun'],             // Meaningful, positive change
    C: ['earth', 'mars'],            // Steady, incremental change
    D: ['saturn', 'mercury'],        // Not significantly changed
    E: ['uranus', 'satellite']       // Grown in different directions
  },
  17: { // How does this friendship fit into your social circle?
    A: ['cluster', 'jupiter'],       // Core friend group, strong social ties
    B: ['venus', 'earth'],           // A deep, one-on-one connection outside a group
    C: ['mercury', 'saturn'],        // Casual or activity-based friendship
    D: ['moon', 'comet'],            // Loose, occasional connection
    E: ['pluto', 'neptune', 'satellite'] // Fading or distant connection
  },
  18: { // What's the primary foundation of your friendship?
    A: ['sun', 'venus'],             // Deep emotional connection and trust
    B: ['mars', 'jupiter'],          // Shared experiences, adventure, fun times
    C: ['mercury', 'cluster'],       // Common interests or intellectual spark
    D: ['saturn', 'moon'],           // Circumstantial friendship that remains steady
    E: ['pluto', 'neptune', 'satellite']  // Historical bond that has evolved or faded
  }
};

