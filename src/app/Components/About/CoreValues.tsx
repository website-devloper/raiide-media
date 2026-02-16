'use client';

import React from 'react';

const values = [
    {
        icon: 'bi-shield-check',
        title: 'Integrity',
        description: 'Transparency in every project. We build trust through honest communication and data-driven results.',
        color: '#7b61ff'
    },
    {
        icon: 'bi-cpu',
        title: 'Innovation',
        description: 'We stay ahead of digital trends, using cutting-edge tools and creative techniques to keep your brand leading.',
        color: '#f97316'
    },
    {
        icon: 'bi-lightning-charge',
        title: 'Impact',
        description: 'We don’t just create—we deliver results. Every piece of content is engineered for maximum performance.',
        color: '#3b82f6'
    },
    {
        icon: 'bi-people',
        title: 'Synergy',
        description: 'Our team acts as an extension of yours. Collective creativity drives our most successful partnerships.',
        color: '#4ecdc4'
    }
];

const CoreValues = () => {
    return (
        <section className="core-values-section pt-120 pb-100 bg-black">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center mb-70 pf_fadeup">
                            <span className="sub-title">What Drives Us</span>
                            <h2>Our Core Values</h2>
                            <p className="mt-20">The pillars that define our culture and ensure the success of every brand we partner with.</p>
                        </div>
                    </div>
                </div>
                <div className="row g-4">
                    {values.map((value, index) => (
                        <div key={value.title} className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="value-card">
                                <div className="value-icon-box" style={{ '--icon-color': value.color } as React.CSSProperties}>
                                    <i className={`bi ${value.icon}`}></i>
                                </div>
                                <h4>{value.title}</h4>
                                <p>{value.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .value-card {
                    background: #0f0f0f;
                    border: 1px solid #1a1a1a;
                    border-radius: 25px;
                    padding: 45px 30px;
                    height: 100%;
                    transition: all 0.3s ease;
                    text-align: center;
                }
                .value-card:hover {
                    background: #151515;
                    border-color: #333;
                    transform: translateY(-8px);
                }
                .value-icon-box {
                    width: 60px;
                    height: 60px;
                    margin: 0 auto 25px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 28px;
                    color: var(--icon-color);
                    background: rgba(var(--icon-color-rgb), 0.1);
                    border-radius: 15px;
                    transition: all 0.3s ease;
                }
                .value-card:hover .value-icon-box {
                    transform: scale(1.1) rotate(5deg);
                }
                .value-card h4 {
                    color: white;
                    font-size: 22px;
                    margin-bottom: 15px;
                    font-weight: 700;
                }
                .value-card p {
                    color: #777;
                    font-size: 15px;
                    line-height: 1.6;
                    margin: 0;
                }
            `}</style>
        </section>
    );
};

export default CoreValues;
