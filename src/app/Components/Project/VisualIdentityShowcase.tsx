'use client';

import React, { useState } from 'react';
import ProjectCard3 from '../Card/ProjectCard3';

const VisualIdentityShowcase = () => {
    const INITIAL_VISIBLE = 8;
    const LOAD_STEP = 4;

    const visualIdentityImages = [
        'WhatsApp Image 2026-02-01 at 14.50.04.jpeg',
        'WhatsApp Image 2026-02-01 at 14.50.05 (4).jpeg',
        'WhatsApp Image 2026-02-01 at 14.50.05.jpeg',
        'WhatsApp Image 2026-02-01 at 14.50.06 (1).jpeg',
        'WhatsApp Image 2026-02-01 at 14.50.06.jpeg',
        'WhatsApp Image 2026-02-01 at 14.50.07 (3).jpeg',
        'WhatsApp Image 2026-02-01 at 14.50.07 (5).jpeg',
        'WhatsApp Image 2026-02-01 at 14.50.07 (7).jpeg',
        'WhatsApp Image 2026-02-01 at 14.50.07 (8).jpeg',
        'WhatsApp Image 2026-02-01 at 14.50.08 (1).jpeg',
        'WhatsApp Image 2026-02-01 at 14.50.08 (2).jpeg',
        'WhatsApp Image 2026-02-01 at 14.50.08 (8).jpeg',
        'WhatsApp Image 2026-02-01 at 14.50.08 (9).jpeg',
        'WhatsApp Image 2026-02-01 at 14.50.08.jpeg',
        'f127894032.jpg',
        'f157186088.jpg',
        'f157187072.jpg',
        'f157187856.jpg',
        'f157187920.jpg',
        'f157189816.jpg',
        'f246546120.png',
    ];

    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

    const visibleItems = visualIdentityImages.slice(0, visibleCount);
    const hasMore = visibleCount < visualIdentityImages.length;

    const handleLoadMore = () => {
        setVisibleCount((prev) => Math.min(prev + LOAD_STEP, visualIdentityImages.length));
    };

    const cardEffects = ['zoom-in-up', 'fade-up', 'fade-left', 'fade-right'];

    return (
        <section className="visual-identity-showcase pt-130 pb-100 bg-gray-dark">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-55">
                        <div className="section-title" data-aos="fade-up">
                            <span className="sub-title">Brand Design</span>
                            <h2>Visual Identity</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {visibleItems.map((imageName, index) => (
                        <div
                            className="col-xl-3 col-lg-4 col-md-6"
                            key={imageName}
                            data-aos={cardEffects[index % cardEffects.length]}
                            data-aos-delay={100 + (index % 4) * 100}
                        >
                            <ProjectCard3
                                img={`/assets/images/creative-agency/VISUAL%20IDENTITY/${encodeURIComponent(imageName)}`}
                                title="Visual Identity"
                                content="Brand Design Project"
                            />
                        </div>
                    ))}
                </div>

                {hasMore && (
                    <div className="row mt-40">
                        <div className="col-12 text-center">
                            <button
                                type="button"
                                className="theme-btn style-two"
                                onClick={handleLoadMore}
                                data-aos="zoom-in"
                            >
                                Load More
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default VisualIdentityShowcase;
