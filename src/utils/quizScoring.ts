export type PlanetType = 
  | 'sun' 
  | 'mercury' 
  | 'venus' 
  | 'earth' 
  | 'mars' 
  | 'jupiter' 
  | 'saturn' 
  | 'uranus' 
  | 'neptune' 
  | 'pluto' 
  | 'moon' 
  | 'comet';

interface PlanetScore {
  [key: string]: number;
}

const PLANET_WEIGHTS = {
  sun: { frequency: 5, closeness: 5, history: 5, goals: 5 },
  mercury: { frequency: 3, closeness: 4, history: 2, goals: 4 },
  venus: { frequency: 4, closeness: 5, history: 3, goals: 4 },
  earth: { frequency: 5, closeness: 4, history: 4, goals: 4 },
  mars: { frequency: 4, closeness: 3, history: 3, goals: 5 },
  jupiter: { frequency: 3, closeness: 3, history: 3, goals: 5 },
  saturn: { frequency: 2, closeness: 2, history: 3, goals: 2 },
  uranus: { frequency: 2, closeness: 3, history: 2, goals: 3 },
  neptune: { frequency: 2, closeness: 4, history: 4, goals: 2 },
  pluto: { frequency: 1, closeness: 2, history: 5, goals: 1 },
  moon: { frequency: 2, closeness: 4, history: 4, goals: 3 },
  comet: { frequency: 2, closeness: 3, history: 3, goals: 2 }
};

export const calculatePlanetType = (answers: (number | string)[]): PlanetType => {
  const scores: PlanetScore = Object.keys(PLANET_WEIGHTS).reduce((acc, planet) => {
    acc[planet] = 0;
    return acc;
  }, {} as PlanetScore);

  // Process multiple choice answers (first 9 questions)
  answers.slice(0, 9).forEach((answer, index) => {
    const answerNum = Number(answer);
    
    // Map question to categories
    const categories = getQuestionCategories(index);
    
    // Calculate scores based on answer and categories
    Object.entries(PLANET_WEIGHTS).forEach(([planet, weights]) => {
      categories.forEach(category => {
        scores[planet] += calculateCategoryScore(answerNum, weights[category as keyof typeof weights]);
      });
    });
  });

  // Find planet with highest score
  return Object.entries(scores).reduce((max, [planet, score]) => {
    return score > scores[max] ? planet as PlanetType : max;
  }, 'earth' as PlanetType);
};

function getQuestionCategories(questionIndex: number): string[] {
  const categoryMap = {
    0: ['frequency'],
    1: ['closeness'],
    2: ['history'],
    3: ['frequency', 'closeness'],
    4: ['closeness', 'goals'],
    5: ['closeness', 'goals'],
    6: ['goals', 'closeness'],
    7: ['closeness', 'history'],
    8: ['goals', 'frequency']
  };
  
  return categoryMap[questionIndex as keyof typeof categoryMap] || [];
}

function calculateCategoryScore(answerIndex: number, weight: number): number {
  // Convert 0-4 answer index to 1-5 score and multiply by weight
  return ((5 - answerIndex) * weight) / 5;
}

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