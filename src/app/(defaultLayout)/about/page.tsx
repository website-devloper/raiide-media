import About1 from '../../Components/About/About1';
import MissionVision from '../../Components/About/MissionVision';
import CoreValues from '../../Components/About/CoreValues';
import CreativeProcess from '../../Components/About/CreativeProcess';
import Brand4 from '../../Components/Brand/Brand4';
import Counter1 from '../../Components/Counter/Counter1';
import Cta1 from '../../Components/Cta/Cta1';
import Services3 from '../../Components/Services/Services3';
import Team1 from '../../Components/Team/Team1';
import Testimonial1 from '../../Components/Testimonial/Testimonial1';
import VideoShowcase from '../../Components/Video/VideoShowcase';
import WhoWeAre2 from '../../Components/WhoWeAre/WhoWeAre2';
import BreadCumb from '../../Components/Common/BreadCumb';
import React from 'react';

export const metadata = {
  title: 'About Us | Raiide Media',
  description: 'Learn about Raiide Media, our mission, vision, and the core values that drive our creative digital agency.',
};

const page = () => {
  return (
    <div>
      <BreadCumb
        Title="About Our Agency"
        content="We are a team of visionary creators and strategists dedicated to building brands that dominate the digital landscape through bold creativity and data-driven results."
      />
      <About1 variant="about"></About1>
      <MissionVision />
      <Counter1></Counter1>
      <CoreValues />
      <Services3></Services3>
      <CreativeProcess />
      <Brand4></Brand4>
      <VideoShowcase></VideoShowcase>
      <WhoWeAre2></WhoWeAre2>
      <Testimonial1></Testimonial1>
      <Cta1></Cta1>
    </div>
  );
};

export default page;

