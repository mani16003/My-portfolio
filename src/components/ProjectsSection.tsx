import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: string;
  title: string;
  description: string;
  category: "Cloud" | "DevOps";
}

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const projects: Project[] = [
    // Cloud Projects
    {
      id: "static-web-hosting",
      title: "Static Web Hosting",
      description:
        "Implemented a scalable static website hosting solution using AWS S3 and CloudFront.",
      category: "Cloud",
    },
    {
      id: "instance-scaling",
      title: "Instance Scaling",
      description:
        "Designed and implemented auto-scaling groups for EC2 instances based on traffic patterns.",
      category: "Cloud",
    },
    {
      id: "backup-solutions",
      title: "Backup Solutions",
      description:
        "Created automated backup and recovery solutions for critical cloud resources.",
      category: "Cloud",
    },
    {
      id: "resource-tagging",
      title: "Resource Tagging",
      description:
        "Implemented comprehensive resource tagging strategy for cost allocation and management.",
      category: "Cloud",
    },
    {
      id: "elastic-load-balancer",
      title: "Elastic Load Balancer (ELB)",
      description:
        "Set up and configured ELB for high-availability web applications.",
      category: "Cloud",
    },
    {
      id: "database-scaling",
      title: "Database Scaling",
      description:
        "Implemented read replicas and sharding for database performance optimization.",
      category: "Cloud",
    },
    {
      id: "cloud-security",
      title: "Cloud Security",
      description:
        "Implemented security best practices and compliance measures for cloud infrastructure.",
      category: "Cloud",
    },
    {
      id: "serverless-application",
      title: "Serverless Application",
      description:
        "Built a serverless application using AWS Lambda, API Gateway, and DynamoDB.",
      category: "Cloud",
    },
    {
      id: "cdn",
      title: "Content Delivery Network (CDN)",
      description: "Optimized content delivery using CDN for global audience.",
      category: "Cloud",
    },
    {
      id: "data-migration",
      title: "Data Migration",
      description:
        "Successfully migrated on-premises data to cloud storage with minimal downtime.",
      category: "Cloud",
    },
    {
      id: "monitoring-alerts",
      title: "Monitoring & Alerts",
      description:
        "Set up comprehensive monitoring and alerting system using CloudWatch.",
      category: "Cloud",
    },
    {
      id: "high-availability",
      title: "High Availability Architecture",
      description:
        "Designed and implemented multi-AZ, fault-tolerant architecture for critical applications.",
      category: "Cloud",
    },

    // DevOps Projects
    {
      id: "ci-cd-pipeline",
      title: "Automated CI/CD Pipeline",
      description:
        "Built end-to-end CI/CD pipeline using Jenkins, Docker, and AWS.",
      category: "DevOps",
    },
    {
      id: "kubernetes-todo",
      title: "Kubernetes Todo App",
      description:
        "Deployed a containerized Todo application on Kubernetes cluster.",
      category: "DevOps",
    },
    {
      id: "persistent-volume",
      title: "Persistent Volume in Kubernetes",
      description:
        "Implemented persistent storage solutions for stateful applications in Kubernetes.",
      category: "DevOps",
    },
    {
      id: "ecommerce-deployment",
      title: "E-commerce Website Deployment",
      description:
        "Automated deployment of an e-commerce platform with blue-green deployment strategy.",
      category: "DevOps",
    },
    {
      id: "terraform-infrastructure",
      title: "Multi-Environment AWS Infrastructure with Terraform",
      description:
        "Created infrastructure as code for dev, staging, and production environments.",
      category: "DevOps",
    },
    {
      id: "k8s-microservice",
      title: "K8s-Microservice-FlaskApp-Deployment",
      description:
        "Deploy a Flask-based microservice architecture on Kubernetes with CI/CD and service discovery support.",
      category: "DevOps",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter(
          (project) => project.category.toLowerCase() === activeTab,
        );

  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <p className="text-muted-foreground">
            Explore my latest work in Cloud and DevOps
          </p>
        </div>

        <Tabs
          defaultValue="all"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="cloud">Cloud</TabsTrigger>
              <TabsTrigger value="devops">DevOps</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cloud" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="devops" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 bg-card">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <Badge
            variant={project.category === "Cloud" ? "secondary" : "default"}
          >
            {project.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm">
          {project.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="pt-2">
        <div className="text-xs text-muted-foreground">View details →</div>
      </CardFooter>
    </Card>
  );
};

export default ProjectsSection;
