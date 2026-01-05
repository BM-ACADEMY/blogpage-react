import React, { useState } from "react";
import {
  MessageCircle,
  Calendar,
  User,
  ChevronRight,
  MessageSquareText,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Youtube,
  X,
  Trophy,
  Target,
  BookOpen,
  Users,
  Lightbulb,
  ArrowRight,
  ChevronDown, 
  ChevronUp
} from "lucide-react";
import Logo from "../../assets/image/footer.png";
import bmlogo from "../../assets/blog/logo.png";
import Cover from "../../assets/image/path-to-hero-image.png";
import { Link } from "react-router-dom";
import "../../Blog/Pages/css/Style.css";
import { Helmet } from "react-helmet";

// NOTE: You should replace this import with your actual Award image
// import awardImage from '../../assets/blog/award-ceremony.jpg'; 

const AwardWinningLeadership = () => {
  // --- STATE FOR MODAL AND FORM ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "General Inquiry", // Default value
    location: "", 
  });

  const whatsappUrl = "https://wa.me/919944940051?text=Hi%20BM%20Academy%2C%20I%20read%20your%20blog%20on%20Award%20Winning%20Leadership.%20I%20want%20to%20know%20more%20about%20your%20courses.";

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

    // Construct the WhatsApp Message
    const message = `*New Inquiry via Blog*
------------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Interest:* ${formData.course}
*Location:* ${formData.location}
------------------------
Hi BM Academy, I would like to book a free counseling session based on your blog post.`;

    // Encode URL and redirect
    const encodedMessage = encodeURIComponent(message);
    const waLink = `https://wa.me/919944940051?text=${encodedMessage}`;

    window.open(waLink, "_blank");
    setIsModalOpen(false); // Close modal after submit
    setFormData({
      name: "",
      phone: "",
      course: "General Inquiry",
      location: "",
    }); // Reset form
  };

  // --- SCHEMAS ---

  const BlogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://thebmacademy.com/blog/award-winning-leadership-bm-academy"
    },
    "headline": "Award-Winning Leadership: BM Academy’s Path to Shaping Tomorrow’s Skilled Professionals",
    "description": "BM Academy’s award-winning leadership reflects its commitment to skill-based education, career-focused training, and empowering future-ready professionals.",
    "image": "https://thebmacademy.com/assets/image/path-to-hero-image.png",
    "author": {
      "@type": "Person",
      "name": "BM Academy Founder"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BM Academy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://thebmacademy.com/assets/blog/logo.png"
      }
    },
    "datePublished": "2026-01-03",
    "dateModified": "2026-01-03"
  };

  // New FAQ Schema added here
  const FAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes BM Academy different from other training institutes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BM Academy focuses on hands-on, industry-aligned training, real-world projects, and career-focused learning paths that help learners become job-ready."
        }
      },
      {
        "@type": "Question",
        "name": "Are BM Academy courses suitable for beginners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. BM Academy offers courses for beginners, students, and working professionals, with structured learning paths based on skill levels."
        }
      },
      {
        "@type": "Question",
        "name": "Does BM Academy provide job assistance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BM Academy supports learners with career guidance, mentorship, and job-oriented training, helping them improve employability and confidence."
        }
      },
      {
        "@type": "Question",
        "name": "Are courses available online or offline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BM Academy offers flexible learning options, including online and offline training, depending on the course."
        }
      },
      {
        "@type": "Question",
        "name": "How can I enrol in a course at BM Academy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can explore available programs on the website or contact BM Academy directly for course details and enrolment guidance. Visit https://thebmacademy.com/contact"
        }
      }
    ]
  };

  // --- FAQ ACCORDION LOGIC ---
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Data for the UI (includes JSX links)
  const faqs = [
    {
      question: "What makes BM Academy different from other training institutes?",
      answer: "BM Academy focuses on hands-on, industry-aligned training, real-world projects, and career-focused learning paths that help learners become job-ready."
    },
    {
      question: "Are BM Academy courses suitable for beginners?",
      answer: "Yes. BM Academy offers courses for beginners, students, and working professionals, with structured learning paths based on skill levels."
    },
    {
      question: "Does BM Academy provide job assistance?",
      answer: "BM Academy supports learners with career guidance, mentorship, and job-oriented training, helping them improve employability and confidence."
    },
    {
      question: "Are courses available online or offline?",
      answer: "BM Academy offers flexible learning options, including online and offline training, depending on the course."
    },
    {
      question: "How can I enrol in a course at BM Academy?",
      answer: (
        <>
          You can explore available programs on the website or <a href="https://www.thebmacademy.com/contact.html" className="text-blue-600 underline hover:text-blue-800">contact BM Academy</a> directly for course details and enrolment guidance.
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 relative">
      <Helmet>
        <title>Award-Winning Leadership | BM Academy Shaping Skilled Professionals</title>
        <meta name="description" content="BM Academy’s award-winning leadership reflects its commitment to skill-based education, career-focused training, and empowering future-ready professionals." />
        <link rel="canonical" href="https://thebmacademy.com/blog/award-winning-leadership-bm-academy" />
        
        <meta property="og:title" content="Award-Winning Leadership: BM Academy’s Path to Shaping Tomorrow’s Skilled Professionals" />
        <meta property="og:description" content="BM Academy’s award-winning leadership reflects its commitment to skill-based education, career-focused training, and empowering future-ready professionals." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://thebmacademy.com/blog/award-winning-leadership-bm-academy" />
        <meta property="og:image" content="https://thebmacademy.com/assets/blog/image/path-to-hero-image.png" />
        <meta property="og:site_name" content="BM Academy" />
        <meta property="og:locale" content="en_IN" />

        {/* Blog Schema */}
        <script type="application/ld+json">
          {JSON.stringify(BlogSchema)}
        </script>

        {/* FAQ Schema Added Here */}
        <script type="application/ld+json">
          {JSON.stringify(FAQSchema)}
        </script>

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
        {/* --- Main Content Area (Left Column) --- */}
        <main className="lg:col-span-8">
          {/* --- Breadcrumb Section --- */}
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
                  <span className="ml-1 md:ml-2 text-gray-700 font-medium truncate max-w-[200px] md:max-w-none">
                    Award-Winning Leadership
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          {/* --- Article Header --- */}
          <div className="mb-8">
            <div className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-semibold uppercase tracking-wide mb-4">
              Leadership & Excellence
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Award-Winning Leadership: BM Academy’s Path to Shaping Tomorrow’s Skilled Professionals
            </h1>

            {/* Meta Data */}
            <div className="flex items-center flex-wrap gap-4 text-gray-500 text-sm border-b border-gray-200 pb-6 pt-3">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>BM Academy Founder</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Jan 03, 2026</span>
              </div>
            </div>
          </div>

          {/* --- Featured Image --- */}
          <div className="mb-8 rounded-xl overflow-hidden shadow-lg bg-gray-200 h-64 md:h-96 w-full flex items-center justify-center relative">
             {/* Placeholder for "Founder receiving award" - Replace with actual image */}
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop"
              alt="BM Academy founder receiving an education leadership award for skill-based learning excellence"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

          {/* --- Blog Content --- */}
          <article className="prose prose-lg max-w-none text-gray-700 space-y-12">
            
            {/* Intro */}
            <section>
                <p className="leading-relaxed">
                    In today’s rapidly evolving job market,<strong> education is no longer just about degrees—it’s about skills, adaptability, and real-world readiness.</strong> BM Academy has consistently stood at the forefront of this transformation, redefining learning through industry-relevant training and <strong><a href="https://www.thebmacademy.com/" target="_blank">career-driven education.</a></strong>
                </p>
                <p>
                    This commitment to excellence was recently recognized when <strong> BM Academy’s founder received a prestigious educational award</strong>, marking a significant milestone in the academy’s journey. The recognition is not just a personal achievement—it reflects BM Academy’s unwavering mission to <strong>shape tomorrow’s skilled professionals.</strong>
                </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Target className="text-red-500" /> Award-Winning Leadership That Inspires Change
              </h2>
              <div className="my-6 rounded-xl overflow-hidden shadow-md">
                 <img
                    src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop"
                    alt="BM Academy founder recognised for excellence in education leadership and social impact"
                    className="w-full h-64 object-cover"
                 />
              </div>
              <p>
                Strong institutions are built on strong leadership. The award received by BM Academy’s founder highlights a vision rooted in:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6 bg-gray-50 p-6 rounded-lg list-none">
                <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div> Quality education</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div> Skill-first learning</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div> Social responsibility</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div> Career empowerment</li>
              </ul>
              <p>
                This recognition reinforces the belief that <strong>education should create opportunities,</strong> bridge skill gaps, and enable learners to thrive in competitive industries.
              </p>
              <p>
                Under this leadership, BM Academy has grown into a <a href="https://www.thebmacademy.com/about.html" className="text-blue-700">trusted platform for students, professionals, and entrepreneurs</a>  seeking <strong>practical, outcome-oriented learning.</strong>
              </p>
              <div className="mt-6">
                <a href="https://api.whatsapp.com/send/?phone=919944940051&text=Hi%2C%20I%20read%20about%20BM%20Academy%E2%80%99s%20award-winning%20leadership%20and%20want%20course%20details.&type=phone_number&app_absent=0" target="_blank" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
                    Explore Courses at BM Academy <ArrowRight className="ml-2 w-4 h-4"/>
                </a>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                BM Academy’s Approach to Skill-Based Education
              </h2>
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Skill-based training at BM Academy focused on practical and industry-ready education"
                className="rounded-xl mb-6 shadow-sm"
              />
              <p>
                BM Academy focuses on <a href="https://www.thebmacademy.com/index.html" className="text-blue-600 hover:underline">hands-on, industry-aligned training</a> designed to meet current market demands. Rather than traditional theory-heavy models, the academy emphasizes:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white p-4 border-l-4 border-green-500 shadow-sm rounded-r-lg">
                    <h4 className="font-bold text-gray-800">Practical skill development</h4>
                </div>
                <div className="bg-white p-4 border-l-4 border-green-500 shadow-sm rounded-r-lg">
                    <h4 className="font-bold text-gray-800">Real-time projects and case studies</h4>
                </div>
                <div className="bg-white p-4 border-l-4 border-green-500 shadow-sm rounded-r-lg">
                    <h4 className="font-bold text-gray-800">Industry-expert mentorship</h4>
                </div>
                <div className="bg-white p-4 border-l-4 border-green-500 shadow-sm rounded-r-lg">
                    <h4 className="font-bold text-gray-800">Career-focused learning paths</h4>
                </div>
              </div>
              <p className="mt-4 italic text-gray-600">
                This approach ensures learners are not just certified—but <strong>job-ready and confident.</strong>
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Courses Designed for Tomorrow’s Careers
              </h2>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
                alt="Career-focused courses at BM Academy preparing students for future jobs"
                className="rounded-xl mb-6"
              />
              <p>
                BM Academy offers training programs aligned with fast-growing and future-ready domains, including:
              </p>
              <ul className="space-y-3 pl-2">
                <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 p-1 rounded mr-3 mt-1"><BookOpen className="w-4 h-4"/></span>
                    <div>
                        <strong><a href="https://www.thebmacademy.com/Digital.html" className="text-blue-600 hover:underline">Digital Marketing</a></strong>
                    </div>
                </li>
                <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 p-1 rounded mr-3 mt-1"><BookOpen className="w-4 h-4"/></span>
                    <div>
                        <strong>Web Development</strong>
                    </div>
                </li>
                <li className="flex items-start">
                    <span className="bg-orange-100 text-orange-800 p-1 rounded mr-3 mt-1"><BookOpen className="w-4 h-4"/></span>
                    <div>
                        <strong>Software & IT Skills</strong>
                    </div>
                </li>
                <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 p-1 rounded mr-3 mt-1"><BookOpen className="w-4 h-4"/></span>
                    <div>
                        <strong>Professional Certification Programs</strong>
                    </div>
                </li>
                <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 p-1 rounded mr-3 mt-1"><BookOpen className="w-4 h-4"/></span>
                    <div>
                        <strong>Career-oriented short-term courses</strong>
                    </div>
                </li>
              </ul>
              <p className="mt-4">
                Each program is structured to help learners <strong>upgrade skills, improve employability, and achieve career growth.</strong>
              </p>
              <div className="mt-6 text-center md:text-left">
                <button onClick={toggleModal} className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition">
                    View Career-Focused Courses
                </button>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Empowering Learners Beyond the Classroom
              </h2>
              
                <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="BM Academy empowering learners through mentorship and practical guidance"
                    className="w-full rounded-xl shadow-md"
                />
                <div>
                    <p className="mb-4">
                        Education at BM Academy <a href="https://blog.thebmacademy.com/" target="_blank" className="text-blue-600 hover:underline">goes beyond courses</a>. The academy actively supports learners through:
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-center text-gray-700"><Users className="w-4 h-4 mr-2 text-green-500"/> Career guidance and mentorship</li>
                        <li className="flex items-center text-gray-700"><Users className="w-4 h-4 mr-2 text-green-500"/> Practical exposure to real-world challenges</li>
                        <li className="flex items-center text-gray-700"><Users className="w-4 h-4 mr-2 text-green-500"/> Skill enhancement workshops</li>
                        <li className="flex items-center text-gray-700"><Users className="w-4 h-4 mr-2 text-green-500"/> Continuous learning resources</li>
                    </ul>
                </div>
              
              <p className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                This learner-centric ecosystem ensures that students are supported at every stage—from learning to career progression.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Recognition That Reflects a Bigger Mission
              </h2>
              <p>
                The recent award is a testament to BM Academy’s broader <a href="https://www.thebmacademy.com/index.html" className="text-blue-600 hover:underline">impact on education and skill development</a>. It acknowledges:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2 mb-6 text-gray-700 marker:text-blue-500">
                <li>The academy’s contribution to professional education</li>
                <li>Its role in empowering youth and working professionals</li>
                <li>A leadership vision focused on long-term societal impact</li>
              </ul>
              <p className="font-medium text-gray-900 mb-6">
                Such recognition strengthens BM Academy’s resolve to <strong>continue innovating, evolving, and delivering meaningful education.</strong>
              </p>
              <a href="https://api.whatsapp.com/send/?phone=919944940051&text=Hi%2C%20I%20read%20about%20BM%20Academy%E2%80%99s%20award-winning%20leadership%20and%20want%20course%20details.&type=phone_number&app_absent=0" className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                Learn with an Award-Winning Academy
              </a>
            </section>

            {/* Section 7 - Looking Ahead */}
            <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Looking Ahead: Building Future-Ready Professionals
                </h2>
                <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="BM Academy empowering future-ready professionals through career-focused education"
                    className="rounded-xl mb-6 w-full object-cover"
                />
                <p>
                    As industries evolve, BM Academy remains committed to staying ahead of change. With award-winning leadership and a learner-first philosophy, the academy aims to:
                </p>
                 <ul className="list-disc pl-6 space-y-2 mt-2 mb-6 text-gray-700 marker:text-blue-500">
                <li>Expand skill-driven programs</li>
                <li>Strengthen industry collaborations</li>
                <li>Empower more learners across diverse backgrounds</li>
                <li>Continue shaping professionals ready for tomorrow’s workforce</li>
              </ul>
            </section>

            {/* Section 8 - FAQ */}
            <section className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Lightbulb className="w-6 h-6 text-yellow-500 mr-2" /> Frequently Asked Questions
      </h2>
      
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 last:border-0">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-4 text-left focus:outline-none group"
            >
              <span className={`font-bold text-lg transition-colors duration-200 ${activeIndex === index ? 'text-blue-600' : 'text-gray-800 group-hover:text-blue-600'}`}>
                {faq.question}
              </span>
              {activeIndex === index ? (
                <ChevronUp className="w-5 h-5 text-blue-600 min-w-[20px]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-blue-600 min-w-[20px]" />
              )}
            </button>
            
            {/* Answer Section with simple transition logic */}
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? 'max-h-40 opacity-100 pb-4' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>

          </article>

          {/* --- CTA Section --- */}
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl text-white text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              🚀 Ready to upgrade your skills and build a future-ready career?
            </h2>
            <p className="mb-8 text-blue-100 max-w-lg mx-auto leading-relaxed">
              Explore industry-focused courses and start your learning journey with BM Academy today. Enroll. Upskill. Succeed.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a href="https://www.thebmacademy.com/contact.html" target="_blank"
                className="inline-flex justify-center items-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-blue-700 transition-colors cursor-pointer"
              >
                 Enquire about courses
              </a>
              <a
                href="https://thebmacademy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition-transform transform hover:-translate-y-1 shadow-lg"
              >
                Visit Website
              </a>
            </div>
          </div>
        </main>

        {/* --- Sidebar (Right Column) --- */}
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
              href={whatsappUrl}
              className="text-sm font-semibold text-green-700 underline hover:text-green-800"
            >
              Connect instantly &rarr;
            </a>
          </div>
        </aside>
      </div>

      {/* --- Footer --- */}
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
                  href="https://www.youtube.com/@BMACADEMYPONDY" target="_blank"
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

      {/* --- MODAL COMPONENT --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 bg-opacity-60 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden animate-fade-in-up">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-6 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">Free Counseling</h3>
                  <p className="text-blue-100 text-sm mt-1">
                    Let's discuss your career path
                  </p>
                </div>
                <button
                  onClick={toggleModal}
                  className="text-white/80 hover:text-white hover:bg-white/20 p-1 rounded-full transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Phone */}
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => {
                    // Allow only digits and limit to 10 characters
                    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
                    handleInputChange({ target: { name: "phone", value } });
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Enter your mobile number"
                  maxLength="10"
                />

                {/* Course Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Interested Course / Topic
                  </label>

                  <input
                    type="text"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    placeholder="e.g. Digital Marketing, Web Dev"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg
           focus:ring-2 focus:ring-blue-500 focus:border-blue-500
           outline-none transition bg-white"
                  />
                </div>

                {/* Location Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>

                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Enter your city / location"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg
           focus:ring-2 focus:ring-blue-500 focus:border-blue-500
           outline-none transition bg-white"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 mt-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Connect on WhatsApp
                </button>

                <p className="text-xs text-center text-gray-500 mt-2">
                  We'll redirect you to WhatsApp to send these details.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AwardWinningLeadership;  