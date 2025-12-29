import React from "react";
import { Routes, Route } from "react-router-dom";
import GoogleAnalytics from "./GoogleAnalytics";

import { Digitalmarketing } from "./Blog/Pages/Digitalmarketing";
import BlogPage from "./Blog/Mainblogpage";
import Pondicherryjobs from "./Blog/Pages/Pondicherryjobs";
import AIForFullStack from "./Blog/Pages/WhyAISkillsFsd";
import Futureskills from "./Blog/Pages/Futureskills";

export const App = () => {
  return (
    <>
      <GoogleAnalytics /> {/* <-- THIS tracks route changes */}

      <Routes>
        <Route path="/" element={<BlogPage />} />
        <Route
          path="/blog/top-ai-tools-digital-marketing-course-2025"
          element={<Digitalmarketing />}
        />
        <Route
          path="/blog/job-ready-courses-in-pondicherry"
          element={<Pondicherryjobs />}
        />
        <Route
          path="/blog/why-ai-skills-fsd"
          element={<AIForFullStack />}
        />
        <Route
          path="/blog/new-year-new-skill"
          element={<Futureskills />}
        />
      </Routes>
    </>
  );
};
