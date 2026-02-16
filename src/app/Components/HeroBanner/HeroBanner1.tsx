import Image from "next/image";
import Link from "next/link";

const HeroBanner1 = () => {
    return (
        <section className="agk-hero hero-main-refined" data-aos="fade-up" data-aos-duration="900">
            <div className="hero-wrapper-one">
                <div className="shape shape-blur_one"><span></span></div>
                <div className="shape shape-blur_two"><span></span></div>
                <div className="shape shape-blur_three"><span></span></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="hero-content">
                                <h1 className="text-anm" data-aos="fade-right" data-aos-delay="80"><span>RAIIDE</span></h1>
                                <div className="big-text text-anm" data-aos="fade-left" data-aos-delay="160">MEDIA</div>
                                <div className="text-box pf_zoomIn" data-aos="zoom-in-up" data-aos-delay="240">
                                    <p className="hero-lead">We Build Digital Experiences That Make Brands Grow.</p>
                                    <p>A creative digital agency with 4+ years of experience in digital marketing, content creation, video editing, and brand strategy. We help brands stand out, connect, and convert.</p>
                                </div>
                                <div className="element" data-aos="zoom-in" data-aos-delay="300"><span> <Image className="rotate360" src="/assets/images/creative-agency/hero/element.png" alt="img" width={120} height={120} /></span></div>
                                <div className="hero-button pf_fadeup" data-aos="fade-up" data-aos-delay="360">
                                    <Link href="/contact" className="theme-btn style-one">
                                        <span className="text-flip">
                                            <span className="text">Let&apos;s Work Together</span>
                                            <span className="text">Let&apos;s Work Together</span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner1;
