
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully",
        description: "Thank you for reaching out! I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'contact@designcraft.com',
      link: 'mailto:contact@designcraft.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Los Angeles, California',
      link: '#',
    },
  ];

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
    <section id="contact" className="py-20 md:py-32 relative bg-muted overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.2),transparent_50%)]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 border border-primary/20 text-primary-foreground mb-4 inline-block">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to discuss collaboration opportunities? 
              I'm always interested in new challenges in the automotive design space.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass-panel p-8">
              <h3 className="text-xl font-display font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md transition-all hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send size={16} className="mr-2" />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="glass-panel p-8 h-full">
              <h3 className="text-xl font-display font-semibold mb-6">Contact Information</h3>
              <motion.div 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    variants={itemVariants}
                    className="flex items-start p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-all"
                  >
                    <div className={`w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4`}>
                      <info.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">{info.title}</h4>
                      <p className="text-muted-foreground">{info.details}</p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {['dribbble', 'linkedin', 'instagram', 'behance'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center transition-all hover:bg-primary hover:text-primary-foreground"
                      aria-label={`Follow on ${platform}`}
                    >
                      <img 
                        src={`https://cdn.simpleicons.org/${platform}/white`} 
                        alt={platform} 
                        className="w-5 h-5"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
