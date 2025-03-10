
import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface DisclaimerPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const DisclaimerPopup: React.FC<DisclaimerPopupProps> = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  
  if (!isOpen) return null;
  
  const handleAgree = () => {
    localStorage.setItem('disclaimerAgreed', 'true');
    toast({
      title: "Welcome!",
      description: "Thanks for accepting our terms",
      duration: 3000,
    });
    onClose();
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="neo-blur max-w-md w-full p-8 relative overflow-hidden animate-scale-in">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-hollywood-primary/20 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-hollywood-accent/20 rounded-full blur-2xl"></div>
        
        <h3 className="text-2xl font-playfair font-bold bg-gradient-to-r from-hollywood-primary via-hollywood-accent to-hollywood-highlight bg-clip-text text-transparent mb-4">
          Before You Continue
        </h3>
        
        <p className="text-white/90 mb-6 font-raleway leading-relaxed">
          By using Screenplay Writer GPT, you agree to our terms of service and acknowledge that all content generated is provided "as is" without warranty. You are responsible for reviewing all generated content for potential copyright issues before commercial use.
        </p>
        
        <button 
          onClick={handleAgree}
          className="w-full group relative overflow-hidden rounded-full bg-gradient-to-r from-hollywood-primary via-hollywood-accent to-hollywood-highlight px-8 py-3 font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-hollywood-primary/30 active:scale-95"
        >
          <span className="relative z-10 flex items-center justify-center gap-2 font-montserrat tracking-wide">
            <CheckCircle className="w-5 h-5" />
            I AGREE
            <span className="absolute inset-0 z-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
          </span>
          <span className="absolute inset-0 z-0 bg-gradient-to-r from-hollywood-accent to-hollywood-highlight opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </button>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
