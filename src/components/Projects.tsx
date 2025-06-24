
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "KPI Evaluation System",
      description: "Enterprise-grade evaluation system for automotive experts built with Oracle APEX and integrated with OCI infrastructure. Features automated workflows, compliance tracking, and comprehensive BI dashboards.",
      tech: ["Oracle APEX", "PL/SQL", "ORDS", "OCI", "SQL Developer"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      type: "Enterprise Application"
    },
    {
      title: "Cloud Document Management System",
      description: "Scalable document management platform with smart trash recovery, version control, and role-based access. Implemented microservices architecture with Docker containerization.",
      tech: ["React.js", "Node.js", "MongoDB", "Docker", "Keycloak"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      type: "Full-Stack Application"
    },
    {
      title: "Cloud Infrastructure Automation",
      description: "Automated deployment pipelines and infrastructure as code solutions using Terraform and cloud-native technologies. Focus on scalability and operational excellence.",
      tech: ["Terraform", "AWS", "OCI", "Docker", "Bash"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      type: "DevOps & Cloud"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of enterprise solutions and full-stack applications demonstrating 
            expertise in cloud architecture, database optimization, and modern web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {project.type}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Github size={16} />
                    View Code
                  </Button>
                  <Button size="sm">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
