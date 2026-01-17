import React from 'react';
import './Footer.css';

export function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-content">
                    {/* Brand Column */}
                    <div className="footer-column footer-brand">
                        <div className="footer-logo">
                            <img src="/Logo.png" alt="QR Studio Logo" className="footer-logo-image" />
                            <span>QR Studio</span>
                        </div>
                        <p className="footer-tagline">Beautiful QR Codes Made Simple</p>
                        <div className="social-links">
                            <a href="https://qubitkode.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Website">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="2" y1="12" x2="22" y2="12" />
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                </svg>
                            </a>
                            <a href="https://x.com/MarsadR1" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="X">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/marsad-rasheed4/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="footer-column">
                        <h3 className="footer-column-title">Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Home</a></li>
                            <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Features</a></li>
                            <li><a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}>How It Works</a></li>
                            <li><a href="#generator" onClick={(e) => { e.preventDefault(); scrollToSection('generator'); }}>Generator</a></li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div className="footer-column">
                        <h3 className="footer-column-title">Resources</h3>
                        <ul className="footer-links">
                            <li><a href="https://qubitkode.com/about/" target="_blank" rel="noopener noreferrer">About Us</a></li>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/terms">Terms of Service</a></li>
                            <li><a href="https://qubitkode.com/contact/" target="_blank" rel="noopener noreferrer">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-divider"></div>
                    <p className="footer-copyright">
                        © {currentYear} QR Studio. All rights reserved. Made with <span className="heart">❤️</span> for the community
                    </p>
                </div>
            </div>
        </footer>
    );
}
