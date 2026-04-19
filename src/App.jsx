import { useEffect } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import Error from "./components/Error";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Project from "./components/Project/Project";
import Footer from "./components/Footer";
import Message from "./components/Message";
import Cursor from "./components/Cursor/Cursor";
import NoiseTexture from "./components/NoiseTexture/NoiseTexture";

function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );

    const attach = () => {
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        observer.observe(el);
      });
    };

    attach();
    // Re-attach after a tick to catch lazily-rendered elements
    const timer = setTimeout(attach, 200);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return null;
}

function MagneticButtons() {
  useEffect(() => {
    const handleMove = (e) => {
      const btn = e.currentTarget;
      const rect = btn.getBoundingClientRect();
      const mx = e.clientX - rect.left - rect.width / 2;
      const my = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${mx * 0.18}px, ${my * 0.22}px)`;
    };
    const handleLeave = (e) => {
      e.currentTarget.style.transform = "";
    };

    const attach = () => {
      document.querySelectorAll("[data-magnet]").forEach((btn) => {
        btn.addEventListener("mousemove", handleMove);
        btn.addEventListener("mouseleave", handleLeave);
      });
    };

    const timer = setTimeout(attach, 300);
    return () => clearTimeout(timer);
  }, []);

  return null;
}

function App() {
  return (
    <div className="app">
      <Cursor />
      <NoiseTexture />
      <Router>
        <ScrollReveal />
        <MagneticButtons />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/message" element={<Message />} />
          <Route path="/project/:name" element={<Project />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
