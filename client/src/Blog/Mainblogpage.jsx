import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
// In your local project, install react-helmet: npm install react-helmet
import { Helmet } from "react-helmet";

import Bannerimage1 from "../assets/blog/banneriamges.png";
import Bannerimage2 from "../assets/blog/Gemini_Generated_Image_bfbfngbfbfngbfbf.png";
import bmlogo from "../assets/blog/logo.png";


const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      category: "Digital Marketing",
      title: "Top AI Tools You’ll Learn in Our Digital Marketing AI Course (2025)",
      excerpt: "Master top AI tools like ChatGPT, Canva AI, Jasper & Google Ads AI in our 2025 Digital Marketing Course. Boost your career with AI skills!",
      author: "BM Academy",
      date: "Oct 14, 2025",
      image: Bannerimage1,
      avatar: bmlogo,
      link: "/blog/top-ai-tools-digital-marketing-course-2025"
    },
    {
      id: 2,
      category: "90 days job ready program",
      title: "How BM Academy Helps Pondicherry Students Become Job‑Ready in 90 Days (Online & Offline)",
      excerpt: "Stop studying theory and start building your future. BM Academy’s 90-day job-ready program equips you with real-world skills, projects, and interview confidence to land your first job faster.",
      author: "BM Academy",
      date: "Oct 14, 2025",
      image: Bannerimage2,
      avatar: bmlogo,
      link: "/blog/job-ready-courses-in-pondicherry"
    },
  ];


  const pageHeadline = "Our Latest Blogs";
  const pageDescription = "Explore insights and tips from our marketing and tech experts.";

  return (
    <div className="min-h-screen font-sans text-[#0f172a]" 
         style={{ 
           background: 'linear-gradient(180deg, #f7fafc, #ffffff)',
           fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial'
         }}>
      
      {/* SEO / Meta Tags managed by Helmet */}
      <Helmet>
        <title>{pageHeadline} | BM Academy</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={`${pageHeadline} | BM Academy`} />
        <meta property="og:description" content={pageDescription} />
      </Helmet>

      {/* Header Section */}
      <section className="px-[60px] pt-[40px] pb-[20px] text-left max-md:text-center max-md:px-5 max-md:pt-[30px]">
        <h1 className="text-[36px] font-extrabold m-0 mb-[10px] max-md:text-[28px]">
          {pageHeadline}
        </h1>
        <h2 className="text-[#6b7280] text-[16px] m-0">
          {pageDescription}
        </h2>
      </section>

      {/* Blog Cards Container */}
      <div className="flex flex-wrap gap-[30px] px-[60px] pb-[60px] justify-start max-md:flex-col max-md:items-center max-md:px-5">
        
        {blogs.map((blog) => (
          <Link 
            key={blog.id}
            to={blog.link} 
            className="group flex flex-col w-full max-w-[380px] bg-white rounded-[12px] border-gray-300 border-1 overflow-hidden text-inherit no-underline transition-all duration-[180ms] ease-out hover:-translate-y-[6px]"
            style={{ 
              boxShadow: '0 6px 18px rgba(16,24,40,0.08)' 
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 12px 30px rgba(16,24,40,0.12)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 6px 18px rgba(16,24,40,0.08)'}
          >
            {/* Image */}
            <img 
              className="w-full h-[210px] object-cover block bg-[#f3f6f3]" 
              src={blog.image} 
              alt={blog.title} 
            />

            {/* Content Wrapper */}
            <div className="p-[18px] flex flex-col flex-grow ">
              <div>
                <div 
                  className="inline-block text-[12px] font-semibold px-[10px] py-[6px] rounded-full mb-[10px]"
                  style={{ 
                    color: '#d3be05', 
                    backgroundColor: 'rgba(14,165,163,0.06)' 
                  }}
                >
                  {blog.category}
                </div>
                
                <h2 className="m-0 mb-2 text-[20px] leading-[1.2] font-bold text-[#0f172a]">
                  {blog.title}
                </h2>
                
                <p className="m-0 mb-[14px] text-[#6b7280] text-[14px] leading-[1.45]">
                  {blog.excerpt}
                </p>
              </div>
              
              {/* Meta / Author Section (Aligned Bottom) */}
              <div className="mt-auto flex gap-[10px] items-center text-[13px] text-[#6b7280]">
                <img 
                  className="w-[36px] h-[36px] rounded-full object-cover border border-[#f4e800]"
                  style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
                  src={blog.avatar} 
                  alt="Author" 
                />
                <div>
                  <div className="font-semibold text-[#0f172a]">{blog.author}</div>
                  <div className="text-[12px] text-[#6b7280]">{blog.date}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}

      </div>
    </div>
  );
};

export default BlogPage;