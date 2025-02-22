
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

interface CalculatorResultsProps {
  chance: number;
  catLadyIndex: number;
}

export function CalculatorResults({ chance, catLadyIndex }: CalculatorResultsProps) {
  return (
    <Card className="p-6 space-y-6 fade-in">
      <div className="text-center space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-secondary">
            Your Results
          </h2>
          <p className="text-4xl font-bold text-primary">
            {chance.toFixed(2)}%
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
            {catLadyIndex}/10
          </p>
        </div>

        <p className="text-sm text-muted-foreground italic">
          {chance < 1
            ? "Looks like these men are one in a million... but never say never!"
            : "There's hope! Keep your standards high but your heart open."}
        </p>
      </div>
    </Card>
  );
}
