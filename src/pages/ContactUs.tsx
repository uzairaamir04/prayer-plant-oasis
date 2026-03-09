import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Leaf } from "lucide-react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Prayer Plant Care</title>
        <meta name="description" content="Get in touch with Prayer Plant Care. We'd love to hear from you — questions, suggestions, or just to share your prayer plant journey." />
        <link rel="canonical" href="https://www.prayerplantcare.com/contact" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-28 pb-16">
          <div className="container-width px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h1 className="font-serif text-4xl font-bold text-foreground">Contact Us</h1>
              </div>

              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  We'd love to hear from you! Whether you have a question about prayer plant care, a suggestion for our content, or just want to share your plant journey — don't hesitate to reach out.
                </p>

                <div className="bg-card rounded-2xl p-8 border border-border space-y-6">
                  <div className="flex items-start gap-4">
                    <MessageSquare className="w-6 h-6 text-accent mt-1 shrink-0" />
                    <div>
                      <h2 className="font-serif text-xl font-semibold text-foreground mb-2">General Inquiries</h2>
                      <p className="text-muted-foreground">
                        For general questions, feedback, or collaboration opportunities, please email us at:
                      </p>
                      <a href="mailto:hello@prayerplantcare.com" className="text-primary font-medium hover:underline">
                        hello@prayerplantcare.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Leaf className="w-6 h-6 text-accent mt-1 shrink-0" />
                    <div>
                      <h2 className="font-serif text-xl font-semibold text-foreground mb-2">Plant Care Questions</h2>
                      <p className="text-muted-foreground">
                        Have a specific question about your prayer plant? Check out our <a href="/#care-guide" className="text-primary hover:underline">Care Guide</a> and <a href="/#problems" className="text-primary hover:underline">Common Problems</a> sections first. If you still need help, feel free to email us!
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  We typically respond within 1–2 business days. Thank you for being part of the Prayer Plant Care community! 🌿
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

export default ContactUs;
