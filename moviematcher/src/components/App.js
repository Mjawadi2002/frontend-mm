import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact'
import Profile from './Profile'
import Nomatch from "./Nomatch";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Nomatch />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
