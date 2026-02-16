import React from 'react';
import { servicesData } from '../../../data/services';
import ServiceOverview from '../../../Components/ServiceDetails/ServiceOverview';
import ServiceProcess from '../../../Components/ServiceDetails/ServiceProcess';
import ServiceBenefits from '../../../Components/ServiceDetails/ServiceBenefits';
import BreadCumb from '../../../Components/Common/BreadCumb';
import Brand4 from '../../../Components/Brand/Brand4';
import Pricing1 from '../../../Components/Pricing/Pricing1';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({
        slug: slug,
    }));
}

const ServiceDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        notFound();
    }

    return (
        <div>
            <BreadCumb
                Title={service.title}
                content="Raiide Media empowers brands with strategy, content, and performance marketing solutions"
            ></BreadCumb>
            <ServiceOverview service={service} />
            <ServiceProcess service={service} />
            <ServiceBenefits service={service} />
            <Pricing1></Pricing1>
            <Brand4></Brand4>
        </div>
    );
};

export default ServiceDetailsPage;
