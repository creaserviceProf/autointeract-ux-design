
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Search, 
  Palette, 
  Code, 
  TestTube, 
  Rocket 
} from 'lucide-react';

const processSteps = [
  {
    icon: Lightbulb,
    title: 'Discover',
    description: 'Defining the problem space and understanding user needs through research and stakeholder interviews.',
    color: 'bg-yellow-500/20 text-yellow-500'
  },
  {
    icon: Search,
    title: 'Research',
    description: 'Gathering insights through competitor analysis, user interviews, and industry trends.',
    color: 'bg-blue-500/20 text-blue-500'
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Creating wireframes, visual designs, and interactive prototypes with attention to every detail.',
    color: 'bg-purple-500/20 text-purple-500'
  },
  {
    icon: Code,
    title: 'Prototype',
    description: 'Developing high-fidelity interactive prototypes that simulate the real user experience.',
    color: 'bg-green-500/20 text-green-500'
  },
  {
    icon: TestTube,
    title: 'Test',
    description: 'User testing and iterative refinement to ensure the solution meets user needs and business goals.',
    color: 'bg-orange-500/20 text-orange-500'
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Delivering final designs with documentation and supporting the development process.',
    color: 'bg-sky-500/20 text-sky-500'
  }
];

const Process = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12
      }
    }
  };

  return (
    <section id="process" className="py-20 md:py-32 relative overflow-hidden bg-muted">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNNjAgMzBDNjAgNDYuNTcgNDYuNTcgNjAgMzAgNjBDMTMuNDMgNjAgMCA0Ni41NyAwIDMwQzAgMTMuNDMgMTMuNDMgMCAzMCAwQzQ2LjU3IDAgNjAgMTMuNDMgNjAgMzBaTTMwIDJDMTQuNTM2IDIgMiAxNC41MzYgMiAzMEMyIDQ1LjQ2NCAxNC41MzYgNTggMzAgNThDNDUuNDY0IDU4IDU4IDQ1LjQ2NCA1OCAzMEM1OCAxNC41MzYgNDUuNDY0IDIgMzAgMloiIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4wMyIvPgo8L3N2Zz4=')] opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 border border-primary/20 text-primary-foreground mb-4 inline-block">
              MY APPROACH
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Design Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A systematic and iterative approach to design that ensures exceptional results and alignment with both user needs and business objectives.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {processSteps.map((step, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-panel p-6 hover-card"
            >
              <div className={`w-12 h-12 rounded-lg ${step.color} flex items-center justify-center mb-4`}>
                <step.icon size={24} />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-display font-semibold mb-4">Why This Process Works</h3>
            <p className="text-muted-foreground mb-8">
              This methodical approach ensures that every design decision is informed by user needs, 
              technical feasibility, and business objectives. The result is an automotive interface 
              that not only looks beautiful but delivers a truly exceptional user experience.
            </p>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 inline-block"
            >
              Start a Project
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;
