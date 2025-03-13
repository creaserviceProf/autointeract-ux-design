
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-card py-12 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a href="#hero" className="text-2xl font-display font-bold tracking-tight text-gradient mb-4 md:mb-0 inline-block">
              DESIGN<span className="text-foreground">CRAFT</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <span className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} DesignCraft. All rights reserved.
              </span>
              
              <button 
                onClick={scrollToTop}
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-all"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
