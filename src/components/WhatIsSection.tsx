import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import movementImage from "@/assets/prayer-movement.jpg";

const WhatIsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="what-is" className="section-padding bg-card" ref={ref}>
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-mint/20 rounded-3xl blur-2xl" />
              <div className="relative image-botanical">
                <img
                  src={movementImage}
                  alt="Prayer plant leaves folding upward during evening"
                  className="w-full h-auto rounded-3xl object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground mb-6">
              🌱 Origins & Wonder
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
              What Is a Prayer Plant?
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                The Prayer Plant (<em>Maranta leuconeura</em>) is a stunning tropical houseplant 
                native to the rainforests of Brazil. It's a member of the Marantaceae family, 
                beloved by plant enthusiasts worldwide for its spectacular foliage and 
                mesmerizing behavior.
              </p>
              
              <div className="bg-background rounded-2xl p-6 border border-border">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  ✨ Why "Prayer Plant"?
                </h3>
                <p>
                  These magical plants earned their name from their unique daily ritual. 
                  As evening approaches, the leaves fold upward, resembling hands pressed 
                  together in prayer. By morning, they gracefully unfurl again to catch the light.
                </p>
              </div>
              
              <div className="bg-background rounded-2xl p-6 border border-border">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  🔬 The Science Behind the Movement
                </h3>
                <p>
                  This phenomenon is called <strong>nyctinasty</strong> — a circadian rhythm-driven 
                  movement controlled by changes in water pressure within the leaf cells. The pulvinus, 
                  a specialized joint at the base of each leaf, controls this beautiful dance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
