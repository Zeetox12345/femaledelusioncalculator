import { useState } from "react";
import { Heart, Shield, Users, Zap, Target, TrendingUp, Check, AlertTriangle, Info } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const AttachmentStylesTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "When you start dating someone new, how do you typically feel?",
      options: [
        { text: "Excited and optimistic about the potential", type: 0 },
        { text: "Worried they'll lose interest or leave", type: 1 },
        { text: "Hesitant to get too emotionally invested", type: 2 },
        { text: "Conflicted between wanting closeness and fearing rejection", type: 3 }
      ]
    },
    {
      question: "How do you handle disagreements in relationships?",
      options: [
        { text: "I discuss issues openly and work toward solutions", type: 0 },
        { text: "I worry the conflict means they don't love me anymore", type: 1 },
        { text: "I tend to withdraw and need space to process", type: 2 },
        { text: "I might get defensive or shut down emotionally", type: 3 }
      ]
    },
    {
      question: "When your partner doesn't respond to texts quickly, you:",
      options: [
        { text: "Assume they're busy and wait patiently", type: 0 },
        { text: "Start worrying about what you might have done wrong", type: 1 },
        { text: "Feel relieved to have some breathing room", type: 2 },
        { text: "Feel frustrated and might send multiple follow-up messages", type: 3 }
      ]
    },
    {
      question: "How comfortable are you with emotional intimacy?",
      options: [
        { text: "Very comfortable - I enjoy deep emotional connections", type: 0 },
        { text: "I crave it but worry about being too needy", type: 1 },
        { text: "I prefer to maintain some emotional distance", type: 2 },
        { text: "I want it but it feels scary and overwhelming", type: 3 }
      ]
    },
    {
      question: "What's your biggest fear in relationships?",
      options: [
        { text: "Growing apart or losing connection over time", type: 0 },
        { text: "Being abandoned or rejected by my partner", type: 1 },
        { text: "Losing my independence or sense of self", type: 2 },
        { text: "Getting hurt if I let myself be too vulnerable", type: 3 }
      ]
    },
    {
      question: "How do you react when a partner needs space?",
      options: [
        { text: "I respect their needs and use the time productively", type: 0 },
        { text: "I worry it means something is wrong with our relationship", type: 1 },
        { text: "I appreciate having time for myself too", type: 2 },
        { text: "I feel rejected and might become clingy or distant", type: 3 }
      ]
    },
    {
      question: "How do you express love and affection?",
      options: [
        { text: "Openly and consistently without much hesitation", type: 0 },
        { text: "Enthusiastically but sometimes worry it's too much", type: 1 },
        { text: "Carefully and gradually as trust builds", type: 2 },
        { text: "Inconsistently - sometimes very loving, sometimes withdrawn", type: 3 }
      ]
    },
    {
      question: "When dating, do you tend to:",
      options: [
        { text: "Take things at a steady, comfortable pace", type: 0 },
        { text: "Want to define the relationship quickly", type: 1 },
        { text: "Keep things casual for as long as possible", type: 2 },
        { text: "Send mixed signals about what you want", type: 3 }
      ]
    },
    {
      question: "How do you handle your partner spending time with friends?",
      options: [
        { text: "I encourage their friendships and have my own social life", type: 0 },
        { text: "I sometimes feel jealous or left out", type: 1 },
        { text: "I'm happy they're busy so I can have alone time", type: 2 },
        { text: "I feel conflicted between giving space and wanting inclusion", type: 3 }
      ]
    },
    {
      question: "What do you need most from a romantic partner?",
      options: [
        { text: "Consistency, trust, and mutual respect", type: 0 },
        { text: "Constant reassurance and validation of their love", type: 1 },
        { text: "Respect for my independence and personal space", type: 2 },
        { text: "Patience and understanding of my emotional complexity", type: 3 }
      ]
    },
    {
      question: "How do you typically end relationships?",
      options: [
        { text: "With honest communication about incompatibilities", type: 0 },
        { text: "I usually get dumped because I'm 'too much'", type: 1 },
        { text: "I often end things before they get too serious", type: 2 },
        { text: "It's messy - lots of back and forth before it's really over", type: 3 }
      ]
    },
    {
      question: "How do you feel about your dating patterns?",
      options: [
        { text: "Generally satisfied with my relationship approach", type: 0 },
        { text: "I wish I wasn't so anxious about relationships", type: 1 },
        { text: "I sometimes wonder if I'm too guarded", type: 2 },
        { text: "I'm frustrated by my inconsistent relationship patterns", type: 3 }
      ]
    }
  ];

  const attachmentStyles = [
    {
      name: "Secure",
      percentage: 0,
      description: "You're comfortable with intimacy and independence",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      traits: [
        "Comfortable with emotional intimacy",
        "Good at communicating needs",
        "Trusting and reliable in relationships",
        "Balances independence with connection"
      ],
      datingTips: [
        "Continue being authentic and open",
        "Set healthy boundaries early",
        "Look for partners who match your emotional availability",
        "Trust your instincts about compatibility"
      ],
      challenges: [
        "May attract partners with insecure attachment styles",
        "Sometimes too trusting of wrong people",
        "Might not recognize red flags quickly enough"
      ]
    },
    {
      name: "Anxious",
      percentage: 0,
      description: "You crave closeness but fear abandonment",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      traits: [
        "Highly sensitive to partner's moods",
        "Seeks constant reassurance",
        "Fears abandonment and rejection",
        "Very caring and attentive to partner's needs"
      ],
      datingTips: [
        "Practice self-soothing techniques",
        "Communicate your needs clearly but not excessively",
        "Develop your own interests and friendships",
        "Work on building self-worth outside relationships"
      ],
      challenges: [
        "May come across as 'needy' or clingy",
        "Tendency to overthink and catastrophize",
        "Difficulty trusting partner's love"
      ]
    },
    {
      name: "Avoidant",
      percentage: 0,
      description: "You value independence and struggle with intimacy",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      traits: [
        "Highly values independence",
        "Uncomfortable with deep emotional intimacy",
        "Self-reliant and emotionally controlled",
        "May have difficulty expressing emotions"
      ],
      datingTips: [
        "Practice gradual emotional vulnerability",
        "Communicate your need for space kindly",
        "Challenge yourself to share feelings regularly",
        "Be patient with partners who need more closeness"
      ],
      challenges: [
        "Partners may feel emotionally shut out",
        "Tendency to end relationships when they get serious",
        "Difficulty maintaining long-term intimacy"
      ]
    },
    {
      name: "Disorganized",
      percentage: 0,
      description: "You want close relationships but fear getting hurt",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      traits: [
        "Conflicted feelings about relationships",
        "Alternates between clingy and distant behavior",
        "High emotional intensity",
        "Deep capacity for love but struggles with trust"
      ],
      datingTips: [
        "Consider therapy to work through attachment patterns",
        "Practice mindfulness to manage emotional swings",
        "Communicate your struggles to understanding partners",
        "Take relationships slowly to build security"
      ],
      challenges: [
        "Inconsistent relationship behavior confuses partners",
        "Difficulty regulating emotions in conflicts",
        "May push away the people they want closest"
      ]
    }
  ];

  const handleAnswer = (answerType: number) => {
    const newAnswers = [...answers, answerType];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResults = () => {
    const scores = [0, 0, 0, 0];
    answers.forEach(answer => {
      scores[answer]++;
    });

    const maxScore = Math.max(...scores);
    const primaryStyle = scores.indexOf(maxScore);

    return {
      primary: primaryStyle,
      scores: scores.map((score, index) => ({
        style: { ...attachmentStyles[index], percentage: Math.round((score / answers.length) * 100) },
        score: score
      })).sort((a, b) => b.score - a.score)
    };
  };

  const restartTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const results = showResults ? calculateResults() : null;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Attachment Styles Test for Dating",
    "description": "Discover your attachment style and learn how it affects your dating relationships. Free psychology-based quiz for better relationship understanding.",
    "url": "https://delusionfemalecalculator.com/attachment-styles-test",
    "applicationCategory": "LifestyleApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  if (showResults && results) {
    const primaryStyle = attachmentStyles[results.primary];

    return (
      <>
        <SEOHead
          title="Your Attachment Style Results - Dating Psychology Insights"
          description="Discover your attachment style and learn how it impacts your dating relationships. Get personalized tips for building secure, healthy romantic connections."
          keywords="attachment style results, dating psychology, relationship patterns, secure attachment, anxious attachment, avoidant attachment, dating advice"
          schemaData={schemaData}
        />
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Your Attachment Style Results
              </h1>
              <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${primaryStyle.bgColor} ${primaryStyle.borderColor} border-2 mb-4`}>
                <Shield className={`h-6 w-6 ${primaryStyle.color}`} />
                <span className={`text-2xl font-bold ${primaryStyle.color}`}>
                  {primaryStyle.name} Attachment
                </span>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {primaryStyle.description}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Main Results */}
              <div className="lg:col-span-2 space-y-6">
                {/* Attachment Breakdown */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-purple-600" />
                      Your Attachment Style Breakdown
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {results.scores.map((result, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className={`w-3 h-3 rounded-full ${result.style.bgColor.replace('bg-', 'bg-').replace('-50', '-400')}`}></div>
                              <span className="font-medium">{result.style.name}</span>
                            </div>
                            <span className="text-sm font-semibold">{result.style.percentage}%</span>
                          </div>
                          <Progress value={result.style.percentage} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Traits & Characteristics */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-purple-600" />
                      Your Key Traits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {primaryStyle.traits.map((trait, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-sm">{trait}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Dating Challenges */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-orange-600" />
                      Common Dating Challenges
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {primaryStyle.challenges.map((challenge, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5" />
                          <span className="text-sm">{challenge}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-4 bg-orange-50 rounded-lg">
                      <p className="text-sm text-orange-800">
                        <strong>Remember:</strong> These challenges don't define you! Awareness is the first step 
                        toward building healthier relationship patterns.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Dating Tips Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-purple-600" />
                      Dating Tips for You
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {primaryStyle.datingTips.map((tip, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-purple-600">{index + 1}</span>
                          </div>
                          <span className="text-sm">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-pink-600" />
                      Compatible Partners
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {primaryStyle.name === "Secure" && (
                        <div className="space-y-2">
                          <Badge variant="secondary" className="bg-green-100 text-green-800">Best Match: Other Secure types</Badge>
                          <p className="text-sm text-gray-600">
                            You work well with all attachment styles but thrive with other secure partners.
                          </p>
                        </div>
                      )}
                      {primaryStyle.name === "Anxious" && (
                        <div className="space-y-2">
                          <Badge variant="secondary" className="bg-green-100 text-green-800">Best Match: Secure types</Badge>
                          <Badge variant="outline" className="text-red-600">Avoid: Avoidant types</Badge>
                          <p className="text-sm text-gray-600">
                            Secure partners can provide the consistency and reassurance you need.
                          </p>
                        </div>
                      )}
                      {primaryStyle.name === "Avoidant" && (
                        <div className="space-y-2">
                          <Badge variant="secondary" className="bg-green-100 text-green-800">Best Match: Secure types</Badge>
                          <Badge variant="outline" className="text-red-600">Challenging: Anxious types</Badge>
                          <p className="text-sm text-gray-600">
                            Secure partners respect your independence while encouraging intimacy.
                          </p>
                        </div>
                      )}
                      {primaryStyle.name === "Disorganized" && (
                        <div className="space-y-2">
                          <Badge variant="secondary" className="bg-green-100 text-green-800">Best Match: Secure types</Badge>
                          <Badge variant="outline" className="text-amber-600">Consider: Professional support</Badge>
                          <p className="text-sm text-gray-600">
                            Patient, secure partners can help you develop more consistent patterns.
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Understanding Attachment Styles */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-purple-600" />
                  Understanding Attachment Styles in Dating
                </CardTitle>
                <CardDescription>
                  How attachment theory applies to modern dating relationships
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-gray-900">Where Attachment Styles Come From</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Early childhood relationships with caregivers</li>
                      <li>• Past romantic relationship experiences</li>
                      <li>• Trauma or significant life events</li>
                      <li>• Cultural and family relationship patterns</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-gray-900">Can Attachment Styles Change?</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Yes! Attachment styles can evolve over time</li>
                      <li>• Healthy relationships can increase security</li>
                      <li>• Therapy can help develop secure patterns</li>
                      <li>• Self-awareness is the first step to change</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                      <Info className="h-4 w-4" />
                      Dating Success Tips
                    </h4>
                    <p className="text-sm text-green-700">
                      Focus on building secure attachment behaviors: consistent communication, emotional availability, 
                      and healthy boundaries. These skills can be learned and developed.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                      <Heart className="h-4 w-4" />
                      For Long-term Success
                    </h4>
                    <p className="text-sm text-purple-700">
                      The goal isn't to find someone who accommodates insecure patterns, but to grow toward 
                      secure attachment together in a healthy relationship.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="text-center space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={restartTest} variant="outline" size="lg">
                  Retake Test
                </Button>
                <Link to="/love-languages-test">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    <Heart className="h-4 w-4 mr-2" />
                    Take Love Languages Test
                  </Button>
                </Link>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/relationship-compatibility" className="text-sm text-purple-600 hover:text-purple-800 underline">
                  Relationship Compatibility Test
                </Link>
                <Link to="/dating-red-flags-checklist" className="text-sm text-purple-600 hover:text-purple-800 underline">
                  Dating Red Flags Checklist
                </Link>
                <Link to="/relationship-advice" className="text-sm text-purple-600 hover:text-purple-800 underline">
                  Relationship Advice
                </Link>
                <Link to="/" className="text-sm text-purple-600 hover:text-purple-800 underline">
                  Female Delusion Calculator
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Attachment Styles Test for Dating - Understand Your Relationship Patterns"
        description="Discover your attachment style and how it affects your dating relationships. Free psychology-based test covering secure, anxious, avoidant, and disorganized attachment styles."
        keywords="attachment styles test, dating psychology, relationship patterns, secure attachment, anxious attachment, avoidant attachment, dating compatibility, relationship quiz"
        schemaData={schemaData}
      />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-purple-100 rounded-full">
                <Shield className="h-12 w-12 text-purple-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Attachment Styles Test for Dating
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Understand how your attachment style influences your dating relationships. This test reveals your 
              relationship patterns and provides insights for building healthier romantic connections.
            </p>
            
            {!showResults && (
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Progress</span>
                  <span className="text-sm text-gray-600">{currentQuestion + 1} of {questions.length}</span>
                </div>
                <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-2" />
              </div>
            )}
          </div>

          {!showResults && (
            <>
              {/* Question Card */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-center text-xl">
                    Question {currentQuestion + 1}
                  </CardTitle>
                  <CardDescription className="text-center text-lg font-medium">
                    {questions[currentQuestion].question}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {questions[currentQuestion].options.map((option, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full text-left justify-start h-auto p-4 hover:bg-purple-50 hover:border-purple-300"
                        onClick={() => handleAnswer(option.type)}
                      >
                        <span className="text-sm">{option.text}</span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Info Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">The 4 Attachment Styles</CardTitle>
                  <CardDescription className="text-center">
                    Based on psychological research into how we form emotional bonds
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {attachmentStyles.map((style, index) => (
                      <div key={index} className={`p-4 rounded-lg ${style.bgColor} ${style.borderColor} border`}>
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className={`h-5 w-5 ${style.color}`} />
                          <h4 className={`font-medium ${style.color}`}>{style.name}</h4>
                        </div>
                        <p className="text-sm text-gray-600">{style.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {/* Benefits Section for non-results state */}
          {!showResults && (
            <div className="mt-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Why Understanding Attachment Styles Matters</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Understand Your Patterns</h3>
                      <p className="text-sm text-gray-600">
                        Recognize why you react certain ways in relationships and dating situations
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Heart className="h-6 w-6 text-pink-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Improve Relationships</h3>
                      <p className="text-sm text-gray-600">
                        Build healthier connections by understanding your needs and communication style
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <TrendingUp className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Dating Success</h3>
                      <p className="text-sm text-gray-600">
                        Choose compatible partners and develop secure relationship behaviors
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AttachmentStylesTest;