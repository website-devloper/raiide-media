import React from 'react';
import { ServiceData } from '../../data/services';

const ServiceProcess = ({ service }: { service: ServiceData }) => {
    if (!service.process) return null;

    return (
        <section className="service-process pt-100 pb-100" style={{ background: '#121212' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <div className="section-title mb-60 pf_fadeup">
                            <span className="sub-heading text-uppercase mb-2 d-block" style={{ color: '#d60048', fontWeight: '600' }}>How It Works</span>
                            <h2 className="text-white">Our {service.title} Process</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {service.process.map((step, index) => (
                        <div key={index} className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <div className="process-item position-relative p-4 rounded-3 h-100 text-center pf_fadeup"
                                style={{ background: '#1A1A1A', border: '1px solid #333', transition: 'transform 0.3s ease' }}>
                                <div className="step-number mb-3 d-inline-flex align-items-center justify-content-center rounded-circle text-white fw-bold"
                                    style={{ width: '50px', height: '50px', background: '#d60048', fontSize: '20px' }}>
                                    {index + 1}
                                </div>
                                <h4 className="text-white mb-3" style={{ fontSize: '20px' }}>{step.title}</h4>
                                <p style={{ color: '#9E9FA0', fontSize: '15px' }}>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceProcess;
