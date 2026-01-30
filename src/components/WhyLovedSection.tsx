import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, PawPrint, Wind, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: PawPrint,
    title: "Pet-Friendly",
    description: "Completely non-toxic to cats and dogs, making them a safe choice for homes with furry friends who love to nibble on leaves.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: Wind,
    title: "Air-Purifying",
    description: "Like many houseplants, prayer plants help filter indoor air, removing toxins while adding humidity to your living space.",
    color: "bg-sky-100 text-sky-700",
  },
  {
    icon: Sparkles,
    title: "Low-Light Tolerant",
    description: "Perfect for those tricky spots where other plants struggle. Prayer plants adapt well to lower light conditions.",
    color: "bg-violet-100 text-violet-700",
  },
  {
    icon: Heart,
    title: "Emotional Appeal",
    description: "There's something deeply calming about watching leaves move. Many find prayer plants meditative and mood-boosting.",
    color: "bg-rose-100 text-rose-700",
  },
];

const WhyLovedSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-loved" className="section-padding bg-card" ref={ref}>
      <div className="container-width">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground mb-6">
            💚 Beyond Beauty
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Why Prayer Plants Are Loved
          </h2>
          <p className="text-lg text-muted-foreground">
            More than just pretty leaves — prayer plants bring practical benefits 
            and emotional joy to your home.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="botanical-card h-full text-center">
                <div className={`w-16 h-16 rounded-2xl ${reason.color} flex items-center justify-center mx-auto mb-5`}>
                  <reason.icon className="w-8 h-8" />
                </div>
                
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {reason.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial / Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-background rounded-3xl p-8 md:p-12 max-w-3xl border border-border">
            <span className="text-5xl mb-4 block">🌿</span>
            <blockquote className="font-serif text-2xl md:text-3xl text-foreground italic mb-4">
              "Watching my prayer plant fold its leaves each evening feels like a daily gift — 
              a gentle reminder that nature is always creating beauty."
            </blockquote>
            <cite className="text-muted-foreground">— A fellow plant lover</cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyLovedSection;
