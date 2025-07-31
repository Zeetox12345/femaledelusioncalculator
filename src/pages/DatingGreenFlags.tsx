import { useState } from "react";
import { Check, Heart, Users, MessageCircle, Clock, Shield, Lightbulb, Target, TrendingUp, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const DatingGreenFlags = () => {
  const [checkedFlags, setCheckedFlags] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const greenFlags = [
    {
      id: 1,
      category: "Communication",
      icon: MessageCircle,
      flag: "They listen actively when you speak",
      description: "Shows genuine interest in what you're saying, asks follow-up questions, and remembers details from previous conversations.",
      importance: "high"
    },
    {
      id: 2,
      category: "Communication",
      icon: MessageCircle,
      flag: "They express their feelings openly",
      description: "Comfortable sharing emotions, thoughts, and concerns rather than bottling things up or expecting you to guess.",
      importance: "high"
    },
    {
      id: 3,
      category: "Communication",
      icon: MessageCircle,
      flag: "They respond to texts in a reasonable timeframe",
      description: "While not immediate, they generally respond within a few hours during waking hours and communicate if they'll be unavailable.",
      importance: "medium"
    },
    {
      id: 4,
      category: "Communication",
      icon: MessageCircle,
      flag: "They discuss problems constructively",
      description: "Approaches conflicts with a solution-oriented mindset rather than blame, criticism, or defensiveness.",
      importance: "high"
    },
    {
      id: 5,
      category: "Communication",
      icon: MessageCircle,
      flag: "They ask about your day and remember details",
      description: "Shows genuine interest in your daily life, work, and experiences, demonstrating they care about you as a person.",
      importance: "medium"
    },

    {
      id: 6,
      category: "Respect & Boundaries",
      icon: Shield,
      flag: "They respect your boundaries without pushback",
      description: "Accepts your 'no' gracefully and doesn't try to convince, manipulate, or guilt you into changing your mind.",
      importance: "high"
    },
    {
      id: 7,
      category: "Respect & Boundaries",
      icon: Shield,
      flag: "They treat service workers kindly",
      description: "Shows respect to waiters, cashiers, delivery drivers, and other service workers - indicating general character.",
      importance: "high"
    },
    {
      id: 8,
      category: "Respect & Boundaries",
      icon: Shield,
      flag: "They give you space when you need it",
      description: "Understands when you need time alone or with friends and doesn't take it personally or try to interfere.",
      importance: "medium"
    },
    {
      id: 9,
      category: "Respect & Boundaries",
      icon: Shield,
      flag: "They support your goals and ambitions",
      description: "Encourages your dreams, celebrates your successes, and doesn't feel threatened by your achievements.",
      importance: "high"
    },
    {
      id: 10,
      category: "Respect & Boundaries",
      icon: Shield,
      flag: "They introduce you to friends and family",
      description: "Willing to integrate you into their social circle and doesn't keep your relationship secret or separate.",
      importance: "medium"
    },

    {
      id: 11,
      category: "Emotional Health",
      icon: Heart,
      flag: "They regulate their emotions well",
      description: "Doesn't have explosive outbursts, can calm themselves down, and handles stress and frustration maturely.",
      importance: "high"
    },
    {
      id: 12,
      category: "Emotional Health",
      icon: Heart,
      flag: "They take responsibility for their mistakes",
      description: "Genuinely apologizes when wrong, doesn't make excuses, and takes action to make things right.",
      importance: "high"
    },
    {
      id: 13,
      category: "Emotional Health",
      icon: Heart,
      flag: "They show empathy and compassion",
      description: "Can put themselves in others' shoes, shows concern for people's feelings, and responds appropriately to distress.",
      importance: "high"
    },
    {
      id: 14,
      category: "Emotional Health",
      icon: Heart,
      flag: "They have healthy coping mechanisms",
      description: "Deals with stress through healthy outlets like exercise, hobbies, or talking rather than substances or destructive behaviors.",
      importance: "medium"
    },
    {
      id: 15,
      category: "Emotional Health",
      icon: Heart,
      flag: "They celebrate your successes",
      description: "Genuinely happy for your achievements and milestones without making it about themselves or showing jealousy.",
      importance: "medium"
    },

    {
      id: 16,
      category: "Consistency & Reliability",
      icon: Clock,
      flag: "They follow through on their commitments",
      description: "Does what they say they'll do, shows up when planned, and keeps promises both big and small.",
      importance: "high"
    },
    {
      id: 17,
      category: "Consistency & Reliability",
      icon: Clock,
      flag: "Their words match their actions",
      description: "Consistent between what they say and what they do - no major contradictions between values and behavior.",
      importance: "high"
    },
    {
      id: 18,
      category: "Consistency & Reliability",
      icon: Clock,
      flag: "They make time for you consistently",
      description: "Regularly prioritizes spending time with you and doesn't frequently cancel or reschedule last minute.",
      importance: "medium"
    },
    {
      id: 19,
      category: "Consistency & Reliability",
      icon: Clock,
      flag: "They remember important dates and events",
      description: "Makes an effort to remember birthdays, anniversaries, important meetings, or events you've mentioned.",
      importance: "medium"
    },
    {
      id: 20,
      category: "Consistency & Reliability",
      icon: Clock,
      flag: "They show up during difficult times",
      description: "Available for support when you're sick, stressed, or going through challenges rather than disappearing.",
      importance: "high"
    },

    {
      id: 21,
      category: "Personal Growth",
      icon: TrendingUp,
      flag: "They work on self-improvement",
      description: "Actively tries to better themselves through learning, therapy, fitness, or personal development activities.",
      importance: "medium"
    },
    {
      id: 22,
      category: "Personal Growth",
      icon: TrendingUp,
      flag: "They have their own interests and hobbies",
      description: "Maintains independent interests and doesn't rely solely on you for entertainment or fulfillment.",
      importance: "medium"
    },
    {
      id: 23,
      category: "Personal Growth",
      icon: TrendingUp,
      flag: "They can admit when they don't know something",
      description: "Comfortable saying 'I don't know' rather than pretending or making things up to seem knowledgeable.",
      importance: "medium"
    },
    {
      id: 24,
      category: "Personal Growth",
      icon: TrendingUp,
      flag: "They learn from feedback and criticism",
      description: "Can receive constructive feedback without becoming defensive and uses it to improve their behavior.",
      importance: "high"
    },
    {
      id: 25,
      category: "Personal Growth",
      icon: TrendingUp,
      flag: "They have financial responsibility",
      description: "Manages money reasonably well, pays bills on time, and has realistic financial goals and habits.",
      importance: "medium"
    },

    {
      id: 26,
      category: "Social Connections",
      icon: Users,
      flag: "They maintain healthy friendships",
      description: "Has genuine, long-term friendships and speaks positively about their friends most of the time.",
      importance: "medium"
    },
    {
      id: 27,
      category: "Social Connections",
      icon: Users,
      flag: "They get along with your friends and family",
      description: "Makes an effort to connect with people important to you and shows respect even if they don't click perfectly.",
      importance: "medium"
    },
    {
      id: 28,
      category: "Social Connections",
      icon: Users,
      flag: "Their friends seem like good people",
      description: "The company they keep reflects their values - their friends are generally respectful and positive influences.",
      importance: "medium"
    },
    {
      id: 29,
      category: "Social Connections",
      icon: Users,
      flag: "They speak respectfully about exes",
      description: "Doesn't badmouth or obsess over past relationships, showing emotional maturity and respect for privacy.",
      importance: "high"
    },
    {
      id: 30,
      category: "Social Connections",
      icon: Users,
      flag: "They encourage your other relationships",
      description: "Supports your friendships and family relationships rather than trying to isolate you or create conflict.",
      importance: "high"
    }
  ];

  const categories = [
    { name: "Communication", icon: MessageCircle, color: "text-blue-600", bgColor: "bg-blue-50" },
    { name: "Respect & Boundaries", icon: Shield, color: "text-green-600", bgColor: "bg-green-50" },
    { name: "Emotional Health", icon: Heart, color: "text-red-600", bgColor: "bg-red-50" },
    { name: "Consistency & Reliability", icon: Clock, color: "text-purple-600", bgColor: "bg-purple-50" },
    { name: "Personal Growth", icon: TrendingUp, color: "text-orange-600", bgColor: "bg-orange-50" },
    { name: "Social Connections", icon: Users, color: "text-teal-600", bgColor: "bg-teal-50" }
  ];

  const toggleFlag = (flagId: number) => {
    const newChecked = new Set(checkedFlags);
    if (newChecked.has(flagId)) {
      newChecked.delete(flagId);
    } else {
      newChecked.add(flagId);
    }
    setCheckedFlags(newChecked);
  };

  const filteredFlags = selectedCategory 
    ? greenFlags.filter(flag => flag.category === selectedCategory)
    : greenFlags;

  const getScoreInfo = () => {
    const score = checkedFlags.size;
    const totalFlags = greenFlags.length;
    const percentage = Math.round((score / totalFlags) * 100);

    if (percentage >= 80) {
      return {
        level: "Excellent",
        color: "text-green-600",
        bgColor: "bg-green-50",
        description: "This person shows exceptional relationship potential with strong green flags across multiple areas."
      };
    } else if (percentage >= 60) {
      return {
        level: "Very Good",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        description: "This person demonstrates many positive relationship qualities. Focus on the areas that matter most to you."
      };
    } else if (percentage >= 40) {
      return {
        level: "Moderate",
        color: "text-yellow-600",
        bgColor: "bg-yellow-50",
        description: "This person shows some green flags but may need more time to develop or reveal other positive qualities."
      };
    } else if (percentage >= 20) {
      return {
        level: "Concerning",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        description: "Limited green flags observed. Consider if this person is emotionally ready for a healthy relationship."
      };
    } else {
      return {
        level: "Red Alert",
        color: "text-red-600",
        bgColor: "bg-red-50",
        description: "Very few positive relationship indicators. This person may not be ready for a healthy relationship."
      };
    }
  };

  const scoreInfo = getScoreInfo();
  const score = checkedFlags.size;
  const percentage = Math.round((score / greenFlags.length) * 100);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Dating Green Flags Checklist",
    "description": "Comprehensive checklist of positive dating signs and green flags in relationships. Identify healthy relationship behaviors and compatibility indicators.",
    "url": "https://delusionfemalecalculator.com/dating-green-flags",
    "applicationCategory": "LifestyleApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <SEOHead
        title="Dating Green Flags Checklist - Positive Relationship Signs to Look For"
        description="Complete checklist of green flags in dating relationships. Identify healthy behaviors, positive communication patterns, and relationship compatibility indicators for successful dating."
        keywords="dating green flags, healthy relationship signs, positive dating behaviors, relationship compatibility, dating checklist, good relationship qualities, healthy dating"
        schemaData={schemaData}
      />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-green-100 rounded-full">
                <Check className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Dating Green Flags Checklist
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Identify positive signs and healthy behaviors in your dating relationships. These green flags 
              indicate emotional maturity, compatibility, and relationship potential.
            </p>
          </div>

          {/* Score Display */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-center flex items-center justify-center gap-2">
                <Target className="h-5 w-5 text-green-600" />
                Your Green Flags Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${scoreInfo.bgColor} mb-4`}>
                  <Star className={`h-6 w-6 ${scoreInfo.color}`} />
                  <span className={`text-2xl font-bold ${scoreInfo.color}`}>
                    {score}/{greenFlags.length} - {scoreInfo.level}
                  </span>
                </div>
                <div className="max-w-md mx-auto mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm text-gray-600">{percentage}%</span>
                  </div>
                  <Progress value={percentage} className="h-3" />
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {scoreInfo.description}
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button
                    variant={selectedCategory === null ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setSelectedCategory(null)}
                  >
                    All Categories ({greenFlags.length})
                  </Button>
                  {categories.map((category) => {
                    const Icon = category.icon;
                    const categoryCount = greenFlags.filter(flag => flag.category === category.name).length;
                    const categoryChecked = greenFlags.filter(flag => 
                      flag.category === category.name && checkedFlags.has(flag.id)
                    ).length;
                    
                    return (
                      <Button
                        key={category.name}
                        variant={selectedCategory === category.name ? "default" : "outline"}
                        className="w-full justify-start"
                        onClick={() => setSelectedCategory(category.name)}
                      >
                        <Icon className={`h-4 w-4 mr-2 ${category.color}`} />
                        <div className="flex items-center justify-between w-full">
                          <span>{category.name}</span>
                          <Badge variant="secondary" className="ml-2">
                            {categoryChecked}/{categoryCount}
                          </Badge>
                        </div>
                      </Button>
                    );
                  })}
                </CardContent>
              </Card>
            </div>

            {/* Green Flags List */}
            <div className="lg:col-span-3">
              <div className="space-y-4">
                {selectedCategory && (
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedCategory} Green Flags
                    </h2>
                    <p className="text-gray-600">
                      {selectedCategory === "Communication" && "Healthy communication is the foundation of any strong relationship."}
                      {selectedCategory === "Respect & Boundaries" && "Mutual respect and healthy boundaries create a safe, trusting environment."}
                      {selectedCategory === "Emotional Health" && "Emotional maturity and stability are crucial for relationship success."}
                      {selectedCategory === "Consistency & Reliability" && "Consistency builds trust and security in relationships."}
                      {selectedCategory === "Personal Growth" && "Partners who grow and improve themselves contribute to relationship growth."}
                      {selectedCategory === "Social Connections" && "How someone relates to others reveals character and relationship skills."}
                    </p>
                  </div>
                )}

                {filteredFlags.map((flag) => {
                  const category = categories.find(cat => cat.name === flag.category);
                  const Icon = category?.icon || Check;
                  const isChecked = checkedFlags.has(flag.id);
                  
                  return (
                    <Card 
                      key={flag.id} 
                      className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                        isChecked ? 'ring-2 ring-green-500 bg-green-50' : 'hover:bg-gray-50'
                      }`}
                      onClick={() => toggleFlag(flag.id)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            isChecked 
                              ? 'bg-green-500 border-green-500' 
                              : 'border-gray-300 hover:border-green-400'
                          }`}>
                            {isChecked && <Check className="h-4 w-4 text-white" />}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <Icon className={`h-5 w-5 ${category?.color}`} />
                                <Badge variant="outline" className="text-xs">
                                  {flag.category}
                                </Badge>
                                {flag.importance === "high" && (
                                  <Badge variant="default" className="text-xs bg-red-100 text-red-800">
                                    High Importance
                                  </Badge>
                                )}
                              </div>
                            </div>
                            
                            <h3 className={`font-semibold text-lg mb-2 ${isChecked ? 'text-green-800' : 'text-gray-900'}`}>
                              {flag.flag}
                            </h3>
                            
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {flag.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Section with Tips */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-yellow-600" />
                  How to Use This Checklist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>• <strong>Early Dating:</strong> Look for 5-10 green flags in the first few dates</p>
                  <p>• <strong>Ongoing Relationships:</strong> Expect to see 20+ green flags over time</p>
                  <p>• <strong>High Importance Flags:</strong> These are non-negotiable for healthy relationships</p>
                  <p>• <strong>Red Flags vs Green Flags:</strong> A few red flags can outweigh many green flags</p>
                  <p>• <strong>Growth Over Time:</strong> Some green flags develop as relationships deepen</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-pink-600" />
                  Remember: Quality Over Quantity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>• <strong>No One is Perfect:</strong> Focus on overall patterns, not perfection</p>
                  <p>• <strong>Personal Values:</strong> Some green flags matter more to you than others</p>
                  <p>• <strong>Consistency Matters:</strong> Look for reliable patterns of behavior</p>
                  <p>• <strong>Growth Potential:</strong> Consider if someone is working on improvement</p>
                  <p>• <strong>Trust Your Gut:</strong> Green flags should feel natural, not forced</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/dating-red-flags-checklist">
                <Button size="lg" variant="outline">
                  <Shield className="h-4 w-4 mr-2" />
                  Check Red Flags Too
                </Button>
              </Link>
              <Link to="/relationship-compatibility">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Users className="h-4 w-4 mr-2" />
                  Test Compatibility
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/love-languages-test" className="text-sm text-green-600 hover:text-green-800 underline">
                Love Languages Test
              </Link>
              <Link to="/attachment-styles-test" className="text-sm text-green-600 hover:text-green-800 underline">
                Attachment Styles Test
              </Link>
              <Link to="/dating-tips" className="text-sm text-green-600 hover:text-green-800 underline">
                Dating Tips & Advice
              </Link>
              <Link to="/" className="text-sm text-green-600 hover:text-green-800 underline">
                Female Delusion Calculator
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DatingGreenFlags;