'use client';

import React from 'react';
import Slider from 'react-slick';

const VisualIdentity = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2200,
        rows: 1,
        slidesPerRow: 1,
        pauseOnHover: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const visualIdentityFiles = [
        'f127894032.jpg',
        'f157186088.jpg',
        'f157187072.jpg',
        'f157187856.jpg',
        'f157187920.jpg',
        'f157189816.jpg',
        'f246546120.png',
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
    ];

    const visualIdentityItems = visualIdentityFiles.map((file) => ({
        img: `/assets/images/creative-agency/VISUAL%20IDENTITY/${encodeURIComponent(file)}`,
    }));

    return (
        <section className="agenko-company brand4-colorful visual-identity-strip pt-120 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center mb-40 pf_zoomIn">
                            <span className="sub-title">Visual Identity</span>
                            <h2>Branding & Design Showcase</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="company-slider pt-10 pb-10">
                            <Slider {...settings}>
                                {visualIdentityItems.map((item, i) => (
                                    <div key={i} className="px-2">
                                        <div className="agenko-client-item style-two mb-20 pf_fadeup">
                                            <div className="client-image">
                                                <img src={item.img} alt="Visual Identity" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisualIdentity;
