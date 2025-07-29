import { Geist, Geist_Mono, Roboto, Belleza, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const belleza = Belleza({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-belleza',
});

const mrsSaintDelafield = Mrs_Saint_Delafield({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-mrs-saint-delafield',
});

export const metadata = {
  title: "Mengoni Design",
  description: "La tua Boutique di Design nel cuore del Mugello",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`${roboto.variable} ${belleza.variable} ${mrsSaintDelafield.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${belleza.variable} ${mrsSaintDelafield.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}