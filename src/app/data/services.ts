export interface ServiceData {
    id: string;
    title: string;
    description: string;
    longDescription1: string;
    longDescription2: string;
    features: string[];
    image: string;
    stats: {
        projects: number;
        satisfaction: number;
    };
    icon: string;
    process: { title: string; desc: string }[];
    benefits: string[];
}

export const servicesData: Record<string, ServiceData> = {
    'content-creation': {
        id: 'content-creation',
        title: 'Content Creation',
        description: 'We craft compelling content that tells your brand story and drives engagement.',
        longDescription1: 'We craft compelling content that tells your brand story. From ideation to execution, our team develops creative concepts, writes engaging copy, designs eye-catching visuals, and manages your content calendar. Every piece is strategically aligned with your brand voice and business goals to drive engagement and conversions.',
        longDescription2: 'Our content creation process is data-driven and creative. We analyze your audience interests and market trends to produce content that resonates. Whether it\'s blog posts, social media updates, whitepapers, or newsletters, we ensure consistency and quality across all channels to build authority and trust.',
        features: [
            'Creative Concept Development',
            'Copywriting & storytelling',
            'Visual Asset Design',
            'Content Calendar Management'
        ],
        image: '/assets/images/creative-agency/gallery/contentcreation.jpg',
        stats: {
            projects: 120,
            satisfaction: 98
        },
        icon: 'bi-briefcase-fill',
        process: [
            { title: 'Discovery', desc: 'Understanding your brand voice, audience, and goals.' },
            { title: 'Strategy', desc: 'Developing a content calendar and creative themes.' },
            { title: 'Production', desc: 'Creating high-quality visuals and copy.' },
            { title: 'Distribution', desc: 'Publishing and promoting across channels.' }
        ],
        benefits: [
            'Consistent Brand Voice',
            'Increased Engagement',
            'Thought Leadership',
            'Time Saving'
        ]
    },
    'photography': {
        id: 'photography',
        title: 'Photography',
        description: 'Professional photography services that capture your brand essence.',
        longDescription1: 'Professional photography services that capture your brand essence. We provide complete art direction, studio setup, product shoots, lifestyle photography, and campaign visuals. Each image is expertly edited and optimized for web, social media, and print to ensure your brand looks stunning everywhere.',
        longDescription2: 'High-quality imagery is crucial for making a strong first impression. Our team of photographers and art directors work together to create visual narratives that highlight your products and services. We handle everything from location scouting and casting to post-production and retouching.',
        features: [
            'Product & Lifestyle Photography',
            'Art Direction & Styling',
            'High-End Retouching',
            'Studio & On-Location Shoots'
        ],
        image: '/assets/images/creative-agency/gallery/photography.jpg',
        stats: {
            projects: 85,
            satisfaction: 99
        },
        icon: 'bi-camera-fill',
        process: [
            { title: 'Pre-Production', desc: 'Concept, styling, and location scouting.' },
            { title: 'Shooting', desc: 'Professional direction and capture.' },
            { title: 'Retouching', desc: 'High-end editing and color grading.' },
            { title: 'Delivery', desc: 'Optimized files for all formats.' }
        ],
        benefits: [
            'Professional Image',
            'Product Appeal',
            'Visual Consistency',
            'Emotional Connection'
        ]
    },
    'visual-identity': {
        id: 'visual-identity',
        title: 'Visual Identity',
        description: 'Build a memorable brand with our comprehensive visual identity design.',
        longDescription1: 'Build a memorable brand with our comprehensive visual identity design. We create complete brand systems including logo design, color palettes, typography, brand guidelines, and visual assets. Your brand will have a cohesive, professional look that stands out and resonates with your target audience.',
        longDescription2: 'A strong visual identity is the foundation of brand recognition. We dive deep into your brand values and mission to translate them into visual elements using psychology of color and shape. The result is a flexible design system that scales with your business and maintains consistency across all touchpoints.',
        features: [
            'Logo Design & Branding',
            'Color Palette & Typography',
            'Brand Guidelines (Style Guides)',
            'Marketing Collateral Design'
        ],
        image: '/assets/images/creative-agency/gallery/visual identity.jpg',
        stats: {
            projects: 60,
            satisfaction: 100
        },
        icon: 'bi-palette-fill',
        process: [
            { title: 'Research', desc: 'Market analysis and competitor audit.' },
            { title: 'Concept', desc: 'Logo sketches and color exploration.' },
            { title: 'Design', desc: 'Creating the full visual system.' },
            { title: 'Guidelines', desc: 'Documenting usage rules.' }
        ],
        benefits: [
            'Memorable Recognition',
            'Trust & Credibility',
            'Differentiation',
            'Scalability'
        ]
    },
    'content-video': {
        id: 'content-video',
        title: 'Content Video',
        description: 'Bring your brand to life with high-quality video content.',
        longDescription1: 'Bring your brand to life with high-quality video content. From concept development to final editing, we produce engaging reels, promotional videos, ads, tutorials, and branded storytelling. Our videos combine creative direction, professional filming, motion graphics, and sound design to captivate your audience.',
        longDescription2: 'Video is the most powerful tool for engagement in the digital age. We create dynamic video strategies that work for social media algorithms and website conversions. Whether you need short-form Reels/TikToks or long-form documentary style brand stories, we deliver production quality that elevates your brand.',
        features: [
            'Video Production & Editing',
            'Motion Graphics & Animation',
            'Reels & TikTok Creation',
            'Scriptwriting & Storyboarding'
        ],
        image: '/assets/images/creative-agency/gallery/video editing.jpg',
        stats: {
            projects: 50,
            satisfaction: 97
        },
        icon: 'bi-camera-reels-fill',
        process: [
            { title: 'Storyboard', desc: 'Scripting and visual planning.' },
            { title: 'Filming', desc: 'On-set production with crew.' },
            { title: 'Post-Production', desc: 'Editing, VFX, and Sound Design.' },
            { title: 'Final Cut', desc: 'Revisions and format export.' }
        ],
        benefits: [
            'Higher Retention',
            'Emotional Impact',
            'Complex Ideas Simplified',
            'Social algorithm favor'
        ]
    },
    'digital-marketing': {
        id: 'digital-marketing',
        title: 'Digital Marketing',
        description: 'Drive measurable growth with data-driven digital marketing strategies.',
        longDescription1: 'Drive measurable growth with data-driven digital marketing strategies. We optimize your online presence through SEO, paid advertising campaigns, conversion funnels, and performance analytics. Our approach focuses on increasing visibility, generating qualified leads, and maximizing your ROI across all digital channels.',
        longDescription2: 'Marketing without data is just guessing. We implement comprehensive tracking and analytics to understand user behavior and optimize campaigns in real-time. From Google Ads and Facebook Ads to email marketing automation, we build integrated systems that turn traffic into revenue.',
        features: [
            'SEO & SEM Strategy',
            'Paid Social Advertising',
            'Conversion Rate Optimization',
            'Analytics & Reporting'
        ],
        image: '/assets/images/creative-agency/gallery/digital marketing.jpg',
        stats: {
            projects: 150,
            satisfaction: 96
        },
        icon: 'bi-megaphone-fill',
        process: [
            { title: 'Audit', desc: 'Analyzing current performance.' },
            { title: 'Strategy', desc: 'Channel selection and budget planning.' },
            { title: 'Execution', desc: 'Campaign setup and launch.' },
            { title: 'Optimization', desc: 'Ongoing testing and refinement.' }
        ],
        benefits: [
            'Measurable ROI',
            'Targeted Reach',
            'Lead Generation',
            'Scalable Growth'
        ]
    },
    'social-media-marketing': {
        id: 'social-media-marketing',
        title: 'Social Media Marketing',
        description: 'Grow your social presence with strategic social media management.',
        longDescription1: 'Grow your social presence with strategic social media management. We develop platform-specific strategies, create monthly content calendars, engage with your community, run targeted campaigns, and analyze performance metrics. Our goal is to build an authentic, engaged audience that converts into loyal customers.',
        longDescription2: 'Social media is where your customers live. We help you join the conversation with authentic content and active community management. We stay ahead of trends and platform updates to ensure your brand remains relevant and top-of-mind for your target demographic.',
        features: [
            'Platform Strategy (IG, LinkedIn, TikTok)',
            'Community Management',
            'Influencer Partnerships',
            'Social Listening & Analytics'
        ],
        image: '/assets/images/creative-agency/gallery/socialmediamarketing.jpg',
        stats: {
            projects: 100,
            satisfaction: 98
        },
        icon: 'bi-share-fill',
        process: [
            { title: 'Strategy', desc: 'Platform and content pillar definition.' },
            { title: 'Creation', desc: 'Monthly content batch production.' },
            { title: 'Management', desc: 'Posting and community engagement.' },
            { title: 'Reporting', desc: 'Monthly performance insights.' }
        ],
        benefits: [
            'Brand Loyalty',
            'Customer Insight',
            'Direct Communication',
            'Viral Potential'
        ]
    }
};
