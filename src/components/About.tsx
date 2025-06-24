
import { Card, CardContent } from '@/components/ui/card';
import { User, MapPin, Globe, Award, Brain, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Neural Networks', value: '∞', icon: Brain },
    { label: 'Code Efficiency', value: '99.7%', icon: Zap },
    { label: 'System Uptime', value: '24/7', icon: User },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold font-mono mb-4">
            <span className="text-primary animate-neon-glow">&lt;</span>
            <span className="text-foreground">PROFILE</span>
            <span className="text-primary animate-neon-glow">/&gt;</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8 animate-pulse-neon"></div>
          <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
            // Initializing personal data matrix...
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed font-mono">
                <span className="text-primary">{'>'}</span> Software Engineer with integrated neural pathways for full-stack development 
                and quantum cloud technologies. Currently upgrading core systems at ENSA El Jadida, 
                specializing in secure and scalable web architectures.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-mono">
                <span className="text-secondary">{'>'}</span> My computational matrix spans Oracle technologies, including APEX and PL/SQL, 
                as well as next-gen frameworks like React and NestJS. Passionate about autonomous 
                infrastructure and database optimization protocols.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-mono">
                <span className="text-accent">{'>'}</span> Based in Casablanca Neural Hub, Morocco. Highly motivated to contribute to 
                self-governing infrastructure and automated database systems, with enhanced 
                problem-solving algorithms and continuous learning protocols.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 neon-border bg-card/50 hologram">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary animate-neon-glow" />
                  <div className="text-2xl font-bold text-primary font-mono">{stat.value}</div>
                  <div className="text-xs text-muted-foreground font-mono">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <MapPin className="text-primary w-5 h-5" />
                <div>
                  <h4 className="font-semibold text-foreground font-mono">LOCATION</h4>
                  <p className="text-muted-foreground text-sm font-mono">Casablanca, Morocco</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="text-secondary w-5 h-5" />
                <div>
                  <h4 className="font-semibold text-foreground font-mono">LANGUAGES</h4>
                  <p className="text-muted-foreground text-sm font-mono">AR, FR, EN</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="neon-border bg-card/50 backdrop-blur-sm hologram">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <Award className="text-primary w-6 h-6 animate-pulse" />
                <h3 className="text-2xl font-bold text-foreground font-mono">CERTIFICATIONS</h3>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 border-l-2 border-primary bg-primary/5">
                  <h4 className="font-semibold text-primary font-mono">Oracle Cloud Infrastructure 2024</h4>
                  <p className="text-sm text-muted-foreground font-mono">Generative AI Certified Professional</p>
                  <div className="text-xs text-accent font-mono mt-1">STATUS: VERIFIED</div>
                </div>
                
                <div className="p-4 border-l-2 border-secondary bg-secondary/5">
                  <h4 className="font-semibold text-secondary font-mono">AWS Academy Suite</h4>
                  <p className="text-sm text-muted-foreground font-mono">Cloud Foundations & Security & Operations</p>
                  <div className="text-xs text-accent font-mono mt-1">STATUS: ACTIVE</div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h4 className="font-semibold text-foreground mb-3 font-mono flex items-center">
                  <Brain className="w-4 h-4 mr-2 text-accent" />
                  NEURAL INTERESTS
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Cloud Automation', 'Performance Engineering', 'Open Source', 'Cybersecurity', 'Neural Gaming'].map((interest, index) => (
                    <span key={index} className="px-3 py-1 text-xs font-mono neon-border bg-accent/10 text-accent">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
