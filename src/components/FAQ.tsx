
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "What is Screenplay Writer GPT?",
      answer: "Screenplay Writer GPT is an advanced AI assistant specially designed to help writers create professional screenplays for television shows, films, and other formats. It guides you through the entire process from ideation to scene-by-scene writing, maintaining perfect industry-standard formatting throughout."
    },
    {
      question: "Do I need screenwriting experience to use this tool?",
      answer: "Not at all! Screenplay Writer GPT is designed for both beginners and professionals. If you're new to screenwriting, it will guide you through the process and teach you about proper formatting and structure. If you're experienced, it can help speed up your workflow and overcome creative blocks."
    },
    {
      question: "How does the screenplay creation process work?",
      answer: "The process begins with Screenplay Writer GPT asking you about your genre, premise, characters, and story. Based on your inputs, it creates a detailed outline with acts and scenes. Then, it writes each scene individually, complete with dialogue, action lines, and scene headings, seeking your feedback throughout the process."
    },
    {
      question: "Can I collaborate with Screenplay Writer GPT on existing ideas?",
      answer: "Absolutely! You can bring your existing ideas, characters, or partial scripts, and Screenplay Writer GPT will help develop them further. It's designed to be collaborative, working with your vision while offering creative suggestions and maintaining professional formatting."
    },
    {
      question: "What screenwriting formats does it support?",
      answer: "Screenplay Writer GPT specializes in television show formats with a 13-act structure, but it's adaptable to various script formats including feature films, short films, commercials, and web series. All scripts follow industry-standard formatting conventions."
    },
    {
      question: "Is my screenplay content private and secure?",
      answer: "Yes, your interactions with Screenplay Writer GPT follow OpenAI's privacy policies. We recommend reviewing OpenAI's privacy policy for complete details on how your data is handled and protected."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section className="section bg-hollywood-darker relative" id="faq">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-hollywood-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-20 w-80 h-80 bg-hollywood-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-white/80 text-lg">
            Everything you need to know about Screenplay Writer GPT
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="glass-card mb-4 overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-bold text-white">{faq.question}</h3>
                <div className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-hollywood-primary" />
                  ) : (
                    <Plus className="w-6 h-6 text-hollywood-primary" />
                  )}
                </div>
              </button>
              
              <div 
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? "max-h-96 opacity-100 pb-6" 
                    : "max-h-0 opacity-0 pb-0 overflow-hidden"
                }`}
              >
                <p className="text-white/80">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/70 mb-4">
            Still have questions?
          </p>
          <a 
            href="mailto:Contact@ai-webtools.com" 
            className="btn-secondary"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
