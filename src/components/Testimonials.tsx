
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Michael Rodriguez",
      role: "Independent Filmmaker",
      content: "Screenplay Writer GPT helped me break through my writer's block and create a compelling script for my short film. The dialogue feels natural and the scene descriptions are vivid. It's like having a professional screenwriter at my disposal 24/7.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      role: "Television Writer",
      content: "I was skeptical about AI writing tools, but Screenplay Writer GPT blew me away. It understands the nuances of TV writing and the 13-act structure is perfect for episodic content. I use it for brainstorming and first drafts that I then refine.",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "Film Student",
      content: "This tool has been invaluable for my screenwriting course. It helped me understand proper formatting and structure. The collaborative approach means I'm still learning while creating professional-quality scripts. Highly recommended!",
      rating: 4
    },
    {
      name: "Jessica Patel",
      role: "Content Creator",
      content: "Screenplay Writer GPT transformed my YouTube skit ideas into properly formatted scripts that my team could easily follow. The character development and story arcs are impressive - this AI genuinely understands storytelling.",
      rating: 5
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
    }, 8000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };
  
  const goToNext = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };
  
  return (
    <section className="section relative">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -right-20 w-80 h-80 bg-hollywood-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-40 w-96 h-96 bg-hollywood-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient-primary">
            What People Are Saying
          </h2>
          <p className="text-white/80 text-lg">
            Hear from screenwriters, filmmakers, and content creators who have transformed their ideas into compelling scripts.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-hollywood-primary/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-hollywood-primary fill-hollywood-primary" />
                ))}
                {[...Array(5 - testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i + testimonials[activeIndex].rating} className="w-6 h-6 text-hollywood-primary/30" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-white text-center italic mb-8">
                "{testimonials[activeIndex].content}"
              </blockquote>
              
              <div className="text-center">
                <p className="text-lg font-bold text-white">{testimonials[activeIndex].name}</p>
                <p className="text-hollywood-primary">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <button 
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white mr-4 hover:bg-white/10 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-hollywood-primary" : "bg-white/20"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={goToNext}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white ml-4 hover:bg-white/10 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
