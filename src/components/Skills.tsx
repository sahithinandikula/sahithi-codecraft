import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "C", "C++", "JavaScript"],
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "React", "Tailwind CSS", "Bootstrap"],
      color: "bg-secondary/10 text-secondary border-secondary/20"
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Django", "MySQL", "MongoDB"],
      color: "bg-accent/10 text-accent border-accent/20"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Postman"],
      color: "bg-success/10 text-success border-success/20"
    }
  ];

  return (
    <section 
      id="skills" 
      ref={skillsRef}
      className="py-20 bg-muted/30"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Technical <span className="text-secondary">Skills</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`group relative ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                    style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                  >
                    <Badge
                      className={`
                        ${category.color} 
                        px-6 py-3 text-base font-medium border-2
                        hover:shadow-teal-glow hover:scale-110 
                        transition-all duration-300 cursor-default
                        relative overflow-hidden
                      `}
                    >
                      <span className="relative z-10">{skill}</span>
                      <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
          <div className="inline-block p-8 bg-gradient-card rounded-2xl shadow-large">
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Always Learning & Growing
            </h4>
            <p className="text-muted-foreground">
              Passionate about staying current with emerging technologies and best practices in software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;