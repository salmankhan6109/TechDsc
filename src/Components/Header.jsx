// Header.jsx
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleJoinUsClick = () => {
        console.log('Button clicked!'); // Check if this appears in console
        navigate('/join-us');
        console.log('Navigate called'); // Check if this appears
    };

    return (
        <header className="header">
            <nav className="navbar">
                <div className="logo">Tech DSC</div>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#experts">Experts</a></li>
                    <li><a href="#collaborators">Collaborators</a></li>
                    <li><a href="#whatwedo">What We Do</a></li>
                    <li>
                        <button 
                            className="nav-button"
                            onClick={handleJoinUsClick}
                            type="button"  // Explicitly set button type
                        >
                            Join Us
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;