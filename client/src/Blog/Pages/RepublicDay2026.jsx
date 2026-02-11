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
  Flag, // Added for Republic Day theme
} from "lucide-react";
import Logo from "../../assets/image/footer.png"; // Ensure path is correct
import bmlogo from "../../assets/blog/logo.png"; // Ensure path is correct
import { Link } from "react-router-dom";
import "../../Blog/Pages/css/Style.css"; // Ensure path is correct
import { Helmet } from "react-helmet";
import photoiamge from "../../assets/blog/photo.png"


const RepublicDay2026 = () => {
  // --- STATE FOR MODAL AND FORM ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "Skill-Based Education Inquiry",
    location: "Pondicherry",
  });

  const whatsappUrl =
    "https://wa.me/919944940051?text=Hi%2C%20I%20want%20to%20learn%20more%20about%20skill-based%20education%20at%20BM%20Academy.";

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
    const message = `*New Counseling Request - Republic Day Blog*\n------------------------\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Interested Course:* ${formData.course}\n*Location:* ${formData.location}\n------------------------\nHi BM Academy, I want to book a free session regarding skill-based education.`;
    const encodedMessage = encodeURIComponent(message);
    const waLink = `https://wa.me/919944940051?text=${encodedMessage}`;
    window.open(waLink, "_blank");
    setIsModalOpen(false);
  };

  // --- SCHEMAS ---
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is skill-based education?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Learning practical skills through hands-on experience and real-world projects."
        }
      },
      {
        "@type": "Question",
        "name": "Why is skill-based learning important for students?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It makes students job-ready and improves employability from day one."
        }
      },
      {
        "@type": "Question",
        "name": "How does BM Academy help students develop skills?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Through industry-aligned courses, practical training, and mentorship."
        }
      },
      {
        "@type": "Question",
        "name": "Who can benefit from skill-based education?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Students, graduates, job seekers, and professionals looking to upgrade skills."
        }
      },
      {
        "@type": "Question",
        "name": "How does skill-based education benefit India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It strengthens the workforce, supports entrepreneurship, and drives economic growth."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://blog.thebmacademy.com/blog/republic-day-2026"
    },
    "headline": "Republic Day 2026: How Skill-Based Education Builds a Stronger India | BM Academy",
    "image": "https://blog.thebmacademy.com/path-to-your-image.jpg", // REPLACE WITH REAL URL
    "author": {
      "@type": "Organization",
      "name": "BM Academy"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BM Academy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://blog.thebmacademy.com/path-to-your-logo.png" // REPLACE WITH REAL URL
      }
    },
    "datePublished": "2026-01-26",
    "dateModified": "2026-01-26",
    "description": "Discover how skill-based education empowers India’s youth and builds a stronger nation in 2026. Learn how BM Academy is shaping future-ready professionals."
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 relative">
      <Helmet>
        <title>Republic Day 2026: Skill-Based Education | BM Academy</title>
        <meta
          name="description"
          content="Discover how skill-based education empowers India’s youth and builds a stronger nation. Learn how BM Academy shapes future-ready professionals."
        />
        <link rel="canonical" href="https://blog.thebmacademy.com/blog/republic-day-2026" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Republic Day 2026: How Skill-Based Education Builds a Stronger India | BM Academy" />
        <meta property="og:description" content="Discover how skill-based education empowers India’s youth and builds a stronger nation in 2026. Learn how BM Academy is shaping future-ready professionals." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://blog.thebmacademy.com/blog/republic-day-2026" />
        <meta property="og:image" content="https://blog.thebmacademy.com/path-to-your-image.jpg" />
        <meta property="og:site_name" content="BM Academy" />

        {/* Schemas */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>

        {/* GA4 Tracking Code */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-102MXGE3GQ"></script>
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
          <nav
            className="flex mb-6 text-sm text-gray-500"
            aria-label="Breadcrumb"
          >
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  to="/"
                  className="inline-flex items-center hover:text-orange-600 transition-colors"
                >
                  <MessageSquareText className="w-4 h-4 mr-2" />
                  Blog
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                  <span className="ml-1 md:ml-2 text-gray-700 font-medium">
                    Republic Day 2026
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="mb-8">
            <div className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full font-semibold uppercase tracking-wide mb-4">
              Nation Building
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Republic Day 2026: How Skill-Based Education Builds a Stronger India | BM Academy
            </h1>

            <div className="flex items-center flex-wrap gap-4 text-gray-500 text-sm border-b border-gray-200 pb-6 pt-3">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span><a href="https://www.linkedin.com/in/kamarudeen-b-m-66508657/" target="_blank" rel="noreferrer">Kamarudeen BM</a></span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Jan 26, 2026</span>
              </div>
            </div>
          </div>

          {/* Image 1: Hero */}
          <div className="mb-8 rounded-xl overflow-hidden shadow-lg bg-gray-200 h-64 md:h-96 w-full flex items-center justify-center relative">
             {/* Decorative Flag Overlay */}
            <img
              src={photoiamge}
              alt="Republic Day 2026 skill-based education at BM Academy"
              className="w-full h-full object-cover"
            />
          </div>

          <article className="prose prose-lg max-w-none text-gray-700 ">
            {/* Introduction */}
            <p className="leading-relaxed text-gray-600 border-l-4 border-orange-500 pl-4">
              Every year on Republic Day, India celebrates the values of freedom, equality, and opportunity. As we step into Republic Day 2026, the definition of national strength has evolved. A stronger India is built not just through policies and infrastructure—but through skilled, job-ready individuals who can contribute meaningfully to the economy.
            </p>

            <p>
              At <a href="https://www.thebmacademy.com/" className="text-blue-600 font-bold hover:underline" target="_blank" rel="noreferrer">BM Academy</a>, we believe skill-based education is the foundation for India’s future growth.
            </p>
            
            <p>
              Skill-based learning at BM Academy empowers women of all ages. Whether you are a student, a working professional, or considering a career switch, there are no limits to learning and growing. Women can explore practical skills in technology, digital marketing, entrepreneurship, and more—gaining confidence, independence, and career opportunities. By embracing hands-on learning, women not only enhance their personal growth but also contribute to India’s economic and social development.
            </p>

            {/* Section 1 */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                Republic Day 2026: A New Meaning of National Progress
              </h2>
              
              <img
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Republic Day 2026 and India’s progress through skill-based education"
                className="rounded-2xl mb-8 shadow-xl w-full"
              />

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                India is one of the youngest nations in the world. <span className="font-semibold text-gray-900">More than 65% of our population is under the age of 35.</span>
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-6">
                <p className="font-semibold text-gray-800 mb-2">This youth advantage can become:</p>
                <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500"/> A national strength, if equipped with the right skills
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500"/> A lost opportunity, if limited to theoretical education alone
                    </li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                Republic Day reminds us that freedom also means the freedom to learn, adapt, and grow with the changing world through <a href="https://blog.thebmacademy.com/blog/why-ai-skills-fsd" className="text-blue-600 font-bold hover:underline" target="_blank" rel="noreferrer">future-ready learning programs</a>.
              </p>

              <div className="text-center my-8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-orange-600 text-white px-10 py-3 rounded-full font-bold text-lg hover:bg-orange-700 transition-all shadow-lg"
                >
                  <MessageCircle className="w-5 h-5"/>
                  Explore Skill-Based Learning
                </a>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                Degrees Alone Are No Longer Enough
              </h2>
              <img
                src="https://images.unsplash.com/photo-1758270705518-b61b40527e76?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D     "
                alt="Practical skill-based learning for students in India"
                className="rounded-xl mb-6 shadow-md w-full"
              />
              <p>For decades, degrees were considered the ultimate career passport. But today’s reality is different.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-red-50 p-5 rounded-lg border border-red-100">
                      <h4 className="font-bold text-red-800 mb-3">Graduates Face:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-500 mt-1"/> Difficulty finding jobs</li>
                          <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-500 mt-1"/> Skill gaps in education</li>
                          <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-500 mt-1"/> Lack of practical exposure</li>
                      </ul>
                  </div>
                  <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                      <h4 className="font-bold text-green-800 mb-3">Employers Look For:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1"/> Practical skills</li>
                          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1"/> Problem-solving ability</li>
                          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1"/> Industry-ready mindset</li>
                      </ul>
                  </div>
              </div>

              <p className="mt-6 text-lg">
                This is where <a href="https://www.thebmacademy.com/about.html" className="text-blue-600 font-bold hover:underline" target="_blank" rel="noreferrer">skill-based training programs</a> become essential.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                What Is Skill-Based Education?
              </h2>
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
                alt="Skill-based education focusing on practical learning in India"
                className="rounded-xl mb-6 shadow-md w-full"
              />
              <p className="mb-4">
                Skill-based education focuses on learning by doing, not just learning by reading. It includes:
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {["Practical training", "Real-world projects", "Tool-based learning", "Industry-relevant curriculum", "Continuous skill upgrading"].map((item, idx)=>(
                    <li key={idx} className="flex items-center gap-3 bg-white p-3 rounded shadow-sm border border-gray-100">
                        <Monitor className="w-5 h-5 text-blue-500" />
                        <span className="font-medium text-gray-700">{item}</span>
                    </li>
                ))}
              </ul>

              <p className="text-lg">
                Instead of memorizing concepts, learners gain <a href="https://blog.thebmacademy.com/blog/job-ready-courses-in-pondicherry" className="text-blue-600 font-bold hover:underline" target="_blank" rel="noreferrer">job-ready skills</a> that can be applied immediately.
              </p>

              <div className="text-center my-6">
                <button
                  onClick={toggleModal}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition shadow-lg"
                >
                  <Zap className="w-5 h-5"/>
                  Learn How Skill-Based Education Works
                </button>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    How Skill-Based Education Builds a Stronger India
                </h2>
                <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                    alt="Skill development empowering India’s youth and economy"
                    className="rounded-xl mb-8 shadow-xl w-full"
                />
                
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-orange-600">1</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">Improves Employability</h3>
                            <p className="text-gray-600 mt-1">When students are trained with real-world skills, they become employable from day one. This directly reduces unemployment and underemployment.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-blue-600">2</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">Supports Entrepreneurship & Startups</h3>
                            <p className="text-gray-600 mt-1">Skilled individuals can build businesses, freelance, and create employment instead of only seeking jobs.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-green-600">3</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">Strengthens the Digital Economy</h3>
                            <p className="text-gray-600 mt-1">India’s growth in technology, digital marketing, AI, and automation depends on a skilled workforce that understands modern tools.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-purple-600">4</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">Empowers Youth from All Backgrounds</h3>
                            <p className="text-gray-600 mt-1">Skill-based learning gives equal opportunity to students from different regions, backgrounds, and academic paths.</p>
                        </div>
                    </div>
                </div>

                <p className="mt-8 text-lg">
                    Institutions like <a href="https://www.thebmacademy.com/" className="text-blue-600 font-bold hover:underline" target="_blank" rel="noreferrer">BM Academy</a> play a key role in delivering industry-aligned skill education that strengthens India’s workforce.
                </p>

                <div className="text-center my-8">
                    <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-10 py-3 rounded-full font-bold text-lg hover:bg-green-700 transition-all shadow-lg"
                    >
                    <Briefcase className="w-5 h-5"/>
                    See How Skills Create Career Opportunities
                    </a>
                </div>
            </section>

            {/* Section 5 */}
            <section className="mt-12  p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 ">
                    The Role of BM Academy in Skill Development
                </h2>
                <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="BM Academy skill development programs empowering students"
                    className="rounded-xl mb-6 shadow-md w-full h-64 object-cover"
                />
                
                <p className="text-center text-lg mb-6">
                    At BM Academy, our mission is simple: <span className="font-bold">To transform learners into confident, skilled professionals.</span>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["Industry-oriented courses", "Practical, hands-on training", "Career-focused learning paths", "Continuous mentorship and guidance"].map((item, idx)=>(
                        <div key={idx} className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm">
                            <CheckCircle2 className="w-5 h-5 text-blue-600" />
                            <span className="font-semibold text-gray-800">{item}</span>
                        </div>
                    ))}
                </div>

                <p className="mt-6 text-center">
                    Our approach bridges the gap between education and employment, helping students become <a href="https://blog.thebmacademy.com/blog/new-year-new-skill" className="text-blue-600 font-bold hover:underline" target="_blank" rel="noreferrer">future-ready professionals</a>.
                </p>
            </section>

            {/* Section 6 */}
            <section className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    Republic Day 2026: Freedom to Learn, Freedom to Grow
                </h2>
                <img
                    src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="Freedom to learn and grow through skill development in 2026"
                    className="rounded-2xl mb-8 shadow-xl w-full"
                />
                <p className="text-lg text-gray-700 mb-4">True independence in 2026 means:</p>
                <ul className="space-y-3 mb-6 pl-4 border-l-2 border-orange-400">
                    <li className="text-gray-700 italic">"Freedom to choose skills over outdated systems"</li>
                    <li className="text-gray-700 italic">"Freedom to build careers based on ability, not just certificates"</li>
                    <li className="text-gray-700 italic">"Freedom to grow continuously in a fast-changing world"</li>
                </ul>
                
                <p className="text-lg font-semibold text-gray-800">
                    When India invests in skills, it invests in: <span className="text-orange-600">Stronger careers, Stronger businesses, A stronger nation.</span>
                </p>

                <p className="mt-4">
                    This vision is strengthened through <a href="https://www.thebmacademy.com/Python.html" className="text-blue-600 font-bold hover:underline" target="_blank" rel="noreferrer">skill development programs</a> that focus on real-world impact.
                </p>

                <div className="text-center my-8">
                    <a
                    href={whatsappUrl}
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all shadow-lg"
                    >
                    <Flag className="w-5 h-5"/>
                    Start Your Skill Journey Today
                    </a>
                </div>
            </section>

            {/* Conclusion */}
            <div className="mt-12 border-t pt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Conclusion: Building India’s Future Starts with Skills
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  This Republic Day 2026, let us look beyond celebration and focus on nation-building through education. Skill-based learning is no longer optional—it is essential for India’s progress.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    At <a href="https://www.thebmacademy.com/" className="text-blue-600 font-bold hover:underline" target="_blank" rel="noreferrer">BM Academy</a>, we are proud to contribute to this vision by empowering students with skills that matter.
                </p>
                <p className="text-xl font-bold text-center text-gray-800 bg-orange-50 p-4 rounded-lg border border-orange-200">
                  🇮🇳 A skilled India is a strong India. 🇮🇳
                </p>
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQ)</h2>
                <div className="space-y-4">
                    {[
                        {q: "What is skill-based education?", a: "Learning practical skills through hands-on experience and real-world projects."},
                        {q: "Why is skill-based learning important for students?", a: "It makes students job-ready and improves employability from day one."},
                        {q: "How does BM Academy help students develop skills?", a: "Through industry-aligned courses, practical training, and mentorship."},
                        {q: "Who can benefit from skill-based education?", a: "Students, graduates, job seekers, and professionals looking to upgrade skills."},
                        {q: "How does skill-based education benefit India?", a: "It strengthens the workforce, supports entrepreneurship, and drives economic growth."}
                    ].map((faq, idx) => (
                        <div key={idx} className="bg-white p-5 rounded-lg border border-gray-200 hover:shadow-md transition">
                            <h3 className="font-bold text-gray-800 mb-2 flex items-start gap-2">
                                <span className="text-blue-600">Q{idx+1}:</span> {faq.q}
                            </h3>
                            <p className="text-gray-600 ml-8 text-sm md:text-base">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>

          </article>

          {/* CTA Section */}
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-2xl text-white text-center shadow-xl relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-30 h-30 bg-white opacity-20 rounded-full"></div>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
                🚀 Ready to build skills that power a stronger India?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto relative z-10">
                This Republic Day 2026, take your first step towards a future driven by practical knowledge, confidence, and career-ready skills. Join BM Academy and learn through industry-focused programs designed for real-world success.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row justify-center gap-4 relative z-10">
                <a
                href="https://www.thebmacademy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition"
                >
                Visit BM Academy
                </a>

                <a
                href="https://www.thebmacademy.com/contact.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-600 transition"
                >
                Enquire Now
                </a>
            </div>
            <p className="mt-6 text-sm text-blue-200 font-medium">
                👉 Learn skills. Build careers. Grow with India.
            </p>
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
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                <h3 className="font-bold text-green-800 mb-2">Have Questions?</h3>
                <p className="text-sm text-green-700 mb-4">
                  Not sure which course fits you? Talk to our counselor today.
                </p>
                <a
                  href={whatsappUrl}
                  className="text-sm font-semibold text-green-700 underline hover:text-green-800 flex items-center gap-1"
                >
                  Connect instantly <MessageCircle className="w-4 h-4"/>
                </a>
              </div>
            </aside>
      </div>

      {/* --- Footer (Standard Design) --- */}
      <footer className="footer">
        {/* ... (Kept as per previous component structure) ... */}
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
                       rel="noreferrer"
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
                        <a className="contact-link" href="#address">
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
            <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 text-white flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">Free Counseling</h3>
                <p className="text-orange-100 text-sm">
                  Discuss your Skill Development path
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
                  className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
                  onChange={handleInputChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  maxLength="10"
                  required
                  className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
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

export default RepublicDay2026;