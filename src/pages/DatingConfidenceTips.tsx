import { Link } from "react-router-dom";
import { Zap, Target, Smile, Sparkles, ArrowRight, CheckCircle, Star, Heart } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DatingConfidenceTips = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Dating Confidence Tips 2024 - Build Self-Confidence for Dating Success",
    "description": "Boost your dating confidence with proven tips and strategies. Learn how to overcome dating anxiety, build self-esteem, and attract quality partners naturally.",
    "author": {
      "@type": "Organization",
      "name": "Female Delusion Calculator"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Female Delusion Calculator"
    },
    "datePublished": "2024-01-01",
    "dateModified": "2024-01-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://delusionfemalecalculator.com/dating-confidence-tips"
    }
  };

  const confidenceBuilders = [
    {
      icon: <Smile className="h-6 w-6 text-pink-500" />,
      title: "Self-Acceptance",
      description: "Embrace who you are, including your imperfections. Authentic confidence comes from self-love.",
      actionSteps: [
        "Practice positive self-talk daily",
        "List your strengths and accomplishments",
        "Accept compliments gracefully",
        "Stop comparing yourself to others"
      ]
    },
    {
      icon: <Target className="h-6 w-6 text-pink-500" />,
      title: "Set Realistic Goals",
      description: "Build confidence through achievable dating goals and personal growth milestones.",
      actionSteps: [
        "Set weekly social interaction goals",
        "Practice conversation skills with friends",
        "Work on one improvement area at a time",
        "Celebrate small victories"
      ]
    },
    {
      icon: <Zap className="h-6 w-6 text-pink-500" />,
      title: "Body Language Power",
      description: "Your posture and presence communicate confidence before you even speak.",
      actionSteps: [
        "Stand tall with shoulders back",
        "Make appropriate eye contact",
        "Use open, welcoming gestures",
        "Practice confident walking"
      ]
    },
    {
      icon: <Sparkles className="h-6 w-6 text-pink-500" />,
      title: "Personal Style",
      description: "When you look good, you feel good. Develop a style that makes you feel confident.",
      actionSteps: [
        "Invest in well-fitting clothes",
        "Develop a grooming routine",
        "Find colors that suit you",
        "Dress for your personality"
      ]
    }
  ];

  const overcomingAnxiety = [
    {
      challenge: "First Date Nerves",
      solution: "Prepare conversation topics in advance and choose familiar, comfortable venues.",
      tip: "Remember: they're probably just as nervous as you are!"
    },
    {
      challenge: "Fear of Rejection",
      solution: "Reframe rejection as redirection toward someone more compatible.",
      tip: "Every 'no' gets you closer to the right 'yes'."
    },
    {
      challenge: "Comparison to Others",
      solution: "Focus on your unique qualities and what you bring to relationships.",
      tip: "Your right person will appreciate your authentic self."
    },
    {
      challenge: "Past Relationship Trauma",
      solution: "Consider therapy and take time to heal before entering new relationships.",
      tip: "Healing isn't linear, but it's necessary for healthy future relationships."
    }
  ];

  const confidenceHabits = [
    "Practice daily affirmations",
    "Exercise regularly for endorphins",
    "Learn new skills or hobbies",
    "Maintain good posture",
    "Dress in clothes that make you feel good",
    "Practice gratitude daily",
    "Set and achieve small goals",
    "Surround yourself with supportive people",
    "Practice mindfulness and meditation",
    "Take care of your physical health"
  ];

  const conversationStarters = [
    {
      situation: "Online Dating Match",
      starter: "I noticed you love hiking too! What's your favorite trail you've discovered recently?",
      why: "Shows you read their profile and creates an opportunity for shared experiences."
    },
    {
      situation: "Coffee Shop Meeting",
      starter: "This place has great energy. Do you come here often, or are you exploring like me?",
      why: "Natural, situational conversation that's not overly personal."
    },
    {
      situation: "Social Event",
      starter: "How do you know [host's name]? I'm always curious about the stories behind friendships.",
      why: "Creates natural conversation flow and shows genuine interest."
    },
    {
      situation: "Dating App First Message",
      starter: "Your photo at [specific location] caught my eye - I've always wanted to visit there! What was the highlight?",
      why: "Personal but not invasive, and shows you paid attention to their photos."
    }
  ];

  return (
    <>
      <SEOHead
        title="Dating Confidence Tips 2024 - Build Self-Confidence for Dating Success"
        description="Boost your dating confidence with expert tips and proven strategies. Learn how to overcome dating anxiety, build self-esteem, and attract quality partners with authentic confidence."
        keywords="dating confidence, self confidence dating, confidence tips, dating anxiety, building confidence, dating self esteem, overcome dating nerves, confident dating, dating mindset, social confidence"
        schemaData={schemaData}
      />

      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">
              Confidence & Mindset
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Build Unshakeable 
              <span className="text-purple-600"> Dating Confidence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your dating life with proven confidence-building strategies. 
              Overcome anxiety, embrace your authentic self, and attract meaningful connections naturally.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Psychology-backed methods
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Practical daily habits
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Real confidence building
              </span>
            </div>
          </div>
        </section>

        {/* The Confidence Framework */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The 4 Pillars of Dating Confidence
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                True confidence isn't about pretending to be someone else—it's about 
                becoming the best version of yourself and feeling comfortable in your own skin.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {confidenceBuilders.map((pillar, index) => (
                <Card key={index} className="border-2 border-purple-100 hover:border-purple-200 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      {pillar.icon}
                      <CardTitle className="text-xl">{pillar.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {pillar.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {pillar.actionSteps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Overcoming Dating Anxiety */}
        <section className="py-16 px-4 bg-white/80">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Overcome Common Dating Anxieties
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Everyone experiences dating nerves. The key is learning how to manage them 
                and turn nervous energy into confident excitement.
              </p>
            </div>

            <div className="grid gap-6">
              {overcomingAnxiety.map((item, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.challenge}</h3>
                    </div>
                    <div className="md:w-1/2">
                      <p className="text-gray-600 mb-2"><strong>Solution:</strong> {item.solution}</p>
                    </div>
                    <div className="md:w-1/4">
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <p className="text-sm text-purple-800"><strong>Pro Tip:</strong> {item.tip}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Confidence Habits */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                10 Daily Habits for Lasting Confidence
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Confidence is built through consistent daily practices. Incorporate these habits 
                into your routine to develop unshakeable self-assurance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {confidenceHabits.map((habit, index) => (
                <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-gray-700 font-medium">{habit}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Confident Conversation Starters */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Confident Conversation Starters
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Great conversations start with confidence. Here are proven conversation starters 
                that show interest while keeping the vibe natural and engaging.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {conversationStarters.map((starter, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-700">{starter.situation}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-purple-50 p-4 rounded-lg mb-4">
                      <p className="text-purple-900 font-medium">"{starter.starter}"</p>
                    </div>
                    <p className="text-sm text-gray-600">
                      <strong>Why it works:</strong> {starter.why}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Confidence Myths */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Confidence Myths vs. Reality
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-red-700 mb-2">❌ MYTH</h3>
                    <p className="text-red-600">"Confident people never feel nervous or insecure."</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-700 mb-2">✅ REALITY</h3>
                    <p className="text-green-600">"Confident people feel nervous but act despite their fears."</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-red-700 mb-2">❌ MYTH</h3>
                    <p className="text-red-600">"You need to be perfect to be confident."</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-700 mb-2">✅ REALITY</h3>
                    <p className="text-green-600">"Confidence comes from accepting your imperfections and growing from them."</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-red-700 mb-2">❌ MYTH</h3>
                    <p className="text-red-600">"Confidence means being the loudest person in the room."</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-700 mb-2">✅ REALITY</h3>
                    <p className="text-green-600">"True confidence is quiet self-assurance and authentic presence."</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Continue Your Confidence Journey
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/dating-tips" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Star className="h-8 w-8 text-purple-500 mb-4" />
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                      Dating Tips
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Practical advice for navigating the modern dating world with confidence.
                    </p>
                    <span className="text-purple-600 font-medium flex items-center gap-1">
                      Read Tips <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/what-men-find-attractive" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Heart className="h-8 w-8 text-purple-500 mb-4" />
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                      What Men Find Attractive
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Understanding attraction from a psychological perspective.
                    </p>
                    <span className="text-purple-600 font-medium flex items-center gap-1">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/dating-profile-tips" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Sparkles className="h-8 w-8 text-purple-500 mb-4" />
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                      Dating Profile Tips
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Create an authentic, confident online dating profile that attracts quality matches.
                    </p>
                    <span className="text-purple-600 font-medium flex items-center gap-1">
                      Get Tips <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Date with Confidence?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start by understanding your dating standards and building realistic expectations.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Try Our Dating Calculator <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default DatingConfidenceTips;