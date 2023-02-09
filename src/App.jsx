import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Project from "./components/Project";
import Projects from "./components/Projects";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";
import ContactInfo from "./components/ContactInfo";
import Message from "./components/Message";
function App() {

  return (
    <div className="app">
      <Router className="app">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/message" element={<Message />} />
          <Route path="/contact" element={<ContactInfo />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:name" element={<Project />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
