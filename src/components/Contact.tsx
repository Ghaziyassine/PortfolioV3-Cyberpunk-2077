
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having 
            a conversation about technology and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <CardContent>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <a 
                      href="mailto:ghaziyassine@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      ghaziyassine@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Linkedin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/yassine-ghazi-b18417258"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      yassine-ghazi-b18417258
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Github className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">GitHub</h4>
                    <a 
                      href="https://github.com/Ghaziyassine"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Ghaziyassine
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent>
              <h3 className="text-2xl font-bold text-foreground mb-6">Quick Message</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <Button className="w-full">
                  Send Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
