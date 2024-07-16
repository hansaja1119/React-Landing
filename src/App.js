import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Analytics from "./pages/About";
import Newsletter from "./pages/Contact";
import Cards from "./pages/Cards";
import Footer from "./components/Footer";
import RegisterForm from "./pages/RegisterForm";
import Team from "./components/Team";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<Analytics />}>
            <Route path="team" element={<Team />} />
          </Route>
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
