import { Link } from "react-router-dom";
import { Heart, Users, MessageCircle, Shield, Star, ArrowRight, CheckCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HealthyRelationshipsGuide = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Guide to Building Healthy Relationships in 2024",
    "description": "Discover the essential foundations of healthy relationships, communication skills, and proven strategies for building lasting love connections.",
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
      "@id": "https://delusionfemalecalculator.com/healthy-relationships-guide"
    }
  };

  const relationshipFoundations = [
    {
      icon: <MessageCircle className="h-6 w-6 text-pink-500" />,
      title: "Open Communication",
      description: "Honest, respectful dialogue builds trust and understanding between partners.",
      tips: ["Practice active listening", "Express feelings clearly", "Address conflicts constructively"]
    },
    {
      icon: <Shield className="h-6 w-6 text-pink-500" />,
      title: "Mutual Respect",
      description: "Valuing each other's opinions, boundaries, and individuality is essential.",
      tips: ["Honor personal boundaries", "Support individual goals", "Avoid controlling behaviors"]
    },
    {
      icon: <Heart className="h-6 w-6 text-pink-500" />,
      title: "Emotional Support",
      description: "Being there for each other during both good times and challenges.",
      tips: ["Show empathy and understanding", "Celebrate successes together", "Provide comfort during difficulties"]
    },
    {
      icon: <Users className="h-6 w-6 text-pink-500" />,
      title: "Shared Values",
      description: "Having compatible core beliefs and life goals strengthens relationships.",
      tips: ["Discuss life priorities", "Align on major decisions", "Respect different perspectives"]
    }
  ];

  const communicationSkills = [
    {
      skill: "Active Listening",
      description: "Focus completely on your partner when they speak, without planning your response.",
      example: "Put away distractions, maintain eye contact, and ask clarifying questions."
    },
    {
      skill: "I-Statements",
      description: "Express your feelings without blaming or attacking your partner.",
      example: "Say 'I feel hurt when...' instead of 'You always make me feel...'"
    },
    {
      skill: "Emotional Validation",
      description: "Acknowledge and accept your partner's feelings, even if you disagree.",
      example: "I can see why you'd feel that way. Help me understand your perspective better."
    },
    {
      skill: "Conflict Resolution",
      description: "Address disagreements constructively rather than avoiding or escalating them.",
      example: "Let's find a solution that works for both of us. What are your main concerns?"
    }
  ];

  const redFlags = [
    "Controlling or possessive behavior",
    "Frequent criticism or put-downs",
    "Refusing to communicate about problems",
    "Disrespecting your boundaries",
    "Isolating you from friends and family",
    "Emotional manipulation or gaslighting",
    "Physical or verbal aggression",
    "Addiction issues affecting the relationship"
  ];

  const greenFlags = [
    "Consistent respect for your boundaries",
    "Open and honest communication",
    "Supporting your goals and dreams",
    "Sharing responsibilities equally",
    "Showing appreciation regularly",
    "Handling conflicts maturely",
    "Introducing you to friends and family",
    "Making an effort to grow together"
  ];

  return (
    <>
      <SEOHead
        title="Healthy Relationships Guide 2024 - Build Strong, Lasting Love"
        description="Master the art of healthy relationships with our comprehensive guide. Learn communication skills, relationship foundations, red flags to avoid, and proven strategies for lasting love."
        keywords="healthy relationships, relationship advice, relationship goals, communication in relationships, relationship tips, building healthy relationships, relationship foundations, love advice, relationship psychology"
        schemaData={schemaData}
      />

      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-pink-100 text-pink-700 hover:bg-pink-200">
              Relationship Psychology
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Complete Guide to 
              <span className="text-pink-600"> Healthy Relationships</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover the essential foundations, communication skills, and proven strategies 
              for building strong, lasting relationships that thrive in today's world.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Evidence-based advice
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Expert relationship insights
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Practical application
              </span>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-8 px-4 bg-white/60">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a href="#foundations" className="text-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <Heart className="h-6 w-6 text-pink-500 mx-auto mb-2" />
                <span className="text-sm font-medium">Foundations</span>
              </a>
              <a href="#communication" className="text-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <MessageCircle className="h-6 w-6 text-pink-500 mx-auto mb-2" />
                <span className="text-sm font-medium">Communication</span>
              </a>
              <a href="#red-flags" className="text-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <Shield className="h-6 w-6 text-pink-500 mx-auto mb-2" />
                <span className="text-sm font-medium">Warning Signs</span>
              </a>
              <a href="#green-flags" className="text-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <Star className="h-6 w-6 text-pink-500 mx-auto mb-2" />
                <span className="text-sm font-medium">Green Flags</span>
              </a>
            </div>
          </div>
        </section>

        {/* Relationship Foundations */}
        <section id="foundations" className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The 4 Pillars of Healthy Relationships
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Every strong relationship is built on these fundamental principles. 
                Master these foundations to create lasting, fulfilling connections.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {relationshipFoundations.map((foundation, index) => (
                <Card key={index} className="border-2 border-pink-100 hover:border-pink-200 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      {foundation.icon}
                      <CardTitle className="text-xl">{foundation.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {foundation.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {foundation.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Communication Skills */}
        <section id="communication" className="py-16 px-4 bg-white/80">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Master Relationship Communication
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Communication is the lifeline of any healthy relationship. 
                Learn these essential skills to deepen your connection and resolve conflicts effectively.
              </p>
            </div>

            <div className="grid gap-6">
              {communicationSkills.map((skill, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="md:w-1/3">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{skill.skill}</h3>
                      <p className="text-gray-600">{skill.description}</p>
                    </div>
                    <div className="md:w-2/3 md:pl-6 md:border-l border-gray-200">
                      <div className="bg-pink-50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-pink-900 mb-1">Example:</p>
                        <p className="text-pink-800">{skill.example}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Red Flags & Green Flags */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Red Flags */}
              <div id="red-flags">
                <Card className="h-full border-red-200">
                  <CardHeader className="bg-red-50">
                    <CardTitle className="flex items-center gap-2 text-red-700">
                      <Shield className="h-5 w-5" />
                      Relationship Red Flags
                    </CardTitle>
                    <CardDescription>
                      Warning signs that indicate an unhealthy relationship dynamic
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {redFlags.map((flag, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{flag}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Green Flags */}
              <div id="green-flags">
                <Card className="h-full border-green-200">
                  <CardHeader className="bg-green-50">
                    <CardTitle className="flex items-center gap-2 text-green-700">
                      <Star className="h-5 w-5" />
                      Relationship Green Flags
                    </CardTitle>
                    <CardDescription>
                      Positive signs of a healthy, thriving relationship
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {greenFlags.map((flag, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{flag}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Explore More Relationship Resources
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/love-languages-test" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Heart className="h-8 w-8 text-pink-500 mb-4" />
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-pink-600 transition-colors">
                      Love Languages Test
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Discover how you and your partner express and receive love most effectively.
                    </p>
                    <span className="text-pink-600 font-medium flex items-center gap-1">
                      Take Test <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/dating-green-flags" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Star className="h-8 w-8 text-pink-500 mb-4" />
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-pink-600 transition-colors">
                      Dating Green Flags
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Learn to identify positive signs in potential romantic partners.
                    </p>
                    <span className="text-pink-600 font-medium flex items-center gap-1">
                      Read Guide <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/dating-red-flags-checklist" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Shield className="h-8 w-8 text-pink-500 mb-4" />
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-pink-600 transition-colors">
                      Red Flags Checklist
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Protect yourself by recognizing warning signs in dating and relationships.
                    </p>
                    <span className="text-pink-600 font-medium flex items-center gap-1">
                      View Checklist <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Perfect Relationship?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start by understanding your own relationship standards and expectations.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Try Our Dating Calculator <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default HealthyRelationshipsGuide;