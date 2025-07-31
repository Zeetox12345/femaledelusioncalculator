import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Calculator, Heart, ArrowRight, Users, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";

const DatingAgeCalculator = () => {
  const [userAge, setUserAge] = useState<string>("");
  const [partnerAge, setPartnerAge] = useState<string>("");
  const [result, setResult] = useState<any>(null);

  const calculateAgeGap = () => {
    const userAgeNum = parseInt(userAge);
    const partnerAgeNum = parseInt(partnerAge);

    if (!userAgeNum || !partnerAgeNum || userAgeNum < 18 || partnerAgeNum < 18) {
      setResult({
        error: "Please enter valid ages (18 or older) for both people."
      });
      return;
    }

    const ageDifference = Math.abs(userAgeNum - partnerAgeNum);
    const olderAge = Math.max(userAgeNum, partnerAgeNum);
    const youngerAge = Math.min(userAgeNum, partnerAgeNum);
    
    // Half plus seven rule
    const halfPlusSevenMin = Math.floor(olderAge / 2) + 7;
    const halfPlusSevenMax = (youngerAge - 7) * 2;
    
    // Social acceptability calculations
    let socialAcceptability = "Socially Acceptable";
    let ruleCompliant = true;
    let concerns = [];

    if (youngerAge < halfPlusSevenMin) {
      ruleCompliant = false;
      socialAcceptability = "May Raise Social Concerns";
      concerns.push("Violates the 'half plus seven' social guideline");
    }

    if (ageDifference > 20) {
      concerns.push("Very large age gap may indicate different life stages");
    } else if (ageDifference > 15) {
      concerns.push("Large age gap may create lifestyle differences");
    } else if (ageDifference > 10) {
      concerns.push("Significant age gap may affect long-term compatibility");
    }

    // Life stage analysis
    let lifeStageCompatibility = "Compatible";
    if ((youngerAge < 25 && olderAge > 35) || ageDifference > 15) {
      lifeStageCompatibility = "Different Life Stages";
    } else if (ageDifference > 8) {
      lifeStageCompatibility = "Some Differences";
    }

    setResult({
      ageDifference,
      olderAge,
      youngerAge,
      halfPlusSevenMin,
      ruleCompliant,
      socialAcceptability,
      lifeStageCompatibility,
      concerns
    });
  };

  const getAgeGapInsight = (ageDiff: number) => {
    if (ageDiff <= 2) return { category: "Minimal Gap", description: "Very similar life experiences and perspectives", color: "text-green-600" };
    if (ageDiff <= 5) return { category: "Small Gap", description: "Minor differences that are easily navigated", color: "text-green-600" };
    if (ageDiff <= 8) return { category: "Moderate Gap", description: "Some differences but generally manageable", color: "text-yellow-600" };
    if (ageDiff <= 12) return { category: "Significant Gap", description: "Noticeable differences requiring understanding", color: "text-orange-600" };
    if (ageDiff <= 18) return { category: "Large Gap", description: "Major differences in life experience and goals", color: "text-red-600" };
    return { category: "Very Large Gap", description: "Substantial differences across multiple life aspects", color: "text-red-700" };
  };

  const ageGapStatistics = [
    { range: "0-2 years", percentage: 35, description: "Most common age difference in relationships" },
    { range: "3-5 years", percentage: 28, description: "Very common and socially accepted" },
    { range: "6-8 years", percentage: 18, description: "Common, especially when woman is younger" },
    { range: "9-12 years", percentage: 12, description: "Less common but not unusual" },
    { range: "13-18 years", percentage: 5, description: "Uncommon, may face social scrutiny" },
    { range: "18+ years", percentage: 2, description: "Rare, often criticized socially" }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Dating Age Calculator",
    "description": "Calculate age gap compatibility in relationships using the half plus seven rule and social acceptability guidelines. Analyze dating age differences and compatibility.",
    "author": {
      "@type": "Organization",
      "name": "Female Delusion Calculator"
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://delusionfemalecalculator.com/dating-age-calculator"
    }
  };

  return (
    <>
      <SEOHead
        title="Dating Age Calculator - Check Age Gap Compatibility & Social Acceptability"
        description="Calculate dating age gap compatibility using the half plus seven rule. Analyze age differences in relationships and get insights on social acceptability and life stage compatibility."
        keywords="dating age calculator, age gap calculator, half plus seven rule, relationship age difference, dating age compatibility, age gap relationships"
        schemaData={schemaData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <Calculator className="h-16 w-16 text-cyan-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Dating Age Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate age gap compatibility using the "half plus seven" rule and analyze 
              social acceptability of age differences in relationships.
            </p>
          </div>

          {/* Calculator */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-cyan-600 flex items-center">
                <Calculator className="h-6 w-6 mr-2" />
                Age Gap Calculator
              </CardTitle>
              <CardDescription>
                Enter both ages to analyze compatibility and social acceptability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="userAge">Your Age</Label>
                  <Input
                    id="userAge"
                    type="number"
                    placeholder="e.g., 25"
                    value={userAge}
                    onChange={(e) => setUserAge(e.target.value)}
                    min="18"
                    max="100"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="partnerAge">Partner's Age</Label>
                  <Input
                    id="partnerAge"
                    type="number"
                    placeholder="e.g., 28"
                    value={partnerAge}
                    onChange={(e) => setPartnerAge(e.target.value)}
                    min="18"
                    max="100"
                  />
                </div>
                <div className="flex items-end">
                  <Button 
                    onClick={calculateAgeGap}
                    className="w-full"
                    disabled={!userAge || !partnerAge}
                  >
                    Calculate Compatibility
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          {result && (
            <div className="space-y-6 mb-8">
              {result.error ? (
                <Alert className="border-red-200 bg-red-50">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-700">
                    {result.error}
                  </AlertDescription>
                </Alert>
              ) : (
                <>
                  {/* Main Results */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900">Age Gap Analysis Results</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">{result.ageDifference}</div>
                          <div className="text-sm text-gray-600">Years Difference</div>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                          <div className="text-lg font-semibold text-purple-600">{result.socialAcceptability}</div>
                          <div className="text-sm text-gray-600">Social Perception</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <div className="text-lg font-semibold text-green-600">{result.lifeStageCompatibility}</div>
                          <div className="text-sm text-gray-600">Life Stage Match</div>
                        </div>
                        <div className="text-center p-4 bg-yellow-50 rounded-lg">
                          <div className="text-lg font-semibold text-yellow-600">
                            {result.ruleCompliant ? "✓ Follows" : "✗ Violates"}
                          </div>
                          <div className="text-sm text-gray-600">Half + 7 Rule</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Detailed Analysis */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900">Detailed Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Age Gap Category</h4>
                          <div className="flex items-center space-x-2">
                            <span className={`font-medium ${getAgeGapInsight(result.ageDifference).color}`}>
                              {getAgeGapInsight(result.ageDifference).category}
                            </span>
                            <span className="text-gray-600">-</span>
                            <span className="text-gray-700 text-sm">
                              {getAgeGapInsight(result.ageDifference).description}
                            </span>
                          </div>
                        </div>

                        <div className="p-4 border rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Half Plus Seven Rule</h4>
                          <p className="text-sm text-gray-700 mb-2">
                            According to this social guideline, the minimum age for the {result.olderAge}-year-old 
                            should be {result.halfPlusSevenMin} years old.
                          </p>
                          {result.ruleCompliant ? (
                            <div className="flex items-center space-x-2 text-green-600">
                              <CheckCircle className="h-4 w-4" />
                              <span className="text-sm">Your age gap follows social guidelines</span>
                            </div>
                          ) : (
                            <div className="flex items-center space-x-2 text-red-600">
                              <AlertTriangle className="h-4 w-4" />
                              <span className="text-sm">Your age gap may face social criticism</span>
                            </div>
                          )}
                        </div>

                        {result.concerns.length > 0 && (
                          <div className="p-4 border rounded-lg bg-yellow-50">
                            <h4 className="font-semibold text-gray-900 mb-2">Considerations</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              {result.concerns.map((concern: string, index: number) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <span className="text-yellow-600 mt-1">•</span>
                                  <span>{concern}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>
          )}

          {/* Age Gap Statistics */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600 flex items-center">
                <Users className="h-6 w-6 mr-2" />
                Age Gap Statistics in Relationships
              </CardTitle>
              <CardDescription>
                How common are different age gaps in real relationships?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {ageGapStatistics.map((stat, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-20 text-sm font-medium text-gray-900">{stat.range}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full" 
                            style={{width: `${stat.percentage}%`}}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-700">{stat.percentage}%</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">{stat.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Guidelines and Tips */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-green-600 flex items-center">
                <Heart className="h-6 w-6 mr-2" />
                Age Gap Relationship Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Making Age Gaps Work</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Focus on emotional maturity over chronological age</li>
                    <li>• Ensure you're in similar life stages</li>
                    <li>• Communicate openly about future goals</li>
                    <li>• Respect each other's perspectives and experiences</li>
                    <li>• Be prepared for different social circles</li>
                    <li>• Address power imbalances honestly</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Warning Signs to Watch</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• One partner trying to "parent" the other</li>
                    <li>• Significant financial dependency</li>
                    <li>• Isolation from friends and family</li>
                    <li>• Different readiness for major life events</li>
                    <li>• Using age as a power play in arguments</li>
                    <li>• Feeling embarrassed about the age gap</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Tools */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-purple-600">Related Dating Tools</CardTitle>
              <CardDescription>
                Explore more tools to improve your dating and relationship success
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link to="/" className="p-4 border rounded-lg hover:shadow-lg transition-shadow group">
                  <h4 className="font-semibold text-pink-600 group-hover:text-pink-700">
                    Female Delusion Calculator
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Check if your dating standards are realistic
                  </p>
                  <ArrowRight className="h-4 w-4 text-gray-400 mt-2 group-hover:text-pink-600" />
                </Link>
                
                <Link to="/relationship-compatibility" className="p-4 border rounded-lg hover:shadow-lg transition-shadow group">
                  <h4 className="font-semibold text-pink-600 group-hover:text-pink-700">
                    Compatibility Test
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Assess overall relationship compatibility
                  </p>
                  <ArrowRight className="h-4 w-4 text-gray-400 mt-2 group-hover:text-pink-600" />
                </Link>

                <Link to="/dating-red-flags-checklist" className="p-4 border rounded-lg hover:shadow-lg transition-shadow group">
                  <h4 className="font-semibold text-pink-600 group-hover:text-pink-700">
                    Dating Red Flags Checklist
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Identify warning signs in relationships
                  </p>
                  <ArrowRight className="h-4 w-4 text-gray-400 mt-2 group-hover:text-pink-600" />
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* SEO Content */}
          <div className="mt-12">
            <Card>
              <CardContent className="pt-6">
                <div className="prose prose-cyan max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Age Gaps in Dating and Relationships</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-cyan-50 p-6 rounded-lg">
                      <p className="text-gray-700 leading-relaxed">
                        Age differences in relationships have been a topic of social discussion for centuries. 
                        While love knows no age, practical considerations around life stages, social acceptance, 
                        and long-term compatibility make age gap analysis valuable for couples considering their future together.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">The Half Plus Seven Rule Explained</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        The "half plus seven" rule is a popular social guideline that suggests the minimum age for a romantic 
                        partner should be half your age plus seven years. For example, if you're 30, the youngest socially 
                        acceptable partner would be 22 (30÷2+7=22).
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        While not a law, this rule reflects general social comfort levels with age differences.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Research on Age Gap Relationships</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Studies show that couples with smaller age gaps (1-3 years) report higher relationship satisfaction 
                        and lower divorce rates.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        However, successful relationships with larger age gaps do exist, particularly 
                        when both partners are mature adults with aligned life goals and values.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Factors More Important Than Age</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        While age compatibility matters, research consistently shows that emotional maturity, shared values, 
                        life goals, and communication skills are stronger predictors of relationship success than chronological 
                        age alone.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Focus on these deeper compatibility factors for lasting relationship success.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default DatingAgeCalculator;