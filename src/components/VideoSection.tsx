
import React, { useEffect, useState } from 'react';

const VideoSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    
    const section = document.getElementById('video-section');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="video-section" className="section bg-hollywood-darker relative py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-hollywood-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 sm:w-60 h-40 sm:h-60 bg-hollywood-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gradient-primary">You Hold The Key</h2>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto px-2">LET SCREENPLAY WRITER GPT BE YOUR STEPPING STONE TO UNLOCK YOUR DREAMS</p>
        </div>
        
        <div className={`max-w-4xl mx-auto glass-card p-2 sm:p-4 overflow-hidden transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="aspect-w-16 aspect-h-9 relative">
            <iframe 
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96" 
              src="https://www.youtube.com/embed/WHGRABnjfxA?autoplay=1&mute=0&controls=1&origin=https://screenplay-writer-gpt.lovable.app&playsinline=1&showinfo=0&rel=0&modestbranding=1&cc_load_policy=0&fs=1&enablejsapi=1&widgetid=1&hd=1" 
              title="Screenplay Writer GPT Demo" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        <div className="text-center mt-4 sm:mt-6">
          <p className="text-xs sm:text-sm text-white/60">
            Unlock Your Dreams ~ <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-hollywood-primary hover:underline">AiWebTools.Ai</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
