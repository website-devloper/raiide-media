import React from 'react';
import Link from 'next/link';

const ReelsPacks = () => {
    return (
        <section className="agenko-pricing pt-130 pb-60">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center mb-50 pf_zoomIn">
                            <span className="sub-title">Reels - Dynamic Editing</span>
                            <h2>Our Reels Packs</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* Pack Starter */}
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="agenko-pricing-item style-three mb-40 pf_fadeup">
                            <div className="shape"><span></span></div>
                            <div className="pricing-head">
                                <span className="plan">Pack Starter</span>
                                <h2 className="price"><span className="currency"></span>6000 DHS HT</h2>
                            </div>
                            <div className="pricing-body">
                                <ul className="check-list style-one">
                                    <li><i className="bi bi-check2-square"></i>1 hour of filming in 6 professional studios of choice</li>
                                    <li><i className="bi bi-check2-square"></i>8 Premium Video Edits (30 to 40 sec)</li>
                                    <li><i className="bi bi-check2-square"></i>8 Premium Thumbnail Designs</li>
                                    <li><i className="bi bi-check2-square"></i>Custom Graphic Charter</li>
                                    <li><i className="bi bi-check2-square"></i>2 Revisions</li>
                                </ul>
                            </div>
                            <div className="pricing-footer">
                                <Link href="/contact" className="theme-btn style-two">Contact Us</Link>
                            </div>
                        </div>
                    </div>

                    {/* Pack Business - Most Popular */}
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="agenko-pricing-item style-three mb-40 pf_fadeup">
                            <div className="badge-popular">Most Popular</div>
                            <div className="shape"><span></span></div>
                            <div className="pricing-head">
                                <span className="plan">Pack Business</span>
                                <h2 className="price"><span className="currency"></span>7000 DHS HT</h2>
                            </div>
                            <div className="pricing-body">
                                <ul className="check-list style-one">
                                    <li><i className="bi bi-check2-square"></i>1.5 hours of filming in 6 professional studios of choice</li>
                                    <li><i className="bi bi-check2-square"></i>12 Premium Video Edits (30 to 40 sec)</li>
                                    <li><i className="bi bi-check2-square"></i>12 Premium Thumbnail Designs</li>
                                    <li><i className="bi bi-check2-square"></i>Custom Graphic Charter</li>
                                    <li><i className="bi bi-check2-square"></i>3 Revisions</li>
                                </ul>
                            </div>
                            <div className="pricing-footer">
                                <Link href="/contact" className="theme-btn style-two">Contact Us</Link>
                            </div>
                        </div>
                    </div>

                    {/* Pack Booster */}
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="agenko-pricing-item style-three mb-40 pf_fadeup">
                            <div className="shape"><span></span></div>
                            <div className="pricing-head">
                                <span className="plan">Pack Booster</span>
                                <h2 className="price"><span className="currency"></span>9000 DHS HT</h2>
                            </div>
                            <div className="pricing-body">
                                <ul className="check-list style-one">
                                    <li><i className="bi bi-check2-square"></i>2 hours of filming in 6 professional studios of choice</li>
                                    <li><i className="bi bi-check2-square"></i>16 Premium Video Edits (30 to 40 sec)</li>
                                    <li><i className="bi bi-check2-square"></i>16 Premium Thumbnail Designs</li>
                                    <li><i className="bi bi-check2-square"></i>Custom Graphic Charter</li>
                                    <li><i className="bi bi-check2-square"></i>5 Revisions</li>
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
    );
};

export default ReelsPacks;
