"use client";

import Image from 'next/image';
import React, { useState } from 'react';

const faqContent = [
    {
        title: 'What services does your digital agency provide?',
        content:
            'We provide end-to-end digital services including brand strategy, visual identity, content creation, social media management, video production, paid advertising, and performance marketing.',
    },
    {
        title: 'How much does a project usually cost?',
        content:
            'Pricing depends on project scope, deliverables, and timelines. We start with a discovery call, then share a clear proposal with package options or a custom quote based on your goals.',
    },
    {
        title: 'How long does it take to launch a campaign?',
        content:
            'Most campaigns can launch in 1 to 3 weeks depending on content readiness, approvals, and complexity. Larger brand or multi-channel projects may need additional production time.',
    },
    {
        title: 'Do you handle both strategy and execution?',
        content:
            'Yes. We build the strategy, produce creative assets, launch campaigns, and optimize performance. You get one team handling planning, production, and growth.',
    },
    {
        title: 'How do you measure campaign results?',
        content:
            'We track KPIs like reach, engagement, leads, conversion rate, and return on ad spend. You receive regular reports with insights, actions taken, and next optimization steps.',
    },
    {
        title: 'Will I own my brand assets and content?',
        content:
            'Yes. Once the project is completed and approved, all final deliverables and brand assets are delivered to you for full usage across your channels.',
    },
];

const Faq1 = () => {
    const [openItemIndex, setOpenItemIndex] = useState(0);

    const handleItemClick = (index: number) => {
        setOpenItemIndex((prev) => (prev === index ? -1 : index));
    };

    return (
        <section className="agk-faq pt-130 pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="section-title mb-50 pf_fadeup">
                            <span className="sub-title">FAQ</span>
                            <h2>Common Questions Before We Start</h2>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="faq-big-text">FAQs</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="agk-image-box mb-50 pf_fadeup">
                            <div className="agk-image">
                                <Image
                                    className="faq-fit-image"
                                    src="/assets/images/creative-agency/faq/faq-main.jpg"
                                    alt="Team planning a digital marketing campaign"
                                    width={1920}
                                    height={1080}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="agk-content-box mb-30">
                            <div className="agk-accordion" id="accordionOne">
                                {faqContent.map((item, index) => {
                                    const isOpen = index === openItemIndex;

                                    return (
                                        <div key={item.title} className={`agenko-accordion-item mb-20 ${isOpen ? 'active' : ''}`}>
                                            <div onClick={() => handleItemClick(index)} className="accordion-header">
                                                <h6 className="accordion-title" aria-expanded={isOpen}>
                                                    {item.title}
                                                </h6>
                                            </div>
                                            {isOpen && (
                                                <div className="accordion-content">
                                                    <p>{item.content}</p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq1;



