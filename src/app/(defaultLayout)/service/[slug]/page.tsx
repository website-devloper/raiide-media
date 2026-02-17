import React from 'react';
import { servicesData } from '../../../data/services';
import ServiceOverview from '../../../Components/ServiceDetails/ServiceOverview';
import ServiceProcess from '../../../Components/ServiceDetails/ServiceProcess';
import ServiceBenefits from '../../../Components/ServiceDetails/ServiceBenefits';
import BreadCumb from '../../../Components/Common/BreadCumb';
import Brand4 from '../../../Components/Brand/Brand4';

import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({
        slug: slug,
    }));
}

interface PageProps {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        return {
            title: 'Service Not Found',
        };
    }

    return {
        title: service.title,
        description: service.description,
        openGraph: {
            title: `${service.title} | Raiide Media`,
            description: service.description,
            images: [
                {
                    url: service.image,
                    alt: service.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${service.title} | Raiide Media`,
            description: service.description,
            images: [service.image],
        },
    };
}

const ServiceDetailsPage = async ({ params }: PageProps) => {
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

            <Brand4></Brand4>
        </div>
    );
};

export default ServiceDetailsPage;
