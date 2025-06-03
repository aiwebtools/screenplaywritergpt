
import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title = "Screenplay Writer GPT - Free AI Screenwriting Tool | AI Web Tools",
  description = "Free AI screenplay writer tool by AI Web Tools. Create professional screenplays, movie scripts & TV scripts with our advanced AI screenwriting assistant.",
  keywords = "ai web tools, ai tools, free ai tools, screenplay writer, ai screenwriter, script writing tool",
  canonical = "https://screenplay-writer-gpt.lovable.app/"
}) => {
  React.useEffect(() => {
    // Update page title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonical);
    }
    
    // Add FAQ structured data for better SEO
    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Screenplay Writer GPT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Screenplay Writer GPT is a free AI-powered screenwriting tool by AI Web Tools that helps writers create professional movie scripts, TV screenplays, and dramatic scripts with industry-standard formatting."
          }
        },
        {
          "@type": "Question", 
          "name": "Is Screenplay Writer GPT free to use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Screenplay Writer GPT is completely free to use. It's part of AI Web Tools' collection of free AI writing assistants and creative tools."
          }
        },
        {
          "@type": "Question",
          "name": "What types of scripts can I create?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can create movie screenplays, TV show scripts, dramatic plays, and any other type of screenplay with professional formatting using our AI screenplay writer."
          }
        }
      ]
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(faqStructuredData);
    script.id = 'faq-structured-data';
    
    // Remove existing FAQ structured data if present
    const existingScript = document.getElementById('faq-structured-data');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      const scriptToRemove = document.getElementById('faq-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, keywords, canonical]);

  return null;
};

export default SEO;
