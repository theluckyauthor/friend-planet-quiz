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

interface QuizAnalytics {
  startTime: Date;
  completionTime?: Date;
  userPlanet?: PlanetType;
  friendPlanet?: PlanetType;
  shared: boolean;
}

export const trackQuizStart = () => {
  const analytics: QuizAnalytics = {
    startTime: new Date(),
    shared: false
  };
  // Store in localStorage or send to analytics service
  localStorage.setItem('currentQuiz', JSON.stringify(analytics));
};

export const trackQuizCompletion = (planet: PlanetType) => {
  const current = JSON.parse(localStorage.getItem('currentQuiz') || '{}');
  const updated: QuizAnalytics = {
    ...current,
    completionTime: new Date(),
    userPlanet: planet
  };
  localStorage.setItem('currentQuiz', JSON.stringify(updated));
};
