"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      role: "Software Engineering Bootcamp",
      company: "School of Code",
      location: "Remote",
      period: "November 2024 – present",
      description:
        "Developing core competencies in data processing and API design, while embracing Agile principles to foster continuous improvement and adaptability throughout project lifecycles. Collaborating in Agile-driven teams to design and deliver scalable software solutions, regular stand-ups to manage large datasets efficiently and meet project milestones and weekly hackathons, showcasing our coding projects.",
      skills: [
        "Data Processing",
        "API Design",
        "Agile",
        "Team Collaboration",
        "Project Management",
        "Testing",
        "AI functionality",
        "CI/CD pipelines",
        "Next. JS",
        "React",
      ],
    },
    {
      id: 2,
      role: "Software Engineering Bootcamp",
      company: "Tech Educators",
      location: "Remote",
      period: "August 2024 – November 2024",
      description:
        "Developed full-stack web applications with Node.js and PostgreSQL, emphasising database management. Designed solutions for managing dynamic, data-heavy platforms, including RESTful APIs and backend optimisation.",
      skills: [
        "Node.js",
        "PostgreSQL",
        "Database Management",
        "RESTful APIs",
        "Backend Optimisation",
      ],
    },
    {
      id: 3,
      role: "BSc. Forensic Science with Honours",
      company: "Liverpool John Moores University",
      location: "Liverpool, UK",
      period: "2013 – 2016",
      description:
        "Specialised in data analysis and digital forensics, focusing on processing large datasets. Dissertation: Advanced fingerprint analysis techniques and data degradation.",
      skills: [
        "Data Analysis",
        "Digital Forensics",
        "Large Datasets",
        "Fingerprint Analysis",
        "Data Degradation",
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & Training
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {experiences.map((exp, index) => (
            <motion.div key={exp.id} variants={item}>
              <div
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary -ml-2 md:ml-[-8px] mt-6"></div>
                <div className="md:hidden flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {exp.period}
                </div>
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                  }`}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl">{exp.role}</CardTitle>
                        <div className="hidden md:flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {exp.period}
                        </div>
                      </div>
                      <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {exp.company}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
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
    </section>
  );
}
