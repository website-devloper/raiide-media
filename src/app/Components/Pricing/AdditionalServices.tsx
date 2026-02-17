'use client';

import React from 'react';
import Link from 'next/link';

const AdditionalServices = () => {
    const services = [
        {
            title: 'BASIC REELS EDITING',
            items: [
                '1 hour of filming in our 6 professional studios of choice',
                'Between 4 to 6 Reels: 650 Dhs HT / Reel',
                '6 to 12 Reels: 600 Dhs HT / Reel',
                '12 and +: 500 Dhs / Reel'
            ]
        },
        {
            title: 'REELS THUMBNAILS',
            price: '300 Dhs HT',
            items: ['High-quality custom design', 'Optimized for social algorithms', 'Per thumbnail']
        },
        {
            title: 'SCRIPT WRITING',
            price: '400 DHS HT',
            items: ['Full 30-second script', 'Compelling storytelling', 'Call to action included']
        },
        {
            title: 'COACHING SESSION',
            price: '1500 DHS HT',
            items: [
                'On-camera speech coaching',
                'Social Media Coaching',
                'Wardrobe & Styling Coaching',
                'Per Hour'
            ]
        },
        {
            title: 'MODERATOR / HOST',
            price: '2000 Dhs HT',
            items: ['Professional event/video hosting', 'Engaging presentation', 'Per hour']
        },
        {
            title: 'TELEPROMPTER',
            price: '400 DHS HT',
            items: ['Professional equipment setup', 'Operator assistance', 'Per hour']
        },
        {
            title: 'SOCIAL MEDIA PUBLISHING',
            price: '2000 Dhs HT',
            items: ['Platform-specific scheduling', 'Engagement optimization', 'Based on content volume']
        },
        {
            title: 'PROFESSIONAL TRAINING',
            price: 'Custom Price',
            items: [
                'Podcasting Training',
                'Personal Branding Training',
                'Social Media Marketing Training',
                'Hosting & Voice-over Training'
            ]
        }
    ];

    return (
        <section className="agenko-pricing pt-100 pb-100 bg-black">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="section-title text-center mb-60 pf_fadeup">
                            <span className="sub-title">Additional</span>
                            <h2 className="text-white">Our Additional Services</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {services.map((service, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                            <div className="agenko-pricing-item style-three mb-40 pf_fadeup" style={{ height: 'calc(100% - 40px)', display: 'flex', flexDirection: 'column' }}>
                                <div className="shape"><span></span></div>
                                <div className="pricing-head">
                                    <span className="plan" style={{ fontSize: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>{service.title}</span>
                                    {service.price && (
                                        <h2 className="price" style={{ fontSize: '28px', marginTop: '10px' }}><span className="currency"></span>{service.price}</h2>
                                    )}
                                </div>
                                <div className="pricing-body">
                                    <ul className="check-list style-one">
                                        {service.items.map((item, i) => (
                                            <li key={i}>
                                                <i className="bi bi-check2-square"></i>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="pricing-footer" style={{ marginTop: 'auto' }}>
                                    <Link href="/contact" className="theme-btn style-two">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .bg-black {
                    background-color: #000;
                }
                .pricing-head {
                    min-height: 100px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
            `}</style>
        </section>
    );
};

export default AdditionalServices;
