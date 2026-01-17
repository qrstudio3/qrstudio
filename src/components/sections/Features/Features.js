import React from 'react';
import './Features.css';

export function Features() {
    const features = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 21a4 4 0 01-4-4V7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7z" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 8l-8 8M8 8h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            title: 'Custom Styling',
            description: 'Choose from solid colors, beautiful gradients, or custom image patterns. Make your QR codes truly unique.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 2v4m0 12v4M2 12h4m12 0h4m-2.05-7.05l-2.83 2.83m-8.24 0L4.05 4.95m0 14.1l2.83-2.83m8.24 0l2.83 2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            title: 'Logo Integration',
            description: 'Add your brand logo to the center of QR codes with customizable borders and corner roundness.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: 'Instant Generation',
            description: 'Real-time preview as you customize. Download high-quality PNG images instantly anytime.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                </svg>
            ),
            title: 'Always Free',
            description: 'No subscriptions, no hidden fees, no sign-up required. Create unlimited QR codes forever free.'
        }
    ];

    return (
        <section id="features" className="features-section">
            <div className="features-container">
                <div className="features-header">
                    <h2 className="features-title">Powerful Features for Beautiful QR Codes</h2>
                    <p className="features-subtitle">
                        Everything you need to create professional, branded QR codes that stand out
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
