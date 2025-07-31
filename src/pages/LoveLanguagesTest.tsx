import { useState } from "react";
import { Heart, MessageCircle, Clock, Gift, HandHeart, Target, Users, Zap, TrendingUp, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const LoveLanguagesTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "What makes you feel most loved in a relationship?",
      options: [
        { text: "Hearing 'I love you' and verbal affirmations", type: 0 },
        { text: "Receiving thoughtful gifts", type: 1 },
        { text: "Having your partner help with tasks", type: 2 },
        { text: "Spending uninterrupted time together", type: 3 },
        { text: "Physical affection like hugs and kisses", type: 4 }
      ]
    },
    {
      question: "When you're stressed, what would comfort you most?",
      options: [
        { text: "Your partner saying encouraging words", type: 0 },
        { text: "A surprise gift to cheer you up", type: 1 },
        { text: "Your partner handling your responsibilities", type: 2 },
        { text: "Sitting together and talking about your day", type: 3 },
        { text: "A warm hug or back massage", type: 4 }
      ]
    },
    {
      question: "What would disappoint you most in a relationship?",
      options: [
        { text: "Your partner rarely compliments you", type: 0 },
        { text: "Your partner forgets special occasions", type: 1 },
        { text: "Your partner never helps around the house", type: 2 },
        { text: "Your partner is always on their phone when together", type: 3 },
        { text: "Your partner rarely shows physical affection", type: 4 }
      ]
    },
    {
      question: "What's your ideal way to spend a romantic evening?",
      options: [
        { text: "Sharing deep conversations about your feelings", type: 0 },
        { text: "Exchanging meaningful gifts", type: 1 },
        { text: "Cooking dinner together", type: 2 },
        { text: "Having a device-free evening together", type: 3 },
        { text: "Cuddling while watching a movie", type: 4 }
      ]
    },
    {
      question: "How do you prefer to apologize after an argument?",
      options: [
        { text: "With heartfelt words explaining your feelings", type: 0 },
        { text: "With a peace offering or gift", type: 1 },
        { text: "By doing something nice for them", type: 2 },
        { text: "By planning quality time to talk it through", type: 3 },
        { text: "With a hug and physical comfort", type: 4 }
      ]
    },
    {
      question: "What makes you feel most appreciated?",
      options: [
        { text: "When your partner tells others about your achievements", type: 0 },
        { text: "When your partner surprises you with something special", type: 1 },
        { text: "When your partner takes care of things without being asked", type: 2 },
        { text: "When your partner puts away distractions to focus on you", type: 3 },
        { text: "When your partner shows affection publicly", type: 4 }
      ]
    },
    {
      question: "What would make you feel most secure in a relationship?",
      options: [
        { text: "Regular verbal reassurance of love", type: 0 },
        { text: "Thoughtful gestures and tokens of love", type: 1 },
        { text: "Your partner actively supporting your goals", type: 2 },
        { text: "Having regular one-on-one time together", type: 3 },
        { text: "Consistent physical intimacy and affection", type: 4 }
      ]
    },
    {
      question: "How do you naturally show love to others?",
      options: [
        { text: "Through words of encouragement and praise", type: 0 },
        { text: "By giving thoughtful presents", type: 1 },
        { text: "By helping them with their responsibilities", type: 2 },
        { text: "By giving them my full attention", type: 3 },
        { text: "Through hugs, kisses, and physical touch", type: 4 }
      ]
    },
    {
      question: "What bothers you most when dating someone new?",
      options: [
        { text: "They don't express their feelings verbally", type: 0 },
        { text: "They don't acknowledge special moments", type: 1 },
        { text: "They expect you to do everything yourself", type: 2 },
        { text: "They're always multitasking when you're together", type: 3 },
        { text: "They seem uncomfortable with physical closeness", type: 4 }
      ]
    },
    {
      question: "What would be the perfect surprise from a partner?",
      options: [
        { text: "A handwritten love letter", type: 0 },
        { text: "Something you mentioned wanting weeks ago", type: 1 },
        { text: "Coming home to find they've handled your to-do list", type: 2 },
        { text: "A planned day together doing your favorite activities", type: 3 },
        { text: "An unexpected massage or physical pampering", type: 4 }
      ]
    }
  ];

  const loveLanguages = [
    {
      name: "Words of Affirmation",
      icon: MessageCircle,
      description: "You feel loved through verbal expressions of affection, praise, and encouragement.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      name: "Receiving Gifts",
      icon: Gift,
      description: "You feel loved when someone gives you thoughtful gifts and tokens of appreciation.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      name: "Acts of Service",
      icon: HandHeart,
      description: "You feel loved when someone helps you with tasks and lightens your load.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      name: "Quality Time",
      icon: Clock,
      description: "You feel loved when someone gives you their undivided attention and presence.",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      name: "Physical Touch",
      icon: Heart,
      description: "You feel loved through physical affection, hugs, and intimate touch.",
      color: "text-red-600",
      bgColor: "bg-red-50"
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
    const scores = [0, 0, 0, 0, 0];
    answers.forEach(answer => {
      scores[answer]++;
    });

    const maxScore = Math.max(...scores);
    const primaryLanguage = scores.indexOf(maxScore);

    return {
      primary: primaryLanguage,
      scores: scores.map((score, index) => ({
        language: loveLanguages[index],
        score: score,
        percentage: Math.round((score / answers.length) * 100)
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
    "name": "Love Languages Test for Dating",
    "description": "Discover your love language to improve your dating relationships. Free quiz based on Dr. Gary Chapman's 5 Love Languages theory.",
    "url": "https://delusionfemalecalculator.com/love-languages-test",
    "applicationCategory": "LifestyleApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  if (showResults && results) {
    const primaryLanguage = loveLanguages[results.primary];
    const PrimaryIcon = primaryLanguage.icon;

    return (
      <>
        <SEOHead
          title="Your Love Language Results - Dating Communication Style"
          description="Discover your primary love language and learn how to communicate better in dating relationships. Get personalized tips for expressing and receiving love."
          keywords="love language results, dating communication, relationship advice, love languages test, dating tips, relationship compatibility"
          schemaData={schemaData}
        />
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className={`p-4 rounded-full ${primaryLanguage.bgColor}`}>
                  <PrimaryIcon className={`h-12 w-12 ${primaryLanguage.color}`} />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Your Primary Love Language
              </h1>
              <h2 className={`text-3xl font-semibold ${primaryLanguage.color} mb-4`}>
                {primaryLanguage.name}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {primaryLanguage.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Detailed Results */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-pink-600" />
                    Your Love Language Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {results.scores.map((result, index) => {
                      const LanguageIcon = result.language.icon;
                      return (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <LanguageIcon className={`h-4 w-4 ${result.language.color}`} />
                              <span className="font-medium">{result.language.name}</span>
                            </div>
                            <span className="text-sm font-semibold">{result.percentage}%</span>
                          </div>
                          <Progress value={result.percentage} className="h-2" />
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Dating Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-pink-600" />
                    Dating Tips for Your Love Language
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {primaryLanguage.name === "Words of Affirmation" && (
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <p className="text-sm">Tell your dates what you appreciate about them</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <p className="text-sm">Send encouraging texts throughout the day</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <p className="text-sm">Express your feelings verbally and often</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <p className="text-sm">Ask for verbal reassurance when you need it</p>
                        </div>
                      </div>
                    )}
                    
                    {primaryLanguage.name === "Receiving Gifts" && (
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <p className="text-sm">Notice and appreciate thoughtful gestures</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <p className="text-sm">Give small, meaningful gifts to show you care</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <p className="text-sm">Remember special dates and occasions</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <p className="text-sm">Explain that gifts symbolize love for you</p>
                        </div>
                      </div>
                    )}

                    {primaryLanguage.name === "Acts of Service" && (
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <p className="text-sm">Offer to help with tasks and responsibilities</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <p className="text-sm">Show appreciation when someone helps you</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <p className="text-sm">Be specific about how your partner can help</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <p className="text-sm">Value actions over words in relationships</p>
                        </div>
                      </div>
                    )}

                    {primaryLanguage.name === "Quality Time" && (
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <p className="text-sm">Plan device-free dates and activities</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <p className="text-sm">Give your full attention during conversations</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <p className="text-sm">Schedule regular one-on-one time</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <p className="text-sm">Communicate when you need focused attention</p>
                        </div>
                      </div>
                    )}

                    {primaryLanguage.name === "Physical Touch" && (
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <p className="text-sm">Communicate your comfort level with touch</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <p className="text-sm">Show affection through appropriate physical contact</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <p className="text-sm">Be mindful of your partner's boundaries</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <p className="text-sm">Use non-sexual touch to show care</p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Relationship Success Tips */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-pink-600" />
                  Using Love Languages for Dating Success
                </CardTitle>
                <CardDescription>
                  How understanding love languages can improve your dating life
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-gray-900">Understanding Yourself</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Know how you prefer to receive love and affection</li>
                      <li>• Communicate your needs clearly to potential partners</li>
                      <li>• Recognize when your needs aren't being met</li>
                      <li>• Understand that your love language may change over time</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-gray-900">Understanding Others</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Observe how others express and receive love</li>
                      <li>• Ask about their love language preferences</li>
                      <li>• Adapt your expression of love to their language</li>
                      <li>• Practice empathy when love languages differ</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-pink-50 rounded-lg">
                  <h4 className="font-semibold text-pink-800 mb-2">💡 Pro Tip for Dating</h4>
                  <p className="text-sm text-pink-700">
                    Share your love language results early in dating relationships! It helps both partners understand 
                    how to make each other feel loved and appreciated, leading to stronger connections and fewer misunderstandings.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="text-center space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={restartTest} variant="outline" size="lg">
                  Retake Test
                </Button>
                <Link to="/relationship-compatibility">
                  <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                    <Users className="h-4 w-4 mr-2" />
                    Test Compatibility
                  </Button>
                </Link>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/dating-red-flags-checklist" className="text-sm text-pink-600 hover:text-pink-800 underline">
                  Dating Red Flags Checklist
                </Link>
                <Link to="/dating-tips" className="text-sm text-pink-600 hover:text-pink-800 underline">
                  Dating Tips & Advice
                </Link>
                <Link to="/texting-rules-dating" className="text-sm text-pink-600 hover:text-pink-800 underline">
                  Texting Rules for Dating
                </Link>
                <Link to="/" className="text-sm text-pink-600 hover:text-pink-800 underline">
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
        title="Love Languages Test for Dating - Discover Your Communication Style"
        description="Take this free love languages test to discover how you express and receive love in dating relationships. Based on Dr. Gary Chapman's 5 Love Languages theory with dating-specific insights."
        keywords="love languages test, dating communication, relationship quiz, love language quiz, dating compatibility, relationship advice, communication styles, dating tips"
        schemaData={schemaData}
      />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-pink-100 rounded-full">
                <Heart className="h-12 w-12 text-pink-600" fill="currentColor" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Love Languages Test for Dating
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover how you express and receive love in dating relationships. Understanding your love language 
              can transform your dating experience and help you build stronger connections.
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
                        className="w-full text-left justify-start h-auto p-4 hover:bg-pink-50 hover:border-pink-300"
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
                  <CardTitle className="text-center">The 5 Love Languages in Dating</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {loveLanguages.map((language, index) => {
                      const Icon = language.icon;
                      return (
                        <div key={index} className={`p-4 rounded-lg ${language.bgColor}`}>
                          <div className="flex items-center gap-2 mb-2">
                            <Icon className={`h-5 w-5 ${language.color}`} />
                            <h4 className={`font-medium ${language.color}`}>{language.name}</h4>
                          </div>
                          <p className="text-sm text-gray-600">{language.description}</p>
                        </div>
                      );
                    })}
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
                  <CardTitle className="text-center">Why Love Languages Matter in Dating</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <MessageCircle className="h-6 w-6 text-pink-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Better Communication</h3>
                      <p className="text-sm text-gray-600">
                        Understand how to express your needs and recognize when others are showing love
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Stronger Connections</h3>
                      <p className="text-sm text-gray-600">
                        Build deeper relationships by understanding how you and your partner connect best
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <TrendingUp className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Dating Success</h3>
                      <p className="text-sm text-gray-600">
                        Improve your dating outcomes by matching communication styles with compatible partners
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

export default LoveLanguagesTest;