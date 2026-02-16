import BreadCumb from '../../Components/Common/BreadCumb';
import StudioShowcase from '../../Components/Studio/StudioShowcase';
import Cta1 from '../../Components/Cta/Cta1';
import React from 'react';

export const metadata = {
    title: 'Our Studios | Raiide Media',
    description: 'Explore our premium professional studios, each designed to provide the perfect setting for high-impact content creation.',
};

const page = () => {
    return (
        <div>
            <BreadCumb
                Title="Our Studios"
                content="State-of-the-art facilities designed for premium podcast production, video creation, and creative projects."
            />
            <StudioShowcase />
            <Cta1 />
        </div>
    );
};

export default page;
