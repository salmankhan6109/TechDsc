import React from 'react';
import './ExpertSection.css';

const ExpertSection = () => {
    // Expert data array
    const experts = [
        {
            id: 1,
            name: 'Alex Johnson',
            role: 'Lead Developer',
            expertise: 'Full Stack Development',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#'
            }
        },
        {
            id: 2,
            name: 'Sarah Chen',
            role: 'UI/UX Designer',
            expertise: 'Product Design',
            image: 'https://images.unsplash.com/photo-1494790108777-296fd5c5e3c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#'
            }
        },
        {
            id: 3,
            name: 'Michael Rodriguez',
            role: 'AI/ML Expert',
            expertise: 'Machine Learning',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#'
            }
        },
        {
            id: 4,
            name: 'Emily Williams',
            role: 'Cloud Architect',
            expertise: 'AWS & Azure',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#'
            }
        },
        {
            id: 5,
            name: 'David Kim',
            role: 'Mobile Developer',
            expertise: 'React Native',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#'
            }
        },
        {
            id: 6,
            name: 'Priya Patel',
            role: 'DevOps Engineer',
            expertise: 'CI/CD & Kubernetes',
            image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#'
            }
        }
    ];

    return (
        <section className="experts-section" id="experts">
            <div className="experts-container">
                <div className="section-header">
                    <span className="section-subtitle">Our Team</span>
                    <h2 className="section-title">Meet Our DSC Experts</h2>
                    <p className="section-description">
                        Passionate mentors guiding the next generation of tech innovators
                    </p>
                </div>
                
                <div className="experts-grid">
                    {experts.map((expert) => (
                        <div key={expert.id} className="expert-card">
                            <div className="card-image-wrapper">
                                <img 
                                    src={expert.image} 
                                    alt={expert.name}
                                    className="expert-image"
                                />
                                <div className="social-overlay">
                                    <a href={expert.social.linkedin} className="social-icon" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href={expert.social.twitter} className="social-icon" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href={expert.social.github} className="social-icon" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                            </div>
                            
                            <div className="card-content">
                                <h3 className="expert-name">{expert.name}</h3>
                                <p className="expert-role">{expert.role}</p>
                                <p className="expert-expertise">{expert.expertise}</p>
                                <button className="learn-more-btn">Learn More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExpertSection;