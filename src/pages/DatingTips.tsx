import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, MessageCircle, UserCheck, Star, AlertTriangle, CheckCircle2 } from "lucide-react";

const DatingTips = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Navigation */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Calculator
          </Link>
        </div>

        {/* Header */}
        <header className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold text-secondary md:text-5xl">
            Dating Tips for Modern Women
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert dating advice to help you navigate modern relationships with confidence and find meaningful connections
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Tips Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 text-center">
                <Heart className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-secondary mb-2">Know Your Worth</h3>
                <p className="text-gray-600 text-sm">Don't settle for less than you deserve. Set standards that reflect your values.</p>
              </Card>
              <Card className="p-6 text-center">
                <MessageCircle className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-secondary mb-2">Communicate Clearly</h3>
                <p className="text-gray-600 text-sm">Express your needs and boundaries directly. Good communication builds strong relationships.</p>
              </Card>
              <Card className="p-6 text-center">
                <UserCheck className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-secondary mb-2">Be Authentic</h3>
                <p className="text-gray-600 text-sm">Show your true self from the beginning. The right person will love you for who you are.</p>
              </Card>
              <Card className="p-6 text-center">
                <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-secondary mb-2">Focus on Quality</h3>
                <p className="text-gray-600 text-sm">It's better to have one meaningful connection than dozens of superficial ones.</p>
              </Card>
            </div>

            {/* Main Content */}
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Essential Dating Tips for Success
              </h2>
              <div className="prose prose-gray max-w-none">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Before You Start Dating
                </h3>
                <div className="bg-green-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-green-800 mb-3">Work on Yourself First</h4>
                  <ul className="text-green-700 space-y-2">
                    <li>• <strong>Build self-confidence:</strong> Know your strengths, work on your weaknesses, and be comfortable with who you are</li>
                    <li>• <strong>Establish your values:</strong> Be clear about what matters most to you in life and relationships</li>
                    <li>• <strong>Heal from past relationships:</strong> Process previous experiences and learn from them without bringing baggage</li>
                    <li>• <strong>Create a fulfilling life:</strong> Pursue hobbies, friendships, and goals that make you happy independently</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  Creating an Attractive Dating Profile
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-3">Photo Tips</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Use recent, clear photos that show your face</li>
                      <li>• Include full-body shots (at least one)</li>
                      <li>• Show yourself doing activities you enjoy</li>
                      <li>• Smile genuinely in most photos</li>
                      <li>• Avoid too many group photos or filters</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Bio Guidelines</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Be specific about your interests and hobbies</li>
                      <li>• Mention what you're looking for in a relationship</li>
                      <li>• Show your personality and sense of humor</li>
                      <li>• Keep it positive and avoid negativity</li>
                      <li>• Include conversation starters</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-blue-500" />
                  First Date Success Strategies
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="font-semibold mb-2">Choose the Right Setting</h4>
                    <p className="text-gray-700 text-sm">
                      Opt for public places where you can talk easily. Coffee dates, casual lunch, or a walk in the park are great options. Avoid movies or loud bars for first dates.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="font-semibold mb-2">Conversation Tips</h4>
                    <p className="text-gray-700 text-sm">
                      Ask open-ended questions, listen actively, and share stories about yourself. Avoid controversial topics, ex-relationships, or overly personal information.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="font-semibold mb-2">Body Language Matters</h4>
                    <p className="text-gray-700 text-sm">
                      Make eye contact, smile naturally, and keep an open posture. Put your phone away and give your date your full attention.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  Red Flags to Watch For
                </h3>
                <div className="bg-red-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-red-800 mb-3">Early Warning Signs</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="text-red-700 space-y-2 text-sm">
                      <li>• Inconsistent communication patterns</li>
                      <li>• Pushes physical boundaries too quickly</li>
                      <li>• Talks negatively about all their exes</li>
                      <li>• Shows up late without good reason</li>
                      <li>• Dismisses your interests or opinions</li>
                    </ul>
                    <ul className="text-red-700 space-y-2 text-sm">
                      <li>• Avoids talking about their past or future</li>
                      <li>• Makes you feel uncomfortable or unsafe</li>
                      <li>• Shows signs of controlling behavior</li>
                      <li>• Disrespects service workers or others</li>
                      <li>• Seems to have different values than stated</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">Building Healthy Relationships</h3>
                <p className="mb-4">
                  Once you've found someone you connect with, focus on building a healthy foundation:
                </p>
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                  <li><strong>Take things at a comfortable pace:</strong> Don't rush into serious commitments. Allow the relationship to develop naturally.</li>
                  <li><strong>Maintain your independence:</strong> Continue pursuing your own interests, friendships, and goals.</li>
                  <li><strong>Communicate openly:</strong> Share your thoughts, feelings, and concerns honestly and encourage them to do the same.</li>
                  <li><strong>Set healthy boundaries:</strong> Be clear about what you're comfortable with and respect their boundaries too.</li>
                  <li><strong>Address conflicts constructively:</strong> Learn to disagree respectfully and work together to solve problems.</li>
                  <li><strong>Show appreciation:</strong> Regularly express gratitude for the things they do and the qualities you admire.</li>
                </ol>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold text-secondary mb-6">
                Online Dating Tips That Actually Work
              </h2>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Crafting the Perfect First Message</h3>
                  <div className="text-blue-700 space-y-2">
                    <p><strong>DO:</strong> Reference something specific from their profile</p>
                    <p><strong>DO:</strong> Ask an open-ended question that invites conversation</p>
                    <p><strong>DO:</strong> Keep it concise but thoughtful (2-4 sentences)</p>
                    <p><strong>DON'T:</strong> Send generic "Hey" or "How's your day?" messages</p>
                    <p><strong>DON'T:</strong> Write a novel or get too personal too quickly</p>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">Managing Multiple Conversations</h3>
                  <div className="text-purple-700 space-y-2">
                    <p>• <strong>Be selective:</strong> Focus on quality matches rather than trying to talk to everyone</p>
                    <p>• <strong>Move offline quickly:</strong> If there's mutual interest, suggest meeting within a week</p>
                    <p>• <strong>Be honest:</strong> You don't need to disclose you're talking to others, but don't lie if asked</p>
                    <p>• <strong>Trust your instincts:</strong> If someone doesn't feel right, it's okay to stop communicating</p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Dating App Safety Tips</h3>
                  <div className="text-green-700 space-y-2">
                    <p>• <strong>Meet in public:</strong> Always choose public places for first meetings</p>
                    <p>• <strong>Tell someone:</strong> Let a friend know where you're going and when to expect you back</p>
                    <p>• <strong>Drive yourself:</strong> Maintain your independence by providing your own transportation</p>
                    <p>• <strong>Video chat first:</strong> Consider a video call before meeting to verify they're real</p>
                    <p>• <strong>Trust your gut:</strong> If something feels off, don't ignore that feeling</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold text-secondary mb-6">
                Common Dating Mistakes to Avoid
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-red-600">What NOT to Do</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">❌</span>
                      <div>
                        <strong>Playing hard to get excessively</strong>
                        <p className="text-sm text-gray-600">A little mystery is good, but don't make them guess if you're interested.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">❌</span>
                      <div>
                        <strong>Oversharing too quickly</strong>
                        <p className="text-sm text-gray-600">Save deep personal stories for when you've built more trust.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">❌</span>
                      <div>
                        <strong>Trying to change them</strong>
                        <p className="text-sm text-gray-600">Accept people as they are or move on if they're not compatible.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">❌</span>
                      <div>
                        <strong>Ignoring red flags</strong>
                        <p className="text-sm text-gray-600">Don't overlook concerning behavior hoping it will improve.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-green-600">What TO Do Instead</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✅</span>
                      <div>
                        <strong>Be genuinely interested</strong>
                        <p className="text-sm text-gray-600">Show authentic interest in getting to know them as a person.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✅</span>
                      <div>
                        <strong>Share gradually</strong>
                        <p className="text-sm text-gray-600">Open up at a pace that feels comfortable for both of you.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✅</span>
                      <div>
                        <strong>Appreciate their uniqueness</strong>
                        <p className="text-sm text-gray-600">Value what makes them special rather than trying to mold them.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✅</span>
                      <div>
                        <strong>Trust your instincts</strong>
                        <p className="text-sm text-gray-600">Pay attention to how they make you feel and act accordingly.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-bold text-secondary mb-4">Quick Dating Checklist</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Profile photos are recent and clear</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Bio shows personality and interests</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>First date planned for public place</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Friend knows your dating plans</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Clear about your boundaries</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Realistic expectations set</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold text-secondary mb-4">Related Resources</h3>
              <div className="space-y-3">
                <Link to="/dating-profile-tips" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="font-medium">Profile Tips</div>
                  <div className="text-sm text-gray-600">Optimize your dating profile</div>
                </Link>
                <Link to="/dating-standards" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="font-medium">Dating Standards</div>
                  <div className="text-sm text-gray-600">Assess your expectations</div>
                </Link>
                <Link to="/relationship-compatibility" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="font-medium">Compatibility Test</div>
                  <div className="text-sm text-gray-600">Check relationship compatibility</div>
                </Link>
              </div>
            </Card>

            <Card className="p-6 bg-pink-50">
              <h3 className="text-lg font-bold text-pink-800 mb-3">💗 Remember</h3>
              <p className="text-pink-700 text-sm">
                Dating should be enjoyable, not stressful. Take breaks when needed, celebrate small victories, and remember that the right person is worth waiting for.
              </p>
            </Card>

            <Card className="p-6 bg-yellow-50">
              <h3 className="text-lg font-bold text-yellow-800 mb-3">📱 Dating App Stats</h3>
              <div className="text-yellow-700 text-sm space-y-2">
                <div className="flex justify-between">
                  <span>Average first dates per year:</span>
                  <span className="font-semibold">8-12</span>
                </div>
                <div className="flex justify-between">
                  <span>Time to exclusive relationship:</span>
                  <span className="font-semibold">2-3 months</span>
                </div>
                <div className="flex justify-between">
                  <span>Success rate of online dating:</span>
                  <span className="font-semibold">22%</span>
                </div>
                <div className="flex justify-between">
                  <span>Average relationship length:</span>
                  <span className="font-semibold">18 months</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="p-8 text-center bg-gradient-to-r from-purple-50 to-pink-50">
          <h2 className="text-2xl font-bold text-secondary mb-4">
            Ready to Put These Tips into Action?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Knowledge is power, but application is key. Start implementing these dating tips today and watch your dating life transform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/dating-profile-tips">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Optimize Your Profile
              </Button>
            </Link>
            <Link to="/relationship-advice">
              <Button variant="outline">
                Get More Advice
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DatingTips;