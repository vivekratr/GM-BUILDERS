// import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { BlogProvider } from "./context/ContextProvider";
import Home from "./Pages/Home";
import BlogSection from "./Pages/BlogSection";

function App() {
  return  <BrowserRouter>
  <div>
    <BlogProvider>
      <Routes>
        <Route path="/" element={<Home /*state = {state}*/ />} />
        <Route path="/blog" element={<BlogSection /*state = {state}*/ />} />
        </Routes>
          {/* {<RegisterPage/>}  */}
        </BlogProvider>
      </div>
    </BrowserRouter>
}

export default App;
