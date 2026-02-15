import Link from 'next/link';
import React from 'react';
import { siteContact } from '../../lib/siteContact';

const Cta1 = () => {
    return (
        <section className="agk-cta">
            <div className="agenko-cta-wrappper gray-dark pt-40 pb-20">
                <div className="shape shape_one"><span></span></div>
                <div className="shape shape_two"><span></span></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title mb-30 pf_fadeup">
                                <h2>Ready to launch your next project?</h2>
                                <p className="mb-0">
                                    {siteContact.divisions} | {siteContact.services.join(' | ')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="agenko-button float-lg-end mb-40 pf_fadeup text-lg-end">
                                <p className="mb-15">
                                    <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
                                    {' | '}
                                    <a href={`tel:${siteContact.phoneHref}`}>{siteContact.phoneDisplay}</a>
                                </p>
                                <Link href="/contact" className="theme-btn style-one">
                                    <span className="text-flip">
                                        <span className="text">Contact Us</span>
                                        <span className="text">Contact Us</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta1;
