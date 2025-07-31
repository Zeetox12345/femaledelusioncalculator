import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Heart, Star, Users, CheckCircle } from "lucide-react";

const RelationshipCompatibility = () => {
  const [results, setResults] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    yourAge: "",
    partnerAge: "",
    relationshipLength: "",
    sharedInterests: "",
    communicationStyle: "",
    conflictResolution: "",
    futureGoals: "",
    intimacyLevel: ""
  });

  const calculateCompatibility = () => {
    // Simple compatibility algorithm based on form data
    let score = 50; // Base score
    
    // Age compatibility
    const ageDiff = Math.abs(parseInt(formData.yourAge) - parseInt(formData.partnerAge));
    if (ageDiff <= 2) score += 15;
    else if (ageDiff <= 5) score += 10;
    else if (ageDiff <= 10) score += 5;
    else score -= 5;

    // Shared interests bonus
    const interests = parseInt(formData.sharedInterests);
    score += interests * 3;

    // Communication and conflict resolution
    if (formData.communicationStyle === "excellent") score += 15;
    else if (formData.communicationStyle === "good") score += 10;
    else if (formData.communicationStyle === "fair") score += 5;

    if (formData.conflictResolution === "excellent") score += 15;
    else if (formData.conflictResolution === "good") score += 10;
    else if (formData.conflictResolution === "fair") score += 5;

    // Future goals alignment
    if (formData.futureGoals === "perfectly-aligned") score += 20;
    else if (formData.futureGoals === "mostly-aligned") score += 15;
    else if (formData.futureGoals === "somewhat-aligned") score += 10;
    else if (formData.futureGoals === "different") score -= 10;

    // Intimacy level
    if (formData.intimacyLevel === "excellent") score += 10;
    else if (formData.intimacyLevel === "good") score += 5;

    setResults(Math.min(Math.max(score, 10), 99));
  };

  const isFormValid = Object.values(formData).every(value => Boolean(value));

  const getCompatibilityMessage = (score: number) => {
    if (score >= 85) return "Exceptional compatibility! You two are a perfect match.";
    if (score >= 70) return "Great compatibility! You have a strong foundation for a lasting relationship.";
    if (score >= 55) return "Good compatibility! With some work, you can build something beautiful.";
    if (score >= 40) return "Moderate compatibility. Consider working on key areas together.";
    return "Low compatibility. Consider if this relationship is right for both of you.";
  };

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
            Relationship Compatibility Calculator
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how compatible you and your partner really are with our comprehensive relationship assessment tool
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Calculator Form */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-secondary mb-6 text-center">
                Assess Your Relationship Compatibility
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="yourAge">Your Age</Label>
                  <Input
                    id="yourAge"
                    type="number"
                    placeholder="Enter your age"
                    value={formData.yourAge}
                    onChange={(e) => setFormData(prev => ({ ...prev, yourAge: e.target.value }))}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="partnerAge">Partner's Age</Label>
                  <Input
                    id="partnerAge"
                    type="number"
                    placeholder="Enter partner's age"
                    value={formData.partnerAge}
                    onChange={(e) => setFormData(prev => ({ ...prev, partnerAge: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="relationshipLength">Relationship Length (months)</Label>
                  <Input
                    id="relationshipLength"
                    type="number"
                    placeholder="How long together?"
                    value={formData.relationshipLength}
                    onChange={(e) => setFormData(prev => ({ ...prev, relationshipLength: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sharedInterests">Shared Interests (0-10)</Label>
                  <Input
                    id="sharedInterests"
                    type="number"
                    min="0"
                    max="10"
                    placeholder="Rate shared interests"
                    value={formData.sharedInterests}
                    onChange={(e) => setFormData(prev => ({ ...prev, sharedInterests: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="communicationStyle">Communication Quality</Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, communicationStyle: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="How well do you communicate?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excellent">Excellent - We talk openly about everything</SelectItem>
                      <SelectItem value="good">Good - We communicate well most of the time</SelectItem>
                      <SelectItem value="fair">Fair - We struggle sometimes but try</SelectItem>
                      <SelectItem value="poor">Poor - We have communication issues</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="conflictResolution">Conflict Resolution</Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, conflictResolution: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="How do you handle disagreements?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excellent">Excellent - We resolve conflicts quickly and fairly</SelectItem>
                      <SelectItem value="good">Good - We work through issues together</SelectItem>
                      <SelectItem value="fair">Fair - We struggle but eventually resolve things</SelectItem>
                      <SelectItem value="poor">Poor - We avoid or escalate conflicts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="futureGoals">Future Goals Alignment</Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, futureGoals: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="How aligned are your future goals?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="perfectly-aligned">Perfectly aligned - We want the same things</SelectItem>
                      <SelectItem value="mostly-aligned">Mostly aligned - Minor differences only</SelectItem>
                      <SelectItem value="somewhat-aligned">Somewhat aligned - Some significant differences</SelectItem>
                      <SelectItem value="different">Very different - Major goal conflicts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="intimacyLevel">Intimacy & Connection</Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, intimacyLevel: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Rate your emotional/physical connection" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excellent">Excellent - Strong emotional and physical bond</SelectItem>
                      <SelectItem value="good">Good - Generally strong connection</SelectItem>
                      <SelectItem value="fair">Fair - Connection could be stronger</SelectItem>
                      <SelectItem value="poor">Poor - Limited connection</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                onClick={calculateCompatibility}
                disabled={!isFormValid}
                className="w-full mt-8 py-3 text-lg"
              >
                Calculate Compatibility Score
              </Button>

              {results !== null && (
                <Card className="mt-8 p-6 text-center bg-gradient-to-r from-pink-50 to-purple-50">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Heart className="w-8 h-8 text-red-500" />
                    <span className="text-3xl font-bold text-secondary">{results}%</span>
                    <Star className="w-8 h-8 text-yellow-500" />
                  </div>
                  <p className="text-lg font-medium text-gray-800 mb-2">
                    {getCompatibilityMessage(results)}
                  </p>
                  <p className="text-gray-600">
                    Remember, compatibility can be improved with effort and communication!
                  </p>
                </Card>
              )}
            </Card>

            {/* Educational Content */}
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Understanding Relationship Compatibility
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-lg mb-6">
                  Relationship compatibility isn't just about having things in common—it's about how well you and your partner work together as a team, navigate challenges, and support each other's growth.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Key Factors in Relationship Compatibility</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Communication Styles</h4>
                        <p className="text-gray-600 text-sm">How you express needs, handle disagreements, and share emotions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Core Values</h4>
                        <p className="text-gray-600 text-sm">Fundamental beliefs about life, family, career, and relationships</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Life Goals</h4>
                        <p className="text-gray-600 text-sm">Where you see yourselves in the future, career ambitions, family plans</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Emotional Intelligence</h4>
                        <p className="text-gray-600 text-sm">Ability to understand and manage emotions, both yours and your partner's</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Conflict Resolution</h4>
                        <p className="text-gray-600 text-sm">How you handle disagreements and work through problems together</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Intimacy Levels</h4>
                        <p className="text-gray-600 text-sm">Physical, emotional, and intellectual connection and compatibility</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Lifestyle Compatibility</h4>
                        <p className="text-gray-600 text-sm">Daily routines, social preferences, spending habits, and life pace</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Growth Mindset</h4>
                        <p className="text-gray-600 text-sm">Willingness to grow, adapt, and work on the relationship together</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">Compatibility vs. Chemistry</h3>
                <p className="mb-6">
                  It's important to distinguish between chemistry and compatibility. Chemistry is that instant attraction and excitement you feel, while compatibility is about long-term harmony and the ability to build a life together.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-3">Chemistry</h4>
                    <ul className="text-red-700 space-y-2 text-sm">
                      <li>• Instant attraction</li>
                      <li>• Passionate feelings</li>
                      <li>• Excitement and butterflies</li>
                      <li>• Physical attraction</li>
                      <li>• Can be temporary</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-3">Compatibility</h4>
                    <ul className="text-green-700 space-y-2 text-sm">
                      <li>• Shared values and goals</li>
                      <li>• Effective communication</li>
                      <li>• Mutual respect</li>
                      <li>• Conflict resolution skills</li>
                      <li>• Builds over time</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">Improving Relationship Compatibility</h3>
                <p className="mb-6">
                  The good news is that compatibility can be improved through conscious effort:
                </p>
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                  <li><strong>Improve Communication:</strong> Practice active listening and expressing yourself clearly</li>
                  <li><strong>Understand Differences:</strong> Accept that you're different people with different perspectives</li>
                  <li><strong>Work on Conflicts:</strong> Learn healthy ways to disagree and resolve issues</li>
                  <li><strong>Align Goals:</strong> Discuss your futures and find common ground</li>
                  <li><strong>Build Intimacy:</strong> Make time for emotional and physical connection</li>
                  <li><strong>Grow Together:</strong> Support each other's personal development</li>
                </ol>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-bold text-secondary mb-4">Compatibility Score Guide</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span><strong>85-100%:</strong> Exceptional compatibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span><strong>70-84%:</strong> Great compatibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span><strong>55-69%:</strong> Good compatibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span><strong>40-54%:</strong> Moderate compatibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span><strong>Below 40%:</strong> Low compatibility</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold text-secondary mb-4">Related Tools</h3>
              <div className="space-y-3">
                <Link to="/dating-standards" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="font-medium">Dating Standards Test</div>
                  <div className="text-sm text-gray-600">Check your expectations</div>
                </Link>
                <Link to="/relationship-advice" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="font-medium">Relationship Advice</div>
                  <div className="text-sm text-gray-600">Professional tips</div>
                </Link>
                <Link to="/dating-tips" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="font-medium">Dating Tips</div>
                  <div className="text-sm text-gray-600">Modern dating guidance</div>
                </Link>
              </div>
            </Card>

            <Card className="p-6 bg-purple-50">
              <h3 className="text-lg font-bold text-purple-800 mb-3">💡 Remember</h3>
              <p className="text-purple-700 text-sm">
                No relationship is perfect, and compatibility scores are just one tool. The most important thing is whether you both are committed to growing together and building something meaningful.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelationshipCompatibility;