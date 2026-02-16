import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, Leaf } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="section-padding bg-forest text-forest-foreground">
      <div className="container-width">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo / Icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="w-16 h-16 bg-mint/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-8 h-8 text-mint" />
            </div>
            <h3 className="font-serif text-3xl font-semibold mb-4">
              Happy Growing! 🌿
            </h3>
            <p className="text-mint/80 text-lg leading-relaxed">
              Thank you for exploring the wonderful world of prayer plants with us. 
              May your leaves always be lush, your soil perfectly moist, and your 
              plants forever dancing in the evening light.
            </p>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-10"
          >
            <blockquote className="font-serif text-xl italic text-mint/90 border-l-4 border-mint/40 pl-6 text-left">
              "In every walk with nature, one receives far more than one seeks."
              <cite className="block mt-2 text-mint/60 text-base not-italic">— John Muir</cite>
            </blockquote>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-4 mb-10"
          >
            {[Instagram, Twitter, Facebook].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-12 h-12 bg-mint/10 hover:bg-mint/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Social media link"
              >
                <Icon className="w-5 h-5 text-mint" />
              </a>
            ))}
          </motion.div>

          {/* Copyright */}
          <div className="pt-8 border-t border-mint/20">
            <p className="text-mint/60 text-sm">
              Made with 💚 for plant lovers everywhere
            </p>
            <p className="text-mint/40 text-xs mt-2">
              © {new Date().getFullYear()} Prayer Plant Care. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
