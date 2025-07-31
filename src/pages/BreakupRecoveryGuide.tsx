import { useState } from "react";
import { Heart, Calendar, Users, Book, Dumbbell, MessageSquare, TrendingUp, Clock, CheckCircle, Star, ArrowRight, Lightbulb, Target, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const BreakupRecoveryGuide = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());

  const recoveryPhases = [
    {
      name: "Immediate Aftermath",
      duration: "Week 1-2",
      description: "Processing the shock and initial grief",
      color: "text-red-600",
      bgColor: "bg-red-50",
      focus: "Survival and basic self-care"
    },
    {
      name: "Emotional Processing",
      duration: "Week 2-6",
      description: "Working through emotions and beginning to heal",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      focus: "Understanding and accepting feelings"
    },
    {
      name: "Rebuilding Identity",
      duration: "Month 2-4",
      description: "Rediscovering yourself outside the relationship",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      focus: "Personal growth and new routines"
    },
    {
      name: "Moving Forward",
      duration: "Month 4-6",
      description: "Building confidence and openness to new connections",
      color: "text-green-600",
      bgColor: "bg-green-50",
      focus: "Future planning and dating readiness"
    }
  ];

  const recoveryTasks = [
    {
      id: "accept_emotions",
      phase: 0,
      title: "Allow yourself to feel",
      description: "Don't suppress grief, anger, or sadness. These emotions are normal and necessary.",
      category: "Emotional",
      timeframe: "Ongoing"
    },
    {
      id: "basic_care",
      phase: 0,
      title: "Maintain basic self-care",
      description: "Eat regularly, stay hydrated, get enough sleep, and maintain hygiene.",
      category: "Physical",
      timeframe: "Daily"
    },
    {
      id: "remove_triggers",
      phase: 0,
      title: "Remove immediate triggers",
      description: "Put away photos, gifts, and mementos that cause immediate pain.",
      category: "Practical",
      timeframe: "Week 1"
    },
    {
      id: "tell_support",
      phase: 0,
      title: "Tell your support network",
      description: "Inform close friends and family so they can provide appropriate support.",
      category: "Social",
      timeframe: "Week 1"
    },
    {
      id: "journal_feelings",
      phase: 1,
      title: "Start journaling",
      description: "Write about your feelings, thoughts, and experiences daily.",
      category: "Emotional",
      timeframe: "Daily"
    },
    {
      id: "limit_contact",
      phase: 1,
      title: "Implement no-contact rule",
      description: "Avoid texting, calling, or checking their social media.",
      category: "Practical",
      timeframe: "Ongoing"
    },
    {
      id: "therapy_support",
      phase: 1,
      title: "Consider professional help",
      description: "Therapist or counselor can provide tools and perspective.",
      category: "Professional",
      timeframe: "As needed"
    },
    {
      id: "exercise_routine",
      phase: 1,
      title: "Establish exercise routine",
      description: "Physical activity helps process emotions and boost mood.",
      category: "Physical",
      timeframe: "3-4x per week"
    },
    {
      id: "new_hobbies",
      phase: 2,
      title: "Explore new interests",
      description: "Try activities you couldn't do in the relationship or always wanted to try.",
      category: "Personal Growth",
      timeframe: "Ongoing"
    },
    {
      id: "reconnect_friends",
      phase: 2,
      title: "Reconnect with friends",
      description: "Strengthen friendships that may have been neglected during the relationship.",
      category: "Social",
      timeframe: "Ongoing"
    },
    {
      id: "reflect_learn",
      phase: 2,
      title: "Reflect on lessons learned",
      description: "Understand what worked, what didn't, and what you want in the future.",
      category: "Emotional",
      timeframe: "Month 3-4"
    },
    {
      id: "set_goals",
      phase: 2,
      title: "Set personal goals",
      description: "Focus on career, health, relationships, or personal development goals.",
      category: "Personal Growth",
      timeframe: "Month 3"
    },
    {
      id: "forgiveness_work",
      phase: 3,
      title: "Practice forgiveness",
      description: "Forgive your ex and yourself for the relationship's end.",
      category: "Emotional",
      timeframe: "Month 4-6"
    },
    {
      id: "dating_readiness",
      phase: 3,
      title: "Assess dating readiness",
      description: "Honestly evaluate if you're ready for new romantic connections.",
      category: "Personal Growth",
      timeframe: "Month 5-6"
    },
    {
      id: "update_standards",
      phase: 3,
      title: "Update relationship standards",
      description: "Apply lessons learned to your dating standards and relationship goals.",
      category: "Personal Growth",
      timeframe: "Month 6"
    }
  ];

  const selfCareActivities = [
    {
      category: "Physical Wellness",
      icon: Dumbbell,
      activities: [
        "Go for daily walks",
        "Try yoga or stretching",
        "Join a gym or fitness class",
        "Practice deep breathing exercises",
        "Get regular sleep schedule",
        "Eat nutritious meals"
      ]
    },
    {
      category: "Emotional Support",
      icon: Heart,
      activities: [
        "Talk to trusted friends",
        "Join a support group",
        "Practice meditation",
        "Write in a journal",
        "Allow yourself to cry",
        "Practice self-compassion"
      ]
    },
    {
      category: "Social Connection",
      icon: Users,
      activities: [
        "Plan activities with friends",
        "Meet new people through hobbies",
        "Volunteer for causes you care about",
        "Join clubs or groups",
        "Attend social events",
        "Strengthen family relationships"
      ]
    },
    {
      category: "Creative Expression",
      icon: Star,
      activities: [
        "Try art or crafting",
        "Learn a musical instrument",
        "Take up photography",
        "Write stories or poetry",
        "Dance or take dance classes",
        "Redecorate your space"
      ]
    }
  ];

  const toggleTask = (taskId: string) => {
    const newCompleted = new Set(completedTasks);
    if (newCompleted.has(taskId)) {
      newCompleted.delete(taskId);
    } else {
      newCompleted.add(taskId);
    }
    setCompletedTasks(newCompleted);
  };

  const getPhaseProgress = (phaseIndex: number) => {
    const phaseTasks = recoveryTasks.filter(task => task.phase === phaseIndex);
    const completedPhaseTasks = phaseTasks.filter(task => completedTasks.has(task.id));
    return phaseTasks.length > 0 ? (completedPhaseTasks.length / phaseTasks.length) * 100 : 0;
  };

  const overallProgress = (completedTasks.size / recoveryTasks.length) * 100;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Breakup Recovery Guide",
    "description": "Comprehensive guide to healing after a breakup. Step-by-step recovery plan with emotional support, self-care tips, and practical advice for moving on.",
    "url": "https://delusionfemalecalculator.com/breakup-recovery-guide",
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
        title="Breakup Recovery Guide - How to Heal and Move On After a Breakup"
        description="Complete guide to healing after a breakup. Get practical steps, emotional support tips, and a structured recovery plan to help you move forward and rebuild your life."
        keywords="breakup recovery, how to get over a breakup, healing after breakup, breakup advice, moving on from relationship, breakup self care, post breakup recovery"
        schemaData={schemaData}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-100 rounded-full">
                <Heart className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Breakup Recovery Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              A comprehensive, step-by-step guide to healing after a breakup. Find practical advice, 
              emotional support, and a structured path forward to rebuild your life and find happiness again.
            </p>
          </div>

          {/* Overall Progress */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-600" />
                Your Recovery Progress
              </CardTitle>
              <CardDescription>
                Track your healing journey with actionable steps
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                  <span className="text-sm font-medium text-blue-600">
                    {completedTasks.size}/{recoveryTasks.length} tasks completed
                  </span>
                </div>
                <Progress value={overallProgress} className="h-3" />
                <p className="text-sm text-gray-600">
                  Complete tasks at your own pace. Healing isn't linear, and everyone's timeline is different.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Recovery Phases */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Recovery Phases</CardTitle>
              <CardDescription>
                Understand the stages of breakup recovery and where you might be
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {recoveryPhases.map((phase, index) => {
                  const progress = getPhaseProgress(index);
                  return (
                    <Card 
                      key={index} 
                      className={`cursor-pointer transition-all duration-200 ${
                        currentPhase === index ? 'ring-2 ring-blue-500' : 'hover:shadow-md'
                      }`}
                      onClick={() => setCurrentPhase(index)}
                    >
                      <CardContent className="p-4">
                        <div className={`text-center p-3 rounded-lg ${phase.bgColor} mb-3`}>
                          <div className={`text-lg font-bold ${phase.color}`}>
                            Phase {index + 1}
                          </div>
                          <div className="text-sm text-gray-600">{phase.duration}</div>
                        </div>
                        <h3 className="font-semibold text-sm mb-2">{phase.name}</h3>
                        <p className="text-xs text-gray-600 mb-3">{phase.description}</p>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span>Progress</span>
                            <span>{Math.round(progress)}%</span>
                          </div>
                          <Progress value={progress} className="h-1" />
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Current Phase Tasks */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    {recoveryPhases[currentPhase].name} Tasks
                  </CardTitle>
                  <CardDescription>
                    Focus: {recoveryPhases[currentPhase].focus}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recoveryTasks
                      .filter(task => task.phase === currentPhase)
                      .map(task => {
                        const isCompleted = completedTasks.has(task.id);
                        return (
                          <div 
                            key={task.id}
                            className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                              isCompleted 
                                ? 'bg-green-50 border-green-200' 
                                : 'bg-white border-gray-200 hover:border-blue-300'
                            }`}
                            onClick={() => toggleTask(task.id)}
                          >
                            <div className="flex items-start gap-3">
                              <div className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 ${
                                isCompleted 
                                  ? 'bg-green-500 border-green-500' 
                                  : 'border-gray-300'
                              }`}>
                                {isCompleted && <CheckCircle className="h-3 w-3 text-white" />}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-start justify-between mb-2">
                                  <h4 className={`font-medium ${isCompleted ? 'text-green-800' : 'text-gray-900'}`}>
                                    {task.title}
                                  </h4>
                                  <div className="flex gap-2">
                                    <Badge variant="outline" className="text-xs">
                                      {task.category}
                                    </Badge>
                                    <Badge variant="secondary" className="text-xs">
                                      {task.timeframe}
                                    </Badge>
                                  </div>
                                </div>
                                <p className="text-sm text-gray-600">{task.description}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </CardContent>
              </Card>

              {/* Recovery Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    Recovery Timeline & Expectations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="week1" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="week1">Week 1-2</TabsTrigger>
                      <TabsTrigger value="month1">Month 1</TabsTrigger>
                      <TabsTrigger value="month3">Month 3</TabsTrigger>
                      <TabsTrigger value="month6">Month 6+</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="week1" className="space-y-3">
                      <h4 className="font-semibold text-red-600">Acute Phase - Shock & Grief</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>• <strong>Normal feelings:</strong> Shock, denial, intense sadness, anger</p>
                        <p>• <strong>Physical symptoms:</strong> Loss of appetite, sleep issues, fatigue</p>
                        <p>• <strong>Focus:</strong> Basic self-care and accepting support</p>
                        <p>• <strong>Avoid:</strong> Making major decisions or contacting your ex</p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="month1" className="space-y-3">
                      <h4 className="font-semibold text-orange-600">Processing Phase - Working Through Emotions</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>• <strong>Normal feelings:</strong> Waves of sadness, anger, hope, confusion</p>
                        <p>• <strong>Progress signs:</strong> Better sleep, appetite returning, moments of clarity</p>
                        <p>• <strong>Focus:</strong> Establishing routines and processing emotions</p>
                        <p>• <strong>Milestones:</strong> Going full days without thinking about them</p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="month3" className="space-y-3">
                      <h4 className="font-semibold text-yellow-600">Rebuilding Phase - Rediscovering Yourself</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>• <strong>Normal feelings:</strong> Optimism mixed with occasional sadness</p>
                        <p>• <strong>Progress signs:</strong> Enjoying activities, making future plans</p>
                        <p>• <strong>Focus:</strong> Personal growth and building new routines</p>
                        <p>• <strong>Milestones:</strong> Feeling like yourself again, decreased triggers</p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="month6" className="space-y-3">
                      <h4 className="font-semibold text-green-600">Growth Phase - Moving Forward</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>• <strong>Normal feelings:</strong> Confidence, peace, openness to new experiences</p>
                        <p>• <strong>Progress signs:</strong> Can think about the relationship without pain</p>
                        <p>• <strong>Focus:</strong> Future goals and potentially new relationships</p>
                        <p>• <strong>Milestones:</strong> Feeling grateful for lessons learned</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Self-Care Activities */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-600" />
                    Self-Care Activities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {selfCareActivities.map((category, index) => {
                      const Icon = category.icon;
                      return (
                        <div key={index}>
                          <div className="flex items-center gap-2 mb-2">
                            <Icon className="h-4 w-4 text-blue-600" />
                            <h4 className="font-medium text-sm">{category.category}</h4>
                          </div>
                          <div className="space-y-1">
                            {category.activities.slice(0, 3).map((activity, actIndex) => (
                              <p key={actIndex} className="text-xs text-gray-600 pl-6">
                                • {activity}
                              </p>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Warning Signs */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    When to Seek Help
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <p className="font-medium text-red-600 mb-2">Contact a mental health professional if you experience:</p>
                    <div className="space-y-2 text-gray-600">
                      <p>• Thoughts of self-harm or suicide</p>
                      <p>• Unable to function daily after 2+ months</p>
                      <p>• Substance abuse as coping mechanism</p>
                      <p>• Persistent depression or anxiety</p>
                      <p>• Inability to accept the breakup after 6+ months</p>
                    </div>
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-xs text-blue-800">
                        <strong>Crisis Resources:</strong> National Suicide Prevention Lifeline: 988 or Crisis Text Line: Text HOME to 741741
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Inspiration */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-600" />
                    Daily Reminders
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-gray-600">
                    <p>💪 "Healing isn't linear - bad days don't erase progress"</p>
                    <p>🌱 "You're not broken, you're growing"</p>
                    <p>⭐ "This pain will pass, but the strength you gain is permanent"</p>
                    <p>🦋 "Every ending is a new beginning in disguise"</p>
                    <p>❤️ "You deserve love that doesn't hurt"</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Next Steps */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle className="text-center">Ready for What's Next?</CardTitle>
              <CardDescription className="text-center">
                Resources to help you move forward with confidence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Build Healthy Standards</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Use what you've learned to set better relationship standards
                  </p>
                  <Link to="/dating-standards">
                    <Button size="sm" variant="outline">
                      Update Standards
                    </Button>
                  </Link>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Know Your Love Language</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Understand how you give and receive love for future relationships
                  </p>
                  <Link to="/love-languages-test">
                    <Button size="sm" variant="outline">
                      Take Test
                    </Button>
                  </Link>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Spot Green Flags</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Learn to recognize healthy relationship behaviors when you're ready to date
                  </p>
                  <Link to="/dating-green-flags">
                    <Button size="sm" variant="outline">
                      Learn Signs
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bottom Navigation */}
          <div className="text-center mt-12">
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/relationship-advice" className="text-sm text-blue-600 hover:text-blue-800 underline">
                Relationship Advice
              </Link>
              <Link to="/dating-red-flags-checklist" className="text-sm text-blue-600 hover:text-blue-800 underline">
                Dating Red Flags
              </Link>
              <Link to="/attachment-styles-test" className="text-sm text-blue-600 hover:text-blue-800 underline">
                Attachment Styles Test
              </Link>
              <Link to="/" className="text-sm text-blue-600 hover:text-blue-800 underline">
                Female Delusion Calculator
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreakupRecoveryGuide;