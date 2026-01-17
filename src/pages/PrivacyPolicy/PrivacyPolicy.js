import React from 'react';
import './PrivacyPolicy.css';

export function PrivacyPolicy() {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <header className="legal-header">
                    <h1>Privacy Policy</h1>
                    <p className="last-updated">Last Updated: January 17, 2026</p>
                </header>

                <section className="legal-section">
                    <h2>1. Introduction</h2>
                    <p>
                        Welcome to QR Studio. We respect your privacy and are committed to protecting your personal data.
                        This privacy policy explains how we collect, use, and safeguard your information when you use our QR code generator service.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>2. Information We Collect</h2>
                    <p>QR Studio is a client-side application that processes all data in your browser. We collect minimal information:</p>
                    <ul>
                        <li><strong>QR Code Content:</strong> The text, URLs, or data you input to generate QR codes is processed locally in your browser and is not transmitted to our servers.</li>
                        <li><strong>Images:</strong> Any logos or patterns you upload are processed client-side and stored temporarily in your browser memory.</li>
                        <li><strong>Usage Data:</strong> We may collect anonymous analytics data to improve our service (page views, feature usage).</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>3. How We Use Your Information</h2>
                    <p>Since QR Studio processes data entirely in your browser:</p>
                    <ul>
                        <li>Your QR code data never leaves your device</li>
                        <li>We do not store or have access to the content of your QR codes</li>
                        <li>Downloaded QR codes are saved directly to your device</li>
                        <li>Analytics data (if any) is anonymized and used solely for service improvement</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>4. Data Security</h2>
                    <p>
                        We implement security measures to protect your information. Since all processing happens client-side,
                        your data remains secure on your device. We use HTTPS encryption for our website to prevent unauthorized access during transmission.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>5. Cookies and LocalStorage</h2>
                    <p>
                        QR Studio may use browser localStorage to remember your preferences (such as color schemes or last-used settings)
                        for a better user experience. This data is stored locally on your device and can be cleared at any time through your browser settings.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>6. Third-Party Services</h2>
                    <p>
                        We may use third-party services for analytics or hosting. These services have their own privacy policies.
                        We do not share your personal QR code content with any third parties.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>7. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Clear your browser data and localStorage at any time</li>
                        <li>Opt out of analytics tracking using browser extensions or settings</li>
                        <li>Request information about how we process your data</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>8. Children's Privacy</h2>
                    <p>
                        QR Studio is not directed to children under the age of 13. We do not knowingly collect personal information from children.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>9. Changes to This Policy</h2>
                    <p>
                        We may update this privacy policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>10. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <p>
                        <strong>QubitKode</strong><br />
                        Website: <a href="https://qubitkode.com/contact/" target="_blank" rel="noopener noreferrer">qubitkode.com/contact</a>
                    </p>
                </section>
            </div>
        </div>
    );
}
