import React, { useState } from "react";
import {
  ChevronRight,
  CheckCircle2,
  Calendar,
  User,
  MessageSquareText,
  Video,
  Scissors,
  Wand2,
  Clapperboard,
  Youtube,
  Instagram,
  TrendingUp,
  Layers,
  Users,
  MonitorPlay,
  X,
  MessageCircle,
  Facebook,
  Linkedin,
  Mail,
  ArrowRight,
  Rocket,
} from "lucide-react";
import Logo from "../../assets/image/footer.png";
import bmlogo from "../../assets/blog/logo.png";
import { Link } from "react-router-dom";
import "../../Blog/Pages/css/Style.css"; // Ensure this path is correct for your project
import { Helmet } from "react-helmet";

// You can replace this with your specific AI Video Editing banner image
import coverimage from "../../assets/image/Aiblog.jpg"; 

const AIVideoEditing = () => {
  // --- STATE FOR MODAL AND FORM ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "AI Video Editing", // Updated Course Name
    location: "Pondicherry",
  });

  // Updated WhatsApp URL for the float/CTA buttons
  const whatsappUrl =
    "https://wa.me/919944940051?text=Hi%20BM%20Academy%20Team%2C%20I%20want%20to%20learn%20AI%20video%20editing%20skills.";

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
    // Updated WhatsApp message for the form submission
    const message = `*New Counseling Request*\n------------------------\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Interested Course:* ${formData.course}\n*Location:* ${formData.location}\n------------------------\nHi BM Academy Team, I want to learn AI video editing skills.`;
    const encodedMessage = encodeURIComponent(message);
    const waLink = `https://wa.me/919944940051?text=${encodedMessage}`;
    window.open(waLink, "_blank");
    setIsModalOpen(false);
  };

  // --- SCHEMAS (JSON-LD) ---
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://blog.thebmacademy.com/blog/ai-video-editing-2026"
    },
    "headline": "AI Video Editing 2026: What Creators Must Learn",
    "description": "AI video editing is transforming content creation. Learn the essential AI video editing skills creators must master in 2026 with BM Academy.",
    "image": "https://blog.thebmacademy.com/path-to-your-main-image.jpg", // Replace with actual image URL
    "author": {
      "@type": "Organization",
      "name": "BM Academy"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BM Academy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://blog.thebmacademy.com/path-to-your-logo.png" // Replace with actual logo URL
      }
    },
    "datePublished": "2026-01-01",
    "dateModified": "2026-02-11"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AI video editing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI video editing uses artificial intelligence to automate and enhance video editing tasks."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need prior editing experience to learn AI video editing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, beginners can learn AI video editing without prior experience."
        }
      },
      {
        "@type": "Question",
        "name": "Is AI video editing suitable for students and professionals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, it benefits students, creators, freelancers, and working professionals."
        }
      },
      {
        "@type": "Question",
        "name": "Why is AI video editing important in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Because video demand is growing and AI helps create content faster and smarter."
        }
      },
      {
        "@type": "Question",
        "name": "How does BM Academy teach AI video editing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BM Academy teaches AI video editing through practical training, real projects, and tool-based learning."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 relative">
      <Helmet>
        <title>AI Video Editing 2026: What Creators Must Learn | BM Academy</title>
        <meta
          name="description"
          content="AI video editing is transforming content creation. Learn the essential AI video editing skills creators must master in 2026 with BM Academy."
        />
        <link rel="canonical" href="https://blog.thebmacademy.com/blog/ai-video-editing-2026" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="AI Video Editing 2026: What Creators Must Learn | BM Academy" />
        <meta property="og:description" content="AI video editing is transforming content creation. Learn the essential AI video editing skills creators must master in 2026 with BM Academy." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://blog.thebmacademy.com/blog/ai-video-editing-2026" />
        <meta property="og:image" content="https://blog.thebmacademy.com/path-to-your-main-image.jpg" />
        <meta property="og:site_name" content="BM Academy" />

        {/* GA4 Tracking */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-102MXGE3GQ"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-102MXGE3GQ');
          `}
        </script>

        {/* JSON-LD Schemas */}
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
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
                  <span className="ml-1 md:ml-2 text-gray-700 font-medium">
                    AI Video Editing
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Header Section */}
          <div className="mb-8">
            <div className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full font-semibold uppercase tracking-wide mb-4">
              Creator Economy 2026
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              The Rise of AI Video Editing: What Creators Must Learn Now | BM Academy
            </h1>

            <div className="flex items-center flex-wrap gap-4 text-gray-500 text-sm border-b border-gray-200 pb-6 pt-3">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>
                  <a href="https://www.linkedin.com/in/kamarudeen-b-m-66508657/" target="_blank" rel="noreferrer">
                    Kamarudeen BM
                  </a>
                </span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Feb 12, 2026</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mb-8 rounded-xl overflow-hidden shadow-lg bg-gray-200 h-64 md:h-96 w-full flex items-center justify-center relative">
            <img
              src={coverimage} // Replace with specific AI Video Editing Image
              alt="AI video editing tools transforming content creation in 2026"
              className="w-full h-full object-cover"
            />
            
          </div>

          <article className="prose prose-lg max-w-none text-gray-700">
            {/* Introduction */}
            <p className="text-xl leading-relaxed text-gray-600 border-l-4 border-indigo-500 pl-4">
              AI is rapidly transforming the way videos are created, edited, and published. What once took hours of manual work can now be completed in minutes using AI-powered tools.
            </p>

            <p>
              As we move into 2026, <strong>AI video editing is no longer optional</strong>—it has become an essential skill for creators, marketers, and businesses.
            </p>
            <p>
              At <a href="https://www.thebmacademy.com/" target="_blank" rel="noreferrer" className="text-blue-600 font-bold hover:underline">BM Academy</a>, we believe that understanding AI-driven video editing is key to staying competitive in today’s digital-first world.
            </p>

            {/* Section 1: How AI Is Changing Video Editing */}
            <section className="py-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Wand2 className="w-6 h-6 text-indigo-600" />
                How AI Is Changing Video Editing
              </h2>

              <img
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80"
                alt="How AI is changing video editing with automation and smart tools"
                className="rounded-2xl mb-6 shadow-md w-full"
              />

              <p>
                AI has automated many complex editing tasks that traditionally required technical expertise. Modern AI tools can now analyze footage, detect scenes, add transitions, enhance visuals, and even generate captions automatically.
              </p>

              <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 my-6">
                <h4 className="font-bold text-indigo-900 mb-3">AI video editing helps creators:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-1" />
                    <span>Save time and reduce editing effort</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-1" />
                    <span>Maintain consistent video quality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-1" />
                    <span>Produce more content with fewer resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-1" />
                    <span>Focus on creativity instead of technical work</span>
                  </li>
                </ul>
              </div>

              <p>
                This shift allows beginners and professionals alike to create high-quality videos efficiently. These advancements are closely connected to how <a href="https://blog.thebmacademy.com/blog/top-ai-tools-digital-marketing-course-2025" target="_blank" rel="noreferrer" className="text-blue-600 font-bold hover:underline">digital marketing and content creation</a> are evolving with AI.
              </p>

              <div className="mt-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 transition shadow-md"
                >
                  <ArrowRight className="w-5 h-5" /> Explore AI Video Editing Tools
                </a>
              </div>
            </section>

            {/* Section 2: Why AI Video Editing Matters */}
            <section className="py-8 border-t border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-red-600" />
                Why AI Video Editing Matters for Creators in 2026
              </h2>

              <img
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1200&q=80"
                alt="Why AI video editing is important for creators in 2026"
                className="rounded-2xl mb-6 shadow-md w-full"
              />

              <p>
                In 2026, video content dominates social media, marketing, and online education. Platforms prioritize video formats, making AI video editing a must-have skill.
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                {[
                  "Keep up with fast content demands",
                  "Improve engagement with smart edits",
                  "Adapt videos for multiple platforms",
                  "Stay relevant in competitive digital spaces"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <div className="p-2 bg-red-100 rounded-full text-red-600">
                       <Youtube className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>

              <p>
                Creators who ignore AI risk falling behind as content expectations continue to rise. Staying competitive in 2026 requires building <a href="https://blog.thebmacademy.com/blog/job-ready-courses-in-pondicherry" target="_blank" rel="noreferrer" className="text-blue-600 font-bold hover:underline">job-ready digital skills</a> aligned with modern platforms.
              </p>

              <div className="mt-6">
                <button
                  onClick={toggleModal}
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition shadow-md"
                >
                  <ArrowRight className="w-5 h-5" /> Stay Ahead as a Creator
                </button>
              </div>
            </section>

            {/* Section 3: Essential Skills */}
            <section className="py-8 border-t border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clapperboard className="w-6 h-6 text-green-600" />
                Essential AI Video Editing Skills Creators Must Learn
              </h2>

              <img
                src="https://images.unsplash.com/photo-1650654291685-d4e8f17e36a3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Creator editing video on laptop with AI tools"
                className="rounded-2xl mb-6 shadow-md w-full"
              />

              <p className="mb-4">To succeed with AI video editing, creators should focus on learning:</p>

              <div className="space-y-4">
                 {[
                   { icon: Scissors, text: "AI-assisted video trimming and scene detection" },
                   { icon: MessageSquareText, text: "Automated captions and subtitles" },
                   { icon: Wand2, text: "Smart color correction and enhancement" },
                   { icon: Layers, text: "AI voiceovers and background audio tools" },
                   { icon: MonitorPlay, text: "Platform-specific video optimization" }
                 ].map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-3 hover:bg-green-50 rounded-lg transition">
                        <skill.icon className="w-6 h-6 text-green-600 flex-shrink-0" />
                        <span className="font-medium text-gray-800">{skill.text}</span>
                    </div>
                 ))}
              </div>

              <p className="mt-6">
                Mastering these skills allows creators to produce professional-quality videos with speed and confidence. These skills are best developed through structured <a href="https://www.thebmacademy.com/about.html" target="_blank" rel="noreferrer" className="text-blue-600 font-bold hover:underline">skill-based training programs</a>.
              </p>

              <div className="mt-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition shadow-md"
                >
                  <ArrowRight className="w-5 h-5" /> Learn AI Video Editing Skills
                </a>
              </div>
            </section>

             {/* Section 4: Who Should Learn */}
             <section className="py-8 border-t border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-blue-600" />
                Who Should Learn AI Video Editing?
              </h2>

              <p className="mb-6 text-lg">
                AI video editing is for everyone—there is no age limit or background restriction. It benefits:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {[
                      "Content creators & YouTubers",
                      "Digital marketers",
                      "Students & beginners",
                      "Business owners",
                      "Freelancers",
                      "Professionals upgrading skills"
                  ].map((persona, i) => (
                      <div key={i} className="bg-blue-50 text-blue-800 px-4 py-3 rounded-lg font-semibold text-center border border-blue-100">
                          {persona}
                      </div>
                  ))}
              </div>

              <p>
                No matter where you start, AI video editing opens new creative and career opportunities. This makes AI video editing a strong option for those exploring <a href="https://blog.thebmacademy.com/blog/new-year-new-skill" target="_blank" rel="noreferrer" className="text-blue-600 font-bold hover:underline">future-ready career paths</a>.
              </p>

              <div className="mt-6 text-center md:text-left">
                <button
                  onClick={toggleModal}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-md"
                >
                  <ArrowRight className="w-5 h-5" /> Start Learning Today
                </button>
              </div>
            </section>

            {/* Section 5: How BM Academy Helps */}
            <section className="py-8 bg-gray-50 -mx-4 px-4 md:px-8 rounded-2xl my-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-7 h-7 text-indigo-700" />
                How BM Academy Helps You Master AI Video Editing
              </h2>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                        alt="BM Academy AI video editing training and practical learning"
                        className="rounded-xl shadow-lg"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <p className="text-gray-700 mb-4">
                        At BM Academy, we focus on practical, industry-aligned learning. Our AI video editing training emphasizes real-world applications, not just theory.
                    </p>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                            <span className="font-semibold">Hands-on training with AI tools</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                            <span className="font-semibold">Beginner to advanced learning paths</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                            <span className="font-semibold">Creator-focused project work</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                            <span className="font-semibold">Mentorship and career guidance</span>
                        </div>
                    </div>
                  </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="https://www.thebmacademy.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-indigo-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-800 transition shadow-xl"
                >
                  <ArrowRight className="w-5 h-5" /> Join BM Academy
                </a>
              </div>
            </section>

            {/* Conclusion */}
            <div className="border-t pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Conclusion: AI Video Editing Is the Future of Content Creation
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    AI is redefining how videos are created and consumed. Creators who learn AI video editing now will lead the future of digital content, while others struggle to keep up.
                </p>
                <p className="font-semibold text-gray-900 mb-6">
                    At BM Academy, we empower creators with skills that matter—today and tomorrow. Take the next step by exploring <a href="https://www.thebmacademy.com/contact.html" target="_blank" rel="noreferrer" className="text-blue-600 font-bold hover:underline">AI-focused courses at BM Academy</a>.
                </p>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 text-center">
                    <p className="text-xl font-bold text-green-800">
                    <Rocket className="w-6 h-6 inline-block mr-2" /> Learn smart. Create faster. Grow stronger with AI video editing.
                    </p>
                </div>
            </div>

            {/* FAQs */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
                <div className="space-y-4">
                    {[
                        { q: "What is AI video editing?", a: "AI video editing uses artificial intelligence to automate and enhance video editing tasks." },
                        { q: "Do I need prior editing experience to learn AI video editing?", a: "No, beginners can learn AI video editing without prior experience." },
                        { q: "Is AI video editing suitable for students and professionals?", a: "Yes, it benefits students, creators, freelancers, and working professionals." },
                        { q: "Why is AI video editing important in 2026?", a: "Because video demand is growing and AI helps create content faster and smarter." },
                        { q: "How does BM Academy teach AI video editing?", a: "BM Academy teaches AI video editing through practical training, real projects, and tool-based learning." }
                    ].map((item, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                            <h3 className="font-bold text-gray-900 text-lg mb-2">Q{index+1}: {item.q}</h3>
                            <p className="text-gray-600">{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>

          </article>
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
              href={whatsappUrl}
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
                  Discuss your AI Video Editing career
                </p>
              </div>
              <button
                onClick={toggleModal}
                className="hover:bg-white/20 p-1 rounded-full"
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
                  className="w-full px-4 py-2 border rounded-lg bg-gray-50"
                />
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition"
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

export default AIVideoEditing;