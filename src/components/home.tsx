import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Mail,
  Phone,
  Linkedin,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ProjectsSection from "./ProjectsSection";
import AchievementsTimeline from "./AchievementsTimeline";
import ContactForm from "./ContactForm";

const Home = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const tools = [
    { name: "AWS", icon: "🔶" },
    { name: "Google Cloud Platform", icon: "☁️" },
    { name: "Linux", icon: "🐧" },
    { name: "Git", icon: "📝" },
    { name: "GitHub", icon: "🐙" },
    { name: "Docker", icon: "🐳" },
    { name: "Jenkins", icon: "🔄" },
    { name: "Kubernetes", icon: "⚓" },
    { name: "Terraform", icon: "🏗️" },
    { name: "Grafana", icon: "📊" },
    { name: "Prometheus", icon: "📈" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header Section */}
      <header className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl"
            >
              <img
                src="https://i.imgur.com/2RWlbML.jpg"
                alt="Mani Ratnam"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:flex-1 text-center md:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-2">
                Mani Ratnam
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 mb-4">
                DevOps & Cloud Engineer
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
                A passionate Cloud and DevOps enthusiast with 2 Year of hands-on
                experience building scalable solutions and automating workflows.
                I specialize in creating efficient cloud infrastructures.
              </p>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-1">
                  Infrastructure Architect
                </h3>
                <p className="text-gray-500 dark:text-gray-400 italic">
                  "Bridging the gap between development and operations."
                </p>
              </div>
              <Button
                onClick={() => scrollToSection("projects")}
                className="px-6 py-3 text-lg"
              >
                See My Work <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-2">
              About Me
            </h2>
            <p className="text-xl text-center text-blue-600 dark:text-blue-400 mb-12">
              My journey in Cloud and DevOps
            </p>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 shadow-lg">
              <p className="text-gray-700 dark:text-gray-200 text-lg mb-6 leading-relaxed">
                I have completed my Master's in Computer Application with a
                focus on Cloud Computing and DevOps. I've worked on real-world
                projects across AWS, Azure, and GCP, and I'm passionate about
                optimizing infrastructure and automating deployments.
              </p>
              <p className="text-gray-700 dark:text-gray-200 text-lg mb-8 leading-relaxed">
                My experience includes designing scalable cloud architectures,
                implementing CI/CD pipelines, and working with containerization
                technologies. I'm constantly exploring new tools and
                methodologies to improve development workflows and system
                reliability.
              </p>
              <div className="flex justify-center">
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" /> Download Resume
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-2">
              Tools I Know
            </h2>
            <p className="text-xl text-center text-blue-600 dark:text-blue-400 mb-12">
              Technologies I've been working with
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <span className="text-4xl mb-3">{tool.icon}</span>
                      <h3 className="text-lg font-medium text-gray-800 dark:text-white text-center">
                        {tool.name}
                      </h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-2">
              Projects
            </h2>
            <p className="text-xl text-center text-blue-600 dark:text-blue-400 mb-12">
              Explore my latest work in Cloud and DevOps
            </p>

            <ProjectsSection />
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section
        id="achievements"
        className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-2">
              Achievements
            </h2>
            <p className="text-xl text-center text-blue-600 dark:text-blue-400 mb-12">
              My professional certifications journey
            </p>

            <AchievementsTimeline />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-2">
              Contact Me
            </h2>
            <p className="text-xl text-center text-blue-600 dark:text-blue-400 mb-12">
              Let's connect and discuss how we can work together
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              <ContactForm />

              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  Get In Touch
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Email
                      </p>
                      <p className="text-gray-800 dark:text-white">
                        rajputmaniratnam@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Phone
                      </p>
                      <p className="text-gray-800 dark:text-white">
                        +91 9534443341
                      </p>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      Connect with me on social media
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                      >
                        <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </a>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                      >
                        <Github className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-800 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-1">Mani Ratnam</h2>
              <p className="text-gray-400">
                Cloud Engineer & DevOps Enthusiast
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">
                  rajputmaniratnam@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">+91 9534443341</span>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-700" />

          <p className="text-center text-gray-500 text-sm">
            © 2025 Mani Ratnam. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
