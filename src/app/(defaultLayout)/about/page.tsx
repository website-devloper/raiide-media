import About1 from '../../Components/About/About1';
import CreativeProcess from '../../Components/About/CreativeProcess';
import Brand4 from '../../Components/Brand/Brand4';
import Counter1 from '../../Components/Counter/Counter1';
import Cta1 from '../../Components/Cta/Cta1';
import Testimonial1 from '../../Components/Testimonial/Testimonial1';
import WhoWeAre2 from '../../Components/WhoWeAre/WhoWeAre2';
import BreadCumb from '../../Components/Common/BreadCumb';
import React from 'react';

export const metadata = {
  title: 'About Us | Raiide Media',
  description: 'Learn about Raiide Media - a professional digital agency focused on strategy, creativity, and results. Discover our mission, values, and what makes us different.',
};

const page = () => {
  return (
    <div>
      <BreadCumb
        Title="About Our Agency"
        content="We are a team of creative professionals and strategists focused on building brands that succeed online through smart creativity and clear strategy."
      />
      <About1 variant="about"></About1>
      <Counter1></Counter1>
      <CreativeProcess />
      <Brand4></Brand4>
      <WhoWeAre2></WhoWeAre2>
      <Testimonial1></Testimonial1>
      <Cta1></Cta1>
    </div>
  );
};

export default page;

