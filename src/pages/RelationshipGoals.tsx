import { Link } from "react-router-dom";
import { Target, Heart, Calendar, Trophy, Users, ArrowRight, CheckCircle, Star, Sparkles } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const RelationshipGoals = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Relationship Goals 2024 - Build Your Dream Partnership",
    "description": "Set meaningful relationship goals that strengthen your bond. Discover healthy couple goals, communication objectives, and practical steps to build your dream partnership.",
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
      "@id": "https://delusionfemalecalculator.com/relationship-goals"
    }
  };

  const goalCategories = [
    {
      icon: <Heart className="h-6 w-6 text-rose-500" />,
      category: "Emotional Connection",
      description: "Deepen your emotional bond and understanding of each other.",
      goals: [
        "Practice daily gratitude for your partner",
        "Share one meaningful conversation weekly",
        "Learn your partner's love language fluently",
        "Create new rituals for emotional intimacy",
        "Support each other through challenges"
      ],
      timeframe: "Ongoing",
      benefits: "Stronger emotional bond, better understanding, increased intimacy"
    },
    {
      icon: <Users className="h-6 w-6 text-rose-500" />,
      category: "Communication Skills",
      description: "Build healthier communication patterns and conflict resolution skills.",
      goals: [
        "Listen without interrupting during discussions",
        "Use 'I' statements instead of 'you' accusations",
        "Schedule weekly relationship check-ins",
        "Practice constructive conflict resolution",
        "Express needs and boundaries clearly"
      ],
      timeframe: "3-6 months",
      benefits: "Fewer arguments, better understanding, stronger partnership"
    },
    {
      icon: <Target className="h-6 w-6 text-rose-500" />,
      category: "Shared Life Vision",
      description: "Align your future plans and create common goals to work toward together.",
      goals: [
        "Discuss and align career aspirations",
        "Plan major life milestones together",
        "Create shared financial goals",
        "Decide on family planning timeline",
        "Choose living arrangements and locations"
      ],
      timeframe: "6-12 months",
      benefits: "Clear direction, reduced conflict, shared purpose"
    },
    {
      icon: <Sparkles className="h-6 w-6 text-rose-500" />,
      category: "Personal Growth",
      description: "Support each other's individual development while growing together.",
      goals: [
        "Pursue individual hobbies and interests",
        "Support partner's personal goals",
        "Maintain friendships outside the relationship",
        "Practice self-care and mental health",
        "Learn new skills together"
      ],
      timeframe: "Ongoing",
      benefits: "Individual fulfillment, mutual respect, interesting conversations"
    }
  ];

  const monthlyGoals = [
    {
      month: "Month 1-2: Foundation Building",
      focus: "Establishing healthy patterns and communication",
      goals: [
        "Have one deep conversation weekly",
        "Establish daily appreciation practice",
        "Create phone-free time together",
        "Plan one new activity together"
      ]
    },
    {
      month: "Month 3-4: Deepening Connection",
      focus: "Understanding each other's needs and preferences",
      goals: [
        "Take love languages test together",
        "Share childhood memories and stories",
        "Discuss future dreams and aspirations",
        "Create couple traditions or rituals"
      ]
    },
    {
      month: "Month 5-6: Conflict Resolution",
      focus: "Learning to navigate disagreements healthily",
      goals: [
        "Practice active listening techniques",
        "Establish rules for fair fighting",
        "Learn to apologize meaningfully",
        "Develop problem-solving strategies"
      ]
    },
    {
      month: "Month 7-8: Intimacy & Romance",
      focus: "Nurturing physical and emotional intimacy",
      goals: [
        "Plan surprise dates for each other",
        "Express physical affection daily",
        "Share vulnerabilities and fears",
        "Create romantic gestures regularly"
      ]
    },
    {
      month: "Month 9-10: Future Planning",
      focus: "Aligning long-term goals and visions",
      goals: [
        "Discuss financial goals and budgeting",
        "Plan major life decisions together",
        "Talk about family and career balance",
        "Set relationship milestones"
      ]
    },
    {
      month: "Month 11-12: Celebration & Reflection",
      focus: "Appreciating growth and planning ahead",
      goals: [
        "Celebrate relationship milestones",
        "Reflect on growth and progress",
        "Set goals for the following year",
        "Plan a special trip or experience"
      ]
    }
  ];

  const healthyGoalExamples = [
    {
      type: "Short-term (1-3 months)",
      examples: [
        "Text each other one appreciative message daily",
        "Have a weekly date night without phones",
        "Take turns planning surprise activities",
        "Share one thing you're grateful for each evening",
        "Learn to cook a new cuisine together"
      ]
    },
    {
      type: "Medium-term (3-12 months)",
      examples: [
        "Take a relationship communication course",
        "Save together for a major purchase or trip",
        "Establish and maintain healthy boundaries",
        "Develop shared hobbies or interests",
        "Create a 5-year relationship vision board"
      ]
    },
    {
      type: "Long-term (1+ years)",
      examples: [
        "Build a strong emergency fund together",
        "Purchase a home or make major life decisions",
        "Travel to a dream destination together",
        "Support each other's career advancement",
        "Create lasting family traditions"
      ]
    }
  ];

  const goalMistakes = [
    {
      mistake: "Setting Unrealistic Expectations",
      example: "Expecting to never argue again after one month",
      correction: "Focus on improving communication patterns gradually over time"
    },
    {
      mistake: "Trying to Change Your Partner",
      example: "Setting goals to make your partner more social/organized/etc.",
      correction: "Focus on your own behavior and supporting your partner's self-chosen growth"
    },
    {
      mistake: "Comparing to Other Couples",
      example: "Wanting your relationship to look like social media couples",
      correction: "Set goals based on your unique relationship needs and values"
    },
    {
      mistake: "Ignoring Individual Needs",
      example: "Only setting couple goals without personal development",
      correction: "Balance relationship goals with individual growth and interests"
    },
    {
      mistake: "Not Tracking Progress",
      example: "Setting goals but never checking in on progress",
      correction: "Schedule regular reviews to celebrate progress and adjust goals"
    }
  ];

  const goalSettingTips = [
    {
      tip: "Make Goals SMART",
      explanation: "Specific, Measurable, Achievable, Relevant, Time-bound",
      example: "Instead of 'communicate better,' try 'have one uninterrupted 30-minute conversation weekly'"
    },
    {
      tip: "Start Small",
      explanation: "Begin with easily achievable goals to build momentum",
      example: "Start with 5-minute daily gratitude sharing before attempting hour-long deep talks"
    },
    {
      tip: "Include Both Partners",
      explanation: "Ensure both people contribute to goal setting and feel ownership",
      example: "Take turns suggesting goals and ensure both partners are excited about them"
    },
    {
      tip: "Regular Check-ins",
      explanation: "Schedule monthly reviews to assess progress and adjust",
      example: "First Sunday of each month, discuss what's working and what needs adjustment"
    },
    {
      tip: "Celebrate Achievements",
      explanation: "Acknowledge progress and celebrate milestones together",
      example: "Plan a special date when you achieve a relationship goal"
    }
  ];

  const inspirationalGoals = [
    "Travel to a new country together and create lasting memories",
    "Learn a new language together and practice with each other",
    "Volunteer for a cause you both care about",
    "Take a dance class and learn to move together",
    "Start a garden or grow something beautiful together",
    "Read the same book and discuss it chapter by chapter",
    "Learn to cook each other's favorite childhood meals",
    "Create a photo album of your relationship journey",
    "Write letters to your future selves to open in 5 years",
    "Build something together (furniture, artwork, etc.)"
  ];

  return (
    <>
      <SEOHead
        title="Relationship Goals 2024 - Build Your Dream Partnership Together"
        description="Set meaningful relationship goals that strengthen your bond. Discover healthy couple goals, monthly challenges, and practical steps to build the partnership of your dreams."
        keywords="relationship goals, couple goals, healthy relationship goals, relationship objectives, partnership goals, couples goals ideas, relationship milestones, building strong relationships"
        schemaData={schemaData}
      />

      <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-rose-100 text-rose-700 hover:bg-rose-200">
              Couple Goals
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Build Your Dream 
              <span className="text-rose-600"> Relationship Goals</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Set meaningful goals that strengthen your partnership, deepen your connection, 
              and create the loving relationship you both deserve.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Evidence-based goals
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Practical action steps
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Real relationship growth
              </span>
            </div>
          </div>
        </section>

        {/* Goal Categories */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                4 Essential Relationship Goal Categories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Build a well-rounded relationship by setting goals in these key areas 
                that matter most for lasting love and partnership.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {goalCategories.map((category, index) => (
                <Card key={index} className="border-2 border-rose-100 hover:border-rose-200 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      {category.icon}
                      <CardTitle className="text-xl">{category.category}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Goal Examples:</h4>
                      <ul className="space-y-2">
                        {category.goals.map((goal, goalIndex) => (
                          <li key={goalIndex} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="bg-blue-50 p-2 rounded">
                        <span className="font-medium text-blue-800">Timeframe: </span>
                        <span className="text-blue-700">{category.timeframe}</span>
                      </div>
                      <div className="bg-green-50 p-2 rounded">
                        <span className="font-medium text-green-800">Benefits: </span>
                        <span className="text-green-700">{category.benefits}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 12-Month Goal Plan */}
        <section className="py-16 px-4 bg-white/80">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                12-Month Relationship Growth Plan
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Follow this structured approach to systematically strengthen your relationship 
                over the course of a year with focused monthly themes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {monthlyGoals.map((month, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                        <span className="text-rose-600 font-bold text-sm">{Math.floor(index/2) + 1}</span>
                      </div>
                      <CardTitle className="text-lg">{month.month}</CardTitle>
                    </div>
                    <CardDescription>{month.focus}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {month.goals.map((goal, goalIndex) => (
                        <li key={goalIndex} className="flex items-start gap-2">
                          <Target className="h-4 w-4 text-rose-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Healthy Goal Examples */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Healthy Relationship Goals by Timeline
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Set goals that match your relationship timeline and current stage. 
                Start with short-term goals and build toward longer-term objectives.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {healthyGoalExamples.map((timeframe, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-rose-700">{timeframe.type}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {timeframe.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Goal Setting Tips */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Smart Goal Setting for Couples
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Follow these proven strategies to set relationship goals that actually 
                work and create lasting positive change in your partnership.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {goalSettingTips.map((tip, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{tip.tip}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm text-gray-600">{tip.explanation}</p>
                      <div className="bg-rose-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-rose-900 mb-1">Example:</p>
                        <p className="text-sm text-rose-800">{tip.example}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Avoid These Common Goal-Setting Mistakes
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Learn from these common pitfalls to set more effective, achievable relationship goals.
              </p>
            </div>

            <div className="grid gap-6">
              {goalMistakes.map((mistake, index) => (
                <Card key={index} className="p-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-red-700 mb-2">{mistake.mistake}</h3>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-red-900 mb-1">❌ Wrong approach:</p>
                      <p className="text-sm text-red-800">{mistake.example}</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-green-900 mb-1">✅ Better approach:</p>
                      <p className="text-sm text-green-800">{mistake.correction}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Inspirational Goals */}
        <section className="py-16 px-4 bg-gradient-to-r from-rose-100 to-pink-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Inspirational Couple Goals Ideas
              </h2>
              <p className="text-lg text-gray-600">
                Get inspired with these creative and meaningful goals that can bring you closer together.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {inspirationalGoals.map((goal, index) => (
                <Card key={index} className="p-4 hover:shadow-md transition-shadow bg-white/80">
                  <div className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{goal}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Tools to Achieve Your Relationship Goals
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/healthy-relationships-guide" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Heart className="h-8 w-8 text-rose-500 mb-4" />
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-rose-600 transition-colors">
                      Healthy Relationships Guide
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Learn the foundations needed to achieve your relationship goals.
                    </p>
                    <span className="text-rose-600 font-medium flex items-center gap-1">
                      Learn Foundations <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/relationship-communication-guide" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Users className="h-8 w-8 text-rose-500 mb-4" />
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-rose-600 transition-colors">
                      Communication Guide
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Master the communication skills needed for successful goal achievement.
                    </p>
                    <span className="text-rose-600 font-medium flex items-center gap-1">
                      Improve Communication <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/love-languages-test" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Trophy className="h-8 w-8 text-rose-500 mb-4" />
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-rose-600 transition-colors">
                      Love Languages Test
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Understand how to show love effectively as you work toward your goals.
                    </p>
                    <span className="text-rose-600 font-medium flex items-center gap-1">
                      Take Test <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Building Your Dream Relationship Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Before setting relationship goals, understand your current dating standards and expectations.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Try Our Dating Calculator <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default RelationshipGoals;