
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { CalculatorForm, type CalculatorFormData } from "./calculator/CalculatorForm";
import { CalculatorResults } from "./calculator/CalculatorResults";
import { InfoDialog } from "./calculator/InfoDialog";
import { calculateChances, calculateCatLadyIndex } from "@/utils/calculations";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Heart, Users, Brain, MessageSquare, Target, Camera } from "lucide-react";

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
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleCalculate = () => {
    const chance = calculateChances(formData);
    const catLadyIndex = calculateCatLadyIndex(chance);
    setResults({ chance, catLadyIndex });
    
    // Scroll to results after a short delay to ensure the results have rendered
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 100);
  };

  const isFormValid = Object.values(formData).every((value) => 
    typeof value === "boolean" ? true : Boolean(value)
  );

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 px-4 py-12">
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

        {results && (
          <div ref={resultsRef}>
            <CalculatorResults chance={results.chance} catLadyIndex={results.catLadyIndex} />
          </div>
        )}

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

        {/* Related Pages Section */}
        <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50">
          <h2 className="text-2xl font-bold text-secondary text-center mb-6">
            Explore More Dating Tools & Advice
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Link to="/dating-standards" className="group">
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <Heart className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-lg font-bold text-secondary mb-2">Dating Standards</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Understand if your expectations are realistic and learn about healthy relationship standards.
                </p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            </Link>

            <Link to="/relationship-compatibility" className="group">
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <Users className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-lg font-bold text-secondary mb-2">Compatibility Test</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Test how compatible you and your partner are with our comprehensive assessment tool.
                </p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  Take Test <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            </Link>

            <Link to="/dating-tips" className="group">
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <MessageSquare className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-lg font-bold text-secondary mb-2">Dating Tips</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Expert advice for modern women to navigate dating successfully and find meaningful connections.
                </p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  Get Tips <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            </Link>

            <Link to="/male-standards" className="group">
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <Target className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="text-lg font-bold text-secondary mb-2">Male Standards</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Discover what percentage of women meet typical male dating standards and expectations.
                </p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  Check Now <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            </Link>

            <Link to="/relationship-advice" className="group">
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <Brain className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-lg font-bold text-secondary mb-2">Relationship Psychology</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Science-backed relationship advice to build stronger, healthier romantic connections.
                </p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            </Link>

            <Link to="/dating-profile-tips" className="group">
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <Camera className="w-8 h-8 text-pink-500 mb-4" />
                <h3 className="text-lg font-bold text-secondary mb-2">Profile Tips</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Create an irresistible dating profile that attracts quality matches and shows your best self.
                </p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  Optimize Profile <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            </Link>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              Get the complete picture of modern dating with our comprehensive tools and expert advice.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/dating-standards">
                <Button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600">
                  Explore All Tools
                </Button>
              </Link>
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
