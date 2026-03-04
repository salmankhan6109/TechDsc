import './AboutSection.css';

const AboutSection = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="about-content-wrapper">
                    {/* Left side - Text content */}
                    <div className="about-text-content">
                        <span className="about-label">About Us</span>
                        <h2 className="about-title">About DSC NCBAE</h2>
                        <p className="about-description">
                            DSC NCBAE began as an official Google Developer Student Club and that was just the beginning. 
                            Today, we're a fully independent, student-run community of builders, thinkers, and problem-solvers. 
                            No limits. Just ambition, curiosity, and students who refuse to stop creating. 
                            If you're curious, you already belong here. Because the best communities aren't found — they're built.
                        </p>
                        <button className="about-button">View More</button>
                    </div>
                    
                    {/* Right side - Image block that matches text height */}
                    <div className="about-image-block">
                        <div className="image-grid">
                            <div className="grid-item item1">
                                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team collaboration" />
                            </div>
                            <div className="grid-item item2">
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Coding session" />
                            </div>
                            <div className="grid-item item3">
                                <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team meeting" />
                            </div>
                            <div className="grid-item item4">
                                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Workshop" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;