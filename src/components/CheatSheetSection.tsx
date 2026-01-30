import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const cheatSheetData = [
  { category: "Light", recommendation: "Bright, indirect" },
  { category: "Water", recommendation: "When top inch dry" },
  { category: "Humidity", recommendation: "50-60%+" },
  { category: "Temperature", recommendation: "65-80°F (18-27°C)" },
  { category: "Soil", recommendation: "Well-draining mix" },
  { category: "Fertilizer", recommendation: "Monthly in spring/summer" },
  { category: "Repotting", recommendation: "Every 1-2 years" },
  { category: "Pet Safe", recommendation: "Yes! Non-toxic" },
];

const CheatSheetSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cheat-sheet" className="section-padding" ref={ref}>
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground mb-6">
              📋 Quick Reference
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
              Quick Care Cheat Sheet
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know at a glance. 
              Save this for easy reference!
            </p>
          </div>

          {/* Cheat Sheet Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="botanical-card overflow-hidden"
          >
            <div className="bg-primary text-primary-foreground p-6 -m-6 mb-6 text-center">
              <h3 className="font-serif text-2xl font-semibold">
                🌿 Prayer Plant Care Summary
              </h3>
            </div>

            <div className="divide-y divide-border">
              {cheatSheetData.map((item, index) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="flex justify-between items-center py-4"
                >
                  <span className="font-medium text-foreground">{item.category}</span>
                  <span className="text-muted-foreground bg-secondary px-4 py-1.5 rounded-full text-sm">
                    {item.recommendation}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-mint/30 rounded-xl text-center">
              <p className="text-sm text-foreground">
                💡 <strong>Pro Tip:</strong> Consistency is key! Prayer plants thrive on 
                routine care rather than sporadic attention.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CheatSheetSection;
