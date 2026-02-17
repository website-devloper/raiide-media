import BreadCumb from '../../Components/Common/BreadCumb';
import Project4 from '../../Components/Project/Project4';
import VisualIdentityShowcase from '../../Components/Project/VisualIdentityShowcase';
import ReelsShowcase from '../../Components/Video/ReelsShowcase';
import React from 'react';

export const metadata = {
  title: 'Portfolio | Raiide Media',
  description: 'View our portfolio of digital projects including content creation, branding, video production, and marketing campaigns for clients across industries.',
};

const page = () => {
  return (
    <div>
      <BreadCumb
        Title="Portfolio"
        content="See our work - creative projects and successful campaigns for brands across different industries."
      />
      <Project4 />
      <VisualIdentityShowcase />
      <ReelsShowcase />
    </div>
  );
};

export default page;
