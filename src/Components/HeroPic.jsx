import './HeroPic.css';
import { useState } from 'react';

const HeroPic = () => {
  // Slides array – each slide now includes an image URL (random group photos)
  const slides = [
    {
      title: 'About DSC NCBAE',
      description: 'Information about DSC NCBAE...',
      buttonText: 'Learn More',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80', // group photo
    },
    {
      title: 'Our Mission',
      description: 'Empowering students with tech skills through hands-on workshops and events.',
      buttonText: 'Discover',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80', // group working
    },
    {
      title: 'Join Us',
      description: 'Be part of a community of innovators and developers.',
      buttonText: 'Get Involved',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80', // team meeting
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="about"
      id="about"
      style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
    >
      {/* Dark overlay for text readability */}
      <div className="overlay"></div>

      <div className="carousel-container">
        <div className="slide">
          <h2 className="slide-title">{slides[currentIndex].title}</h2>
          <p className="slide-description">{slides[currentIndex].description}</p>
          <button className="slide-button">{slides[currentIndex].buttonText}</button>
        </div>

        {/* Navigation arrows */}
        <button className="carousel-arrow prev" onClick={goToPrevious}>
          &#10094;
        </button>
        <button className="carousel-arrow next" onClick={goToNext}>
          &#10095;
        </button>

        {/* Dots indicator */}
        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroPic;