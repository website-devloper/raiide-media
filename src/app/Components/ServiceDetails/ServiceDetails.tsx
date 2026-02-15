import Image from 'next/image';
import React from 'react';
import { ServiceData } from '../../data/services';

interface ServiceDetailsProps {
    service?: ServiceData;
}

const ServiceDetails = ({ service }: ServiceDetailsProps) => {
    // Default values
    const title = service?.title || "Success Through Client Experiences";
    const longDesc1 = service?.longDescription1 || "We offer a range of specialized services designed to address your unique business challenges. innovative strategies tailored solutions, our expertise ensures exceptional outcomes.";
    const longDesc2 = service?.longDescription2 || "We offer a range of specialized services designed to address your unique business challenges. innovative strategies tailored ";
    const features = service?.features || [
        "Passionate Problem-Solvers For Your",
        "Business & Financial Creative Innovators",
        "Provide National Trusted Client-Centered",
        "Perfect & Modern Work Results-Driven"
    ];
    const image = service?.image || "/assets/images/pages/service/single-service1.jpg";
    const projectCount = service?.stats.projects || 5000;
    const satisfaction = service?.stats.satisfaction || 100;

    return (
        <section className="agenko-service-details pt-130 pb-80">
            <div className="container">

                <div className="service-details-wrapper">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="agenko-iamge-box mb-70 pf_zoomIn">
                                <div className="agenko-image">
                                    <Image src={image} alt={title} width={1290} height={500} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">

                            <div className="agenko-content-box mb-50 pf_fadeup">
                                <div className="section-title mb-40">
                                    <span className="sub-title">Description</span>
                                    <h2>{title}</h2>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="agenko-counter-item">
                                            <div className="content">
                                                <h2><span className="count">{projectCount}</span>+</h2>
                                                <p>Project Complete</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="agenko-counter-item">
                                            <div className="content">
                                                <h2><span className="count">{satisfaction}</span>%</h2>
                                                <p>Satisfaction Clients</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="agenko-content-box mb-50 pf_fadeup">
                                <p className="mb-20">{longDesc1}</p>
                                <p className="mb-20">{longDesc2}</p>
                                <ul className="check-list style-one">
                                    {features.map((feature, index) => (
                                        <li key={index}><i className="flaticon-check"></i>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;