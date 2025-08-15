import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Github, GitBranch, Star, Users } from "lucide-react";

const GitHubStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const stats = [
    {
      icon: <Github className="w-8 h-8" />,
      label: "Total Repositories",
      value: "25+",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      label: "Pull Requests",
      value: "25+",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: <Star className="w-8 h-8" />,
      label: "Stars Earned",
      value: "15+",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: <Users className="w-8 h-8" />,
      label: "Followers",
      value: "50+",
      color: "text-success",
      bgColor: "bg-success/10"
    }
  ];

  return (
    <section 
      id="github-stats" 
      ref={statsRef}
      className="py-20 bg-muted/30"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            GitHub <span className="text-secondary">Activity</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Open source contributions and community engagement
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className={`text-center border-0 bg-gradient-card hover:shadow-medium transition-all duration-500 transform hover:scale-105 ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                <div className={`inline-flex p-4 rounded-xl ${stat.bgColor} mb-4`}>
                  <div className={stat.color}>
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub Contribution Visualization */}
        <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
          <Card className="border-0 bg-gradient-card shadow-large">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
                Contribution Streak
              </h3>
              
              {/* Simulated contribution graph */}
              <div className="grid grid-cols-12 gap-1 mb-6">
                {Array.from({ length: 84 }, (_, i) => {
                  const intensity = Math.floor(Math.random() * 5);
                  const intensityClass = intensity === 0 ? 'bg-muted' : 
                                       intensity === 1 ? 'bg-secondary/30' :
                                       intensity === 2 ? 'bg-secondary/50' :
                                       intensity === 3 ? 'bg-secondary/70' :
                                       'bg-secondary';
                  
                  return (
                    <div 
                      key={i}
                      className={`w-3 h-3 rounded-sm ${intensityClass} hover:scale-125 transition-transform duration-200`}
                      title={`${intensity} contributions`}
                    />
                  );
                })}
              </div>
              
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
              
              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                <span>Less</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-sm bg-muted"></div>
                  <div className="w-3 h-3 rounded-sm bg-secondary/30"></div>
                  <div className="w-3 h-3 rounded-sm bg-secondary/50"></div>
                  <div className="w-3 h-3 rounded-sm bg-secondary/70"></div>
                  <div className="w-3 h-3 rounded-sm bg-secondary"></div>
                </div>
                <span>More</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;