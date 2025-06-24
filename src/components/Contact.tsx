
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Send, Terminal, Wifi } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "NEURAL_MAIL",
      value: "ghaziyassine@gmail.com",
      href: "mailto:ghaziyassine@gmail.com",
      status: "ACTIVE",
      color: "primary"
    },
    {
      icon: Linkedin,
      title: "LINKEDIN_NET",
      value: "yassine-ghazi-b18417258",
      href: "https://linkedin.com/in/yassine-ghazi-b18417258",
      status: "ONLINE",
      color: "secondary" 
    },
    {
      icon: Github,
      title: "CODE_REPOSITORY",
      value: "Ghaziyassine",
      href: "https://github.com/Ghaziyassine",
      status: "SYNCED",
      color: "accent"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold font-mono mb-4">
            <span className="text-primary animate-neon-glow">{'<'}</span>
            <span className="text-foreground">ESTABLISH_CONNECTION</span>
            <span className="text-primary animate-neon-glow">{'/>'}</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8 animate-pulse-neon"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-mono">
            // Always open to neural discussions about opportunities, collaborations, 
            // or quantum conversations about technology and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            <Card className="neon-border bg-card/50 backdrop-blur-sm hologram">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Terminal className="w-6 h-6 text-primary animate-pulse" />
                  <h3 className="text-2xl font-bold text-foreground font-mono">NEURAL_CHANNELS</h3>
                </div>
                
                <div className="space-y-6">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <div key={index} className="group">
                        <div className={`flex items-center space-x-4 p-4 neon-border bg-${method.color}/5 hover:bg-${method.color}/10 transition-all duration-300 rounded`}>
                          <div className={`w-12 h-12 rounded border neon-border flex items-center justify-center animate-pulse-neon text-${method.color}`}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground font-mono">{method.title}</h4>
                            <a 
                              href={method.href}
                              target={method.href.startsWith('http') ? '_blank' : undefined}
                              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className={`text-${method.color} hover:animate-neon-glow transition-all font-mono text-sm`}
                            >
                              {method.value}
                            </a>
                            <div className="flex items-center space-x-2 mt-1">
                              <div className={`w-2 h-2 bg-${method.color} rounded-full animate-pulse`}></div>
                              <span className={`text-xs text-${method.color} font-mono`}>{method.status}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Network Status */}
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center justify-between text-sm font-mono">
                    <div className="flex items-center space-x-2">
                      <Wifi className="w-4 h-4 text-accent animate-pulse" />
                      <span className="text-muted-foreground">CONNECTION_STATUS:</span>
                    </div>
                    <span className="text-accent animate-neon-glow">NEURAL_NETWORK_ACTIVE</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="neon-border bg-card/50 backdrop-blur-sm hologram">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Send className="w-6 h-6 text-secondary animate-pulse" />
                <h3 className="text-2xl font-bold text-foreground font-mono">QUANTUM_MESSAGE</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-mono text-foreground mb-2">
                    <span className="text-primary">{'> '}</span>
                    SENDER_NAME
                  </label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 neon-border bg-background/50 text-foreground font-mono focus:outline-none focus:bg-primary/5 transition-all duration-300"
                    placeholder="Enter neural identification..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-mono text-foreground mb-2">
                    <span className="text-secondary">{'> '}</span>
                    CONTACT_PROTOCOL
                  </label>
                  <input 
                    type="email"
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 neon-border bg-background/50 text-foreground font-mono focus:outline-none focus:bg-secondary/5 transition-all duration-300"
                    placeholder="neural.contact@quantum.net"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-mono text-foreground mb-2">
                    <span className="text-accent">{'> '}</span>
                    MESSAGE_CONTENT
                  </label>
                  <textarea 
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 neon-border bg-background/50 text-foreground font-mono focus:outline-none focus:bg-accent/5 transition-all duration-300 resize-none"
                    placeholder="Initialize quantum communication protocol..."
                  ></textarea>
                </div>
                
                <Button className="w-full neon-border bg-primary/10 hover:bg-primary/20 text-primary font-mono animate-pulse-neon">
                  <Send className="mr-2 w-4 h-4" />
                  TRANSMIT_MESSAGE.exe
                </Button>
              </div>

              {/* Transmission Status */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary font-mono animate-neon-glow">24/7</div>
                    <div className="text-xs text-muted-foreground font-mono">AVAILABILITY</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary font-mono animate-neon-glow">{'<1H'}</div>
                    <div className="text-xs text-muted-foreground font-mono">RESPONSE_TIME</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Status */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 px-6 py-3 neon-border bg-card/50 rounded font-mono">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <span className="text-muted-foreground">SYSTEM_READY:</span>
            <span className="text-accent animate-neon-glow">AWAITING_NEURAL_CONNECTION</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
