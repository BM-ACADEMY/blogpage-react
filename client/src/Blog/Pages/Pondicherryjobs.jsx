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
  LinkIcon, // Added X for closing the modal
} from "lucide-react";
import Logo from "../../assets/image/footer.png";
import bmlogo from "../../assets/blog/logo.png";
import { Link } from "react-router-dom";
import "../../Blog/Pages/css/Style.css";
import { Helmet } from "react-helmet";

import coveriamge from '../../assets/blog/coverpage.jpg'

const Pondicherryjobs = () => {
  // --- STATE FOR MODAL AND FORM ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "AI + Digital Marketing", // Default value
    location: "Pondicherry", // Default value
  });

  const whatsappUrl =
    "https://wa.me/919944940051?text=Hi%20BM%20Academy%2C%20I%20read%20your%20blog%20on%20job%20ready%20courses%20in%20Pondicherry.%20I%20want%20to%20know%20which%2090%E2%80%91day%20online%2Foffline%20program%20with%20placement%20support%20is%20best%20for%20me.";

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
    const message = `*New Counseling Request*
------------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Interested Course:* ${formData.course}
*Location Preference:* ${formData.location}
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
      course: "AI + Digital Marketing",
      location: "Pondicherry",
    }); // Reset form
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 relative">
      <Helmet>
        <title>BM Academy Helps Pondicherry Students Become Job-Ready in 90 Days | AI + Digital Marketing Courses</title>
        <meta name="description" content="Join BM Academy’s 90-day job-ready courses in Pondicherry. Learn AI, digital marketing, video editing, full-stack development, and more with hands-on projects and placement support." />
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
                  <span className="ml-1 md:ml-2 text-gray-700 font-medium truncate max-w-[150px] md:max-w-none">
                    Job-Ready in 90 Days
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          {/* --- Article Header --- */}
          <div className="mb-8">
            <div className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold uppercase tracking-wide mb-4">
              Career Development
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              BM Academy Helps Pondicherry Students Become Job‑Ready in 90 Days
              (Online & Offline)
            </h1>

            {/* Meta Data */}
            <div className="flex items-center flex-wrap gap-4 text-gray-500 text-sm border-b border-gray-200 pb-6 pt-3">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                 <span><a href="https://www.linkedin.com/in/kamarudeen-b-m-66508657/" target="_blank">Kamarudeen BM</a></span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Dec 02, 2025</span>
              </div>
            </div>
          </div>

          {/* --- Featured Image --- */}
          <div className="mb-8 rounded-xl overflow-hidden shadow-lg bg-gray-200 h-64 md:h-96 w-full flex items-center justify-center relative">
            <img
              src={coveriamge}
              alt="Students collaborating in Pondicherry"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 to-transparent"></div>
          </div>

          {/* --- Blog Content --- */}
          <article className="prose prose-lg max-w-none text-gray-700 space-y-12">

             <div className="text-center">
               <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center bg-green-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-green-600 transition-transform transform hover:-translate-y-1 shadow-lg"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                AI + Digital Marketing Course
              </a>
            </div>
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Market‑Relevant Courses Designed with Employers in Mind
              </h2>
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Market relevant courses"
                className="rounded-xl"
              />
              <p>
                We don’t run generic coaching. Our courses are built around what
                companies are hiring for right now. At BM Academy, students can
                choose from:
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 bg-gray-50 p-4 rounded-lg list-disc pl-5">
                <li>
                  <strong>AI + Digital Marketing Integrated Course</strong>
                </li>
                <li>
                  <strong>AI + Full Stack Development (FSD) Course</strong>
                </li>
                <li>
                  <strong>AI + Video Editing Course</strong>
                </li>
                <li>
                  <strong>AI + Data Analytics (DA) Course</strong>
                </li>
              </ul>

              <p className="mb-2 font-bold">Plus core tracks in:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 pl-4">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> AI &
                  Automation
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />{" "}
                  Digital Marketing
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Tech &
                  Development
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Design
                  & Branding
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />{" "}
                  Business & Communication
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />{" "}
                  Language & Soft Skills
                </div>
              </div>

              <p className="font-bold">
                Each 90‑day course (online or offline) is:
              </p>
              <ul className="list-disc pl-9  space-y-1">
                <li>
                  <strong>Practical</strong> – real tools, not just theory
                </li>
                <li>
                  <strong>Outcome‑driven</strong> – every module connects to a
                  project or portfolio piece
                </li>
                <li>
                  <strong>Placement‑focused</strong> – students are trained to
                  show skills, not just certificates
                </li>
              </ul>
              <p className="mt-4 italic text-gray-600">
                This is why our job ready courses in Pondicherry are trusted by
                students, parents, and local companies.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. 100% Practical, Project‑Based Learning (Online & Offline)
              </h2>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Project based learning"
                className="rounded-xl"
              />
              <p>
                Whether a learner joins{" "}
                <span className="font-bold">online or offline</span>, the
                learning style is the same: learn by doing.
              </p>
              <p className="font-bold">Examples of what students build:</p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white border-l-3 border-blue-600 rounded-lg shadow hover:shadow-lg transition p-5">
                  <h4 className="font-semibold text-blue-700 text-lg">
                    AI + Digital Marketing
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    A lead generation and follow-up funnel using AI tools,
                    landing pages, and ads.
                  </p>
                </div>

                <div className="bg-white border-l-3 border-green-600 rounded-lg shadow hover:shadow-lg transition p-5">
                  <h4 className="font-semibold text-green-700 text-lg">
                    AI + FSD
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    A portfolio website or mini web app with AI-powered
                    features.
                  </p>
                </div>

                <div className="bg-white border-l-3 border-purple-600 rounded-lg shadow hover:shadow-lg transition p-5">
                  <h4 className="font-semibold text-purple-700 text-lg">
                    AI + Video Editing
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Short-form and long-form videos enhanced with AI for
                    scripting, editing, and effects.
                  </p>
                </div>

                <div className="bg-white border-l-3 border-orange-600 rounded-lg shadow hover:shadow-lg transition p-5">
                  <h4 className="font-semibold text-orange-700 text-lg">
                    AI + Data Analytics
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Dashboards and reports using real or sample business data
                    with AI-assisted insights.
                  </p>
                </div>
              </div>

              <p className="pt-5 font-bold">
                By the end of the 90 days job ready program, each student has:
              </p>
              <ul className="grid pt-0 grid-cols-1 md:grid-cols-2 gap-2 mb-4 bg-gray-50 p-4 rounded-lg list-disc pl-9">
                <li className="font-medium">
                  <>AI + Digital Marketing Integrated Course</>
                </li>
                <li className="font-medium">
                  <>AI + Full Stack Development (FSD) Course</>
                </li>
                <li className="font-medium">
                  <>AI + Video Editing Course</>
                </li>
                <li className="font-medium">
                  <>AI + Data Analytics (DA) Course</>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Flexible Online & Offline Batches
              </h2>
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Flexible classroom options"
                className="rounded-xl"
              />
              <p className="pt-5 font-bold">
                Different students have different needs:
              </p>
              <ul className="pt-0 grid grid-cols-1 gap-2 mb-4 bg-gray-50 p-4 rounded-lg list-disc pl-9">
                <li className="font-medium">
                  <>Some attend offline classes in Pondicherry</>
                </li>
                <li className="font-medium">
                  <>Some prefer online classes from home</>
                </li>
                <li className="font-medium">
                  <>Some are working or in college and need flexible timings</>
                </li>
              </ul>
              <p className="mt-2 font-bold">So BM Academy offers:</p>
              <ul className="space-y-3 mt-3 pl-4">
                <li className="flex items-start">
                  <Monitor className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                  <span>
                    <strong>Online job ready courses</strong> with live
                    interactive sessions, recordings, and mentor support.
                  </span>
                </li>
                <li className="flex items-start">
                  <Briefcase className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                  <span>
                    <strong>Offline classes</strong> at BM Academy Pondicherry
                    for students who prefer in‑person learning.
                  </span>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                  <span>
                    <strong>Evening / weekend batches</strong> (based on demand)
                    so learning doesn’t disturb college or work.
                  </span>
                </li>
              </ul>
              <p className="mt-3 text-sm">
                The{" "}
                <span className="font-bold">
                  syllabus, projects, and placement support
                </span>{" "}
                remain the same in both modes.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Clear 90-Day Roadmap
              </h2>

              <img
                src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Planning roadmap"
                className="rounded-xl"
              />

              <p className="font-bold mt-3">
                Every student gets a clear, structured plan.
              </p>

              <div className="space-y-6 mt-6 ml-4">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-lg font-bold">➤</span>
                  <div>
                    <h3 className="font-bold text-lg">
                      Days 1–15: Foundations
                    </h3>
                    <p className="text-sm text-gray-600">
                      Understand tools and core concepts.
                    </p>
                    <p className="text-sm text-gray-600">
                      Small tasks to build confidence.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-lg font-bold">➤</span>
                  <div>
                    <h3 className="font-bold text-lg">
                      Days 16–45: Skill Building
                    </h3>
                    <p className="text-sm text-gray-600">
                      Regular practice (daily or alternate days).
                    </p>
                    <p className="text-sm text-gray-600">
                      Mini-projects and assignments.
                    </p>
                    <p className="text-sm text-gray-600">
                      Mentor feedback in live sessions or online support.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-lg font-bold">➤</span>
                  <div>
                    <h3 className="font-bold text-lg">
                      Days 46–75: Major Project
                    </h3>
                    <p className="text-sm text-gray-600">
                      One main project that becomes the center of your
                      portfolio.
                    </p>
                    <p className="text-sm text-gray-600">
                      Weekly review calls or check-ins.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-lg font-bold">➤</span>
                  <div>
                    <h3 className="font-bold text-lg">
                      Days 76–90: Job-Readiness
                    </h3>
                    <p className="text-sm text-gray-600">
                      Resume building focused on skills.
                    </p>
                    <p className="text-sm text-gray-600">
                      Mock interviews and HR questions.
                    </p>
                    <p className="text-sm text-gray-600">
                      LinkedIn profile setup.
                    </p>
                    <p className="text-sm text-gray-600">
                      Guidance on where and how to apply.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-3 text-sm">
                The{" "}
                <span className="font-bold">
                  syllabus, projects, and placement support
                </span>{" "}
                remain the same in both modes.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Placement‑Focused Ecosystem (With Support for All Courses)
              </h2>
              <img
                src="https://images.pexels.com/photos/9052131/pexels-photo-9052131.jpeg"
                alt="Job interview handshake"
                className="rounded-xl"
              />
              <p>
                BM Academy connects learning to{" "}
                <span className="font-bold">real job opportunities.</span>{" "}
                Placement support is available for:
              </p>
              <ul className="pt-0 grid grid-cols-1 gap-2 mb-4 bg-gray-50 p-4 rounded-lg list-disc pl-9">
                <li className="font-medium">
                  AI + Digital Marketing Integrated Course
                </li>
                <li className="font-medium">AI + FSD Course</li>
                <li className="font-medium">AI + Video Editing Course</li>
                <li className="font-medium">AI + Data Analytics Course</li>
              </ul>

              <p className="font-bold">We actively:</p>
              <ul className="list-disc pl-9 space-y-2 mt-2">
                <li>
                  Maintain a list of{" "}
                  <span className="font-bold">50+ companies</span> in and around
                  Pondicherry (IT, digital marketing, education, hospitality,
                  startups).
                </li>
                <li>
                  Offer{" "}
                  <span className="font-bold">low‑risk hiring options</span> to
                  companies so they are open to freshers.
                </li>
                <li>
                  Share students’{" "}
                  <span className="font-bold">digital portfolios</span> with
                  hiring partners.
                </li>
                <li>
                  Track student success even after joining (30 / 90 / 180 days).
                </li>
              </ul>
              <div className="bg-green-50 p-4 rounded-lg mt-4 border border-green-100 text-center">
                <p className="font-bold text-green-800">Success Rate: ~90%</p>
                <p className="text-sm text-green-700">
                  For students who complete the course, projects, and interview
                  practice seriously, the placement success rate is around 90%.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Personalized Mentoring in Small Batches
              </h2>
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Mentoring session"
                className="rounded-xl"
              />
              <p>
                Many students feel shy, under‑confident, or scared of
                technology. BM Academy addresses this with:
              </p>
              <ul className="pt-0 grid grid-cols-1 gap-2 mb-4 bg-gray-50 p-4 rounded-lg list-disc pl-9">
                <li className="font-medium">
                  Small batches (online and offline)
                </li>
                <li className="font-medium">1‑to‑1 doubt clearing</li>
                <li className="font-medium">
                  Extra support for basics and weak areas
                </li>
                <li className="font-medium">
                  Simple explanations in English + local language when needed
                </li>
              </ul>
              <p className="mt-2">
                Trainers focus on making students{" "}
                <span className="font-bold">
                  comfortable, confident, and employable,
                </span>{" "}
                not just finishing the syllabus.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Training on Real‑World Tools
              </h2>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Data and analytics tools"
                className="rounded-xl"
              />
              <p>
                Students are trained on tools used in real companies, such as:
              </p>
              <ul className="grid grid-cols-1 gap-2 mb-4 bg-gray-50 p-4 rounded-lg list-disc pl-9">
                <li className="font-medium">
                  AI tools for content, automation, and productivity
                </li>
                <li className="font-medium">Meta Ads Manager and Google Ads</li>
                <li className="font-medium">Canva, Figma, and design tools</li>
                <li className="font-medium">
                  Website builders and basic coding tools
                </li>
                <li className="font-medium">
                  CRM and lead tracking basics (Google Sheets, Notion, etc.)
                </li>
              </ul>

              <p>
                This helps them start contributing quickly when they join a
                company.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. What Students Get at the End of 90 Days
              </h2>
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Students with certificates"
                className="rounded-xl"
              />
              <p>
                At the end of the 90 days job ready program, students don’t just
                get a certificate. They get:
              </p>
              <ul className="list-disc space-y-2 mt-4 pl-9">
                <li>
                  <div className="flex items-start">
                    <span>
                      <strong>BM Academy Certificate</strong> for their chosen
                      track
                    </span>
                  </div>
                </li>

                <li>
                  <div className="flex items-start">
                    <span>
                      <strong>Portfolio of real work</strong> (projects,
                      campaigns, designs, automations, dashboards, videos, etc.)
                    </span>
                  </div>
                </li>

                <li>
                  <div className="flex items-start">
                    <span>
                      <strong>Updated Resume & LinkedIn</strong> profile
                    </span>
                  </div>
                </li>

                <li>
                  <div className="flex items-start">
                    <span>
                      <strong>Interview practice</strong> and clarity on how to
                      present their skills
                    </span>
                  </div>
                </li>
              </ul>

              <p className="mt-4">
                This combination—
                <span className="font-bold">
                  skills + portfolio + confidence + placement support
                </span>
                —is what makes them truly job ready.
              </p>
            </section>
            <div className="text-center">
               <a
                href='https://thebmacademy.com/'
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center bg-red-400 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-red-600 transition-transform transform hover:-translate-y-1 shadow-lg"
              >
                <LinkIcon className="w-6 h-6 mr-2" />
                AI + Digital Marketing Course
              </a>
            </div>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Who Should Join BM Academy’s Job Ready Courses in
                Pondicherry?
              </h2>
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Diverse group of people"
                className="rounded-xl"
              />
              <p className="font-bold">
                These online and offline job ready courses are ideal for:
              </p>
              <ul className="list-disc pl-9 space-y-1 mb-4">
                <li>
                  Final‑year students who want a job immediately after college
                </li>
                <li>Fresh graduates who are still searching or confused</li>
                <li>
                  Working professionals looking to switch into digital, tech, or
                  AI roles
                </li>
                <li>
                  Homemakers or career restarters seeking a practical earning
                  skill
                </li>
              </ul>
              <div className="bg-gray-100 p-4 rounded-lg italic border-l-4 border-gray-400">
                "I know I’m capable, but I don’t know where to start." <br />
                "I want someone to guide me step‑by‑step."
                <br />
                “I don’t just want theory, I want real skills and a job.”
              </div>
              <p>
                ...then BM Academy's job ready courses in Pondicherry (online
                and offline) are built for them.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. How to Get Started with BM Academy
              </h2>
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Start button concept"
                className="rounded-xl"
              />
              <p className="font-bold">
                Suggested flow for the website and counseling team:
              </p>
              <ol className="list-decimal pl-9 pt-5 space-y-4 font-medium">
                <li>
                  <span className="font-bold text-gray-900">
                    Book a Free Counseling Session:
                  </span>
                  <span className="block font-normal text-gray-600 text-sm">
                    Understand your background, interests, and career goals.
                  </span>
                </li>
                <li>
                  <span className="font-bold text-gray-900">
                    Choose the 90‑Day Track:
                  </span>
                  <span className="block font-normal text-gray-600 text-sm">
                    <ol className="list-disc pl-5">
                      <li>AI + Digital Marketing Integrated Course</li>
                      <li>AI + FSD Course</li>
                      <li>AI + Video Editing Course</li>
                      <li>AI + Data Analytics Course</li>
                    </ol>
                  </span>
                </li>
                <li>
                  <span className="font-bold text-gray-900">
                    Pick the Mode:
                  </span>
                  <span className="block font-normal text-gray-600 text-sm">
                    Online from home or Offline in Pondicherry.
                  </span>
                </li>
                <li>
                  <span className="font-bold text-gray-900">
                    Start the 90‑Day Plan:
                  </span>
                  <span className="block font-normal text-gray-600 text-sm">
                    Follow the roadmap with mentor support.
                  </span>
                </li>
                <li>
                  <span className="font-bold text-gray-900">
                    Build Portfolio and Prepare for Placements
                  </span>
                  <span className="block font-normal text-gray-600 text-sm">
                    Suggested flow for the website and counseling team.
                  </span>
                </li>
              </ol>
            </section>
          </article>

          {/* --- CTA Section --- */}
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl text-white text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Become Job‑Ready in the Next 90 Days?
            </h2>
            <p className="mb-8 text-blue-100 max-w-lg mx-auto leading-relaxed">
              Degrees are important—but skills, projects, and confidence are
              what actually get you hired. BM Academy’s mission is to empower
              you with a clear path to employment.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              {/* --- UPDATED BUTTON WITH ONCLICK --- */}
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
                       href="https://www.facebook.com/profile.php?id=61585268211774"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="hover:text-yellow-300 transition"
                     >
                       <Facebook className="w-6 h-6" />
                     </a>
     
                     <a
                       href="https://www.instagram.com/bmtechxpondy?igsh=bHRpMG4wZXBhM2V1"
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

      {/* --- ADDED: MODAL COMPONENT --- */}
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
                    Interested Course
                  </label>

                  <input
                    type="text"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    placeholder="Enter course you are interested in"
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

export default Pondicherryjobs;
