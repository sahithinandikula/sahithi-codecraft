import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);

  const testimonials = [
    {
      name: "Prof. Rajesh Kumar",
      role: "Faculty Advisor, CSE Department",
      content: "Sahithi demonstrates exceptional problem-solving skills and a deep understanding of software engineering principles. Her contributions to open source projects showcase her technical prowess and collaborative spirit.",
      rating: 5,
      image: "👨‍🏫"
    },
    {
      name: "Arun Patel",
      role: "Senior Developer, Tech Startup",
      content: "Working with Sahithi on the GSSoC project was a pleasure. Her ability to write clean, maintainable code and her attention to detail in code reviews made our collaboration highly productive.",
      rating: 5,
      image: "👨‍💻"
    },
    {
      name: "Priya Sharma",
      role: "Fellow Open Source Contributor",
      content: "Sahithi's mentorship during GSSoC was invaluable. She has a unique ability to explain complex concepts in simple terms and always encourages best practices in development.",
      rating: 5,
      image: "👩‍💼"
    }
  ];

  return (
    <section 
      id="testimonials" 
      ref={testimonialsRef}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            What People <span className="text-secondary">Say</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Feedback from collaborators, mentors, and peers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`relative border-0 bg-gradient-card hover:shadow-large transition-all duration-500 transform hover:scale-[1.02] ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-secondary/20">
                  <Quote className="w-8 h-8" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;