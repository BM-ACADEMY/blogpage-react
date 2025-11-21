import React from "react";
import { Routes, Route } from "react-router-dom";
import { Digitalmarketing } from "./Blog/Pages/Digitalmarketing";
import BlogPage from "./Blog/Mainblogpage"; 

export const App = () => {
  return (

      <Routes>

        <Route path="/" element={<BlogPage />} />

        <Route path="/blog/top-ai-tools-digital-marketing-course-2025" element={<Digitalmarketing />} />
      </Routes>
  );
};
