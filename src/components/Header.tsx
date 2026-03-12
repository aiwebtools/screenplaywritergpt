
import React, { useState, useEffect } from 'react';
import { Clapperboard, X, Menu } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "https://chatgpt.com/g/g-Sr11pfnkz-screenplay-writer-gpt", label: "TRY SCREENPLAY WRITER GPT" },
    { href: "https://moviescriptwritergpt.lovable.app/", label: "MOVIE SCRIPT WRITER GPT" },
    { href: "https://bookwritergpt.lovable.app/", label: "BOOK WRITER GPT" },
    { href: "https://playwritergpt.lovable.app/", label: "PLAYWRIGHTER GPT" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-hollywood-darker/95 backdrop-blur-md py-2 sm:py-3 shadow-lg' : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a 
          href="/" 
          className="flex items-center space-x-2 group shrink-0"
        >
          <div className="relative h-8 w-8 sm:h-10 sm:w-10 bg-gradient-to-br from-hollywood-primary to-hollywood-accent rounded-full flex items-center justify-center overflow-hidden group-hover:shadow-lg group-hover:shadow-hollywood-primary/30 transition-all duration-300">
            <Clapperboard className="text-white h-4 w-4 sm:h-5 sm:w-5 absolute group-hover:animate-rotate-slow" />
          </div>
          <div className="min-w-0">
            <h1 className="font-playfair font-bold text-base sm:text-xl text-white truncate">Screenplay Writer GPT</h1>
            <p className="text-[10px] sm:text-xs text-white/70">
              Presented by <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="text-hollywood-primary hover:underline" onClick={(e) => e.stopPropagation()}>AiWebTools.Ai</a>
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-3 xl:space-x-5">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="nav-link whitespace-nowrap text-xs xl:text-sm">
              {link.label}
            </a>
          ))}
          <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="btn-primary whitespace-nowrap text-xs xl:text-sm">
            MORE AI TOOLS
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-2 -mr-2 touch-manipulation"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 top-0 bg-hollywood-darker/98 backdrop-blur-lg transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: 40 }}
      >
        <div className={`flex flex-col items-center justify-center h-full space-y-5 px-6 transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-8'
        }`}>
          {navLinks.map((link, i) => (
            <a 
              key={link.label} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white text-lg font-medium py-3 px-6 w-full max-w-sm text-center border-b border-white/10 hover:text-hollywood-primary transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ transitionDelay: isMobileMenuOpen ? `${i * 50}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary text-center w-full max-w-sm text-lg mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            MORE AI TOOLS
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
