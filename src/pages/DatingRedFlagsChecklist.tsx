import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { AlertTriangle, Check, X, Heart, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const DatingRedFlagsChecklist = () => {
  const [checkedFlags, setCheckedFlags] = useState<string[]>([]);

  const redFlags = [
    {
      id: "communication",
      category: "Communication Red Flags",
      flags: [
        "Takes hours or days to respond to messages without explanation",
        "Only texts late at night or very early morning",
        "Refuses to talk on the phone or video call",
        "Gives vague answers about their life or background",
        "Constantly interrupts you or doesn't listen",
        "Gets angry when you don't respond immediately"
      ]
    },
    {
      id: "behavior",
      category: "Behavioral Red Flags",
      flags: [
        "Shows up late frequently without apology",
        "Cancels plans last minute repeatedly",
        "Drinks excessively or uses drugs regularly",
        "Has explosive anger or mood swings",
        "Is rude to waitstaff, service workers, or strangers",
        "Doesn't respect your boundaries when you say no"
      ]
    },
    {
      id: "relationship",
      category: "Relationship Red Flags",
      flags: [
        "Talks negatively about all their exes",
        "Wants to be exclusive too quickly",
        "Isolates you from friends and family",
        "Checks your phone or social media without permission",
        "Makes you feel guilty for spending time with others",
        "Pressures you into physical intimacy"
      ]
    },
    {
      id: "lifestyle",
      category: "Lifestyle & Values Red Flags",
      flags: [
        "Has no stable job or income source",
        "Lives with parents but shows no ambition to move out",
        "Has significantly different life goals",
        "Shows no interest in personal growth or improvement",
        "Is financially irresponsible or always asks for money",
        "Has no hobbies or interests outside of dating"
      ]
    },
    {
      id: "social",
      category: "Social & Emotional Red Flags",
      flags: [
        "Has no close friends or healthy relationships",
        "Shows signs of emotional immaturity",
        "Is overly jealous or possessive",
        "Cannot handle criticism or feedback",
        "Lies about small, insignificant things",
        "Shows no empathy for others' feelings"
      ]
    }
  ];

  const handleFlagCheck = (flagText: string) => {
    setCheckedFlags(prev => 
      prev.includes(flagText) 
        ? prev.filter(f => f !== flagText)
        : [...prev, flagText]
    );
  };

  const getTotalFlags = () => redFlags.reduce((total, category) => total + category.flags.length, 0);
  const getRedFlagPercentage = () => Math.round((checkedFlags.length / getTotalFlags()) * 100);

  const getScoreMessage = () => {
    const percentage = getRedFlagPercentage();
    if (percentage === 0) return { message: "Great! No red flags detected.", color: "text-green-600", bg: "bg-green-50" };
    if (percentage <= 10) return { message: "Minor concerns - keep observing.", color: "text-yellow-600", bg: "bg-yellow-50" };
    if (percentage <= 25) return { message: "Some concerning patterns - proceed with caution.", color: "text-orange-600", bg: "bg-orange-50" };
    return { message: "Major red flags present - consider ending this relationship.", color: "text-red-600", bg: "bg-red-50" };
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Dating Red Flags Checklist - Warning Signs in Relationships",
    "description": "Comprehensive checklist of dating red flags to help you identify warning signs in relationships. Recognize toxic behavior patterns early and make informed dating decisions.",
    "author": {
      "@type": "Organization",
      "name": "Female Delusion Calculator"
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://delusionfemalecalculator.com/dating-red-flags-checklist"
    }
  };

  return (
    <>
      <SEOHead
        title="Dating Red Flags Checklist - 30+ Warning Signs to Watch For"
        description="Complete dating red flags checklist with 30+ warning signs. Identify toxic behavior patterns, communication issues, and relationship red flags early. Take our interactive assessment."
        keywords="dating red flags, relationship warning signs, toxic dating behavior, dating red flags checklist, relationship red flags, dating warning signs, toxic relationship signs"
        schemaData={schemaData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Dating Red Flags Checklist
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Identify warning signs early and protect yourself from toxic relationships. 
              Use this comprehensive checklist to evaluate potential partners.
            </p>
          </div>

          {/* Score Display */}
          {checkedFlags.length > 0 && (
            <Card className="mb-8 border-2">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">
                    {checkedFlags.length} / {getTotalFlags()} Red Flags ({getRedFlagPercentage()}%)
                  </div>
                  <Alert className={`${getScoreMessage().bg} border-0`}>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription className={`${getScoreMessage().color} font-medium`}>
                      {getScoreMessage().message}
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Checklist */}
          <div className="space-y-6 mb-8">
            {redFlags.map((category) => (
              <Card key={category.id} className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-red-600 flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    {category.category}
                  </CardTitle>
                  <CardDescription>
                    Check any behaviors you've noticed in your dating situation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {category.flags.map((flag, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                        <Checkbox
                          id={`${category.id}-${index}`}
                          checked={checkedFlags.includes(flag)}
                          onCheckedChange={() => handleFlagCheck(flag)}
                          className="mt-1"
                        />
                        <label 
                          htmlFor={`${category.id}-${index}`}
                          className="text-sm text-gray-700 cursor-pointer leading-relaxed"
                        >
                          {flag}
                        </label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              onClick={() => setCheckedFlags([])}
              variant="outline"
              className="flex items-center"
            >
              <X className="h-4 w-4 mr-2" />
              Clear All
            </Button>
          </div>

          {/* Additional Resources */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-pink-600 flex items-center">
                <Heart className="h-5 w-5 mr-2" />
                What to Do If You Spot Red Flags
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">✓ Healthy Responses</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Trust your instincts</li>
                    <li>• Set clear boundaries</li>
                    <li>• Talk to trusted friends</li>
                    <li>• Take time to think</li>
                    <li>• Don't ignore warning signs</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">✗ Avoid These Mistakes</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Making excuses for their behavior</li>
                    <li>• Thinking you can change them</li>
                    <li>• Ignoring your gut feelings</li>
                    <li>• Rushing into commitment</li>
                    <li>• Isolating yourself from support</li>
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
                Explore more tools to improve your dating success
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
                
                <Link to="/texting-rules-dating" className="p-4 border rounded-lg hover:shadow-lg transition-shadow group">
                  <h4 className="font-semibold text-pink-600 group-hover:text-pink-700">
                    Texting Rules for Dating
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Learn proper dating communication
                  </p>
                  <ArrowRight className="h-4 w-4 text-gray-400 mt-2 group-hover:text-pink-600" />
                </Link>

                <Link to="/relationship-compatibility" className="p-4 border rounded-lg hover:shadow-lg transition-shadow group">
                  <h4 className="font-semibold text-pink-600 group-hover:text-pink-700">
                    Compatibility Test
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Assess your relationship compatibility
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
                <div className="prose prose-pink max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Dating Red Flags: A Complete Guide</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-pink-50 p-6 rounded-lg">
                      <p className="text-gray-700 leading-relaxed">
                        Dating red flags are warning signs that indicate potential problems in a relationship. 
                        These behaviors often signal deeper issues like disrespect, immaturity, or even abusive tendencies. 
                        Recognizing these signs early can save you from emotional pain and help you make better dating decisions.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Why This Dating Red Flags Checklist Matters</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Studies show that people in healthy relationships report higher life satisfaction and better mental health. 
                        By using this comprehensive red flags checklist, you can identify problematic patterns before they become 
                        serious issues.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Remember, a few minor red flags might be workable, but multiple major red flags often 
                        indicate fundamental incompatibility.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Questions About Dating Red Flags</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-medium text-gray-900 mb-2">How many red flags are too many?</h4>
                          <p className="text-gray-700 leading-relaxed">
                            While there's no magic number, multiple red flags in different categories should be taken seriously. 
                            Even one major red flag (like disrespecting boundaries or showing anger issues) can be enough to 
                            reconsider the relationship.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-gray-900 mb-2">Can people change their red flag behaviors?</h4>
                          <p className="text-gray-700 leading-relaxed">
                            While people can change, it requires genuine self-awareness and sustained effort. Don't enter a 
                            relationship expecting to change someone. Focus on their current behavior patterns rather than 
                            their potential.
                          </p>
                        </div>
                      </div>
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

export default DatingRedFlagsChecklist;