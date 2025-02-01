type PlanetScore = {
  [key: string]: number;
};

type QuestionScores = {
  [key: string]: {
    [key: string]: number;
  };
};

const QUESTION_SCORES: QuestionScores = {
  "1": {
    A: { earth: 5, sun: 5, venus: 4, mars: 4, moon: 4 },
    B: { venus: 4, mars: 4, moon: 4, jupiter: 3 },
    C: { jupiter: 4, comet: 3 },
    D: { mercury: 5, saturn: 3 },
    E: { uranus: 2, neptune: 2, pluto: 1 }
  },
  "2": {
    A: { earth: 5, sun: 5 },
    B: { venus: 4, mars: 4, moon: 4 },
    C: { mercury: 3, jupiter: 4 },
    D: { saturn: 2, uranus: 2, comet: 3 },
    E: { neptune: 2, pluto: 1 }
  },
  "3": {
    A: { earth: 5, sun: 5 },
    B: { mars: 4, moon: 4 },
    C: { venus: 4, jupiter: 3 },
    D: { mercury: 5, saturn: 3, uranus: 2, comet: 3 },
    E: { neptune: 2, pluto: 1 }
  },
  "4": {
    A: { earth: 5, sun: 5 },
    B: { venus: 4, mars: 4, moon: 4 },
    C: { mercury: 3, jupiter: 4, comet: 3 },
    D: { saturn: 3, neptune: 2 },
    E: { uranus: 2, pluto: 1 }
  },
  "5": {
    A: { earth: 5, sun: 5 },
    B: { venus: 4, mars: 4, moon: 4 },
    C: { jupiter: 4 },
    D: { mercury: 5, saturn: 2, comet: 3 },
    E: { uranus: 2, neptune: 2, pluto: 1 }
  },
  "6": {
    A: { earth: 5, sun: 5 },
    B: { venus: 4, mars: 4, moon: 4 },
    C: { mercury: 3, jupiter: 4 },
    D: { saturn: 3, uranus: 2, comet: 3 },
    E: { neptune: 2, pluto: 1 }
  },
  "7": {
    A: { earth: 5, sun: 5 },
    B: { venus: 4, mars: 4, moon: 4 },
    C: { jupiter: 4, comet: 3 },
    D: { mercury: 5, saturn: 3 },
    E: { uranus: 2, neptune: 2, pluto: 1 }
  },
  "8": {
    A: { earth: 5, sun: 5 },
    B: { venus: 4, mars: 4, moon: 4 },
    C: { jupiter: 4 },
    D: { mercury: 5, saturn: 3, comet: 3 },
    E: { uranus: 2, neptune: 2, pluto: 1 }
  },
  "9": {
    A: { earth: 5, sun: 5 },
    B: { venus: 4, mars: 4, moon: 4 },
    C: { jupiter: 4, comet: 3 },
    D: { mercury: 5, saturn: 3 },
    E: { uranus: 2, neptune: 2, pluto: 1 }
  }
};

export const calculatePlanetType = (answers: (number | string)[]) => {
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
    const questionScores = QUESTION_SCORES[questionNumber][answerKey];

    if (questionScores) {
      Object.entries(questionScores).forEach(([planet, score]) => {
        if (scores.hasOwnProperty(planet)) {
          scores[planet] += score;
        }
      });
    }
  });

  // Find planet with highest score
  let maxScore = 0;
  let resultPlanet = "earth"; // default

  Object.entries(scores).forEach(([planet, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultPlanet = planet;
    }
  });

  return resultPlanet;
};

export const getPlanetDescription = (planetType: string): string => {
  const descriptions = {
    earth: "Your friendship is grounded and reliable, just like Earth. You provide each other with stability and support, creating a safe space for growth and understanding.",
    venus: "Your friendship is harmonious and beautiful. Like Venus, you share a deep appreciation for beauty, art, and emotional connection.",
    mars: "Your friendship is adventurous and energetic! Like the red planet, you both share a passion for exploration and taking on new challenges together.",
    jupiter: "Your friendship is larger than life! Like Jupiter, you bring growth and expansion to each other's lives, creating grand adventures together."
  };

  return descriptions[planetType as keyof typeof descriptions] || descriptions.earth;
};