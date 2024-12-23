import type { Metadata } from "next";
import { Montserrat, Open_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: {
    default: "Agrihub - Agricultural Innovation Platform",
    template: "%s | Agrihub",
  },
  description:
    "Agrihub is your premier platform for agricultural innovation, connecting farmers with modern farming solutions and sustainable practices.",
  keywords: [
    "agriculture",
    "farming",
    "innovation",
    "sustainable farming",
    "agtech",
  ],
  authors: [{ name: "test" }],
  creator: "AgriHub",
  publisher: "AgriHub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://agrihub-psi.vercel.app",
    siteName: "Agrihub",
    title: "Agrihub - Agricultural Innovation Platform",
    description:
      "Agrihub is your premier platform for agricultural innovation, connecting farmers with modern farming solutions and sustainable practices.",
    images: [
      {
        url: "/images/fourtheenth.jpeg", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Agrihub Preview Image",
      },
    ],
  },
  twitter: {
    // card: 'summary_large_image',
    title: "Agrihub - Agricultural Innovation Platform",
    description:
      "Agrihub is your premier platform for agricultural innovation, connecting farmers with modern farming solutions and sustainable practices.",
    // images: ['https://your-domain.com/twitter-image.jpg'], // Replace with your actual image URL
    // creator: '@yourtwitterhandle', // Optional
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  // verification: {
  //   google: "your-google-site-verification", // Optional: Add if you have Google Search Console verification
  //   yandex: "your-yandex-verification", // Optional
  //   yahoo: "your-yahoo-verification", // Optional
  // },
  // alternates: {
  //   canonical: "https://your-domain.com",
  //   languages: {
  //     "en-US": "https://your-domain.com",
  //     // Add other language versions if available
  //   },
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${montserrat.variable} 
          ${openSans.variable} 
          ${roboto.variable}
          antialiased
        `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
