import React, { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home'; // Import the Home component
import Portfolio from './components/portfolio/Portfolio'; // Import the Portfolio component
import ContactMe from './components/contact/ContactMe'; // Import the Contact Me component
import DataScienceProjects from './components/data/DataScienceProjects'; // Import Data Science Projects component
import './index.css';



function App() {
  const [section, setSection] = useState('home'); // State to track selected section
  const [sidebarWidth, setSidebarWidth] = useState(350); // Initial sidebar width

  const renderSection = () => {
    switch (section) {
      case 'home':
        return <Home />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <ContactMe />;
      case 'projects':
        return <DataScienceProjects />;
      default:
        return <Home />; // Fallback to Home if section doesn't match
    }
  };

  return (
    <div className="app">
      <Sidebar setSection={setSection} width={sidebarWidth} onResize={setSidebarWidth} />
      <div className="main-content" style={{ marginLeft: `${sidebarWidth}px` }}>
        <h1>{section.charAt(0).toUpperCase() + section.slice(1)} Section</h1>
        {renderSection()} {/* Render the corresponding section component */}
      </div>
    </div>
  );
}

export default App;
