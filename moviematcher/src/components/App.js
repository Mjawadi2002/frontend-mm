import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact'
import Profile from './Profile'
import Nomatch from "./Nomatch";
import Login from "./Login";
import Signup from "./Signup";

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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <FooterWrapper />
      </div>
    </Router>
  );
};

const FooterWrapper = () => {
  const location = useLocation();
  if (location.pathname !== "/profile") {
    return <Footer />;
  } else {
    return <div  style={{ background: "linear-gradient(to top, rgba(23, 23, 23, 0.937),rgb(4, 4, 4))" }}>
      <Footer />
    </div>;
  }
};

export default App;
