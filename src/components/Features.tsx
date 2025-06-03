
import React from 'react';
import { CheckCircle, MessageSquare, FileText, Rocket, Star, FileEdit, Sparkles, Briefcase } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <MessageSquare className="h-10 w-10 text-hollywood-primary" />,
      title: "Free AI Script Creation",
      description: "Our free AI tools guide you through screenplay creation with questions about genre, premise, and characters to shape your script perfectly."
    },
    {
      icon: <FileText className="h-10 w-10 text-hollywood-primary" />,
      title: "Professional Screenplay Outlining",
      description: "Generate comprehensive outlines with act titles, scene breakdowns, and character development plans using advanced AI technology."
    },
    {
      icon: <FileEdit className="h-10 w-10 text-hollywood-accent" />,
      title: "Industry-Standard Formatting",
      description: "AI Web Tools ensures properly formatted scene headings, dialogue, action lines, and transitions according to Hollywood standards."
    },
    {
      icon: <Star className="h-10 w-10 text-hollywood-accent" />,
      title: "Award-Winning AI Writing",
      description: "Our free AI screenplay writer creates compelling dialogue, vivid imagery, and engaging narratives comparable to professional screenwriters."
    },
    {
      icon: <Rocket className="h-10 w-10 text-hollywood-blue" />,
      title: "Complete Script Memory",
      description: "Advanced AI maintains perfect recall of your entire screenplay for consistent character development and storylines throughout your script."
    },
    {
      icon: <Sparkles className="h-10 w-10 text-hollywood-blue" />,
      title: "Creative AI Techniques",
      description: "Implements cliffhangers, foreshadowing, and plot twists automatically to keep your audience engaged with professional storytelling."
    },
    {
      icon: <Briefcase className="h-10 w-10 text-hollywood-highlight" />,
      title: "TV & Movie Script Generator",
      description: "Specialized free AI tools for television formats with perfect 13-act structure and commercial break positioning for TV scripts."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-hollywood-highlight" />,
      title: "Collaborative AI Writing",
      description: "Our free AI screenplay writer works with you scene-by-scene, incorporating your feedback for truly personalized scripts."
    }
  ];

  return (
    <section className="section relative">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-40 -right-20 w-72 h-72 bg-hollywood-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-hollywood-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient-primary">
            Free AI Screenwriting Tools Features
          </h2>
          <p className="text-white/80 text-lg">
            AI Web Tools combines professional screenwriting techniques with advanced artificial intelligence
            to create compelling, industry-standard scripts. Discover why we're the best free AI tools for writers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 hover-scale group"
            >
              <div className="mb-4 group-hover:animate-float">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://chatgpt.com/g/g-Sr11pfnkz-screenplay-writer-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
            aria-label="Start using our free AI screenplay writer tool"
          >
            Start Writing Your Screenplay with Free AI Tools
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
