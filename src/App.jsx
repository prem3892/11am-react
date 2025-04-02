import React from "react";
import HeroSection from "./pages/HeroSection";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Protect from "./components/auth/Protect";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={HeroSection} />
        <Route path="/dashboard" element={<Protect />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
