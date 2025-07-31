import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Brain, Heart, MessageSquare, Users, Lightbulb, TrendingUp } from "lucide-react";

const RelationshipAdvice = () => {
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
            Relationship Advice & Psychology
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Science-backed relationship advice to help you build stronger, healthier, and more fulfilling romantic connections
          </p>
        </header>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center">
            <Brain className="w-8 h-8 text-purple-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-secondary">Psychology</h3>
            <p className="text-gray-600 text-sm">Science-based insights</p>
          </Card>
          <Card className="p-6 text-center">
            <Heart className="w-8 h-8 text-red-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-secondary">Love</h3>
            <p className="text-gray-600 text-sm">Understanding emotions</p>
          </Card>
          <Card className="p-6 text-center">
            <MessageSquare className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-secondary">Communication</h3>
            <p className="text-gray-600 text-sm">Better conversations</p>
          </Card>
          <Card className="p-6 text-center">
            <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-secondary">Growth</h3>
            <p className="text-gray-600 text-sm">Relationship improvement</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* The Science of Love */}
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-secondary mb-6 flex items-center gap-3">
                <Brain className="w-8 h-8 text-purple-500" />
                The Science of Love & Attachment
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-lg mb-6">
                  Understanding the psychological foundations of love and attachment can help you build more secure, lasting relationships. Modern psychology offers valuable insights into how we bond, communicate, and grow together.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">The Four Attachment Styles</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Secure Attachment (60%)</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Comfortable with intimacy and independence</li>
                      <li>• Communicates needs clearly</li>
                      <li>• Trusts partner and feels trusted</li>
                      <li>• Handles conflict constructively</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Anxious Attachment (20%)</h4>
                    <ul className="text-yellow-700 text-sm space-y-1">
                      <li>• Fears abandonment or rejection</li>
                      <li>• Seeks frequent reassurance</li>
                      <li>• May become clingy or jealous</li>
                      <li>• Highly sensitive to partner's moods</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Avoidant Attachment (15%)</h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Values independence over intimacy</li>
                      <li>• Uncomfortable with emotional closeness</li>
                      <li>• May withdraw during conflict</li>
                      <li>• Difficulty expressing emotions</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Disorganized Attachment (5%)</h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• Inconsistent relationship patterns</li>
                      <li>• Struggles with trust and intimacy</li>
                      <li>• May have chaotic relationship history</li>
                      <li>• Benefits from therapy or counseling</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">The Chemistry of Love</h3>
                <p className="mb-4">
                  Love involves complex brain chemistry that affects how we feel and behave in relationships:
                </p>
                <div className="bg-purple-50 p-6 rounded-lg mb-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">Dopamine</h4>
                      <p className="text-purple-700 text-sm">Creates excitement, motivation, and the "reward" feeling when with your partner</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">Oxytocin</h4>
                      <p className="text-purple-700 text-sm">The "bonding hormone" released during physical touch and emotional connection</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">Serotonin</h4>
                      <p className="text-purple-700 text-sm">Regulates mood and can decrease in early stages of love, causing obsessive thoughts</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">Building Emotional Intelligence in Relationships</h3>
                <p className="mb-4">
                  Emotional intelligence (EQ) is often more important than IQ for relationship success. It includes:
                </p>
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                  <li><strong>Self-awareness:</strong> Understanding your own emotions and triggers</li>
                  <li><strong>Self-regulation:</strong> Managing your emotional responses effectively</li>
                  <li><strong>Empathy:</strong> Understanding and sharing your partner's feelings</li>
                  <li><strong>Social skills:</strong> Communicating effectively and resolving conflicts</li>
                  <li><strong>Motivation:</strong> Working toward shared relationship goals</li>
                </ol>
              </div>
            </Card>

            {/* Communication Strategies */}
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-secondary mb-6 flex items-center gap-3">
                <MessageSquare className="w-8 h-8 text-blue-500" />
                Effective Communication Strategies
              </h2>
              <div className="prose prose-gray max-w-none">
                <h3 className="text-xl font-semibold mb-4">The Art of Active Listening</h3>
                <p className="mb-4">
                  Active listening is more than just hearing words—it's about understanding and validating your partner's experience:
                </p>
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-blue-800 mb-3">Active Listening Techniques</h4>
                  <ul className="text-blue-700 space-y-2">
                    <li>• <strong>Give full attention:</strong> Put away distractions and make eye contact</li>
                    <li>• <strong>Reflect back:</strong> "What I hear you saying is..." to confirm understanding</li>
                    <li>• <strong>Ask clarifying questions:</strong> "Can you help me understand..." to get deeper insight</li>
                    <li>• <strong>Validate emotions:</strong> "I can see why you'd feel that way" to show empathy</li>
                    <li>• <strong>Avoid interrupting:</strong> Let them finish their thoughts completely</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-4">The "I" Statement Formula</h3>
                <p className="mb-4">
                  Using "I" statements instead of "you" statements reduces defensiveness and promotes understanding:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">❌ "You" Statements (Problematic)</h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>"You never listen to me"</li>
                      <li>"You always leave dishes everywhere"</li>
                      <li>"You don't care about my feelings"</li>
                      <li>"You're being selfish"</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">✅ "I" Statements (Better)</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>"I feel unheard when I'm interrupted"</li>
                      <li>"I feel stressed when the kitchen is messy"</li>
                      <li>"I need more emotional support"</li>
                      <li>"I feel hurt when my needs aren't considered"</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">Conflict Resolution Framework</h3>
                <p className="mb-4">
                  Healthy couples don't avoid conflict—they handle it constructively:
                </p>
                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="font-semibold mb-2">1. Cool Down Period</h4>
                    <p className="text-gray-700 text-sm">
                      Take a 20-30 minute break if emotions are running high. Agree to return to the discussion when calmer.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="font-semibold mb-2">2. Identify the Real Issue</h4>
                    <p className="text-gray-700 text-sm">
                      Look beyond surface complaints to understand underlying needs or fears driving the conflict.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="font-semibold mb-2">3. Share Perspectives</h4>
                    <p className="text-gray-700 text-sm">
                      Each person shares their view using "I" statements while the other listens without defending.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h4 className="font-semibold mb-2">4. Find Common Ground</h4>
                    <p className="text-gray-700 text-sm">
                      Identify shared goals or values that both people care about in the situation.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-6">
                    <h4 className="font-semibold mb-2">5. Brainstorm Solutions</h4>
                    <p className="text-gray-700 text-sm">
                      Work together to find compromises or solutions that address both people's core needs.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">Building Intimacy Through Communication</h3>
                <p className="mb-4">
                  Emotional intimacy develops through vulnerable, honest sharing over time:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Share daily highs and lows:</strong> Regular check-ins about each other's day</li>
                  <li><strong>Express appreciation:</strong> Regularly acknowledge what you value about your partner</li>
                  <li><strong>Discuss dreams and fears:</strong> Share your hopes for the future and what worries you</li>
                  <li><strong>Practice vulnerability:</strong> Share struggles and insecurities in a safe space</li>
                  <li><strong>Create rituals:</strong> Establish regular times for deeper conversations</li>
                </ul>
              </div>
            </Card>

            {/* Relationship Stages */}
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-secondary mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-green-500" />
                The Five Stages of Relationship Development
              </h2>
              <div className="space-y-6">
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-pink-800 mb-3">Stage 1: Attraction & Romance (0-6 months)</h3>
                  <div className="text-pink-700 text-sm space-y-2">
                    <p><strong>Characteristics:</strong> High dopamine, idealization, passion, "honeymoon period"</p>
                    <p><strong>Focus:</strong> Enjoy the connection while staying grounded in reality</p>
                    <p><strong>Common mistakes:</strong> Moving too fast, ignoring red flags, losing individual identity</p>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-800 mb-3">Stage 2: Reality Check (6-18 months)</h3>
                  <div className="text-orange-700 text-sm space-y-2">
                    <p><strong>Characteristics:</strong> Seeing flaws, first conflicts, decreased intensity</p>
                    <p><strong>Focus:</strong> Accept imperfections while maintaining respect and affection</p>
                    <p><strong>Common mistakes:</strong> Expecting perfection, comparing to the honeymoon phase</p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">Stage 3: Stability & Commitment (1.5-3 years)</h3>
                  <div className="text-yellow-700 text-sm space-y-2">
                    <p><strong>Characteristics:</strong> Deeper understanding, routine development, major decisions</p>
                    <p><strong>Focus:</strong> Build shared goals and navigate life challenges together</p>
                    <p><strong>Common mistakes:</strong> Taking each other for granted, avoiding difficult conversations</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Stage 4: Growth & Challenge (3-7 years)</h3>
                  <div className="text-blue-700 text-sm space-y-2">
                    <p><strong>Characteristics:</strong> Individual growth, changing needs, potential growing apart</p>
                    <p><strong>Focus:</strong> Support each other's evolution while maintaining connection</p>
                    <p><strong>Common mistakes:</strong> Resisting change, not communicating evolving needs</p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Stage 5: Mature Love (7+ years)</h3>
                  <div className="text-green-700 text-sm space-y-2">
                    <p><strong>Characteristics:</strong> Deep acceptance, weathered storms together, secure attachment</p>
                    <p><strong>Focus:</strong> Maintain passion while enjoying deep friendship and partnership</p>
                    <p><strong>Common mistakes:</strong> Becoming complacent, not nurturing romance</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Red Flags vs Green Flags */}
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Relationship Red Flags vs Green Flags
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-red-600 mb-4 flex items-center gap-2">
                    🚩 Major Red Flags
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 text-sm mb-1">Controlling Behavior</h4>
                      <p className="text-red-700 text-xs">Monitoring your activities, isolating you from friends/family, making decisions for you</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 text-sm mb-1">Emotional Manipulation</h4>
                      <p className="text-red-700 text-xs">Gaslighting, guilt-tripping, using emotions to control your behavior</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 text-sm mb-1">Disrespecting Boundaries</h4>
                      <p className="text-red-700 text-xs">Pushing physical/emotional limits, ignoring your "no", pressuring you</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 text-sm mb-1">Substance Abuse Issues</h4>
                      <p className="text-red-700 text-xs">Drinking/drug problems affecting the relationship, denying issues</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 text-sm mb-1">Consistent Dishonesty</h4>
                      <p className="text-red-700 text-xs">Lying about important things, hiding activities, breaking promises repeatedly</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-green-600 mb-4 flex items-center gap-2">
                    ✅ Green Flags
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 text-sm mb-1">Respects Your Autonomy</h4>
                      <p className="text-green-700 text-xs">Supports your independence, encourages your friendships and goals</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 text-sm mb-1">Communicates Openly</h4>
                      <p className="text-green-700 text-xs">Shares thoughts/feelings honestly, listens actively, handles conflict maturely</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 text-sm mb-1">Shows Consistent Care</h4>
                      <p className="text-green-700 text-xs">Actions match words, remembers important things, makes effort regularly</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 text-sm mb-1">Takes Responsibility</h4>
                      <p className="text-green-700 text-xs">Admits mistakes, apologizes genuinely, works to improve behavior</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 text-sm mb-1">Supports Your Growth</h4>
                      <p className="text-green-700 text-xs">Encourages your dreams, celebrates successes, helps during challenges</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-bold text-secondary mb-4">Relationship Health Check</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span>Communication quality</span>
                  <span className="text-green-600 font-semibold">Good</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Conflict resolution</span>
                  <span className="text-yellow-600 font-semibold">Needs work</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Emotional support</span>
                  <span className="text-green-600 font-semibold">Strong</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Shared goals</span>
                  <span className="text-blue-600 font-semibold">Aligned</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Physical intimacy</span>
                  <span className="text-green-600 font-semibold">Healthy</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Individual growth</span>
                  <span className="text-yellow-600 font-semibold">Improving</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold text-secondary mb-4">Related Tools</h3>
              <div className="space-y-3">
                <Link to="/relationship-compatibility" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="font-medium">Compatibility Test</div>
                  <div className="text-sm text-gray-600">Assess your relationship</div>
                </Link>
                <Link to="/dating-standards" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="font-medium">Dating Standards</div>
                  <div className="text-sm text-gray-600">Realistic expectations</div>
                </Link>
                <Link to="/dating-tips" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="font-medium">Dating Tips</div>
                  <div className="text-sm text-gray-600">Practical advice</div>
                </Link>
              </div>
            </Card>

            <Card className="p-6 bg-purple-50">
              <h3 className="text-lg font-bold text-purple-800 mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Weekly Relationship Tip
              </h3>
              <p className="text-purple-700 text-sm">
                Try the "5-to-1 Rule" this week: For every one negative interaction, aim for five positive ones. This builds a foundation of goodwill and connection.
              </p>
            </Card>

            <Card className="p-6 bg-blue-50">
              <h3 className="text-lg font-bold text-blue-800 mb-3">📚 Recommended Reading</h3>
              <div className="text-blue-700 text-sm space-y-2">
                <div>
                  <div className="font-semibold">"The Seven Principles for Making Marriage Work"</div>
                  <div className="text-xs">by John Gottman</div>
                </div>
                <div>
                  <div className="font-semibold">"Attached"</div>
                  <div className="text-xs">by Amir Levine & Rachel Heller</div>
                </div>
                <div>
                  <div className="font-semibold">"Hold Me Tight"</div>
                  <div className="text-xs">by Sue Johnson</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="p-8 text-center bg-gradient-to-r from-blue-50 to-purple-50">
          <h2 className="text-2xl font-bold text-secondary mb-4">
            Ready to Improve Your Relationship?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Knowledge is the first step, but practice makes progress. Start implementing these insights in your relationship today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/relationship-compatibility">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Test Your Compatibility
              </Button>
            </Link>
            <Link to="/dating-tips">
              <Button variant="outline">
                Get More Tips
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RelationshipAdvice;