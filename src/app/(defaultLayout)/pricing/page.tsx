import Brand4 from '../../Components/Brand/Brand4';
import BreadCumb from '../../Components/Common/BreadCumb';
import Pricing2 from '../../Components/Pricing/Pricing2';
import Testimonial4 from '../../Components/Testimonial/Testimonial4';
import React from 'react';

export const metadata = {
    title: 'Pricing & Packages | Raiide Media',
    description: 'Transparent pricing for content creation, video production, branding, and digital marketing services. Choose the package that fits your business needs.',
};

const page = () => {
    return (
        <div>
            <BreadCumb
                Title="Pricing"
                content="Professional digital services with clear, transparent pricing. Choose the package that fits your business goals."
            ></BreadCumb>
            <Pricing2></Pricing2>
            <Testimonial4></Testimonial4>
            <Brand4></Brand4>
        </div>
    );
};

export default page;
