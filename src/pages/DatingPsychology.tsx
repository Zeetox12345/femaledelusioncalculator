import { Link } from "react-router-dom";
import { Brain, Heart, Zap, Eye, Users, ArrowRight, CheckCircle, Lightbulb, Target } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DatingPsychology = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Dating Psychology - Understanding Attraction, Love, and Relationships",
    "description": "Discover the psychology behind dating, attraction, and relationships. Learn about love hormones, attachment styles, psychological triggers, and the science of lasting connections.",
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
      "@id": "https://delusionfemalecalculator.com/dating-psychology"
    }
  };

  const psychologyPrinciples = [
    {
      icon: <Brain className="h-6 w-6 text-indigo-500" />,
      title: "Cognitive Biases in Dating",
      description: "How our minds create shortcuts that can help or hinder our dating success.",
      concepts: [
        "Halo Effect: One positive trait influences overall perception",
        "Confirmation Bias: Seeking information that confirms our beliefs",
        "Availability Heuristic: Judging probability by easily recalled examples",
        "Sunk Cost Fallacy: Staying in relationships due to past investment"
      ],
      application: "Recognize these biases to make more objective dating decisions and avoid common relationship traps."
    },
    {
      icon: <Heart className="h-6 w-6 text-indigo-500" />,
      title: "The Science of Attraction",
      description: "Understanding what creates initial attraction and lasting romantic interest.",
      concepts: [
        "Physical attractiveness and symmetry preferences",
        "Similarity-attraction principle",
        "Proximity effect and repeated exposure",
        "Mystery and challenge in creating interest"
      ],
      application: "Use these principles to enhance your attractiveness and understand what draws you to potential partners."
    },
    {
      icon: <Zap className="h-6 w-6 text-indigo-500" />,
      title: "Neurochemistry of Love",
      description: "The hormones and brain chemicals that drive romantic feelings and attachment.",
      concepts: [
        "Dopamine: The reward and motivation chemical",
        "Oxytocin: The bonding and trust hormone",
        "Serotonin: Mood regulation and obsessive thoughts",
        "Vasopressin: Long-term commitment and loyalty"
      ],
      application: "Understand how brain chemistry affects your feelings and decision-making in relationships."
    },
    {
      icon: <Eye className="h-6 w-6 text-indigo-500" />,
      title: "Psychological Triggers",
      description: "Subconscious factors that influence attraction and relationship dynamics.",
      concepts: [
        "Reciprocity: We like people who like us back",
        "Scarcity: Value increases with perceived rarity",
        "Social Proof: Others' approval influences our choices",
        "Emotional Investment: We value what we work for"
      ],
      application: "Leverage these psychological principles ethically to build stronger connections and mutual attraction."
    }
  ];

  const attachmentTheory = [
    {
      style: "Secure Attachment (60%)",
      description: "Comfortable with intimacy and independence. Forms healthy, stable relationships.",
      characteristics: [
        "Trusts partners easily",
        "Communicates needs directly",
        "Handles conflict well",
        "Maintains sense of self in relationships"
      ],
      datingBehavior: "Seeks genuine connection, handles rejection well, chooses partners wisely",
      advice: "Continue modeling healthy behavior and choose partners who appreciate your stability."
    },
    {
      style: "Anxious Attachment (20%)",
      description: "Craves closeness but fears abandonment. May become clingy or jealous in relationships.",
      characteristics: [
        "Seeks constant reassurance",
        "Worries about partner's feelings",
        "Fears being left alone",
        "Highly sensitive to partner's moods"
      ],
      datingBehavior: "May rush into relationships, overthink text responses, need frequent validation",
      advice: "Work on self-soothing techniques and building confidence outside of relationships."
    },
    {
      style: "Avoidant Attachment (15%)",
      description: "Values independence over intimacy. May struggle with vulnerability and commitment.",
      characteristics: [
        "Uncomfortable with closeness",
        "Suppresses emotional needs",
        "Highly self-reliant",
        "Difficulty trusting others"
      ],
      datingBehavior: "Keeps emotional distance, may sabotage relationships, afraid of vulnerability",
      advice: "Practice gradual emotional openness and challenge beliefs about relationships."
    },
    {
      style: "Disorganized Attachment (5%)",
      description: "Inconsistent patterns of seeking and avoiding closeness. Often from traumatic backgrounds.",
      characteristics: [
        "Unpredictable relationship behavior",
        "Wants closeness but fears it",
        "May have trust issues",
        "Emotional regulation challenges"
      ],
      datingBehavior: "Hot and cold patterns, difficulty maintaining consistent relationships",
      advice: "Consider therapy to process past trauma and develop healthier relationship patterns."
    }
  ];

  const datingBehaviors = [
    {
      behavior: "Love Bombing",
      psychology: "Uses intermittent reinforcement to create addiction-like attachment through excessive attention followed by withdrawal.",
      redFlags: ["Too much too soon", "Overwhelming compliments", "Pushing for commitment quickly", "Isolating from friends/family"],
      response: "Maintain boundaries and trust your instincts if something feels too intense too quickly."
    },
    {
      behavior: "Breadcrumbing",
      psychology: "Provides just enough attention to keep someone interested without real commitment, exploiting hope and anticipation.",
      redFlags: ["Sporadic communication", "Vague future plans", "Hot and cold behavior", "Never follows through"],
      response: "Recognize the pattern and communicate your needs clearly. Don't accept inconsistent behavior."
    },
    {
      behavior: "Ghosting",
      psychology: "Avoids uncomfortable conversations by disappearing, often due to conflict avoidance or fear of confrontation.",
      redFlags: ["Sudden communication stop", "Avoiding difficult topics", "Pattern of disappearing", "Never addressing issues directly"],
      response: "Don't take it personally. It reflects their communication skills, not your worth."
    },
    {
      behavior: "Benching",
      psychology: "Keeps multiple people as backup options to avoid commitment while maintaining a sense of security and control.",
      redFlags: ["Reluctant to make plans", "Keeps interactions surface-level", "Multiple dating app profiles", "Avoids relationship labels"],
      response: "Know your worth and don't accept being someone's backup plan. Seek people who prioritize you."
    }
  ];

  const psychologicalFactors = [
    {
      factor: "Mere Exposure Effect",
      explanation: "We tend to develop preferences for things we're familiar with",
      datingApplication: "Gradual familiarity can increase attraction over time",
      practicalTip: "Don't write someone off after one interaction - attraction can grow with repeated positive exposure"
    },
    {
      factor: "Reciprocity Principle",
      explanation: "We feel obligated to return favors and kindness",
      datingApplication: "Showing genuine interest encourages reciprocal interest",
      practicalTip: "Be genuinely interested in your date's stories and experiences"
    },
    {
      factor: "Similarity-Attraction",
      explanation: "We're drawn to people who share our values, interests, and background",
      datingApplication: "Common ground creates stronger initial connections",
      practicalTip: "Share your authentic interests and values to attract compatible partners"
    },
    {
      factor: "Social Proof",
      explanation: "We look to others' behavior to guide our own decisions",
      datingApplication: "Being socially connected makes you more attractive",
      practicalTip: "Maintain friendships and social connections - they demonstrate your social value"
    },
    {
      factor: "Uncertainty Reduction",
      explanation: "We seek to minimize uncertainty in our interactions",
      datingApplication: "Some mystery creates interest, but too much creates anxiety",
      practicalTip: "Balance being open about yourself with maintaining some intrigue"
    }
  ];

  const loveStages = [
    {
      stage: "Stage 1: Lust",
      duration: "Days to weeks",
      characteristics: ["Physical attraction dominates", "High testosterone/estrogen", "Focused on physical chemistry", "Little emotional investment"],
      purpose: "Initial screening for genetic compatibility and physical attraction",
      advice: "Enjoy the excitement but don't make major decisions based on lust alone"
    },
    {
      stage: "Stage 2: Attraction",
      duration: "Weeks to months",
      characteristics: ["Dopamine and norepinephrine surge", "Obsessive thoughts about partner", "Energy and focus on the relationship", "Risk-taking behavior"],
      purpose: "Motivation to pursue and win over the potential partner",
      advice: "This is the 'honeymoon phase' - maintain perspective and continue getting to know them"
    },
    {
      stage: "Stage 3: Attachment",
      duration: "Months to years",
      characteristics: ["Oxytocin and vasopressin increase", "Desire for comfort and security", "Building long-term plans together", "Deeper emotional intimacy"],
      purpose: "Creating long-term bonds for potential family and partnership",
      advice: "This is where real compatibility matters - focus on values and life goals alignment"
    }
  ];

  return (
    <>
      <SEOHead
        title="Dating Psychology - Understanding Attraction, Love, and Relationships"
        description="Discover the fascinating psychology behind dating and relationships. Learn about attraction science, attachment styles, love hormones, and psychological principles that influence romantic connections."
        keywords="dating psychology, psychology of attraction, relationship psychology, love psychology, attachment theory dating, dating behavior psychology, romantic psychology, relationship science"
        schemaData={schemaData}
      />

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
              Relationship Science
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Psychology of 
              <span className="text-indigo-600"> Dating & Love</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Understand the fascinating science behind attraction, love, and relationships. 
              Discover how psychology influences your dating experiences and romantic choices.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Scientific research
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Practical applications
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Evidence-based insights
              </span>
            </div>
          </div>
        </section>

        {/* Core Psychology Principles */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Core Psychological Principles in Dating
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding these fundamental psychological concepts can transform 
                how you approach dating and relationships.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {psychologyPrinciples.map((principle, index) => (
                <Card key={index} className="border-2 border-indigo-100 hover:border-indigo-200 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      {principle.icon}
                      <CardTitle className="text-xl">{principle.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {principle.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Concepts:</h4>
                      <ul className="space-y-2">
                        {principle.concepts.map((concept, conceptIndex) => (
                          <li key={conceptIndex} className="text-sm text-gray-600 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                            {concept}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-indigo-900 mb-1">Application:</p>
                      <p className="text-sm text-indigo-800">{principle.application}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Attachment Styles */}
        <section className="py-16 px-4 bg-white/80">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Attachment Styles in Dating
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Your early relationships shape how you connect with romantic partners. 
                Understanding attachment styles helps predict and improve relationship patterns.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {attachmentTheory.map((style, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{style.style}</CardTitle>
                    <CardDescription>{style.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Characteristics:</h4>
                        <ul className="space-y-1">
                          {style.characteristics.map((char, charIndex) => (
                            <li key={charIndex} className="text-sm text-gray-600 flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                              {char}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-blue-900 mb-1">Dating Behavior:</p>
                        <p className="text-sm text-blue-800 mb-2">{style.datingBehavior}</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-green-900 mb-1">Growth Advice:</p>
                        <p className="text-sm text-green-800">{style.advice}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Modern Dating Behaviors */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Psychology Behind Modern Dating Behaviors
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding the psychological motivations behind common dating behaviors 
                helps you recognize patterns and protect your emotional well-being.
              </p>
            </div>

            <div className="grid gap-6">
              {datingBehaviors.map((behavior, index) => (
                <Card key={index} className="p-6">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{behavior.behavior}</h3>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Psychology:</h4>
                      <p className="text-sm text-gray-600">{behavior.psychology}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Red Flags:</h4>
                      <ul className="space-y-1">
                        {behavior.redFlags.map((flag, flagIndex) => (
                          <li key={flagIndex} className="text-xs text-red-600 flex items-start gap-2">
                            <div className="w-1 h-1 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            {flag}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Response:</h4>
                      <p className="text-sm text-green-600">{behavior.response}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Psychological Factors */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Key Psychological Factors in Attraction
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These psychological principles influence how attraction develops and how relationships form.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {psychologicalFactors.map((factor, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{factor.factor}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-600 mb-2">{factor.explanation}</p>
                      </div>
                      <div className="bg-indigo-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-indigo-900 mb-1">In Dating:</p>
                        <p className="text-sm text-indigo-800">{factor.datingApplication}</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-green-900 mb-1 flex items-center gap-1">
                          <Lightbulb className="h-3 w-3" />
                          Tip:
                        </p>
                        <p className="text-sm text-green-800">{factor.practicalTip}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* The 3 Stages of Love */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The 3 Stages of Love
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Anthropologist Helen Fisher identified three distinct brain systems that drive love and relationships.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {loveStages.map((stage, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                        <span className="text-indigo-600 font-bold text-sm">{index + 1}</span>
                      </div>
                      <CardTitle className="text-lg">{stage.stage}</CardTitle>
                    </div>
                    <Badge variant="outline" className="w-fit">{stage.duration}</Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Characteristics:</h4>
                        <ul className="space-y-1">
                          {stage.characteristics.map((char, charIndex) => (
                            <li key={charIndex} className="text-sm text-gray-600 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                              {char}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-blue-900 mb-1">Purpose:</p>
                        <p className="text-sm text-blue-800">{stage.purpose}</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-green-900 mb-1">Advice:</p>
                        <p className="text-sm text-green-800">{stage.advice}</p>
                      </div>
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
              Apply Psychology to Your Dating Life
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/attachment-styles-test" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Heart className="h-8 w-8 text-indigo-500 mb-4" />
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
                      Attachment Styles Test
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Discover your attachment style and how it affects your relationships.
                    </p>
                    <span className="text-indigo-600 font-medium flex items-center gap-1">
                      Take Test <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/dating-confidence-tips" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Brain className="h-8 w-8 text-indigo-500 mb-4" />
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
                      Dating Confidence Tips
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Use psychology to build genuine confidence in dating situations.
                    </p>
                    <span className="text-indigo-600 font-medium flex items-center gap-1">
                      Build Confidence <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/what-men-find-attractive" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Target className="h-8 w-8 text-indigo-500 mb-4" />
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
                      Psychology of Attraction
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Understand what creates attraction from a psychological perspective.
                    </p>
                    <span className="text-indigo-600 font-medium flex items-center gap-1">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Apply Psychology to Your Love Life
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Understanding psychology can transform your dating success. Start by evaluating your current standards.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Try Our Dating Calculator <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default DatingPsychology;