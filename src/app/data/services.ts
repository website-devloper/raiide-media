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
        description: 'We create engaging content that tells your brand story and connects with your audience.',
        longDescription1: 'We create engaging content that tells your brand story. From planning to execution, our team develops creative ideas, writes clear copy, designs attractive visuals, and manages your content calendar. Every piece matches your brand voice and business goals to increase engagement and results.',
        longDescription2: 'Our content creation is both creative and data-driven. We study your audience and market trends to make content that works. Whether it\'s blog posts, social media updates, newsletters, or marketing materials, we ensure quality and consistency across all channels to build trust and authority.',
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
            { title: 'Discovery', desc: 'Understanding your brand, audience, and goals.' },
            { title: 'Strategy', desc: 'Creating a content calendar and creative themes.' },
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
        description: 'Professional photography that captures your brand in the best light.',
        longDescription1: 'Professional photography that showcases your brand. We provide art direction, studio setup, product photography, lifestyle shots, and campaign visuals. Each image is carefully edited and optimized for web, social media, and print to make your brand look great everywhere.',
        longDescription2: 'High-quality photos are essential for making a strong first impression. Our photographers and art directors work together to create visuals that highlight your products and services. We handle everything from location scouting to final editing and retouching.',
        features: [
            'Product & Lifestyle Photography',
            'Art Direction & Styling',
            'Professional Retouching',
            'Studio & On-Location Shoots'
        ],
        image: '/assets/images/creative-agency/gallery/photography.jpg',
        stats: {
            projects: 85,
            satisfaction: 99
        },
        icon: 'bi-camera-fill',
        process: [
            { title: 'Pre-Production', desc: 'Planning concept, styling, and location.' },
            { title: 'Shooting', desc: 'Professional photography session.' },
            { title: 'Retouching', desc: 'Expert editing and color grading.' },
            { title: 'Delivery', desc: 'Optimized files for all your needs.' }
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
        description: 'Build a memorable brand with professional visual identity design.',
        longDescription1: 'Build a memorable brand with professional visual identity design. We create complete brand systems including logo design, color palettes, typography, brand guidelines, and visual materials. Your brand will have a professional look that stands out and connects with your target audience.',
        longDescription2: 'A strong visual identity is the foundation of brand recognition. We explore your brand values and goals to create visual elements that represent your business. The result is a flexible design system that grows with your business and stays consistent across all platforms.',
        features: [
            'Logo Design & Branding',
            'Color Palette & Typography',
            'Brand Guidelines (Style Guides)',
            'Marketing Material Design'
        ],
        image: '/assets/images/creative-agency/gallery/visual identity.jpg',
        stats: {
            projects: 60,
            satisfaction: 100
        },
        icon: 'bi-palette-fill',
        process: [
            { title: 'Research', desc: 'Market research and competitor review.' },
            { title: 'Concept', desc: 'Logo ideas and color exploration.' },
            { title: 'Design', desc: 'Creating the complete visual system.' },
            { title: 'Guidelines', desc: 'Creating usage documentation.' }
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
        description: 'Bring your brand to life with professional video content.',
        longDescription1: 'Bring your brand to life with professional video content. From concept to final edit, we create engaging reels, promotional videos, ads, tutorials, and brand stories. Our videos combine creative direction, professional filming, motion graphics, and sound design to engage your audience.',
        longDescription2: 'Video is one of the most effective ways to connect with your audience. We create video strategies that work on social media and websites. Whether you need short-form Reels/TikToks or longer brand stories, we deliver professional quality that makes your brand stand out.',
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
            { title: 'Storyboard', desc: 'Script and visual planning.' },
            { title: 'Filming', desc: 'Professional video production.' },
            { title: 'Post-Production', desc: 'Editing, effects, and sound design.' },
            { title: 'Final Cut', desc: 'Revisions and final delivery.' }
        ],
        benefits: [
            'Higher Retention',
            'Emotional Impact',
            'Explains Ideas Clearly',
            'Social Media Friendly'
        ]
    },
    'digital-marketing': {
        id: 'digital-marketing',
        title: 'Digital Marketing',
        description: 'Grow your business with smart, data-driven digital marketing.',
        longDescription1: 'Grow your business with smart digital marketing strategies. We improve your online presence through SEO, paid advertising, conversion optimization, and performance tracking. Our approach focuses on increasing visibility, generating quality leads, and maximizing your return on investment.',
        longDescription2: 'Effective marketing uses data to make smart decisions. We track and analyze results to understand user behavior and improve campaigns continuously. From Google Ads and Facebook Ads to email marketing, we build systems that turn visitors into customers.',
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
            { title: 'Audit', desc: 'Reviewing current performance.' },
            { title: 'Strategy', desc: 'Planning channels and budget.' },
            { title: 'Execution', desc: 'Setting up and launching campaigns.' },
            { title: 'Optimization', desc: 'Testing and improving results.' }
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
        description: 'Build your social media presence with smart strategy and management.',
        longDescription1: 'Build your social media presence with professional management. We create platform-specific strategies, plan monthly content calendars, engage with your community, run targeted campaigns, and track performance. Our goal is to build an authentic, engaged audience that becomes loyal customers.',
        longDescription2: 'Social media is where your customers spend time. We help you connect with them through authentic content and active community engagement. We stay current with trends and platform changes to keep your brand relevant and memorable to your target audience.',
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
            { title: 'Strategy', desc: 'Planning platform and content themes.' },
            { title: 'Creation', desc: 'Creating monthly content batches.' },
            { title: 'Management', desc: 'Posting and community engagement.' },
            { title: 'Reporting', desc: 'Monthly performance reports.' }
        ],
        benefits: [
            'Brand Loyalty',
            'Customer Insight',
            'Direct Communication',
            'Growth Potential'
        ]
    }
};
