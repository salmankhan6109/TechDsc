import React from 'react';
import './WhatWeDoSection.css';

const WhatWeDoSection = () => {
    // What We Do data array with 4 missions
    const missions = [
        {
            id: 1,
            title: 'Mission 1',
            description: 'Empowering students with hands-on workshops and technical training sessions to build real-world skills.',
            icon: '🚀'
        },
        {
            id: 2,
            title: 'Mission 2',
            description: 'Creating collaborative environments where developers can network, share ideas, and grow together.',
            icon: '🤝'
        },
        {
            id: 3,
            title: 'Mission 3',
            description: 'Organizing hackathons and coding competitions to foster innovation and problem-solving abilities.',
            icon: '💡'
        },
        {
            id: 4,
            title: 'Mission 4',
            description: 'Building bridges between students and industry experts through mentorship and career guidance programs.',
            icon: '🌟'
        }
    ];

    return (
        <section className="what-we-do-section" id="whatwedo">
            <div className="what-we-do-container">
                <div className="section-header">
                    <span className="section-subtitle">Our Focus</span>
                    <h2 className="section-title">What We Do</h2>
                    <p className="section-description">
                        Empowering the next generation of tech innovators through impactful initiatives
                    </p>
                </div>

                <div className="missions-grid">
                    {missions.map((mission) => (
                        <div key={mission.id} className="mission-card">
                            <div className="card-inner">
                                <div className="card-front">
                                    <div className="icon-wrapper">
                                        <span className="mission-icon">{mission.icon}</span>
                                    </div>
                                    <h3 className="mission-title">{mission.title}</h3>
                                    <div className="card-hover-indicator">
                                        <span>Hover to learn more</span>
                                        <span className="arrow">→</span>
                                    </div>
                                </div>
                                <div className="card-back">
                                    <p className="mission-description">{mission.description}</p>
                                    <div className="back-footer">
                                        <span className="back-label">{mission.title}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDoSection;