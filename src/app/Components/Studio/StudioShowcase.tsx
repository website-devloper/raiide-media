'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const StudioShowcase = () => {
    const INITIAL_VISIBLE = 8;
    const LOAD_STEP = 8;

    const studioImages = [
        'studio (1).jpeg', 'studio (2).jpeg', 'studio (3).jpeg', 'studio (4).jpeg',
        'studio (5).jpeg', 'studio (6).jpeg', 'studio (7).jpeg', 'studio (8).jpeg',
        'studio (9).jpeg', 'studio (10).jpeg', 'studio (11).jpeg'
    ];

    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

    const visibleItems = studioImages.slice(0, visibleCount);
    const hasMore = visibleCount < studioImages.length;

    const handleLoadMore = () => {
        setVisibleCount((prev) => Math.min(prev + LOAD_STEP, studioImages.length));
    };

    return (
        <section className="agenko-project studio-showcase pt-130 pb-100 dark-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center mb-60 pf_fadeup">
                            <span className="sub-title">Our Environment</span>
                            <h2>Professional Studios</h2>
                            <p className="mt-20">Explore our professional studios of choice, each designed with a unique atmosphere to inspire your creativity and deliver top-tier content.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {visibleItems.map((imageName, index) => (
                        <div
                            key={imageName}
                            className="col-xl-3 col-lg-4 col-md-6 mb-30"
                            data-aos="fade-up"
                            data-aos-delay={(index % 4) * 100}
                        >
                            <div className="studio-card">
                                <div className="studio-image">
                                    <Image
                                        src={`/assets/images/creative-agency/our-studios/${imageName}`}
                                        alt={`Studio ${index + 1}`}
                                        width={600}
                                        height={800}
                                        className="img-fluid"
                                        style={{ objectFit: 'cover', borderRadius: '15px', height: '400px', width: '100%' }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                    {hasMore && (
                        <div className="col-12 text-center mt-40 pf_fadeup">
                            <button type="button" className="theme-btn style-two" onClick={handleLoadMore}>
                                Load More Studios
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                .dark-bg {
                    background: #0a0a0a;
                }
                .studio-card {
                    overflow: hidden;
                    border-radius: 15px;
                    transition: all 0.3s ease;
                    border: 1px solid #1a1a1a;
                }
                .studio-card:hover {
                    transform: translateY(-10px);
                    border-color: #333;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
                }
                .studio-image {
                    position: relative;
                }
            `}</style>
        </section>
    );
};

export default StudioShowcase;
