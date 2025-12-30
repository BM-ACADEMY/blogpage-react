import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "../../Blog/Pages/css/Style.css"
import {
  ChevronRight,
  MessageSquareText,
  User,
  Calendar,
  Monitor,
  CheckCircle,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  Share2,
  LinkIcon
} from "lucide-react";

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
import bmlogo from "../../assets/blog/logo.png";

export const Digitalmarketing = () => {
  const whatsappUrl =
    "https://wa.me/919944940051?text=Hi%2C%20I%20want%20to%20join%20the%202025%20AI%20Digital%20Marketing%20Course.%20Please%20share%20the%20full%20details.";

  // Schema Data
  // const schemaData = {
  //   "@context": "https://schema.org",
  //   "@type": "BlogPosting",
  //   mainEntityOfPage: {
  //     "@type": "WebPage",
  //     "@id": "https://bmacademy.in/blog/top-ai-tools-digital-marketing-course-2025",
  //   },
  //   headline: "Top AI Tools You’ll Learn in Our Digital Marketing AI Course (2025)",
  //   description: "Learn Canva AI, ChatGPT, Jasper, Google Ads AI & Meta Advantage+ in our 2025 Digital Marketing AI Course.",
  //   image: "https://thebmacademy.com/blog/image/ai-digital-marketing-tools-2025-banner.png",
  //   author: {
  //     "@type": "Organization",
  //     name: "BM Academy",
  //     url: "https://bmacademy.in",
  //   },
  //   publisher: {
  //     "@type": "Organization",
  //     name: "BM Academy",
  //     logo: {
  //       "@type": "ImageObject",
  //       url: "https://www.thebmacademy.com/assets/images/BM%20Logo%20Final-01.png",
  //     },
  //   },
  //   datePublished: "2025-10-13",
  //   dateModified: "2025-10-13",
  //   articleSection: "Digital Marketing AI Course",
  // };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Helmet>
        <title>Top AI Tools for Digital Marketing Course in 2025 | BM Academy</title>
        <meta name="description" content="Learn the best AI tools for digital marketing in 2025. Our AI marketing course covers ChatGPT, Canva AI, Google Ads AI & more." />
        {/* <script type="application/ld+json">{JSON.stringify(schemaData)}</script> */}
         <link
      rel="canonical"
      href="https://blog.thebmacademy.com/blog/top-ai-tools-digital-marketing-course-2025"
    />

    <meta property="og:type" content="article" />
  <meta
    property="og:title"
    content="Top AI Tools for Digital Marketing Course in 2025"
  />
  <meta
    property="og:description"
    content="Explore the top AI tools for digital marketing courses in 2025. Learn how marketers use AI for SEO, content creation, ads, automation, and analytics."
  />
  <meta
    property="og:url"
    content="https://blog.thebmacademy.com/blog/top-ai-tools-digital-marketing-course-2025"
  />
  <meta property="og:site_name" content="BM Academy Blog" />
  <meta
    property="og:image"
    content="https://blog.thebmacademy.com/wp-content/uploads/ai-tools-digital-marketing-2025.jpg"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:locale" content="en_US" />

  {/* Schema.org JSON-LD */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://blog.thebmacademy.com/blog/top-ai-tools-digital-marketing-course-2025",
      },
      headline: "Top AI Tools for Digital Marketing Course 2025",
      description:
        "Explore the top AI tools transforming digital marketing in 2025. Learn how ChatGPT, Canva AI, Google Ads AI, SEO tools, and CRM AI can enhance your marketing strategy and workflow.",
      image:
        "https://blog.thebmacademy.com/assets/images/top-ai-tools-digital-marketing-2025.jpg",
      author: {
        "@type": "Person",
        name: "BMAcademy Team",
      },
      publisher: {
        "@type": "Organization",
        name: "BMAcademy",
        logo: {
          "@type": "ImageObject",
          url:
            "https://blog.thebmacademy.com/assets/images/bmacademy-logo.png",
        },
      },
      datePublished: "2025-01-01",
      dateModified: "2025-12-25",
      keywords:
        "AI tools, digital marketing, ChatGPT, Canva AI, Google Ads AI, SEO AI, CRM AI, digital marketing course 2025",
      articleSection: [
        "Introduction",
        "ChatGPT and AI Writing Tools",
        "Canva AI for Creative Design",
        "Google Ads AI and Campaign Automation",
        "SEO & Analytics Tools with AI",
        "CRM and Engagement AI Tools",
        "Conclusion",
      ],
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://blog.thebmacademy.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://blog.thebmacademy.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Top AI Tools for Digital Marketing Course 2025",
            item:
              "https://blog.thebmacademy.com/blog/top-ai-tools-digital-marketing-course-2025",
          },
        ],
      },
    })}
  </script>

  {/* Google Analytics (GA4) */}
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-102MXGE3GQ"
  ></script>
  <script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-102MXGE3GQ');
    `}
  </script>
        

      </Helmet>

      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* --- Main Content Area --- */}
        <main className="lg:col-span-8">
          
          {/* Breadcrumb */}
          <nav className="flex mb-6 text-sm text-gray-500" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="inline-flex items-center hover:text-blue-600 transition-colors">
                  <MessageSquareText className="w-4 h-4 mr-2" />
                  Blog
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                  <span className="ml-1 md:ml-2 text-gray-700 font-medium truncate max-w-[150px] md:max-w-none">
                    Digital Marketing AI
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <div className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold uppercase tracking-wide mb-4">
              Course Details
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Top AI Tools You’ll Learn in Our Digital Marketing AI Course (2025)
            </h1>

            {/* Meta */}
            <div className="flex items-center flex-wrap gap-4 text-gray-500 text-sm border-b border-gray-200 pb-6 pt-3">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>Kamarudeen BM</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Oct 14, 2025</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8 rounded-xl overflow-hidden shadow-lg bg-gray-200 h-64 md:h-96 w-full relative">
            <img
              src={Image1}
              alt="Top AI tools for digital marketing course in 2025 including ChatGPT, Canva AI and Google Ads AI"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Body */}
          <article className="prose prose-lg max-w-none text-gray-700 space-y-12">
            
            {/* Intro Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Learn Digital Marketing the AI Way in 2025
              </h2>
              <p>
                Master the latest AI tools to create smarter campaigns, content, and strategies. 
                <strong><a href="https://thebmacademy.com/Digital.html " target="_blank">Digital Marketing</a></strong> is evolving fast — AI tools are now at the core of successful campaigns.
              </p>
              
              <div className="my-6 rounded-lg overflow-hidden shadow-md w-full">
                <img
                  src={Image2}
                  alt="Overview of AI tools used in digital marketing strategies in 2025"
                  className="w-full h-auto object-cover"
                />
              </div>

              <p>
                 From content creation and design to ad optimization and analytics, AI helps marketers work smarter and faster.
                 Our course helps you learn practical <strong><a href="https://thebmacademy.com/Digital.html" target="_blank">AI skills to stay ahead in 2025.</a></strong>
              </p>
              
            </section>
            <div className="text-center">
                <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex justify-center items-center bg-green-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-green-600 transition-transform transform hover:-translate-y-1 shadow-lg"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Enroll via WhatsApp
              </a>
              </div>

            {/* Tool 1 */}
            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Canva AI – The Future of Marketing Design
              </h2>
              <img
                src={Image3}
                alt="Canva AI tool for creating social media graphics and digital marketing designs"
                className="w-full rounded-xl shadow-md my-6"
              />
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3">
                    <li><strong>Uses:</strong> Create social media posts, banners, videos, and presentations in minutes.</li>
                    <li><strong>Trending Use:</strong> AI suggests layouts, colors, and content ideas automatically.</li>
                    <li><strong>Future Potential:</strong> Visual content will dominate marketing; Canva AI knowledge gives you a career edge.</li>
                </ul>
              </div>
            </section>

            {/* Tool 2 */}
            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. ChatGPT – Content Creation & Strategy
              </h2>
              <img
                src={Image4}
                alt="ChatGPT AI tool for content writing, blog creation and digital marketing automation"
                className="w-full rounded-xl shadow-md my-6"
              />
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3">
                    <li><strong>Uses:</strong> Generate ad copies, blog posts, email campaigns, and marketing strategies.</li>
                    <li><strong>Trending Use:</strong> Saves time and improves content quality.</li>
                    <li><strong>Future Potential:</strong> AI copywriting is becoming standard; ChatGPT skills open freelance & corporate opportunities.</li>
                </ul>
              </div>
            </section>

            {/* Tool 3 */}
            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Jasper AI – AI-Powered Marketing Assistant
              </h2>
              <img
                src={Image5}
                alt="Jasper AI"
                className="w-full rounded-xl shadow-md my-6"
              />
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3">
                    <li><strong>Uses:</strong> Personalized social media posts, product descriptions, and email campaigns.</li>
                    <li><strong>Trending Use:</strong> Understands audience tone and context.</li>
                    <li><strong>Future Potential:</strong> Scalable campaigns and marketing automation.</li>
                </ul>
              </div>
            </section>

            {/* Tool 4 */}
            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Google Ads AI – Smarter Advertising
              </h2>
              <img
                src={Image6}
                alt="Google Ads AI automation for PPC campaign optimization and performance marketing"
                className="w-full rounded-xl shadow-md my-6"
              />
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3">
                    <li><strong>Uses:</strong> Optimize search and display campaigns with AI suggestions.</li>
                    <li><strong>Trending Use:</strong> AI predicts audience conversion, reducing cost per lead.</li>
                    <li><strong>Future Potential:</strong> Paid marketing is shifting to AI-driven targeting and bidding.</li>
                </ul>
              </div>
            </section>

            {/* Tool 5 */}
            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Meta Advantage+ AI – Social Media Optimization
              </h2>
              <img
                src={Image7}
                alt="Meta Advantage+"
                className="w-full rounded-xl shadow-md my-6"
              />
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3">
                    <li><strong>Uses:</strong> Optimizes Facebook & Instagram ads automatically.</li>
                    <li><strong>Trending Use:</strong> AI tests creatives and targets the best audience.</li>
                    <li><strong>Future Potential:</strong> Social media marketing will rely on AI analytics and optimization.</li>
                </ul>
              </div>
            </section>

            {/* Tool 6 */}
            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Notion AI – Plan & Organize Campaigns
              </h2>
              <img
                src={Image8}
                alt="Notion AI"
                className="w-full rounded-xl shadow-md my-6"
              />
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3">
                    <li><strong>Uses:</strong> Create campaign plans, marketing calendars, and track projects. Summarizes ideas & generates outlines.</li>
                    <li><strong>Trending Use:</strong> Reduces repetitive work for marketers.</li>
                    <li><strong>Future Potential:</strong> AI productivity tools will be essential in every marketing role.</li>
                </ul>
              </div>
            </section>

            {/* Why This Course */}
            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Why This Course is Perfect for Students
              </h2>
              <img
                src={Image9}
                alt="Future of AI in digital marketing and automation trends for 2025"
                className="w-full rounded-xl shadow-md my-6"
              />
              <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Hands-on AI Learning:</strong> Practical use of top marketing tools.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Certificate Provided (Hard Copy):</strong> Boosts your resume & career.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Career Guidance & Free Demo:</strong> Prepare for real marketing jobs.</span>
                  </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Future-Proof Your Marketing Skills
              </h2>
              <p>
                <strong><a href="https://thebmacademy.com/Digital.html " target="_blank">Digital Marketing</a></strong> + AI is not just a trend — it’s the future of every marketing career. 
                Learn these tools now to create smarter campaigns, save time, and excel in your career.
              </p>
            </section>

          </article>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl text-white text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Join the 2025 AI Marketing Cohort
            </h2>
            <p className="mb-8 text-blue-100 max-w-lg mx-auto leading-relaxed">
              Don't just learn marketing—learn how to automate it with AI.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center bg-green-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-green-600 transition-transform transform hover:-translate-y-1 shadow-lg"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Enroll via WhatsApp
              </a>
              <a
                href="https://thebmacademy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center bg-red-400 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-red-500 transition-transform transform hover:-translate-y-1 shadow-lg"
              >
                <LinkIcon className="w-6 h-6 mr-2" />
               Digital Marketing AI Course
              </a>
            </div>
          </div>
        </main>

        {/* --- Sidebar --- */}
        <aside className="lg:col-span-4 space-y-8 mt-8 lg:mt-0 lg:sticky lg:top-8 h-fit">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-wider">
              About BM Academy
            </h3>
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 rounded-full flex items-center justify-center border-2 border-gray-700 font-bold text-xl overflow-hidden bg-white">
                <img
                  src={bmlogo}
                  alt="BM Academy"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">BM Academy</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
             BM Academy offers hands-on training in courses like Digital Marketing, Web Development, and Cloud Computing, designed to equip students with essential skills for today's industries. With expert guidance and career support, we help you unlock your potential and achieve professional growth.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl border border-gray-200">
            <h3 className="font-bold text-green-800 mb-2">Have Questions?</h3>
            <p className="text-sm text-green-700 mb-4">
              Talk to our counselor today to know more about the syllabus and fee structure.
            </p>
            <a
              href={whatsappUrl}
              className="text-sm font-semibold text-green-700 underline hover:text-green-800"
            >
              Connect instantly &rarr;
            </a>
          </div>
        </aside>

      </div>

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

export default Digitalmarketing;