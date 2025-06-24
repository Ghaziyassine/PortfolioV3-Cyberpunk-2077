
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Cloud, Shield, Wrench, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "CORE_LANGUAGES",
      icon: Code,
      skills: ["Bash", "Python", "JavaScript", "TypeScript", "Java", "SQL", "PL/SQL"],
      color: "primary"
    },
    {
      title: "FRAMEWORKS_SYS",
      icon: Cpu,
      skills: ["React", "NestJS", "Express", "Tailwind CSS", "Flask", "Spring Boot"],
      color: "secondary"
    },
    {
      title: "DATABASE_CORE",
      icon: Database,
      skills: ["Oracle (APEX, PL/SQL, ORDS)", "MongoDB", "MySQL"],
      color: "accent"
    },
    {
      title: "CLOUD_MATRIX",
      icon: Cloud,
      skills: ["Oracle Cloud Infrastructure", "AWS", "Docker", "Terraform", "Git", "Vercel", "Firebase"],
      color: "primary"
    },
    {
      title: "SECURITY_NET",
      icon: Shield,
      skills: ["Keycloak (SSO and RBAC)", "JWT"],
      color: "secondary"
    },
    {
      title: "DEV_TOOLS",
      icon: Wrench,
      skills: ["Oracle ORDS", "SQL Developer", "GridFS", "Postman", "Agile", "Scrum"],
      color: "accent"
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold font-mono mb-4">
            <span className="text-primary animate-neon-glow">{'<'}</span>
            <span className="text-foreground">NEURAL_MODULES</span>
            <span className="text-primary animate-neon-glow">{'/>'}</span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6 sm:mb-8 animate-pulse-neon"></div>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-3xl mx-auto font-mono">
            // Comprehensive neural network spanning quantum development, cloud infrastructure, 
            // and enterprise database protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="neon-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group hologram"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded border neon-border flex items-center justify-center animate-pulse-neon text-${category.color}`}>
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="text-sm sm:text-xl font-bold text-foreground font-mono">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className={`px-2 sm:px-3 py-1 sm:py-2 bg-${category.color}/10 text-${category.color} text-xs sm:text-sm rounded font-mono border border-${category.color}/20 hover:border-${category.color}/50 hover:bg-${category.color}/20 transition-all duration-300 group-hover:animate-pulse`}
                      >
                        <span className="text-xs opacity-60">{'> '}</span>
                        {skill}
                      </div>
                    ))}
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border">
                    <div className="flex justify-between text-xs font-mono mb-2">
                      <span className="text-muted-foreground">MODULE_STATUS</span>
                      <span className={`text-${category.color}`}>ACTIVE</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1">
                      <div 
                        className={`bg-${category.color} h-1 rounded-full animate-pulse-neon`}
                        style={{ width: `${85 + Math.random() * 15}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* System Status */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="inline-flex items-center space-x-2 sm:space-x-4 px-4 sm:px-6 py-2 sm:py-3 neon-border bg-card/50 rounded font-mono">
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-accent rounded-full animate-pulse"></div>
            <span className="text-muted-foreground text-xs sm:text-sm">SYSTEM STATUS:</span>
            <span className="text-accent animate-neon-glow text-xs sm:text-sm">ALL MODULES OPERATIONAL</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
