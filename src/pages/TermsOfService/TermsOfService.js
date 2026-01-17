import React from 'react';
import '../PrivacyPolicy/PrivacyPolicy.css'; // Reuse the same styles

export function TermsOfService() {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <header className="legal-header">
                    <h1>Terms of Service</h1>
                    <p className="last-updated">Last Updated: January 17, 2026</p>
                </header>

                <section className="legal-section">
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using QR Studio ("the Service"), you accept and agree to be bound by these Terms of Service.
                        If you do not agree to these terms, please do not use the Service.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>2. Description of Service</h2>
                    <p>
                        QR Studio is a free, client-side QR code generator that allows you to create customized QR codes with various styles,
                        colors, gradients, patterns, and logos. All processing is done in your browser.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>3. User Responsibilities</h2>
                    <p>When using QR Studio, you agree to:</p>
                    <ul>
                        <li>Use the Service only for lawful purposes</li>
                        <li>Not generate QR codes containing illegal, harmful, or malicious content</li>
                        <li>Not use the Service to mislead, deceive, or defraud others</li>
                        <li>Not attempt to circumvent or interfere with the security features of the Service</li>
                        <li>Respect intellectual property rights when using logos or images</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>4. Intellectual Property</h2>
                    <p>
                        The QR codes you generate using QR Studio are yours to use freely. However, you are responsible for ensuring
                        that any content, logos, or images you use do not infringe on third-party intellectual property rights.
                    </p>
                    <p>
                        The QR Studio service, including its design, code, and branding, is owned by QubitKode and protected by
                        intellectual property laws. You may not copy, modify, or distribute the Service without permission.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>5. Disclaimer of Warranties</h2>
                    <p>
                        QR Studio is provided "as is" and "as available" without warranties of any kind, either express or implied.
                        We do not guarantee that:
                    </p>
                    <ul>
                        <li>The Service will be uninterrupted or error-free</li>
                        <li>Generated QR codes will be scannable in all conditions</li>
                        <li>The Service will meet your specific requirements</li>
                        <li>All features will work on all devices or browsers</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>6. Limitation of Liability</h2>
                    <p>
                        To the maximum extent permitted by law, QubitKode and QR Studio shall not be liable for any indirect, incidental,
                        special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly,
                        or any loss of data, use, goodwill, or other intangible losses resulting from:
                    </p>
                    <ul>
                        <li>Your use or inability to use the Service</li>
                        <li>Any QR codes generated using the Service</li>
                        <li>Unauthorized access to or alteration of your data</li>
                        <li>Any other matter relating to the Service</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>7. Privacy</h2>
                    <p>
                        Your use of QR Studio is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>8. Third-Party Links</h2>
                    <p>
                        The Service may contain links to third-party websites or services. We are not responsible for the content,
                        privacy policies, or practices of any third-party sites.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>9. Modifications to Service</h2>
                    <p>
                        We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any time without notice.
                        We will not be liable to you or any third party for any modification, suspension, or discontinuance of the Service.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>10. Changes to Terms</h2>
                    <p>
                        We may update these Terms of Service from time to time. Any changes will be posted on this page with an updated
                        "Last Updated" date. Your continued use of the Service after such changes constitutes your acceptance of the new Terms.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>11. Governing Law</h2>
                    <p>
                        These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>12. Contact Information</h2>
                    <p>
                        If you have any questions about these Terms of Service, please contact us at:
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
