import React from 'react';
import { ServiceData } from '../../data/services';

const ServiceBenefits = ({ service }: { service: ServiceData }) => {
    if (!service.benefits) return null;

    return (
        <section className="service-benefits pt-100 pb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <div className="benefits-content pf_fadeup">
                            <span className="sub-heading text-uppercase mb-3 d-block" style={{ color: '#d60048', fontWeight: '600' }}>Key Benefits</span>
                            <h2>Why Choose Our {service.title}?</h2>
                            <p className="mt-4 mb-4" style={{ color: '#9E9FA0' }}>{service.longDescription2}</p>
                            <div className="agk-button">
                                <a href="/contact" className="theme-btn style-one">Get Started Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="row g-4">
                            {service.benefits.map((benefit, index) => (
                                <div key={index} className="col-md-6">
                                    <div className="benefit-card p-4 rounded-3 d-flex align-items-start pf_zoomIn"
                                        style={{ background: '#1A1A1A', borderLeft: '4px solid #d60048' }}>
                                        <div className="icon me-3">
                                            <i className="bi bi-check-circle-fill" style={{ color: '#d60048', fontSize: '24px' }}></i>
                                        </div>
                                        <div>
                                            <h5 className="text-white mb-0">{benefit}</h5>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {service.features.map((feature, index) => (
                                <div key={`feat-${index}`} className="col-md-6">
                                    <div className="benefit-card p-4 rounded-3 d-flex align-items-start pf_zoomIn"
                                        style={{ background: '#1A1A1A', borderLeft: '4px solid #333' }}>
                                        <div className="icon me-3">
                                            <i className="bi bi-check-circle" style={{ color: '#9E9FA0', fontSize: '24px' }}></i>
                                        </div>
                                        <div>
                                            <h5 className="text-white mb-0">{feature}</h5>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceBenefits;
