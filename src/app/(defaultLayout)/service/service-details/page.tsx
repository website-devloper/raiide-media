import Brand4 from '../../../Components/Brand/Brand4';
import BreadCumb from '../../../Components/Common/BreadCumb';

import Process3 from '../../../Components/Process/Process3';
import ServiceDetails from '../../../Components/ServiceDetails/ServiceDetails';
import React from 'react';

const page = () => {
  return (
    <div>
      <BreadCumb
        Title="Services Details"
        content="Raiide Media empowers brands with strategy, content, and performance marketing solutions"
      ></BreadCumb>
      <ServiceDetails></ServiceDetails>
      <Process3></Process3>

      <Brand4></Brand4>
    </div>
  );
};

export default page;
