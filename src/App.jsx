
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
// import Contact from "./components/pages/Contact";
import Navbar from "./components/pages/Navbar";
import Footer from "./components/pages/Footer"
import Portfolio from "./components/pages/Portfolio";
// import Resume from "./components/pages/Resume";
import ScrollTop from "./ScrollTop";


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          {/* <Route path="/Resume" element={<Resume />} /> */}
          <Route path="/About" element={<About />} />
          {/* <Route path="/Contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
