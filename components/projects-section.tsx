"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code } from "lucide-react";
import Image from "next/image";

export function ProjectsSection() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "FacePalm",
      description:
        "My first attempt at a full-stack social media website. Purely experimental!",
      image: "/facepalm.png",
      tags: ["React", "Node.js", "PostgreSQL", "Clerk"],
      category: "Full Stack",
      github: "https://github.com/bmljlee1/socialmedia",
      demo: "https://socialmedia-zeta.vercel.app/",
    },
    {
      id: 2,
      title: "Web Security Demo",
      description:
        "A practical learning site showing the dangers of security exploits in code",
      image: "/security site.png",
      tags: ["Next.JS", "Typescript", "Tailwind CSS"],
      category: "Frontend",
      github: "https://github.com/bmljlee1/security-demos",
      demo: "https://security-demos.vercel.app/",
    },
    {
      id: 3,
      title: "Cookie Clicker v2.0",
      description:
        "A fun little cookie clicker game, inspired by the great OG cookie clicker!.",
      image: "/cookie clicker.PNG",
      tags: ["React", "PostgreSQL", "Mapbox", "Prisma"],
      category: "Full Stack",
      github: "https://github.com/bmljlee1/Cookie-Clicker-v2.0",
      demo: "https://week06-project-cookieclicker.onrender.com/",
    },
    {
      id: 4,
      title: "The Speculation Station",
      description: "A full-stack application for crime solving enthusiasts!.",
      image: "/The Speculation Station.PNG",
      tags: ["React", "Vite", "Express", "PostgreSQL"],
      category: "Full Stack",
      github: "https://github.com/bmljlee1/Crime-solver-website",
      demo: "https://week07-project-1.onrender.com/",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Here are some of the projects I am currently working on. There is a
            lot still to do, but take a look and see what you think!
            <br /> (They are a work in progress so please let me know if some do
            not work!)
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="rounded-full"
            >
              All Projects
            </Button>
            {/* <Button
              variant={filter === "frontend" ? "default" : "outline"}
              onClick={() => setFilter("frontend")}
              className="rounded-full"
            >
              Frontend
            </Button>
            <Button
              variant={filter === "backend" ? "default" : "outline"}
              onClick={() => setFilter("backend")}
              className="rounded-full"
            >
              Backend
            </Button>
            <Button
              variant={filter === "fullstack" ? "default" : "outline"}
              onClick={() => setFilter("fullstack")}
              className="rounded-full"
            >
              Full Stack
            </Button> */}
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card className="overflow-hidden h-full flex flex-col group">
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="icon"
                        variant="outline"
                        className="rounded-full bg-background/20 backdrop-blur-sm border-white/20 text-white hover:bg-background/30"
                      >
                        <Github className="h-5 w-5" />
                      </Button>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="icon"
                        variant="outline"
                        className="rounded-full bg-background/20 backdrop-blur-sm border-white/20 text-white hover:bg-background/30"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </Button>
                    </a>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="gap-1">
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="gap-1">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/bmljlee1"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Button variant="outline" className="gap-2">
              <Code className="h-4 w-4" />
              View More on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
