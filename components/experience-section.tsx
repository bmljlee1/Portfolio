"use client";

import { motion } from "framer-motion";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Tech Company Inc.",
      location: "San Francisco, CA",
      period: "Jan 2022 - Present",
      description: "Led the development of the company's main product using React and TypeScript. Implemented new features, improved performance, and mentored junior developers.",
      achievements: [
        "Reduced load time by 40% through code optimization",
        "Implemented CI/CD pipeline for frontend deployment",
        "Led the migration from JavaScript to TypeScript"
      ],
      skills: ["React", "TypeScript", "Next.js", "Redux", "Jest"]
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Startup XYZ",
      location: "Remote",
      period: "Mar 2020 - Dec 2021",
      description: "Worked on a SaaS platform for project management. Developed both frontend and backend features, collaborated with designers, and participated in product planning.",
      achievements: [
        "Built user authentication system with JWT",
        "Developed real-time notification system using WebSockets",
        "Implemented responsive design for mobile users"
      ],
      skills: ["React", "Node.js", "Express", "MongoDB", "Socket.io"]
    },
    {
      id: 3,
      role: "Web Developer",
      company: "Digital Agency",
      location: "New York, NY",
      period: "Jun 2018 - Feb 2020",
      description: "Created websites and web applications for various clients. Worked closely with designers and project managers to deliver high-quality products on time.",
      achievements: [
        "Developed e-commerce platform for a retail client",
        "Created custom CMS for content management",
        "Optimized website performance and SEO"
      ],
      skills: ["JavaScript", "HTML/CSS", "WordPress", "PHP", "MySQL"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            My professional journey includes working with diverse teams and technologies to create impactful digital solutions.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -ml-px md:ml-0"></div>
          
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div key={exp.id} variants={item}>
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary -ml-2 md:ml-[-8px] mt-6"></div>
                  
                  {/* Date for mobile */}
                  <div className="md:hidden flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    {exp.period}
                  </div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-xl">{exp.role}</CardTitle>
                          {/* Date for desktop */}
                          <div className="hidden md:flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-2" />
                            {exp.period}
                          </div>
                        </div>
                        <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <div className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-2" />
                            {exp.company}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            {exp.location}
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">{exp.description}</p>
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2">Key Achievements:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <Badge key={skill} variant="secondary">{skill}</Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}