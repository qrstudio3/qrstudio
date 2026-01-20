import React, { useEffect } from 'react';
import './AboutUs.css';

export default function AboutUs() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const timelineEvents = [
        {
            year: 'Foundation',
            title: 'Humble Beginnings',
            description: 'Started our journey with a vision to deliver world-class digital solutions locally and globally.'
        },
        {
            year: 'Growth',
            title: 'Exceptional Results',
            description: 'Achieved exceptional results through transparent communication and reliable delivery.'
        },
        {
            year: 'Innovation',
            title: 'Continuous Evolution',
            description: 'Continuously evolving with new technologies and innovative strategies to stay ahead.'
        },
        {
            year: 'Expansion',
            title: 'Global Presence',
            description: 'Expanding our presence to serve clients better and strengthen global collaborations.'
        }
    ];

    const services = [
        {
            title: 'Web Development',
            description: 'Build fast, secure, and scalable websites tailored to your business goals using modern frameworks.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
            )
        },
        {
            title: 'Mobile Development',
            description: 'Create intuitive, high-performance mobile apps for iOS and Android that users love.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
            )
        },
        {
            title: 'AI Development & DevOps',
            description: 'Empower your business with smart chatbots, agents, and generative AI solutions. Streamline deployment and scalability.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                </svg>
            )
        },
        {
            title: 'Game Development',
            description: 'Design engaging and immersive games that captivate players using Unreal Engine and Unity.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                    <path d="M6 12h4m-2-2v4m10-2h.01m-3.01 0h.01"></path>
                </svg>
            )
        },
        {
            title: 'Digital Marketing & SEO',
            description: 'Boost visibility, traffic, and conversions through data-driven digital marketing strategies.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 20h20"></path>
                    <path d="M5 20v-4"></path>
                    <path d="M9 20v-8"></path>
                    <path d="M13 20v-6"></path>
                    <path d="M17 20v-10"></path>
                </svg>
            )
        }
    ];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-content">
                    <h1>Our Experts Dedicated<br />to Your Success</h1>
                    <p>
                        We bring together creativity, technical excellence, and strategic thinking to help your business grow.
                        We don't just deliver projects, we build long-term partnerships focused on results.
                    </p>
                </div>
            </section>

            {/* Core Values / Stats */}
            <section className="about-section">
                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <h3>Skilled Professionals</h3>
                        <p>Experts in web, mobile, AI, Game, and digital growth dedicated to delivering excellence.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                        </div>
                        <h3>Client-Centric Approach</h3>
                        <p>Your goals shape every solution we create. We prioritize your vision and business objectives.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <h3>Proven Results</h3>
                        <p>Consistent delivery, measurable impact, and lasting success for businesses worldwide.</p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="about-section services-section">
                <h2 className="section-title">All Services We Provide<br /><span>To Our Clients</span></h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-headers">
                                <div className="service-icon-wrapper">
                                    {service.icon}
                                </div>
                                <h4>{service.title}</h4>
                            </div>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Timeline Section */}
            <section className="about-section timeline-section">
                <h2 className="section-title">Company <span>Timeline</span></h2>
                <div className="timeline-container">
                    {timelineEvents.map((event, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-year">{event.year}</span>
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta">
                <div className="cta-content">
                    <h2>Grow Your Business With Us</h2>
                    <p>
                        We design, build, and scale digital products from websites, mobile apps, and immersive games to AI systems.
                        Let's turn your ideas into impactful digital experiences.
                    </p>
                    <a href="https://qubitkode.com/contact/" target="_blank" rel="noopener noreferrer" className="cta-button">
                        Contact Us Today
                    </a>
                </div>
            </section>
        </div>
    );
}
