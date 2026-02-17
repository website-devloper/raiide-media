import BreadCumb from '../../Components/Common/BreadCumb';
import Faq2 from '../../Components/Faq/Faq2';
import React from 'react';

export const metadata = {
  title: 'FAQ | Raiide Media',
  description: 'Frequently asked questions about our digital services, pricing, process, and how we help brands grow online. Get answers to common questions.',
};

const page = () => {
  return (
    <div>
      <BreadCumb
        Title="FAQ"
        content="Find answers to common questions about our services, pricing, and process. Learn how we can help your brand succeed online."
      ></BreadCumb>
      <Faq2></Faq2>
    </div>
  );
};

export default page;
