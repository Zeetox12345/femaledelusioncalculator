import { Link } from "react-router-dom";
import { MessageCircle, Heart, Ear, Users, ArrowRight, CheckCircle, AlertCircle, Lightbulb } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const RelationshipCommunicationGuide = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Relationship Communication Guide - Master Healthy Communication in Love",
    "description": "Learn effective relationship communication skills, resolve conflicts peacefully, and strengthen your emotional connection with proven strategies and techniques.",
    "author": {
      "@type": "Organization",
      "name": "Female Delusion Calculator"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Female Delusion Calculator"
    },
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://delusionfemalecalculator.com/relationship-communication-guide"
    }
  };

  const communicationPillars = [
    {
      icon: <Ear className="h-6 w-6 text-green-500" />,
      title: "Active Listening",
      description: "Truly hearing and understanding your partner's perspective without judgment.",
      tips: [
        "Put away distractions when talking",
        "Maintain appropriate eye contact", 
        "Ask clarifying questions",
        "Summarize what you heard"
      ]
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-green-500" />,
      title: "Clear Expression", 
      description: "Articulating your thoughts and feelings in ways your partner can understand.",
      tips: [
        "Use 'I' statements instead of 'you' accusations",
        "Be specific about your needs",
        "Express emotions clearly",
        "Choose the right time and place"
      ]
    },
    {
      icon: <Heart className="h-6 w-6 text-green-500" />,
      title: "Emotional Validation",
      description: "Acknowledging and accepting your partner's emotions, even during disagreements.",
      tips: [
        "Acknowledge their feelings",
        "Show empathy and understanding",
        "Don't dismiss or minimize emotions", 
        "Validate before problem-solving"
      ]
    },
    {
      icon: <Users className="h-6 w-6 text-green-500" />,
      title: "Collaborative Problem-Solving",
      description: "Working together to find solutions that work for both partners.",
      tips: [
        "Focus on the issue, not the person",
        "Brainstorm solutions together",
        "Be willing to compromise",
        "Follow up on agreements"
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="Relationship Communication Guide - Master Healthy Communication in Love"
        description="Learn essential relationship communication skills to strengthen your bond. Discover how to resolve conflicts, express needs clearly, and build deeper emotional intimacy with your partner."
        keywords="relationship communication, communication in relationships, healthy communication, relationship conflict resolution, active listening, couples communication, emotional validation, relationship skills"
        schemaData={schemaData}
      />

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-200">
              Communication Skills
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Master 
              <span className="text-green-600"> Relationship Communication</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Build deeper connections, resolve conflicts peacefully, and strengthen your relationship 
              through effective communication skills that actually work.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Research-backed techniques
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Practical examples
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Real-world applications
              </span>
            </div>
          </div>
        </section>

        {/* The 4 Pillars of Communication */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The 4 Pillars of Effective Communication
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Master these fundamental communication skills to transform your relationship 
                and create lasting emotional intimacy with your partner.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {communicationPillars.map((pillar, index) => (
                <Card key={index} className="border-2 border-green-100 hover:border-green-200 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      {pillar.icon}
                      <CardTitle className="text-xl">{pillar.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {pillar.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Techniques:</h4>
                      <ul className="space-y-2">
                        {pillar.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Strengthen Your Relationship Further
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/healthy-relationships-guide" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Heart className="h-8 w-8 text-green-500 mb-4" />
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-green-600 transition-colors">
                      Healthy Relationships Guide
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Learn the foundations of building and maintaining healthy, lasting relationships.
                    </p>
                    <span className="text-green-600 font-medium flex items-center gap-1">
                      Read Guide <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/love-languages-test" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <MessageCircle className="h-8 w-8 text-green-500 mb-4" />
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-green-600 transition-colors">
                      Love Languages Test
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Discover how you and your partner best express and receive love.
                    </p>
                    <span className="text-green-600 font-medium flex items-center gap-1">
                      Take Test <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/relationship-advice" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Users className="h-8 w-8 text-green-500 mb-4" />
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-green-600 transition-colors">
                      Relationship Advice
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Get expert advice for common relationship challenges and growth.
                    </p>
                    <span className="text-green-600 font-medium flex items-center gap-1">
                      Get Advice <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-green-500 to-teal-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Build Stronger Communication Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start by understanding your relationship expectations and communication style.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Try Our Dating Calculator <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default RelationshipCommunicationGuide;