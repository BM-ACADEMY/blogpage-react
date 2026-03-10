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

const SeoVsPpcSalary = () => {
  // --- STATE FOR MODAL AND FORM ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "Digital Marketing (SEO & PPC)",
    location: "Pondicherry",
  });

  const defaultWhatsappUrl =
    "https://wa.me/919944940051?text=Hi%20BM%20Academy%20Team%2C%20I%E2%80%99m%20interested%20in%20your%20Digital%20Marketing%20course%20in%20Pondicherry.%20Please%20share%20details.";

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
    const message = `*New Counseling Request*\n------------------------\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Interested Course:* ${formData.course}\n*Location:* ${formData.location}\n------------------------\nHi BM Academy Team, I’m interested in your Digital Marketing course in Pondicherry. Please share details.`;
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
        <title>SEO vs PPC Salary in India | BM Academy Guide</title>
        <meta
          name="description"
          content="Discover SEO vs PPC salary comparison in India. BM Academy explains which digital marketing career pays more and offers better growth in 2026."
        />

        {/* Canonical Tag */}
        <link rel="canonical" href="https://blog.thebmacademy.com/blog/seo-vs-ppc-salary-india" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="SEO vs PPC Salary in India | BM Academy Guide" />
        <meta property="og:description" content="Discover SEO vs PPC salary comparison in India. Learn which digital marketing career pays more and offers better growth in 2026." />
        <meta property="og:url" content="https://blog.thebmacademy.com/blog/seo-vs-ppc-salary-india" />
        <meta property="og:site_name" content="BM Academy" />
        <meta property="og:image" content="https://blog.thebmacademy.com/images/seo-vs-ppc-salary-banner.jpg" />

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
                  "name": "Does PPC pay more than SEO in India?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, in many cases PPC pays slightly more, especially at mid and senior levels. However, experienced SEO managers can earn equally competitive salaries."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I learn both SEO and PPC at BM Academy?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. BM Academy offers comprehensive digital marketing training covering both SEO and PPC with practical implementation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which is better for beginners – SEO or PPC?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Both are beginner-friendly. PPC offers faster measurable results while SEO builds strong long-term digital marketing foundations."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is digital marketing a high-paying career in India?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. With 3 to 5 years of experience, digital marketing professionals in India can earn between ₹6–12 LPA or more depending on expertise."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does certification increase salary?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Certifications in Google Ads, Analytics, and advanced SEO improve job opportunities and increase salary potential."
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
              "headline": "SEO vs PPC Salary Comparison in India – BM Academy Career Guide",
              "description": "Discover SEO vs PPC salary comparison in India and learn which digital marketing career offers better growth and salary opportunities.",
              "image": "https://blog.thebmacademy.com/images/seo-vs-ppc-salary-banner.jpg",
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
                "@id": "https://blog.thebmacademy.com/blog/seo-vs-ppc-salary-india"
              },
              "datePublished": "2026-03-09",
              "dateModified": "2026-03-09"
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
                    SEO vs PPC Salary
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
              SEO vs PPC Salary Comparison in India – BM Academy Career Guide
            </h1>

            <div className="flex items-center flex-wrap gap-4 text-gray-500 text-sm border-b border-gray-200 pb-6 pt-3">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>
                  <a
                    href="https://www.linkedin.com/in/kamarudeen-b-m-66508657/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kamarudeen BM
                  </a>
                </span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>March 9, 2026</span>
              </div>
            </div>
          </div>

          {/* Image 1: Hero */}
          <div className="mb-8 rounded-xl overflow-hidden shadow-lg bg-gray-200 h-64 md:h-96 w-full flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
              alt="SEO vs PPC salary comparison in India banner image for BM Academy digital marketing career guide"
              className="w-full h-full object-cover"
            />
          </div>

          <article className="prose prose-lg max-w-none text-gray-700">
            {/* Introduction */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Introduction
            </h2>
            <p className="text-xl leading-relaxed text-gray-600 border-l-2 border-blue-500 pl-4 mb-6">
              Digital marketing is one of the fastest-growing career industries in India. At{" "}
              <a
                href="https://www.thebmacademy.com/"
                target="_blank"
                rel="noreferrer"
                className="text-black-600 font-semibold hover:underline"
              >
                BM Academy
              </a>
              , we often get this question from students:
            </p>
            <p className="text-xl leading-relaxed text-gray-600 border-l-2 border-blue-500 pl-4 mb-6">
              👉 “Which career pays more – SEO or PPC?”
            </p>
            <p className="mb-8">
              Both SEO (Search Engine Optimization) and PPC (Pay-Per-Click Advertising) are powerful digital marketing skills. However, when it comes to salary, growth speed, and long-term opportunities, there are important differences.
              In this complete guide by BM Academy, we break down:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-800 font-medium">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                Salary comparison in India
              </li>
              <li className="flex items-start gap-3 text-gray-800 font-medium">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                Career growth opportunities
              </li>
              <li className="flex items-start gap-3 text-gray-800 font-medium">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                Skill requirements
              </li>
              <li className="flex items-start gap-3 text-gray-800 font-medium">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                Future demand
              </li>
              <li className="flex items-start gap-3 text-gray-800 font-medium">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                Which career is right for you
              </li>
            </ul>

            {/* Section 1: What is SEO */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What is SEO?
              </h2>
              <img
                src="https://images.unsplash.com/photo-1571867424488-4565932edb41?auto=format&fit=crop&w=1200&q=80"
                alt="SEO training concept showing website optimization and organic traffic growth for digital marketing students"
                className="rounded-2xl object-cover mb-8 shadow-xl w-full h-[400px]"
              />
              <p className="text-lg text-gray-700 mb-6">
                SEO (Search Engine Optimization) focuses on improving a website’s ranking in organic search results without paid ads.
                At BM Academy, students learning SEO are trained in both technical and strategic aspects to become job-ready professionals.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Key Responsibilities of an SEO Professional
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Keyword research
                </li>
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  On-page optimization
                </li>
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Technical SEO (site speed, indexing, schema)
                </li>
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Link building
                </li>
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Content optimization
                </li>
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Performance tracking using analytics
                </li>
              </ul>
              <p className="text-lg text-gray-700 mb-6">
                SEO is a long-term strategy that builds sustainable website traffic.
                If you want hands-on practical exposure, explore our industry-focused <a
                  href="https://www.thebmacademy.com/Seo.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-600 font-semibold hover:underline"
                >
                  SEO course at BM Academy
                </a> designed with live projects and placement support.
              </p>


              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={getWhatsappLink("Hi BM Academy Team, I’m interested in your Digital Marketing course in Pondicherry. Please share details.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition-all shadow-md"
                >
                  👉 Enroll in Our SEO Course
                </a>
              </div>
            </section>

            {/* Section 2: What is PPC */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What is PPC?
              </h2>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                alt="PPC campaign management dashboard showing Google Ads performance and ROI optimization"
                className="rounded-2xl mb-8 shadow-xl w-full"
              />
              <p className="text-lg text-gray-700 mb-6">
                PPC (Pay-Per-Click) is a paid advertising model where businesses pay when users click on their ads.
                At BM Academy, PPC training focuses heavily on real-time campaign setup, budget management, and ROI optimization.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Key Responsibilities of a PPC Specialist
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  Google Ads campaign management
                </li>
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  Budget allocation
                </li>
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  Ad copywriting
                </li>
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  Conversion tracking
                </li>
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  A/B testing
                </li>
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  Performance optimization
                </li>
              </ul>
              <p className="text-lg text-gray-700 mb-6">
                PPC delivers faster results compared to SEO and directly impacts revenue.
                Our specialized  <a
                  href="https://www.thebmacademy.com/Digital.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-600 font-semibold hover:underline"
                >
                  PPC training program at BM Academy
                </a> prepares students to confidently manage live ad campaigns.
              </p>


              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={getWhatsappLink("Hi BM Academy Team, I’m interested in your Digital Marketing course in Pondicherry. Please share details.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-md"
                >
                  👉 Join Our PPC Training Program
                </a>
              </div>
            </section>

            {/* Section 3: Salary Comparison */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                SEO vs PPC Salary in India (2026 Updated Data)
              </h2>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                alt="SEO vs PPC salary comparison chart in India showing entry level to senior level growth"
                className="rounded-2xl mb-8 shadow-xl w-full"
              />
              <p className="text-lg text-gray-700 mb-6">
                Here is a realistic breakdown of salaries in India:
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Entry-Level Salary (0–2 Years)
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  SEO Executive: ₹2.0 LPA – ₹3.5 LPA
                </li>
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  PPC Executive: ₹2.5 LPA – ₹4 LPA
                </li>
              </ul>
              <p className="text-lg text-gray-700 mb-6">
                👉 At entry level, PPC usually pays slightly more than SEO.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Mid-Level Salary (2–5 Years)
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  SEO Specialist: ₹4 LPA – ₹7 LPA
                </li>
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  PPC Specialist: ₹5 LPA – ₹9 LPA
                </li>
              </ul>
              <p className="text-lg text-gray-700 mb-6">
                👉 PPC professionals often experience faster salary growth because their work directly impacts revenue.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Senior-Level Salary (5+ Years)
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  SEO Manager: ₹8 LPA – ₹18 LPA
                </li>
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  PPC / Performance Marketing Manager: ₹10 LPA – ₹22 LPA
                </li>
              </ul>
              <p className="text-lg text-gray-700 mb-6">
                👉 At senior levels, both SEO and PPC offer strong income potential, especially when combined with analytics and strategy skills.
                At BM Academy, Pondicherry, we train students in both SEO and PPC with practical projects and placement guidance to help you secure high-paying roles.
              </p>
              <p className="mb-6">
                <a
                  href="https://www.thebmacademy.com/Digital.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Digital Marketing Course in Pondicherry
                </a>
              </p>
            </section>

            {/* Section 4: Why PPC Often Pays More */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Why PPC Often Pays More
              </h2>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                alt="Performance marketing ROI concept showing why PPC salaries grow faster"
                className="rounded-2xl mb-8 shadow-xl w-full"
              />
              <p className="text-lg text-gray-700 mb-6">
                From a salary perspective, PPC roles can command higher packages because:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  Results are measurable (ROI-based)
                </li>
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  Professionals manage large advertising budgets
                </li>
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  Revenue impact is immediate
                </li>
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  Companies reward performance-based growth
                </li>
              </ul>
              <p className="text-lg text-gray-700 mb-6">
                At BM Academy, our advanced  <a
                  href="https://blog.thebmacademy.com/blog/top-ai-tools-digital-marketing-course-2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-600 font-semibold hover:underline"
                >
                  performance marketing training
                </a> helps students understand revenue metrics and campaign profitability.
              </p>


              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={getWhatsappLink("Hi BM Academy Team, I’m interested in your Digital Marketing course in Pondicherry. Please share details.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-md"
                >
                  👉 Become a Performance Marketing Expert
                </a>
              </div>
            </section>

            {/* Section 5: Why SEO Is Still a Powerful Career Choice */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Why SEO Is Still a Powerful Career Choice
              </h2>
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
                alt="Organic SEO growth strategy illustration showing long-term digital marketing success"
                className="rounded-2xl mb-8 shadow-xl w-full"
              />
              <p className="text-lg text-gray-700 mb-6">
                Even if PPC may grow faster initially, SEO remains a strong and stable career option.
                Benefits of choosing SEO:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Long-term organic growth expertise
                </li>
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  High demand across industries
                </li>
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Strong freelance opportunities
                </li>
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Stable career growth
                </li>
              </ul>
              <p className="text-lg text-gray-700 mb-6">
                Our structured   <a
                  href="https://www.thebmacademy.com/Seo.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-600 font-semibold hover:underline"
                >
                  SEO certification course
                </a> focuses on long-term strategy, technical skills, and career advancement.
              </p>

            </section>

            {/* Section 6: Factors That Influence Salary */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Factors That Influence Salary in India
              </h2>
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
                alt="Digital marketing salary factors in India including skills, location, and experience"
                className="rounded-2xl mb-8 shadow-xl w-full"
              />
              <p className="text-lg text-gray-700 mb-6">
                Salary does not depend only on SEO or PPC. It also depends on:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Location (Bangalore, Mumbai, Delhi offer higher packages)
                </li>
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Company size
                </li>
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Certifications
                </li>
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Practical experience
                </li>
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Communication & strategic skills
                </li>
                <li className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Freelancing vs Full-Time roles
                </li>
              </ul>
              <p className="text-lg text-gray-700 mb-6">
                Choosing the right <a
                  href="https://blog.thebmacademy.com/blog/job-ready-courses-in-pondicherry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-600 font-semibold hover:underline"
                >
                  job-oriented digital marketing training
                </a> can significantly increase your earning potential.
              </p>


              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={getWhatsappLink("Hi BM Academy Team, I’m interested in your Digital Marketing course in Pondicherry. Please share details.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-all shadow-md"
                >
                  👉 Upgrade Your Skills Today
                </a>
              </div>
            </section>

            {/* Section 7: Quick Comparison */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                SEO vs PPC – Quick Comparison
              </h2>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                alt="SEO vs PPC course comparison for digital marketing beginners"
                className="rounded-2xl mb-8 shadow-xl w-full"
              />

              <div className="overflow-x-auto shadow-sm border border-gray-200 rounded-xl mb-6">
                <table className="w-full text-left text-gray-700">
                  <thead className="bg-gray-100 text-gray-900">
                    <tr>
                      <th className="p-4 font-bold border-b border-gray-200">Factor</th>
                      <th className="p-4 font-bold border-b border-gray-200 border-l">SEO</th>
                      <th className="p-4 font-bold border-b border-gray-200 border-l">PPC</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-4 font-semibold">Salary Growth Speed</td>
                      <td className="p-4 border-l border-gray-100">Moderate</td>
                      <td className="p-4 border-l border-gray-100">Faster</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-4 font-semibold">Revenue Impact</td>
                      <td className="p-4 border-l border-gray-100">Indirect</td>
                      <td className="p-4 border-l border-gray-100">Direct</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-4 font-semibold">Job Stability</td>
                      <td className="p-4 border-l border-gray-100">High</td>
                      <td className="p-4 border-l border-gray-100">Performance-Based</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-4 font-semibold">Skill Type</td>
                      <td className="p-4 border-l border-gray-100">Strategic + Technical</td>
                      <td className="p-4 border-l border-gray-100">Analytical + Data-Driven</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4 font-semibold">Earning Potential</td>
                      <td className="p-4 border-l border-gray-100 font-bold text-green-600">High</td>
                      <td className="p-4 border-l border-gray-100 font-bold text-green-600">Very High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Still confused about which path to choose? Our mentors can help you decide the right  <a
                  href="https://www.thebmacademy.com/contact.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-600 font-semibold hover:underline"
                >
                  digital marketing career path
                </a>
              </p>

            </section>

            {/* Section 8: Final Verdict */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Final Verdict – Which Pays More in India?
              </h2>
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
                alt="Choosing between SEO and PPC career path in India"
                className="rounded-2xl mb-8 shadow-xl w-full"
              />
              <p className="text-lg text-gray-700 mb-6">
                ✔ At fresher level – PPC slightly pays more
              </p>
              <p className="text-lg text-gray-700 mb-6">
                ✔ At mid-level – PPC grows faster
              </p>
              <p className="text-lg text-gray-700 mb-6">
                ✔ At senior level – Both offer high salary potential
              </p>
              <p className="text-lg text-gray-700 mb-6">
                If you want quick performance-driven growth, PPC might be ideal.
                If you prefer long-term organic strategy, SEO is a powerful career choice.
                Start your journey today with BM Academy’s industry-aligned  <a
                  href="https://blog.thebmacademy.com/blog/new-year-new-skill"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-600 font-semibold hover:underline"
                >
                  digital marketing training programs.
                </a>
              </p>


              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={getWhatsappLink("Hi BM Academy Team, I’m interested in your Digital Marketing course in Pondicherry. Please share details.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition-all shadow-md"
                >
                  👉 Start Your Digital Marketing Career Today
                </a>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12 border-t pt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions (FAQ)
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 flex gap-2">
                    <span className="text-blue-600">1.</span> Does PPC pay more than SEO in India?
                  </h3>
                  <p className="text-gray-700">
                    Yes, in many cases PPC pays slightly more, especially at mid and senior levels. However, experienced SEO managers can earn equally competitive salaries.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 flex gap-2">
                    <span className="text-blue-600">2.</span> Can I learn both SEO and PPC at BM Academy?
                  </h3>
                  <p className="text-gray-700">
                    Yes. BM Academy offers comprehensive digital marketing training covering both SEO and PPC with practical implementation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 flex gap-2">
                    <span className="text-blue-600">3.</span> Which is better for beginners – SEO or PPC?
                  </h3>
                  <p className="text-gray-700">
                    Both are beginner-friendly. PPC offers faster measurable results while SEO builds strong long-term digital marketing foundations.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 flex gap-2">
                    <span className="text-blue-600">4.</span> Is digital marketing a high-paying career in India?
                  </h3>
                  <p className="text-gray-700">
                    Yes. With 3–5 years of experience, digital marketing professionals can earn between ₹6–12 LPA or more depending on expertise.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 flex gap-2">
                    <span className="text-blue-600">5.</span> Does certification increase salary?
                  </h3>
                  <p className="text-gray-700">
                    Yes. Certifications in Google Ads, Analytics, and advanced SEO improve job opportunities and salary potential.
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
                  href="mailto:admin@abmgroups.org"
                  className="hover:text-yellow-300 transition"
                >
                  <Mail className="w-6 h-6" />
                </a>

                <a
                  href="https://www.youtube.com/@BMACADEMYPONDY"
                  target="_blank"
                  rel="noopener noreferrer"
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
              © <span>{new Date().getFullYear()}</span>
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

export default SeoVsPpcSalary;
