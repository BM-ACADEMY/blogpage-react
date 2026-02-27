import React, { useState } from "react";
import {
  Home,
  ChevronRight,
  CheckCircle,
  MessageCircle,
  Calendar,
  User,
  Share2,
  Clock,
  Briefcase,
  MessageSquareText,
  Monitor,
  Users,
  Award,
  Facebook,
  Instagram,
  Linkedin,
  X,
  LinkIcon,
  Code,
  Cpu,
  Zap,
  GraduationCap,
  Presentation,
  CheckCircle2,
  Bell,
  Mail,
  Youtube,
  ArrowRight,
} from "lucide-react";
import Logo from "../../assets/image/footer.png";
import bmlogo from "../../assets/blog/logo.png";
import { Link } from "react-router-dom";
import "../../Blog/Pages/css/Style.css";
import { Helmet } from "react-helmet";

import coverimage from "../../assets/blog/da.jpg"; // Hero Image placeholder

const SeoVsGoogleAds = () => {
  // --- STATE FOR MODAL AND FORM ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "Digital Marketing (SEO & Google Ads)",
    location: "Pondicherry",
  });

  const defaultWhatsappUrl =
    "https://wa.me/919944940051?text=Hi%20BM%20Academy%20Team%2C%20I%E2%80%99m%20interested%20in%20your%20SEO%20and%20Google%20Ads%20courses.%20Please%20share%20details.";

  // --- HANDLERS ---
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const message = `*New Counseling Request*\n------------------------\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Interested Course:* ${formData.course}\n*Location:* ${formData.location}\n------------------------\nHi BM Academy Team, I’m interested in your SEO and Google Ads courses. Please share details.`;
    const encodedMessage = encodeURIComponent(message);
    const waLink = `https://wa.me/919944940051?text=${encodedMessage}`;
    window.open(waLink, "_blank");
    setIsModalOpen(false);
  };

  // Helper for specific WhatsApp buttons
  const getWhatsappLink = (message) => {
    return `https://wa.me/919944940051?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 relative">
      <Helmet>
        {/* Basic SEO */}
        <title>SEO or Google Ads Course at BM Academy: Which First?</title>
        <meta
          name="description"
          content="Confused between SEO and Google Ads? Discover which course to start first at BM Academy for a strong digital marketing career."
        />
        
        {/* Canonical Tag */}
        <link rel="canonical" href="https://www.thebmacademy.com/blog/seo-or-google-ads-course-which-first/" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="SEO or Google Ads Course at BM Academy: Which First?" />
        <meta property="og:description" content="Confused between SEO and Google Ads? Discover which course to start first at BM Academy for a strong digital marketing career." />
        <meta property="og:url" content="https://www.thebmacademy.com/blog/seo-or-google-ads-course-which-first/" />
        <meta property="og:site_name" content="BM Academy" />
        <meta property="og:image" content="https://www.thebmacademy.com/images/seo-vs-google-ads.jpg" />

        {/* GA4 Code */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-102MXGE3GQ"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-102MXGE3GQ');
          `}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is SEO better than Google Ads for beginners?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, SEO is better for beginners because it builds foundational knowledge of keywords, search engines, and organic growth before handling paid budgets."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I learn Google Ads without learning SEO?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, but understanding SEO first helps you manage keywords and campaigns more effectively, reducing ad spend waste."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which course has better career opportunities in 2026?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Both SEO and Google Ads have strong career demand. However, professionals who know both skills have higher job opportunities and salary potential."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does it take to learn SEO and Google Ads?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Basic SEO can be learned in 2–3 months with practical training. Google Ads can be mastered in 1–2 months with real-time campaign practice."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does BM Academy provide practical training in SEO and Google Ads?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. BM Academy provides real-time projects, tool-based training, and hands-on campaign experience to make students job-ready."
                  }
                }
              ]
            }
          `}
        </script>

        {/* BlogPosting Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": "SEO or Google Ads Course: Which to Learn First at BM Academy?",
              "description": "Confused between SEO and Google Ads? Discover which course to start first at BM Academy for a strong digital marketing career.",
              "image": "https://www.thebmacademy.com/images/seo-vs-google-ads.jpg",
              "author": {
                "@type": "Organization",
                "name": "BM Academy"
              },
              "publisher": {
                "@type": "Organization",
                "name": "BM Academy",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.thebmacademy.com/images/logo.png"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.thebmacademy.com/blog/seo-or-google-ads-course-which-first/"
              },
              "datePublished": "2026-02-14",
              "dateModified": "2026-02-14"
            }
          `}
        </script>
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* --- Main Content Area --- */}
        <main className="lg:col-span-8">
          <nav
            className="flex mb-6 text-sm text-gray-500"
            aria-label="Breadcrumb"
          >
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  to="/"
                  className="inline-flex items-center hover:text-blue-600 transition-colors"
                >
                  <MessageSquareText className="w-4 h-4 mr-2" />
                  Blog
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                  <span className="ml-1 md:ml-2 text-gray-700 font-medium">
                    SEO vs Google Ads
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="mb-8">
            <div className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold uppercase tracking-wide mb-4">
              Digital Marketing
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              SEO or Google Ads Course: Which to Learn First at BM Academy?
            </h1>

            <div className="flex items-center flex-wrap gap-4 text-gray-500 text-sm border-b border-gray-200 pb-6 pt-3">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                 <span><a href="https://www.linkedin.com/in/kamarudeen-b-m-66508657/" target="_blank" rel="noreferrer">Kamarudeen BM</a></span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Feb 14, 2026</span>
              </div>
            </div>
          </div>

          {/* Image 1: Hero */}
          <div className="mb-8 rounded-xl overflow-hidden shadow-lg bg-gray-200 h-64 md:h-96 w-full flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
              alt="SEO vs Google Ads course comparison for digital marketing beginners"
              className="w-full h-full object-cover"
            />
          </div>

          <article className="prose prose-lg max-w-none text-gray-700">
            {/* Introduction */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Introduction to SEO vs Google Ads Courses
            </h2>
            <p className="text-xl leading-relaxed text-gray-600 border-l-2 border-blue-500 pl-4 mb-6">
              At BM Academy, we help students understand both SEO and Google Ads as part of our structured digital marketing curriculum so they can make the right learning decision based on career goals.
            </p>
            <p className="mb-8">
              If you're looking for complete guidance, our Digital Marketing Course covers both organic and paid strategies step by step.{" "}
              <a href="https://www.thebmacademy.com/" target="_blank" rel="noreferrer" className="text-blue-600 font-semibold hover:underline">
                Visit BM Academy
              </a>
            </p>

            {/* Section 1: SEO */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What is an SEO Course and Why Should Beginners Start Here?
              </h2>
              <img
                src="https://images.unsplash.com/photo-1571867424488-4565932edb41?auto=format&fit=crop&w=1200&q=80"
                alt="SEO training course showing keyword research and organic growth strategy"
                className="rounded-2xl mb-8 shadow-xl w-full"
              />
              <p className="text-lg text-gray-700 mb-6">
                At BM Academy, students don’t just learn theory — they work on live keyword research, website optimization, and ranking strategies through our practical SEO training modules. This structured SEO course helps beginners build strong fundamentals before moving into advanced paid campaigns.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Skills You Learn in SEO Training at BM Academy</h3>
                  <ul className="space-y-3">
                    {[
                      "Keyword research and competitor analysis",
                      "On-page and technical SEO",
                      "Content optimization",
                      "Google Search Console tools",
                      "Real-time website projects"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-800 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">Why SEO is the Best First Step</h3>
                  <p className="text-blue-800 mb-3">SEO builds the foundation of digital marketing. It helps you understand:</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2 text-blue-800"><ArrowRight className="w-4 h-4"/> Search intent</li>
                    <li className="flex items-center gap-2 text-blue-800"><ArrowRight className="w-4 h-4"/> Website structure</li>
                    <li className="flex items-center gap-2 text-blue-800"><ArrowRight className="w-4 h-4"/> Organic marketing strategy</li>
                    <li className="flex items-center gap-2 text-blue-800"><ArrowRight className="w-4 h-4"/> Long-term traffic generation</li>
                  </ul>
                  <p className="text-sm font-semibold text-blue-900 bg-white p-2 rounded">
                    Without SEO knowledge, paid advertising can become expensive and ineffective.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href="https://www.thebmacademy.com/Seo.html" target="_blank" rel="noreferrer" className="text-blue-600 font-bold hover:underline">
                  View Practical SEO Training Program
                </a>
                <a
                  href={getWhatsappLink("Hi BM Academy Team, I want to start with the SEO course. Please share course details.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition-all shadow-md"
                >
                  👉 Start Learning SEO Today
                </a>
              </div>
            </section>

            {/* Section 2: Google Ads */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What is a Google Ads Course and Who Should Learn It?
              </h2>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                alt="Google Ads training course showing paid campaign setup and budget management"
                className="rounded-2xl mb-8 shadow-xl w-full"
              />
              <p className="text-lg text-gray-700 mb-6">
                Our Google Ads training at BM Academy focuses on real campaign creation, budget planning, and conversion tracking so students gain hands-on experience managing paid ads confidently. The course is ideal for those who want to generate instant traffic and leads.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">What You Learn in Google Ads Training at BM Academy</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {[
                    "Campaign structure and setup",
                    "Keyword bidding strategies",
                    "Budget planning",
                    "Conversion tracking",
                    "Performance analysis"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 font-medium text-gray-800 list-none">
                      <CheckCircle2 className="w-5 h-5 text-blue-500" />
                      {item}
                    </li>
                  ))}
                </div>
                <div className="flex items-center gap-3 bg-yellow-50 text-yellow-800 font-semibold p-4 rounded-lg mt-4 border border-yellow-200">
                  Google Ads delivers quick results — but it requires strong keyword and strategy knowledge.
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href="https://www.thebmacademy.com/Google.html" target="_blank" rel="noreferrer" className="text-blue-600 font-bold hover:underline">
                  View Google Ads training at BM Academy
                </a>
                <a
                  href={getWhatsappLink("Hi BM Academy Team, I’m interested in learning Google Ads. Can you share course details and fees?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-md"
                >
                  👉 Explore Google Ads Training
                </a>
              </div>
            </section>

            {/* Section 3: Comparison */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                SEO vs Google Ads Course – Key Differences Explained
              </h2>
              
              <div className="overflow-x-auto shadow-sm border border-gray-200 rounded-xl mb-6">
                <table className="w-full text-left text-gray-700">
                  <thead className="bg-gray-100 text-gray-900">
                    <tr>
                      <th className="p-4 font-bold border-b border-gray-200">Feature</th>
                      <th className="p-4 font-bold border-b border-gray-200 border-l">SEO Course</th>
                      <th className="p-4 font-bold border-b border-gray-200 border-l">Google Ads Course</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-4 font-semibold">Investment</td>
                      <td className="p-4 border-l border-gray-100">Skill-based</td>
                      <td className="p-4 border-l border-gray-100">Budget + Skill</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-4 font-semibold">Results</td>
                      <td className="p-4 border-l border-gray-100">Long-term</td>
                      <td className="p-4 border-l border-gray-100">Immediate</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-4 font-semibold">Risk Level</td>
                      <td className="p-4 border-l border-gray-100">Low</td>
                      <td className="p-4 border-l border-gray-100">High if mismanaged</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-4 font-semibold">Traffic Type</td>
                      <td className="p-4 border-l border-gray-100">Organic</td>
                      <td className="p-4 border-l border-gray-100">Paid</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4 font-semibold">Career Stability</td>
                      <td className="p-4 border-l border-gray-100 font-bold text-green-600">Very High</td>
                      <td className="p-4 border-l border-gray-100 font-bold text-green-600">Very High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Explore our full syllabus for both the <a href="https://www.thebmacademy.com/Seo.html" className="text-blue-600 hover:underline">SEO Course</a> and <a href="https://www.thebmacademy.com/Google.html" className="text-blue-600 hover:underline">Google Ads Course</a>.
              </p>
            </section>

            {/* Section 4: Decision */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Which Digital Marketing Course Should You Learn First?
              </h2>
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
                alt="Choosing between SEO and Google Ads course for digital marketing career"
                className="rounded-2xl mb-8 shadow-xl w-full"
              />
              <p className="text-lg text-gray-700 mb-6">
                If you are unsure which course suits your career goal, BM Academy offers personalized career guidance sessions to help you choose the right path. Our mentors analyze your background and suggest the best starting point.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm border-t-4 border-t-green-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">For Students & Beginners</h3>
                  <p className="text-gray-700 font-medium">Start with an <span className="text-green-600 font-bold">SEO course</span>.</p>
                  <p className="text-gray-600 mt-2">It builds confidence and strong fundamentals.</p>
                </div>
                <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm border-t-4 border-t-blue-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">For Business Owners</h3>
                  <p className="text-gray-700 font-medium"><span className="text-blue-600 font-bold">Google Ads</span> can generate quick leads.</p>
                  <p className="text-gray-600 mt-2">But combining SEO reduces long-term marketing costs.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href="https://www.thebmacademy.com/Digital.html" target="_blank" rel="noreferrer" className="text-blue-600 font-bold hover:underline">
                  Book Digital Marketing Career Guidance Session
                </a>
                <button
                  onClick={toggleModal}
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-all shadow-md"
                >
                  👉 Book Free Demo Class
                </button>
              </div>
            </section>

            {/* Section 5: Learning Path */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                BM Academy’s Recommended Learning Path
              </h2>
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
                alt="Practical SEO and Google Ads training session at BM Academy"
                className="rounded-2xl mb-8 shadow-xl w-full"
              />
              <p className="text-lg text-gray-700 mb-6">
                At BM Academy, our job-oriented digital marketing training ensures students gain both technical knowledge and practical exposure with placement support. We focus on skill development, tool-based learning, and industry readiness.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 mb-8">
                <h3 className="font-bold text-gray-900 text-lg mb-4">At BM Academy, we recommend:</h3>
                <ol className="space-y-4 relative border-l-2 border-blue-200 ml-3">
                  <li className="pl-6 relative">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <p className="font-semibold text-gray-900">Start with SEO fundamentals</p>
                  </li>
                  <li className="pl-6 relative">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <p className="font-semibold text-gray-900">Move to Google Ads advanced strategies</p>
                  </li>
                  <li className="pl-6 relative">
                    <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[9px] top-1 shadow-[0_0_0_4px_rgba(74,222,128,0.2)]"></div>
                    <p className="font-bold text-green-700">Combine both for complete digital marketing expertise</p>
                  </li>
                </ol>
                <p className="mt-6 text-gray-700 font-medium">
                  Our training is practical, project-based, and career-focused to make students industry-ready.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href="https://blog.thebmacademy.com/blog/top-ai-tools-digital-marketing-course-2025" target="_blank" rel="noreferrer" className="text-blue-600 font-bold hover:underline">
                  Read more on Career Guidance
                </a>
                <button
                  onClick={toggleModal}
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-md"
                >
                  👉 Enroll in Digital Marketing Course
                </button>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12 border-t pt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions About SEO and Google Ads Courses
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 flex gap-2">
                    <span className="text-blue-600">Q:</span> Is SEO better than Google Ads for beginners?
                  </h3>
                  <p className="text-gray-700">
                    Yes, SEO is better for beginners because it builds foundational knowledge of keywords, search engines, and organic growth before handling paid budgets.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 flex gap-2">
                    <span className="text-blue-600">Q:</span> Can I learn Google Ads without learning SEO?
                  </h3>
                  <p className="text-gray-700">
                    Yes, but understanding SEO first helps you manage keywords and campaigns more effectively, reducing ad spend waste.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 flex gap-2">
                    <span className="text-blue-600">Q:</span> Which course has better career opportunities in 2026?
                  </h3>
                  <p className="text-gray-700">
                    Both SEO and Google Ads have strong career demand. However, professionals who know both skills have higher job opportunities and salary potential.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 flex gap-2">
                    <span className="text-blue-600">Q:</span> How long does it take to learn SEO and Google Ads?
                  </h3>
                  <p className="text-gray-700">
                    Basic SEO can be learned in 2–3 months with practical training. Google Ads can be mastered in 1–2 months with real-time campaign practice.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 flex gap-2">
                    <span className="text-blue-600">Q:</span> Does BM Academy provide practical training in SEO and Google Ads?
                  </h3>
                  <p className="text-gray-700">
                    Yes. BM Academy provides real-time projects, tool-based training, and hands-on campaign experience to make students job-ready.
                  </p>
                </div>
              </div>
            </section>
          </article>

          {/* CTA Section */}
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl text-white text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to start your journey in Digital Marketing?
            </h2>
            <h2 className="text-lg font-bold mb-4">
              Join our <span className="font-semibold text-white">Digital Marketing Training</span> and get:
            </h2>

            {/* Benefits */}
            <ul className="space-y-3 mb-8 text-">
              <li className="font-medium text-yellow-400">
                Career clarity roadmap, Live demonstrations, Placement guidance
              </li>
            </ul>

            <h2 className="text-sm text-blue-50 font-medium mb-4">
              Join our exclusive WhatsApp group for the next masterclass.
            </h2>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button
                onClick={toggleModal}
                className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-50 transition"
              >
                Book Free Counseling
              </button>

              <a
                href={defaultWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-green-600 transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </main>

        {/* --- Sidebar --- */}
        <aside className="lg:col-span-4 space-y-8 mt-8 lg:mt-0 lg:sticky lg:top-19 h-fit">
          {/* Author Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-wider">
              About BM Academy
            </h3>
            
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 rounded-full flex items-center justify-center border-2 border-gray-700 font-bold text-xl overflow-hidden">
                <img
                  src={bmlogo}
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </div>
            
              <div>
                <p className="font-bold text-gray-900 text-lg">BM Academy</p>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mt-4">
              BM Academy offers hands-on training in courses like Digital
              Marketing, Web Development, and Cloud Computing, designed to equip
              students with essential skills for today's industries. With expert
              guidance and career support, we help you unlock your potential and
              achieve professional growth.
            </p>
          </div>
            
          {/* Quick Contact */}
          <div className="bg-green-50 p-6 rounded-xl border border-gray-200">
            <h3 className="font-bold text-green-800 mb-2">Have Questions?</h3>
            <p className="text-sm text-green-700 mb-4">
              Not sure which course fits you? Talk to our counselor today.
            </p>
            <a
              href={defaultWhatsappUrl}
              className="text-sm font-semibold text-green-700 underline hover:text-green-800"
            >
              Connect instantly &rarr;
            </a>
          </div>
        </aside>
      </div>

      {/* --- Footer (Standard Design) --- */}
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
                        href="https://www.instagram.com/bmacademypondy/?utm_source=ig_embed&ig_rid=1b7aaffb-d4b9-490c-affe-5c583afc19cb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-300 transition"
                      >
                        <Instagram className="w-6 h-6" />
                      </a>
      
                      <a
                        href="https://www.linkedin.com/company/106463432/admin/dashboard/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-300 transition"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                      <a
                        href="mailto:admin@abmgroups.org "
                        className="hover:text-yellow-300 transition"
                      >
                        <Mail className="w-6 h-6" />
                      </a>
      
                      <a
                        href="https://www.youtube.com/@BMACADEMYPONDY"
                        target="_blank"
                        className="hover:text-yellow-300 transition"
                      >
                        <Youtube className="w-6 h-6" />
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

      {/* --- Counseling Modal --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden">
            <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-6 text-white flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">Free Counseling</h3>
                <p className="text-blue-100 text-sm">
                  Discuss your Digital Marketing path
                </p>
              </div>
              <button
                onClick={toggleModal}
                className="hover:bg-white/20 p-1 rounded-full transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleInputChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  maxLength="10"
                  required
                  className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => {
                    const value = e.target.value
                      .replace(/[^0-9]/g, "")
                      .slice(0, 10);
                    handleInputChange({ target: { name: "phone", value } });
                  }}
                />
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  readOnly
                  className="w-full px-4 py-2 border rounded-lg bg-gray-50 text-gray-600"
                />
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition shadow-md"
                >
                  <MessageCircle className="w-5 h-5" /> Connect on WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeoVsGoogleAds;