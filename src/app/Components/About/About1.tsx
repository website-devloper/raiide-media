'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type About1Props = {
    variant?: 'default' | 'about';
};

const About1 = ({ variant = 'default' }: About1Props) => {
    const isAboutPage = variant === 'about';

    const heading = isAboutPage
        ? 'Built for Brands That Want to Lead, Not Follow'
        : "We Don't Just Market Brands, We Build Them";

    const descriptionOne = "RAIIDE MEDIA is a creative digital agency built on strategy, creativity, and performance.";
    const descriptionTwo = "For over 4 years, we've partnered with ambitious brands to turn ideas into powerful digital experiences. We help businesses stand out and grow with confidence.";
    const descriptionThree = "We believe great results come from clear strategy and bold creativity. Every project is carefully crafted, data-driven, and designed to deliver real impact.";

    const ctaLabel = isAboutPage ? 'START YOUR PROJECT' : 'LEARN MORE';
    const ctaHref = isAboutPage ? '/contact' : '/about';

    const stats = [
        { value: isAboutPage ? '200' : '100', label: isAboutPage ? 'Projects Delivered' : 'Success Rate 99%' },
        { value: isAboutPage ? '20' : '10', label: isAboutPage ? 'Creative Experts' : 'Innovation Awards' },
    ];

    return (
        <section className="agk-about-polished pt-130 pb-100 bg-black">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-7">
                        <div className="agk-content-box mb-50 pf_fadeup">
                            <div className="section-title mb-30">
                                <span className="sub-title">About Raiide Media</span>
                                <h2 className="text-white mb-20">{heading}</h2>
                            </div>
                            <div className="description-text mb-40 text-muted">
                                <p className="lead text-white mb-20">{descriptionOne}</p>
                                <p className="mb-15">{descriptionTwo}</p>
                                <p>{descriptionThree}</p>
                            </div>

                            <div className="agk-stats-grid mb-45">
                                {stats.map((stat, i) => (
                                    <div key={i} className="polished-stat">
                                        <h3><span className="count">{stat.value}</span>+</h3>
                                        <p>{stat.label}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="agk-button">
                                <Link href={ctaHref} className="theme-btn style-one">
                                    <span className="text-flip">
                                        <span className="text">{ctaLabel}</span>
                                        <span className="text">{ctaLabel}</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-5">
                        <div className="about-visual-shell pf_fadeup">
                            <div className="video-container">
                                <Image
                                    src="/assets/images/creative-agency/New folder (2)/testi.jpeg"
                                    alt="About Us"
                                    fill
                                    className="polished-video"
                                />
                                <div className="experience-badge">
                                    <span className="years">{isAboutPage ? '5' : '4'}+</span>
                                    <span className="label">Years of<br />Excellence</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .text-white { color: #ffffff !important; }
                .text-muted { color: rgba(255, 255, 255, 0.6) !important; }
                .lead { font-size: 1.25rem; font-weight: 500; }
                
                .agk-stats-grid {
                    display: flex;
                    gap: 50px;
                }
                .polished-stat h3 {
                    font-size: 36px;
                    font-weight: 800;
                    color: var(--primary-color);
                    margin-bottom: 5px;
                }
                .polished-stat p {
                    font-size: 14px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin: 0;
                    color: rgba(255, 255, 255, 0.5);
                }

                .about-visual-shell {
                    position: relative;
                    padding: 20px;
                }
                .video-container {
                    position: relative;
                    border-radius: 30px;
                    overflow: hidden;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.5);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    aspect-ratio: 4/5;
                }
                .polished-video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .experience-badge {
                    position: absolute;
                    bottom: 30px;
                    right: -20px;
                    background: var(--primary-color);
                    color: black;
                    padding: 20px 30px;
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    box-shadow: 0 15px 30px rgba(0,0,0,0.3);
                }
                .experience-badge .years {
                    font-size: 32px;
                    font-weight: 900;
                    line-height: 1;
                }
                .experience-badge .label {
                    font-size: 12px;
                    font-weight: 700;
                    text-transform: uppercase;
                    line-height: 1.2;
                }

                @media (max-width: 1199px) {
                    .agk-stats-grid { gap: 30px; }
                    .about-visual-shell { margin-top: 50px; }
                    .experience-badge { right: 20px; }
                }
            `}</style>
        </section>
    );
};

export default About1;
