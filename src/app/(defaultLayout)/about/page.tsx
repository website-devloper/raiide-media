import About1 from '../../Components/About/About1';
import Brand4 from '../../Components/Brand/Brand4';
import Counter1 from '../../Components/Counter/Counter1';
import Cta1 from '../../Components/Cta/Cta1';
import Services3 from '../../Components/Services/Services3';
import Team1 from '../../Components/Team/Team1';
import Testimonial1 from '../../Components/Testimonial/Testimonial1';
import VideoShowcase from '../../Components/Video/VideoShowcase';
import WhoWeAre2 from '../../Components/WhoWeAre/WhoWeAre2';
import React from 'react';

const page = () => {
  return (
    <div>
      <About1 variant="about"></About1>
      <Counter1></Counter1>
      <Services3></Services3>
      <Brand4></Brand4>
      <VideoShowcase></VideoShowcase>
      <WhoWeAre2></WhoWeAre2>
      <Testimonial1></Testimonial1>
      <Cta1></Cta1>
    </div>
  );
};

export default page;

