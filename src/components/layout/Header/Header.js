import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigation = (e, sectionId) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: sectionId } });
        } else {
            scrollToSection(sectionId);
        }
        setIsMobileMenuOpen(false);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            const sectionId = location.state.scrollTo;
            setTimeout(() => {
                scrollToSection(sectionId);
                window.history.replaceState({}, document.title);
            }, 100);
        }
    }, [location]);

    return (
        <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <div className="header-logo" onClick={(e) => handleNavigation(e, 'hero')}>
                    <img src="/Logo.png" alt="QR Studio Logo" className="logo-image-header" />
                </div>

                <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <a href="/" onClick={(e) => handleNavigation(e, 'hero')} className="nav-link">Home</a>
                    <a href="/#features" onClick={(e) => handleNavigation(e, 'features')} className="nav-link">Features</a>
                    <a href="/#how-it-works" onClick={(e) => handleNavigation(e, 'how-it-works')} className="nav-link">How It Works</a>
                    <a href="/#generator" onClick={(e) => handleNavigation(e, 'generator')} className="nav-link">Generator</a>
                    <Link to="/about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                    <Link to="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                    <button onClick={(e) => handleNavigation(e, 'generator')} className="cta-button-header">
                        Try It Now
                    </button>
                </nav>

                <button
                    className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
}
