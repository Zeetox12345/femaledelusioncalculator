import { useState } from "react";
import { Coffee, MapPin, Clock, DollarSign, Heart, Users, Camera, Music, Utensils, Gamepad2, Book, Palette, TreePine, Zap, Target, Info, CheckCircle, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const FirstDateIdeas = () => {
  const [selectedBudget, setSelectedBudget] = useState<string>("all");
  const [selectedTimeOfDay, setSelectedTimeOfDay] = useState<string>("all");
  const [likedIdeas, setLikedIdeas] = useState<Set<number>>(new Set());

  const dateIdeas = [
    {
      id: 1,
      title: "Coffee Shop Date",
      description: "Classic first date option that allows for easy conversation in a relaxed setting.",
      category: "Casual",
      budget: "low",
      timeOfDay: "any",
      duration: "1-2 hours",
      icon: Coffee,
      location: "Coffee shops, cafes",
      tips: [
        "Choose a place with comfortable seating",
        "Avoid overly loud or crowded spots",
        "Order something simple to avoid mess",
        "Have backup conversation topics ready"
      ],
      pros: [
        "Low pressure environment",
        "Easy to extend or cut short",
        "Affordable for both people",
        "Good for conversation"
      ],
      cons: [
        "Can feel impersonal",
        "Limited activity options",
        "May be too brief"
      ]
    },
    {
      id: 2,
      title: "Museum or Art Gallery",
      description: "Explore art, history, or science together while having natural conversation starters.",
      category: "Cultural",
      budget: "medium",
      timeOfDay: "afternoon",
      duration: "2-3 hours",
      icon: Palette,
      location: "Museums, galleries, cultural centers",
      tips: [
        "Research current exhibitions beforehand",
        "Don't feel pressured to discuss every piece",
        "Ask about their interests and interpretations",
        "Consider getting museum membership for future dates"
      ],
      pros: [
        "Built-in conversation topics",
        "Shows cultural interest",
        "Can reveal values and interests",
        "Activity keeps energy up"
      ],
      cons: [
        "May not appeal to everyone",
        "Can be overwhelming",
        "Requires some walking"
      ]
    },
    {
      id: 3,
      title: "Farmers Market Stroll",
      description: "Walk through a local farmers market, sampling foods and enjoying the atmosphere.",
      category: "Outdoor",
      budget: "low",
      timeOfDay: "morning",
      duration: "1-2 hours",
      icon: TreePine,
      location: "Local farmers markets, outdoor markets",
      tips: [
        "Bring cash for small purchases",
        "Share samples if vendors offer them",
        "Ask about their cooking and food preferences",
        "Consider buying ingredients for a future cooking date"
      ],
      pros: [
        "Casual and relaxed",
        "Supports local businesses",
        "Natural conversation starters",
        "Can learn about lifestyle choices"
      ],
      cons: [
        "Weather dependent",
        "Limited to certain days/times",
        "May be crowded"
      ]
    },
    {
      id: 4,
      title: "Mini Golf or Bowling",
      description: "Light competitive activity that breaks the ice and creates fun moments.",
      category: "Activity",
      budget: "medium",
      timeOfDay: "evening",
      duration: "2-3 hours",
      icon: Gamepad2,
      location: "Mini golf courses, bowling alleys",
      tips: [
        "Keep it light and fun, not competitive",
        "Celebrate good shots and laugh at bad ones",
        "Use breaks between holes/frames to chat",
        "Consider adding food or drinks"
      ],
      pros: [
        "Interactive and engaging",
        "Shows sense of humor",
        "Natural physical proximity",
        "Creates shared memories"
      ],
      cons: [
        "May reveal competitiveness",
        "Some people dislike sports",
        "Can be noisy"
      ]
    },
    {
      id: 5,
      title: "Cooking Class",
      description: "Learn to make something new together in a structured, fun environment.",
      category: "Activity",
      budget: "high",
      timeOfDay: "evening",
      duration: "3-4 hours",
      icon: Utensils,
      location: "Cooking schools, community centers",
      tips: [
        "Choose beginner-friendly classes",
        "Don't worry about being perfect",
        "Help each other with tasks",
        "Enjoy the meal you create together"
      ],
      pros: [
        "Collaborative experience",
        "Learn something new together",
        "Built-in dinner",
        "Shows willingness to try new things"
      ],
      cons: [
        "More expensive",
        "Can be messy",
        "Requires advance booking"
      ]
    },
    {
      id: 6,
      title: "Bookstore Browse",
      description: "Wander through a bookstore sharing favorite books and discovering new ones.",
      category: "Casual",
      budget: "low",
      timeOfDay: "afternoon",
      duration: "1-2 hours",
      icon: Book,
      location: "Bookstores, libraries with cafes",
      tips: [
        "Share book recommendations",
        "Ask about reading preferences",
        "Read interesting passages aloud",
        "Consider buying each other a book"
      ],
      pros: [
        "Reveals intellectual interests",
        "Relaxed atmosphere",
        "Many conversation topics",
        "Can extend with coffee"
      ],
      cons: [
        "Quiet environment limits talking",
        "May not appeal to non-readers",
        "Can be overwhelming for some"
      ]
    },
    {
      id: 7,
      title: "Wine or Beer Tasting",
      description: "Sample different varieties while learning about the brewing or winemaking process.",
      category: "Social",
      budget: "medium",
      timeOfDay: "evening",
      duration: "2-3 hours",
      icon: Coffee,
      location: "Wineries, breweries, tasting rooms",
      tips: [
        "Pace yourself with the alcohol",
        "Focus on flavors and experiences",
        "Ask questions about the process",
        "Plan safe transportation"
      ],
      pros: [
        "Sophisticated atmosphere",
        "Educational component",
        "Natural conversation flow",
        "Can be romantic"
      ],
      cons: [
        "Involves alcohol",
        "Can be expensive",
        "May not suit non-drinkers"
      ]
    },
    {
      id: 8,
      title: "Live Music Venue",
      description: "Enjoy live acoustic music, jazz, or other performances in an intimate setting.",
      category: "Entertainment",
      budget: "medium",
      timeOfDay: "evening",
      duration: "3-4 hours",
      icon: Music,
      location: "Jazz clubs, acoustic venues, small concert halls",
      tips: [
        "Choose intimate venues over large concerts",
        "Discuss music preferences beforehand",
        "Arrive early for good seating",
        "Save deep conversations for between sets"
      ],
      pros: [
        "Romantic atmosphere",
        "Shared experience",
        "Shows cultural interests",
        "Natural talking breaks"
      ],
      cons: [
        "Loud music limits conversation",
        "Music taste may not align",
        "Can be crowded"
      ]
    },
    {
      id: 9,
      title: "Hiking Trail",
      description: "Take a scenic walk together on an easy trail with beautiful views.",
      category: "Outdoor",
      budget: "low",
      timeOfDay: "morning",
      duration: "2-4 hours",
      icon: TreePine,
      location: "Local parks, nature trails, scenic routes",
      tips: [
        "Choose easy, well-marked trails",
        "Bring water and snacks",
        "Check weather conditions",
        "Respect each other's fitness levels"
      ],
      pros: [
        "Great for conversation",
        "Shows active lifestyle",
        "Beautiful scenery",
        "Free activity"
      ],
      cons: [
        "Weather dependent",
        "Physical demands vary",
        "May get sweaty/dirty"
      ]
    },
    {
      id: 10,
      title: "Food Truck Tour",
      description: "Sample different cuisines from various food trucks in your area.",
      category: "Food",
      budget: "medium",
      timeOfDay: "lunch",
      duration: "2-3 hours",
      icon: Utensils,
      location: "Food truck parks, festivals, downtown areas",
      tips: [
        "Research locations and schedules",
        "Share different dishes",
        "Bring cash and cards",
        "Pace yourselves between stops"
      ],
      pros: [
        "Variety of food options",
        "Casual and fun",
        "Supports local businesses",
        "Natural walking and talking"
      ],
      cons: [
        "May be messy eating",
        "Weather dependent",
        "Limited seating"
      ]
    },
    {
      id: 11,
      title: "Escape Room",
      description: "Work together to solve puzzles and escape within the time limit.",
      category: "Activity",
      budget: "medium",
      timeOfDay: "evening",
      duration: "1-2 hours",
      icon: Gamepad2,
      location: "Escape room venues",
      tips: [
        "Choose beginner-friendly rooms",
        "Communicate and collaborate",
        "Don't get frustrated if stuck",
        "Celebrate successes together"
      ],
      pros: [
        "Teamwork building",
        "Exciting and engaging",
        "Shows problem-solving skills",
        "Creates bonding experience"
      ],
      cons: [
        "Can be stressful",
        "May reveal different work styles",
        "Some people dislike puzzles"
      ]
    },
    {
      id: 12,
      title: "Photography Walk",
      description: "Explore your city while taking photos of interesting sights and each other.",
      category: "Creative",
      budget: "low",
      timeOfDay: "afternoon",
      duration: "2-3 hours",
      icon: Camera,
      location: "Urban areas, parks, scenic neighborhoods",
      tips: [
        "Use phones or bring cameras",
        "Focus on having fun, not perfect shots",
        "Take photos of each other",
        "Share and compare photos afterward"
      ],
      pros: [
        "Creative and unique",
        "Explores your area",
        "Creates lasting memories",
        "Natural conversation while walking"
      ],
      cons: [
        "Weather dependent",
        "May feel forced if not interested in photography",
        "Requires some walking"
      ]
    }
  ];

  const budgetOptions = [
    { value: "all", label: "All Budgets" },
    { value: "low", label: "Low Cost ($0-$20)" },
    { value: "medium", label: "Medium Cost ($20-$50)" },
    { value: "high", label: "Higher Cost ($50+)" }
  ];

  const timeOptions = [
    { value: "all", label: "Any Time" },
    { value: "morning", label: "Morning" },
    { value: "afternoon", label: "Afternoon" },
    { value: "evening", label: "Evening" }
  ];

  const toggleLike = (ideaId: number) => {
    const newLiked = new Set(likedIdeas);
    if (newLiked.has(ideaId)) {
      newLiked.delete(ideaId);
    } else {
      newLiked.add(ideaId);
    }
    setLikedIdeas(newLiked);
  };

  const filteredIdeas = dateIdeas.filter(idea => {
    const budgetMatch = selectedBudget === "all" || idea.budget === selectedBudget;
    const timeMatch = selectedTimeOfDay === "all" || idea.timeOfDay === selectedTimeOfDay || idea.timeOfDay === "any";
    return budgetMatch && timeMatch;
  });

  const getBudgetColor = (budget: string) => {
    switch (budget) {
      case "low": return "text-green-600 bg-green-50";
      case "medium": return "text-yellow-600 bg-yellow-50";
      case "high": return "text-red-600 bg-red-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  const getBudgetIcon = (budget: string) => {
    switch (budget) {
      case "low": return "$";
      case "medium": return "$$";
      case "high": return "$$$";
      default: return "$";
    }
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "First Date Ideas and Tips",
    "description": "Comprehensive guide to first date ideas for every budget and style. Creative, fun, and memorable first date suggestions with practical tips.",
    "url": "https://delusionfemalecalculator.com/first-date-ideas",
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
        title="50+ Creative First Date Ideas - Fun, Memorable Date Ideas for Every Budget"
        description="Discover unique first date ideas for every budget and style. From coffee dates to adventure activities, find the perfect first date idea with practical tips and advice."
        keywords="first date ideas, creative date ideas, fun first dates, date ideas on a budget, unique date ideas, first date tips, dating ideas, romantic date ideas"
        schemaData={schemaData}
      />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-pink-100 rounded-full">
                <Heart className="h-12 w-12 text-pink-600" fill="currentColor" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Creative First Date Ideas
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover memorable first date ideas for every budget, style, and personality. From classic coffee dates 
              to unique adventures, find the perfect activity to make a great first impression.
            </p>
          </div>

          {/* Filters */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-pink-600" />
                Find Your Perfect First Date
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                  <div className="grid grid-cols-2 gap-2">
                    {budgetOptions.map(option => (
                      <Button
                        key={option.value}
                        variant={selectedBudget === option.value ? "default" : "outline"}
                        size="sm"
                        className="justify-start"
                        onClick={() => setSelectedBudget(option.value)}
                      >
                        <DollarSign className="h-4 w-4 mr-1" />
                        {option.label}
                      </Button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time of Day</label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeOptions.map(option => (
                      <Button
                        key={option.value}
                        variant={selectedTimeOfDay === option.value ? "default" : "outline"}
                        size="sm"
                        className="justify-start"
                        onClick={() => setSelectedTimeOfDay(option.value)}
                      >
                        <Clock className="h-4 w-4 mr-1" />
                        {option.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Badge variant="secondary" className="text-sm">
                  Showing {filteredIdeas.length} of {dateIdeas.length} date ideas
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Date Ideas Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
            {filteredIdeas.map((idea) => {
              const Icon = idea.icon;
              const isLiked = likedIdeas.has(idea.id);
              
              return (
                <Card key={idea.id} className="hover:shadow-lg transition-shadow duration-200">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-pink-100 rounded-lg">
                          <Icon className="h-6 w-6 text-pink-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{idea.title}</CardTitle>
                          <CardDescription className="text-sm">
                            {idea.category}
                          </CardDescription>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleLike(idea.id)}
                        className={isLiked ? "text-pink-600" : "text-gray-400"}
                      >
                        <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{idea.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-gray-500" />
                          <Badge className={getBudgetColor(idea.budget)}>
                            {getBudgetIcon(idea.budget)}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-600">{idea.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600">{idea.location}</span>
                      </div>
                    </div>

                    <Tabs defaultValue="tips" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="tips" className="text-xs">Tips</TabsTrigger>
                        <TabsTrigger value="pros" className="text-xs">Pros</TabsTrigger>
                        <TabsTrigger value="cons" className="text-xs">Cons</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="tips" className="mt-3">
                        <div className="space-y-2">
                          {idea.tips.slice(0, 3).map((tip, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-xs text-gray-600">{tip}</span>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="pros" className="mt-3">
                        <div className="space-y-2">
                          {idea.pros.slice(0, 3).map((pro, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <Star className="h-3 w-3 text-yellow-600 mt-0.5 flex-shrink-0" />
                              <span className="text-xs text-gray-600">{pro}</span>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="cons" className="mt-3">
                        <div className="space-y-2">
                          {idea.cons.slice(0, 3).map((con, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <Info className="h-3 w-3 text-orange-600 mt-0.5 flex-shrink-0" />
                              <span className="text-xs text-gray-600">{con}</span>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* First Date Success Tips */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-600" />
                  First Date Success Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Before the Date</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Choose a location you're familiar with</li>
                      <li>• Confirm plans 24 hours beforehand</li>
                      <li>• Dress appropriately for the activity</li>
                      <li>• Arrive 5-10 minutes early</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">During the Date</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Put your phone away</li>
                      <li>• Ask open-ended questions</li>
                      <li>• Share the conversation equally</li>
                      <li>• Be genuinely interested in their responses</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-pink-600" />
                  What Makes a Great First Date
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Key Elements</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Comfortable environment for conversation</li>
                      <li>• Activity that reveals personality</li>
                      <li>• Appropriate length (1-3 hours)</li>
                      <li>• Low pressure and expectations</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Red Flags to Avoid</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Overly expensive or elaborate plans</li>
                      <li>• Locations that prevent conversation</li>
                      <li>• Activities requiring special skills</li>
                      <li>• Places that make either person uncomfortable</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Follow-up Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-center">After Your First Date</CardTitle>
              <CardDescription className="text-center">
                How to follow up and plan future dates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Follow Up Within 24 Hours</h3>
                  <p className="text-sm text-gray-600">
                    Send a text thanking them for the date and expressing interest in seeing them again
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Plan the Second Date</h3>
                  <p className="text-sm text-gray-600">
                    Build on what you learned about their interests and plan something you'll both enjoy
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Be Authentic</h3>
                  <p className="text-sm text-gray-600">
                    Continue being your genuine self while showing interest in getting to know them better
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/dating-green-flags">
                <Button size="lg" variant="outline">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Check Dating Green Flags
                </Button>
              </Link>
              <Link to="/dating-tips">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                  <Zap className="h-4 w-4 mr-2" />
                  More Dating Tips
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/love-languages-test" className="text-sm text-pink-600 hover:text-pink-800 underline">
                Love Languages Test
              </Link>
              <Link to="/texting-rules-dating" className="text-sm text-pink-600 hover:text-pink-800 underline">
                Texting Rules for Dating
              </Link>
              <Link to="/dating-red-flags-checklist" className="text-sm text-pink-600 hover:text-pink-800 underline">
                Dating Red Flags
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
};

export default FirstDateIdeas;