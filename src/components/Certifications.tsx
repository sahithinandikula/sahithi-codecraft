import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink, Building } from "lucide-react";

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const certifications = [
    {
      name: "Hackathon Certificate",
      organization: "Google Developers Group Hyderabad",
      dateIssued: "August 2025",
      type: "Certificate of Participation",
      skills: [],
      credentialId: null,
      link: null
    },
    {
      name: "Code For Bharat Season 2",
      organization: "United Latino Students Association",
      dateIssued: "June 2025",
      type: "Certificate",
      skills: [],
      credentialId: "e78d90e0-9b4e-4545-b3f8-c8564391e908",
      link: "#"
    },
    {
      name: "Full Stack Developer",
      organization: "Apna College",
      dateIssued: "January 2025",
      type: "Certificate",
      skills: [],
      credentialId: null,
      link: null
    },
    {
      name: "Contribute to Open Source",
      organization: "Microsoft Learning",
      dateIssued: "December 2024",
      type: "Certificate",
      skills: [],
      credentialId: null,
      link: "#"
    },
    {
      name: "Contributor",
      organization: "GirlScript Summer of Code",
      dateIssued: "August 2024",
      type: "Certificate",
      skills: ["Node.js", "GitHub", "CSS", "Bootstrap", "HTML5", "TypeScript", "React.js", "Git", "JavaScript"],
      credentialId: null,
      link: null
    },
    {
      name: "Open Source Contributor",
      organization: "Social Summer of Code",
      dateIssued: "August 2024",
      type: "Certificate of Participation",
      skills: [],
      credentialId: null,
      link: null
    },
    {
      name: "Participant in Myntra WeForShe (HackerRamp)",
      organization: "Myntra",
      dateIssued: "August 2024",
      type: "Certificate of Participation (Team Code Warriors)",
      skills: ["Web Development"],
      credentialId: null,
      link: null
    },
    {
      name: "Generative AI",
      organization: "NVIDIA",
      dateIssued: "May 2024",
      type: "Certificate",
      skills: ["Generative AI"],
      credentialId: null,
      link: null
    },
    {
      name: "Introduction to Python",
      organization: "Sololearn",
      dateIssued: "May 2024",
      type: "Certificate",
      skills: ["Python"],
      credentialId: null,
      link: null
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background/95 to-primary/5"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center mb-4">
            <Award className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Certifications
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Professional certifications and credentials that validate my expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className={`group hover:shadow-elegant transition-all duration-500 border-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms"
              }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 flex items-start gap-2 leading-tight">
                      <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      {cert.name}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-2 text-muted-foreground italic">
                      <Building className="w-4 h-4" />
                      {cert.organization}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Issued: {cert.dateIssued}</p>
                    {cert.type && (
                      <p className="text-muted-foreground text-xs mt-1">{cert.type}</p>
                    )}
                  </div>
                </div>

                {cert.skills.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Skills:</p>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="text-xs bg-secondary/20 text-secondary border-secondary/30"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {(cert.link || cert.credentialId) && (
                  <div className="pt-2 border-t border-border/50">
                    {cert.credentialId && (
                      <p className="text-xs text-muted-foreground mb-2">
                        Credential ID: <span className="font-mono">{cert.credentialId}</span>
                      </p>
                    )}
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Show Credential
                      </a>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <p className="text-muted-foreground text-sm">
            Committed to continuous professional development and staying current with industry standards
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;