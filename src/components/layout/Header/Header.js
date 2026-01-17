import React, { useState, useEffect } from 'react';
import './Header.css';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <div className="header-logo" onClick={() => scrollToSection('hero')}>
                    <img src="/Logo.png" alt="QR Studio Logo" className="logo-image-header" />
                    
                </div>


                <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="nav-link">Home</a>
                    <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }} className="nav-link">Features</a>
                    <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }} className="nav-link">How It Works</a>
                    <a href="#generator" onClick={(e) => { e.preventDefault(); scrollToSection('generator'); }} className="nav-link">Generator</a>
                    <button onClick={() => scrollToSection('generator')} className="cta-button-header">
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
