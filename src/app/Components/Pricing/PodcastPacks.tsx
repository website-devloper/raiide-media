import React from 'react';
import Link from 'next/link';

const PodcastPacks = () => {
    return (
        <>
            {/* Podcast Hourly Packs */}
            <section className="agenko-pricing pt-60 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb-50 pf_zoomIn">
                                <span className="sub-title">Podcast</span>
                                <h2>Our Hourly Podcast Packs</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Pack Créateur */}
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="agenko-pricing-item style-three mb-40 pf_fadeup">
                                <div className="shape"><span></span></div>
                                <div className="pricing-head">
                                    <span className="plan">Creator Pack</span>
                                    <h3 className="sub-heading">Recording</h3>
                                    <h2 className="price"><span className="currency"></span>1300 DHS HT / HOUR</h2>
                                </div>
                                <div className="pricing-body">
                                    <ul className="check-list style-one">
                                        <li><i className="bi bi-check2-square"></i>Choice of 6 different studios with custom decor</li>
                                        <li><i className="bi bi-check2-square"></i>Fully equipped studio of your choice</li>
                                        <li><i className="bi bi-check2-square"></i>Studio operator to record everything</li>
                                        <li><i className="bi bi-check2-square"></i>4x Cinema Cameras, 4x Shure Mics + Wireless Mics</li>
                                    </ul>
                                    <p className="note"><strong>What you get after the session:</strong></p>
                                    <ul className="check-list style-one">
                                        <li><i className="bi bi-check2-square"></i>Raw audio and video files transferred in 24h</li>
                                    </ul>
                                </div>
                                <div className="pricing-footer">
                                    <Link href="/contact" className="theme-btn style-two">Contact Us</Link>
                                </div>
                            </div>
                        </div>

                        {/* Pack Business */}
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="agenko-pricing-item style-three mb-40 pf_fadeup">
                                <div className="shape"><span></span></div>
                                <div className="pricing-head">
                                    <span className="plan">Business Pack</span>
                                    <h3 className="sub-heading">Recording + Live Mixing</h3>
                                    <h2 className="price"><span className="currency"></span>2300 DHS HT / HOUR</h2>
                                </div>
                                <div className="pricing-body">
                                    <ul className="check-list style-one">
                                        <li><i className="bi bi-check2-square"></i>Choice of 6 different studios with custom decor</li>
                                        <li><i className="bi bi-check2-square"></i>Fully equipped studio of your choice</li>
                                        <li><i className="bi bi-check2-square"></i>Studio operator to record everything</li>
                                        <li><i className="bi bi-check2-square"></i>4x Cinema Cameras, 4x Shure Mics + Wireless Mics</li>
                                        <li><i className="bi bi-check2-square"></i>Professional Video Mixing</li>
                                    </ul>
                                    <p className="note"><strong>What you get after the session:</strong></p>
                                    <ul className="check-list style-one">
                                        <li><i className="bi bi-check2-square"></i>Raw audio/video files transferred in 48h (business days)</li>
                                        <li><i className="bi bi-check2-square"></i>Live mixed episodes/videos with synced audio/video</li>
                                        <li><i className="bi bi-check2-square"></i>Video clips created for mobile/social</li>
                                        <li><i className="bi bi-check2-square"></i>Raw file backup for 7 days</li>
                                    </ul>
                                </div>
                                <div className="pricing-footer">
                                    <Link href="/contact" className="theme-btn style-two">Contact Us</Link>
                                </div>
                            </div>
                        </div>

                        {/* Pack Premium - Most Popular */}
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="agenko-pricing-item style-three mb-40 pf_fadeup">
                                <div className="badge-popular">Most Popular</div>
                                <div className="shape"><span></span></div>
                                <div className="pricing-head">
                                    <span className="plan">Premium Pack</span>
                                    <h3 className="sub-heading">Recording + Professional Editing</h3>
                                    <h2 className="price"><span className="currency"></span>2500 DHS HT / HOUR</h2>
                                </div>
                                <div className="pricing-body">
                                    <ul className="check-list style-one">
                                        <li><i className="bi bi-check2-square"></i>Choice of 6 different studios with custom decor</li>
                                        <li><i className="bi bi-check2-square"></i>Fully equipped studio of your choice</li>
                                        <li><i className="bi bi-check2-square"></i>Studio operator to record everything</li>
                                        <li><i className="bi bi-check2-square"></i>4x Cinema Cameras, 4x Shure Mics + Wireless Mics</li>
                                        <li><i className="bi bi-check2-square"></i>Expert producer dedicated to editing your episode</li>
                                    </ul>
                                    <p className="note"><strong>What you get after the session:</strong></p>
                                    <ul className="check-list style-one">
                                        <li><i className="bi bi-check2-square"></i>Raw files transferred in 72h (business days) per brief</li>
                                        <li><i className="bi bi-check2-square"></i>Fully edited episodes with audio mastering & color correction</li>
                                        <li><i className="bi bi-check2-square"></i>Integration of your logo, music, and outro</li>
                                        <li><i className="bi bi-check2-square"></i>Removal of unwanted parts/silences</li>
                                        <li><i className="bi bi-check2-square"></i>Raw file backup for 14 days</li>
                                    </ul>
                                </div>
                                <div className="pricing-footer">
                                    <Link href="/contact" className="theme-btn style-two">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Special Podcast Packs */}
            <section className="agenko-pricing pt-60 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb-50 pf_zoomIn">
                                <span className="sub-title">Spéciaux</span>
                                <h2>Nos Packs Spéciaux Podcast</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Pack Podcaster - Most Popular */}
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="agenko-pricing-item style-three mb-40 pf_fadeup">
                                <div className="badge-popular">Most Popular</div>
                                <div className="shape"><span></span></div>
                                <div className="pricing-head">
                                    <span className="plan">Podcaster Pack</span>
                                    <h3 className="sub-heading">Recording + Pro Editing + Teasers + Reels</h3>
                                    <h2 className="price"><span className="currency"></span>6000 DHS HT</h2>
                                </div>
                                <div className="pricing-body">
                                    <ul className="check-list style-one">
                                        <li><i className="bi bi-check2-square"></i>5 Podcast Episodes with everything in Premium Pack</li>
                                        <li><i className="bi bi-check2-square"></i>5 Simple Reels Teasers (1 per episode)</li>
                                        <li><i className="bi bi-check2-square"></i>10 Simple Reels clips (2 per episode)</li>
                                    </ul>
                                </div>
                                <div className="pricing-footer">
                                    <Link href="/contact" className="theme-btn style-two">Contact Us</Link>
                                </div>
                            </div>
                        </div>

                        {/* Pack Podcast 360° */}
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="agenko-pricing-item style-three mb-40 pf_fadeup">
                                <div className="shape"><span></span></div>
                                <div className="pricing-head">
                                    <span className="plan">Podcast 360° Pack</span>
                                    <h3 className="sub-heading">Recording + Pro Editing + Consulting + Branding + Teasers + Reels</h3>
                                    <h2 className="price"><span className="currency"></span>9000 DHS HT</h2>
                                </div>
                                <div className="pricing-body">
                                    <ul className="check-list style-one">
                                        <li><i className="bi bi-check2-square"></i>Everything included in Podcaster Pack</li>
                                        <li><i className="bi bi-check2-square"></i>1h Consulting with Podcast Expert (idea, distribution, topics)</li>
                                        <li><i className="bi bi-check2-square"></i>Podcast Identity (Graphic charter, jingle, intro & outro)</li>
                                    </ul>
                                </div>
                                <div className="pricing-footer">
                                    <Link href="/contact" className="theme-btn style-two">Contact Us</Link>
                                </div>
                            </div>
                        </div>

                        {/* Pack Podcast Clé en Main */}
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="agenko-pricing-item style-three mb-40 pf_fadeup">
                                <div className="shape"><span></span></div>
                                <div className="pricing-head">
                                    <span className="plan">Turnkey Podcast Pack</span>
                                    <h3 className="sub-heading">Recording + Pro Editing + Consulting + Branding + Teasers + Reels + YouTube Thumbs + Publishing</h3>
                                    <h2 className="price"><span className="currency"></span>13 000 DHS HT</h2>
                                </div>
                                <div className="pricing-body">
                                    <ul className="check-list style-one">
                                        <li><i className="bi bi-check2-square"></i>Everything in Podcast 360° Pack for 4 episodes</li>
                                        <li><i className="bi bi-check2-square"></i>Episode publishing on YouTube</li>
                                        <li><i className="bi bi-check2-square"></i>4 YouTube Thumbnails</li>
                                        <li><i className="bi bi-check2-square"></i>8 Reels with captions</li>
                                    </ul>
                                </div>
                                <div className="pricing-footer">
                                    <Link href="/contact" className="theme-btn style-two">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PodcastPacks;
