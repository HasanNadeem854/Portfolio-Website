import React, { useState } from 'react';
import { FaGithub, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { MdHome, MdCode, MdMic, MdInfo, MdPhone } from 'react-icons/md';
import './Sidebar.css';

const Sidebar = ({ setSection, width, onResize }) => {
  const [isResizing, setIsResizing] = useState(false);

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  const handleMouseMove = (e) => {
    if (isResizing) {
      const newWidth = e.clientX; // New width based on mouse position

      const minWidth = 200; // Minimum width of the sidebar
      const maxWidth = 400; // Maximum width of the sidebar

      // Set the width within bounds
      if (newWidth >= minWidth && newWidth <= maxWidth) {
        onResize(newWidth);
      }
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  React.useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  return (
    <div className="sidebar" style={{ width: `${width}px` }}>
      <div className="profile">
        <img src="./hasan.jpg" alt="Profile" className="profile-image" />
        <h2>Hasan Nadeem</h2>
        <p>Developer | Open Source Contributor | Public Speaker</p>
      </div>
      <div className="social-icons">
        <a href="https://github.com/HasanNadeem854" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://x.com/GhurSawar0" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.youtube.com/@fortheloveofpython" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="https://www.linkedin.com/in/hasan-nadeem-81a6b51bb/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
      </a>
      </div>
      <div className="menu">
        <button onClick={() => setSection('home')}><MdHome /> Home</button>
        <button onClick={() => setSection('portfolio')}><MdCode /> Portfolio</button>
        <button onClick={() => setSection('youtube-lectures')}><MdMic /> Youtube-Lectures</button>
        
        <button onClick={() => setSection('contact')}><MdPhone /> Contact Me</button>
      </div>
      <div className="resize-handle" onMouseDown={handleMouseDown} />
    </div>
  );
};

export default Sidebar;
