import BreadCumb from '../../Components/Common/BreadCumb';
import Project4 from '../../Components/Project/Project4';
import VisualIdentityShowcase from '../../Components/Project/VisualIdentityShowcase';
import ReelsShowcase from '../../Components/Video/ReelsShowcase';
import React from 'react';

const page = () => {
  return (
    <div>
      <BreadCumb
        Title="Portfolio"
        content="Raiide Media empowers brands with strategy, content, and performance marketing solutions"
      />
      <Project4 />
      <VisualIdentityShowcase />
      <ReelsShowcase />
    </div>
  );
};

export default page;
