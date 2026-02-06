import React from 'react';
import './Guide.css';

export function Guide() {
    return (
        <section className="guide-section" id="guide">
            <div className="guide-container">
                <div className="guide-header">
                    <h2 className="guide-title">Ultimate Guide to QR Codes</h2>
                    <p className="guide-subtitle">Everything you need to know about creating and using QR codes effectively.</p>
                </div>

                <div className="guide-content">
                    <article className="guide-article">
                        <h3>What is a QR Code?</h3>
                        <p>
                            A Quick Response (QR) code is a two-dimensional barcode capable of storing various types of data, such as URLs, text, contact information, and more.
                            Originally invented in 1994 by Denso Wave, QR codes have become an essential tool for bridging the physical and digital worlds.
                            Unlike traditional barcodes that read only horizontally, QR codes are read both horizontally and vertically, allowing them to store significantly more information.
                        </p>

                        <h3>How to Create a Professional QR Code</h3>
                        <p>
                            Creating a high-quality QR code is simple with QR Studio. Here are the steps to ensure your code is both functional and attractive:
                        </p>
                        <ul>
                            <li><strong>Choose Your Content:</strong> Determine what you want your users to do. Whether it's visiting a website, joining a Wi-Fi network, or viewing a digital business card, ensure the link is correct and active.</li>
                            <li><strong>Customize the Design:</strong> While black and white is standard, adding your brand colors makes the code stand out. Ensure there is enough contrast between the foreground and background for easy scanning.</li>
                            <li><strong>Add a Logo:</strong> Placing your logo in the center builds trust and brand recognition. QR Studio automatically adjusts the error correction level to ensure your code remains scannable even with a logo.</li>
                            <li><strong>Test Before Printing:</strong> Always scan your QR code with multiple devices (iOS and Android) and apps to verify it works correctly before mass printing.</li>
                        </ul>

                        <h3>Best Practices for Printing and Display</h3>
                        <p>
                            To maximize the effectiveness of your QR codes in the physical world, consider these tips:
                        </p>
                        <div className="guide-tips-grid">
                            <div className="guide-tip-card">
                                <h4>Size Matters</h4>
                                <p>Ensure the QR code is large enough to be scanned from a distance. A minimum size of 2x2 cm (0.8x0.8 inches) is recommended for close-range scanning.</p>
                            </div>
                            <div className="guide-tip-card">
                                <h4>High Quality</h4>
                                <p>Always use high-resolution images (like our PNG downloads) to prevent pixelation, which can cause scanning errors.</p>
                            </div>
                            <div className="guide-tip-card">
                                <h4>Quiet Zone</h4>
                                <p>Leave a margin of white space (quiet zone) around the code. This helps scanners distinguish the code from its surroundings.</p>
                            </div>
                            <div className="guide-tip-card">
                                <h4>Call to Action</h4>
                                <p>Don't just display the code; tell people what to do! Add a frame or text saying "Scan to View Menu" or "Scan for WiFi".</p>
                            </div>
                        </div>

                        <h3>Common Use Cases</h3>
                        <p>
                            QR codes are versatile tools used across various industries. Restaurants use them for digital menus, eliminating the need for physical copies.
                            Retailers use them for product packaging to provide detailed specifications or user manuals.
                            Event organizers use them for ticketing and seamless check-ins. In the corporate world, they are used for digital business cards (vCards) to instantly share contact details.
                        </p>

                        <h3>Why Choose Static QR Codes?</h3>
                        <p>
                            QR Studio generates static QR codes. This means the data is directly encoded into the pattern.
                            The advantage is that these codes will work forever and do not rely on an external server to redirect users.
                            They are faster, more private, and you fully own the code. However, you cannot change the content once printed, so double-check your links!
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}
