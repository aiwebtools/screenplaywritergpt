
import React from 'react';
import { MessageCircle, FileText, Edit, Sparkles } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageCircle className="h-10 w-10 text-hollywood-primary" />,
      title: "Answer Key Questions",
      description: "Tell Screenplay Writer GPT about your genre, premise, characters and story, or let it create everything for you."
    },
    {
      icon: <FileText className="h-10 w-10 text-hollywood-accent" />,
      title: "Generate an Outline",
      description: "The AI creates a comprehensive outline with acts, scenes, characters, and key plot points."
    },
    {
      icon: <Edit className="h-10 w-10 text-hollywood-blue" />,
      title: "Write Scene-by-Scene",
      description: "Each scene is crafted individually with professional formatting, compelling dialogue, and vivid action lines."
    },
    {
      icon: <Sparkles className="h-10 w-10 text-hollywood-highlight" />,
      title: "Refine and Complete",
      description: "Provide feedback as needed, and continue until your screenplay is perfectly completed with a satisfying ending."
    }
  ];

  return (
    <section className="section bg-hollywood-darker relative">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 -left-20 w-64 h-64 bg-hollywood-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-hollywood-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient-primary">
            How It Works
          </h2>
          <p className="text-white/80 text-lg">
            Creating professional screenplays has never been easier. 
            Follow these simple steps to bring your vision to life.
          </p>
        </div>
        
        <div className="flex flex-col max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="glass-card p-8 mb-8 relative"
            >
              <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-hollywood-darker flex items-center justify-center border-2 border-hollywood-primary">
                <span className="text-white font-bold">{index + 1}</span>
              </div>
              
              <div className="ml-8">
                <div className="mb-4 float-effect">{step.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="absolute left-2 top-full h-8 w-0.5 bg-gradient-to-b from-hollywood-primary/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href="https://chatgpt.com/g/g-Sr11pfnkz-screenplay-writer-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Experience the Magic Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
