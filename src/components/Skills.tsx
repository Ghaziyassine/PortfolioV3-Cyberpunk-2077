
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Bash", "Python", "JavaScript", "TypeScript", "Java", "SQL", "PL/SQL"]
    },
    {
      title: "Frameworks & Platforms",
      skills: ["React", "NestJS", "Express", "Tailwind CSS", "Flask", "Spring Boot"]
    },
    {
      title: "Databases",
      skills: ["Oracle (APEX, PL/SQL, ORDS)", "MongoDB", "MySQL"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["Oracle Cloud Infrastructure", "AWS", "Docker", "Terraform", "Git", "Vercel", "Firebase"]
    },
    {
      title: "Security & Identity",
      skills: ["Keycloak (SSO and RBAC)", "JWT"]
    },
    {
      title: "Tools & Other",
      skills: ["Oracle ORDS", "SQL Developer", "GridFS", "Postman", "Agile", "Scrum"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning full-stack development, cloud infrastructure, 
            and enterprise database technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
