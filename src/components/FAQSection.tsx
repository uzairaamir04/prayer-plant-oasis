import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { useEffect } from "react";

const faqs = [
  {
    question: "Why is my prayer plant leaves curling?",
    answer:
      "Curling leaves are usually a sign of underwatering or low humidity. Prayer plants thrive in humidity levels of 50–60%. Try misting your plant regularly, using a pebble tray, or placing a humidifier nearby. Also ensure the soil stays consistently moist but not waterlogged.",
  },
  {
    question: "How often should I water my prayer plant?",
    answer:
      "Water your prayer plant when the top inch of soil feels dry, typically every 1–2 weeks. They prefer consistently moist soil but are susceptible to root rot if overwatered. Use filtered or distilled water, as they are sensitive to chemicals in tap water.",
  },
  {
    question: "Why are the leaves on my prayer plant turning yellow?",
    answer:
      "Yellow leaves can be caused by overwatering, too much direct sunlight, or nutrient deficiency. Check that your plant isn't sitting in soggy soil, move it away from direct sun, and consider feeding it with a balanced liquid fertilizer during the growing season.",
  },
  {
    question: "Do prayer plants need direct sunlight?",
    answer:
      "No, prayer plants prefer bright, indirect light. Direct sunlight can scorch their leaves and cause fading of their beautiful patterns. They can tolerate low light but may lose some vibrancy. An east- or north-facing window is ideal.",
  },
  {
    question: "Why does my prayer plant move its leaves at night?",
    answer:
      "Prayer plants exhibit nyctinasty — a natural movement where leaves fold upward at night, resembling hands in prayer, and open flat during the day. This is driven by changes in light and their internal circadian rhythm. It's completely normal and a sign of a healthy plant!",
  },
  {
    question: "How do I propagate a prayer plant?",
    answer:
      "The easiest method is stem cutting propagation. Cut a stem just below a node (where the leaf meets the stem), place it in water or moist soil, and keep it in a warm, humid spot. Roots should develop within 2–4 weeks. You can also divide the plant during repotting.",
  },
  {
    question: "Are prayer plants safe for pets?",
    answer:
      "Yes! Prayer plants (Maranta leuconeura) are non-toxic to cats, dogs, and other pets, making them an excellent choice for pet-friendly households. However, it's still best to keep plants out of reach to prevent damage to the foliage.",
  },
  {
    question: "Why are the tips of my prayer plant turning brown?",
    answer:
      "Brown leaf tips are commonly caused by low humidity, fluoride or chlorine in tap water, or inconsistent watering. Switch to filtered water, increase humidity around the plant, and maintain a regular watering schedule to prevent this issue.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const FAQSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(faqSchema);
    script.id = "faq-schema";
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById("faq-schema");
      if (el) el.remove();
    };
  }, []);

  return (
    <section id="faq" className="section-padding bg-secondary/30">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-7 h-7 text-primary" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Answers to the most common questions about prayer plant care.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="botanical-card border-none px-6"
              >
                <AccordionTrigger className="text-left font-sans text-base font-medium text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
