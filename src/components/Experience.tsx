
import { Card, CardContent } from '@/components/ui/card';
import { Building, Calendar, MapPin, Zap, Database, Code } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Solutions Architect Intern",
      company: "AtlantaSanad Assurance",
      location: "Casablanca, Morocco",
      period: "Feb. 2025 -- July 2025",
      status: "CURRENT_PROCESS",
      description: [
        "Designed quantum KPI evaluation system for automotive experts, integrated into Oracle Cloud neural network using APEX and ORDS protocols.",
        "Developed advanced PL/SQL neural packages, materialized views, and autonomous procedures for large-scale data processing and compliance automation.",
        "Built ETL quantum pipeline using PL/SQL to feed Oracle-based data warehouse for predictive analysis and neural reporting.",
        "Delivered fully secure web platform integrated with OCI stack, including holographic dashboards and BI visualizations."
      ],
      tech: ["Oracle APEX", "Oracle Database", "PL/SQL", "ORDS", "Tomcat", "SQL Developer", "HTML", "CSS", "JS"],
      color: "primary"
    },
    {
      title: "Full Stack Software Engineer Intern",
      company: "MARS IT",
      location: "Casablanca, Morocco",
      period: "Jul. 2024 -- Sept. 2024",
      status: "COMPLETED",
      description: [
        "Contributed to quantum document management system (GED) for Dar Assalaf, featuring smart trash recovery, versioning, and role-based neural access.",
        "Designed and built REST API neural networks with Express and MongoDB, implemented quantum state management with Redux, enhanced security using Keycloak protocols.",
        "Deployed and containerized services with Docker neural containers, integrated MongoDB GridFS for quantum file storage, used Postman for automated neural testing."
      ],
      tech: ["React.js", "Node.js", "Express", "MongoDB", "GridFS", "Docker", "Keycloak", "GitLab", "Tailwind CSS"],
      color: "secondary"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold font-mono mb-4">
            <span className="text-primary animate-neon-glow">{'<'}</span>
            <span className="text-foreground">WORK_HISTORY</span>
            <span className="text-primary animate-neon-glow">{'/>'}</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8 animate-pulse-neon"></div>
          <p className="text-lg text-muted-foreground font-mono">
            // Professional neural network execution records
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <Card key={index} className="neon-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hologram">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <Building className={`w-6 h-6 text-${exp.color}`} />
                      <h3 className="text-2xl font-bold text-foreground font-mono">{exp.title}</h3>
                    </div>
                    
                    <h4 className={`text-xl text-${exp.color} font-semibold font-mono mb-2`}>
                      {exp.company}
                    </h4>
                    
                    <div className="flex items-center space-x-4 text-muted-foreground font-mono">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 lg:mt-0">
                    <div className={`inline-flex items-center space-x-2 px-4 py-2 neon-border bg-${exp.color}/10 rounded font-mono`}>
                      <div className={`w-2 h-2 bg-${exp.color} rounded-full animate-pulse`}></div>
                      <span className={`text-${exp.color} text-sm`}>{exp.status}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {exp.description.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3 text-muted-foreground leading-relaxed font-mono">
                      <div className={`w-2 h-2 bg-${exp.color} rounded-full mt-2 flex-shrink-0 animate-pulse`}></div>
                      <span className="text-sm">
                        <span className={`text-${exp.color}`}>{'> '}</span>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Code className={`w-5 h-5 text-${exp.color}`} />
                    <h5 className="font-semibold text-foreground font-mono">NEURAL_TECH_STACK:</h5>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {exp.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 bg-${exp.color}/10 text-${exp.color} text-xs rounded font-mono border border-${exp.color}/20 hover:border-${exp.color}/50 transition-all duration-300`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className={`text-2xl font-bold text-${exp.color} font-mono animate-neon-glow`}>
                        {index === 0 ? '100%' : '95%'}
                      </div>
                      <div className="text-xs text-muted-foreground font-mono">EFFICIENCY</div>
                    </div>
                    <div>
                      <div className={`text-2xl font-bold text-${exp.color} font-mono animate-neon-glow`}>
                        {index === 0 ? 'A+' : 'A'}
                      </div>
                      <div className="text-xs text-muted-foreground font-mono">PERFORMANCE</div>
                    </div>
                    <div>
                      <div className={`text-2xl font-bold text-${exp.color} font-mono animate-neon-glow`}>
                        {index === 0 ? 'ACTIVE' : 'COMPLETE'}
                      </div>
                      <div className="text-xs text-muted-foreground font-mono">STATUS</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
