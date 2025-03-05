
import React, { useState, useEffect } from 'react';
import { Clapperboard } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-hollywood-darker/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a 
          href="/" 
          className="flex items-center space-x-2 group"
        >
          <div className="relative h-10 w-10 bg-gradient-to-br from-hollywood-primary to-hollywood-accent rounded-full flex items-center justify-center overflow-hidden group-hover:shadow-lg group-hover:shadow-hollywood-primary/30 transition-all duration-300">
            <Clapperboard className="text-white h-5 w-5 absolute group-hover:animate-rotate-slow" />
          </div>
          <div>
            <h1 className="font-playfair font-bold text-xl text-white">Screenplay Writer GPT</h1>
            <p className="text-xs text-white/70">
              Presented by <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-hollywood-primary hover:underline">AiWebTools.Ai</a>
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="https://chatgpt.com/g/g-Sr11pfnkz-screenplay-writer-gpt" target="_blank" rel="noopener noreferrer" className="nav-link">
            TRY SCREENPLAY WRITER GPT NOW
          </a>
          <a href="https://moviescriptwritergpt.lovable.app/" target="_blank" rel="noopener noreferrer" className="nav-link">
            MOVIE SCRIPT WRITER GPT
          </a>
          <a href="https://bookwritergpt.lovable.app/" target="_blank" rel="noopener noreferrer" className="nav-link">
            BOOK WRITER GPT
          </a>
          <a href="https://playwritergpt.lovable.app/" target="_blank" rel="noopener noreferrer" className="nav-link">
            PLAYWRIGHTER GPT
          </a>
          <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="btn-primary">
            MORE AI TOOLS
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} px-4 py-3 bg-hollywood-darker/95 backdrop-blur-md animate-fade-in`}>
        <div className="flex flex-col space-y-4 py-2">
          <a href="https://chatgpt.com/g/g-Sr11pfnkz-screenplay-writer-gpt" target="_blank" rel="noopener noreferrer" className="text-white py-2 block border-b border-white/10">
            TRY SCREENPLAY WRITER GPT NOW
          </a>
          <a href="https://moviescriptwritergpt.lovable.app/" target="_blank" rel="noopener noreferrer" className="text-white py-2 block border-b border-white/10">
            MOVIE SCRIPT WRITER GPT
          </a>
          <a href="https://bookwritergpt.lovable.app/" target="_blank" rel="noopener noreferrer" className="text-white py-2 block border-b border-white/10">
            BOOK WRITER GPT
          </a>
          <a href="https://playwritergpt.lovable.app/" target="_blank" rel="noopener noreferrer" className="text-white py-2 block border-b border-white/10">
            PLAYWRIGHTER GPT
          </a>
          <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="btn-primary text-center">
            MORE AI TOOLS
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
