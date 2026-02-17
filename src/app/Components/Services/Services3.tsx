"use client";
import Link from 'next/link';
import React from 'react';

import { servicesData } from '../../data/services';

const Services3 = () => {
    const services = Object.values(servicesData);

    return (
        <section className="agk-services services3-redesign pt-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">

                        <div className="section-title mb-50 pf_fadeup">
                            <span className="sub-heading">What We Do</span>
                            <h2>Complete Digital Services for Your Brand</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">

                        <div className="text-box mb-50 pf_fadeup">
                            <p>From brand strategy to content production and paid growth, we provide <span>complete digital solutions</span> that help your business attract, engage, and convert the right audience.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {services.map((service, index) => (
                        <div key={service.id} className="col-lg-4 col-md-6 col-sm-12">
                            <div className="agenko-iconic-box style-six service-card-modern mb-40 pf_fadeup">
                                <div className="service-top">
                                    <div className="icon">
                                        <i className={`bi ${service.icon}`}></i>
                                    </div>
                                    <span className="service-index">{`0${index + 1}`}</span>
                                </div>
                                <div className="content">
                                    <h4>{service.title}</h4>
                                    <p>{service.description}</p>
                                    <div className="agk-button">
                                        <Link href={`/service/${service.id}`} className="theme-btn style-two service-cta">
                                            <span className="text">Learn More</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services3;



