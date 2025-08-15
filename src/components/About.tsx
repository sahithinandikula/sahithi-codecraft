import { useEffect, useRef, useState } from "react";
import sahithiHeadshot from "@/assets/sahithi-headshot.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={aboutRef}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              About <span className="text-secondary">Me</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a Computer Science student at <strong className="text-foreground">Indur Institute of Engineering and Technology</strong>, 
                passionate about creating innovative software solutions that make a real impact.
              </p>
              
              <p>
                My journey in open source began with <strong className="text-secondary">GSSoC 2024</strong>, where I contributed 
                25+ pull requests to React and Tailwind projects. This experience led me to become a 
                <strong className="text-secondary"> Campus Ambassador for GSSoC'25</strong>, where I've guided over 50 peers 
                in mastering Git and GitHub workflows.
              </p>
              
              <p>
                Currently serving as a <strong className="text-secondary">Project Admin for GSSoC 2025</strong>, 
                I led an ML project that gained 4 stars and 12 forks within just one week. I believe in 
                the power of collaborative development and the importance of giving back to the community.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, 
                or sharing knowledge with fellow developers. I'm particularly interested in building scalable, 
                user-centric applications that solve real-world problems.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <div className="px-4 py-2 bg-gradient-accent rounded-full text-secondary-foreground font-medium shadow-soft">
                B.Tech Computer Science
              </div>
              <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium">
                GSSoC Campus Ambassador
              </div>
              <div className="px-4 py-2 bg-success/10 border border-success/20 rounded-full text-success font-medium">
                Open Source Enthusiast
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className={`flex justify-center lg:justify-end ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-xl opacity-20 animate-glow-pulse"></div>
              <div className="relative bg-gradient-card rounded-2xl p-2 shadow-large">
                <img
                  src={sahithiHeadshot}
                  alt="Sahithi Nandikula - Software Engineer"
                  className="w-80 h-80 object-cover rounded-xl shadow-medium"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;