
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

interface CalculatorResultsProps {
  chance: number;
  catLadyIndex: number;
}

export function CalculatorResults({ chance, catLadyIndex }: CalculatorResultsProps) {
  return (
    <div className="space-y-8">
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
    </div>
  );
}
