'use client';

import React, { useEffect, useState } from 'react';
import ProjectCard3 from '../Card/ProjectCard3';

const Project4 = () => {
    const INITIAL_VISIBLE = 8;
    const LOAD_STEP = 8;
    const services = [
        'CONTENT CREATION',
        'PHOTOGRAPHY',
        'VISUAL IDENTITY',
        'CONTENT VIDEO',
        'MARKETING DIGITAL',
        'SOCIAL MEDIA MARKETING',
    ];
    const projectImages = [
        'wedocontent (1).jpeg',
        'wedocontent (2).jpeg',
        'wedocontent (5).jpeg',
        'wedocontent (6).jpeg',
        'wedocontent (7).jpeg',
        'wedocontent (8).jpeg',
        'wedocontent (9).jpeg',
        'wedocontent (10).jpeg',
        'wedocontent (3).jpeg',
        'wedocontent (4).jpeg',
        'wedocontent (11).jpeg',
        'wedocontent (12).jpeg',
        'wedocontent (13).jpeg',
        'wedocontent (14).jpeg',
        'wedocontent (15).jpeg',
        'wedocontent (16).jpeg',
        'wedocontent (17).jpeg',
        'wedocontent (18).jpeg',
        'wedocontent (19).jpeg',
        'wedocontent (20).jpeg',
        'wedocontent (21).jpeg',
        'wedocontent (22).jpeg',
        'wedocontent (23).jpeg',
        'wedocontent (24).jpeg',
        'wedocontent (25).jpeg',
        'wedocontent (26).jpeg',
        'wedocontent (27).jpeg',
        'wedocontent (28).jpeg',
        'wedocontent (29).jpeg',
        'wedocontent (31).jpeg',
        'wedocontent (32).jpeg',
        'wedocontent (33).jpeg',
        'wedocontent (34).jpeg',
        'wedocontent (35).jpeg',
        'wedocontent (36).jpeg',
        'wedocontent (37).jpeg',
        'wedocontent (38).jpeg',
        'wedocontent (39).jpeg',
        'wedocontent (40).jpeg',
        'wedocontent (41).jpeg',
        'wedocontent (42).jpeg',
        'wedocontent (43).jpeg',
        'wedocontent (44).jpeg',
        'wedocontent (45).jpeg',
        'wedocontent (46).jpeg',
        'wedocontent (47).jpeg',
        'wedocontent (48).jpeg',
    ];

    const projectItems = projectImages.map((imageName, index) => {
        const service = services[index % services.length];
        return {
            id: `${imageName}-${index}`,
            imageName,
            service,
            content: `${service} Showcase`,
        };
    });

    const [activeService, setActiveService] = useState('ALL');
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

    const filteredItems =
        activeService === 'ALL'
            ? projectItems
            : projectItems.filter((item) => item.service === activeService);

    useEffect(() => {
        setVisibleCount(INITIAL_VISIBLE);
    }, [activeService]);

    const visibleItems = filteredItems.slice(0, visibleCount);
    const hasMore = visibleCount < filteredItems.length;
    const cardEffects = ['zoom-in-up', 'fade-up', 'fade-left', 'fade-right'];

    const handleLoadMore = () => {
        setVisibleCount((prev) => Math.min(prev + LOAD_STEP, filteredItems.length));
    };

    return (
        <section className="agenko-project project4-compact pt-130 pb-100">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center mb-40" data-aos="fade-up" data-aos-duration="1000">
                            <span className="sub-title" data-aos="zoom-in" data-aos-delay="100">Showcase</span>
                            <h2 data-aos="fade-up" data-aos-delay="180">Portfolio Work</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {visibleItems.map((item, itemIndex) => (
                        <div
                            className="col-xl-3 col-lg-4 col-md-6"
                            key={item.id}
                            data-aos={cardEffects[itemIndex % cardEffects.length]}
                            data-aos-delay={80 + (itemIndex % 8) * 70}
                            data-aos-duration="900"
                            data-aos-anchor-placement="top-bottom"
                        >
                            <ProjectCard3
                                img={`/assets/images/creative-agency/New folder (2)/${encodeURIComponent(item.imageName)}`}
                                title={item.service}
                                content={item.content}
                            />
                        </div>
                    ))}
                    {hasMore && (
                        <div className="col-12 text-center mt-20" data-aos="fade-up" data-aos-delay="120">
                            <button type="button" className="theme-btn style-two" onClick={handleLoadMore} data-aos="zoom-in-up">
                                Load More
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Project4;

