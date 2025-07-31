import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { BarChart3, TrendingUp, Heart, Users, ArrowRight, PieChart, Calendar, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const DatingSuccessStatistics = () => {
  const onlineDatingStats = [
    { metric: "People who have used dating apps", value: "30%", description: "Of U.S. adults have used a dating site or app" },
    { metric: "Success rate of online dating", value: "22%", description: "Of couples met online (as of 2023)" },
    { metric: "Average time to find a match", value: "3 months", description: "Typical time to find a serious relationship" },
    { metric: "People who meet their spouse online", value: "39%", description: "Percentage of couples who met through dating apps" },
    { metric: "First date to relationship rate", value: "15%", description: "Percentage of first dates that lead to relationships" },
    { metric: "Dating app to marriage rate", value: "20%", description: "Marriages that started from dating apps" }
  ];

  const demographicSuccessRates = [
    { group: "Ages 18-24", rate: 25, insights: "Higher match rates but lower commitment rates" },
    { group: "Ages 25-34", rate: 45, insights: "Peak dating success and relationship formation" },
    { group: "Ages 35-44", rate: 35, insights: "More selective but higher commitment when matched" },
    { group: "Ages 45-54", rate: 20, insights: "Quality over quantity approach" },
    { group: "Ages 55+", rate: 15, insights: "Focused on companionship and shared values" }
  ];

  const relationshipStages = [
    { stage: "First Message Response", rate: 18, timeframe: "Within 24 hours", tips: "Personalized messages get 3x more responses" },
    { stage: "First Date Acceptance", rate: 35, timeframe: "After messaging 3-7 days", tips: "Video calls before dates increase acceptance" },
    { stage: "Second Date", rate: 60, timeframe: "Within 1 week", tips: "Clear communication about intentions helps" },
    { stage: "Exclusive Relationship", rate: 25, timeframe: "After 2-3 months", tips: "Shared values and life goals alignment crucial" },
    { stage: "Long-term Commitment", rate: 40, timeframe: "After 6-12 months", tips: "Emotional maturity and compatibility matter most" },
    { stage: "Marriage/Life Partnership", rate: 30, timeframe: "After 1-3 years", tips: "Financial compatibility and family goals alignment" }
  ];

  const datingMethodComparison = [
    { method: "Dating Apps", success: 22, pros: ["Large pool", "Convenient"], cons: ["Superficial", "Competition"] },
    { method: "Through Friends", success: 38, pros: ["Pre-vetted", "Shared circles"], cons: ["Limited options", "Awkward if fails"] },
    { method: "Social Events", success: 28, pros: ["Natural interaction", "Shared interests"], cons: ["Time intensive", "Limited frequency"] },
    { method: "Work/School", success: 25, pros: ["Regular interaction", "Common ground"], cons: ["Professional risks", "Limited pool"] },
    { method: "Hobbies/Classes", success: 32, pros: ["Shared interests", "Natural bonding"], cons: ["Expensive", "Time commitment"] },
    { method: "Bars/Clubs", success: 12, pros: ["Immediate availability", "Social atmosphere"], cons: ["Superficial", "Alcohol involved"] }
  ];

  const factorsByImportance = [
    { factor: "Emotional Connection", importance: 95, impact: "Most critical for long-term success" },
    { factor: "Physical Attraction", importance: 78, impact: "Important initially, decreases over time" },
    { factor: "Shared Values", importance: 92, impact: "Essential for lasting relationships" },
    { factor: "Communication Skills", importance: 89, impact: "Determines conflict resolution ability" },
    { factor: "Life Goals Alignment", importance: 85, impact: "Prevents future relationship conflicts" },
    { factor: "Financial Compatibility", importance: 72, impact: "Reduces major source of relationship stress" },
    { factor: "Family Background", importance: 65, impact: "Influences relationship patterns and expectations" },
    { factor: "Educational Level", importance: 58, impact: "Correlates with lifestyle and communication" }
  ];

  const modernDatingChallenges = [
    { challenge: "Choice Overload", percentage: 67, description: "Too many options making it hard to commit" },
    { challenge: "Ghosting", percentage: 76, description: "Being ignored without explanation" },
    { challenge: "Mismatched Expectations", percentage: 58, description: "Different ideas about relationship pace/goals" },
    { challenge: "Technology Fatigue", percentage: 42, description: "Burnout from constant swiping and messaging" },
    { challenge: "Authenticity Issues", percentage: 53, description: "People not being genuine online" },
    { challenge: "Time Management", percentage: 48, description: "Balancing dating with work and life" }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Dating Success Statistics 2024 - Data-Driven Insights for Modern Romance",
    "description": "Comprehensive dating success statistics including online dating rates, relationship formation data, and evidence-based insights for improving your dating success in 2024.",
    "author": {
      "@type": "Organization",
      "name": "Female Delusion Calculator"
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://delusionfemalecalculator.com/dating-success-statistics"
    }
  };

  return (
    <>
      <SEOHead
        title="Dating Success Statistics 2024 - Data & Insights for Modern Romance"
        description="Discover comprehensive dating success statistics for 2024. Learn about online dating rates, relationship formation data, and evidence-based insights to improve your dating success."
        keywords="dating success statistics, online dating statistics 2024, relationship success rates, dating app statistics, modern dating data, relationship formation statistics"
        schemaData={schemaData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <BarChart3 className="h-16 w-16 text-indigo-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Dating Success Statistics 2024
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Data-driven insights into modern dating success rates, relationship formation, 
              and evidence-based strategies to improve your romantic outcomes.
            </p>
          </div>

          {/* Quick Stats Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-indigo-600 flex items-center">
                <TrendingUp className="h-6 w-6 mr-2" />
                Key Dating Statistics Overview
              </CardTitle>
              <CardDescription>
                The most important numbers you need to know about modern dating
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {onlineDatingStats.map((stat, index) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-indigo-600 mb-1">{stat.value}</div>
                    <div className="text-sm font-medium text-gray-900 mb-2">{stat.metric}</div>
                    <div className="text-xs text-gray-600">{stat.description}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Main Content Tabs */}
          <Tabs defaultValue="success-rates" className="mb-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="success-rates">Success Rates</TabsTrigger>
              <TabsTrigger value="demographics">Demographics</TabsTrigger>
              <TabsTrigger value="methods">Methods</TabsTrigger>
              <TabsTrigger value="challenges">Challenges</TabsTrigger>
            </TabsList>

            <TabsContent value="success-rates" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-green-600">Relationship Formation Success Rates</CardTitle>
                  <CardDescription>
                    Success rates at each stage of the dating process
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {relationshipStages.map((stage, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <h4 className="font-semibold text-gray-900">{stage.stage}</h4>
                          <span className="text-sm font-medium text-green-600">{stage.rate}%</span>
                        </div>
                        <Progress value={stage.rate} className="h-2" />
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-blue-600">Typical Timeframe:</span>
                            <span className="text-gray-700 ml-2">{stage.timeframe}</span>
                          </div>
                          <div>
                            <span className="font-medium text-purple-600">Key Factor:</span>
                            <span className="text-gray-700 ml-2">{stage.tips}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Success Factors by Importance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {factorsByImportance.map((factor, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium text-gray-900">{factor.factor}</h4>
                          <span className="text-sm font-medium text-indigo-600">{factor.importance}%</span>
                        </div>
                        <Progress value={factor.importance} className="h-2" />
                        <p className="text-sm text-gray-600">{factor.impact}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="demographics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600 flex items-center">
                    <Users className="h-6 w-6 mr-2" />
                    Success Rates by Age Group
                  </CardTitle>
                  <CardDescription>
                    How dating success varies across different age demographics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {demographicSuccessRates.map((demo, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold text-gray-900">{demo.group}</h4>
                          <span className="text-lg font-bold text-blue-600">{demo.rate}%</span>
                        </div>
                        <Progress value={demo.rate} className="h-2 mb-2" />
                        <p className="text-sm text-gray-600">{demo.insights}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="methods" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-600 flex items-center">
                    <Target className="h-6 w-6 mr-2" />
                    Dating Method Success Comparison
                  </CardTitle>
                  <CardDescription>
                    Success rates and trade-offs of different ways to meet potential partners
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {datingMethodComparison.map((method, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="font-semibold text-gray-900">{method.method}</h4>
                          <span className="text-lg font-bold text-purple-600">{method.success}% Success Rate</span>
                        </div>
                        <Progress value={method.success} className="h-2 mb-4" />
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-green-700 mb-2">Advantages:</h5>
                            <ul className="text-sm text-green-600">
                              {method.pros.map((pro, idx) => <li key={idx}>• {pro}</li>)}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-red-700 mb-2">Disadvantages:</h5>
                            <ul className="text-sm text-red-600">
                              {method.cons.map((con, idx) => <li key={idx}>• {con}</li>)}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="challenges" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-red-600 flex items-center">
                    <Calendar className="h-6 w-6 mr-2" />
                    Modern Dating Challenges
                  </CardTitle>
                  <CardDescription>
                    The biggest obstacles people face in today's dating landscape
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {modernDatingChallenges.map((challenge, index) => (
                      <div key={index} className="p-4 border rounded-lg bg-gradient-to-r from-red-50 to-pink-50">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold text-gray-900">{challenge.challenge}</h4>
                          <span className="text-sm font-bold text-red-600">{challenge.percentage}% affected</span>
                        </div>
                        <Progress value={challenge.percentage} className="h-2 mb-2" />
                        <p className="text-sm text-gray-700">{challenge.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Actionable Insights */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-green-600 flex items-center">
                <PieChart className="h-6 w-6 mr-2" />
                Evidence-Based Dating Strategies
              </CardTitle>
              <CardDescription>
                What the data tells us about improving your dating success
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">High-Impact Strategies</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Focus on emotional connection over physical attraction initially</li>
                    <li>• Use multiple dating methods simultaneously</li>
                    <li>• Invest in personal development and hobbies</li>
                    <li>• Practice clear communication about intentions</li>
                    <li>• Develop conflict resolution skills early</li>
                    <li>• Align life goals before becoming serious</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Common Mistakes to Avoid</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Relying only on dating apps for meeting people</li>
                    <li>• Moving too fast physically without emotional connection</li>
                    <li>• Ignoring red flags hoping they'll change</li>
                    <li>• Not being authentic to attract the right person</li>
                    <li>• Giving up too quickly after rejection</li>
                    <li>• Comparing your dating life to social media portrayals</li>
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
                Use these tools to apply statistical insights to your dating life
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link to="/" className="p-4 border rounded-lg hover:shadow-lg transition-shadow group">
                  <h4 className="font-semibold text-pink-600 group-hover:text-pink-700">
                    Female Delusion Calculator
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    See if your standards align with statistical reality
                  </p>
                  <ArrowRight className="h-4 w-4 text-gray-400 mt-2 group-hover:text-pink-600" />
                </Link>
                
                <Link to="/dating-red-flags-checklist" className="p-4 border rounded-lg hover:shadow-lg transition-shadow group">
                  <h4 className="font-semibold text-pink-600 group-hover:text-pink-700">
                    Dating Red Flags Checklist
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Avoid statistically problematic patterns
                  </p>
                  <ArrowRight className="h-4 w-4 text-gray-400 mt-2 group-hover:text-pink-600" />
                </Link>

                <Link to="/what-men-find-attractive" className="p-4 border rounded-lg hover:shadow-lg transition-shadow group">
                  <h4 className="font-semibold text-pink-600 group-hover:text-pink-700">
                    What Men Find Attractive
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Data-backed attraction insights
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
                <div className="prose prose-indigo max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Modern Dating Through Data</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-indigo-50 p-6 rounded-lg">
                      <p className="text-gray-700 leading-relaxed">
                        Dating success statistics provide valuable insights into relationship formation patterns in the digital age. 
                        By understanding these trends, individuals can make more informed decisions about their dating strategies 
                        and set realistic expectations for their romantic journey.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">The Evolution of Dating Success Metrics</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Traditional dating success was measured primarily by marriage rates, but modern metrics include relationship 
                        satisfaction, emotional fulfillment, and personal growth through dating experiences.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Today's data shows that quality connections matter more than quantity of matches or dates.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Impact of Technology on Dating Success</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Online dating has fundamentally changed how people meet and form relationships. While it has increased 
                        access to potential partners, it has also created new challenges like choice overload and reduced 
                        commitment rates.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Understanding these dynamics helps navigate the modern dating landscape more effectively.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Age and Life Stage Considerations</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Dating success rates vary significantly by age group, reflecting different life priorities and relationship 
                        readiness. Young adults focus on exploration and experience, while older demographics prioritize 
                        compatibility and long-term potential.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Aligning your approach with your life stage improves success rates.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">The Future of Dating Success</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Emerging trends suggest that future dating success will increasingly depend on emotional intelligence, 
                        authentic self-presentation, and the ability to build genuine connections despite technological mediation.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Those who master these skills will find greater success in forming meaningful relationships.
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

export default DatingSuccessStatistics;