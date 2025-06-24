
import { useState, useEffect } from 'react';
import { Menu, X, Terminal, Zap } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#home', label: 'HOME', code: '0x001' },
    { href: '#about', label: 'PROFILE', code: '0x002' },
    { href: '#skills', label: 'MODULES', code: '0x003' },
    { href: '#experience', label: 'HISTORY', code: '0x004' },
    { href: '#projects', label: 'ARCHIVES', code: '0x005' },
    { href: '#contact', label: 'CONNECT', code: '0x006' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/90 backdrop-blur-md border-b border-primary/30' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded border neon-border flex items-center justify-center animate-pulse-neon">
              <Terminal className="text-primary w-5 h-5" />
            </div>
            <div className="text-xl font-bold font-mono">
              <span className="text-primary animate-neon-glow">GHAZI</span>
              <span className="text-secondary">.v2077</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative px-4 py-2 text-sm font-mono text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute top-0 right-0 text-xs text-accent opacity-50">
                  {item.code}
                </span>
                <div className="absolute inset-0 border border-transparent group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Connection Status */}
          <div className="hidden md:flex items-center space-x-2 text-xs font-mono">
            <Zap className="w-3 h-3 text-accent animate-pulse" />
            <span className="text-accent">ONLINE</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary p-2 neon-border rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-primary/30 cyber-grid">
            <div className="px-2 pt-2 pb-3 space-y-1 font-mono">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex justify-between items-center px-3 py-3 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 border-l-2 border-transparent hover:border-primary"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-accent">{item.code}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
