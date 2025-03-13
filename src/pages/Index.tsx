
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

// Cursor tracker component
const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor') as HTMLElement;
    const links = document.querySelectorAll('a, button');
    
    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const growCursor = () => {
      cursor.classList.add('grow');
    };

    const shrinkCursor = () => {
      cursor.classList.remove('grow');
    };

    document.addEventListener('mousemove', moveCursor);
    
    links.forEach(link => {
      link.addEventListener('mouseenter', growCursor);
      link.addEventListener('mouseleave', shrinkCursor);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      links.forEach(link => {
        link.removeEventListener('mouseenter', growCursor);
        link.removeEventListener('mouseleave', shrinkCursor);
      });
    };
  }, []);

  return <div className="custom-cursor"></div>;
};

const Index = () => {
  useEffect(() => {
    // Add custom styles for cursor
    const style = document.createElement('style');
    style.textContent = `
      body {
        cursor: none;
      }
      
      .custom-cursor {
        pointer-events: none;
        position: fixed;
        width: 12px;
        height: 12px;
        background-color: hsl(var(--primary));
        border-radius: 50%;
        transform: translate(-50%, -50%);
        z-index: 9999;
        transition: width 0.2s, height 0.2s, background-color 0.2s;
        mix-blend-mode: difference;
      }
      
      .custom-cursor.grow {
        width: 36px;
        height: 36px;
        background-color: hsl(var(--primary));
        mix-blend-mode: difference;
      }
      
      @media (max-width: 768px) {
        body {
          cursor: auto;
        }
        
        .custom-cursor {
          display: none;
        }
      }
    `;
    document.head.appendChild(style);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      });
    });

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Process />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
