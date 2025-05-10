import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Testimonials from './components/Testimonials.jsx';
import ContactForm from './components/ContactForm.jsx';
import ChatWidget from './components/ChatWidget.jsx'; // Optional if using chat widget
import MockedChatWidget from './components/MockedChatWidget.jsx';
import './styles.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
    document.body.classList.toggle('light', !isDarkMode);
  }, [isDarkMode]);

  return (
    <div>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          padding: '10px 16px',
          backgroundColor: isDarkMode ? '#f3f3f3' : '#222',
          color: isDarkMode ? '#222' : '#fff',
          borderRadius: '8px',
          zIndex: 1000,
        }}
      >
        {isDarkMode ? 'Light' : 'Dark'}
      </button>

      <HeroSection isDarkMode={isDarkMode} />
      <HowItWorks isDarkMode={isDarkMode} />
      <WhyChooseUs isDarkMode={isDarkMode} />
      <Testimonials isDarkMode={isDarkMode} />
      <ContactForm isDarkMode={isDarkMode} />
      <ChatWidget /> {/* Optional: if chat widget is included */}
    </div>
  );
}

export default App;
