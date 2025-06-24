
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Ghazi <span className="text-primary">Yassine</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Software Engineer & Cloud Architect
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about building secure, scalable web applications and automating cloud infrastructure. 
            Experienced in Oracle technologies, full-stack development, and DevOps practices.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="text-lg px-8 py-3"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-3"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://github.com/Ghaziyassine" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://linkedin.com/in/yassine-ghazi-b18417258" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:ghaziyassine@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  );
};

export default Hero;
