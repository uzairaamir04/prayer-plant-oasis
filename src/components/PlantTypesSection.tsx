import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import redPlant from "@/assets/red-prayer-plant.jpg";
import greenPlant from "@/assets/green-prayer-plant.jpg";
import lemonLimePlant from "@/assets/lemon-lime-prayer-plant.jpg";
import heroPlant from "@/assets/hero-prayer-plant.jpg";

const plantTypes = [
  {
    name: "Maranta Leuconeura",
    subtitle: "The Classic",
    description: "The original prayer plant featuring oval leaves with distinctive dark green patterns and lighter green edges. A timeless favorite.",
    image: heroPlant,
  },
  {
    name: "Red Prayer Plant",
    subtitle: "Erythroneura",
    description: "Stunning red veins paint vibrant lines across deep green leaves. Perhaps the most popular and visually striking variety.",
    image: redPlant,
  },
  {
    name: "Green Prayer Plant",
    subtitle: "Kerchoveana",
    description: "Elegant emerald leaves with lighter herringbone patterns. Known for its subtle beauty and easy-going nature.",
    image: greenPlant,
  },
  {
    name: "Lemon Lime",
    subtitle: "Marisela",
    description: "Bright yellow-green stripes on lime-colored leaves create a refreshing, tropical vibe that brightens any space.",
    image: lemonLimePlant,
  },
];

const PlantTypesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="types" className="section-padding" ref={ref}>
      <div className="container-width">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground mb-6">
            🎨 Varieties to Love
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Popular Types of Prayer Plants
          </h2>
          <p className="text-lg text-muted-foreground">
            Each variety offers its own unique pattern and personality. 
            Discover which prayer plant speaks to your heart.
          </p>
        </motion.div>

        {/* Plant Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {plantTypes.map((plant, index) => (
            <motion.div
              key={plant.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="botanical-card h-full group">
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <span className="text-sm font-medium text-accent mb-1 block">
                  {plant.subtitle}
                </span>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {plant.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {plant.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantTypesSection;
