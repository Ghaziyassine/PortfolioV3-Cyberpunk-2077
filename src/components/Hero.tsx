
import { ArrowDown, Github, Linkedin, Mail, Zap, Terminal, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [glitchText, setGlitchText] = useState('Ghazi Yassine');
  const [typedText, setTypedText] = useState('');
  const fullText = 'Neural Network Engineer // Cloud Architect // Code Synthesizer';

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
      const originalText = 'Ghazi Yassine';
      let glitched = '';
      
      for (let i = 0; i < originalText.length; i++) {
        if (Math.random() < 0.1) {
          glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)];
        } else {
          glitched += originalText[i];
        }
      }
      
      setGlitchText(glitched);
      
      setTimeout(() => setGlitchText('Ghazi Yassine'), 100);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid">
      {/* Animated Data Streams */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="data-stream"
          style={{
            left: `${20 + i * 20}%`,
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}

      {/* Background Neural Network Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-secondary rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 border border-accent rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Futuristic Avatar/Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-2 neon-border flex items-center justify-center animate-pulse-neon">
                <Terminal className="w-16 h-16 text-primary animate-neon-glow" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center animate-bounce">
                <Zap className="w-4 h-4 text-background" />
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-neon-glow">
            <span className="text-glitch text-primary" data-text={glitchText}>
              {glitchText}
            </span>
          </h1>
          
          <div className="text-2xl md:text-4xl mb-8 h-12 flex items-center justify-center">
            <span className="text-secondary font-mono">
              {typedText}
              <span className="animate-ping text-accent">|</span>
            </span>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary animate-neon-glow">2077</div>
              <div className="text-sm text-muted-foreground">BUILD VERSION</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary animate-neon-glow">∞</div>
              <div className="text-sm text-muted-foreground">NEURAL CAPACITY</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent animate-neon-glow">100%</div>
              <div className="text-sm text-muted-foreground">SYSTEM INTEGRITY</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 neon-border bg-primary/10 hover:bg-primary/20 text-primary animate-pulse-neon font-mono"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Cpu className="mr-2" />
              INITIALIZE_PORTFOLIO.exe
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 neon-border border-secondary text-secondary hover:bg-secondary/10 font-mono"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Terminal className="mr-2" />
              ESTABLISH_CONNECTION
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8">
            {[
              { icon: Github, href: "https://github.com/Ghaziyassine", color: "text-primary" },
              { icon: Linkedin, href: "https://linkedin.com/in/yassine-ghazi-b18417258", color: "text-secondary" },
              { icon: Mail, href: "mailto:ghaziyassine@gmail.com", color: "text-accent" }
            ].map(({ icon: Icon, href, color }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${color} hover:scale-110 transition-all duration-300 animate-pulse-neon`}
              >
                <div className="w-12 h-12 rounded-full border neon-border flex items-center justify-center hover:bg-current/10">
                  <Icon size={24} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-primary animate-neon-glow">
          <ArrowDown size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
