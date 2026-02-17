import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://raiide-media.vercel.app/home2';
    const currentDate = new Date();

    return [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/home2`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/service`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/pricing`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/project`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/packs`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/our-studios`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];
}
