// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';  // MUST have this import
import './App.css';
import Header from './Components/Header';
import HeroPic from './Components/HeroPic';
import AboutSection from './Components/AboutSection';
import ExpertSection from './Components/ExpertSection';
import CollaboratorsSection from './Components/CollaboratorsSection';
import WhatWeDoSection from './Components/WhatWeDoSection';
import Footer from './Components/Footer';
import JoinUs from './Components/JoinUs';  // Import JoinUs

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <HeroPic />
            <AboutSection />
            <ExpertSection />
            <CollaboratorsSection />
            <WhatWeDoSection />
            <Footer />
          </>
        } />
        <Route path="/join-us" element={<JoinUs />} />
      </Routes>
    </div>
  );
}

export default App;