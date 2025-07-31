import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Star, Heart, Brain, Smile, ArrowRight, Users, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const WhatMenFindAttractive = () => {
  const [activeTab, setActiveTab] = useState("physical");

  const attractionFactors = {
    physical: [
      { trait: "Genuine Smile", percentage: 94, description: "A warm, authentic smile is universally attractive and signals approachability" },
      { trait: "Good Personal Hygiene", percentage: 92, description: "Basic cleanliness and grooming show self-respect and consideration for others" },
      { trait: "Healthy Appearance", percentage: 89, description: "Taking care of your physical health shows discipline and self-worth" },
      { trait: "Comfortable Style", percentage: 86, description: "Dressing in a way that makes you feel confident and comfortable" },
      { trait: "Good Posture", percentage: 83, description: "Standing tall and walking confidently signals self-assurance" },
      { trait: "Natural Beauty", percentage: 81, description: "Embracing your natural features rather than hiding behind heavy makeup" },
      { trait: "Expressive Eyes", percentage: 78, description: "Eyes that show emotion and interest in conversation" },
      { trait: "Proportionate Figure", percentage: 75, description: "Health and fitness matter more than specific body type" }
    ],
    personality: [
      { trait: "Sense of Humor", percentage: 96, description: "Ability to laugh and make others laugh creates emotional bonding" },
      { trait: "Kindness", percentage: 94, description: "Genuine care and compassion for others shows character depth" },
      { trait: "Intelligence", percentage: 91, description: "Intellectual curiosity and the ability to hold meaningful conversations" },
      { trait: "Emotional Stability", percentage: 89, description: "Managing emotions well and being mentally healthy" },
      { trait: "Independence", percentage: 87, description: "Having your own goals, interests, and ability to be self-sufficient" },
      { trait: "Optimism", percentage: 84, description: "Positive outlook on life and ability to see the good in situations" },
      { trait: "Authenticity", percentage: 82, description: "Being genuine and true to yourself rather than putting on an act" },
      { trait: "Empathy", percentage: 79, description: "Understanding and sharing the feelings of others" }
    ],
    behavioral: [
      { trait: "Good Communication Skills", percentage: 93, description: "Ability to express thoughts clearly and listen actively" },
      { trait: "Respect for Others", percentage: 91, description: "Treating everyone with dignity, regardless of their status" },
      { trait: "Reliability", percentage: 88, description: "Keeping promises and being someone others can depend on" },
      { trait: "Supportiveness", percentage: 86, description: "Encouraging and supporting your partner's goals and dreams" },
      { trait: "Adventurous Spirit", percentage: 83, description: "Willingness to try new things and embrace experiences" },
      { trait: "Good Manners", percentage: 81, description: "Basic courtesy and consideration in social situations" },
      { trait: "Conflict Resolution", percentage: 78, description: "Handling disagreements maturely and constructively" },
      { trait: "Loyalty", percentage: 76, description: "Being faithful and committed in relationships" }
    ],
    lifestyle: [
      { trait: "Career Ambition", percentage: 85, description: "Having goals and working towards professional success" },
      { trait: "Financial Responsibility", percentage: 83, description: "Managing money wisely and being financially independent" },
      { trait: "Health-Conscious", percentage: 81, description: "Making choices that support physical and mental well-being" },
      { trait: "Social Skills", percentage: 79, description: "Ability to interact well with different types of people" },
      { trait: "Hobbies & Interests", percentage: 77, description: "Having passions and activities outside of work and relationships" },
      { trait: "Family Values", percentage: 74, description: "Caring about family and wanting to build meaningful relationships" },
      { trait: "Cultural Awareness", percentage: 72, description: "Being open-minded and respectful of different cultures and viewpoints" },
      { trait: "Life Balance", percentage: 69, description: "Managing work, relationships, and personal time effectively" }
    ]
  };

  const commonMisconceptions = [
    {
      myth: "Men only care about physical appearance",
      reality: "While physical attraction matters, personality traits like humor and kindness consistently rank higher in long-term attraction studies.",
      impact: "high"
    },
    {
      myth: "Being 'hard to get' makes you more attractive",
      reality: "Men prefer women who show genuine interest while maintaining their independence. Playing games often backfires.",
      impact: "medium"
    },
    {
      myth: "Men want women to be perfect",
      reality: "Authenticity and vulnerability are more attractive than trying to appear flawless. Men appreciate genuine personalities.",
      impact: "high"
    },
    {
      myth: "Expensive clothes and makeup are necessary",
      reality: "Men often prefer natural beauty and personal style over expensive brands or heavy makeup.",
      impact: "low"
    },
    {
      myth: "Men don't want intelligent women",
      reality: "Intelligence consistently ranks as one of the most attractive qualities, especially for long-term relationships.",
      impact: "high"
    }
  ];

  const ageGroupDifferences = [
    {
      ageGroup: "18-25",
      priorities: ["Physical attraction", "Fun personality", "Social compatibility", "Shared interests"],
      focus: "Immediate chemistry and shared experiences"
    },
    {
      ageGroup: "26-35",
      priorities: ["Emotional maturity", "Career ambition", "Life goals alignment", "Independence"],
      focus: "Long-term compatibility and life partnership"
    },
    {
      ageGroup: "36-45",
      priorities: ["Emotional stability", "Family values", "Financial responsibility", "Life experience"],
      focus: "Stability and building a future together"
    },
    {
      ageGroup: "46+",
      priorities: ["Companionship", "Shared values", "Life wisdom", "Emotional support"],
      focus: "Deep connection and mutual understanding"
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Men Find Attractive - Psychology and Science Behind Male Attraction",
    "description": "Discover what men really find attractive based on psychological research and surveys. Learn about physical traits, personality qualities, and behaviors that create lasting attraction.",
    "author": {
      "@type": "Organization",
      "name": "Female Delusion Calculator"
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://delusionfemalecalculator.com/what-men-find-attractive"
    }
  };

  return (
    <>
      <SEOHead
        title="What Men Find Attractive - Science-Based Guide to Male Attraction"
        description="Discover what men really find attractive based on psychology research. Learn about physical traits, personality qualities, and behaviors that create lasting attraction in relationships."
        keywords="what men find attractive, male attraction psychology, what do men like in women, attractive qualities, relationship attraction, dating psychology"
        schemaData={schemaData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-rose-50 to-purple-100">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <Heart className="h-16 w-16 text-rose-500 mx-auto mb-4" fill="currentColor" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              What Men Find Attractive
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Based on psychological research and surveys of thousands of men, discover the traits and qualities 
              that create genuine, lasting attraction beyond just physical appearance.
            </p>
          </div>

          {/* Main Content Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="physical" className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                Physical
              </TabsTrigger>
              <TabsTrigger value="personality" className="flex items-center gap-2">
                <Brain className="h-4 w-4" />
                Personality
              </TabsTrigger>
              <TabsTrigger value="behavioral" className="flex items-center gap-2">
                <Smile className="h-4 w-4" />
                Behavioral
              </TabsTrigger>
              <TabsTrigger value="lifestyle" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Lifestyle
              </TabsTrigger>
            </TabsList>

            {Object.entries(attractionFactors).map(([category, traits]) => (
              <TabsContent key={category} value={category} className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-rose-600 capitalize">
                      {category} Attraction Factors
                    </CardTitle>
                    <CardDescription>
                      Ranked by importance based on research and surveys (% of men who find this attractive)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {traits.map((trait, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <h4 className="font-semibold text-gray-900">{trait.trait}</h4>
                            <span className="text-sm font-medium text-rose-600">{trait.percentage}%</span>
                          </div>
                          <Progress value={trait.percentage} className="h-2" />
                          <p className="text-sm text-gray-600">{trait.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          {/* Common Misconceptions */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-600 flex items-center">
                <Brain className="h-6 w-6 mr-2" />
                Common Misconceptions About Male Attraction
              </CardTitle>
              <CardDescription>
                Debunking myths with research-backed reality
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {commonMisconceptions.map((item, index) => (
                  <div key={index} className="border-l-4 border-purple-500 pl-4 py-2">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">Myth: {item.myth}</h4>
                      <span className={`text-xs px-2 py-1 rounded ${
                        item.impact === 'high' ? 'bg-red-100 text-red-700' :
                        item.impact === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {item.impact} impact
                      </span>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="text-sm text-purple-800"><strong>Reality:</strong> {item.reality}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Age Group Differences */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600 flex items-center">
                <Users className="h-6 w-6 mr-2" />
                How Attraction Preferences Change with Age
              </CardTitle>
              <CardDescription>
                What different age groups of men prioritize in attraction
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                {ageGroupDifferences.map((group, index) => (
                  <div key={index} className="p-4 border rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-lg text-gray-900">Ages {group.ageGroup}</h4>
                      <span className="text-sm text-blue-600 font-medium">{group.focus}</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <span className="font-medium text-blue-700 text-sm">Top Priorities:</span>
                        <ul className="text-sm text-gray-700 mt-1">
                          {group.priorities.map((priority, idx) => (
                            <li key={idx}>• {priority}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="font-medium text-indigo-700 text-sm">Focus Area:</span>
                        <p className="text-sm text-gray-700 mt-1">{group.focus}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Actionable Tips */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-green-600 flex items-center">
                <Star className="h-6 w-6 mr-2" />
                Practical Tips to Enhance Your Attractiveness
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Immediate Improvements</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Practice genuine smiling in the mirror</li>
                    <li>• Improve your posture throughout the day</li>
                    <li>• Develop a signature scent with quality perfume</li>
                    <li>• Work on active listening skills</li>
                    <li>• Learn to tell engaging stories</li>
                    <li>• Show genuine interest in others</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Long-term Development</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Develop emotional intelligence</li>
                    <li>• Pursue your passions and interests</li>
                    <li>• Build a strong social circle</li>
                    <li>• Work on personal growth and self-awareness</li>
                    <li>• Maintain physical and mental health</li>
                    <li>• Cultivate independence and self-sufficiency</li>
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
                Improve your dating success with these complementary resources
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
                
                <Link to="/dating-red-flags-checklist" className="p-4 border rounded-lg hover:shadow-lg transition-shadow group">
                  <h4 className="font-semibold text-pink-600 group-hover:text-pink-700">
                    Dating Red Flags Checklist
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Identify warning signs in potential partners
                  </p>
                  <ArrowRight className="h-4 w-4 text-gray-400 mt-2 group-hover:text-pink-600" />
                </Link>

                <Link to="/texting-rules-dating" className="p-4 border rounded-lg hover:shadow-lg transition-shadow group">
                  <h4 className="font-semibold text-pink-600 group-hover:text-pink-700">
                    Texting Rules for Dating
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Master communication to build attraction
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
                <div className="prose prose-rose max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">The Science Behind What Men Find Attractive</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-gray-700 leading-relaxed">
                        Attraction is a complex psychological phenomenon that involves both biological and social factors. 
                        While popular culture often oversimplifies male attraction as purely physical, research shows that 
                        men's preferences are far more nuanced and multifaceted than commonly believed.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Evolutionary Psychology and Modern Attraction</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        From an evolutionary perspective, men are drawn to signs of health, fertility, and emotional stability. 
                        However, in modern society, these preferences have evolved to include qualities like intelligence, 
                        independence, and emotional maturity.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Understanding this evolution helps explain why personality traits often outweigh physical 
                        appearance in long-term attraction.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">The Role of Confidence vs. Arrogance</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        One of the most misunderstood aspects of attraction is confidence. Men are consistently drawn to 
                        confident women, but there's a crucial difference between healthy confidence and arrogance.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Confidence shows self-worth and stability, while arrogance suggests insecurity masked by superiority.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Cultural Variations in Attraction</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        While some attraction factors are universal, cultural background significantly influences preferences. 
                        What men find attractive varies across different cultures, socioeconomic backgrounds, and regional 
                        differences.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        This diversity highlights the importance of authenticity over trying to fit a universal ideal.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">The Importance of Emotional Intelligence</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Modern research consistently shows that emotional intelligence ranks among the top attractive qualities. 
                        This includes the ability to understand and manage your own emotions, empathize with others, and 
                        navigate social situations effectively.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        These skills contribute to relationship success more than any single physical trait.
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

export default WhatMenFindAttractive;