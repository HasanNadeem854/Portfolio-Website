// src/components/contact/ContactMe.jsx
import React from 'react';
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>If you have any questions or want to get in touch, feel free to reach out!</p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactMe;
