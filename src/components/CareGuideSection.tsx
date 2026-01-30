import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sun, Droplets, Leaf, Wind, Thermometer } from "lucide-react";

const careItems = [
  {
    icon: Sun,
    title: "Light Requirements",
    description: "Bright, indirect light is ideal. Avoid direct sunlight which can scorch leaves and fade their beautiful patterns.",
    tips: [
      "North or east-facing windows are perfect",
      "Filter intense afternoon sun",
      "Tolerates lower light, but growth slows",
    ],
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: Droplets,
    title: "Watering Schedule",
    description: "Keep soil consistently moist but never waterlogged. Prayer plants are sensitive to both drought and overwatering.",
    tips: [
      "Water when top inch of soil feels dry",
      "Use filtered or distilled water",
      "Reduce watering in winter",
    ],
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: Leaf,
    title: "Soil Type",
    description: "Well-draining, nutrient-rich potting mix that retains some moisture without becoming soggy.",
    tips: [
      "Mix potting soil with perlite",
      "Add peat moss for moisture retention",
      "Ensure pot has drainage holes",
    ],
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: Wind,
    title: "Humidity Needs",
    description: "As tropical plants, prayer plants thrive in high humidity (50-60% or higher). This is key to preventing brown edges.",
    tips: [
      "Group plants together",
      "Use a pebble tray with water",
      "Consider a small humidifier",
    ],
    color: "bg-sky-100 text-sky-700",
  },
  {
    icon: Thermometer,
    title: "Temperature",
    description: "Comfortable room temperatures between 65-80°F (18-27°C). Avoid cold drafts and sudden temperature changes.",
    tips: [
      "Keep away from AC vents",
      "Protect from cold windows in winter",
      "Avoid temperatures below 60°F",
    ],
    color: "bg-rose-100 text-rose-700",
  },
];

const CareGuideSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="care-guide" className="section-padding bg-card" ref={ref}>
      <div className="container-width">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground mb-6">
            💚 Essential Care Tips
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Prayer Plant Care Guide
          </h2>
          <p className="text-lg text-muted-foreground">
            Master these five essentials and your prayer plant will reward you 
            with lush, vibrant growth and that magical nightly dance.
          </p>
        </motion.div>

        {/* Care Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {careItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={index === 4 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <div className="botanical-card h-full">
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-5`}>
                  <item.icon className="w-7 h-7" />
                </div>
                
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  {item.description}
                </p>
                
                <ul className="space-y-2">
                  {item.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="text-primary mt-0.5">✓</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareGuideSection;
