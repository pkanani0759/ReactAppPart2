// Navneet Kaur (9005972)
import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Contact.css";

function Contact() {
  // State for handling form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  // Update form data dynamically when user types
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    // Prevents page reload
    e.preventDefault(); 
    // Confirmation message
    alert("Message sent! Thank you."); 
    // Reset form fields after submit
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact">
      {/* Header Section */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Reach out through the form or visit us.</p>
      </div>

      {/* Contact Info + Form Section */}
      <div className="contact-container">
        
        {/* Contact Information Cards */}
        <div className="contact-info">
          {/* Phone Info */}
          <div className="info-card">
            <FaPhoneAlt className="info-icon" />
            <h3>Phone</h3>
            <p>+1 (123) 456-7890</p>
          </div>

          {/* Email Info */}
          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <h3>Email</h3>
            <p>support@wonderlust.com</p>
          </div>

          {/* Location Info */}
          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <h3>Location</h3>
            <p>123 Adventure Lane, Toronto, Canada</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            {/* Name Input */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            {/* Email Input */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            {/* Message Input */}
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            {/* Submit Button */}
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="map-section">
        <h2>Find Us Here</h2>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.3759978274683!2d-79.38318448450997!3d43.65322697912156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d52caa3e05%3A0x5f89c9e82c7b02a3!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1672537600000!5m2!1sen!2sca"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "15px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
