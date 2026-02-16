'use client';

import React from 'react';

const MissionVision = () => {
    return (
        <section className="mission-vision-section pt-130 pb-100 bg-black overflow-hidden">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-6" data-aos="fade-right">
                        <div className="mv-card mission">
                            <div className="mv-icon">
                                <i className="bi bi-rocket-takeoff-fill"></i>
                            </div>
                            <div className="mv-content">
                                <span className="mv-tag">The Goal</span>
                                <h2 className="mv-title">Our Mission</h2>
                                <p>To empower visionary brands through <span>innovative strategy and elite creative production</span>. We are dedicated to transforming local and global businesses by delivering high-impact digital experiences that drive measurable growth and lasting recognition.</p>
                            </div>
                            <div className="mv-shape"></div>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-left">
                        <div className="mv-card vision">
                            <div className="mv-icon">
                                <i className="bi bi-eye-fill"></i>
                            </div>
                            <div className="mv-content">
                                <span className="mv-tag">The Future</span>
                                <h2 className="mv-title">Our Vision</h2>
                                <p>To be the <span>premier creative powerhouse</span> where strategy meets limitless imagination. We envision a future where every brand we touch becomes a benchmark of excellence in the digital world, leading the way in innovation and audience connection.</p>
                            </div>
                            <div className="mv-shape"></div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .mission-vision-section {
                    position: relative;
                }
                .mv-card {
                    background: #111;
                    border-radius: 30px;
                    padding: 60px 40px;
                    height: 100%;
                    position: relative;
                    overflow: hidden;
                    border: 1px solid #222;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .mv-card:hover {
                    transform: translateY(-10px);
                    border-color: #333;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.6);
                }
                .mv-icon {
                    width: 70px;
                    height: 70px;
                    background: #1a1a1a;
                    border-radius: 18px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 30px;
                    font-size: 32px;
                    position: relative;
                    z-index: 2;
                }
                .mission .mv-icon { color: #7b61ff; box-shadow: 0 0 20px rgba(123, 97, 255, 0.2); }
                .vision .mv-icon { color: #f97316; box-shadow: 0 0 20px rgba(249, 115, 22, 0.2); }

                .mv-content {
                    position: relative;
                    z-index: 2;
                }
                .mv-tag {
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: #666;
                    display: block;
                    margin-bottom: 15px;
                }
                .mv-title {
                    font-size: 42px;
                    color: white;
                    margin-bottom: 20px;
                    font-weight: 700;
                }
                .mv-card p {
                    font-size: 18px;
                    color: #999;
                    line-height: 1.7;
                    margin: 0;
                }
                .mv-card p span {
                    color: #fff;
                    font-weight: 600;
                }
                .mv-shape {
                    position: absolute;
                    bottom: -50px;
                    right: -50px;
                    width: 200px;
                    height: 200px;
                    border-radius: 50%;
                    filter: blur(80px);
                    opacity: 0.1;
                    transition: opacity 0.4s ease;
                }
                .mission .mv-shape { background: #7b61ff; }
                .vision .mv-shape { background: #f97316; }
                
                .mv-card:hover .mv-shape {
                    opacity: 0.3;
                }

                @media (max-width: 991px) {
                    .mv-title { font-size: 32px; }
                    .mv-card { padding: 40px 30px; }
                }
            `}</style>
        </section>
    );
};

export default MissionVision;
