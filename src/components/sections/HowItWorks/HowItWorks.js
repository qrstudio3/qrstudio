import React from 'react';
import './HowItWorks.css';

export function HowItWorks() {
    const steps = [
        {
            number: '01',
            title: 'Enter Your Content',
            description: 'Type or paste your URL, text, or any message you want to encode in the QR code.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            number: '02',
            title: 'Customize Style',
            description: 'Choose from solid colors, gradients, or patterns. Add your logo and customize borders to match your brand.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 21a4 4 0 01-4-4V7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7z" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 2v4m0 12v4M2 12h4m12 0h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            )
        },
        {
            number: '03',
            title: 'Download & Share',
            description: 'Download your custom QR code as a high-quality PNG image and start using it anywhere you need.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 11l5 5 5-5M12 4v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        }
    ];

    return (
        <section id="how-it-works" className="how-it-works-section">
            <div className="how-it-works-container">
                <div className="how-it-works-header">
                    <h2 className="how-it-works-title">Create Your QR Code in 3 Simple Steps</h2>
                    <p className="how-it-works-subtitle">
                        No technical skills required. Just follow these easy steps to create your perfect QR code
                    </p>
                </div>

                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="step-item"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="step-number">{step.number}</div>
                            <div className="step-icon">
                                {step.icon}
                            </div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description">{step.description}</p>
                            {index < steps.length - 1 && (
                                <div className="step-connector">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
