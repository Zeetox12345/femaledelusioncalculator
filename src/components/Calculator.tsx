
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { calculateChances, calculateCatLadyIndex } from "@/utils/calculations";
import { Heart, Info } from "lucide-react";

interface CalculatorFormData {
  ageRange: string;
  income: string;
  race: string;
  height: string;
  excludeMarried: boolean;
  excludeObese: boolean;
}

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

        <Card className="p-6 space-y-6">
          <div className="space-y-4">
            <div>
              <Label className="input-label">Age Range</Label>
              <Select
                value={formData.ageRange}
                onValueChange={(value) =>
                  setFormData({ ...formData, ageRange: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select age range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="18-25">18-25</SelectItem>
                  <SelectItem value="26-35">26-35</SelectItem>
                  <SelectItem value="36-45">36-45</SelectItem>
                  <SelectItem value="46+">46+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="input-label">Desired Income</Label>
              <Select
                value={formData.income}
                onValueChange={(value) =>
                  setFormData({ ...formData, income: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select income range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-40000">Under $40,000</SelectItem>
                  <SelectItem value="40000-80000">$40,000 - $80,000</SelectItem>
                  <SelectItem value="80000-120000">$80,000 - $120,000</SelectItem>
                  <SelectItem value="120000+">$120,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="input-label">Race</Label>
              <Select
                value={formData.race}
                onValueChange={(value) => setFormData({ ...formData, race: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select race" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="white">Non-Hispanic White</SelectItem>
                  <SelectItem value="black">Pure Black</SelectItem>
                  <SelectItem value="asian">Pure Asian</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="input-label">Minimum Height</Label>
              <Select
                value={formData.height}
                onValueChange={(value) =>
                  setFormData({ ...formData, height: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select minimum height" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any height</SelectItem>
                  <SelectItem value="170">5'7" (170 cm)</SelectItem>
                  <SelectItem value="175">5'9" (175 cm)</SelectItem>
                  <SelectItem value="178">5'10" (178 cm)</SelectItem>
                  <SelectItem value="183">6'0" (183 cm)</SelectItem>
                  <SelectItem value="188">6'2" (188 cm)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="excludeMarried"
                  checked={formData.excludeMarried}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, excludeMarried: checked as boolean })
                  }
                />
                <label
                  htmlFor="excludeMarried"
                  className="text-sm text-muted-foreground"
                >
                  Exclude married men
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="excludeObese"
                  checked={formData.excludeObese}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, excludeObese: checked as boolean })
                  }
                />
                <label
                  htmlFor="excludeObese"
                  className="text-sm text-muted-foreground"
                >
                  Exclude obese men (BMI > 30)
                </label>
              </div>
            </div>
          </div>

          <Button
            className="w-full"
            onClick={handleCalculate}
            disabled={!isFormValid}
          >
            Calculate My Chances
          </Button>
        </Card>

        {results && (
          <Card className="p-6 space-y-6 fade-in">
            <div className="text-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-secondary">
                  Your Results
                </h2>
                <p className="text-4xl font-bold text-primary">
                  {results.chance.toFixed(2)}%
                </p>
                <p className="text-sm text-muted-foreground">
                  chance of finding your dream man
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <Heart className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Cat Lady Index</h3>
                </div>
                <p className="text-3xl font-bold text-secondary">
                  {results.catLadyIndex}/10
                </p>
              </div>

              <p className="text-sm text-muted-foreground italic">
                {results.chance < 1
                  ? "Looks like these men are one in a million... but never say never!"
                  : "There's hope! Keep your standards high but your heart open."}
              </p>
            </div>
          </Card>
        )}

        <footer className="text-center space-y-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="link" className="text-muted-foreground">
                <Info className="w-4 h-4 mr-2" />
                Data Sources & Limitations
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>About Our Data</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                  Income and marital status data comes from the 2023 Annual Social
                  and Economic Supplement (ASEC) of the Current Population Survey
                  (CPS) by the U.S. Census Bureau.
                </p>
                <p>
                  Height and body mass index (BMI) statistics are derived from the
                  2017–2018 National Health and Nutrition Examination Survey
                  (NHANES) by the National Center for Health Statistics.
                </p>
                <p>
                  Note: Since our data comes from different sources, the final
                  percentage is an approximation. Potential correlations between
                  factors are not accounted for.
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </footer>
      </div>
    </div>
  );
}
