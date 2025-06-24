
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Database, Cloud, Code, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "NEURAL_KPI_EVALUATOR",
      description: "Quantum-grade evaluation matrix for automotive neural experts built with Oracle APEX and integrated with OCI quantum infrastructure. Features autonomous workflows, compliance tracking, and comprehensive BI neural dashboards.",
      tech: ["Oracle APEX", "PL/SQL", "ORDS", "OCI", "SQL Developer"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      type: "ENTERPRISE_NEURAL",
      status: "OPERATIONAL",
      color: "primary"
    },
    {
      title: "QUANTUM_DOC_MATRIX",
      description: "Scalable document management quantum platform with smart trash recovery, version control, and role-based neural access. Implemented microservices architecture with Docker neural containerization.",
      tech: ["React.js", "Node.js", "MongoDB", "Docker", "Keycloak"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      type: "FULL_STACK_NEURAL",
      status: "ACTIVE",
      color: "secondary"
    },
    {
      title: "CLOUD_AUTO_PROTOCOL",
      description: "Automated deployment neural pipelines and infrastructure as quantum code solutions using Terraform and cloud-native technologies. Focus on scalability and operational excellence in the neural cloud.",
      tech: ["Terraform", "AWS", "OCI", "Docker", "Bash"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      type: "DEVOPS_NEURAL",
      status: "EVOLVING",
      color: "accent"
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 relative">
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold font-mono mb-4">
            <span className="text-primary animate-neon-glow">{'<'}</span>
            <span className="text-foreground">PROJECT_ARCHIVE</span>
            <span className="text-primary animate-neon-glow">{'/>'}</span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6 sm:mb-8 animate-pulse-neon"></div>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-3xl mx-auto font-mono">
            // Showcase of enterprise neural solutions and quantum applications demonstrating 
            // expertise in cloud architecture, database optimization, and neural web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden neon-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group hologram">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                
                {/* Project Type Badge */}
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                  <span className={`px-2 sm:px-3 py-1 bg-${project.color} text-background text-xs font-mono font-bold rounded neon-border animate-pulse-neon`}>
                    {project.type}
                  </span>
                </div>
                
                {/* Status Indicator */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                  <div className={`flex items-center space-x-1 px-2 py-1 bg-background/80 rounded text-${project.color} text-xs font-mono`}>
                    <div className={`w-2 h-2 bg-${project.color} rounded-full animate-pulse`}></div>
                    <span>{project.status}</span>
                  </div>
                </div>

                {/* Overlay Icons */}
                <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.type.includes('NEURAL') && <Database className={`w-5 h-5 sm:w-6 sm:h-6 text-${project.color}`} />}
                  {project.type.includes('CLOUD') && <Cloud className={`w-5 h-5 sm:w-6 sm:h-6 text-${project.color}`} />}
                  <Code className={`w-5 h-5 sm:w-6 sm:h-6 text-${project.color}`} />
                </div>
              </div>
              
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-2 mb-2 sm:mb-3">
                  <Zap className={`w-4 h-4 sm:w-5 sm:h-5 text-${project.color} animate-pulse`} />
                  <h3 className="text-base sm:text-xl font-bold text-foreground font-mono">{project.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm font-mono">
                  <span className={`text-${project.color}`}>{'> '}</span>
                  {project.description}
                </p>
                
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <h4 className="text-xs font-mono text-muted-foreground">TECH_STACK:</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-1.5 sm:px-2 py-0.5 sm:py-1 bg-${project.color}/10 text-${project.color} text-xs rounded font-mono border border-${project.color}/20`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mb-3 sm:mb-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={`flex items-center gap-1 sm:gap-2 neon-border border-${project.color} text-${project.color} hover:bg-${project.color}/10 font-mono text-xs flex-1`}
                  >
                    <Github size={12} className="sm:w-3.5 sm:h-3.5" />
                    <span className="hidden sm:inline">SOURCE_CODE</span>
                    <span className="sm:hidden">CODE</span>
                  </Button>
                  <Button 
                    size="sm"
                    className={`bg-${project.color}/10 text-${project.color} hover:bg-${project.color}/20 neon-border font-mono text-xs flex-1`}
                  >
                    <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5 mr-1" />
                    <span className="hidden sm:inline">NEURAL_LINK</span>
                    <span className="sm:hidden">DEMO</span>
                  </Button>
                </div>

                {/* Performance Metrics */}
                <div className="pt-3 sm:pt-4 border-t border-border">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className={`text-sm sm:text-lg font-bold text-${project.color} font-mono`}>
                        {95 + index * 2}%
                      </div>
                      <div className="text-xs text-muted-foreground font-mono">EFFICIENCY</div>
                    </div>
                    <div>
                      <div className={`text-sm sm:text-lg font-bold text-${project.color} font-mono`}>
                        {8 + index}/10
                      </div>
                      <div className="text-xs text-muted-foreground font-mono">NEURAL_SCORE</div>
                    </div>
                    <div>
                      <div className={`text-sm sm:text-lg font-bold text-${project.color} font-mono animate-neon-glow`}>
                        ∞
                      </div>
                      <div className="text-xs text-muted-foreground font-mono">POTENTIAL</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Archive Status */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="inline-flex items-center space-x-2 sm:space-x-4 px-4 sm:px-6 py-2 sm:py-3 neon-border bg-card/50 rounded font-mono">
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-primary rounded-full animate-pulse"></div>
            <span className="text-muted-foreground text-xs sm:text-sm">ARCHIVE_STATUS:</span>
            <span className="text-primary animate-neon-glow text-xs sm:text-sm">{projects.length} NEURAL_PROJECTS ACTIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
