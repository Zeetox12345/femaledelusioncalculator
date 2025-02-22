
import { Dispatch, SetStateAction } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface CalculatorFormData {
  ageRange: string;
  income: string;
  race: string;
  height: string;
  excludeMarried: boolean;
  excludeObese: boolean;
}

interface CalculatorFormProps {
  formData: CalculatorFormData;
  setFormData: Dispatch<SetStateAction<CalculatorFormData>>;
  onCalculate: () => void;
  isFormValid: boolean;
}

export function CalculatorForm({ formData, setFormData, onCalculate, isFormValid }: CalculatorFormProps) {
  return (
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
              Exclude obese men (BMI &gt; 30)
            </label>
          </div>
        </div>
      </div>

      <Button
        className="w-full calculate-btn"
        onClick={onCalculate}
        disabled={!isFormValid}
      >
        Calculate My Chances
      </Button>
    </Card>
  );
}
