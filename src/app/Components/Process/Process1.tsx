import React from 'react';

const steps = [
    {
        title: 'Discovery & Strategy',
        description:
            'We audit your brand, audience, and competitors, then build a clear strategy with positioning, messaging, and growth priorities.',
        icon: 'bi-search',
    },
    {
        title: 'Creative Production',
        description:
            'Our team produces high-impact visuals, content, and videos aligned with your brand identity and campaign objectives.',
        icon: 'bi-camera-video',
    },
    {
        title: 'Campaign Launch',
        description:
            'We execute across social media, paid ads, and digital channels with precise targeting, timelines, and performance tracking.',
        icon: 'bi-rocket-takeoff',
    },
    {
        title: 'Optimize & Scale',
        description:
            'We measure results, optimize creatives and funnels, and scale what works to maximize ROI and long-term brand growth.',
        icon: 'bi-graph-up-arrow',
    },
];

const Process1 = () => {
    return (
        <section className="agk-process process1-enhanced pt-70 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center mb-60 pf_zoomIn" data-aos="fade-up" data-aos-duration="900">
                            <span className="sub-title">Our Process</span>
                            <h2>How We Turn Ideas Into Real Digital Growth</h2>
                            <p>
                                A structured workflow designed for modern brands, from strategy to execution, with measurable outcomes at every step.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="agk-process-wrapper pf_fadeup" data-aos="fade-up" data-aos-delay="120">
                    <div className="process-line"></div>
                    <div className="row">
                        {steps.map((step, index) => (
                            <div className="col-lg-3 col-md-6 col-sm-12" key={step.title}>
                                <div className="agk-process-box" data-aos="zoom-in" data-aos-delay={160 + index * 80}>
                                    <div className="agenko-step">Step {String(index + 1).padStart(2, '0')}</div>
                                    <div className="agenko-iconic-box style-five mb-40">
                                        <div className="icon">
                                            <i className={`bi ${step.icon}`}></i>
                                        </div>
                                        <div className="content">
                                            <h5>{step.title}</h5>
                                            <p>{step.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process1;
