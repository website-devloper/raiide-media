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
    const descriptionTwo = "For over 4 years, we've partnered with ambitious brands to turn ideas into powerful digital experiences. From digital marketing and content creation to video editing and branding, we help businesses stand out, connect with their audience, and grow with confidence.";
    const descriptionThree = "We believe great results come from clear strategy and bold creativity. That's why we don't use generic solutions or shortcuts. Every project is carefully crafted, data-driven, and designed to deliver real impact in an ever-changing digital world.";
    const ctaLabel = isAboutPage ? 'START YOUR PROJECT' : 'LEARN MORE';
    const ctaHref = isAboutPage ? '/contact' : '/about';
    const statOneValue = isAboutPage ? '200' : '100';
    const statOneText = isAboutPage ? 'Projects delivered across industries' : 'Projects success rate 99%';
    const statTwoValue = isAboutPage ? '20' : '10';
    const statTwoText = isAboutPage ? 'Experts in strategy, design, and media' : 'Award for digital innovation';
    const marketYears = isAboutPage ? '5' : '4';

    return (
        <section className="agk-about pt-130 pb-80">
        <div className="container">
            <div className="row">
                <div className="col-xl-7">
                    
                    <div className="agk-content-box style-one mb-50 pf_fadeup">
                        <div className="section-title mb-20">
                            <span className="sub-title">About us</span>
                            <h2>{heading}</h2>
                        </div>
                        <p>{descriptionOne}</p>
                        <p>{descriptionTwo}</p>
                        <p>{descriptionThree}</p>
                    <div className="agk-button mb-30">
                        <Link href={ctaHref} className="theme-btn style-one">
                            <span className="text-flip">
                                <span className="text">{ctaLabel}</span>
                                <span className="text">{ctaLabel}</span>
                            </span>
                        </Link>
                    </div>
                    <ul>
                        <li>
                            
                            <div className="agenko-counter-box style-one">
                                <div className="content">
                                    <h2 className="mb-10"><span className="count">{statOneValue}</span>+</h2>
                                    <p>{statOneText}</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            
                            <div className="agenko-counter-box style-one">
                                <div className="content">
                                    <h2 className="mb-10"><span className="count">{statTwoValue}</span>+</h2>
                                    <p>{statTwoText}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-xl-5">
                    
                    <div className="agk-image-box style-one mb-50 pf_fadeup">
                        <div className="agk-image">
                        <video
                            className="about-fit-image"
                            src="/assets/images/creative-agency/CONTENT%20VIDEO/ABOUT%20US%20(2).mp4"
                            autoPlay
                            playsInline
                            controls
                        />
                        </div>
                        <div className="agenko-experince-box style-one">
                            <h2><span>{marketYears}</span>+</h2>
                            <p>Years On The Market</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default About1;







