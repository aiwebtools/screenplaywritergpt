
import React from 'react';
import { Clapperboard, Phone, Mail } from 'lucide-react';

const AIWEBTOOLS_URL = "https://aiwebtools.lovable.app/?via=aiwebtools";

const Footer = () => {
  return (
    <footer className="bg-hollywood-darker relative">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-hollywood-primary/30 to-transparent"></div>
        <div className="absolute -top-80 -right-20 w-96 h-96 bg-hollywood-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-hollywood-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 bg-gradient-to-br from-hollywood-primary to-hollywood-accent rounded-full flex items-center justify-center">
                <Clapperboard className="text-white h-4 w-4" />
              </div>
              <h3 className="font-playfair font-bold text-white">Screenplay Writer GPT</h3>
            </div>
            <p className="text-white/70 text-sm">
              Your professional AI screenwriting assistant. 
              Create compelling, industry-standard scripts with 
              ease and precision.
            </p>
            <div className="mt-6">
              <a href={AIWEBTOOLS_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-hollywood-primary hover:underline">
                Visit AiWebTools.Ai
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://chatgpt.com/g/g-Sr11pfnkz-screenplay-writer-gpt" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  Try Screenplay Writer GPT
                </a>
              </li>
              <li>
                <a href="https://moviescriptwritergpt.lovable.app/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  Movie Script Writer GPT
                </a>
              </li>
              <li>
                <a href="https://bookwritergpt.lovable.app/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  Book Writer GPT
                </a>
              </li>
              <li>
                <a href="https://playwritergpt.lovable.app/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  Playwrighter GPT
                </a>
              </li>
              <li>
                <a href={AIWEBTOOLS_URL} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/70 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+14758008096" className="flex items-center text-white/70 hover:text-white transition-colors">
                  <Phone className="h-5 w-5 mr-2 text-hollywood-primary" />
                  <span>(475) 800-8096</span>
                </a>
              </li>
              <li>
                <a href="mailto:Contact@ai-webtools.com" className="flex items-center text-white/70 hover:text-white transition-colors">
                  <Mail className="h-5 w-5 mr-2 text-hollywood-primary" />
                  <span>Contact@ai-webtools.com</span>
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <a 
                href={AIWEBTOOLS_URL} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-hollywood-primary/10 hover:bg-hollywood-primary/20 rounded-full border border-hollywood-primary/30 text-white transition-all duration-300"
              >
                More AI Tools
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/50 text-sm">
            © 2025 <a href={AIWEBTOOLS_URL} target="_blank" rel="noopener noreferrer" className="text-hollywood-primary hover:underline">AI WEB TOOLS LLC</a> All rights reserved.
          </p>
          <p className="text-white/50 text-xs mt-2">
            Unlock Your Dreams ~ <a href={AIWEBTOOLS_URL} target="_blank" rel="noopener noreferrer" className="text-hollywood-primary hover:underline">AiWebTools.Ai</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
