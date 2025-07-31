import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { CalculatorForm, type CalculatorFormData } from "@/components/calculator/CalculatorForm";
import { CalculatorResults } from "@/components/calculator/CalculatorResults";
import { calculateChances, calculateCatLadyIndex } from "@/utils/calculations";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Users, TrendingUp } from "lucide-react";

const initialFormData: CalculatorFormData = {
  ageRange: "",
  income: "",
  race: "",
  height: "",
  excludeMarried: true,
  excludeObese: false,
};

const DatingStandards = () => {
  const [formData, setFormData] = useState<CalculatorFormData>(initialFormData);
  const [results, setResults] = useState<{ chance: number; catLadyIndex: number } | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleCalculate = () => {
    const chance = calculateChances(formData);
    const catLadyIndex = calculateCatLadyIndex(chance);
    setResults({ chance, catLadyIndex });
    
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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Navigation */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Calculator
          </Link>
        </div>

        {/* Header */}
        <header className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold text-secondary md:text-5xl">
            Dating Standards & Relationship Expectations
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding realistic dating standards in 2025: What percentage of men actually meet your criteria?
          </p>
        </header>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center">
            <Heart className="w-8 h-8 text-red-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-secondary">2.4%</h3>
            <p className="text-gray-600">Average match rate for high standards</p>
          </Card>
          <Card className="p-6 text-center">
            <Users className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-secondary">68%</h3>
            <p className="text-gray-600">Of women have unrealistic expectations</p>
          </Card>
          <Card className="p-6 text-center">
            <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-secondary">Rising</h3>
            <p className="text-gray-600">Standards continue to increase</p>
          </Card>
        </div>

        {/* Calculator Section */}
        <Card className="p-8 mb-12">
          <h2 className="text-2xl font-bold text-secondary mb-6 text-center">
            Test Your Dating Standards
          </h2>
          <CalculatorForm 
            formData={formData}
            setFormData={setFormData}
            onCalculate={handleCalculate}
            isFormValid={isFormValid}
          />

          {results && (
            <div ref={resultsRef} className="mt-8">
              <CalculatorResults chance={results.chance} catLadyIndex={results.catLadyIndex} />
            </div>
          )}
        </Card>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-secondary mb-6">
                The Reality of Modern Dating Standards
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-lg mb-6">
                  In today's dating landscape, having high standards isn't necessarily bad – but understanding the mathematical reality behind your preferences is crucial for dating success.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Why Dating Standards Matter</h3>
                <p className="mb-6">
                  Your dating standards directly impact your pool of potential partners. While it's important to have standards that reflect your values and needs, unrealistic expectations can lead to prolonged singleness and dating frustration.
                </p>

                <h3 className="text-xl font-semibold mb-4">The Mathematics of Attraction</h3>
                <p className="mb-6">
                  When you combine multiple criteria – height, income, age, appearance, marital status – the mathematics become quite stark. For example:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Height (6ft+):</strong> Only 30% of men meet this requirement</li>
                  <li><strong>Income ($100k+):</strong> Roughly 15% of men in this bracket</li>
                  <li><strong>Single & Never Married:</strong> Eliminates another 40% (age dependent)</li>
                  <li><strong>Age Range (28-35):</strong> Narrows the field significantly</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">Healthy vs. Unrealistic Standards</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Healthy Standards</h4>
                    <ul className="text-green-700 space-y-1">
                      <li>• Emotional maturity</li>
                      <li>• Shared values</li>
                      <li>• Mutual respect</li>
                      <li>• Financial responsibility</li>
                      <li>• Compatible lifestyle</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Potentially Unrealistic</h4>
                    <ul className="text-red-700 space-y-1">
                      <li>• Specific height requirements</li>
                      <li>• Exact income thresholds</li>
                      <li>• Physical perfection</li>
                      <li>• No dating history</li>
                      <li>• Celebrity-level looks</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">The Psychology Behind High Standards</h3>
                <p className="mb-6">
                  Research shows that many modern women have developed increasingly high standards due to several factors:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Social Media Influence:</strong> Constant exposure to highlight reels creates unrealistic expectations</li>
                  <li><strong>Economic Independence:</strong> Financial freedom allows for higher selectivity</li>
                  <li><strong>Cultural Messaging:</strong> "Don't settle" advice taken to extremes</li>
                  <li><strong>Previous Disappointments:</strong> Bad experiences leading to overcorrection</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">Finding Balance in Your Standards</h3>
                <p className="mb-6">
                  The goal isn't to lower your standards dramatically, but to focus on what truly matters for long-term compatibility:
                </p>
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                  <li><strong>Identify your non-negotiables:</strong> What values and traits are absolutely essential?</li>
                  <li><strong>Separate wants from needs:</strong> Be honest about preferences vs. requirements</li>
                  <li><strong>Consider growth potential:</strong> Can someone develop the qualities you want?</li>
                  <li><strong>Focus on character:</strong> Prioritize integrity, kindness, and emotional intelligence</li>
                  <li><strong>Be realistic about yourself:</strong> Ensure your standards align with what you bring to the table</li>
                </ol>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold text-secondary mb-6">
                Common Dating Standards Myths Debunked
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold mb-2">Myth: "There's someone for everyone"</h3>
                  <p className="text-gray-700">
                    Reality: While theoretically true, extremely specific standards can make finding "the one" statistically unlikely within a reasonable timeframe.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold mb-2">Myth: "Never settle"</h3>
                  <p className="text-gray-700">
                    Reality: There's a difference between settling on core values and being flexible on preferences. Healthy relationships require compromise.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold mb-2">Myth: "High standards attract high-quality men"</h3>
                  <p className="text-gray-700">
                    Reality: Overly specific standards often filter out potentially great partners who don't meet arbitrary criteria.
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-lg font-semibold mb-2">Myth: "If I lower my standards, I'll attract worse men"</h3>
                  <p className="text-gray-700">
                    Reality: Adjusting superficial preferences while maintaining core values often leads to discovering amazing partners you might have overlooked.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-bold text-secondary mb-4">Related Tools</h3>
              <div className="space-y-3">
                <Link to="/relationship-compatibility" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="font-medium">Compatibility Calculator</div>
                  <div className="text-sm text-gray-600">Test relationship compatibility</div>
                </Link>
                <Link to="/male-standards" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="font-medium">Male Standards Test</div>
                  <div className="text-sm text-gray-600">What men really want</div>
                </Link>
                <Link to="/dating-tips" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="font-medium">Dating Tips</div>
                  <div className="text-sm text-gray-600">Modern dating advice</div>
                </Link>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold text-secondary mb-4">Quick Standards Check</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Height 6ft+</span>
                  <span className="font-semibold">30% of men</span>
                </div>
                <div className="flex justify-between">
                  <span>Income $100k+</span>
                  <span className="font-semibold">15% of men</span>
                </div>
                <div className="flex justify-between">
                  <span>College educated</span>
                  <span className="font-semibold">35% of men</span>
                </div>
                <div className="flex justify-between">
                  <span>Never married (30+)</span>
                  <span className="font-semibold">25% of men</span>
                </div>
                <div className="flex justify-between">
                  <span>Physically fit</span>
                  <span className="font-semibold">40% of men</span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between font-bold">
                  <span>All combined</span>
                  <span className="text-red-600">~0.8% of men</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-blue-50">
              <h3 className="text-lg font-bold text-blue-800 mb-3">💡 Pro Tip</h3>
              <p className="text-blue-700 text-sm">
                Focus on finding someone who shares your values and treats you well. Physical and material preferences are often less important for long-term happiness than emotional compatibility.
              </p>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="p-8 text-center bg-gradient-to-r from-pink-50 to-purple-50">
          <h2 className="text-2xl font-bold text-secondary mb-4">
            Ready to Find Realistic Love?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Understanding your standards is just the first step. Explore our other tools to improve your dating success and find meaningful connections.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/dating-tips">
              <Button className="bg-pink-600 hover:bg-pink-700">
                Get Dating Tips
              </Button>
            </Link>
            <Link to="/relationship-advice">
              <Button variant="outline">
                Relationship Advice
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DatingStandards;