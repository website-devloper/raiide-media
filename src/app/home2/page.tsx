import React from 'react';
import HeroBanner1 from '../Components/HeroBanner/HeroBanner1';
import Brand4 from '../Components/Brand/Brand4';
import VisualIdentity from '../Components/Brand/VisualIdentity';
import About1 from '../Components/About/About1';
import Counter1 from '../Components/Counter/Counter1';
import Services3 from '../Components/Services/Services3';
import ReelsShowcase from '../Components/Video/ReelsShowcase';
import Project4 from '../Components/Project/Project4';
import Process1 from '../Components/Process/Process1';
import Team1 from '../Components/Team/Team1';
import Faq1 from '../Components/Faq/Faq1';
import WhoWeAre2 from '../Components/WhoWeAre/WhoWeAre2';
import Testimonial1 from '../Components/Testimonial/Testimonial1';
import Cta1 from '../Components/Cta/Cta1';
import ReelsPacks from '../Components/Pricing/ReelsPacks';
import PersonalBrandingPacks from '../Components/Pricing/PersonalBrandingPacks';
import PodcastPacks from '../Components/Pricing/PodcastPacks';

import VideoEditingPacks from '../Components/Pricing/VideoEditingPacks';

export const metadata = {
    title: 'Home | Raiide Media',
    description: 'Grow your brand with Raiide Media, the all-in-one digital agency for content creation, strategy, and performance marketing. We help you dominate social media and scale your business.',
};

const page = () => {
    return (
        <main className="home2-premium">
            {/* 1. Hero Banner - First impression, hook visitors */}
            <HeroBanner1></HeroBanner1>

            {/* 2. Services - What we offer (core value proposition) */}
            <div className="home2-band home2-band-services">
                <Services3></Services3>
            </div>

            {/* 3. Pricing Packs - Show packages and pricing (critical for conversions) */}
            <div className="home2-band home2-band-packs">
                <ReelsPacks></ReelsPacks>
                <VideoEditingPacks></VideoEditingPacks>
                <PersonalBrandingPacks></PersonalBrandingPacks>
                <PodcastPacks></PodcastPacks>
            </div>

            {/* 4. Portfolio - Showcase our work (proof of quality) */}
            <div className="home2-band home2-band-portfolio">
                <Project4></Project4>
                <VisualIdentity></VisualIdentity>
                <ReelsShowcase></ReelsShowcase>
            </div>

            {/* 5. About & Stats - Build credibility with numbers */}
            <div className="home2-band home2-band-about">
                <About1></About1>
                <Counter1></Counter1>
            </div>

            {/* 6. Testimonials - Social proof from clients */}
            <div className="home2-band home2-band-testimonials">
                <Testimonial1></Testimonial1>
            </div>

            {/* 7. Brand Logos - Trust indicators */}
            <div className="home2-band home2-band-brand">
                <Brand4></Brand4>
            </div>

            {/* 8. Who We Are - Company story and values */}
            <div className="home2-band home2-band-story">
                <WhoWeAre2></WhoWeAre2>
            </div>

            {/* 9. FAQ - Address common questions */}
            <div className="home2-band home2-band-faq">
                <Faq1></Faq1>
            </div>

            {/* 10. CTA - Final conversion push */}
            <div className="home2-band home2-band-cta">
                <Cta1></Cta1>
            </div>
        </main>
    );
};

export default page;
