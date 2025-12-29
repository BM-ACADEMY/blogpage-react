import React, { useState } from "react";
import {
  ChevronRight,
  CheckCircle,
  MessageCircle,
  Calendar,
  User,
  Monitor,
  Briefcase,
  MessageSquareText,
  Facebook,
  Instagram,
  Linkedin,
  X,
  TrendingUp,
  Rocket,
  LineChart,
  Laptop,
  Target,
  Star,
  Lightbulb,
  Gift,
  Award,
  Pin,
  ArrowRight,
  HelpCircle,
  LinkIcon
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// --- Assets ---
// Ensure these paths match your project structure
import Logo from "../../assets/image/footer.png";
import bmlogo from "../../assets/blog/logo.png";
import "../../Blog/Pages/css/Style.css"; 

const Futureskills = () => {
  // --- STATE FOR MODAL AND FORM ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "AI + Digital Marketing", // Default value
    location: "",
  });

  const whatsappUrl = "https://wa.me/919944940051?text=Hi%20BM%20Academy%2C%20I%20read%20your%20blog%20on%20New%20Year%20skills.%20I%20want%20to%20know%20more%20about%20your%20future-ready%20courses.";

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
    const message = `*New Counseling Request (New Year Blog)*
------------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Interested Course:* ${formData.course}
*Location Preference:* ${formData.location}
------------------------
Hi BM Academy, I would like to book a free counseling session based on your blog post.`;

    const encodedMessage = encodeURIComponent(message);
    const waLink = `https://wa.me/919944940051?text=${encodedMessage}`;

    window.open(waLink, "_blank");
    setIsModalOpen(false);
    setFormData({
      name: "",
      phone: "",
      course: "AI + Digital Marketing",
      location: "",
    }); 
  };

  // --- SCHEMAS (JSON-LD) ---
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "New Year, New Skill: Future-Ready Learning with BM Academy",
    "image": "https://www.thebmacademy.com/assets/images/new-year-new-skill.jpg",
    "author": {
      "@type": "Organization",
      "name": "BM Academy"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BM Academy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.thebmacademy.com/assets/blog/logo.png"
      }
    },
    "datePublished": "2025-12-22",
    "dateModified": "2025-12-22",
    "description": "Start 2026 with future-ready skills! Learn AI + Digital Marketing or AI + Full Stack Development at BM Academy. Free 3-day one-to-one counselling."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Are BM Academy courses suitable for beginners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, BM Academy courses are designed for beginners as well as professionals with hands-on learning."
      }
    },{
      "@type": "Question",
      "name": "What makes AI-integrated courses better?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI-integrated courses prepare learners for modern job roles involving automation, analytics, and smart tools."
      }
    },{
      "@type": "Question",
      "name": "Is free counselling really free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, BM Academy provides 3 days of completely free one-to-one career counselling."
      }
    }]
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 relative">
      {/* --- SEO & METADATA --- */}
      <Helmet>
        <title>New Year, New Skill | AI + Digital Marketing & Full Stack Courses | BM Academy</title>
        <meta name="description" content="Start 2026 with future-ready skills! Learn AI + Digital Marketing or AI + Full Stack Development at BM Academy. Free 3-day one-to-one counselling." />
        <link rel="canonical" href="https://www.thebmacademy.com/blog/new-year-new-skill" />
        
        {/* Open Graph */}
        <meta property="og:title" content="New Year, New Skill | AI + Digital Marketing & Full Stack Courses | BM Academy" />
        <meta property="og:description" content="Start 2026 with future-ready skills! Learn AI + Digital Marketing or AI + Full Stack Development at BM Academy. Free 3-day one-to-one counselling." />
        <meta property="og:image" content="https://www.thebmacademy.com/assets/images/new-year-new-skill.jpg" />
        <meta property="og:url" content="https://www.thebmacademy.com/blog/new-year-new-skill" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="BM Academy" />

        {/* JSON-LD Schemas */}
        <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>


         <script async src="https://www.googletagmanager.com/gtag/js?id=G-RVXHVZMRNX"></script>

  <script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-RVXHVZMRNX', {
        page_path: window.location.pathname,
      });
    `}
  </script>


  
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* --- Main Content Area (Left Column) --- */}
        <main className="lg:col-span-8">
          
          {/* --- Breadcrumb Section --- */}
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
                    New Year, New Skill
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          {/* --- Article Header --- */}
          <div className="mb-8">
            <div className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full font-semibold uppercase tracking-wide mb-4">
              Future Ready
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              New Year, New Skill: Future-Ready Learning with BM Academy
            </h1>

            {/* Meta Data */}
            <div className="flex items-center flex-wrap gap-4 text-gray-500 text-sm border-b border-gray-200 pb-6 pt-3">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>BM Academy Team</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Dec 22, 2025</span>
              </div>
            </div>
          </div>

          {/* --- Featured Image (Hero) --- */}
          <div className="mb-8 rounded-xl overflow-hidden shadow-lg bg-gray-200 h-64 md:h-96 w-full relative group">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="Learn AI, Digital Marketing, and Full Stack Development at BM Academy in 2026"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
                <p className="font-bold text-lg">Kickstart 2026 with In-Demand Skills</p>
            </div>
          </div>

          {/* --- Blog Content --- */}
          <article className="prose prose-lg max-w-none text-gray-700 space-y-10">
            
            {/* Intro */}
            <section>
              <p>
                As we step into a brand-new year, there’s no better time to rethink your goals and upgrade your skills. In today’s fast-moving job market, simply having a degree isn’t enough. Employers are prioritising future-ready skills that help businesses grow and innovate.{" "}
                <a 
                  href="https://www.thebmacademy.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 font-bold hover:underline"
                >
                  BM Academy
                </a>{" "}
                empowers learners with industry-driven training that opens doors to real career opportunities.
              </p>
              
              <div className="mt-6 text-center">
                <button 
                  onClick={toggleModal}
                  className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition shadow-md"
                >
                  Enroll Now & Start Learning <ArrowRight className="ml-2 w-5 h-5"/>
                </button>
              </div>
            </section>

            {/* Section 1: Why Upskilling Matters */}
       <section>
  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
    <TrendingUp className="w-6 h-6 mr-2 text-blue-500" />
    Why Upskilling Matters in 2026
  </h2>
  <p>
    The global job landscape is rapidly evolving, and skills related to AI, digital technologies, and software development are seeing unprecedented demand.
  </p>

  {/* Changed layout: Removed 'md:grid-cols-3' and added 'grid-cols-1' to stack them */}
  <div className="grid grid-cols-1 gap-6 mt-6">
    
    {/* Card 1 */}
    <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition text-center md:text-left">
      <Rocket className="w-8 h-8 text-indigo-500 mb-2 mx-auto md:mx-0" />
      <h3 className="font-bold text-lg text-gray-900 mb-2">AI Skills are Essential</h3>
      <p className="text-sm">
        AI fluency is becoming a baseline requirement across industries. Employers value professionals who can use AI tools to improve productivity, automate tasks, and make data-driven decisions. Leadership roles related to AI have also grown significantly, highlighting the importance of AI expertise.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition text-center md:text-left">
      <LineChart className="w-8 h-8 text-indigo-500 mb-2 mx-auto md:mx-0" />
      <h3 className="font-bold text-lg text-gray-900 mb-2">Digital Marketing on the Rise</h3>
      <p className="text-sm">
        Digital marketing roles continue to expand as businesses invest more in online growth. Professionals skilled in AI-powered marketing tools, analytics, and automation stand out in today’s competitive market.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition text-center md:text-left">
      <Laptop className="w-8 h-8 text-indigo-500 mb-2 mx-auto md:mx-0" />
      <h3 className="font-bold text-lg text-gray-900 mb-2">Full Stack Development: Steady Growth</h3>
      <p className="text-sm">
        Full stack developers remain in high demand across industries. Those who can integrate AI into applications gain an added advantage, making them valuable assets to modern tech teams.
      </p>
    </div>

  </div>
</section>

            {/* Section 2: Courses */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="w-6 h-6 mr-2 text-blue-500" />
                Courses That Put You Ahead
              </h2>
              
              <img
                 src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                 alt="AI + Digital Marketing and AI + Full Stack Development Courses"
                 className="rounded-xl w-full h-64 object-cover mb-6"
               />

              <p className="mb-6">At BM Academy, you can build skills that matter in 2026 and beyond:</p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Course 1 */}
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-sm">
                    <div className="flex items-center mb-4">
                        <Star className="w-6 h-6 text-yellow-500 mr-2" />
                        <h3 className="text-xl font-bold text-blue-800">
                            <a href="https://www.thebmacademy.com/Digital.html" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                AI + Digital Marketing
                            </a>
                        </h3>
                    </div>
                    <p className="mb-4 text-sm">This course blends AI tools with modern digital marketing strategies to help you:</p>
                    <ul className="list-none space-y-2 mb-6 text-sm">
                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 shrink-0"/> Automate and personalise campaigns</li>
                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 shrink-0"/> Analyse data for better ROI</li>
                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 shrink-0"/> Create high-impact content using AI tools</li>
                    </ul>
                    <button onClick={toggleModal} className="w-full text-center text-sm font-bold text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                        Book Free Counselling
                    </button>
                </div>

                {/* Course 2 */}
                <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100 shadow-sm">
                    <div className="flex items-center mb-4">
                        <Lightbulb className="w-6 h-6 text-purple-600 mr-2" />
                        <h3 className="text-xl font-bold text-purple-800">
                            <a href="https://www.thebmacademy.com/fullstack.html" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                AI + Full Stack Development
                            </a>
                        </h3>
                    </div>
                    <p className="mb-4 text-sm">This program prepares you to build dynamic applications and:</p>
                    <ul className="list-none space-y-2 mb-6 text-sm">
                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 shrink-0"/> Build dynamic end-to-end apps</li>
                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 shrink-0"/> Integrate AI features into software</li>
                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 shrink-0"/> Work confidently with frontend & backend</li>
                    </ul>
                    <button onClick={toggleModal} className="w-full text-center text-sm font-bold text-white bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                        Book Free Counselling
                    </button>
                </div>
              </div>
            </section>

             {/* Section 3: Free Counseling */}
            <section className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="md:w-1/3">
                        <img 
                            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                            alt="Free 3-day one-to-one counselling at BM Academy" 
                            className="rounded-lg shadow-md w-full"
                        />
                    </div>
                    <div className="md:w-2/3">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            Free One‑to‑One Counselling (3 Days)
                        </h2>
                        <p className="mb-4">Not sure which course suits you? BM Academy offers 3 days of free personalised counselling to help you:</p>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2"/> Understand your strengths and interests</li>
                            <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2"/> Choose the right career path</li>
                            <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2"/> Plan your learning journey with clarity</li>
                        </ul>
                        <button onClick={toggleModal} className="bg-orange-500 text-white px-6 py-2 rounded-full font-bold hover:bg-orange-600 transition shadow">
                            Book Your Free One-to-One Counselling
                        </button>
                    </div>
                </div>
            </section>

            {/* Section 4: Why Choose BM Academy */}
            <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Award className="w-6 h-6 mr-2 text-yellow-500" />
                    Why Choose BM Academy?
                </h2>
                
                <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="BM Academy students achieving career success"
                    className="rounded-xl w-full h-64 object-cover mb-6"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center bg-white p-3 rounded shadow-sm border border-gray-100">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                        <span className="font-medium">Industry-focused curriculum</span>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded shadow-sm border border-gray-100">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                        <span className="font-medium">Hands-on project-based training</span>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded shadow-sm border border-gray-100">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                        <span className="font-medium">Experienced mentors</span>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded shadow-sm border border-gray-100">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                        <span className="font-medium">Career guidance & placement support</span>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded shadow-sm border border-gray-100">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                        <span className="font-medium">Flexible learning options</span>
                    </div>
                </div>
                <p className="mt-4 italic text-gray-600">BM Academy helps students, professionals, and career-changers turn aspirations into achievements.</p>
            </section>

             {/* Section 5: Final Thought */}
             <section className="bg-blue-50 p-8 rounded-2xl text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                    <Pin className="w-6 h-6 mr-2 text-blue-600" />
                    <a href="https://www.thebmacademy.com/contact.html" target="_blank`">Final Thought</a>
                </h2>
                <p className="mb-6 max-w-2xl mx-auto">
                    “New Year, New Skill” is more than a slogan — it’s a strategic step toward future-proofing your career. With AI and digital skills in high demand, now is the perfect time to invest in yourself. Whether you’re starting fresh or upgrading your expertise,{" "}
                    <a href="https://www.thebmacademy.com/contact.html" className="text-blue-600 font-bold hover:underline">
                        BM Academy
                    </a>{" "}
                    gives you the right guidance, practical training, and industry-ready skills to move forward with confidence.
                </p>
                <div className="flex justify-center gap-4">
                    <button 
                        onClick={toggleModal}
                        className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition shadow-lg flex items-center"
                    >
                        Start Your New Skill Journey Today <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                </div>
            </section>

            {/* Section 6: FAQ */}
            <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <HelpCircle className="w-6 h-6 mr-2 text-gray-600" />
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-5">
                        <h3 className="font-bold text-lg mb-2 flex items-start">
                            <span className="text-blue-500 mr-2">Q1.</span> 
                            Are BM Academy courses suitable for beginners?
                        </h3>
                        <p className="text-gray-600 ml-8">Yes, the courses are designed for beginners as well as professionals, with step-by-step learning and hands-on training.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-5">
                        <h3 className="font-bold text-lg mb-2 flex items-start">
                            <span className="text-blue-500 mr-2">Q2.</span> 
                            What makes AI-integrated courses better?
                        </h3>
                        <p className="text-gray-600 ml-8">AI-integrated courses prepare learners for modern job roles where automation, analytics, and smart tools are essential.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-5">
                        <h3 className="font-bold text-lg mb-2 flex items-start">
                            <span className="text-blue-500 mr-2">Q3.</span> 
                            Is free counselling really free?
                        </h3>
                        <p className="text-gray-600 ml-8">Yes, BM Academy offers 3 days of completely free one-to-one counselling to help you choose the right career path.</p>
                    </div>
                </div>
            </section>
          </article>

          {/* --- CTA Section --- */}
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl text-white text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Upgrade Your Career in 2026?
            </h2>
            <p className="mb-8 text-blue-100 max-w-lg mx-auto leading-relaxed">
              Don't wait for opportunities—create them with the right skills. Join BM Academy today.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button
                onClick={toggleModal}
                className="inline-flex justify-center items-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-blue-700 transition-colors cursor-pointer"
              >
                Book Free Counseling
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center bg-green-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-green-600 transition-transform transform hover:-translate-y-1 shadow-lg"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Chat on WhatsApp
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
              <div className="w-20 h-20 rounded-full flex items-center justify-center border-2 border-gray-700 font-bold text-xl overflow-hidden bg-white">
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
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-green-700 underline hover:text-green-800 flex items-center"
            >
              Connect instantly <ArrowRight className="w-4 h-4 ml-1" />
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
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
                            handleInputChange({ target: { name: "phone", value } });
                        }}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Enter your mobile number"
                        maxLength="10"
                    />
                </div>

                {/* Course Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Interested Course
                  </label>
                  <input
                    type="text"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    placeholder="Enter course you are interested in"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
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

export default Futureskills;