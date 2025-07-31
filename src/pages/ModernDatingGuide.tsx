import { Link } from "react-router-dom";
import { Smartphone, Calendar, MessageSquare, Users, TrendingUp, ArrowRight, CheckCircle, AlertTriangle, Heart } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ModernDatingGuide = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Modern Dating Guide 2025 - Navigate Today's Dating Landscape",
    "description": "Master modern dating in 2025 with our comprehensive guide. Learn about dating apps, online dating strategies, Gen Z dating trends, and how to find meaningful connections.",
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
      "@id": "https://delusionfemalecalculator.com/modern-dating-guide"
    }
  };

  const datingTrends2024 = [
    {
      icon: <Smartphone className="h-6 w-6 text-blue-500" />,
      trend: "Video Dating Rise",
      description: "Video calls before meeting in person became the new standard for safety and connection.",
      impact: "75% of singles now prefer video dates before meeting IRL",
      tips: ["Good lighting is essential", "Test your tech beforehand", "Keep it 30-45 minutes max"]
    },
    {
      icon: <Calendar className="h-6 w-6 text-blue-500" />,
      trend: "Slow Dating Movement",
      description: "People are taking more time to get to know each other before physical meetings.",
      impact: "Average time from match to first date increased by 40%",
      tips: ["Build emotional connection first", "Ask meaningful questions", "Don't rush physical intimacy"]
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      trend: "Values-Based Matching",
      description: "Shared values and life goals matter more than superficial attraction.",
      impact: "67% prioritize compatibility over physical appearance",
      tips: ["Be clear about your values", "Ask about life goals early", "Don't compromise on core beliefs"]
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-500" />,
      trend: "Mental Health Awareness",
      description: "Open discussions about mental health and therapy are becoming normalized.",
      impact: "Mental health compatibility is now a top priority",
      tips: ["Be honest about your journey", "Support your partner's growth", "Seek professional help when needed"]
    }
  ];

  const appStrategies = [
    {
      app: "Tinder",
      focus: "Quick connections & casual dating",
      strategy: "High-quality photos, witty bio, fast responses",
      bestFor: "Meeting lots of people quickly",
      tips: ["Use all 9 photo slots", "Include group photos", "Be genuine in conversations"]
    },
    {
      app: "Bumble",
      focus: "Women make the first move",
      strategy: "Professional photos, detailed bio, thoughtful openers",
      bestFor: "Serious relationships & professional networking",
      tips: ["24-hour response rule", "Ask engaging questions", "Use Bumble BFF for friends"]
    },
    {
      app: "Hinge",
      focus: "Designed to be deleted",
      strategy: "Authentic prompts, conversation starters, quality over quantity",
      bestFor: "Long-term relationships",
      tips: ["Answer prompts creatively", "Comment on photos/prompts", "Use voice notes"]
    },
    {
      app: "Coffee Meets Bagel",
      focus: "Quality matches daily",
      strategy: "Detailed preferences, patient approach, meaningful connections",
      bestFor: "Busy professionals seeking quality",
      tips: ["Take time with matches", "Use all profile sections", "Be selective but open"]
    }
  ];

  const modernChallenges = [
    {
      challenge: "Dating App Fatigue",
      description: "Feeling overwhelmed by endless swiping and superficial connections.",
      solutions: [
        "Limit app usage to 30 minutes daily",
        "Focus on 2-3 quality apps max",
        "Take regular breaks from apps",
        "Meet people through hobbies and interests"
      ]
    },
    {
      challenge: "Ghosting Culture",
      description: "People disappearing without explanation has become normalized.",
      solutions: [
        "Communicate your intentions clearly",
        "Don't take ghosting personally",
        "Practice direct but kind communication",
        "Set realistic expectations early"
      ]
    },
    {
      challenge: "Choice Overload",
      description: "Too many options leading to inability to commit to one person.",
      solutions: [
        "Define what you're looking for",
        "Focus on potential, not perfection",
        "Give people genuine chances",
        "Avoid the 'grass is greener' mentality"
      ]
    },
    {
      challenge: "Social Media Pressure",
      description: "Comparing relationships to curated social media content.",
      solutions: [
        "Remember social media isn't reality",
        "Focus on your own journey",
        "Limit social media consumption",
        "Build genuine connections offline"
      ]
    }
  ];

  const generationDifferences = [
    {
      generation: "Gen Z (Born 1997-2012)",
      characteristics: [
        "Values authenticity over perfection",
        "Prefers texting to phone calls",
        "Cautious about meeting in person",
        "Prioritizes mental health discussions"
      ],
      datingStyle: "Slow, value-driven, digital-first",
      advice: "Be patient, genuine, and respect boundaries"
    },
    {
      generation: "Millennials (Born 1981-1996)",
      characteristics: [
        "Experienced both online and offline dating",
        "Values work-life balance",
        "Delay traditional milestones",
        "Open to various relationship styles"
      ],
      datingStyle: "Balanced digital and in-person approach",
      advice: "Focus on compatibility and shared goals"
    },
    {
      generation: "Gen X (Born 1965-1980)",
      characteristics: [
        "Adapting to digital dating later in life",
        "Values direct communication",
        "Often has children from previous relationships",
        "Seeks genuine partnership"
      ],
      datingStyle: "Traditional with modern adaptations",
      advice: "Be upfront about intentions and life situation"
    }
  ];

  const safetyTips = [
    "Always meet in public places for first dates",
    "Tell a friend your plans and location",
    "Trust your instincts - leave if something feels off",
    "Video chat before meeting in person",
    "Don't share personal information too quickly",
    "Have your own transportation to and from dates",
    "Research your date on social media beforehand",
    "Keep first dates short and casual"
  ];

  return (
    <>
      <SEOHead
        title="Modern Dating Guide 2025 - Navigate Today's Dating Landscape Successfully"
        description="Master modern dating with our complete 2025 guide. Learn dating app strategies, current trends, Gen Z dating culture, and how to find meaningful connections in today's digital world."
        keywords="modern dating 2025, dating in 2025, online dating guide, dating app strategies, digital dating, Gen Z dating, modern relationships, dating trends 2025, contemporary dating advice"
        schemaData={schemaData}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
              Updated for 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Complete 
              <span className="text-blue-600"> Modern Dating Guide</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Navigate today's complex dating landscape with confidence. From dating apps to Gen Z trends, 
              learn how to find meaningful connections in our digital world.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                2025 Dating trends
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                App-specific strategies
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Safety-first approach
              </span>
            </div>
          </div>
        </section>

        {/* Current Dating Trends */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Top Dating Trends Shaping 2025
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding current trends helps you adapt your dating strategy for success 
                in today's evolving romantic landscape.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {datingTrends2024.map((trend, index) => (
                <Card key={index} className="border-2 border-blue-100 hover:border-blue-200 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      {trend.icon}
                      <CardTitle className="text-xl">{trend.trend}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {trend.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-blue-50 p-3 rounded-lg mb-4">
                      <p className="text-sm font-medium text-blue-800">{trend.impact}</p>
                    </div>
                    <ul className="space-y-2">
                      {trend.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Dating App Strategies */}
        <section className="py-16 px-4 bg-white/80">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Platform-Specific Dating Strategies
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Each dating app has its own culture and best practices. Tailor your approach 
                for maximum success on every platform.
              </p>
            </div>

            <div className="grid gap-6">
              {appStrategies.map((app, index) => (
                <Card key={index} className="p-6">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{app.app}</h3>
                      <p className="text-sm text-gray-600 mb-2">{app.focus}</p>
                      <Badge variant="outline" className="text-xs">{app.bestFor}</Badge>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Strategy</h4>
                      <p className="text-sm text-gray-600">{app.strategy}</p>
                    </div>
                    <div className="md:col-span-2">
                      <h4 className="font-semibold text-gray-900 mb-2">Pro Tips</h4>
                      <ul className="space-y-1">
                        {app.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="text-sm text-gray-600 flex items-start gap-2">
                            <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Modern Dating Challenges */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Overcoming Modern Dating Challenges
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Today's dating world presents unique challenges. Here's how to navigate them 
                successfully while maintaining your mental health and authenticity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {modernChallenges.map((challenge, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <AlertTriangle className="h-5 w-5 text-orange-500" />
                      {challenge.challenge}
                    </CardTitle>
                    <CardDescription>{challenge.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-gray-900 mb-3">Solutions:</h4>
                    <ul className="space-y-2">
                      {challenge.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Generation Dating Styles */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Dating Across Generations
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding generational differences in dating can help you connect better 
                with people from different age groups and backgrounds.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {generationDifferences.map((gen, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{gen.generation}</CardTitle>
                    <Badge variant="secondary">{gen.datingStyle}</Badge>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-gray-900 mb-3">Characteristics:</h4>
                    <ul className="space-y-2 mb-4">
                      {gen.characteristics.map((char, charIndex) => (
                        <li key={charIndex} className="text-sm text-gray-600 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          {char}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-blue-900 mb-1">Dating Advice:</p>
                      <p className="text-sm text-blue-800">{gen.advice}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Safety First */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Dating Safety in 2025
              </h2>
              <p className="text-lg text-gray-600">
                Your safety should always be the top priority when meeting new people. 
                Follow these essential safety guidelines for all your dating interactions.
              </p>
            </div>

            <Card className="border-2 border-red-100">
              <CardHeader className="bg-red-50">
                <CardTitle className="flex items-center gap-2 text-red-700">
                  <AlertTriangle className="h-5 w-5" />
                  Essential Safety Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {safetyTips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{tip}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Essential Modern Dating Resources
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/dating-confidence-tips" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <TrendingUp className="h-8 w-8 text-blue-500 mb-4" />
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                      Dating Confidence Tips
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Build the confidence needed to succeed in today's dating world.
                    </p>
                    <span className="text-blue-600 font-medium flex items-center gap-1">
                      Build Confidence <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/dating-profile-tips" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <MessageSquare className="h-8 w-8 text-blue-500 mb-4" />
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                      Profile Optimization
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Create compelling dating profiles that attract quality matches.
                    </p>
                    <span className="text-blue-600 font-medium flex items-center gap-1">
                      Optimize Profile <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/dating-red-flags-checklist" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <AlertTriangle className="h-8 w-8 text-blue-500 mb-4" />
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                      Red Flags Guide
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Identify warning signs and protect yourself in modern dating.
                    </p>
                    <span className="text-blue-600 font-medium flex items-center gap-1">
                      Learn Signs <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Master Modern Dating?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start by understanding your dating standards and building realistic expectations for 2025's dating world.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Try Our Dating Calculator <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ModernDatingGuide;