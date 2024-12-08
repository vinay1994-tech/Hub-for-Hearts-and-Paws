import React, { useState } from "react";
import "./App.css"; // Import CSS for styling
import HeroSection from "./components/HeroSection";
import RegisterSection from "./components/RegisterSection";
import WhyChoose from "./components/WhyChoose";
import Navbar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import './App.css';
import Footer from "./components/Footer";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
       <Navbar />
      </header>
      <HeroSection />
      <RegisterSection />
      <WhyChoose />
      <br />
      <Footer />
      
    </div>
  );
};

export default App;
