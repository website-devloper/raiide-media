'use client';

import React from 'react';

const pillars = [
    {
        icon: 'bi-bar-chart-line-fill',
        tag: 'Strategy',
        title: 'Business-Driven Planning',
        description:
            'We start with goals, audience, and market insights to build clear roadmaps that connect creative work to measurable growth.',
        color: 'var(--primary-color)',
    },
    {
        icon: 'bi-camera-reels-fill',
        tag: 'Content',
        title: 'Creative Production Studio',
        description:
            'From social content to branded videos and campaigns, we produce visual assets that make your brand stand out and stay consistent.',
        color: '#ff3e6c',
    },
    {
        icon: 'bi-palette-fill',
        tag: 'Branding',
        title: 'Strong Visual Identity',
        description:
            'We design cohesive identities including logo, colors, typography, and style systems that strengthen recognition across every channel.',
        color: '#3b82f6',
    },
    {
        icon: 'bi-graph-up-arrow',
        tag: 'Performance',
        title: 'Optimization & Scale',
        description:
            'We track results, optimize campaigns, and continuously improve performance to increase reach, engagement, and conversion.',
        color: '#f97316',
    },
];

const WhoWeAre2 = () => {
    return (
        <section className="agk-features who-we-are-modern pt-130 pb-100 bg-black overflow-hidden">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center mb-80 pf_fadeup">
                            <span className="sub-title">Who We Are</span>
                            <h2 className="text-white">A Creative Digital Agency Built for Modern Brands</h2>
                            <p className="mt-20 max-600 mx-auto text-muted">
                                We combine <span className="text-white fw-bold">strategy, content, branding, and performance marketing</span> to help businesses grow with purpose.
                                Our team turns ideas into digital experiences that connect with audiences and drive real results.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row g-4 position-relative">
                    <div className="background-glow d-none d-lg-block"></div>
                    {pillars.map((item, index) => (
                        <div className="col-lg-6 col-md-6" key={item.title}>
                            <div
                                className="premium-who-card pf_fadeup"
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                            >
                                <div className="card-inner">
                                    <div className="icon-wrap" style={{ '--accent-color': item.color } as React.CSSProperties}>
                                        <i className={`bi ${item.icon}`}></i>
                                    </div>
                                    <div className="content">
                                        <span className="card-tag" style={{ color: item.color }}>{item.tag}</span>
                                        <h3 className="text-white">{item.title}</h3>
                                        <p className="text-muted">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .who-we-are-modern {
                    position: relative;
                }
                .text-white { color: #ffffff !important; }
                .text-muted { color: rgba(255, 255, 255, 0.7) !important; }
                .max-600 { max-width: 600px; }
                .background-glow {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 400px;
                    height: 400px;
                    background: var(--primary-color);
                    filter: blur(150px);
                    opacity: 0.1;
                    pointer-events: none;
                    z-index: 1;
                }
                .premium-who-card {
                    position: relative;
                    z-index: 2;
                    height: 100%;
                }
                .card-inner {
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    padding: 40px;
                    border-radius: 24px;
                    display: flex;
                    gap: 30px;
                    height: 100%;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .premium-who-card:hover .card-inner {
                    background: rgba(255, 255, 255, 0.05);
                    border-color: rgba(255, 255, 255, 0.1);
                    transform: translateY(-10px);
                }
                .icon-wrap {
                    flex-shrink: 0;
                    width: 70px;
                    height: 70px;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 18px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 30px;
                    color: var(--accent-color);
                    transition: all 0.3s ease;
                }
                .premium-who-card:hover .icon-wrap {
                    background: var(--accent-color);
                    color: white;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
                }
                .card-tag {
                    display: block;
                    font-size: 14px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    margin-bottom: 15px;
                }
                .content h3 {
                    font-size: 24px;
                    font-weight: 700;
                    margin-bottom: 15px;
                }
                .content p {
                    font-size: 16px;
                    line-height: 1.7;
                    margin: 0;
                }

                @media (max-width: 767px) {
                    .card-inner {
                        flex-direction: column;
                        padding: 30px;
                        gap: 20px;
                    }
                }
            `}</style>
        </section>
    );
};

export default WhoWeAre2;

