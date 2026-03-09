import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions - Prayer Plant Care</title>
        <meta name="description" content="Read the Terms and Conditions for using Prayer Plant Care website. By accessing our site, you agree to these terms." />
        <link rel="canonical" href="https://www.prayerplantcare.com/terms" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-28 pb-16">
          <div className="container-width px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h1 className="font-serif text-4xl font-bold text-foreground">Terms & Conditions</h1>
              </div>
              <p className="text-sm text-muted-foreground mb-8">Last updated: March 9, 2026</p>

              <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
                  <p>By accessing and using Prayer Plant Care ("the Website"), you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our Website.</p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">2. Intellectual Property</h2>
                  <p>All content on this Website — including text, images, graphics, logos, and design — is the property of Prayer Plant Care and is protected by copyright laws. You may not reproduce, distribute, or use any content without our prior written permission.</p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">3. Use of the Website</h2>
                  <p>You agree to use the Website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the Website. Prohibited behavior includes:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Copying or scraping content without permission</li>
                    <li>Introducing malware or harmful code</li>
                    <li>Attempting to gain unauthorized access to our systems</li>
                    <li>Using the Website for any illegal or unauthorized purpose</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">4. Accuracy of Information</h2>
                  <p>We strive to provide accurate and up-to-date information. However, we do not warrant that the content on the Website is complete, reliable, or error-free. Plant care results may vary based on individual conditions.</p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">5. Third-Party Links</h2>
                  <p>The Website may contain links to third-party websites. These links are provided for convenience only. We have no control over the content of those sites and accept no responsibility for them.</p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">6. Limitation of Liability</h2>
                  <p>Prayer Plant Care shall not be liable for any damages arising from the use or inability to use the Website or its content. This includes direct, indirect, incidental, punitive, and consequential damages.</p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">7. Changes to Terms</h2>
                  <p>We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the Website. Your continued use of the Website constitutes acceptance of the updated terms.</p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">8. Governing Law</h2>
                  <p>These Terms and Conditions are governed by and construed in accordance with applicable laws. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in the applicable jurisdiction.</p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">9. Contact</h2>
                  <p>For any questions regarding these Terms and Conditions, please contact us at <a href="mailto:hello@prayerplantcare.com" className="text-primary hover:underline">hello@prayerplantcare.com</a>.</p>
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

export default TermsAndConditions;
