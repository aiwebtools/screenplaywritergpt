
import React from 'react';
import { CheckCircle, MessageSquare, FileText, Rocket, Star, FileEdit, Sparkles, Briefcase } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <MessageSquare className="h-10 w-10 text-hollywood-primary" />,
      title: "Guided Script Creation",
      description: "Answers key questions about genre, premise, and characters to shape your screenplay exactly to your vision."
    },
    {
      icon: <FileText className="h-10 w-10 text-hollywood-primary" />,
      title: "Detailed Outlining",
      description: "Creates comprehensive outlines with act titles, scene breakdowns, and character development plans."
    },
    {
      icon: <FileEdit className="h-10 w-10 text-hollywood-accent" />,
      title: "Professional Formatting",
      description: "Properly formatted scene headings, dialogue, action lines, and transitions according to industry standards."
    },
    {
      icon: <Star className="h-10 w-10 text-hollywood-accent" />,
      title: "Award-Winning Writing Style",
      description: "Compelling dialogue, vivid imagery, and engaging narratives indistinguishable from human writers."
    },
    {
      icon: <Rocket className="h-10 w-10 text-hollywood-blue" />,
      title: "Complete Memory",
      description: "Maintains perfect recall of your entire screenplay for consistent character development and storylines."
    },
    {
      icon: <Sparkles className="h-10 w-10 text-hollywood-blue" />,
      title: "Creative Techniques",
      description: "Implements cliffhangers, foreshadowing, and plot twists to keep your audience engaged."
    },
    {
      icon: <Briefcase className="h-10 w-10 text-hollywood-highlight" />,
      title: "TV & Commercial Scripts",
      description: "Specialized in television formats with perfect 13-act structure and commercial break positioning."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-hollywood-highlight" />,
      title: "Collaborative Approach",
      description: "Works with you scene-by-scene, incorporating your feedback for a truly personalized screenplay."
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
            Powerful Screenwriting Features
          </h2>
          <p className="text-white/80 text-lg">
            Screenplay Writer GPT combines professional screenwriting techniques with advanced AI
            to create compelling, industry-standard scripts.
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
          >
            Start Writing Your Screenplay Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
