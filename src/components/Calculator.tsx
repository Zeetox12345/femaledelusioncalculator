
import { useState } from "react";
import { CalculatorForm, type CalculatorFormData } from "./calculator/CalculatorForm";
import { CalculatorResults } from "./calculator/CalculatorResults";
import { InfoDialog } from "./calculator/InfoDialog";
import { calculateChances, calculateCatLadyIndex } from "@/utils/calculations";

const initialFormData: CalculatorFormData = {
  ageRange: "",
  income: "",
  race: "",
  height: "",
  excludeMarried: true,
  excludeObese: false,
};

export function Calculator() {
  const [formData, setFormData] = useState<CalculatorFormData>(initialFormData);
  const [results, setResults] = useState<{ chance: number; catLadyIndex: number } | null>(null);

  const handleCalculate = () => {
    const chance = calculateChances(formData);
    const catLadyIndex = calculateCatLadyIndex(chance);
    setResults({ chance, catLadyIndex });
  };

  const isFormValid = Object.values(formData).every((value) => 
    typeof value === "boolean" ? true : Boolean(value)
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-4 py-12">
      <div className="max-w-lg mx-auto space-y-8">
        <header className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-secondary md:text-4xl">
            Delusion Female Calculator
          </h1>
          <p className="text-muted-foreground">
            Discover the odds of finding your dream man
          </p>
        </header>

        <CalculatorForm 
          formData={formData}
          setFormData={setFormData}
          onCalculate={handleCalculate}
          isFormValid={isFormValid}
        />

        {results && <CalculatorResults chance={results.chance} catLadyIndex={results.catLadyIndex} />}

        <footer className="text-center space-y-4">
          <InfoDialog />
          <p className="text-sm text-muted-foreground mt-8">
            © 2025 Delusion Female Calculator. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
