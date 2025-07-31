import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { MessageCircle, CheckCircle, XCircle, Clock, Heart, ArrowRight, Smartphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const TextingRulesDating = () => {
  const [activeTab, setActiveTab] = useState("do");

  const doRules = [
    {
      rule: "Wait for their response before sending another message",
      reason: "Shows respect for their time and prevents overwhelming them",
      example: "Send one message and wait for a reply rather than sending multiple follow-ups"
    },
    {
      rule: "Match their texting energy and frequency",
      reason: "Creates balanced communication and shows you're paying attention to their preferences",
      example: "If they send thoughtful paragraphs, reciprocate. If they prefer short messages, adapt accordingly"
    },
    {
      rule: "Use proper grammar and spelling",
      reason: "Demonstrates intelligence and shows you care enough to put effort into communication",
      example: "Write 'How was your day?' instead of 'hw was ur day'"
    },
    {
      rule: "Ask open-ended questions",
      reason: "Keeps conversations flowing and shows genuine interest in getting to know them",
      example: "'What's been the highlight of your week?' instead of 'How are you?'"
    },
    {
      rule: "Share details about your life",
      reason: "Creates emotional intimacy and helps them get to know the real you",
      example: "Tell them about your hobbies, work experiences, or interesting things that happened"
    },
    {
      rule: "Use their name occasionally",
      reason: "Creates personal connection and shows you're thinking specifically about them",
      example: "Good morning, Sarah! Hope you have a great day"
    },
    {
      rule: "Respond within reasonable timeframes",
      reason: "Shows interest while maintaining your own life and independence",
      example: "Aim to respond within a few hours during normal waking hours"
    },
    {
      rule: "Plan dates through text",
      reason: "Moves the relationship forward and shows serious romantic intent",
      example: "'I'd love to take you to dinner Friday. Are you free around 7?'"
    }
  ];

  const dontRules = [
    {
      rule: "Don't send multiple texts without a response",
      reason: "Can appear needy or desperate and may push them away",
      example: "Avoid: 'Hey' 'How are you?' 'Did you see my message?' 'Hello?'"
    },
    {
      rule: "Don't use excessive emojis or all caps",
      reason: "Can seem immature or overwhelming in early dating stages",
      example: "Avoid: 'OMG!!! 😍😍😍 YOU'RE SO AMAZING!!! 🔥🔥🔥'"
    },
    {
      rule: "Don't respond immediately every time",
      reason: "Shows you have your own life and creates healthy anticipation",
      example: "It's okay to wait 30 minutes to a few hours before responding"
    },
    {
      rule: "Don't have serious conversations over text",
      reason: "Important topics need tone of voice and facial expressions for proper communication",
      example: "Save relationship talks, conflict resolution, or emotional topics for phone calls or in-person"
    },
    {
      rule: "Don't send long paragraphs early on",
      reason: "Can be overwhelming and might scare away someone who prefers gradual communication",
      example: "Keep messages conversational length in the beginning stages"
    },
    {
      rule: "Don't text late at night unless established",
      reason: "Respect their schedule and boundaries around sleep time",
      example: "Avoid texting after 10 PM unless you know they're a night owl"
    },
    {
      rule: "Don't overthink every message",
      reason: "Natural conversation flows better than perfectly crafted responses",
      example: "Don't spend 20 minutes crafting the 'perfect' reply to a simple question"
    },
    {
      rule: "Don't use text to avoid phone calls or meetings",
      reason: "Real connection requires voice and in-person interaction",
      example: "Don't try to get to know someone entirely through texting"
    }
  ];

  const timingGuidelines = [
    {
      stage: "First Few Days",
      frequency: "1-3 messages per day",
      responseTime: "2-6 hours",
      tips: "Keep it light and fun. Focus on getting to know each other."
    },
    {
      stage: "First 1-2 Weeks",
      frequency: "3-5 messages per day",
      responseTime: "1-4 hours",
      tips: "Start sharing more personal details. Plan your first date."
    },
    {
      stage: "Dating Regularly",
      frequency: "5-10 messages per day",
      responseTime: "30 minutes - 2 hours",
      tips: "Good morning/good night texts become normal. Share daily experiences."
    },
    {
      stage: "Exclusive/Serious",
      frequency: "Throughout the day",
      responseTime: "15 minutes - 1 hour",
      tips: "Constant communication is expected. Use for planning and emotional support."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Texting Rules for Dating - Complete Guide to Dating Communication",
    "description": "Master dating communication with essential texting rules. Learn what to do and avoid, timing guidelines, and conversation starters for successful dating.",
    "author": {
      "@type": "Organization",
      "name": "Female Delusion Calculator"
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://delusionfemalecalculator.com/texting-rules-dating"
    }
  };

  return (
    <>
      <SEOHead
        title="Texting Rules for Dating - Do's and Don'ts for Modern Romance"
        description="Master dating communication with our complete texting rules guide. Learn timing, frequency, conversation starters, and what to avoid when texting someone you're dating."
        keywords="texting rules dating, dating communication, how to text while dating, dating text messages, texting etiquette dating, dating conversation tips"
        schemaData={schemaData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <Smartphone className="h-16 w-16 text-blue-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Texting Rules for Dating
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master the art of dating communication with proven texting strategies. 
              Learn what works, what doesn't, and how to build attraction through text.
            </p>
          </div>

          {/* Main Content Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="do" className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Do's
              </TabsTrigger>
              <TabsTrigger value="dont" className="flex items-center gap-2">
                <XCircle className="h-4 w-4" />
                Don'ts
              </TabsTrigger>
              <TabsTrigger value="timing" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Timing
              </TabsTrigger>
              <TabsTrigger value="examples" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Examples
              </TabsTrigger>
            </TabsList>

            <TabsContent value="do" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-green-600 flex items-center">
                    <CheckCircle className="h-6 w-6 mr-2" />
                    Texting Do's - What You Should Do
                  </CardTitle>
                  <CardDescription>
                    Follow these proven guidelines to create attraction and build connection
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {doRules.map((item, index) => (
                      <div key={index} className="border-l-4 border-green-500 pl-4 py-2">
                        <h4 className="font-semibold text-gray-900 mb-2">{item.rule}</h4>
                        <p className="text-sm text-gray-600 mb-2">{item.reason}</p>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <p className="text-sm text-green-800"><strong>Example:</strong> {item.example}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="dont" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-red-600 flex items-center">
                    <XCircle className="h-6 w-6 mr-2" />
                    Texting Don'ts - What to Avoid
                  </CardTitle>
                  <CardDescription>
                    Avoid these common mistakes that can damage attraction and push people away
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {dontRules.map((item, index) => (
                      <div key={index} className="border-l-4 border-red-500 pl-4 py-2">
                        <h4 className="font-semibold text-gray-900 mb-2">{item.rule}</h4>
                        <p className="text-sm text-gray-600 mb-2">{item.reason}</p>
                        <div className="bg-red-50 p-3 rounded-lg">
                          <p className="text-sm text-red-800"><strong>Example:</strong> {item.example}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="timing" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600 flex items-center">
                    <Clock className="h-6 w-6 mr-2" />
                    Texting Timing & Frequency Guidelines
                  </CardTitle>
                  <CardDescription>
                    How often and when to text based on your relationship stage
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {timingGuidelines.map((stage, index) => (
                      <div key={index} className="p-4 border rounded-lg bg-gradient-to-r from-blue-50 to-purple-50">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-lg text-gray-900">{stage.stage}</h4>
                          <Badge variant="outline">{stage.frequency}</Badge>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-blue-600">Response Time:</span>
                            <p className="text-gray-700">{stage.responseTime}</p>
                          </div>
                          <div>
                            <span className="font-medium text-purple-600">Tips:</span>
                            <p className="text-gray-700">{stage.tips}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="examples" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-600 flex items-center">
                    <MessageCircle className="h-6 w-6 mr-2" />
                    Good vs. Bad Texting Examples
                  </CardTitle>
                  <CardDescription>
                    See real examples of effective and ineffective dating texts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {/* Conversation Starters */}
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Conversation Starters</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                          <h5 className="font-medium text-green-800 mb-2">✓ Good Examples</h5>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>"What's been the best part of your week so far?"</li>
                            <li>"I just tried that coffee shop you mentioned - you were right!"</li>
                            <li>"Random question: what's your go-to comfort food?"</li>
                            <li>"How did your presentation go today?"</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                          <h5 className="font-medium text-red-800 mb-2">✗ Bad Examples</h5>
                          <ul className="text-sm text-red-700 space-y-1">
                            <li>"Hey"</li>
                            <li>"Wyd"</li>
                            <li>"Good morning beautiful 😍😍😍"</li>
                            <li>"Why haven't you responded?"</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Response Examples */}
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Response Examples</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                          <h5 className="font-medium text-green-800 mb-2">✓ Engaging Responses</h5>
                          <ul className="text-sm text-green-700 space-y-2">
                            <li>"That sounds amazing! I've always wanted to try rock climbing. What got you into it?"</li>
                            <li>"Haha, I can definitely see that happening to me. What did you do next?"</li>
                            <li>"I completely agree! That movie had me thinking about it for days."</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                          <h5 className="font-medium text-red-800 mb-2">✗ Conversation Killers</h5>
                          <ul className="text-sm text-red-700 space-y-2">
                            <li>"Cool"</li>
                            <li>"Lol"</li>
                            <li>"Nice"</li>
                            <li>"OK"</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Quick Tips */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-pink-600 flex items-center">
                <Heart className="h-5 w-5 mr-2" />
                Pro Tips for Dating Success
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Building Attraction Through Text</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Be confident but not arrogant</li>
                    <li>• Show interest but maintain mystery</li>
                    <li>• Use humor appropriately</li>
                    <li>• Reference previous conversations</li>
                    <li>• Create anticipation for meetups</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Red Flags to Watch For</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Only texting late at night</li>
                    <li>• Taking days to respond regularly</li>
                    <li>• Avoiding phone calls or meetups</li>
                    <li>• Sending inappropriate photos early</li>
                    <li>• Being possessive or controlling</li>
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
                <Link to="/dating-red-flags-checklist" className="p-4 border rounded-lg hover:shadow-lg transition-shadow group">
                  <h4 className="font-semibold text-pink-600 group-hover:text-pink-700">
                    Dating Red Flags Checklist
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Identify warning signs in communication
                  </p>
                  <ArrowRight className="h-4 w-4 text-gray-400 mt-2 group-hover:text-pink-600" />
                </Link>
                
                <Link to="/" className="p-4 border rounded-lg hover:shadow-lg transition-shadow group">
                  <h4 className="font-semibold text-pink-600 group-hover:text-pink-700">
                    Female Delusion Calculator
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Check if your standards are realistic
                  </p>
                  <ArrowRight className="h-4 w-4 text-gray-400 mt-2 group-hover:text-pink-600" />
                </Link>

                <Link to="/what-men-find-attractive" className="p-4 border rounded-lg hover:shadow-lg transition-shadow group">
                  <h4 className="font-semibold text-pink-600 group-hover:text-pink-700">
                    What Men Find Attractive
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Understand what creates lasting attraction
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
                <div className="prose prose-blue max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">The Psychology Behind Effective Dating Communication</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <p className="text-gray-700 leading-relaxed">
                        Texting in dating serves multiple purposes beyond simple communication. It builds anticipation, 
                        creates emotional connection, and allows both people to present their personality gradually. 
                        Understanding the psychology behind effective texting can dramatically improve your dating success.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Timing Matters in Dating Texts</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Response timing communicates interest level, availability, and social status. While you shouldn't 
                        play games, being immediately available at all times can reduce your perceived value.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        The key is finding a balance that shows interest while maintaining your independence and self-respect.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Texting Mistakes That Kill Attraction</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Many dating prospects are lost due to poor texting habits rather than actual incompatibility. 
                        Over-texting, sending low-effort messages, or having serious conversations over text are among 
                        the top mistakes.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Remember, text should enhance your connection, not replace face-to-face interaction.
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

export default TextingRulesDating;