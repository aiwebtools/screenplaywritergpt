
import React, { useEffect, useRef } from 'react';
import { Clapperboard, Star, Film } from 'lucide-react';

const Hero = () => {
  const heroCubeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const cube = heroCubeRef.current;
    if (!cube) return;
    
    let rotateX = 0;
    let rotateY = 0;
    let animationFrameId: number;
    
    const animate = () => {
      rotateY += 0.2;
      rotateX = Math.sin(rotateY * 0.01) * 10;
      
      if (cube) {
        cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <section className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-hollywood-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-hollywood-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-hollywood-blue/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block mb-4">
              <div className="px-4 py-1 rounded-full bg-white/5 border border-hollywood-primary/30 inline-flex items-center">
                <Star className="h-4 w-4 text-hollywood-primary mr-2" />
                <span className="text-xs font-medium text-white/90">Free AI Tools by AI Web Tools</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gradient-primary">Free AI Screenplay Writer</span>
              <br /> 
              <span className="text-white">Professional Script Generator</span>
            </h1>
            
            <p className="text-lg text-white/80 max-w-xl mx-auto lg:mx-0">
              The best free AI screenwriting tool by AI Web Tools. Create professional movie scripts, 
              TV screenplays, and dramatic scripts with our advanced AI writing assistant. 
              Transform your ideas into industry-standard screenplays instantly.
            </p>
            
            <div className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="https://chatgpt.com/g/g-Sr11pfnkz-screenplay-writer-gpt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button"
                aria-label="Try our free AI screenplay writer tool"
              >
                Try Free AI Screenplay Writer
              </a>
              <a 
                href="https://www.aiwebtools.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary"
                aria-label="Explore more free AI tools by AI Web Tools"
              >
                More Free AI Tools
              </a>
            </div>
            
            <div className="pt-8 flex items-center justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-hollywood-primary/20 border-2 border-white flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{i}</span>
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <p className="text-white font-medium">500+ Free AI Screenplays Created</p>
                <p className="text-xs text-white/60">Trusted by writers worldwide - Powered by AI Web Tools</p>
              </div>
            </div>
          </div>
          
          <div className="relative h-96 perspective">
            <div 
              ref={heroCubeRef}
              className="w-full h-full preserve-3d absolute"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* 3D Cube */}
              <div className="absolute inset-0 glass-card flex items-center justify-center transform translate-z-[150px]">
                <div className="text-center p-8">
                  <Film className="h-12 w-12 text-hollywood-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Professional Format</h3>
                  <p className="text-white/70 text-sm">Industry-standard screenplay structure</p>
                </div>
              </div>
              
              <div className="absolute inset-0 glass-card flex items-center justify-center transform rotateY(90deg) translate-z-[150px]">
                <div className="text-center p-8">
                  <Star className="h-12 w-12 text-hollywood-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Award-Winning Quality</h3>
                  <p className="text-white/70 text-sm">Compelling dialogues and narratives</p>
                </div>
              </div>
              
              <div className="absolute inset-0 glass-card flex items-center justify-center transform rotateY(180deg) translate-z-[150px]">
                <div className="text-center p-8">
                  <Clapperboard className="h-12 w-12 text-hollywood-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">13 Act Structure</h3>
                  <p className="text-white/70 text-sm">Perfect for television shows and series</p>
                </div>
              </div>
              
              <div className="absolute inset-0 glass-card flex items-center justify-center transform rotateY(270deg) translate-z-[150px]">
                <div className="text-center p-8">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <path d="M14 2v6h6" />
                    <path d="M8 10v8" />
                    <path d="M12 12v6" />
                    <path d="M16 10v8" />
                  </svg>
                  <h3 className="text-xl font-bold text-white mb-2">Detailed Outline</h3>
                  <p className="text-white/70 text-sm">Comprehensive scene-by-scene planning</p>
                </div>
              </div>
              
              <div className="absolute inset-0 glass-card flex items-center justify-center transform rotateX(90deg) translate-z-[150px]">
                <div className="text-center p-8">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9b87f5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4">
                    <path d="M17 6.1H3" />
                    <path d="M21 12.1H3" />
                    <path d="M15.1 18H3" />
                  </svg>
                  <h3 className="text-xl font-bold text-white mb-2">Perfect Formatting</h3>
                  <p className="text-white/70 text-sm">Industry-standard screenplay elements</p>
                </div>
              </div>
              
              <div className="absolute inset-0 glass-card flex items-center justify-center transform rotateX(270deg) translate-z-[150px]">
                <div className="text-center p-8">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D946EF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4">
                    <path d="M12 12c-2-2.96-1.8-5.27-.5-7.93.86 2.99 2.52 4.92 4.5 7.93-1.48 2.56-3.16 4.03-4 5.07-1.68-2.05-1.86-3.21 0-5.07Z" />
                    <path d="M20 14c-1.68-1.95-2.36-3.2-2-6 .74 1.96 1.44 3.5 3 5-1.2 2.96-2.38 4.87-3 5.5-.74-1.42-.94-2.14-1-3.5 0-.44.04-.9.11-1.34" />
                    <path d="M5 10.95C6.05 9.38 6.33 8.12 6 5.5c.74 1.96 1.44 3.5 3 5-1.2 2.96-2.38 4.87-3 5.5-.45-.87-.67-1.56-.89-3.28" />
                  </svg>
                  <h3 className="text-xl font-bold text-white mb-2">Creative Excellence</h3>
                  <p className="text-white/70 text-sm">Imaginative plots and characters</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-10 left-0 w-20 h-20 glass-card flex items-center justify-center animate-float opacity-80">
              <Clapperboard className="h-8 w-8 text-hollywood-primary" />
            </div>
            <div className="absolute bottom-10 right-10 w-16 h-16 glass-card flex items-center justify-center animate-float opacity-80" style={{ animationDelay: '1s' }}>
              <Star className="h-6 w-6 text-hollywood-accent" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-xs text-white/50 mb-2">Free AI Tools - Unlock Your Dreams</p>
        <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-hollywood-primary hover:underline text-sm font-medium">
          AI Web Tools - AiWebTools.Ai
        </a>
      </div>
    </section>
  );
};

export default Hero;
