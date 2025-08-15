import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const contactRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || "Portfolio Contact");
    const body = encodeURIComponent(
      `Hi Sahithi,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    
    window.location.href = `mailto:sahithinandikula05@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Email client opened!",
      description: "Your default email client should open with the message pre-filled.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "sahithinandikula05@gmail.com",
      href: "mailto:sahithinandikula05@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Hyderabad, India",
      href: null
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/sahithi",
      href: "https://github.com/sahithi"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/sahithi-nandikula",
      href: "https://linkedin.com/in/sahithi-nandikula"
    }
  ];

  return (
    <section 
      id="contact" 
      ref={contactRef}
      className="py-20 bg-muted/30"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Let's <span className="text-secondary">Collaborate</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Ready to work on something amazing together? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className={`border-0 bg-gradient-card shadow-large ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Send me a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="bg-background/50 border-border/50 focus:border-secondary focus:ring-secondary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="bg-background/50 border-border/50 focus:border-secondary focus:ring-secondary"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Collaboration"
                    className="bg-background/50 border-border/50 focus:border-secondary focus:ring-secondary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or how we can collaborate..."
                    className="bg-background/50 border-border/50 focus:border-secondary focus:ring-secondary resize-none"
                  />
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Get in touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, interesting projects, 
                or just chat about technology. Whether you're looking for a collaborator, 
                have a question about my work, or want to explore potential partnerships, 
                don't hesitate to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-xl bg-gradient-card hover:shadow-medium transition-all duration-300 ${
                    info.href ? 'cursor-pointer hover:scale-[1.02]' : ''
                  }`}
                  onClick={info.href ? () => window.open(info.href, '_blank') : undefined}
                >
                  <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">
                      {info.label}
                    </h4>
                    <p className="text-muted-foreground">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <Card className="border-0 bg-gradient-accent text-secondary-foreground shadow-teal-glow">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-semibold mb-2">
                  Ready to collaborate?
                </h4>
                <p className="mb-4 opacity-90">
                  Let's build something amazing together!
                </p>
                <Button 
                  variant="glass" 
                  size="lg"
                  onClick={() => {
                    const contactForm = document.querySelector('form');
                    contactForm?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    const nameInput = document.querySelector('input[name="name"]') as HTMLInputElement;
                    nameInput?.focus();
                  }}
                >
                  Start a Project
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;