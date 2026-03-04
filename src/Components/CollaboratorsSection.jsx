import React from 'react';
import './CollaboratorsSection.css';

const CollaboratorsSection = () => {
    // Collaborators data array
    const collaborators = [
        {
            id: 1,
            name: 'DevFest',
            description: 'Annual developer festival celebrating Google technologies with workshops, hackathons, and networking events.',
            image: 'https://images.unsplash.com/photo-1540575467069-5a5280a6a6ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            category: 'Tech Conference',
            link: '#'
        },
        {
            id: 2,
            name: 'Softec',
            description: 'Leading software technology conference bringing together innovators and industry experts for knowledge sharing.',
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            category: 'Tech Summit',
            link: '#'
        },
        {
            id: 3,
            name: 'Google for Startups',
            description: 'Empowering entrepreneurs with resources, mentorship, and connections to build successful tech companies.',
            image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            category: 'Startup Program',
            link: '#'
        },
        {
            id: 4,
            name: 'Microsoft Learn',
            description: 'Interactive learning platform offering free resources and certifications for developers and IT professionals.',
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            category: 'Education',
            link: '#'
        },
        {
            id: 5,
            name: 'AWS Educate',
            description: 'Providing students and educators with resources to build cloud computing skills for future careers.',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            category: 'Cloud Learning',
            link: '#'
        },
        {
            id: 6,
            name: 'GitHub Campus',
            description: 'Empowering students with industry-standard tools and collaboration platforms for open-source development.',
            image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            category: 'Developer Tools',
            link: '#'
        }
    ];

    return (
        <section className="collaborators-section" id="collaborators">
            <div className="collaborators-container">
                <div className="section-header">
                    <span className="section-subtitle">Our Partners</span>
                    <h2 className="section-title">Our Highly Esteemed Collaborators</h2>
                    <p className="section-description">
                        Working together with industry leaders to create amazing opportunities
                    </p>
                </div>

                {/* Scrollable Cards Container */}
                <div className="collaborators-scroll">
                    <div className="collaborators-track">
                        {collaborators.map((collaborator) => (
                            <div key={collaborator.id} className="collaborator-card">
                                <div className="card-image-wrapper">
                                    <img 
                                        src={collaborator.image} 
                                        alt={collaborator.name}
                                        className="collaborator-image"
                                    />
                                    <div className="card-overlay">
                                        <span className="category-tag">{collaborator.category}</span>
                                    </div>
                                </div>
                                
                                <div className="card-content">
                                    <h3 className="collaborator-name">{collaborator.name}</h3>
                                    <p className="collaborator-description">{collaborator.description}</p>
                                    <div className="card-footer">
                                        <a href={collaborator.link} className="collaborate-btn">
                                            Learn More
                                            <span className="btn-arrow">→</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="scroll-indicator">
                    <span className="scroll-hint">← Scroll to explore →</span>
                </div>
            </div>
        </section>
    );
};

export default CollaboratorsSection;