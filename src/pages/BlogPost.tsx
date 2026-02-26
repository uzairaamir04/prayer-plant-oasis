import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getPostBySlug, blogPosts } from "@/data/blog-posts";
import { Calendar, Clock, ArrowLeft, Leaf } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Generate FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // Generate Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishDate,
    author: {
      "@type": "Organization",
      name: "Prayer Plant Care",
    },
    image: post.heroImage,
  };

  // Related posts
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  // Parse markdown-like content to HTML
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: JSX.Element[] = [];
    let i = 0;
    let tableRows: string[][] = [];
    let inTable = false;
    let tableHeaderParsed = false;

    while (i < lines.length) {
      const line = lines[i];

      // Table detection
      if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
        if (!inTable) {
          inTable = true;
          tableRows = [];
          tableHeaderParsed = false;
        }
        // Skip separator rows
        if (line.trim().match(/^\|[\s-|]+\|$/)) {
          tableHeaderParsed = true;
          i++;
          continue;
        }
        const cells = line
          .trim()
          .split("|")
          .filter((c) => c.trim() !== "")
          .map((c) => c.trim());
        tableRows.push(cells);
        i++;
        continue;
      } else if (inTable) {
        inTable = false;
        const headerRow = tableRows[0];
        const bodyRows = tableRows.slice(1);
        elements.push(
          <div key={`table-${i}`} className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  {headerRow.map((cell, ci) => (
                    <th
                      key={ci}
                      className="text-left p-3 font-semibold text-foreground"
                    >
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bodyRows.map((row, ri) => (
                  <tr key={ri} className="border-b border-border/50">
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className="p-3 text-muted-foreground"
                        dangerouslySetInnerHTML={{ __html: formatInline(cell) }}
                      />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        // Don't increment i, re-process current line
        continue;
      }

      // Empty lines
      if (line.trim() === "") {
        i++;
        continue;
      }

      // H2
      if (line.startsWith("## ")) {
        elements.push(
          <h2
            key={`h2-${i}`}
            className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mt-10 mb-4"
          >
            {line.replace("## ", "")}
          </h2>
        );
        i++;
        continue;
      }

      // H3
      if (line.startsWith("### ")) {
        elements.push(
          <h3
            key={`h3-${i}`}
            className="font-serif text-xl sm:text-2xl font-semibold text-foreground mt-8 mb-3"
          >
            {line.replace("### ", "")}
          </h3>
        );
        i++;
        continue;
      }

      // Ordered list
      if (line.trim().match(/^\d+\.\s/)) {
        const items: string[] = [];
        while (i < lines.length && lines[i].trim().match(/^\d+\.\s/)) {
          items.push(lines[i].trim().replace(/^\d+\.\s/, ""));
          i++;
        }
        elements.push(
          <ol key={`ol-${i}`} className="list-decimal pl-6 my-4 space-y-2">
            {items.map((item, idx) => (
              <li
                key={idx}
                className="text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: formatInline(item) }}
              />
            ))}
          </ol>
        );
        continue;
      }

      // Unordered list
      if (line.trim().startsWith("- ")) {
        const items: string[] = [];
        while (i < lines.length && lines[i].trim().startsWith("- ")) {
          items.push(lines[i].trim().replace(/^- /, ""));
          i++;
        }
        elements.push(
          <ul key={`ul-${i}`} className="list-disc pl-6 my-4 space-y-2">
            {items.map((item, idx) => (
              <li
                key={idx}
                className="text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: formatInline(item) }}
              />
            ))}
          </ul>
        );
        continue;
      }

      // Paragraph
      elements.push(
        <p
          key={`p-${i}`}
          className="text-muted-foreground leading-relaxed my-4"
          dangerouslySetInnerHTML={{ __html: formatInline(line.trim()) }}
        />
      );
      i++;
    }

    // Handle table at end of content
    if (inTable && tableRows.length > 0) {
      const headerRow = tableRows[0];
      const bodyRows = tableRows.slice(1);
      elements.push(
        <div key="table-end" className="overflow-x-auto my-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                {headerRow.map((cell, ci) => (
                  <th
                    key={ci}
                    className="text-left p-3 font-semibold text-foreground"
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bodyRows.map((row, ri) => (
                <tr key={ri} className="border-b border-border/50">
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="p-3 text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: formatInline(cell) }}
                    />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    return elements;
  };

  const formatInline = (text: string): string => {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/`(.+?)`/g, '<code class="px-1.5 py-0.5 bg-secondary rounded text-sm">$1</code>');
  };

  return (
    <>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
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
                to="/blog"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                ← All Articles
              </Link>
            </div>
          </div>
        </header>

        {/* Article */}
        <article className="section-padding">
          <div className="container-width max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Meta */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.publishDate).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-8 leading-tight">
                {post.title}
              </h1>

              {/* Hero Image */}
              <div className="image-botanical mb-10">
                <img
                  src={post.heroImage}
                  alt={post.title}
                  className="w-full aspect-[16/9] object-cover"
                />
              </div>

              {/* Content */}
              <div className="prose-content">{renderContent(post.content)}</div>

              {/* FAQs */}
              {post.faqs.length > 0 && (
                <div className="mt-16 pt-10 border-t border-border">
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-6">
                    Frequently Asked Questions
                  </h2>
                  <Accordion type="single" collapsible className="space-y-3">
                    {post.faqs.map((faq, index) => (
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
                </div>
              )}

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-16 pt-10 border-t border-border">
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-6">
                    Continue Reading
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedPosts.map((rPost) => (
                      <Link
                        key={rPost.slug}
                        to={`/blog/${rPost.slug}`}
                        className="group botanical-card p-0 overflow-hidden"
                      >
                        <div className="aspect-[16/10] overflow-hidden">
                          <img
                            src={rPost.heroImage}
                            alt={rPost.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-serif text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {rPost.title}
                          </h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to Blog */}
              <div className="mt-12 text-center">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  All Articles
                </Link>
              </div>
            </motion.div>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogPost;
