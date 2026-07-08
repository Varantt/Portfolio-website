import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import Error from "./components/Error";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Project from "./components/Project/Project";
import Footer from "./components/Footer";
import Message from "./components/Message";
function App() {
  return (
    <div className="app bg-offWhite dark:bg-darkerBlackRaisin">
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
