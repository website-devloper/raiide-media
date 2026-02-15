'use client';

import React, { useState } from 'react';

const VideoShowcase = () => {
    const INITIAL_VISIBLE = 4;
    const allVideos = [
        'ghazali final 1.mp4',
        'ghazali3.mp4',
        'Ree1 V2.mp4',
        'Reel 2 V2.mp4',
        'reel 1 ghazali after.mp4',
        'IMG_5434.MP4',
        'IMG_5435.MP4',
        'IMG_5436.MP4',
        'IMG_5437.MP4',
        'Sequence 01.mp4',
        'vid2 gh.mp4',
        'WhatsApp Video 2026-02-01 at 14.37.50.mp4',
        'WhatsApp Video 2026-02-01 at 14.38.55.mp4',
    ];
    const [showMore, setShowMore] = useState(false);

    const videoPath = (fileName: string) =>
        `/assets/images/creative-agency/CONTENT%20VIDEO/${encodeURIComponent(fileName)}`;

    const visibleVideos = showMore ? allVideos : allVideos.slice(0, INITIAL_VISIBLE);
    const hasMore = allVideos.length > INITIAL_VISIBLE;

    return (
        <section className="video-showcase-section pt-130 pb-100">
            <div className="container">
                <div className="video-showcase-shell">
                    <div className="section-title text-center mb-40">
                        <span className="sub-title">Video Content</span>
                        <h2>Stories in Motion</h2>
                    </div>

                    <div className="video-inline-grid">
                        {visibleVideos.map((video) => (
                            <div key={video} className="video-card video-card-inline">
                                <video
                                    src={videoPath(video)}
                                    controls
                                    muted
                                    playsInline
                                    preload="metadata"
                                />
                            </div>
                        ))}
                    </div>

                    {hasMore && (
                        <div className="text-center mt-30">
                            <button
                                type="button"
                                className="theme-btn style-two"
                                onClick={() => setShowMore((prev) => !prev)}
                            >
                                {showMore ? 'View Less' : 'View More'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default VideoShowcase;
