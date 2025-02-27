"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Full Stack Developer";
  const typingSpeed = 100;

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <div className="flex justify-center">
              <Image
                src="/linked-in photo.jpeg"
                alt="Profile Photo"
                width={150}
                height={150}
                className="rounded-full"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-primary">Jon</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                <span className="text-primary">{typedText}</span>
                <span className="animate-blink">|</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-xl">
                I build exceptional and accessible digital experiences for the
                web. Passionate about creating elegant solutions to complex
                problems.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="group">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <a
                href="https://github.com/bmljlee1"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Button variant="outline" className="group">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Profile
                </Button>
              </a>
              <a
                href="/CV - 2025 - Junior React Dev.pdf"
                download
                className="group"
              >
                <Button variant="secondary">
                  <Download className="mr-2 h-4 w-4" />
                  Download My CV
                </Button>
              </a>
            </div>

            <div className="flex items-center space-x-4 text-muted-foreground">
              <div className="h-px bg-border flex-grow"></div>
              <span>Scroll to explore</span>
              <div className="h-px bg-border flex-grow"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto lg:ml-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-30"></div>
            <div className="relative bg-card border border-border rounded-3xl overflow-hidden shadow-xl h-full">
              <div className="absolute top-0 left-0 right-0 h-12 bg-muted flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="pt-12 p-6 h-full">
                <pre className="text-xs md:text-sm overflow-auto h-full">
                  <code className="language-typescript">
                    {`// Developer.ts
export interface Skill {
  name: string;
  level: number;
  yearsOfExperience: number;
}

export class Developer {
  name: string = "Your Name";
  title: string = "Full Stack Developer";
  location: string = "Your Location";
  
  skills: Skill[] = [
    { name: "TypeScript", level: 90, yearsOfExperience: 3 },
    { name: "React", level: 95, yearsOfExperience: 4 },
    { name: "Next.js", level: 85, yearsOfExperience: 2 },
    { name: "Node.js", level: 80, yearsOfExperience: 3 },
  ];
  
  contact(): string {
    return "hello@yourdomain.com";
  }
  
  get availableForWork(): boolean {
    return true;
  }
}`}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
