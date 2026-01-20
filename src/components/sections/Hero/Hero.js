import React from 'react';
import './Hero.css';

export function Hero() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <div className="hero-badge">
                    <span className="badge-icon">✨</span>
                    <span>Free Forever • No Sign-up Required</span>
                </div>

                <h1 className="hero-title">
                    Create Stunning
                    <span className="hero-title-gradient"> QR Codes</span>
                    <br />in Seconds
                </h1>

                <p className="hero-subtitle">
                    Professional QR code generator with custom colors, gradients, patterns, and logos.
                    <br />Design beautiful QR codes that match your brand perfectly.
                </p>

                <div className="hero-cta-group">
                    <button onClick={() => scrollToSection('generator')} className="hero-cta-primary">
                        <svg className="cta-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Start Creating Free
                    </button>
                    <button onClick={() => scrollToSection('how-it-works')} className="hero-cta-secondary">
                        Learn How It Works
                        <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                <div className="hero-features-list">
                    <div className="hero-feature-item">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Unlimited QR Codes</span>
                    </div>
                    <div className="hero-feature-item">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Custom Branding</span>
                    </div>
                    <div className="hero-feature-item">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Instant Download</span>
                    </div>
                </div>
            </div>

            <div className="hero-visual">
                <div className="qr-showcase">
                    <div className="qr-sample qr-sample-1">
                        <div className="sample-qr">
                            <img src="/brand-logo-1.png" alt="Brand Logo 1" className="qr-brand-logo" />
                        </div>
                    </div>
                    <div className="qr-sample qr-sample-2">
                        <div className="sample-qr">
                            <img src="/brand-logo-2.png" alt="Brand Logo 2" className="qr-brand-logo" />
                        </div>
                    </div>
                    <div className="qr-sample qr-sample-3">
                        <div className="sample-qr">
                            <img src="/brand-logo-3.png" alt="Brand Logo 3" className="qr-brand-logo" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator" onClick={() => scrollToSection('features')}>
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
                <span>Scroll to explore</span>
            </div>
        </section>
    );
}
