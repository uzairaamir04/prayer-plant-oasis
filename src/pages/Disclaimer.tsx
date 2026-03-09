import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer - Prayer Plant Care</title>
        <meta name="description" content="Read the disclaimer for Prayer Plant Care. Understand the limitations of the information provided on our website." />
        <link rel="canonical" href="https://www.prayerplantcare.com/disclaimer" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-28 pb-16">
          <div className="container-width px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                </div>
                <h1 className="font-serif text-4xl font-bold text-foreground">Disclaimer</h1>
              </div>
              <p className="text-sm text-muted-foreground mb-8">Last updated: March 9, 2026</p>

              <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">General Information</h2>
                  <p>The information provided on Prayer Plant Care ("the Website") is for general informational and educational purposes only. All content is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, or completeness of any information on the Website.</p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">Not Professional Advice</h2>
                  <p>The Website does not provide professional horticultural, botanical, or agricultural advice. The care tips and recommendations shared are based on personal experience and general knowledge. Results may vary depending on your specific environment, climate, and conditions.</p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">External Links</h2>
                  <p>The Website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">Affiliate Disclaimer</h2>
                  <p>Some links on the Website may be affiliate links. This means we may earn a small commission if you make a purchase through those links, at no additional cost to you. We only recommend products we genuinely believe in.</p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">Limitation of Liability</h2>
                  <p>Under no circumstances shall Prayer Plant Care be held liable for any loss or damage, including without limitation, indirect or consequential loss or damage, arising from your use of the information provided on this Website.</p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">Contact</h2>
                  <p>If you have any questions about this Disclaimer, please contact us at <a href="mailto:hello@prayerplantcare.com" className="text-primary hover:underline">hello@prayerplantcare.com</a>.</p>
                </section>
              </div>
            </motion.div>
          </div>
        </main>
        <FooterSection />
      </div>
    </>
  );
};

export default Disclaimer;
