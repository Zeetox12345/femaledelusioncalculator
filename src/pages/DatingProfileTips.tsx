import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Camera, MessageCircle, Star, Users, CheckCircle, X, Eye, Heart } from "lucide-react";

const DatingProfileTips = () => {
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
            Online Dating Profile Tips
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Create an irresistible dating profile that attracts quality matches and shows your authentic self
          </p>
        </header>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center">
            <Eye className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-secondary">3 sec</h3>
            <p className="text-gray-600 text-sm">Average time spent on profiles</p>
          </Card>
          <Card className="p-6 text-center">
            <Camera className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-secondary">6-9</h3>
            <p className="text-gray-600 text-sm">Optimal number of photos</p>
          </Card>
          <Card className="p-6 text-center">
            <MessageCircle className="w-8 h-8 text-purple-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-secondary">40%</h3>
            <p className="text-gray-600 text-sm">Higher match rate with good bios</p>
          </Card>
          <Card className="p-6 text-center">
            <Heart className="w-8 h-8 text-red-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-secondary">85%</h3>
            <p className="text-gray-600 text-sm">Photos determine initial interest</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Photo Guidelines */}
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-secondary mb-6 flex items-center gap-3">
                <Camera className="w-8 h-8 text-green-500" />
                Perfect Profile Photos Guide
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-lg mb-6">
                  Your photos are the most critical part of your dating profile. They create the first impression and determine whether someone will read your bio or swipe left.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Essential Photo Types You Need</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Must-Have Photos
                    </h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Clear headshot (main photo)</li>
                      <li>• Full body shot</li>
                      <li>• Genuine smile photo</li>
                      <li>• Activity/hobby photo</li>
                      <li>• Social situation photo</li>
                      <li>• Different outfit/setting</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                      <X className="w-4 h-4" />
                      Photos to Avoid
                    </h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• Heavily filtered/edited</li>
                      <li>• Group photos only</li>
                      <li>• Sunglasses in every photo</li>
                      <li>• Mirror selfies exclusively</li>
                      <li>• Photos with ex-partners</li>
                      <li>• Blurry or outdated photos</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">Photo Quality Guidelines</h3>
                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="font-semibold mb-2">Lighting & Quality</h4>
                    <p className="text-gray-700 text-sm">
                      Use natural lighting whenever possible. Avoid harsh shadows or overly dark photos. High resolution is essential - blurry photos suggest low effort.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="font-semibold mb-2">Facial Expression</h4>
                    <p className="text-gray-700 text-sm">
                      Smile genuinely in most photos. Eye contact with the camera creates connection. Avoid looking away in all photos or appearing disinterested.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="font-semibold mb-2">Background & Setting</h4>
                    <p className="text-gray-700 text-sm">
                      Choose interesting but not distracting backgrounds. Show yourself in different environments to demonstrate your lifestyle and interests.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">The Psychology of Attractive Photos</h3>
                <p className="mb-4">
                  Research shows certain photo elements increase attractiveness and trustworthiness:
                </p>
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-blue-800 mb-3">Scientifically-Backed Photo Tips</h4>
                  <ul className="text-blue-700 space-y-2 text-sm">
                    <li>• <strong>Duchenne smiles:</strong> Genuine smiles that reach your eyes are perceived as more attractive</li>
                    <li>• <strong>Direct eye contact:</strong> Looking at the camera creates a sense of connection and trustworthiness</li>
                    <li>• <strong>Open body posture:</strong> Uncrossed arms and confident stance signal approachability</li>
                    <li>• <strong>Color psychology:</strong> Red increases attractiveness, blue suggests trustworthiness</li>
                    <li>• <strong>Context cues:</strong> Photos showing you doing interesting activities increase perceived attractiveness</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-4">Common Photo Mistakes</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-red-600">Women's Common Mistakes</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Over-filtering or heavy editing</li>
                      <li>• Only close-up selfies</li>
                      <li>• Hiding body with clever angles</li>
                      <li>• Too many group photos</li>
                      <li>• Outdated photos (2+ years old)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-red-600">Men's Common Mistakes</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Poor photo quality/lighting</li>
                      <li>• Only serious expressions</li>
                      <li>• Bathroom mirror selfies</li>
                      <li>• Photos with other women</li>
                      <li>• No variety in settings/outfits</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Bio Writing Guide */}
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-secondary mb-6 flex items-center gap-3">
                <MessageCircle className="w-8 h-8 text-purple-500" />
                Writing an Irresistible Bio
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-lg mb-6">
                  Your bio is your chance to show personality, spark conversation, and filter for compatible matches. A great bio balances information with intrigue.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">The Perfect Bio Formula</h3>
                <div className="bg-purple-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-purple-800 mb-3">Bio Structure That Works</h4>
                  <ol className="text-purple-700 space-y-2">
                    <li><strong>1. Hook (first line):</strong> Something interesting, funny, or unique about you</li>
                    <li><strong>2. Lifestyle snippet:</strong> Give a glimpse into your daily life or interests</li>
                    <li><strong>3. Values/goals:</strong> What matters to you or what you're working toward</li>
                    <li><strong>4. Conversation starter:</strong> A question or prompt that invites messages</li>
                    <li><strong>5. Light preference:</strong> Hint at what you're looking for (optional)</li>
                  </ol>
                </div>

                <h3 className="text-xl font-semibold mb-4">Bio Examples That Work</h3>
                <div className="space-y-6 mb-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Example 1: Adventurous Type</h4>
                    <p className="text-green-700 text-sm italic mb-2">
                      "Just got back from hiking in Patagonia and already planning my next adventure 🏔️ When I'm not exploring new places, you'll find me trying new restaurants or getting lost in a good book. Currently reading my way through the Modern Library's top 100 - feel free to judge my choices! What's the best trip you've ever taken?"
                    </p>
                    <p className="text-green-600 text-xs">
                      <strong>Why it works:</strong> Shows adventurous spirit, multiple interests, current activity, and asks an engaging question.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Example 2: Creative Professional</h4>
                    <p className="text-blue-700 text-sm italic mb-2">
                      "Graphic designer by day, terrible chef by night 👩‍🍳 I can make your brand look amazing but will probably burn dinner. Love discovering hole-in-the-wall coffee shops and weekend farmers markets. Looking for someone who appreciates good design and doesn't mind take-out. What's your go-to comfort food?"
                    </p>
                    <p className="text-blue-600 text-xs">
                      <strong>Why it works:</strong> Humor, specific job, relatable flaw, lifestyle details, and conversation starter.
                    </p>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Example 3: Career-Focused</h4>
                    <p className="text-orange-700 text-sm italic mb-2">
                      "Lawyer who actually enjoys her job (I know, rare species) ⚖️ Passionate about social justice and great wine. Weekends involve yoga classes, trying new brunch spots, and convincing my friends to go on spontaneous road trips. Seeking someone who can keep up with my energy and make me laugh until my cheeks hurt."
                    </p>
                    <p className="text-orange-600 text-xs">
                      <strong>Why it works:</strong> Addresses potential concerns humorously, shows passion, varied interests, and specific desire.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">What to Include vs. Avoid</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">✅ Do Include</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Specific hobbies and interests</li>
                      <li>• Your profession (if you're proud of it)</li>
                      <li>• Sense of humor</li>
                      <li>• What you value in life</li>
                      <li>• Conversation starters</li>
                      <li>• Recent accomplishments</li>
                      <li>• What makes you unique</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">❌ Avoid Including</h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• Negative language or complaints</li>
                      <li>• Clichés ("love to laugh," "live life to fullest")</li>
                      <li>• Physical requirements ("must be 6ft+")</li>
                      <li>• Past relationship details</li>
                      <li>• Overly sexual content</li>
                      <li>• Political rants</li>
                      <li>• Self-deprecating humor exclusively</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">Bio Length & Formatting</h3>
                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="font-semibold mb-2">Optimal Length</h4>
                    <p className="text-gray-700 text-sm">
                      150-300 characters works best. Long enough to show personality, short enough to hold attention. Think of it as a movie trailer, not the whole film.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="font-semibold mb-2">Formatting Tips</h4>
                    <p className="text-gray-700 text-sm">
                      Use emojis sparingly (1-2 max). Break up text with line breaks. Avoid all caps or excessive punctuation. Keep it scannable and easy to read.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Platform-Specific Tips */}
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Platform-Specific Optimization
              </h2>
              <div className="space-y-6">
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-pink-800 mb-3">Tinder</h3>
                  <div className="text-pink-700 text-sm space-y-2">
                    <p><strong>Focus:</strong> Visual appeal and quick hook</p>
                    <p><strong>Photo tips:</strong> Lead with your most attractive photo, include full body shot</p>
                    <p><strong>Bio strategy:</strong> Keep it short and punchy, focus on conversation starters</p>
                    <p><strong>Character limit:</strong> 500 characters</p>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">Bumble</h3>
                  <div className="text-purple-700 text-sm space-y-2">
                    <p><strong>Focus:</strong> Empowerment and authenticity</p>
                    <p><strong>Photo tips:</strong> Show confidence and varied interests</p>
                    <p><strong>Bio strategy:</strong> Be specific about interests, show ambition</p>
                    <p><strong>Special features:</strong> Use prompts to show personality depth</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Hinge</h3>
                  <div className="text-blue-700 text-sm space-y-2">
                    <p><strong>Focus:</strong> Relationship-minded, detailed profiles</p>
                    <p><strong>Photo tips:</strong> Use all 6 slots, include captions</p>
                    <p><strong>Bio strategy:</strong> Answer prompts thoughtfully, show depth</p>
                    <p><strong>Special features:</strong> Comment on specific photos/prompts when matching</p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Coffee Meets Bagel</h3>
                  <div className="text-green-700 text-sm space-y-2">
                    <p><strong>Focus:</strong> Quality over quantity, serious dating</p>
                    <p><strong>Photo tips:</strong> Professional but approachable photos</p>
                    <p><strong>Bio strategy:</strong> Detailed preferences and lifestyle information</p>
                    <p><strong>Special features:</strong> Take advantage of daily curated matches</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Profile Optimization Checklist */}
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Profile Optimization Checklist
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-green-600">Photo Checklist</h3>
                  <div className="space-y-2">
                    {[
                      "Clear, recent main photo (less than 6 months old)",
                      "Full body shot included",
                      "At least one genuine smile",
                      "Variety in settings and outfits", 
                      "Good lighting in all photos",
                      "No group photos as main image",
                      "6-9 total photos uploaded"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-blue-600">Bio Checklist</h3>
                  <div className="space-y-2">
                    {[
                      "Compelling opening line or hook",
                      "Specific hobbies/interests mentioned",
                      "Shows personality and humor",
                      "Includes conversation starter",
                      "No negative language or complaints",
                      "Proper spelling and grammar",
                      "Length between 150-300 characters"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-bold text-secondary mb-4">Profile Stats</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Views per day (good profile):</span>
                  <span className="font-semibold text-green-600">15-25</span>
                </div>
                <div className="flex justify-between">
                  <span>Match rate improvement:</span>
                  <span className="font-semibold text-blue-600">40-60%</span>
                </div>
                <div className="flex justify-between">
                  <span>Message response rate:</span>
                  <span className="font-semibold text-purple-600">25-35%</span>
                </div>
                <div className="flex justify-between">
                  <span>Time to first match:</span>
                  <span className="font-semibold text-orange-600">1-3 days</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold text-secondary mb-4">Quick Tips</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span>Update your profile every 2-3 weeks to stay active in algorithms</span>
                </div>
                <div className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span>Test different main photos to see what works best</span>
                </div>
                <div className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span>Be active on the app - consistent usage improves visibility</span>
                </div>
                <div className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span>Quality over quantity - swipe thoughtfully</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold text-secondary mb-4">Related Resources</h3>
              <div className="space-y-3">
                <Link to="/dating-tips" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="font-medium">Dating Tips</div>
                  <div className="text-sm text-gray-600">Complete dating guide</div>
                </Link>
                <Link to="/dating-standards" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="font-medium">Dating Standards</div>
                  <div className="text-sm text-gray-600">Set realistic expectations</div>
                </Link>
                <Link to="/relationship-compatibility" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="font-medium">Compatibility Test</div>
                  <div className="text-sm text-gray-600">Test relationship potential</div>
                </Link>
              </div>
            </Card>

            <Card className="p-6 bg-yellow-50">
              <h3 className="text-lg font-bold text-yellow-800 mb-3">⚡ Pro Tip</h3>
              <p className="text-yellow-700 text-sm">
                The best profiles feel effortless but are carefully crafted. Spend time getting great photos and writing a thoughtful bio - it's an investment in your dating success.
              </p>
            </Card>

            <Card className="p-6 bg-green-50">
              <h3 className="text-lg font-bold text-green-800 mb-3">📊 Success Metrics</h3>
              <div className="text-green-700 text-sm space-y-2">
                <div className="flex justify-between">
                  <span>Profile views per week:</span>
                  <span className="font-semibold">50-100</span>
                </div>
                <div className="flex justify-between">
                  <span>Quality matches per week:</span>
                  <span className="font-semibold">3-8</span>
                </div>
                <div className="flex justify-between">
                  <span>Messages leading to dates:</span>
                  <span className="font-semibold">1-3</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="p-8 text-center bg-gradient-to-r from-green-50 to-blue-50">
          <h2 className="text-2xl font-bold text-secondary mb-4">
            Ready to Create Your Perfect Profile?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            A great dating profile is your ticket to meaningful connections. Use these tips to showcase your best self and attract compatible matches.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/dating-tips">
              <Button className="bg-green-600 hover:bg-green-700">
                Get More Dating Tips
              </Button>
            </Link>
            <Link to="/dating-standards">
              <Button variant="outline">
                Check Your Standards
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DatingProfileTips;