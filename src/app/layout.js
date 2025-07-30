import { Geist, Geist_Mono, Roboto, Belleza, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";
import ScrollToTop from '@/components/ScrollToTop'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

const belleza = Belleza({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-belleza',
  display: 'swap',
});

const mrsSaintDelafield = Mrs_Saint_Delafield({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-mrs-saint-delafield',
  display: 'swap',
});

export const metadata = {
  title: "Mengoni Design",
  description: "La tua Boutique di Design nel cuore del Mugello",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${belleza.variable} ${mrsSaintDelafield.variable}`}>
      <body>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}