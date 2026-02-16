"use client";

import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

const testimonialContent = [
    {
        title: 'Sara Benali',
        subtitle: 'Podcast Host',
        content: 'Tbarkellah 3likoum, khedma nqiya o f lwaqt. Recommandé bzaf! L\'équipe Raiide Media top',
        imageName: 'sara-benali.jpeg',
    },
    {
        title: 'Youssef Rahimi',
        subtitle: 'Founder, Local Brand',
        content: 'Équipe très professionnelle. Ils ont su capturer l\'essence de notre marque. Très satisfaits du résultat final',
        imageName: 'f236927400.jpg',
    },
    {
        title: 'Nadia El Idrissi',
        subtitle: 'Marketing Manager',
        content: 'Chno ghadi ngoul, Top niveau! Un service très professionnel o l\'équipe dima disponible. Merci Raiide Media!',
        imageName: 'f265899768.jpg',
    },
    {
        title: 'Ilham Zoujya',
        subtitle: 'Media Presenter',
        content: 'L\'content li darna m3ahoum khela lina brand dialna tban ktr. Bravo 3likoum, khedma dyal lme39oul',
        imageName: 'WhatsApp Image 2026-02-01 at 14.06.38.jpeg',
    },
    {
        title: 'Hajar El Ami',
        subtitle: 'Content Creator',
        content: 'Franchement, la qualité est incroyable. Je recommande vivement l\'agence!',
        imageName: 'WhatsApp Image 2026-02-01 at 14.06.38 (1).jpeg',
    },
    {
        title: 'Ayoub Khalid',
        subtitle: 'Business Owner',
        content: 'Kant tajriba zwina bzaf. Sma3 lina o fham chnou bghina exactement. Allah i3tikom saha',
        imageName: 'WhatsApp Image 2026-02-01 at 14.06.38 (2).jpeg',
    },
];

const Testimonial1 = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2600,
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
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

    return (
        <section className="agk-testimonial-ca gray-dark pt-130 pb-80">
            <div className="shape shape-one"><span></span></div>
            <div className="shape shape-two"><span></span></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center mb-50 pf_fadeup">
                            <span className="sub-title">Testimonial</span>
                            <h2>What Our Clients Say</h2>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="agk-image-box mb-50 pf_fadeup">
                            <div className="agk-image">
                                <Image
                                    src="/assets/images/creative-agency/Our clients/f127894032.jpg"
                                    alt="Happy client"
                                    width={410}
                                    height={466}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="agk-content-box mb-50 pf_fadeup">
                            <div className="fill-text">TESTIMONIAL</div>
                            <div className="testimonial-slider">
                                <Slider {...settings}>
                                    {testimonialContent.map((item) => (
                                        <div key={`${item.title}-${item.imageName}`} className="agenko-testimonial-item style-two">
                                            <div className="testimonial-content">
                                                <ul className="ratings">
                                                    <li><i className="bi bi-star-fill"></i></li>
                                                    <li><i className="bi bi-star-fill"></i></li>
                                                    <li><i className="bi bi-star-fill"></i></li>
                                                    <li><i className="bi bi-star-fill"></i></li>
                                                    <li><i className="bi bi-star-fill"></i></li>
                                                </ul>
                                                <p>{item.content}</p>
                                                <div className="author-item">
                                                    <div className="author-thumb">
                                                        <Image
                                                            src={`/assets/images/creative-agency/Our clients/${encodeURIComponent(item.imageName)}`}
                                                            alt={item.title}
                                                            width={58}
                                                            height={58}
                                                        />
                                                    </div>
                                                    <div className="author-info">
                                                        <h4>{item.title}</h4>
                                                        <h5>{item.subtitle}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial1;
