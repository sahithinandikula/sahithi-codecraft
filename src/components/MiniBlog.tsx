import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const MiniBlog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const blogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (blogRef.current) {
      observer.observe(blogRef.current);
    }

    return () => {
      if (blogRef.current) {
        observer.unobserve(blogRef.current);
      }
    };
  }, []);

  const blogPosts = [
    {
      title: "Building Scalable ML Models with PyTorch",
      excerpt: "Lessons learned from developing a sneaker price prediction model with 70% accuracy. Exploring data preprocessing, model architecture, and deployment strategies.",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      category: "Machine Learning",
      tags: ["PyTorch", "ML", "Python"]
    },
    {
      title: "Mastering Git Workflows for Open Source",
      excerpt: "Best practices for contributing to open source projects, from fork to merged PR. Tips for clean commits, effective branching, and collaborative development.",
      date: "Jan 10, 2025",
      readTime: "4 min read",
      category: "Development",
      tags: ["Git", "Open Source", "Collaboration"]
    }
  ];

  return (
    <section 
      id="blog" 
      ref={blogRef}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Mini <span className="text-secondary">Blog</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Sharing insights from my coding journey and project experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-large transition-all duration-500 transform hover:scale-[1.02] border-0 bg-gradient-card cursor-pointer ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-secondary transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="outline"
                      className="text-xs hover:bg-muted hover:text-foreground transition-colors duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-secondary font-medium group-hover:text-primary transition-colors duration-300">
                    Read More
                  </span>
                  <ArrowRight className="w-5 h-5 text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
          <p className="text-muted-foreground">
            More posts coming soon! Follow my journey as I continue to learn and build.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MiniBlog;