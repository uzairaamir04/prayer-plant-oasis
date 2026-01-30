import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const problems = [
  {
    issue: "Curling Leaves",
    emoji: "🍃",
    causes: ["Underwatering", "Low humidity", "Temperature stress"],
    solutions: [
      "Water thoroughly when soil is dry",
      "Increase humidity with a tray or humidifier",
      "Move away from drafty areas",
    ],
  },
  {
    issue: "Brown Leaf Tips",
    emoji: "🍂",
    causes: ["Low humidity", "Tap water chemicals", "Fertilizer burn"],
    solutions: [
      "Boost humidity to 50%+",
      "Use filtered or rainwater",
      "Flush soil and reduce fertilizer",
    ],
  },
  {
    issue: "Yellow Leaves",
    emoji: "💛",
    causes: ["Overwatering", "Root rot", "Natural aging"],
    solutions: [
      "Let soil dry between waterings",
      "Check roots; repot if mushy",
      "Remove old leaves naturally",
    ],
  },
  {
    issue: "Pest Problems",
    emoji: "🐛",
    causes: ["Spider mites", "Mealybugs", "Fungus gnats"],
    solutions: [
      "Wipe leaves with diluted neem oil",
      "Use insecticidal soap spray",
      "Let soil dry to deter gnats",
    ],
  },
];

const ProblemsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problems" className="section-padding" ref={ref}>
      <div className="container-width">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground mb-6">
            🔧 Troubleshooting
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Common Problems & Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't worry — even the best plant parents face challenges. 
            Here's how to diagnose and fix common prayer plant issues.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.issue}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="botanical-card h-full">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{problem.emoji}</span>
                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    {problem.issue}
                  </h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Causes */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <AlertCircle className="w-5 h-5 text-accent" />
                      <span className="font-medium text-foreground">Possible Causes</span>
                    </div>
                    <ul className="space-y-2">
                      {problem.causes.map((cause, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {cause}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="font-medium text-foreground">How to Fix</span>
                    </div>
                    <ul className="space-y-2">
                      {problem.solutions.map((solution, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="text-primary">✓</span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
