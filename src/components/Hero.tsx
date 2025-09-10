"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Linkedin, Download, Github } from "lucide-react";
import JujujajakiNetwork from "./JujujajakiNetwork.tsx"; // 👈 import the background

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
<section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent">
      {/* Background network animation */}
  <div className="absolute inset-0 pointer-events-none z-0">
  <JujujajakiNetwork />
</div>
      {/* Foreground content */}
  <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Shohruh Sadullaev
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Data Science Researcher & Software Developer
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            MSc Social Data Science candidate at Central European University
            Vienna. Passionate about computational social science,
            disinformation research, and data-driven solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-primary border-0 hover:shadow-glow transition-all duration-300"
            onClick={scrollToAbout}
          >
            Learn More
            <ArrowDown className="ml-2 w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="/cv.pdf" download="Shohruh_Sadullaev_CV.pdf">
              <Download className="mr-2 w-4 h-4" />
              Download CV
            </a>
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://www.linkedin.com/in/shohruh-sadullaev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://github.com/shohruh-sdlv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a
              href="mailto:shohruh.sdlv@gmail.com"
              className="text-muted-foreground hover:text-primary"
            >
              <Mail className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
