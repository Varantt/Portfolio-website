import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Message from "./components/Message";
function App() {

  return (
    <div className="app">
      <Router>
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
