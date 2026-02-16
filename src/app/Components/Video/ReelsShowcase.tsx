'use client';

import React, { useState } from 'react';

const ReelsShowcase = () => {
    const INITIAL_VISIBLE = 4;
    const reelsUrls = [
        'https://youtube.com/shorts/Bjw883t9c2k?si=l5OGNTouPm3t3WoF',
        'https://youtube.com/shorts/NC19jTsjE4Y?si=ec9pJUSLLfum3j_p',
        'https://youtube.com/shorts/T0uDn9gHNF8?si=aT7JGaF_mj6ZjHRe',
        'https://youtube.com/shorts/nCVZs4VLKhc?si=AzDS_61ARQlz5c8N',
        'https://youtube.com/shorts/XuE6F1TUuA4?si=uEePBRv9DszcBENq',
        'https://youtube.com/shorts/PqXXqPSYKv4?si=3ySrkdOeVMgWLCLs',
        'https://youtube.com/shorts/P458xq-1sxg?si=z31XCGv2WyKj3xuZ',
        'https://youtube.com/shorts/__H81GG4gRA?si=3NYGFGeaj3cLsj9x',
        'https://youtube.com/shorts/RVk24d3tAWI?si=dKM6vMjjJt6BOfyL',
        'https://youtube.com/shorts/ff_uNbPyx30?si=Mxbq-_69srlDK8qM',
    ];

    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

    const getEmbedUrl = (url: string) => {
        try {
            const parts = url.split('/shorts/');
            if (parts.length > 1) {
                const queryParams = parts[1].split('?');
                const videoId = queryParams[0];
                return `https://www.youtube.com/embed/${videoId}`;
            }
            return '';
        } catch (error) {
            console.error('Error parsing URL:', url, error);
            return '';
        }
    };

    const visibleReels = reelsUrls.slice(0, visibleCount);
    const hasMore = visibleCount < reelsUrls.length;

    const handleLoadMore = () => {
        setVisibleCount((prev) => Math.min(prev + INITIAL_VISIBLE, reelsUrls.length));
    };

    const cardEffects = ['zoom-in-up', 'fade-up', 'fade-left', 'fade-right'];

    return (
        <section className="video-showcase-section pt-130 pb-100">
            <div className="container">
                <div className="video-showcase-shell">
                    <div className="section-title text-center mb-40">
                        <span className="sub-title">Reels & Content</span>
                        <h2>Visual Stories</h2>
                    </div>

                    <div className="video-inline-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                        gap: '24px'
                    }}>
                        {visibleReels.map((url, index) => {
                            const embedUrl = getEmbedUrl(url);
                            if (!embedUrl) return null;

                            return (
                                <div
                                    key={url}
                                    className="video-card video-card-inline"
                                    data-aos={cardEffects[index % cardEffects.length]}
                                    data-aos-delay={(index % 4) * 100}
                                    style={{
                                        position: 'relative',
                                        paddingBottom: '177.77%',
                                        height: 0,
                                        overflow: 'hidden',
                                        borderRadius: '15px',
                                        boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
                                        transition: 'transform 0.3s ease'
                                    }}
                                >
                                    <iframe
                                        src={embedUrl}
                                        title={`Reel ${index + 1}`}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            border: 0
                                        }}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            );
                        })}
                    </div>

                    {hasMore && (
                        <div className="text-center mt-40">
                            <button
                                type="button"
                                className="theme-btn style-two"
                                onClick={handleLoadMore}
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ReelsShowcase;
