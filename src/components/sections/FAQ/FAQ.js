import React, { useState } from 'react';
import './FAQ.css';

export function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Is QR Studio completely free to use?",
            answer: "Yes! QR Studio is 100% free to use for both personal and commercial purposes. There are no hidden fees, subscriptions, or scan limits. You can generate as many QR codes as you need."
        },
        {
            question: "Do the QR codes expire?",
            answer: "No, the QR codes generated with QR Studio are static and never expire. Once generated, they will work forever. Since we don't host your data (it's encoded directly into the QR image), you have full ownership."
        },
        {
            question: "Can I use the QR codes for commercial purposes?",
            answer: "Absolutely. You can use any QR code generated here for your business, marketing materials, product packaging, or websites without any restrictions or attribution required."
        },
        {
            question: "What format are the images downloaded in?",
            answer: "Currently, we offer high-quality PNG downloads. This format is widely supported and perfect for both digital use and printing. We ensure high resolution so your QR codes look crisp."
        },
        {
            question: "Is my data private?",
            answer: "Yes, completely private. QR Studio operates entirely in your browser (client-side). Your data is never sent to our servers. What you type and create stays on your device."
        },
        {
            question: "Why is my QR code not scanning?",
            answer: "If your QR code isn't scanning, try checking the color contrast. The foreground color should be significantly darker than the background. Also, ensure the logo isn't covering critical parts of the data pattern. Try simplifying the design or increasing the contrast."
        },
        {
            question: "Can I edit the QR code after generating it?",
            answer: "Since these are static QR codes, the content cannot be changed once downloaded. If you need to change the URL or text, you'll need to generate a new QR code. However, you can always tweak the design of the current code before downloading."
        },
        {
            question: "Do you track scan analytics?",
            answer: "No, we do not track scans. Because our QR codes are static and direct, we don't act as a middleman redirecting your traffic. This ensures better privacy and speed for your users, but means we cannot provide analytics."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section" id="faq">
            <div className="faq-container">
                <div className="faq-header">
                    <h2 className="faq-title">Frequently Asked Questions</h2>
                    <p className="faq-subtitle">Everything you need to know about QR Studio</p>
                </div>

                <div className="faq-grid">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <span className="faq-icon">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
