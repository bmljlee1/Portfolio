"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Code,
  Laptop,
  Server,
  Smartphone,
  Lightbulb,
  Users,
} from "lucide-react";

interface AboutSectionProps {
  imageSrc: string;
}

export function AboutSection({ imageSrc }: AboutSectionProps) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            I'm a passionate developer with a focus on creating elegant,
            efficient, and user-friendly applications. With expertise in modern
            web technologies, I bring ideas to life through clean code and
            thoughtful design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl opacity-50"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-border bg-card shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
                <Image
                  src={imageSrc}
                  alt="Developer working"
                  width={500}
                  height={500}
                  className="object-cover h-full w-full mix-blend-overlay opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <h3 className="text-2xl font-bold mb-2">Jon</h3>
                    <p className="text-muted-foreground mb-4">
                      Full Stack Developer
                    </p>
                    <div className="flex justify-center space-x-4">
                      <a
                        href="/CV - 2025 - Junior React Dev.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm">
                          My CV
                        </Button>
                      </a>
                      <a href="#contact">
                        <Button size="sm">Contact</Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeIn}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">What I Do</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Web Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Creating responsive and performant web applications
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Backend Systems</h4>
                    <p className="text-sm text-muted-foreground">
                      Building robust APIs and server architectures
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Mobile Apps</h4>
                    <p className="text-sm text-muted-foreground">
                      Developing cross-platform mobile applications
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Problem Solving</h4>
                    <p className="text-sm text-muted-foreground">
                      Finding elegant solutions to complex problems
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="pt-4">
              <p className="text-muted-foreground mb-4">
                I am currently studying software engineering at the School of
                Code, where I participate in weekly hackathons and engage in
                high-pressure learning environments. I have been studying for
                the past 6 months. Prior to this, I was at Tech Educators.
              </p>
              <div className="flex justify-center space-x-4">
                <Image
                  src="/techeducators.png"
                  alt="Tech Educators"
                  width={500}
                  height={900}
                  className="rounded-lg"
                />
                <Image
                  src="/school-of-code.png"
                  alt="School of Code"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
