'use client';

import React from 'react';

const steps = [
    {
        number: '01',
        title: 'Strategy',
        text: 'Deep research into your brand, market, and audience to build a roadmap for success.',
        color: '#7b61ff'
    },
    {
        number: '02',
        title: 'Creation',
        text: 'Production of high-impact visuals, videos, and branding that capture your unique essence.',
        color: '#f97316'
    },
    {
        number: '03',
        title: 'Launch',
        text: 'Deploying the creative work across the right channels to maximize reach and engagement.',
        color: '#3b82f6'
    },
    {
        number: '04',
        title: 'Growth',
        text: 'Continuous optimization and scaling based on real performance data and results.',
        color: '#ff3e6c'
    }
];

const CreativeProcess = () => {
    return (
        <section className="creative-process-section pt-130 pb-110 bg-black">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center mb-80 pf_fadeup">
                            <span className="sub-title">How we work</span>
                            <h2>The Creative Roadmap</h2>
                            <p className="mt-20">A streamlined 4-step process designed to take your brand from concept to digital dominance.</p>
                        </div>
                    </div>
                </div>

                <div className="process-wrapper">
                    <div className="process-line d-none d-lg-block"></div>
                    <div className="row g-5">
                        {steps.map((step, index) => (
                            <div key={step.number} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={index * 150}>
                                <div className="process-step-item">
                                    <div className="step-number-box" style={{ '--step-color': step.color } as React.CSSProperties}>
                                        <span className="step-num">{step.number}</span>
                                        <div className="step-dot"></div>
                                    </div>
                                    <div className="step-content">
                                        <h4>{step.title}</h4>
                                        <p>{step.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .process-wrapper {
                    position: relative;
                }
                .process-line {
                    position: absolute;
                    top: 45px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: linear-gradient(90deg, #7b61ff 0%, #f97316 33%, #3b82f6 66%, #ff3e6c 100%);
                    opacity: 0.2;
                    z-index: 1;
                }
                .process-step-item {
                    position: relative;
                    z-index: 2;
                }
                .step-number-box {
                    width: 90px;
                    height: 90px;
                    background: #111;
                    border: 2px solid #222;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 30px;
                    position: relative;
                    transition: all 0.3s ease;
                }
                .step-num {
                    font-size: 28px;
                    font-weight: 800;
                    color: var(--step-color);
                }
                .step-dot {
                    position: absolute;
                    bottom: -30px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 12px;
                    height: 12px;
                    background: var(--step-color);
                    border-radius: 50%;
                    box-shadow: 0 0 15px var(--step-color);
                    opacity: 0.5;
                }
                .process-step-item:hover .step-number-box {
                    border-color: var(--step-color);
                    transform: scale(1.1);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                }
                .step-content h4 {
                    color: white;
                    font-size: 22px;
                    margin-bottom: 15px;
                    font-weight: 700;
                }
                .step-content p {
                    color: #777;
                    font-size: 15px;
                    line-height: 1.6;
                    margin: 0;
                }

                @media (max-width: 991px) {
                    .step-number-box { margin-bottom: 20px; }
                    .step-dot { display: none; }
                }
            `}</style>
        </section>
    );
};

export default CreativeProcess;
