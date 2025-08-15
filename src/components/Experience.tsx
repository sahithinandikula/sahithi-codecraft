import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Code, GitBranch, Star } from "lucide-react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      title: "Campus Ambassador",
      organization: "GSSoC'25",
      period: "2025",
      description: "Promoted open-source culture on campus and guided 50+ peers in mastering Git/GitHub workflows, fostering collaborative development practices.",
      icon: <Users className="w-6 h-6" />,
      highlights: ["50+ peers mentored", "Campus outreach", "Git/GitHub training"],
      color: "bg-secondary"
    },
    {
      title: "Project Admin",
      organization: "GSSoC 2025",
      period: "2025",
      description: "Led a Machine Learning project that gained significant traction with 4 stars and 12 forks within the first week of launch.",
      icon: <Star className="w-6 h-6" />,
      highlights: ["4 GitHub stars", "12 forks", "1 week milestone"],
      color: "bg-accent"
    },
    {
      title: "Open Source Contributor",
      organization: "GSSoC 2024",
      period: "2024",
      description: "Contributed 25+ pull requests to React and Tailwind CSS projects, improving user interfaces and developer experience.",
      icon: <GitBranch className="w-6 h-6" />,
      highlights: ["25+ PRs merged", "React expertise", "Tailwind CSS"],
      color: "bg-primary"
    }
  ];

  return (
    <section 
      id="experience" 
      ref={experienceRef}
      className="py-20 bg-muted/30"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            My <span className="text-secondary">Experience</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Building expertise through open source contributions and community leadership
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {experiences.map((experience, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-large transition-all duration-500 transform hover:scale-105 border-0 bg-gradient-card ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl ${experience.color} text-white shadow-medium group-hover:shadow-teal-glow transition-all duration-300`}>
                    {experience.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {experience.title}
                    </h3>
                    <p className="text-secondary font-medium mb-1">
                      {experience.organization}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {experience.period}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {experience.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {experience.highlights.map((highlight, highlightIndex) => (
                    <Badge 
                      key={highlightIndex}
                      variant="secondary"
                      className="text-xs bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;