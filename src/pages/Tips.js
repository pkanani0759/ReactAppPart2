// Darshankumar Mehta (9007018)
import React from "react";
import {
  FaPlane,
  FaSuitcase,
  FaMobileAlt,
  FaLanguage,
  FaExclamationTriangle,
  FaLightbulb,
  FaPassport,
  FaFirstAid,
  FaUtensils,
  FaQuestionCircle,
} from "react-icons/fa";
import "../styles/Tips.css";
import { Link } from "react-router-dom";

function Tips() {

  // Array of tips
  const tips = [
    {
      icon: <FaPlane />,
      title: "Book in Advance",
      description: "Secure flights and hotels early to get the best deals.",
    },
    {
      icon: <FaSuitcase />,
      title: "Pack Light",
      description: "Carry only essentials to make traveling easier.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Stay Connected",
      description: "Use local SIM cards or eSIMs for affordable internet.",
    },
    {
      icon: <FaLanguage />,
      title: "Learn Local Phrases",
      description: "Simple greetings and thank you go a long way.",
    },
    {
      icon: <FaExclamationTriangle />,
      title: "Check Travel Advisories",
      description: "Always review safety updates before visiting.",
    },
    {
      icon: <FaLightbulb />,
      title: "Plan Your Itinerary",
      description: "Organize daily activities to make the most of your trip.",
    },
  ];

  // Array of essentials
  const essentials = [
    { icon: <FaPassport />, item: "Passport & Documents" },
    { icon: <FaFirstAid />, item: "First Aid Kit" },
    { icon: <FaUtensils />, item: "Snacks & Water" },
  ];

  // Array of faqs
  const faqs = [
    {
      q: "How early should I book flights?",
      a: "Booking 6–8 weeks in advance usually gives the best prices.",
    },
    {
      q: "What if I lose my passport?",
      a: "Report immediately to your embassy and keep photocopies handy.",
    },
    {
      q: "How can I avoid roaming charges?",
      a: "Buy a local SIM card or use international eSIMs.",
    },
  ];

  return (
    <div className="tips">
      {/* Banner / Quote */}
      <div className="tips-banner">
        <h1>Travel Tips</h1>
        <p className="tips-intro">
          “Traveling – it leaves you speechless, then turns you into a storyteller.”
        </p>
      </div>

      {/* Tips Grid */}
      <div className="tips-grid">
        {tips.map((tip, index) => (
          <div className="tip-card" key={index}>
            <div className="tip-icon">{tip.icon}</div>
            <h3>{tip.title}</h3>
            <p>{tip.description}</p>
          </div>
        ))}
      </div>

      {/* Essentials Section */}
      <div className="essentials">
        <h2>Travel Essentials</h2>
        <ul>
          {essentials.map((e, index) => (
            <li key={index}>
              {e.icon} {e.item}
            </li>
          ))}
        </ul>
      </div>

      {/* FAQ Section */}
      <div className="faq">
        <h2>
          <FaQuestionCircle /> Frequently Asked Questions
        </h2>
        {faqs.map((f, index) => (
          <div className="faq-item" key={index}>
            <h4>Q: {f.q}</h4>
            <p>A: {f.a}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
     <div className="cta">
      <h2>Ready for your next adventure?</h2>
      <p>
        Discover more destinations, plan your trip, and make unforgettable memories.
      </p>
      <Link to="/destinations"><button className="cta-button">Explore Now</button></Link>
    </div>
    </div>
  );
}

export default Tips;
