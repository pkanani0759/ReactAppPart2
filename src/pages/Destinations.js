// Manpreet Kaur (8983013)
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Destinations.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Destinations() {
  // Array of Top Travel Destinations
  const destinations = [
    {
      name: "Paris, France",
      description: "The city of love and lights, home to the Eiffel Tower, the Louvre, and charming cafes.",
      bestTime: "April, June, September, November",
      highlights: ["Eiffel Tower", "Louvre Museum", "Seine River Cruise", "Montmartre"],
      tips: "Buy tickets online for museums to skip the long queues.",
      image: "/images/paris.jpg",
    },
    {
      name: "Tokyo, Japan",
      description: "A dynamic mix of ancient traditions and cutting-edge technology, cherry blossoms, and world-class sushi.",
      bestTime: "March, May, September, November",
      highlights: ["Shibuya Crossing", "Tokyo Skytree", "Meiji Shrine", "Tsukiji Market"],
      tips: "Get a Suica card for easy travel on trains and buses.",
      image: "/images/tokyo.jpg",
    },
    {
      name: "Banff, Canada",
      description: "Majestic mountains, turquoise lakes, and incredible hiking trails in the heart of the Rockies.",
      bestTime: "June, August for hiking, December, March for skiing",
      highlights: ["Lake Louise", "Moraine Lake", "Banff Gondola", "Johnston Canyon"],
      tips: "Arrive early to avoid parking issues at popular lakes.",
      image: "/images/toronto.jpg",
    },
    {
      name: "Dubai, UAE",
      description: "A futuristic desert city offering luxury shopping, ultramodern architecture, and lively nightlife.",
      bestTime: "November – March (cooler weather)",
      highlights: ["Burj Khalifa", "Dubai Mall", "Desert Safari", "Palm Jumeirah"],
      tips: "Respect dress codes in public places and religious sites.",
      image: "/images/dubai.jpg",
    },
    {
      name: "Rome, Italy",
      description: "A historic city filled with ancient ruins, Renaissance art, and delicious Italian cuisine.",
      bestTime: "April, May, September, October",
      highlights: ["Colosseum", "Vatican City", "Trevi Fountain", "Pantheon"],
      tips: "Buy a Roma Pass for free public transport and discounted entry to major attractions.",
      image: "/images/rome.jpg",
    },
    {
      name: "Sydney, Australia",
      description: "A vibrant harbor city known for its beaches, iconic Opera House, and outdoor adventures.",
      bestTime: "September – November, March – May",
      highlights: ["Sydney Opera House", "Bondi Beach", "Sydney Harbour Bridge", "Taronga Zoo"],
      tips: "Take a ferry ride for stunning views of the harbor and skyline.",
      image: "/images/sydney.jpg",
    },
  ];

  // Array of Testimonials (Traveler Experiences)
  const testimonials = [
    {
      name: "Emily R.",
      text: "Paris was absolutely magical! Every corner felt like a movie set.",
      avatar: "/images/avatar1.jpg",
    },
    {
      name: "Daniel K.",
      text: "Tokyo’s mix of tradition and modern life blew me away. Highly recommended!",
      avatar: "/images/avatar2.jpeg",
    },
    {
      name: "Sarah L.",
      text: "Banff's scenery is beyond words. Nature at its finest.",
      avatar: "/images/avatar3.jpg",
    },
  ];

  // React Slick Carousel Settings
  const settings = {
    dots: true,           // Show navigation dots
    infinite: true,       // Infinite loop
    speed: 600,           // Transition speed
    slidesToShow: 1,      // Show one testimonial at a time
    slidesToScroll: 1,
    autoplay: true,       // Auto-play enabled
    autoplaySpeed: 4500,  // Slide changes every 4.5 seconds
    pauseOnHover: true,   // Pause autoplay when hovering
  };

  return (
    <div className="destinations">
      {/* Page Heading */}
      <h1>Top Destinations Around the World</h1>
      <p className="intro">
        Explore the most iconic travel spots with hand-picked recommendations, highlights, and travel tips.
      </p>

      {/* Destination Cards Section */}
      <div className="destination-grid">
        {destinations.map((place, index) => (
          <div className="destination-card" key={index}>
            {/* Destination Image */}
            <img src={place.image} alt={place.name} />

            {/* Destination Content */}
            <div className="card-content">
              <h2>{place.name}</h2>
              <p className="description">{place.description}</p>
              <p><strong>Best Time to Visit:</strong> {place.bestTime}</p>

              {/* Highlights List */}
              <div className="highlights">
                <h4>Highlights:</h4>
                <ul>
                  {place.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Travel Tip */}
              <div className="tips">
                <p><strong>Travel Tip:</strong> {place.tips}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials + Newsletter */}
      <div className="additional-sections">
        
        {/* Traveler Testimonials Carousel */}
        <div className="testimonials-section">
          <h3>Traveler Experiences</h3>
          <Slider {...settings}>
            {testimonials.map((t, index) => (
              <div className="testimonial-card" key={index}>
                {/* Quote + Feedback */}
                <div className="testimonial-content">
                  <FaQuoteLeft className="quote-icon" />
                  <p>{t.text}</p>
                  <FaQuoteRight className="quote-icon right" />
                </div>

                {/* Author Info */}
                <div className="testimonial-author">
                  <img src={t.avatar} alt={t.name} />
                  <span>{t.name}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Newsletter Signup Form */}
        <div className="newsletter-section">
          <h3>Subscribe for Travel Updates</h3>
          <p>Get tips, guides, and special deals straight to your inbox.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Destinations;
