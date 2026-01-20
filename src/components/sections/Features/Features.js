import React, { useEffect, useRef, useState } from 'react';
import './Features.css';

export function Features() {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);
    const [progress, setProgress] = useState(0);

    const features = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 21a4 4 0 01-4-4V7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7z" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 8l-8 8M8 8h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            title: 'Custom Styling',
            description: 'Choose from solid colors, beautiful gradients, or custom image patterns. Make your QR codes truly unique.',
            bgClass: 'bg-custom-styling'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 2v4m0 12v4M2 12h4m12 0h4m-2.05-7.05l-2.83 2.83m-8.24 0L4.05 4.95m0 14.1l2.83-2.83m8.24 0l2.83 2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            title: 'Logo Integration',
            description: 'Add your brand logo to the center of QR codes with customizable borders and corner roundness.',
            bgClass: 'bg-logo-integration'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: 'Instant Generation',
            description: 'Real-time preview as you customize. Download high-quality PNG images instantly anytime.',
            bgClass: 'bg-instant'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                </svg>
            ),
            title: 'Always Free',
            description: 'No subscriptions, no hidden fees. Create unlimited QR codes forever free.',
            bgClass: 'bg-free'
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const element = sectionRef.current;
            const { top } = element.getBoundingClientRect();
            const totalHeight = element.offsetHeight - window.innerHeight;

            // Calculate progress based on how far we've scrolled into the container
            // We want it to start when the top reaches 0, and end when the bottom reaches window height
            let scrollProgress = -top / totalHeight;

            // Clamp value between 0 and 1
            scrollProgress = Math.max(0, Math.min(1, scrollProgress));

            setProgress(scrollProgress);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const scrollToGenerator = () => {
        const element = document.getElementById('generator');
        if (element) {
            const offset = 80;
            const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section id="features" className="features-section" ref={sectionRef}>
            <div className="features-sticky-wrapper">
                <div className="features-header-overlay">
                    <h2 className="features-title">Powerful Features</h2>
                    <p>Scroll down to explore</p>
                </div>

                <div className="features-horizontal-track" ref={trackRef} style={{ transform: `translateX(-${progress * 75}%)` }}>
                    {features.map((feature, index) => (
                        <div key={index} className={`feature-fullscreen-card ${feature.bgClass}`}>
                            <div className="feature-content-container">
                                <div className="feature-icon-large">
                                    {feature.icon}
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                                <button className="start-creating-btn" onClick={scrollToGenerator}>
                                    Try It Now
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '8px' }}>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
