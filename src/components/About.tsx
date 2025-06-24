
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Software Engineer with practical experience in full-stack development and cloud technologies. 
              Currently completing my Engineering Degree at ENSA El Jadida, I specialize in building secure and 
              scalable web applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans across Oracle technologies, including APEX and PL/SQL, as well as modern 
              frameworks like React and NestJS. I'm passionate about operational excellence and automation, 
              with a strong focus on cloud infrastructure and database optimization.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Based in Casablanca, Morocco, I'm highly motivated to contribute to autonomous infrastructure 
              and database automation projects, bringing strong problem-solving skills and a commitment to 
              continuous learning.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Location</h4>
                <p className="text-muted-foreground">Casablanca, Morocco</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Languages</h4>
                <p className="text-muted-foreground">Arabic, French, English</p>
              </div>
            </div>
          </div>

          <Card className="p-8">
            <CardContent className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">Certifications</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">Oracle Cloud Infrastructure 2024</h4>
                  <p className="text-sm text-muted-foreground">Generative AI Certified Professional</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground">AWS Academy</h4>
                  <p className="text-sm text-muted-foreground">Cloud Foundations & Security</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground">AWS Engineering</h4>
                  <p className="text-sm text-muted-foreground">Operations Technician</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h4 className="font-semibold text-foreground mb-2">Interests</h4>
                <p className="text-muted-foreground text-sm">
                  Cloud automation, Performance engineering, Open-source contribution, 
                  Cybersecurity, Gaming
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
