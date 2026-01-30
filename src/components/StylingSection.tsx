import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import livingRoomImage from "@/assets/styling-living-room.jpg";
import bedroomImage from "@/assets/styling-bedroom.jpg";

const stylingIdeas = [
  {
    title: "Living Room Display",
    description: "Create a botanical focal point on a floating shelf or plant stand near a window. Group with other tropical plants for a lush, jungle-inspired corner.",
    image: livingRoomImage,
  },
  {
    title: "Bedroom Serenity",
    description: "Place on a nightstand or dresser for a calming presence. The nightly leaf movement adds a meditative quality to your sleep sanctuary.",
    image: bedroomImage,
  },
];

const additionalTips = [
  {
    emoji: "🪴",
    title: "Hanging Planters",
    description: "Let leaves cascade beautifully from macramé hangers or wall-mounted planters.",
  },
  {
    emoji: "🎨",
    title: "Minimalist Decor",
    description: "Pair with clean-lined pots in white or terracotta for a modern, understated look.",
  },
  {
    emoji: "🌿",
    title: "Boho Vibes",
    description: "Mix with rattan furniture, woven baskets, and natural textures for cozy bohemian style.",
  },
  {
    emoji: "📚",
    title: "Shelf Styling",
    description: "Nestle among books and art objects on open shelving for an eclectic, curated display.",
  },
];

const StylingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="styling" className="section-padding" ref={ref}>
      <div className="container-width">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground mb-6">
            🏠 Interior Inspiration
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Styling & Display Ideas
          </h2>
          <p className="text-lg text-muted-foreground">
            Transform your space into a botanical haven. Prayer plants add 
            natural elegance to any interior style.
          </p>
        </motion.div>

        {/* Main styling ideas */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {stylingIdeas.map((idea, index) => (
            <motion.div
              key={idea.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="botanical-card h-full p-0 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={idea.image}
                    alt={idea.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-serif text-2xl font-semibold text-card mb-1">
                      {idea.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {idea.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional tips */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {additionalTips.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-card rounded-2xl p-5 border border-border hover:border-primary/30 transition-colors"
            >
              <span className="text-3xl mb-3 block">{tip.emoji}</span>
              <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                {tip.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {tip.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StylingSection;
