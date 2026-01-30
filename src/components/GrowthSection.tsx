import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import repottingImage from "@/assets/repotting.jpg";
import { TrendingUp, Repeat, Scissors } from "lucide-react";

const growthSteps = [
  {
    icon: TrendingUp,
    title: "Growth Rate",
    content: "Prayer plants are moderate growers, typically adding 5-10 new leaves per growing season. In optimal conditions with proper care, they can reach 12 inches tall and spread up to 18 inches wide.",
  },
  {
    icon: Repeat,
    title: "When to Repot",
    content: "Repot every 1-2 years in spring, or when roots start circling the pot's drainage holes. Choose a pot only 1-2 inches larger to prevent overwatering issues.",
  },
  {
    icon: Scissors,
    title: "Propagation Steps",
    content: "Prayer plants propagate easily through stem cuttings. Cut below a node, place in water until roots develop (2-4 weeks), then plant in moist soil. Division during repotting also works well.",
  },
];

const GrowthSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="growth" className="section-padding bg-card" ref={ref}>
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground mb-6">
              🌱 Growing & Multiplying
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-8">
              Growth, Repotting & Propagation
            </h2>

            <div className="space-y-6">
              {growthSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick propagation steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 p-6 bg-background rounded-2xl border border-border"
            >
              <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
                Quick Propagation Guide
              </h4>
              <div className="flex flex-wrap gap-3">
                {["Cut below node", "Remove lower leaves", "Place in water", "Wait for roots", "Plant in soil"].map((step, i) => (
                  <span key={i} className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full text-sm">
                    <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium">
                      {i + 1}
                    </span>
                    {step}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-mint/20 to-primary/10 rounded-3xl blur-2xl" />
              <div className="relative image-botanical">
                <img
                  src={repottingImage}
                  alt="Hands carefully repotting a prayer plant"
                  className="w-full h-auto rounded-3xl object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
