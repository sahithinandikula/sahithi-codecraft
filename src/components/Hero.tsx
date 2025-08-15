import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Aspiring Software Engineer | Full-Stack Developer | Open Source Contributor";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen relative bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Sahithi <span className="text-secondary">Nandikula</span>
          </h1>

          {/* Typing Animation Headline */}
          <div className="h-16 mb-8 flex items-center justify-center">
            <h2 className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
              {typedText}
              <span className="inline-block w-0.5 h-6 bg-secondary ml-1 animate-blink"></span>
            </h2>
          </div>

          {/* Introduction */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-left">
            Passionate about creating impactful software solutions through open-source contributions, 
            full-stack development, and building scalable applications that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-right">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection("projects")}
              className="min-w-48"
            >
              View My Work
            </Button>
            <Button 
              variant="glass" 
              size="xl"
              onClick={() => scrollToSection("contact")}
              className="min-w-48"
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12 animate-scale-in">
            <a 
              href="https://github.com/sahithi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/20 backdrop-blur-sm border border-border/50 text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-110 hover:shadow-teal-glow"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/sahithi-nandikula" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/20 backdrop-blur-sm border border-border/50 text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-110 hover:shadow-teal-glow"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:sahithinandikula05@gmail.com"
              className="p-3 rounded-full bg-card/20 backdrop-blur-sm border border-border/50 text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-110 hover:shadow-teal-glow"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-primary-foreground/60 hover:text-secondary transition-colors duration-300"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;