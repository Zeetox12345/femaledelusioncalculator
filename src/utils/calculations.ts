
interface CalculatorFormData {
  ageRange: string;
  income: string;
  race: string;
  height: string;
  excludeMarried: boolean;
  excludeObese: boolean;
}

// These are approximate percentages based on US demographic data
const demographicFactors = {
  ageRange: {
    "18-25": 0.4,
    "26-35": 0.3,
    "36-45": 0.2,
    "46+": 0.1,
  },
  income: {
    "0-40000": 0.45,
    "40000-80000": 0.35,
    "80000-120000": 0.15,
    "120000+": 0.05,
  },
  race: {
    all: 1,
    white: 0.6,
    black: 0.13,
    asian: 0.06,
  },
  height: {
    any: 1,
    "170": 0.85,
    "175": 0.7,
    "178": 0.5,
    "183": 0.3,
    "188": 0.1,
  },
};

export function calculateChances(formData: CalculatorFormData): number {
  const ageRangeFactor = demographicFactors.ageRange[formData.ageRange as keyof typeof demographicFactors.ageRange];
  const incomeFactor = demographicFactors.income[formData.income as keyof typeof demographicFactors.income];
  const raceFactor = demographicFactors.race[formData.race as keyof typeof demographicFactors.race];
  const heightFactor = demographicFactors.height[formData.height as keyof typeof demographicFactors.height];

  let chance = 100 * ageRangeFactor * incomeFactor * raceFactor * heightFactor;

  if (formData.excludeMarried) {
    chance *= 0.5;
  }

  if (formData.excludeObese) {
    chance *= 0.65;
  }

  return Math.min(Math.max(chance, 0), 100);
}

export function calculateCatLadyIndex(chance: number): number {
  // More realistic calculation that creates a curve
  // Lower chances result in higher indices, but with more variation
  const baseIndex = 10 - (chance / 20); // This creates a base scale from 0-10
  const randomVariation = Math.random() * 2 - 1; // Adds ±1 random variation
  const finalIndex = Math.round(baseIndex + randomVariation);
  
  // Ensure the index stays between 1 and 10
  return Math.min(Math.max(finalIndex, 1), 10);
}
