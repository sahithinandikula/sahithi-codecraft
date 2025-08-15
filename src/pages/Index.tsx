import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import GitHubStats from "@/components/GitHubStats";
import MiniBlog from "@/components/MiniBlog";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <GitHubStats />
      <MiniBlog />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
