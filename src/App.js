import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/About";
import Newsletter from "./components/Contact";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import RegisterForm from "./components/RegisterForm";
import Team from "./components/Team";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          {/* About Section with Nested Routes */}
          <Route path="/about" element={<Analytics />}>
            <Route path="team" element={<Team />} />
          </Route>
          {/* Other Top-Level Routes */}
          <Route path="/contact" element={<Newsletter />} />
          <Route path="/pricing" element={<Cards />} />
          <Route path="/login" element={<RegisterForm />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
