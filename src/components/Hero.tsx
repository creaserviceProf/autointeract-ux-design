
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const moveX = (clientX - centerX) / 20;
      const moveY = (clientY - centerY) / 20;
      
      parallaxRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Video Animated Background */}
      <AnimatedBackground />

      {/* Parallax Elements */}
      <div ref={parallaxRef} className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-32 left-10 w-64 h-64 border border-primary/20 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 border border-primary/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-primary/5 rounded-full"></div>
        <div className="absolute top-[20%] right-[15%] w-4 h-4 bg-primary/20 rounded-full"></div>
        <div className="absolute bottom-[25%] left-[20%] w-6 h-6 bg-primary/30 rounded-full"></div>
      </div>

      <div className="container relative z-10 px-6 py-10 md:py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <span className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 border border-primary/20 text-primary-foreground">
              UX / UI DESIGNER
            </span>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
          >
            <span className="block">Crafting Premium</span>
            <span className="text-gradient">Automotive Experiences</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl text-muted-foreground text-lg md:text-xl mb-10"
          >
            Specializing in creating exceptional user experiences and interfaces 
            for the automotive industry, with a focus on interaction design that 
            blends innovation with usability.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-md bg-secondary text-secondary-foreground font-medium transition-all border border-border hover:bg-secondary/80"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs font-medium text-muted-foreground mb-2">SCROLL</span>
        <div className="w-5 h-10 rounded-full border border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground animate-[pulse_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
