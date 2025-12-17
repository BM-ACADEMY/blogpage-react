import React from "react";
import { Routes, Route } from "react-router-dom";
import GoogleAnalytics from "./GoogleAnalytics";

import { Digitalmarketing } from "./Blog/Pages/Digitalmarketing";
import BlogPage from "./Blog/Mainblogpage";
import Pondicherryjobs from "./Blog/Pages/Pondicherryjobs";

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
      </Routes>
    </>
  );
};
