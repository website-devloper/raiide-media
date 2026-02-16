'use client';

import React from 'react';
import Link from 'next/link';

const VideoEditingPacks = () => {
    const packs = [
        {
            title: 'MEDIUM',
            subtitle: 'Excellent Level',
            packs: [
                {
                    name: 'PACK 15 VIDEOS',
                    options: [
                        { label: 'Only Edit', price: '$369', include: 'High Quality Editing' },
                        { label: 'Edit + Script', price: '$529', include: 'Script + Editing' },
                    ]
                },
                {
                    name: 'PACK 25 VIDEOS',
                    options: [
                        { label: 'Only Edit', price: '$589', include: 'High Quality Editing' },
                        { label: 'Edit + Script', price: '$819', include: 'Script + Editing' },
                    ]
                }
            ],
            color: 'medium-purple'
        },
        {
            title: 'PREMIUM',
            subtitle: 'Legendary Level',
            popular: true,
            packs: [
                {
                    name: 'PACK 15 VIDEOS',
                    options: [
                        { label: 'Only Edit', price: '$519', include: 'High Quality Editing' },
                        { label: 'Edit + Script', price: '$629', include: 'Script + Editing' },
                    ]
                },
                {
                    name: 'PACK 25 VIDEOS',
                    options: [
                        { label: 'Only Edit', price: '$799', include: 'High Quality Editing' },
                        { label: 'Edit + Script', price: '$959', include: 'Script + Editing' },
                    ]
                }
            ],
            color: 'premium-orange'
        },
        {
            title: 'ULTIMATE',
            subtitle: 'High Tier Quality',
            packs: [
                {
                    name: 'PACK 15 VIDEOS',
                    options: [
                        { label: 'Only Edit', price: '$669', include: 'High Quality Editing' },
                        { label: 'Edit + Script', price: '$739', include: 'Script + Editing' },
                    ]
                },
                {
                    name: 'PACK 25 VIDEOS',
                    options: [
                        { label: 'Only Edit', price: '$1049', include: 'High Quality Editing' },
                        { label: 'Edit + Script', price: '$1199', include: 'Script + Editing' },
                    ]
                }
            ],
            color: 'ultimate-blue'
        }
    ];

    return (
        <section className="video-editing-packs pt-130 pb-100 bg-black">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="section-title text-center mb-60 pf_fadeup">
                            <span className="sub-title">Content Creation</span>
                            <h2>Video Editing Packs</h2>
                            <p className="mt-15 text-white">Choose the level of creativity and impact your brand deserves.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {packs.map((tier, index) => (
                        <div key={index} className="col-xl-4 col-lg-6 mb-40">
                            <div className={`video-pack-card ${tier.color} pf_fadeup`}>
                                {tier.popular && <div className="popular-badge">Most Popular</div>}
                                <div className="tier-header text-center">
                                    <h3 className="tier-title">{tier.title}</h3>
                                    <span className="tier-subtitle">{tier.subtitle}</span>
                                </div>

                                <div className="tier-body mt-30">
                                    {tier.packs.map((pack, pIndex) => (
                                        <div key={pIndex} className="pack-group mb-30">
                                            <h4 className="pack-name">{pack.name}</h4>
                                            <div className="pack-table-wrapper">
                                                <table className="pack-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Package</th>
                                                            <th>Price</th>
                                                            <th>Includes</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {pack.options.map((opt, oIndex) => (
                                                            <tr key={oIndex}>
                                                                <td>{opt.label}</td>
                                                                <td className="price">{opt.price}</td>
                                                                <td className="includes">{opt.include}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="pack-note mt-20">
                                    <i className="bi bi-info-circle"></i> Note: Our team does not work on a single video.
                                </div>

                                <div className="tier-footer mt-30 text-center">
                                    <Link href="/contact" className="theme-btn style-one w-100">
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .video-pack-card {
                    background: #111;
                    border: 1px solid #222;
                    border-radius: 20px;
                    padding: 40px 30px;
                    position: relative;
                    height: 100%;
                    transition: all 0.3s ease;
                }
                .video-pack-card:hover {
                    border-color: #444;
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
                }
                .popular-badge {
                    position: absolute;
                    top: -15px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: #ff3e6c;
                    color: white;
                    padding: 5px 20px;
                    border-radius: 20px;
                    font-size: 12px;
                    font-weight: 700;
                    text-transform: uppercase;
                }
                .tier-title {
                    font-size: 32px;
                    color: white;
                    margin-bottom: 5px;
                }
                .tier-subtitle {
                    color: #999;
                    font-size: 14px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .pack-name {
                    color: #fff;
                    font-size: 18px;
                    margin-bottom: 15px;
                    border-left: 3px solid #ff3e6c;
                    padding-left: 15px;
                }
                .pack-table-wrapper {
                    background: #000;
                    border-radius: 12px;
                    overflow: hidden;
                    border: 1px solid #222;
                }
                .pack-table {
                    width: 100%;
                    border-collapse: collapse;
                }
                .pack-table th {
                    background: #1a1a1a;
                    color: #666;
                    font-size: 10px;
                    text-transform: uppercase;
                    text-align: left;
                    padding: 10px 15px;
                    border-bottom: 1px solid #222;
                }
                .pack-table td {
                    padding: 12px 15px;
                    color: #ddd;
                    font-size: 13px;
                    border-bottom: 1px solid #111;
                }
                .pack-table td.price {
                    color: #fff;
                    font-weight: 700;
                }
                .pack-table td.includes {
                    font-size: 11px;
                    color: #888;
                }
                .pack-note {
                    color: #666;
                    font-size: 12px;
                    font-style: italic;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .medium-purple { border-top: 5px solid #a855f7; }
                .premium-orange { border-top: 5px solid #f97316; }
                .ultimate-blue { border-top: 5px solid #3b82f6; }
            `}</style>
        </section>
    );
};

export default VideoEditingPacks;
