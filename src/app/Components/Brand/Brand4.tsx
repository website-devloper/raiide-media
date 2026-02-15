'use client';

import React from 'react';
import Slider from 'react-slick';

const Brand4 = () => {
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

    const clientFiles = [
        'f127894032.jpg',
        'f236927400.jpg',
        'f265899768.jpg',
        'WhatsApp Image 2026-02-01 at 14.06.38.jpeg',
        'WhatsApp Image 2026-02-01 at 14.06.38 (1).jpeg',
        'WhatsApp Image 2026-02-01 at 14.06.38 (2).jpeg',
    ];

    const brandContent = clientFiles.map((file) => ({
        img: `/assets/images/creative-agency/Our%20clients/${encodeURIComponent(file)}`,
    }));

    return (
        <section className="agenko-company brand4-colorful pt-120 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        
                        <div className="section-title text-center mb-40 pf_zoomIn">
                            <span className="sub-title">Our Client</span>
                            <h2>Trusted Industry Leader</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="company-slider pt-10 pb-10">
                            <Slider {...settings}>
                                {brandContent.map((item, i) => (
                                    <div key={i} className="px-2">
                                        <div className="agenko-client-item style-two mb-20 pf_fadeup">
                                            <div className="client-image">
                                                <img src={item.img} alt="Client Image" />
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

export default Brand4;
