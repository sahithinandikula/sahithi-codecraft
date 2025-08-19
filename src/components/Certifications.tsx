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
      name: "AWS Certified Cloud Practitioner",
      organization: "Amazon Web Services (AWS)",
      dateIssued: "March 2024",
      expirationDate: "March 2027",
      credentialId: "AWS-CCP-2024-001",
      link: "https://aws.amazon.com/certification/",
      status: "Active"
    },
    {
      name: "Google Analytics Certified",
      organization: "Google",
      dateIssued: "January 2024",
      expirationDate: "January 2026",
      credentialId: "GA-CERT-2024-002",
      link: "https://skillshop.exceedlms.com/student/catalog",
      status: "Active"
    },
    {
      name: "Microsoft Azure Fundamentals",
      organization: "Microsoft",
      dateIssued: "November 2023",
      expirationDate: "No Expiration",
      credentialId: "AZ-900-2023-003",
      link: "https://docs.microsoft.com/en-us/learn/certifications/",
      status: "Active"
    },
    {
      name: "Certified Scrum Master (CSM)",
      organization: "Scrum Alliance",
      dateIssued: "September 2023",
      expirationDate: "September 2025",
      credentialId: "CSM-2023-004",
      link: "https://www.scrumalliance.org/",
      status: "Active"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className={`group hover:shadow-elegant transition-all duration-500 border-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms"
              }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 flex items-start gap-2">
                      <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      {cert.name}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-2 text-muted-foreground">
                      <Building className="w-4 h-4" />
                      {cert.organization}
                    </CardDescription>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="bg-success/10 text-success border-success/20 ml-2"
                  >
                    {cert.status}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Issued</p>
                      <p className="text-muted-foreground">{cert.dateIssued}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-secondary" />
                    <div>
                      <p className="font-medium text-foreground">Expires</p>
                      <p className="text-muted-foreground">{cert.expirationDate}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-border/50">
                  <p className="text-xs text-muted-foreground mb-2">
                    Credential ID: <span className="font-mono">{cert.credentialId}</span>
                  </p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Credential
                  </a>
                </div>
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