import React from 'react';

const pillars = [
    {
        icon: 'bi-bar-chart-line-fill',
        tag: 'Strategy',
        title: 'Business-Driven Planning',
        description:
            'We start with goals, audience, and market insights to build clear roadmaps that connect creative work to measurable growth.',
    },
    {
        icon: 'bi-camera-reels-fill',
        tag: 'Content',
        title: 'Creative Production Studio',
        description:
            'From social content to branded videos and campaigns, we produce visual assets that make your brand stand out and stay consistent.',
    },
    {
        icon: 'bi-palette-fill',
        tag: 'Branding',
        title: 'Strong Visual Identity',
        description:
            'We design cohesive identities including logo, colors, typography, and style systems that strengthen recognition across every channel.',
    },
    {
        icon: 'bi-graph-up-arrow',
        tag: 'Performance',
        title: 'Optimization & Scale',
        description:
            'We track results, optimize campaigns, and continuously improve performance to increase reach, engagement, and conversion.',
    },
];

const WhoWeAre2 = () => {
    return (
        <section className="agk-features who-we-are-redesign gray-dark pt-120 pb-90">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="section-title mb-45 pf_fadeup" data-aos="fade-right" data-aos-duration="900">
                            <span className="sub-title">Who We Are</span>
                            <h2>A Creative Digital Agency Built for Modern Brands</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-box mb-40 pf_fadeup" data-aos="fade-left" data-aos-duration="900" data-aos-delay="120">
                            <p>
                                We combine <span>strategy, content, branding, and performance marketing</span> to help businesses grow with purpose.
                                Our team turns ideas into digital experiences that connect with audiences and drive real results.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {pillars.map((item, index) => (
                        <div className="col-lg-3 col-md-6 col-sm-12" key={item.title}>
                            <div
                                className="agenko-iconic-box style-seven who-card mb-40 pf_fadeup"
                                data-aos="zoom-in-up"
                                data-aos-delay={80 + index * 80}
                            >
                                <div className="icon">
                                    <i className={`bi ${item.icon}`}></i>
                                </div>
                                <div className="content">
                                    <span className="who-card-tag">{item.tag}</span>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre2;
