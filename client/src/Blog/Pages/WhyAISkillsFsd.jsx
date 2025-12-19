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
} from "lucide-react";
import Logo from "../../assets/image/footer.png";
import bmlogo from "../../assets/blog/logo.png";
import { Link } from "react-router-dom";
import "../../Blog/Pages/css/Style.css";
import { Helmet } from "react-helmet";

import coverimage from "../../assets/blog/da.jpg"; // Hero Image placeholder

const FullStackAI = () => {
  // --- STATE FOR MODAL AND FORM ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "AI + Full Stack Development",
    location: "Pondicherry",
  });

  const whatsappUrl =
    "https://wa.me/919944940051?text=Hi%20BM%20Academy%2C%20I%20want%20to%20learn%20more%20about%20the%20AI%20Integrated%20Full%20Stack%20Development%20program.";

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
    const message = `*New Counseling Request*\n------------------------\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Interested Course:* ${formData.course}\n*Location:* ${formData.location}\n------------------------\nHi BM Academy, I want to book a free session for AI Full Stack Development.`;
    const encodedMessage = encodeURIComponent(message);
    const waLink = `https://wa.me/919944940051?text=${encodedMessage}`;
    window.open(waLink, "_blank");
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 relative">
      <Helmet>
        <title>
          Why AI Skills Are a Must for Today’s Full Stack Developers | BM
          Academy
        </title>
        <meta
          name="description"
          content="Upskill with BM Academy's AI-integrated Full Stack Development course. Learn React, Node, and AI APIs to become a future-ready developer."
        />
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
                    Full Stack AI
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="mb-8">
            <div className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold uppercase tracking-wide mb-4">
              Tech Trends 2025
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Why AI Skills Are a Must for Today’s Full Stack Developers | The
              BM Academy Advantage
            </h1>

            <div className="flex items-center flex-wrap gap-4 text-gray-500 text-sm border-b border-gray-200 pb-6 pt-3">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>Kamarudeen BM</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Dec 19, 2025</span>
              </div>
            </div>
          </div>

          {/* Image 1: Hero */}
          <div className="mb-8 rounded-xl overflow-hidden shadow-lg bg-gray-200 h-64 md:h-96 w-full flex items-center justify-center">
            <img
              src={coverimage}
              alt="BM Academy students learning AI skills for full stack development"
              className="w-full h-full object-cover"
            />
          </div>

          <article className="prose prose-lg max-w-none text-gray-700 ">
            <p className="text-xl leading-relaxed text-gray-600 border-l-2 border-blue-500 pl-4">
              Imagine spending months learning frontend and backend development
              — and still being told you’re “not industry‑ready” because you
              lack <span className="font-bold">AI skills.</span>
            </p>

            <p>
              In today’s fast‑changing tech world, being a Full Stack Developer
              isn’t just about HTML, React, or Node anymore. Companies now
              expect developers who can confidently work with{" "}
              <span className="font-bold">AI‑powered features</span> — from
              chatbots and automation to analytics dashboards and smart
              applications.
            </p>

            <div className="flex items-center gap-2 text-blue-500 font-bold">
              <ChevronRight className="w-5 h-5" />
              <span>
                If you’re not upskilling, you’re already one step behind.
              </span>
            </div>
            <p>
              Here’s why{" "}
              <span className="font-bold">
                AI skills for full stack developers
              </span>{" "}
              are now a must — and how{" "}
              <span className="font-bold">BM Academy</span> helps you stay
              future‑ready.
            </p>

            {/* Section 1 */}
            <section className="max-w-6xl mx-auto px-4 py-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                1. AI Is Everywhere — And It’s Growing Fast
              </h2>

              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80"
                alt="AI-powered applications in modern businesses"
                className="rounded-2xl mb-8 shadow-xl w-full"
              />

              {/* Intro */}
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Artificial Intelligence is no longer limited to big tech
                companies. Today,
                <span className="font-semibold text-gray-900">
                  {" "}
                  startups, e-commerce platforms, healthcare teams, and even
                  small businesses
                </span>
                rely on AI-powered solutions to scale faster and work smarter.
              </p>

              {/* Use cases */}
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-6 rounded-xl mb-8">
                {[
                  "AI-powered customer support chatbots",
                  "Personalized product recommendations",
                  "Fraud detection & risk analysis",
                  "Marketing automation & lead scoring",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 font-medium text-gray-800"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Recruiter Insight */}
              <p className="text-lg text-gray-700 mb-6">
                Recruiters now actively search for
                <span className="font-bold text-gray-900">
                  {" "}
                  AI-ready Full Stack Developers
                </span>{" "}
                — professionals who can integrate ML APIs, work with modern AI
                tools, and build intelligent, real-world applications.
              </p>

              {/* Alert Blocks */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 bg-blue-50 text-blue-600 font-semibold p-4 rounded-lg">
                  At BM Academy, you’re trained to identify these real‑world use
                  cases and build solutions companies actually need.
                </div>

                <div className="flex items-center gap-3 bg-yellow-50 text-yellow-700 font-semibold p-4 rounded-lg">
                  Want to learn how these AI tools are actually built? BM
                  Academy teaches you AI skills for full stack developers
                  through real‑world use cases.
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition-all shadow-lg"
                >
                  Join FREE FSD + AI Masterclass
                </a>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                2. Companies Want “Future‑Ready” Developers
              </h2>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                alt="BM Academy full stack AI training classroom"
                className="rounded-xl mb-6 shadow-md"
              />
              <p>Knowing React or Node is important. But if you can also:</p>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                  Build a chatbot
                </li>

                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                  Add image recognition to apps
                </li>

                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                  Automate workflows
                </li>

                <li className="flex items-start gap-3 text-gray-900 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                  Create smart dashboards
                </li>
              </ul>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" /> What You Learn at BM
                  Academy:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">01.</span> AI
                    basics for developers (no PhD required)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">02.</span>{" "}
                    Real‑world projects like AI login systems and smart search
                    features
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">03.</span>{" "}
                    Hands‑on experience with ChatGPT, TensorFlow, and OpenAI
                    APIs
                  </li>
                </ul>
              </div>
              <div className="space-y-3 mt-8 mb-8">
                <div className="flex items-center gap-3 bg-yellow-50 text-yellow-700 font-semibold p-4 rounded-lg">
                  Don’t just learn React or Node — learn what companies actually
                  want.
                </div>
                <div className="flex items-center gap-3 bg-blue-50 text-blue-600 font-semibold p-4 rounded-lg">
                  AtGet access to our FREE FSD Masterclass and understand the
                  career roadmap.
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="max-w-6xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                3. Real Projects = Real Confidence
              </h2>

              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
                alt="Students presenting full stack AI projects at BM Academy"
                className="rounded-2xl mb-8 shadow-xl w-full"
              />

              {/* Intro */}
              <p className="text-lg text-gray-700 mb-6">
                <span className="font-bold text-gray-900">
                  Certificates alone won’t land you a job — projects will.{" "}
                </span>
              </p>

              {/* What recruiters expect */}
              <p className="text-lg font-semibold text-gray-900 mb-3">
                Recruiters look for real-world implementations like:
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-6 rounded-xl mb-4">
                {[
                  "AI‑powered login pages",
                  "Smart analytics dashboards",
                  "Chatbots with auto‑reply features",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 font-medium text-gray-800"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* BM Academy Promise */}
              <p className="text-lg text-gray-700 mb-6">
                At <span className="font-bold text-gray-900">BM Academy</span>,
                every student
                <span className="font-bold">
                  {" "}
                  builds and presents at least one AI-integrated project{" "}
                </span>
                before course completion.
              </p>

              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-3 text-green-600 font-semibold">
                  <CheckCircle2 className="w-5 h-5" />
                  You don’t just talk about AI
                </div>
                <div className="flex items-center gap-3 text-green-600 font-semibold">
                  <CheckCircle2 className="w-5 h-5" />
                  You confidently demonstrate what you’ve built
                </div>
              </div>

              {/* Testimonial */}
              <blockquote className="bg-gray-100 p-6 rounded-xl border-l-4 border-green-500 italic mb-10">
                “Before joining BM Academy, I only knew React basics. After
                building an AI chatbot project, I felt confident attending
                interviews and cracked my first internship.{" "}
                <span className="font-semibold">
                  Idhu dhan real confidence!
                </span>
                ”
                <span className="block mt-3 font-bold not-italic text-sm text-gray-700">
                  — Karthik, FSD Batch 2025
                </span>
              </blockquote>

              {/* Closing Line */}
              <p className="text-lg text-gray-800 font-semibold mb-8">
                Interview-ready confidence comes from real projects —
                <span className="text-gray-900">
                  {" "}
                  Certificate mattum podhum-nu ninaikkatheenga.
                </span>
              </p>

              {/* CTA */}
              <div className="text-center mb-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-lg"
                >
                  View AI Projects You’ll Build
                </a>
              </div>
            </section>

            {/* Section 4 */}
            <section className="max-w-6xl mx-auto px-4 py-16">
              {/* Heading */}

              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                4. Community & Mentorship Make the Difference
              </h2>

              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
                alt="Developer mentorship and peer learning at BM Academy"
                className="rounded-2xl mb-8 shadow-xl w-full"
              />

              {/* Intro */}
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Learning AI alone can feel overwhelming —
                <span className="font-semibold text-gray-900">
                  {" "}
                  aana BM Academy-la neenga thaniya illa.
                </span>
              </p>

              {/* What you get */}
              <p className="text-lg font-semibold text-gray-900 mb-3">
                When you join BM Academy, you get:
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-6 rounded-xl mb-8">
                {[
                  "Expert developer mentors",
                  "Peer learning groups",
                  "Weekly code reviews ",
                  "AI hackathons & real project showcases",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 font-medium text-gray-800"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                This strong community keeps you motivated, updated, and guided —
                until you’re truly industry‑ready.
              </p>

              {/* Highlight message */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 bg-blue-50 text-blue-600 font-semibold p-4 rounded-lg">
                  Learning alone is hard. Learning with mentors changes
                  everything.
                </div>
                <div className="flex items-center gap-3 bg-green-50 text-green-700 font-semibold p-4 rounded-lg">
                  BM Academy-la guidance irukkum, confusion illai.
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Join WhatsApp Group
                </a>
              </div>
            </section>

            {/* Section 5 */}
            {/* Section 5 */}
<section className="max-w-6xl mx-auto px-4 py-12">
  <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
    5. The BM Academy Advantage
  </h2>

  {/* Image */}
  <img
    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
    alt="BM Academy training institute for full stack developers"
    className="rounded-2xl mb-10 shadow-xl w-full object-cover h-64 md:h-80"
  />

  {/* Advantage Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Card 1 */}
    <div className="group p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
        <Monitor className="w-6 h-6 text-blue-600 group-hover:text-white" />
      </div>
      <h4 className="font-bold text-gray-900 text-lg mb-2">
        Industry-Ready Curriculum
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        Our syllabus is updated every quarter to match real-world tech shifts, ensuring you learn what's relevant in 2025.
      </p>
    </div>

    {/* Card 2 */}
    <div className="group p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-green-200 transition-all duration-300">
      <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
        <Briefcase className="w-6 h-6 text-green-600 group-hover:text-white" />
      </div>
      <h4 className="font-bold text-gray-900 text-lg mb-2">
        Placement Support
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        From resume polishing to mock interviews and direct company referrals, we stand by you until you get hired.
      </p>
    </div>

    {/* Card 3 */}
    <div className="group p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300">
      <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
        <Zap className="w-6 h-6 text-purple-600 group-hover:text-white" />
      </div>
      <h4 className="font-bold text-gray-900 text-lg mb-2">
        Proven Results
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        Join the 90%+ of our students who successfully secured placements or internships within months of completion.
      </p>
    </div>

    {/* Card 4 */}
    <div className="group p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-300">
      <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
        <Users className="w-6 h-6 text-orange-600 group-hover:text-white" />
      </div>
      <h4 className="font-bold text-gray-900 text-lg mb-2">
        Tanglish Support
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        Concept clear-ah irundha dhaan code panna mudiyum. Learn complex AI topics in your comfortable language.
      </p>
    </div>
  </div>

  {/* Urgency Alert */}
  <div className="mt-10 bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-orange-400 p-6 rounded-r-2xl">
    <div className="flex items-center gap-3">
      <div className="p-2 bg-orange-100 rounded-full">
        <Bell className="w-5 h-5 text-orange-600 animate-bounce" />
      </div>
      <div>
        <p className="font-bold text-gray-900">
          Last batch filled in record time!
        </p>
        <p className="text-sm text-gray-700">
          Don't miss out on the 2025 cohort. Next batch starts soon.
        </p>
      </div>
    </div>
  </div>
</section>

             <div className="mt-1 border-t pt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Conclusion — AI Is No Longer Optional
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Whether you’re already a Full Stack Developer or just starting your journey — AI skills are no longer optional.
                </p>
                <p className="font-semibold text-gray-900 mb-4">
                  With BM Academy, you don’t just learn coding. You gain:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-gray-700">
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                    Future‑proof skills
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                    Career confidence
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                    Real project experience
                  </li>
                </ul>
                <p className="text-lg font-bold text-blue-800">
                  Appo, why wait? Join pannunga and make your career future‑ready!
                </p>
              </div>


              

              
          </article>

          {/* CTA Section */}
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl text-white text-center shadow-xl">
  <h2 className="text-2xl md:text-3xl font-bold mb-4">
    Want to learn exactly how to build an AI-ready career as a Full Stack Developer?
  </h2>
  <h2 className="text-lg font-bold mb-4">
     Join our <span className="font-semibold text-white">FREE live FSD Masterclass</span> and get:
  </h2>

  {/* Benefits */}
  <ul className="space-y-3 mb-8  text-">
    <li className="font-medium text-yellow-400">
      Career clarity roadmap, Live AI demonstrations, Placement guidance
    </li>
  </ul>

  {/* Extra Info */}

  <h2 className="text-sm text-blue-50 font-medium mb-4">
     Join our exclusive WhatsApp group for the next masterclass.
  </h2>
  <h2 className="text-sm text-yellow-200 font-medium mb-4">
         Last batch filled in just 3 days — seats are limited.
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
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-green-600"
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

      {/* --- Counseling Modal --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden">
            <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-6 text-white flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">Free Counseling</h3>
                <p className="text-blue-100 text-sm">
                  Discuss your AI career path
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

export default FullStackAI;
