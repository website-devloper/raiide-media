import React from 'react';
import HeroBanner1 from '../Components/HeroBanner/HeroBanner1';
import Video1 from '../Components/Video/Video1';
import Services1 from '../Components/Services/Services1';
import Project1 from '../Components/Project/Project1';
import Process1 from '../Components/Process/Process1';
import Brand1 from '../Components/Brand/Brand1';
import Team1 from '../Components/Team/Team1';
import Award1 from '../Components/Award/Award1';
import Testimonial1 from '../Components/Testimonial/Testimonial1';
import Blog1 from '../Components/Blog/Blog1';

export const metadata = {
    title: 'Home V3 | Raiide Media',
    description: 'Raiide Media - Creative Digital Solutions. High-impact video, branding, and marketing strategies for modern businesses.',
};

const page = () => {
    return (
        <div>
            <HeroBanner1></HeroBanner1>
            <Video1></Video1>
            <Services1></Services1>
            <Project1></Project1>
            <Process1></Process1>
            <Brand1></Brand1>
            <Team1></Team1>
            <Award1></Award1>
            <Testimonial1></Testimonial1>
            <Blog1></Blog1>
        </div>
    );
};

export default page;