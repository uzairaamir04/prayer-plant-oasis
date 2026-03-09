import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Heart, Leaf, BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Prayer Plant Care</title>
        <meta name="description" content="Learn about Prayer Plant Care — your trusted resource for everything Maranta, Calathea, and prayer plant related. Our mission is to help plant lovers thrive." />
        <link rel="canonical" href="https://www.prayerplantcare.com/about" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-28 pb-16">
          <div className="container-width px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h1 className="font-serif text-4xl font-bold text-foreground">About Us</h1>
              </div>

              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  Welcome to <strong className="text-foreground">Prayer Plant Care</strong> — your go-to resource for everything related to prayer plants, including Maranta, Calathea, Stromanthe, and Ctenanthe species.
                </p>

                <div className="bg-card rounded-2xl p-8 border border-border space-y-6">
                  <div className="flex items-start gap-4">
                    <Leaf className="w-6 h-6 text-accent mt-1 shrink-0" />
                    <div>
                      <h2 className="font-serif text-xl font-semibold text-foreground mb-2">Our Mission</h2>
                      <p className="text-muted-foreground">
                        We believe everyone deserves the joy of healthy, thriving houseplants. Our mission is to provide clear, accurate, and practical care guides that make plant parenting accessible — whether you're a complete beginner or a seasoned collector.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <BookOpen className="w-6 h-6 text-accent mt-1 shrink-0" />
                    <div>
                      <h2 className="font-serif text-xl font-semibold text-foreground mb-2">What We Offer</h2>
                      <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                        <li>In-depth care guides for different prayer plant varieties</li>
                        <li>Troubleshooting tips for common plant problems</li>
                        <li>Styling inspiration for your indoor jungle</li>
                        <li>Expert blog articles on propagation, lighting, and more</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p>
                  All of our content is carefully researched and written with love by plant enthusiasts who have hands-on experience caring for these beautiful, dynamic plants.
                </p>

                <p className="text-sm text-muted-foreground">
                  Thank you for trusting us as your prayer plant care companion. Happy growing! 🌿
                </p>
              </div>
            </motion.div>
          </div>
        </main>
        <FooterSection />
      </div>
    </>
  );
};

export default AboutUs;
