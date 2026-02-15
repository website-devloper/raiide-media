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
  title: {
    absolute: '',
    default: 'Raiide Media | Creative Digital Agency',
    template: '%s | Raiide Media',
  },
  description: 'Raiide Media is a creative digital agency focused on strategy, content, branding, and performance marketing.',
  openGraph: {
    title: 'Raiide Media | Creative Digital Agency',
    description: 'Raiide Media is a creative digital agency focused on strategy, content, branding, and performance marketing.',
  },
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Raiide Media" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${source_sans.variable} ${roboto.variable}`}>
        <AosInit />
        {children}
      </body>
    </html>
  );
}
