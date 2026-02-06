import React from 'react';
import { Generator } from '../../qr-generator/Generator/Generator';
import './GeneratorSection.css';

export function GeneratorSection() {
    return (
        <section id="generator" className="generator-section">
            <div className="generator-section-container">
                <div className="generator-section-header">
                    <h2 className="generator-section-title">Try It Now</h2>
                    <p className="generator-section-subtitle">
                        Start creating your custom QR code right away. It's free and takes less than a minute!
                        Enter your URL, choose your colors, add a logo, and download your high-quality QR code instantly.
                    </p>
                </div>
                <Generator />
            </div>
        </section>
    );
}
