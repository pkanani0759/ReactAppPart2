// Manpreet Kaur (8983013)
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles/App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home.js";
import Destinations from "./pages/Destinations.js";
import Tips from "./pages/Tips.js";
import Contact from "./pages/Contact.js";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
