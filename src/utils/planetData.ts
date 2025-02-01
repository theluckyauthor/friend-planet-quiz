import { PlanetType } from './analytics';

interface PlanetInfo {
  title: string;
  description: string;
  traits: string[];
  nurture: string;
  emoji: string;
}

export const planetData: Record<PlanetType, PlanetInfo> = {
  sun: {
    title: "Family-Like Bonds",
    description: "This friend is like family—whether by blood or deep emotional connection, they're always there for you. Your bond is built on trust, loyalty, and unconditional support.",
    traits: ["Unbreakable", "lifelong", "deeply caring"],
    nurture: "Keep showing up for each other, even when life gets busy.",
    emoji: "☀️"
  },
  mercury: {
    title: "Rapid, Intense Recent Connections",
    description: "This is a new and exciting connection—one that feels instant and effortless. Whether it's a short-lived spark or the beginning of something lasting, it's full of energy and curiosity.",
    traits: ["Fast-growing", "spontaneous", "engaging"],
    nurture: "Keep exploring shared interests and see where it leads.",
    emoji: "🪐"
  },
  venus: {
    title: "Deep, One-on-One Nurturing Friendships",
    description: "This is a deeply personal, one-on-one connection. You support and uplift each other, sharing thoughts, feelings, and dreams. This friendship is intimate and emotionally fulfilling.",
    traits: ["Deep trust", "emotional closeness", "supportive"],
    nurture: "Keep space for open conversations and emotional check-ins.",
    emoji: "♀️"
  },
  earth: {
    title: "Constant, Dependable Best Friends",
    description: "This is the center of your social world—your ride-or-die, the friend you always turn to. You talk regularly and share life's ups and downs, making this a solid, essential bond.",
    traits: ["Loyal", "deeply involved", "daily presence"],
    nurture: "Keep the communication flowing and be present.",
    emoji: "🌍"
  },
  mars: {
    title: "Energetic, Adventurous, Action-Oriented Friendships",
    description: "This friend is all about doing things together—whether it's sports, travel, challenges, or shared goals, your bond thrives on action and shared experiences.",
    traits: ["High-energy", "fun-loving", "daring"],
    nurture: "Plan exciting outings, challenges, and activities together.",
    emoji: "♂️"
  },
  jupiter: {
    title: "Friendships That Shine in Group Settings",
    description: "This friendship thrives in crowds—whether it's group outings, events, or social gatherings, this friend makes your social world bigger and more exciting.",
    traits: ["Outgoing", "fun", "social connector"],
    nurture: "Keep inviting each other to group events and shared experiences.",
    emoji: "⚡"
  },
  saturn: {
    title: "Casual, Circumstantial, Work/School Friendships",
    description: "This is a low-maintenance, circumstantial friendship—you may work, study, or share a space together. You get along but don't go too deep.",
    traits: ["Friendly", "situational", "easygoing"],
    nurture: "Keep the friendly connection alive, and let it develop naturally.",
    emoji: "🪐"
  },
  uranus: {
    title: "Quirky, Unpredictable, Offbeat Friendships",
    description: "This is a unique and unconventional friendship—you might have weird inside jokes, unexpected conversations, or a dynamic that doesn't fit into a box.",
    traits: ["Unpredictable", "eccentric", "free-spirited"],
    nurture: "Embrace the weirdness and let the friendship evolve freely.",
    emoji: "🔥"
  },
  neptune: {
    title: "Long-Distance, Digital Friendships",
    description: "Even if you're far apart, this friendship remains strong through texts, calls, and online chats. No matter how much time passes, you always pick up where you left off.",
    traits: ["Loyal", "sentimental", "tech-driven"],
    nurture: "Keep checking in, even if it's just a quick message now and then.",
    emoji: "🌊"
  },
  pluto: {
    title: "Friendships That Have Faded Over Time",
    description: "You were once close, but life has taken you in different directions. Maybe you'll reconnect, or maybe this is a friendship you'll always remember fondly.",
    traits: ["Nostalgic", "distant", "meaningful past"],
    nurture: "If you want to reconnect, reach out! Otherwise, cherish the good times.",
    emoji: "❄️"
  },
  moon: {
    title: "Low-Maintenance Yet Meaningful Connections",
    description: "This is a steady, reliable friendship that doesn't need constant attention. Whether you talk every week or once a year, the connection never fades.",
    traits: ["Independent", "secure", "time-proof"],
    nurture: "Just be there when it matters most.",
    emoji: "🌙"
  },
  comet: {
    title: "Friendships That Come in Phases",
    description: "This friendship has cycles—sometimes you're super close, other times you drift apart. But when you reconnect, it's like no time has passed.",
    traits: ["Unpredictable", "high-intensity phases", "deep connection when active"],
    nurture: "Accept the ebb and flow, and enjoy the bursts of connection.",
    emoji: "☄️"
  }
};

export const getComparisonDescription = (planet1: PlanetType, planet2: PlanetType): string => {
  const p1 = planetData[planet1];
  const p2 = planetData[planet2];
  
  if (planet1 === planet2) {
    return `You both see this friendship similarly! As ${p1.emoji} ${p1.title.toLowerCase()}, you share a natural understanding of how your connection works.`;
  }

  // Define special combinations
  const specialCombos: Record<string, string> = {
    'sun-moon': `${planetData.sun.emoji}${planetData.moon.emoji} A perfect balance of constant warmth and comfortable space—your friendship has both depth and flexibility.`,
    'earth-mars': `${planetData.earth.emoji}${planetData.mars.emoji} You balance stability with excitement, creating a dynamic and lasting bond.`,
    'venus-jupiter': `${planetData.venus.emoji}${planetData.jupiter.emoji} Your intimate connection thrives both one-on-one and in social settings.`,
    'mercury-uranus': `${planetData.mercury.emoji}${planetData.uranus.emoji} Your friendship sparkles with spontaneity and unique energy!`,
    'neptune-pluto': `${planetData.neptune.emoji}${planetData.pluto.emoji} Distance and time can't diminish your meaningful connection.`,
  };

  // Check for special combinations (in either order)
  const combo1 = `${planet1}-${planet2}`;
  const combo2 = `${planet2}-${planet1}`;
  if (specialCombos[combo1]) return specialCombos[combo1];
  if (specialCombos[combo2]) return specialCombos[combo2];

  // Default to a custom combined message
  return `${p1.emoji}${p2.emoji} Interesting perspective! While one sees this as a ${p1.title.toLowerCase()}, the other experiences it as a ${p2.title.toLowerCase()}. This unique dynamic adds depth to your friendship!`;
}; 