import { Source_Sans_3, Roboto } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import 'aos/dist/aos.css';
import "./assets/main.css";
import "./assets/enhanced.css";
import AosInit from './Components/Common/AosInit';

const source_sans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--heading-font',
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--body-font',
});

export const metadata = {
  metadataBase: new URL('https://raiidemedia.com/'),
  title: {
    default: 'Raiide Media | Professional Digital Agency',
    template: '%s | Raiide Media',
  },
  description: 'Professional digital agency with 4+ years of experience in content creation, branding, video production, and digital marketing. We help brands grow online with clear strategy and creative solutions.',
  keywords: [
    'Digital Agency',
    'Content Creation',
    'Video Production',
    'Photography',
    'Branding',
    'Digital Marketing',
    'Social Media Marketing',
    'Video Editing',
    'Creative Agency',
    'Brand Strategy',
    'Performance Marketing'
  ],
  authors: [{ name: 'Raiide Media' }],
  creator: 'Raiide Media',
  publisher: 'Raiide Media',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://raiidemedia.com/',
  },
  verification: {
    // Add your Google Search Console verification code here when available
    // google: 'your-verification-code',
  },
  icons: {
    icon: [
      { url: '/icon.png' },
      { url: '/assets/images/creative-agency/logo/logo raide.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/assets/images/creative-agency/logo/logo raide.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://raiidemedia.com/',
    siteName: 'Raiide Media',
    title: 'Raiide Media | Professional Digital Agency',
    description: 'Professional digital agency helping brands grow online. We offer content creation, branding, video production, and digital marketing services.',
    images: [
      {
        url: '/assets/images/creative-agency/logo/logo raide.png',
        width: 1200,
        height: 630,
        alt: 'Raiide Media - Digital Agency Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raiide Media | Professional Digital Agency',
    description: 'Helping brands grow with content creation, branding, and digital marketing.',
    images: ['/assets/images/creative-agency/logo/logo raide.png'],
    // Add your Twitter handle when available
    // creator: '@raiidemedia',
    // site: '@raiidemedia',
  },
};

export default function RootLayout({ children }: any) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Raiide Media",
    "description": "Professional digital agency helping brands grow online with content creation, branding, and digital marketing.",
    "url": "https://raiidemedia.com",
    "logo": "https://raiidemedia.com/assets/images/creative-agency/logo/logo raide.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "url": "https://raiidemedia.com/contact"
    },
    "sameAs": [
      // Add social media links when available
      // "https://www.facebook.com/raiidemedia",
      // "https://www.instagram.com/raiidemedia",
      // "https://twitter.com/raiidemedia"
    ],
    "areaServed": "Worldwide",
    "serviceType": [
      "Digital Marketing",
      "Content Creation",
      "Video Production",
      "Photography",
      "Branding",
      "Social Media Marketing"
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${source_sans.variable} ${roboto.variable}`}>
        <AosInit />
        {children}
      </body>
    </html>
  );
}
