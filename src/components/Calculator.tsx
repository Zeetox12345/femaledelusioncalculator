
import { useState } from "react";
import { CalculatorForm, type CalculatorFormData } from "./calculator/CalculatorForm";
import { CalculatorResults } from "./calculator/CalculatorResults";
import { InfoDialog } from "./calculator/InfoDialog";
import { calculateChances, calculateCatLadyIndex } from "@/utils/calculations";
import { Card } from "./ui/card";

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
            Female Delusion Calculator
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

        <Card className="p-6 space-y-6 text-sm text-muted-foreground fade-in">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-secondary mb-3">How the Female Delusion Calculator Works</h3>
              <div className="space-y-2">
                <p><strong>Data Sources:</strong> The Female Delusion Calculator pulls stats from two major U.S. surveys—one for income/marital status and another for height/BMI.</p>
                <p><strong>Combining Results:</strong> We blend these datasets to estimate how common (or rare) certain traits are in the male population.</p>
                <p><strong>Not Perfect Science:</strong> Because the surveys were conducted separately, there may be some overlap or missing links. However, the Female Delusion Calculator still offers a fun ballpark figure on your ideal man's "rarity."</p>
                <p><strong>Reality Check:</strong> If you get a tiny percentage, it doesn't automatically mean you're doomed to be a cat lady—just keep those expectations in perspective!</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-secondary mb-3">A Quick Example: Putting the Female Delusion Calculator to the Test</h3>
              <div className="space-y-2">
                <p><strong>Your Wishlist:</strong> Let's say you want a 35-year-old guy, at least 6 feet tall, earning six figures, not married, and definitely under the obesity threshold.</p>
                <p><strong>How to Use:</strong> Simply enter these filters into the Female Delusion Calculator and hit "Calculate."</p>
                <p><strong>Likely Outcome:</strong> You might see a super-low percentage (e.g., 2% of all men). Don't panic—stats don't tell the whole story!</p>
                <p><strong>Next Steps:</strong> Adjust your criteria (try a slightly lower income or more flexible height) to see if your odds improve. Remember, the Female Delusion Calculator is all in good fun, and real-life love can defy even the most stubborn statistics!</p>
              </div>
            </div>
          </div>
        </Card>

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
