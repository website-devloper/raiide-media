import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Services3 from '../../Components/Services/Services3';
import ReelsPacks from '../../Components/Pricing/ReelsPacks';
import PersonalBrandingPacks from '../../Components/Pricing/PersonalBrandingPacks';
import PodcastPacks from '../../Components/Pricing/PodcastPacks';
import Process1 from '../../Components/Process/Process1';
import Testimonial1 from '../../Components/Testimonial/Testimonial1';
import Cta1 from '../../Components/Cta/Cta1';
import Brand4 from '../../Components/Brand/Brand4';

const page = () => {
  return (
    <div>
      <BreadCumb
        Title="Our Services"
      ></BreadCumb>

      {/* Services List - Matching Home Page */}
      <Services3></Services3>

      {/* Pricing Packs */}
      <div className="home2-band home2-band-packs">
        <ReelsPacks></ReelsPacks>
        <PersonalBrandingPacks></PersonalBrandingPacks>
        <PodcastPacks></PodcastPacks>
      </div>

      {/* How We Work */}
      <Process1></Process1>

      {/* Testimonials */}
      <Testimonial1></Testimonial1>

      {/* Call To Action */}
      <Cta1></Cta1>

      {/* Trust Indicators */}
      <Brand4></Brand4>
    </div>
  );
};

export default page;
