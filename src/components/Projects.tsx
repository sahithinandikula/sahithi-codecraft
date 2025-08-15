import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import sneakerProject from "@/assets/sneaker-prediction-project.jpg";
import wanderlustProject from "@/assets/wanderlust-project.jpg";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("All");
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: "Sneaker Price Prediction",
      description: "Machine Learning application that predicts sneaker prices using PyTorch with ~30% average error rate. Built with Django backend and MySQL database for efficient data management.",
      image: sneakerProject,
      technologies: ["Python", "Django", "MySQL", "PyTorch", "Machine Learning"],
      category: "ML Projects",
      github: "https://github.com/sahithi/sneaker-prediction",
      demo: "https://sneaker-prediction-demo.com",
      stats: { accuracy: "~70%", dataset: "10K+ sneakers" }
    },
    {
      title: "Wanderlust Travel Platform",
      description: "Full-stack travel accommodation platform featuring user authentication, property listings, review system, and booking management. Responsive design with modern UI/UX.",
      image: wanderlustProject,
      technologies: ["React", "Node.js", "Tailwind CSS", "MySQL", "Express"],
      category: "Web Apps",
      github: "https://github.com/sahithi/wanderlust",
      demo: "https://wanderlust-platform.com",
      stats: { users: "500+", listings: "200+" }
    }
  ];

  const filters = ["All", "ML Projects", "Web Apps"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section 
      id="projects" 
      ref={projectsRef}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Featured <span className="text-secondary">Projects</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Showcasing innovative solutions built with modern technologies
          </p>

          {/* Filter Buttons */}
          <div className={`flex justify-center gap-4 flex-wrap ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            {filters.map((filterOption) => (
              <Button
                key={filterOption}
                variant={filter === filterOption ? "secondary" : "outline"}
                onClick={() => setFilter(filterOption)}
                className="transition-all duration-300"
              >
                {filterOption}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index}
              className={`group overflow-hidden hover:shadow-large transition-all duration-500 transform hover:scale-[1.02] border-0 bg-gradient-card ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-foreground group-hover:text-secondary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <Badge key={key} variant="outline" className="text-xs">
                        {value}
                      </Badge>
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      className="bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button
                    variant="cta"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;