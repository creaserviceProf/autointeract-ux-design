
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Figma, 
  Layers, 
  Lightbulb, 
  MousePointer, 
  LineChart, 
  Monitor, 
  Smartphone, 
  Target
} from 'lucide-react';

// Skill categories
const skillCategories = [
  {
    title: 'Design Tools',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Illustrator', 'Photoshop', 'After Effects', 'InVision', 'Principle']
  },
  {
    title: 'UX Methods',
    skills: ['User Research', 'Information Architecture', 'Wireframing', 'User Flows', 'Usability Testing', 'A/B Testing', 'Heuristic Evaluation']
  },
  {
    title: 'Development',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'Framer Motion', 'GSAP', 'Responsive Design', 'Accessibility']
  }
];

// Core competencies
const competencies = [
  {
    icon: MousePointer,
    title: 'Interaction Design',
    description: 'Creating intuitive and engaging interactions that enhance the driving and ownership experience.',
    color: 'bg-blue-500/10 text-blue-500'
  },
  {
    icon: Monitor,
    title: 'Interface Design',
    description: 'Designing clean, functional interfaces that balance aesthetic appeal with usability requirements.',
    color: 'bg-purple-500/10 text-purple-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile Design',
    description: 'Crafting companion mobile experiences that extend the vehicle ecosystem to smartphones and tablets.',
    color: 'bg-green-500/10 text-green-500'
  },
  {
    icon: Figma,
    title: 'Prototyping',
    description: 'Building high-fidelity interactive prototypes that effectively communicate the intended experience.',
    color: 'bg-orange-500/10 text-orange-500'
  },
  {
    icon: Layers,
    title: 'Design Systems',
    description: 'Developing comprehensive design systems that ensure consistency across various touchpoints.',
    color: 'bg-red-500/10 text-red-500'
  },
  {
    icon: LineChart,
    title: 'Analytics & Testing',
    description: 'Using data and user testing to validate design decisions and optimize experiences.',
    color: 'bg-cyan-500/10 text-cyan-500'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Exploring new interaction paradigms and interfaces for next-generation automotive experiences.',
    color: 'bg-yellow-500/10 text-yellow-500'
  },
  {
    icon: Target,
    title: 'User-Centered Design',
    description: 'Placing driver and passenger needs at the center of the design process to create meaningful experiences.',
    color: 'bg-sky-500/10 text-sky-500'
  }
];

// Custom progress bar with animation
const ProgressBar = ({ skill, index }: { skill: string; index: number }) => {
  const progressRef = useRef(null);
  const inView = useInView(progressRef, { once: true, margin: "-100px" });
  
  // Generate a percentage based on the skill name length (just for demonstration)
  const getPercentage = () => {
    const length = skill.length;
    const base = 70; // Base percentage
    const variance = skill.charCodeAt(0) % 25; // Some variance
    return Math.min(95, base + variance);
  };
  
  const percentage = getPercentage();
  
  return (
    <div ref={progressRef} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{skill}</span>
        <span className="text-sm font-medium">{percentage}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${percentage}%` : 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 border border-primary/20 text-primary-foreground mb-4 inline-block">
              EXPERTISE
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Skills & Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of design skills and automotive industry knowledge that enables me to create exceptional user experiences.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-6"
            >
              <h3 className="text-xl font-display font-semibold mb-6 text-center">{category.title}</h3>
              <div>
                {category.skills.map((skill, index) => (
                  <ProgressBar key={skill} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-display font-semibold"
          >
            Core Competencies
          </motion.h3>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {competencies.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="p-6 text-center hover-card bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg"
            >
              <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center mx-auto mb-4`}>
                <item.icon size={24} />
              </div>
              <h4 className="text-lg font-display font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
