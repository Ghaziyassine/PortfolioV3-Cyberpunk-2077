
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Software Solutions Architect Intern",
      company: "AtlantaSanad Assurance",
      location: "Casablanca, Morocco",
      period: "Feb. 2025 -- July 2025",
      description: [
        "Designed and implemented a KPI-based evaluation system for automotive experts, integrated into Oracle Cloud infrastructure using Oracle APEX and ORDS.",
        "Developed PL/SQL packages, materialized views, and stored procedures to process large-scale transactional data, automating evaluation and compliance workflows.",
        "Built an ETL process using PL/SQL to feed an Oracle-based data warehouse for performance analysis and reporting.",
        "Delivered a fully functional secure web platform integrated with OCI stack, including dashboards and BI visualizations for internal stakeholders."
      ],
      tech: ["Oracle APEX", "Oracle Database", "PL/SQL", "ORDS", "Tomcat", "SQL Developer", "HTML", "CSS", "JS"]
    },
    {
      title: "Full Stack Software Engineer Intern",
      company: "MARS IT",
      location: "Casablanca, Morocco",
      period: "Jul. 2024 -- Sept. 2024",
      description: [
        "Contributed to the development of a cloud-based document management system (GED) for Dar Assalaf, featuring smart trash recovery, versioning, and role-based access.",
        "Designed and built REST APIs with Express and MongoDB, implemented state management with Redux, and enhanced security using Keycloak.",
        "Deployed and containerized services with Docker, integrated MongoDB GridFS for file storage, and used Postman for automated testing."
      ],
      tech: ["React.js", "Node.js", "Express", "MongoDB", "GridFS", "Docker", "Keycloak", "GitLab", "Tailwind CSS"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                    <h4 className="text-xl text-primary font-semibold">{exp.company}</h4>
                    <p className="text-muted-foreground">{exp.location}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-muted-foreground leading-relaxed flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div>
                  <h5 className="font-semibold text-foreground mb-3">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
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
