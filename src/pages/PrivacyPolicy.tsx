import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Prayer Plant Care</title>
        <meta name="description" content="Read the Privacy Policy for Prayer Plant Care. Learn how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://www.prayerplantcare.com/privacy-policy" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-28 pb-16">
          <div className="container-width px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h1 className="font-serif text-4xl font-bold text-foreground">Privacy Policy</h1>
              </div>
              <p className="text-sm text-muted-foreground mb-8">Last updated: March 9, 2026</p>

              <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">1. Information We Collect</h2>
                  <p>When you visit Prayer Plant Care ("the Website"), we may collect the following types of information:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong className="text-foreground">Log Data:</strong> Your browser type, IP address, pages visited, time spent, and referring URL.</li>
                    <li><strong className="text-foreground">Cookies:</strong> Small files stored on your device to improve your browsing experience and analyze site traffic.</li>
                    <li><strong className="text-foreground">Personal Information:</strong> If you contact us via email, we collect your name and email address.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">2. How We Use Your Information</h2>
                  <ul className="list-disc list-inside space-y-1">
                    <li>To operate and improve the Website</li>
                    <li>To analyze usage patterns and optimize content</li>
                    <li>To respond to your inquiries</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">3. Third-Party Services</h2>
                  <p>We may use third-party analytics services (such as Google Analytics) that collect, monitor, and analyze visitor data. These services have their own privacy policies governing the use of your information.</p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">4. Cookies</h2>
                  <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of the Website may not function properly without cookies.</p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">5. Data Security</h2>
                  <p>We value your trust and strive to use commercially acceptable means of protecting your personal information. However, no method of transmission over the Internet is 100% secure.</p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">6. Children's Privacy</h2>
                  <p>Our Website is not directed to anyone under the age of 13. We do not knowingly collect personal information from children under 13.</p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">7. Changes to This Policy</h2>
                  <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated date.</p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">8. Contact Us</h2>
                  <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@prayerplantcare.com" className="text-primary hover:underline">hello@prayerplantcare.com</a>.</p>
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

export default PrivacyPolicy;
