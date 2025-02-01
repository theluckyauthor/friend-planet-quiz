type PlanetType = 'earth' | 'venus' | 'mars' | 'jupiter';

interface PlanetScore {
  [key: string]: number;
}

interface QuestionScore {
  [key: string]: PlanetScore;
}

const QUESTION_SCORES: { [key: string]: QuestionScore } = {
  "1": {
    A: { earth: 5, venus: 4, mars: 4, jupiter: 3 },
    B: { earth: 4, venus: 5, mars: 4, jupiter: 3 },
    C: { earth: 3, venus: 3, mars: 4, jupiter: 5 },
    D: { earth: 2, venus: 3, mars: 3, jupiter: 4 },
    E: { earth: 1, venus: 2, mars: 2, jupiter: 3 }
  },
  "2": {
    A: { earth: 5, venus: 5, mars: 4, jupiter: 3 },
    B: { earth: 4, venus: 4, mars: 5, jupiter: 4 },
    C: { earth: 3, venus: 3, mars: 4, jupiter: 5 },
    D: { earth: 2, venus: 2, mars: 3, jupiter: 3 },
    E: { earth: 1, venus: 1, mars: 2, jupiter: 2 }
  },
  "3": {
    A: { earth: 5, venus: 4, mars: 3, jupiter: 3 },
    B: { earth: 4, venus: 5, mars: 4, jupiter: 4 },
    C: { earth: 3, venus: 4, mars: 5, jupiter: 4 },
    D: { earth: 2, venus: 3, mars: 4, jupiter: 5 },
    E: { earth: 1, venus: 2, mars: 2, jupiter: 3 }
  }
};

export const calculatePlanetType = (answers: (number | string)[]): PlanetType => {
  const scores: PlanetScore = {
    earth: 0,
    venus: 0,
    mars: 0,
    jupiter: 0
  };

  // Calculate scores for first 9 questions (excluding open-ended)
  answers.slice(0, 9).forEach((answer, index) => {
    const questionNumber = (index + 1).toString();
    const answerKey = String.fromCharCode(65 + Number(answer)); // Convert 0-4 to A-E
    
    if (QUESTION_SCORES[questionNumber] && QUESTION_SCORES[questionNumber][answerKey]) {
      Object.entries(QUESTION_SCORES[questionNumber][answerKey]).forEach(([planet, score]) => {
        if (scores.hasOwnProperty(planet)) {
          scores[planet] += score;
        }
      });
    }
  });

  // Find planet with highest score
  let maxScore = 0;
  let resultPlanet: PlanetType = 'earth'; // default

  Object.entries(scores).forEach(([planet, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultPlanet = planet as PlanetType;
    }
  });

  return resultPlanet;
};

export const getPlanetDescription = (planetType: PlanetType): string => {
  const descriptions = {
    earth: "Your friendship is grounded and reliable, just like Earth. You provide each other with stability and support, creating a safe space for growth and understanding.",
    venus: "Your friendship is harmonious and beautiful. Like Venus, you share a deep appreciation for beauty, art, and emotional connection.",
    mars: "Your friendship is adventurous and energetic! Like the red planet, you both share a passion for exploration and taking on new challenges together.",
    jupiter: "Your friendship is larger than life! Like Jupiter, you bring growth and expansion to each other's lives, creating grand adventures together."
  };

  return descriptions[planetType];
};