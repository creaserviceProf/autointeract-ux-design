
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.1),transparent_40%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(255,215,0,0.05),transparent_40%)]"></div>
      </div>

      <div className="container max-w-3xl mx-auto px-6 py-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center glass-panel p-10 md:p-16"
        >
          <span className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 border border-primary/20 text-primary-foreground mb-6 inline-block">
            ERROR 404
          </span>

          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
            <span className="text-gradient">Page Not Found</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-lg mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <a 
            href="/" 
            className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 inline-flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Return to Home
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
