// Pareshkumar Kanani (8960759)
import React from "react";
import {
  FaHiking, FaUmbrellaBeach, FaLandmark, FaMoon, FaPlaneDeparture, FaSuitcase, FaCreditCard,
  FaGlobeAmericas,
  FaSuitcaseRolling,
  FaCameraRetro,
  FaMountain,
  FaTheaterMasks,
  FaMoneyBillWave
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {

  // Array of highlights
  const highlights = [
    {
      title: "Explore Unique Destinations",
      description: "From vibrant cities to serene beaches, discover the perfect spot for your next trip.",
      icon: <FaGlobeAmericas />
    },
    {
      title: "Travel Smarter",
      description: "Get essential tips for smooth journeys, packing hacks, and itinerary planning.",
      icon: <FaSuitcaseRolling />
    },
    {
      title: "Get Inspired",
      description: "Enjoy breathtaking photos and real traveler stories to fuel your wanderlust.",
      icon: <FaCameraRetro />
    },
    {
      title: "Adventure Awaits",
      description: "Find thrilling activities, hidden gems, and local experiences at every destination.",
      icon: <FaMountain />
    },
    {
      title: "Cultural Experiences",
      description: "Immerse yourself in local traditions, festivals, and culinary delights.",
      icon: <FaTheaterMasks />
    },
    {
      title: "Budget-Friendly Tips",
      description: "Learn how to travel smart without breaking the bank.",
      icon: <FaMoneyBillWave />
    },
  ];

  // Array of adventures
  const adventures = [
    { title: "Hiking & Nature", icon: <FaHiking /> },
    { title: "Beaches & Relaxation", icon: <FaUmbrellaBeach /> },
    { title: "Cultural Tours", icon: <FaLandmark /> },
    { title: "Nightlife & Entertainment", icon: <FaMoon /> },
  ];

  // Array of tips
  const tips = [
    { icon: <FaPlaneDeparture />, title: "Book Flights Early" },
    { icon: <FaSuitcase />, title: "Pack Smart" },
    { icon: <FaCreditCard />, title: "Travel Budget-Friendly" }
  ];

  return (
    <>
    {/* Hero Section */}
      <section className="hero">
        <img src="/images/hero.jpg" alt="Travel Hero" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to Wanderlust Guide</h1>
          <p>Making travel planning simple, inspiring, and accessible for everyone.</p>
          <Link to="/destinations" className="cta-button">Explore Destinations</Link>
        </div>
      </section>
    <div className="home">
      {/* Intro Section */}
      <section className="intro">
        <h2>Why Choose Wanderlust Guide?</h2>
        <p>
          Whether you are seeking a romantic getaway, an adventure-packed holiday,
          or a peaceful escape, we have got you covered. Explore destinations,
          get expert advice, and plan your perfect trip.
        </p>
      </section>

      {/* Highlights Grid */}
      <section className="highlights">
        <h2>Highlights</h2>
        <div className="grid">
          {highlights.map((item, index) => (
            <div className="highlight-card" key={index}>
              <div className="high-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="featured-destinations">
        <h2>Featured Destinations</h2>
        <div className="destination-preview">
          <div className="destination-card-preview">
            <img src="/images/paris.jpg" alt="Paris" />
            <h3>Paris, France</h3>
            <Link to="/destinations">View More</Link>
          </div>
          <div className="destination-card-preview">
            <img src="/images/tokyo.jpg" alt="Tokyo" />
            <h3>Tokyo, Japan</h3>
            <Link to="/destinations">View More</Link>
          </div>
          <div className="destination-card-preview">
            <img src="/images/toronto.jpg" alt="Toronto" />
            <h3>Toronto, Canada</h3>
            <Link to="/destinations">View More</Link>
          </div>
        </div>
      </section>

      {/* Travel Tips Snippet */}
      <section className="tips-snippet">
        <h2>Top Travel Tips</h2>
        <div className="tips-grid">
          {tips.map((tip, index) => (
            <div className="tip-card" key={index}>
              <div className="tip-icon">{tip.icon}</div>
              <h3>{tip.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Adventure Categories */}
      <section className="adventure-categories">
        <h2>Choose Your Adventure</h2>
        <div className="adventure-grid">
          {adventures.map((adv, i) => (
            <div className="adventure-card" key={i}>
              <div className="adv-icon">{adv.icon}</div>
              <h3>{adv.title}</h3>
            </div>
          ))}
        </div>
      </section>

    </div></>
  );
}

export default Home;
