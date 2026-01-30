import { motion } from "framer-motion";
import heroImage from "@/assets/hero-prayer-plant.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Decorative leaves */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-mint/20 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-primary/10 blur-3xl" />
      
      <div className="container-width section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground mb-6"
            >
              🌿 The Complete Guide
            </motion.span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold text-foreground leading-tight mb-6">
              Prayer Plants:{" "}
              <span className="text-primary">The Living Art</span> That Moves With the Sun
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Discover the enchanting world of Maranta plants — where nature's artistry meets 
              the magic of movement. Your journey to becoming a prayer plant expert starts here.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("care-guide")}
                className="btn-primary text-lg"
              >
                Explore Prayer Plant Care
              </button>
              <button
                onClick={() => scrollToSection("what-is")}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-mint/30 to-primary/20 rounded-3xl blur-xl" />
              <div className="relative image-botanical animate-float">
                <img
                  src={heroImage}
                  alt="Beautiful Maranta Prayer Plant with vibrant green leaves and red veins"
                  className="w-full h-auto rounded-3xl object-cover aspect-[4/3]"
                />
              </div>
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-4 -left-4 sm:bottom-8 sm:-left-8 bg-card rounded-2xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Moves at Night</p>
                    <p className="text-sm text-muted-foreground">Leaves fold upward</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
