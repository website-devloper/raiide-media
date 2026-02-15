import React from 'react';
import Image from 'next/image';
import { ServiceData } from '../../data/services';

const ServiceOverview = ({ service }: { service: ServiceData }) => {
    return (
        <section className="service-overview pt-100 pb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="overview-content pf_fadeup">
                            <span className="sub-heading text-uppercase mb-3 d-block" style={{ color: '#d60048', fontWeight: '600' }}>Overview</span>
                            <h2 className="mb-4">{service.title}</h2>
                            <p className="lead mb-4" style={{ color: '#9E9FA0' }}>{service.longDescription1}</p>

                            <div className="row mt-5">
                                <div className="col-sm-6 mb-4 mb-sm-0">
                                    <div className="stat-box p-4 rounded-3" style={{ background: '#1A1A1A', border: '1px solid #333' }}>
                                        <h3 className="display-5 fw-bold mb-0" style={{ color: '#d60048' }}>{service.stats.projects}+</h3>
                                        <p className="mb-0 text-white">Projects Completed</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="stat-box p-4 rounded-3" style={{ background: '#1A1A1A', border: '1px solid #333' }}>
                                        <h3 className="display-5 fw-bold mb-0" style={{ color: '#d60048' }}>{service.stats.satisfaction}%</h3>
                                        <p className="mb-0 text-white">Client Satisfaction</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="overview-image position-relative pf_zoomIn">
                            <div className="rounded-4 overflow-hidden shadow-lg">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={600}
                                    height={400}
                                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceOverview;
