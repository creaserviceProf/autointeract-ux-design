
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'Projects', href: '#projects' },
  { name: 'Process', href: '#process' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Calculate which section is currently in view
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.reduce((closest, section) => {
        const element = document.getElementById(section);
        if (!element) return closest;
        
        const rect = element.getBoundingClientRect();
        const offset = Math.abs(rect.top);
        
        if (offset < window.innerHeight / 2) {
          return section;
        }
        
        return closest;
      }, activeSection);
      
      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'py-3 glass-panel bg-card/80 backdrop-blur-md border-b border-border/50' : 'py-5 bg-transparent'
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-display font-bold tracking-tight text-gradient">
          DESIGN<span className="text-foreground">CRAFT</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                'nav-link font-medium text-sm tracking-wider',
                activeSection === item.href.substring(1) ? 'active' : ''
              )}
            >
              {item.name.toUpperCase()}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        'fixed inset-0 z-40 bg-background/95 backdrop-blur-lg flex flex-col justify-center items-center md:hidden transition-all duration-300 ease-in-out',
        mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      )}>
        <nav className="flex flex-col space-y-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                'text-2xl font-medium nav-link',
                activeSection === item.href.substring(1) ? 'active' : ''
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
