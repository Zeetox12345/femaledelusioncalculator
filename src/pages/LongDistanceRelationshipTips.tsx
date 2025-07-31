import { useState } from "react";
import { Heart, Video, MessageCircle, Calendar, Plane, Clock, Gift, Users, Target, Star, CheckCircle, AlertTriangle, Lightbulb, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const LongDistanceRelationshipTips = () => {
  const [selectedChallenge, setSelectedChallenge] = useState<string | null>(null);
  const [completedTips, setCompletedTips] = useState<Set<string>>(new Set());

  const challenges = [
    {
      id: "communication",
      title: "Communication Struggles",
      icon: MessageCircle,
      description: "Maintaining meaningful connection across distance",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      id: "trust",
      title: "Trust & Jealousy Issues",
      icon: Heart,
      description: "Building security without physical presence",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      id: "loneliness",
      title: "Loneliness & Isolation",
      icon: Users,
      description: "Coping with missing your partner",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      id: "future",
      title: "Future Planning Uncertainty",
      icon: Calendar,
      description: "Not knowing when the distance will end",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      id: "visits",
      title: "Infrequent Visits",
      icon: Plane,
      description: "Making the most of limited time together",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      id: "social",
      title: "Social Situations",
      icon: Users,
      description: "Explaining your relationship to others",
      color: "text-teal-600",
      bgColor: "bg-teal-50"
    }
  ];

  const tips = [
    {
      id: "daily_checkin",
      category: "communication",
      title: "Establish daily check-in routines",
      description: "Set specific times for calls/texts that work for both time zones",
      importance: "high",
      timeframe: "Daily"
    },
    {
      id: "video_dates",
      category: "communication",
      title: "Schedule regular video dates",
      description: "Plan virtual dates like watching movies together or cooking the same meal",
      importance: "high",
      timeframe: "Weekly"
    },
    {
      id: "voice_messages",
      category: "communication",
      title: "Send voice messages throughout the day",
      description: "Hearing each other's voice creates more intimacy than texting",
      importance: "medium",
      timeframe: "Daily"
    },
    {
      id: "share_daily_life",
      category: "communication",
      title: "Share mundane daily details",
      description: "Photo updates of meals, commute, workspace help maintain connection",
      importance: "medium",
      timeframe: "Daily"
    },
    {
      id: "transparency",
      category: "trust",
      title: "Be completely transparent",
      description: "Share social plans, new friendships, and concerns openly",
      importance: "high",
      timeframe: "Ongoing"
    },
    {
      id: "set_boundaries",
      category: "trust",
      title: "Establish clear boundaries",
      description: "Discuss what's acceptable regarding opposite-sex friendships",
      importance: "high",
      timeframe: "Early in relationship"
    },
    {
      id: "trust_exercises",
      category: "trust",
      title: "Practice trust-building exercises",
      description: "Share passwords, include partner in social media, introduce to friends",
      importance: "medium",
      timeframe: "Ongoing"
    },
    {
      id: "jealousy_management",
      category: "trust",
      title: "Address jealousy immediately",
      description: "Communicate insecurities early rather than letting them fester",
      importance: "high",
      timeframe: "As needed"
    },
    {
      id: "personal_hobbies",
      category: "loneliness",
      title: "Develop individual interests",
      description: "Pursue hobbies and goals that don't depend on your partner",
      importance: "high",
      timeframe: "Ongoing"
    },
    {
      id: "local_social_life",
      category: "loneliness",
      title: "Maintain local friendships",
      description: "Don't isolate yourself - nurture relationships in your area",
      importance: "high",
      timeframe: "Ongoing"
    },
    {
      id: "loneliness_coping",
      category: "loneliness",
      title: "Create comfort rituals",
      description: "Wear their clothes, keep photos visible, have comfort items",
      importance: "medium",
      timeframe: "When missing them"
    },
    {
      id: "support_network",
      category: "loneliness",
      title: "Build a support system",
      description: "Find friends who understand LDRs or join support groups",
      importance: "medium",
      timeframe: "Ongoing"
    },
    {
      id: "end_date",
      category: "future",
      title: "Set a realistic end date",
      description: "Have a concrete plan for when you'll be in the same location",
      importance: "high",
      timeframe: "Within 6 months"
    },
    {
      id: "career_planning",
      category: "future",
      title: "Align career goals",
      description: "Make professional decisions considering your relationship future",
      importance: "high",
      timeframe: "Ongoing"
    },
    {
      id: "milestone_planning",
      category: "future",
      title: "Plan relationship milestones",
      description: "Discuss engagement, moving in together, marriage timelines",
      importance: "medium",
      timeframe: "6-12 months"
    },
    {
      id: "backup_plans",
      category: "future",
      title: "Discuss contingency plans",
      description: "What if job plans change? How long is too long distance?",
      importance: "medium",
      timeframe: "6 months"
    },
    {
      id: "visit_frequency",
      category: "visits",
      title: "Plan regular visits",
      description: "Aim for seeing each other every 2-3 months if possible",
      importance: "high",
      timeframe: "Ongoing"
    },
    {
      id: "quality_time",
      category: "visits",
      title: "Maximize quality time during visits",
      description: "Minimize social obligations, focus on each other",
      importance: "high",
      timeframe: "During visits"
    },
    {
      id: "visit_costs",
      category: "visits",
      title: "Share travel costs fairly",
      description: "Take turns visiting or split costs based on income",
      importance: "medium",
      timeframe: "Ongoing"
    },
    {
      id: "departure_rituals",
      category: "visits",
      title: "Create departure rituals",
      description: "Have special ways to say goodbye that provide comfort",
      importance: "medium",
      timeframe: "Each visit"
    },
    {
      id: "explain_relationship",
      category: "social",
      title: "Confidently explain your relationship",
      description: "Prepare responses for skeptical friends and family",
      importance: "medium",
      timeframe: "Ongoing"
    },
    {
      id: "include_partner",
      category: "social",
      title: "Include partner in social events virtually",
      description: "Video call them into parties or gatherings when possible",
      importance: "medium",
      timeframe: "During events"
    },
    {
      id: "relationship_validation",
      category: "social",
      title: "Don't let others invalidate your relationship",
      description: "LDRs are real relationships deserving of respect",
      importance: "high",
      timeframe: "Ongoing"
    }
  ];

  const toggleTip = (tipId: string) => {
    const newCompleted = new Set(completedTips);
    if (newCompleted.has(tipId)) {
      newCompleted.delete(tipId);
    } else {
      newCompleted.add(tipId);
    }
    setCompletedTips(newCompleted);
  };

  const filteredTips = selectedChallenge 
    ? tips.filter(tip => tip.category === selectedChallenge)
    : tips;

  const getCompletionRate = () => {
    return tips.length > 0 ? (completedTips.size / tips.length) * 100 : 0;
  };

  const ldStatistics = [
    { stat: "14 million", description: "People in LDRs in the US" },
    { stat: "3.75 million", description: "Married couples living apart" },
    { stat: "58%", description: "Success rate for LDRs with end date" },
    { stat: "4.5 months", description: "Average breakup time without plan" }
  ];

  const virtualDateIdeas = [
    {
      category: "Entertainment",
      icon: Video,
      ideas: [
        "Watch movies together via video call",
        "Play online games or mobile games",
        "Take virtual museum tours",
        "Stream music and dance together",
        "Do online escape rooms"
      ]
    },
    {
      category: "Food & Cooking",
      icon: Gift,
      ideas: [
        "Cook the same meal together",
        "Order delivery to each other",
        "Have virtual coffee/tea dates",
        "Try wine tasting kits",
        "Bake something while video calling"
      ]
    },
    {
      category: "Activities",
      icon: Star,
      ideas: [
        "Read the same book and discuss",
        "Take online classes together",
        "Work out via video call",
        "Do virtual travel planning",
        "Create shared playlists"
      ]
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Long Distance Relationship Tips",
    "description": "Complete guide to making long distance relationships work. Communication tips, trust building strategies, and practical advice for LDR success.",
    "url": "https://delusionfemalecalculator.com/long-distance-relationship-tips",
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
        title="Long Distance Relationship Tips - How to Make LDR Work Successfully"
        description="Comprehensive guide to long distance relationship success. Get practical tips for communication, trust building, visit planning, and overcoming LDR challenges."
        keywords="long distance relationship tips, LDR advice, long distance relationship communication, how to make long distance work, LDR success, virtual date ideas"
        schemaData={schemaData}
      />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-indigo-100 rounded-full">
                <Heart className="h-12 w-12 text-indigo-600" fill="currentColor" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Long Distance Relationship Tips
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Expert strategies and practical advice for making your long distance relationship thrive. 
              From communication tips to trust building, learn how to succeed despite the miles.
            </p>
          </div>

          {/* LDR Statistics */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-center">Long Distance Relationship Facts</CardTitle>
              <CardDescription className="text-center">
                You're not alone - millions of couples make LDRs work
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                {ldStatistics.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">{item.stat}</div>
                    <div className="text-sm text-gray-600">{item.description}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Progress Tracker */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-indigo-600" />
                Your LDR Improvement Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Tips Implemented</span>
                  <span className="text-sm font-medium text-indigo-600">
                    {completedTips.size}/{tips.length} completed
                  </span>
                </div>
                <Progress value={getCompletionRate()} className="h-3" />
                <p className="text-sm text-gray-600">
                  Track your progress implementing LDR strategies. Focus on high-importance tips first.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Challenge Categories Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="text-lg">Common LDR Challenges</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button
                    variant={selectedChallenge === null ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setSelectedChallenge(null)}
                  >
                    All Tips ({tips.length})
                  </Button>
                  {challenges.map((challenge) => {
                    const Icon = challenge.icon;
                    const categoryTips = tips.filter(tip => tip.category === challenge.id);
                    const completedCategory = categoryTips.filter(tip => completedTips.has(tip.id));
                    
                    return (
                      <Button
                        key={challenge.id}
                        variant={selectedChallenge === challenge.id ? "default" : "outline"}
                        className="w-full justify-start h-auto p-3"
                        onClick={() => setSelectedChallenge(challenge.id)}
                      >
                        <div className="flex items-start gap-2 w-full">
                          <Icon className={`h-4 w-4 ${challenge.color} mt-0.5`} />
                          <div className="text-left flex-1">
                            <div className="font-medium text-sm">{challenge.title}</div>
                            <div className="text-xs text-gray-500 mt-1">
                              {completedCategory.length}/{categoryTips.length} complete
                            </div>
                          </div>
                        </div>
                      </Button>
                    );
                  })}
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Selected Challenge Header */}
              {selectedChallenge && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {(() => {
                        const challenge = challenges.find(c => c.id === selectedChallenge);
                        const Icon = challenge?.icon || Heart;
                        return <Icon className={`h-5 w-5 ${challenge?.color}`} />;
                      })()}
                      {challenges.find(c => c.id === selectedChallenge)?.title}
                    </CardTitle>
                    <CardDescription>
                      {challenges.find(c => c.id === selectedChallenge)?.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              )}

              {/* Tips List */}
              <div className="space-y-4">
                {filteredTips.map((tip) => {
                  const isCompleted = completedTips.has(tip.id);
                  
                  return (
                    <Card 
                      key={tip.id}
                      className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                        isCompleted ? 'ring-2 ring-green-500 bg-green-50' : 'hover:bg-gray-50'
                      }`}
                      onClick={() => toggleTip(tip.id)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            isCompleted 
                              ? 'bg-green-500 border-green-500' 
                              : 'border-gray-300 hover:border-green-400'
                          }`}>
                            {isCompleted && <CheckCircle className="h-4 w-4 text-white" />}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className={`font-semibold text-lg ${isCompleted ? 'text-green-800' : 'text-gray-900'}`}>
                                {tip.title}
                              </h3>
                              <div className="flex gap-2">
                                {tip.importance === "high" && (
                                  <Badge className="bg-red-100 text-red-800">
                                    High Priority
                                  </Badge>
                                )}
                                <Badge variant="outline" className="text-xs">
                                  {tip.timeframe}
                                </Badge>
                              </div>
                            </div>
                            <p className="text-gray-600">{tip.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Virtual Date Ideas */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle className="text-center">Virtual Date Ideas</CardTitle>
              <CardDescription className="text-center">
                Creative ways to stay connected and have fun together
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {virtualDateIdeas.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <div key={index}>
                      <div className="flex items-center gap-2 mb-4">
                        <Icon className="h-5 w-5 text-indigo-600" />
                        <h3 className="font-semibold">{category.category}</h3>
                      </div>
                      <div className="space-y-2">
                        {category.ideas.map((idea, ideaIndex) => (
                          <div key={ideaIndex} className="flex items-start gap-2">
                            <Star className="h-3 w-3 text-yellow-600 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{idea}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Warning Signs & Success Strategies */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  LDR Warning Signs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="p-3 bg-red-50 rounded-lg">
                    <p className="font-medium text-red-800 mb-2">🚨 Seek help if you notice:</p>
                    <ul className="space-y-1">
                      <li>• Constant fighting during calls</li>
                      <li>• Growing suspicious of partner's activities</li>
                      <li>• Avoiding communication or making excuses</li>
                      <li>• No concrete plans to end the distance</li>
                      <li>• One person doing all the visiting/calling</li>
                      <li>• Secret communication or hiding things</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  LDR Success Strategies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="font-medium text-green-800 mb-2">✅ Keys to LDR success:</p>
                    <ul className="space-y-1">
                      <li>• Consistent, quality communication</li>
                      <li>• Concrete timeline to be together</li>
                      <li>• Trust and transparency</li>
                      <li>• Individual growth and independence</li>
                      <li>• Regular visits when possible</li>
                      <li>• Shared goals and future planning</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* App Recommendations */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5 text-purple-600" />
                Recommended Apps for LDRs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="communication" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="communication">Communication</TabsTrigger>
                  <TabsTrigger value="activities">Activities</TabsTrigger>
                  <TabsTrigger value="planning">Planning</TabsTrigger>
                  <TabsTrigger value="gifts">Gifts</TabsTrigger>
                </TabsList>
                
                <TabsContent value="communication" className="mt-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Video Calling</h4>
                      <p className="text-sm text-gray-600">FaceTime, Zoom, Skype, WhatsApp Video</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Messaging</h4>
                      <p className="text-sm text-gray-600">WhatsApp, Telegram, Discord, Marco Polo</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Couple Apps</h4>
                      <p className="text-sm text-gray-600">Lasting, Relish, Paired, Between</p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="activities" className="mt-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Watch Together</h4>
                      <p className="text-sm text-gray-600">Netflix Party, Hulu Watch Party, Disney+ GroupWatch</p>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Games</h4>
                      <p className="text-sm text-gray-600">Words with Friends, Quiz Up, Houseparty</p>
                    </div>
                    <div className="p-4 bg-indigo-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Reading</h4>
                      <p className="text-sm text-gray-600">Goodreads, StoryMaple, Epic</p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="planning" className="mt-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-teal-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Travel</h4>
                      <p className="text-sm text-gray-600">Skyscanner, Google Flights, Kayak</p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Calendar</h4>
                      <p className="text-sm text-gray-600">Google Calendar, TimeTree, Calendly</p>
                    </div>
                    <div className="p-4 bg-pink-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Time Zones</h4>
                      <p className="text-sm text-gray-600">World Clock, TimeZone iOS, Clocks</p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="gifts" className="mt-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-rose-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Food Delivery</h4>
                      <p className="text-sm text-gray-600">DoorDash, Uber Eats, Grubhub</p>
                    </div>
                    <div className="p-4 bg-violet-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Gift Services</h4>
                      <p className="text-sm text-gray-600">Amazon, 1-800-Flowers, GiftCardMall</p>
                    </div>
                    <div className="p-4 bg-emerald-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Subscription Boxes</h4>
                      <p className="text-sm text-gray-600">Birchbox, SnackCrate, Book of the Month</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/love-languages-test">
                <Button size="lg" variant="outline">
                  <Heart className="h-4 w-4 mr-2" />
                  Learn Love Languages
                </Button>
              </Link>
              <Link to="/relationship-compatibility">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                  <Users className="h-4 w-4 mr-2" />
                  Test Compatibility
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/attachment-styles-test" className="text-sm text-indigo-600 hover:text-indigo-800 underline">
                Attachment Styles Test
              </Link>
              <Link to="/dating-green-flags" className="text-sm text-indigo-600 hover:text-indigo-800 underline">
                Dating Green Flags
              </Link>
              <Link to="/relationship-advice" className="text-sm text-indigo-600 hover:text-indigo-800 underline">
                Relationship Advice
              </Link>
              <Link to="/" className="text-sm text-indigo-600 hover:text-indigo-800 underline">
                Female Delusion Calculator
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LongDistanceRelationshipTips;