import React from 'react';
import Link from 'next/link';

const PersonalBrandingPacks = () => {
    return (
        <section className="agenko-pricing pt-60 pb-60">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center mb-50 pf_zoomIn">
                            <span className="sub-title">Personal Branding</span>
                            <h2>Our Personal Branding Packs</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* Pack Essential - Most Popular */}
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="agenko-pricing-item style-three mb-40 pf_fadeup">
                            <div className="badge-popular">Most Popular</div>
                            <div className="shape"><span></span></div>
                            <div className="pricing-head">
                                <span className="plan">Pack Essential</span>
                                <h2 className="price"><span className="currency"></span>6500 DHS HT</h2>
                            </div>
                            <div className="pricing-body">
                                <ul className="check-list style-one">
                                    <li><i className="bi bi-check2-square"></i>Professional Photo Shoot</li>
                                    <li><i className="bi bi-check2-square"></i>1 hour filming in our 6 studios</li>
                                    <li><i className="bi bi-check2-square"></i>Professional Instagram Profile</li>
                                    <li><i className="bi bi-check2-square"></i>Bio Optimization + Highlights</li>
                                    <li><i className="bi bi-check2-square"></i>8 Premium Video Edits (30 to 40 sec)</li>
                                    <li><i className="bi bi-check2-square"></i>8 Premium Thumbnail Designs</li>
                                    <li><i className="bi bi-check2-square"></i>8 Ready-to-Shoot Video Scripts</li>
                                    <li><i className="bi bi-check2-square"></i>Custom Graphic Charter</li>
                                </ul>
                            </div>
                            <div className="pricing-footer">
                                <Link href="/contact" className="theme-btn style-two">Contact Us</Link>
                            </div>
                        </div>
                    </div>

                    {/* Pack Content Builder */}
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="agenko-pricing-item style-three mb-40 pf_fadeup">
                            <div className="shape"><span></span></div>
                            <div className="pricing-head">
                                <span className="plan">Pack Content Builder</span>
                                <h2 className="price"><span className="currency"></span>7900 DHS HT</h2>
                            </div>
                            <div className="pricing-body">
                                <ul className="check-list style-one">
                                    <li><i className="bi bi-check2-square"></i>Professional Photo Shoot</li>
                                    <li><i className="bi bi-check2-square"></i>1.5 hours filming in our 6 studios</li>
                                    <li><i className="bi bi-check2-square"></i>Professional Instagram Profile</li>
                                    <li><i className="bi bi-check2-square"></i>Bio Optimization + Highlights</li>
                                    <li><i className="bi bi-check2-square"></i>12 Premium Video Edits (30 to 40 sec)</li>
                                    <li><i className="bi bi-check2-square"></i>12 Premium Thumbnail Designs</li>
                                    <li><i className="bi bi-check2-square"></i>12 Ready-to-Shoot Video Scripts</li>
                                    <li><i className="bi bi-check2-square"></i>Custom Graphic Charter</li>
                                </ul>
                            </div>
                            <div className="pricing-footer">
                                <Link href="/contact" className="theme-btn style-two">Contact Us</Link>
                            </div>
                        </div>
                    </div>

                    {/* Pack Authority Booster */}
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="agenko-pricing-item style-three mb-40 pf_fadeup">
                            <div className="shape"><span></span></div>
                            <div className="pricing-head">
                                <span className="plan">Pack Authority Booster</span>
                                <h2 className="price"><span className="currency"></span>9500 DHS HT</h2>
                            </div>
                            <div className="pricing-body">
                                <ul className="check-list style-one">
                                    <li><i className="bi bi-check2-square"></i>Professional Photo Shoot</li>
                                    <li><i className="bi bi-check2-square"></i>2 hours filming in our 6 studios</li>
                                    <li><i className="bi bi-check2-square"></i>Professional Instagram Profile</li>
                                    <li><i className="bi bi-check2-square"></i>Bio Optimization + Highlights</li>
                                    <li><i className="bi bi-check2-square"></i>16 Premium Video Edits (30 to 40 sec)</li>
                                    <li><i className="bi bi-check2-square"></i>16 Premium Thumbnail Designs</li>
                                    <li><i className="bi bi-check2-square"></i>16 Ready-to-Shoot Video Scripts</li>
                                    <li><i className="bi bi-check2-square"></i>Custom Graphic Charter</li>
                                    <li><i className="bi bi-check2-square"></i>Monthly Personalized Strategy</li>
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

export default PersonalBrandingPacks;
