
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

// Mock project data
const projects = [
  {
    id: 1,
    title: 'Tesla Interface Redesign',
    description: 'A complete overhaul of the in-car dashboard experience, focusing on minimalism and user-focused interactions.',
    tags: ['UI Design', 'User Research', 'Prototyping'],
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop',
    color: 'from-blue-600/20 to-purple-600/20'
  },
  {
    id: 2,
    title: 'Porsche Connect App',
    description: 'Reimagining the mobile companion app with premium interactions and real-time vehicle status monitoring.',
    tags: ['Mobile Design', 'Motion Design', 'UX Research'],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop',
    color: 'from-red-600/20 to-orange-600/20'
  },
  {
    id: 3,
    title: 'Audi Virtual Cockpit',
    description: 'Enhanced driver-focused interface with contextual awareness and adaptive information hierarchy.',
    tags: ['UI Design', 'Information Architecture', 'Interaction Design'],
    image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=2070&auto=format&fit=crop',
    color: 'from-green-600/20 to-teal-600/20'
  },
  {
    id: 4,
    title: 'BMW iDrive Concept',
    description: 'Next-generation infotainment system with gesture control and personalized user experiences.',
    tags: ['Concept Design', 'Gesture Control', 'User Testing'],
    image: 'https://images.unsplash.com/photo-1610647752706-3bb12232b3e4?q=80&w=2070&auto=format&fit=crop',
    color: 'from-yellow-600/20 to-amber-600/20'
  }
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const nextProject = () => {
    if (isAnimating) return;
    setDirection(1);
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    if (isAnimating) return;
    setDirection(-1);
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Auto-scroll projects
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      nextProject();
    }, 7000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeIndex, isAnimating]);

  // Reset interval on user interaction
  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      nextProject();
    }, 7000);
  };

  const handleNavClick = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setIsAnimating(true);
    setActiveIndex(index);
    resetInterval();
  };

  const currentProject = projects[activeIndex];

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${currentProject.color} opacity-20 transition-all duration-1000`}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 border border-primary/20 text-primary-foreground mb-4 inline-block">
              FEATURED WORK
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Automotive Design Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my most innovative work in the automotive sector, showcasing the intersection of beautiful design and exceptional user experience.
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-xl glass-panel aspect-[16/9] shadow-2xl">
            <AnimatePresence initial={false} mode="wait" onExitComplete={() => setIsAnimating(false)}>
              <motion.div
                key={activeIndex}
                initial={{ 
                  x: direction > 0 ? '100%' : '-100%', 
                  opacity: 0 
                }}
                animate={{ 
                  x: 0, 
                  opacity: 1,
                  transition: { 
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.5 }
                  }
                }}
                exit={{ 
                  x: direction > 0 ? '-100%' : '100%', 
                  opacity: 0,
                  transition: { 
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.5 }
                  }
                }}
                className="absolute inset-0 w-full h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent z-10"></div>
                <img 
                  src={currentProject.image} 
                  alt={currentProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-4">
                      {currentProject.title}
                    </h3>
                    <p className="text-muted-foreground max-w-2xl mb-6">
                      {currentProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {currentProject.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a 
                      href="#" 
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      <span className="mr-2">View case study</span>
                      <ExternalLink size={16} />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-between items-center mt-8">
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-muted hover:bg-muted-foreground'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => {
                  prevProject();
                  resetInterval();
                }}
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-all"
                aria-label="Previous project"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => {
                  nextProject();
                  resetInterval();
                }}
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-all"
                aria-label="Next project"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
