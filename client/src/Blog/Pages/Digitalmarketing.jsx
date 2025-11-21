import React from "react";
import { Helmet } from "react-helmet";
import "./css/Style.css";

// Images
import Image1 from "../../assets/image/live1.png";
import Image2 from "../../assets/image/img2.png";
import Image3 from "../../assets/image/img3.png";
import Image4 from "../../assets/image/img4.png";
import Image5 from "../../assets/image/img5.png";
import Image6 from "../../assets/image/img6.png";
import Image7 from "../../assets/image/img7.png";
import Image8 from "../../assets/image/img8.png";
import Image9 from "../../assets/image/img9.png";
import Logo from "../../assets/image/footer.png";

import { Facebook, Instagram, Linkedin } from "lucide-react";

export const Digitalmarketing = () => {
  // JSON-LD Schema Definition
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://bmacademy.in/blog/top-ai-tools-digital-marketing-course-2025",
    },
    headline:
      "Top AI Tools You’ll Learn in Our Digital Marketing AI Course (2025)",
    description:
      "Learn Canva AI, ChatGPT, Jasper, Google Ads AI & Meta Advantage+ in our 2025 Digital Marketing AI Course. Boost your marketing career with AI-powered tools.",
    image:
      "https://thebmacademy.com/blog/image/ai-digital-marketing-tools-2025-banner.png",
    author: {
      "@type": "Organization",
      name: "BM Academy",
      url: "https://bmacademy.in",
    },
    publisher: {
      "@type": "Organization",
      name: "BM Academy",
      logo: {
        "@type": "ImageObject",
        url: "https://www.thebmacademy.com/assets/images/BM%20Logo%20Final-01.png",
      },
    },
    datePublished: "2025-10-13",
    dateModified: "2025-10-13",
    articleSection: "Digital Marketing AI Course",
    keywords: [
      "AI tools for digital marketing",
      "digital marketing course 2025",
      "Canva AI",
      "ChatGPT marketing",
      "AI-powered marketing tools",
      "Jasper AI",
      "Google Ads AI",
      "Meta Advantage+ AI",
    ],
  };

  return (
    <div>
      {/* SEO METADATA SECTION */}
      <Helmet>
        <title>
          Top AI Tools You’ll Learn in Our Digital Marketing Course (2025)
        </title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Primary SEO Meta Tags */}
        <meta
          name="title"
          content="Best AI Tools for Digital Marketing 2025 | Learn Canva AI, ChatGPT & More"
        />
        <meta
          name="description"
          content="Learn Canva AI, ChatGPT, Jasper, Google Ads AI & more in our 2025 Digital Marketing AI Course. Master AI tools to create smarter campaigns and boost your career."
        />
        <link
          rel="canonical"
          href="https://thebmacademy.com/blog/top-ai-tools-digital-marketing-course-2025.html"
        />
        <meta
          name="keywords"
          content="AI tools for digital marketing, Digital marketing AI course, Canva AI, ChatGPT for marketing, Best AI tools 2025"
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Learn Digital Marketing the AI Way in 2025"
        />
        <meta
          property="og:description"
          content="Master Canva AI, ChatGPT, Jasper, Google Ads AI, and Meta Advantage+ in our AI-powered Digital Marketing Course (2025)."
        />
        <meta
          property="og:image"
          content="https://thebmacademy.com/blog/image/ai-digital-marketing-tools-2025-banner.png"
        />
        <meta property="og:site_name" content="BM Academy" />

        {/* External Styles */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          rel="shortcut icon"
          href="../assets/images/BM Logo Final-01.png"
        />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      {/* PAGE CONTENT */}
      <header>
        <h1>
          Top AI Tools You’ll Learn in Our Digital Marketing AI Course (2025)
        </h1>
        <div className="cta">
          <a
            href="https://wa.me/919944940051?text=Hi%2C%20I%20want%20to%20join%20the%202025%20AI%20Digital%20Marketing%20Course.%20Please%20share%20the%20full%20details."
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more
          </a>
        </div>
      </header>

      <section className="section1">
        <div className="hero-container">
          <div className="hero-left">
            <img
              src={Image1}
              alt="Student learning AI-powered digital marketing tools on laptop"
            />
          </div>
          <div className="hero-right">
            <h1>Learn Digital Marketing the AI Way in 2025</h1>
            <p>
              Master the latest AI tools to create smarter campaigns, content,
              and strategies.
            </p>
            <div className="cta">
              <a
                href="https://wa.me/919944940051?text=Hi%2C%20I%20want%20to%20join%20the%202025%20AI%20Digital%20Marketing%20Course.%20Please%20share%20the%20full%20details."
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the 2025 AI Digital Marketing Course
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="ai-section">
        <h2>Why AI is the Future of Digital Marketing</h2>
        <div className="ai-image">
          <img
            src={Image2}
            alt="Infographic showing difference between traditional marketing and AI-powered marketing"
          />
        </div>
        <p>
          Digital Marketing is evolving fast — AI tools are now at the core of
          successful campaigns. From content creation and design to ad
          optimization and analytics, AI helps marketers work smarter and
          faster. Our course helps you learn practical AI skills to stay ahead
          in 2025.
        </p>
      </section>

      <section className="canva-section">
        <h2 className="ai-main-heading">Top AI Tools You'll Learn</h2>

        <div className="ai-content-wrapper">
          <h3 className="ai-sub-heading">1. The Future of Marketing is AI</h3>

          <p className="ai-tool-description">
            <strong>Uses:</strong> Create social media posts, banners, videos,
            and presentations in minutes.
            <br />
            <strong>Trending Use:</strong> AI suggests layouts, colors, and
            content ideas automatically.
            <br />
            <strong>Future Potential:</strong> Visual content will dominate
            marketing; Canva AI knowledge gives you a career edge.
          </p>

          <div className="ai-image">
            <img src={Image3} alt="Canva AI auto-design feature" />
          </div>
        </div>
      </section>

      <section className="canva-section">
        <div className="ai-content-wrapper">
          <h3 className="ai-sub-heading">
            2. ChatGPT – Content Creation & Strategy
          </h3>

          <p className="ai-tool-description">
            <strong>Uses:</strong> Generate ad copies, blog posts, email
            campaigns, and marketing strategies.
            <br />
            <strong>Trending Use:</strong> Saves time and improves content
            quality.
            <br />
            <strong>Future Potential:</strong> AI copywriting is becoming
            standard; ChatGPT skills open freelance & corporate opportunities.
          </p>

          <div className="ai-image">
            <img
              src={Image4}
              alt="ChatGPT generating marketing content for digital campaign"
            />
          </div>
        </div>
      </section>

      <section className="canva-section">
        <div className="ai-content-wrapper">
          <h3 className="ai-sub-heading">
            3. Jasper AI – AI-Powered Marketing Assistant
          </h3>

          <p className="ai-tool-description">
            <strong>Uses:</strong> Personalized social media posts, product
            descriptions, and email campaigns. <br />
            <strong>Trending Use:</strong> Understands audience tone and
            context.
            <br />
            <strong>Future Potential:</strong> Scalable campaigns and marketing
            automation.
          </p>

          <div className="ai-image">
            <img
              src={Image5}
              alt="Jasper AI dashboard with marketing templates"
            />
          </div>
        </div>
      </section>

      <section className="canva-section">
        <div className="ai-content-wrapper">
          <h3 className="ai-sub-heading">4. Google Ads AI – Smarter Advertising</h3>

          <p className="ai-tool-description">
            <strong>Uses:</strong> Optimize search and display campaigns with AI
            suggestions. <br />
            <strong>Trending Use:</strong> AI predicts audience conversion,
            reducing cost per lead. <br />
            <strong>Future Potential:</strong> Paid marketing is shifting to
            AI-driven targeting and bidding.
          </p>

          <div className="ai-image">
            <img
              src={Image6}
              alt="Google Ads AI interface showing conversion predictions."
            />
          </div>
        </div>
      </section>

      <section className="canva-section">
        <div className="ai-content-wrapper">
          <h3 className="ai-sub-heading">
            5. Meta Advantage+ AI – Social Media Optimization
          </h3>

          <p className="ai-tool-description">
            <strong>Uses:</strong> Optimizes Facebook & Instagram ads
            automatically. <br />
            <strong>Trending Use:</strong> AI tests creatives and targets the
            best audience. <br />
            <strong>Future Potential:</strong> Social media marketing will rely
            on AI analytics and optimization
          </p>

          <div className="ai-image">
            <img
              src={Image7}
              alt="Meta Ads Manager dashboard showing Advantage+ automation"
            />
          </div>
        </div>
      </section>

      <section className="canva-section">
        <div className="ai-content-wrapper">
          <h3 className="ai-sub-heading">
            6. Notion AI – Plan & Organize Campaigns
          </h3>

          <p className="ai-tool-description">
            <strong>Uses:</strong> Create campaign plans, marketing calendars,
            and track projects. Summarizes ideas & generates outlines. <br />
            <strong>Trending Use:</strong> Reduces repetitive work for marketers.
            <br />
            <strong>Future Potential:</strong> AI productivity tools will be
            essential in every marketing role.
          </p>

          <div className="ai-image">
            <img
              src={Image8}
              alt="Notion AI workspace showing marketing campaign plan"
            />
          </div>
        </div>
      </section>

      <section className="ai-section">
        <h2>Why This Course is Perfect for Students</h2>
        <div className="ai-image">
          <img
            src={Image9}
            alt="Student receiving certificate with laptop showing AI tools"
          />
        </div>
        <p>
          <strong>Hands-on AI Learning:</strong> Practical use of top marketing
          tools.
          <br />
          <strong>Certificate Provided (Hard Copy):</strong> Boosts your resume
          & career.
          <br />
          <strong>Career Guidance & Free Demo:</strong> Prepare for real
          marketing jobs.
        </p>
      </section>

      <section className="conclusion-section">
        <h2>Future-Proof Your Marketing Skills</h2>

        <p>
          Digital Marketing + AI is not just a trend — it’s the future of every
          marketing career. Learn these tools now to create smarter campaigns,
          save time, and excel in your career.
        </p>

        <div className="cta">
          <a
            href="https://wa.me/919944940051?text=Hi%2C%20I%20want%20to%20join%20the%202025%20AI%20Digital%20Marketing%20Course.%20Please%20share%20the%20full%20details."
            target="_blank"
            rel="noopener noreferrer"
          >
            Enroll Now | Get Certified in AI-Powered Digital Marketing (2025)
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-about">
              <img src={Logo} alt="BM Academy Logo" className="footer-logo" />
              <p className="footer-text">
                BM Academy offers hands-on training in courses like Digital
                Marketing, Web Development, and Cloud Computing, designed to
                equip students with essential skills for today's industries.
                With expert guidance and career support, we help you unlock your
                potential and achieve professional growth.
              </p>
              <div className="footer-social flex items-center gap-4 text-white">
                <a
                  href="https://www.facebook.com/people/BM-Academy/61566753898165/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-300 transition"
                >
                  <Facebook className="w-6 h-6" />
                </a>

                <a
                  href="https://www.instagram.com/bmacademypondy?igsh=MTYxcHNscDZvdDR0cA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-300 transition"
                >
                  <Instagram className="w-6 h-6" />
                </a>

                <a
                  href="https://www.linkedin.com/company/bm-academypondy/about/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-300 transition"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Contact Us</h3>
              <ul className="footer-list">
                <li>
                  <span className="label">Phone:</span>
                  <a href="tel:+919944940051" className="contact-link">
                    +91 99449 40051
                  </a>
                </li>

                <li>
                  <span className="label">Address:</span>
                  <a className="contact-link">
                    No: 252, 2nd Floor, M G Road, Kottakuppam, Vanur, Tamil Nadu
                    605104
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              &copy; <span>{new Date().getFullYear()}</span>
              <a
                href="https://bmtechx.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                {" "}
                BMTechx.in
              </a>
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};