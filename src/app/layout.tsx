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
    default: 'Raiide Media | Full-Service Digital Agency',
    template: '%s | Raiide Media',
  },
  description: 'Raiide Media is a leading digital agency offering comprehensive strategy, content creation, branding, photography, video production, and performance marketing solutions. We empower brands to dominate the digital landscape.',
  keywords: ['Digital Agency', 'Content Creation', 'Photography', 'Video Production', 'Visual Identity', 'Digital Marketing', 'Social Media Marketing', 'Raiide Media', 'Branding Strategy'],
  authors: [{ name: 'Raiide Media' }],
  creator: 'Raiide Media',
  publisher: 'Raiide Media',
  icons: {
    icon: '/assets/images/creative-agency/logo/logo raide.png',
    shortcut: '/favicon.ico',
    apple: '/assets/images/creative-agency/logo/logo raide.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://raiidemedia.com/',
    siteName: 'Raiide Media',
    title: 'Raiide Media | Full-Service Digital Agency',
    description: 'Transform your brand with Raiide Media. We provide end-to-end digital solutions from creative content to performance marketing.',
    images: [
      {
        url: '/assets/images/creative-agency/logo/logo raide.png',
        width: 1200,
        height: 630,
        alt: 'Raiide Media Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raiide Media | Full-Service Digital Agency',
    description: 'Empowering brands with strategy, content, and performance marketing.',
    images: ['/assets/images/creative-agency/logo/logo raide.png'],
  },
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={`${source_sans.variable} ${roboto.variable}`}>
        <AosInit />
        {children}
      </body>
    </html>
  );
}
