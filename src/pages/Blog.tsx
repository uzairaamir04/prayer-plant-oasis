import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blog-posts";
import { Calendar, Clock, ArrowRight, Leaf } from "lucide-react";
import { Helmet } from "react-helmet-async";
import FooterSection from "@/components/FooterSection";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Prayer Plant Care Blog | Tips, Guides & Expert Advice</title>
        <meta
          name="description"
          content="Expert prayer plant care articles covering light requirements, propagation, yellowing leaves, and more. Research-backed guides for thriving Maranta plants."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-primary/5 border-b border-border">
          <div className="container-width px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="flex items-center gap-2 text-foreground"
              >
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-serif text-xl font-semibold hidden sm:block">
                  Prayer Plant Care
                </span>
              </Link>
              <Link
                to="/"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="section-padding">
          <div className="container-width text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
                Prayer Plant Care Blog
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                In-depth, research-backed articles to help your prayer plants
                thrive. From beginner basics to advanced care techniques.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
          <div className="container-width">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group block botanical-card h-full overflow-hidden p-0"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={post.heroImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(post.publishDate).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                        Read Article
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <FooterSection />
      </div>
    </>
  );
};

export default Blog;
