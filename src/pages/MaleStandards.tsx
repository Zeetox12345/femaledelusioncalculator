import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Users, TrendingDown, AlertCircle, Target } from "lucide-react";

const MaleStandards = () => {
  const [results, setResults] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    ageRange: "",
    attractiveness: "",
    bodyType: "",
    education: "",
    personality: "",
    lifestyle: "",
    careerAmbition: "",
    socialStatus: ""
  });

  const calculateMatch = () => {
    // Algorithm for calculating what percentage of women meet male preferences
    let basePercentage = 60; // Start with base percentage
    
    // Age preferences
    if (formData.ageRange === "18-25") basePercentage *= 0.4;
    else if (formData.ageRange === "26-30") basePercentage *= 0.5;
    else if (formData.ageRange === "31-35") basePercentage *= 0.7;
    else if (formData.ageRange === "any") basePercentage *= 1.0;

    // Attractiveness standards
    if (formData.attractiveness === "model-level") basePercentage *= 0.1;
    else if (formData.attractiveness === "very-attractive") basePercentage *= 0.3;
    else if (formData.attractiveness === "above-average") basePercentage *= 0.6;
    else if (formData.attractiveness === "average") basePercentage *= 0.8;

    // Body type preferences
    if (formData.bodyType === "fitness-model") basePercentage *= 0.15;
    else if (formData.bodyType === "slim-athletic") basePercentage *= 0.4;
    else if (formData.bodyType === "average") basePercentage *= 0.7;
    else if (formData.bodyType === "any") basePercentage *= 1.0;

    // Education standards
    if (formData.education === "advanced-degree") basePercentage *= 0.3;
    else if (formData.education === "college") basePercentage *= 0.6;
    else if (formData.education === "any") basePercentage *= 1.0;

    // Personality traits
    if (formData.personality === "perfect") basePercentage *= 0.2;
    else if (formData.personality === "very-compatible") basePercentage *= 0.5;
    else if (formData.personality === "somewhat-compatible") basePercentage *= 0.8;

    // Lifestyle compatibility
    if (formData.lifestyle === "identical") basePercentage *= 0.3;
    else if (formData.lifestyle === "very-similar") basePercentage *= 0.6;
    else if (formData.lifestyle === "somewhat-similar") basePercentage *= 0.8;

    setResults(Math.min(Math.max(Math.round(basePercentage), 1), 85));
  };

  const isFormValid = Object.values(formData).every(value => Boolean(value));

  const getResultMessage = (percentage: number) => {
    if (percentage >= 50) return "Your standards are quite reasonable and achievable!";
    if (percentage >= 25) return "Your standards are high but realistic with some patience.";
    if (percentage >= 10) return "Your standards are very high - consider what's truly important.";
    return "Your standards might be unrealistic for most men to achieve.";
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
            Male Standards Calculator
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What percentage of women actually meet your dating standards? Find out if your expectations are realistic in today's dating market.
          </p>
        </header>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center">
            <Users className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-secondary">78%</h3>
            <p className="text-gray-600">Of men have unrealistic physical standards</p>
          </Card>
          <Card className="p-6 text-center">
            <TrendingDown className="w-8 h-8 text-red-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-secondary">3.2%</h3>
            <p className="text-gray-600">Average match rate for high male standards</p>
          </Card>
          <Card className="p-6 text-center">
            <AlertCircle className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-secondary">Rising</h3>
            <p className="text-gray-600">Male standards continue to increase</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Calculator */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-secondary mb-6 text-center">
                Calculate Your Standards Reality Check
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="ageRange">Preferred Age Range</Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, ageRange: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select age preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="18-25">18-25 years old</SelectItem>
                      <SelectItem value="26-30">26-30 years old</SelectItem>
                      <SelectItem value="31-35">31-35 years old</SelectItem>
                      <SelectItem value="36-40">36-40 years old</SelectItem>
                      <SelectItem value="any">Any age (realistic range)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="attractiveness">Physical Attractiveness Standard</Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, attractiveness: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select attractiveness standard" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="model-level">Model/Instagram level (9-10/10)</SelectItem>
                      <SelectItem value="very-attractive">Very attractive (7-8/10)</SelectItem>
                      <SelectItem value="above-average">Above average (6-7/10)</SelectItem>
                      <SelectItem value="average">Average attractiveness (5-6/10)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bodyType">Body Type Preference</Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, bodyType: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select body type preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fitness-model">Fitness model/athlete body</SelectItem>
                      <SelectItem value="slim-athletic">Slim and athletic</SelectItem>
                      <SelectItem value="slim">Just slim/petite</SelectItem>
                      <SelectItem value="average">Average body type</SelectItem>
                      <SelectItem value="any">Any body type</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="education">Education Requirements</Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, education: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select education standard" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="advanced-degree">Graduate/Professional degree</SelectItem>
                      <SelectItem value="college">Bachelor's degree</SelectItem>
                      <SelectItem value="some-college">Some college education</SelectItem>
                      <SelectItem value="any">Any education level</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="personality">Personality Compatibility</Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, personality: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="How perfect must personality be?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="perfect">Perfect match - everything aligns</SelectItem>
                      <SelectItem value="very-compatible">Very compatible - minor differences</SelectItem>
                      <SelectItem value="somewhat-compatible">Somewhat compatible - some differences</SelectItem>
                      <SelectItem value="basic-compatibility">Basic compatibility is enough</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lifestyle">Lifestyle Alignment</Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, lifestyle: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Lifestyle compatibility level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="identical">Identical lifestyle and interests</SelectItem>
                      <SelectItem value="very-similar">Very similar lifestyle</SelectItem>
                      <SelectItem value="somewhat-similar">Somewhat similar lifestyle</SelectItem>
                      <SelectItem value="different-ok">Different lifestyles are okay</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="careerAmbition">Career/Ambition Level</Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, careerAmbition: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Career ambition requirements" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high-achiever">High achiever/executive level</SelectItem>
                      <SelectItem value="career-focused">Career-focused professional</SelectItem>
                      <SelectItem value="stable-job">Stable job is enough</SelectItem>
                      <SelectItem value="any">Any employment situation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="socialStatus">Social Status Importance</Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, socialStatus: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Social status requirements" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high-status">High social status required</SelectItem>
                      <SelectItem value="some-status">Some social status preferred</SelectItem>
                      <SelectItem value="normal">Normal social circle is fine</SelectItem>
                      <SelectItem value="not-important">Not important at all</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                onClick={calculateMatch}
                disabled={!isFormValid}
                className="w-full mt-8 py-3 text-lg"
              >
                Calculate Reality Check
              </Button>

              {results !== null && (
                <Card className="mt-8 p-6 text-center bg-gradient-to-r from-blue-50 to-purple-50">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Target className="w-8 h-8 text-blue-500" />
                    <span className="text-3xl font-bold text-secondary">{results}%</span>
                  </div>
                  <p className="text-lg font-medium text-gray-800 mb-2">
                    {getResultMessage(results)}
                  </p>
                  <p className="text-gray-600">
                    Approximately {results}% of women might meet your current standards.
                  </p>
                </Card>
              )}
            </Card>

            {/* Educational Content */}
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-secondary mb-6">
                The Reality of Male Dating Standards
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-lg mb-6">
                  Modern men face unique challenges in dating, often developing unrealistic standards influenced by social media, dating apps, and cultural expectations. Understanding the mathematics behind your preferences can help you find meaningful connections.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Common Male Dating Standard Myths</h3>
                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-red-500 pl-6">
                    <h4 className="font-semibold mb-2">Myth: "I deserve a 10/10 because I'm a good guy"</h4>
                    <p className="text-gray-700 text-sm">
                      Reality: Attraction involves many factors beyond being a good person. Focus on becoming the best version of yourself rather than feeling entitled to specific types of partners.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h4 className="font-semibold mb-2">Myth: "All women my age are damaged/used up"</h4>
                    <p className="text-gray-700 text-sm">
                      Reality: This mindset is toxic and counterproductive. Women of all ages bring value and experience to relationships. Focus on compatibility and connection.
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-6">
                    <h4 className="font-semibold mb-2">Myth: "I need to find someone with no dating history"</h4>
                    <p className="text-gray-700 text-sm">
                      Reality: Most people have dating history by adulthood. What matters is how they've learned and grown from their experiences.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="font-semibold mb-2">Myth: "If I improve myself, I'll attract model-level women"</h4>
                    <p className="text-gray-700 text-sm">
                      Reality: Self-improvement attracts better matches overall, but doesn't guarantee access to any specific person or "level" of attractiveness.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">The Mathematics of Male Standards</h3>
                <p className="mb-4">
                  Let's look at some realistic statistics about what different standards actually mean:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold mb-3">Physical Attractiveness Reality Check</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>9-10/10 attractiveness:</strong> ~5% of women (includes genetics, fitness, grooming, style)</li>
                    <li>• <strong>7-8/10 attractiveness:</strong> ~20% of women</li>
                    <li>• <strong>6-7/10 attractiveness:</strong> ~35% of women</li>
                    <li>• <strong>Average attractiveness:</strong> ~40% of women</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-2">
                    *Attractiveness is subjective and varies by personal preference
                  </p>
                </div>

                <h3 className="text-xl font-semibold mb-4">Healthy vs. Unrealistic Male Standards</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Healthy Standards</h4>
                    <ul className="text-green-700 space-y-1">
                      <li>• Compatible values and goals</li>
                      <li>• Mutual respect and kindness</li>
                      <li>• Emotional maturity</li>
                      <li>• Basic physical attraction</li>
                      <li>• Good communication skills</li>
                      <li>• Personal responsibility</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Potentially Unrealistic</h4>
                    <ul className="text-red-700 space-y-1">
                      <li>• Model-level physical appearance</li>
                      <li>• No dating/relationship history</li>
                      <li>• Perfect personality match</li>
                      <li>• Specific body measurements</li>
                      <li>• Celebrity-level beauty</li>
                      <li>• Submission without partnership</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">What Actually Matters for Relationship Success</h3>
                <p className="mb-4">
                  Research consistently shows that these factors predict relationship satisfaction:
                </p>
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                  <li><strong>Emotional Intelligence:</strong> The ability to understand and manage emotions</li>
                  <li><strong>Communication Skills:</strong> How well you both express needs and resolve conflicts</li>
                  <li><strong>Shared Values:</strong> Agreement on major life priorities and beliefs</li>
                  <li><strong>Mutual Respect:</strong> Treating each other as equals and partners</li>
                  <li><strong>Physical Attraction:</strong> Some level of attraction (doesn't need to be extreme)</li>
                  <li><strong>Growth Mindset:</strong> Willingness to work on the relationship together</li>
                </ol>

                <h3 className="text-xl font-semibold mb-4">Improving Your Dating Success</h3>
                <p className="mb-4">
                  Instead of focusing solely on finding the "perfect" woman, consider:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Become your best self:</strong> Work on your physical health, emotional intelligence, and life skills</li>
                  <li><strong>Expand your social circle:</strong> Meet women through hobbies, activities, and mutual friends</li>
                  <li><strong>Practice social skills:</strong> Develop genuine conversation skills and emotional awareness</li>
                  <li><strong>Focus on connection:</strong> Look for women you genuinely enjoy spending time with</li>
                  <li><strong>Be realistic about timing:</strong> Building a great relationship takes time and patience</li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-bold text-secondary mb-4">Male Standards Reality</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Model-level looks</span>
                  <span className="font-semibold text-red-600">~5% of women</span>
                </div>
                <div className="flex justify-between">
                  <span>Age 18-25 (for 30+ men)</span>
                  <span className="font-semibold text-orange-600">~15% willing</span>
                </div>
                <div className="flex justify-between">
                  <span>Fitness model body</span>
                  <span className="font-semibold text-red-600">~8% of women</span>
                </div>
                <div className="flex justify-between">
                  <span>No dating history</span>
                  <span className="font-semibold text-red-600">~2% of adults</span>
                </div>
                <div className="flex justify-between">
                  <span>Graduate degree</span>
                  <span className="font-semibold text-blue-600">~30% of women</span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between font-bold">
                  <span>All high standards combined</span>
                  <span className="text-red-600">~0.5% of women</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold text-secondary mb-4">Related Resources</h3>
              <div className="space-y-3">
                <Link to="/dating-standards" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="font-medium">Female Standards Test</div>
                  <div className="text-sm text-gray-600">See female perspectives</div>
                </Link>
                <Link to="/relationship-compatibility" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="font-medium">Compatibility Test</div>
                  <div className="text-sm text-gray-600">Check relationship fit</div>
                </Link>
                <Link to="/relationship-advice" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="font-medium">Relationship Advice</div>
                  <div className="text-sm text-gray-600">Expert guidance</div>
                </Link>
              </div>
            </Card>

            <Card className="p-6 bg-blue-50">
              <h3 className="text-lg font-bold text-blue-800 mb-3">💡 Key Insight</h3>
              <p className="text-blue-700 text-sm">
                The most successful men in dating focus on becoming attractive partners themselves rather than demanding perfection from others. Work on yourself, be realistic, and stay open to genuine connections.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaleStandards;