import "@styles/globals.scss";
import Navbar from "@widgets/Common/Navbar";
import Menubar from "@widgets/Common/Menubar";
import Footer from "@widgets/Common/Footer";
import Bottombar from "@widgets/Common/Bottombar";
import { Analytics } from "@vercel/analytics/react";
import AOSProvider from "@components/AOSProvider";
import Script from "next/script";

export const metadata = {
  title: "NSS HSS Kavalam",
  description:
    "Official Website of NSS HSS Kavalam, providing quality education and holistic development in Kerala.",
  keywords:
    "NSS HSS Kavalam, NSS Higher Secondary School, Kavalam School, Kerala Education",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.nsshsskavalam.in/",
  },
  openGraph: {
    title: "NSS HSS Kavalam - High School, Kerala",
    description:
      "Official Website of NSS HSS Kavalam, providing quality education and holistic development in Kerala.",
    url: "https://www.nsshsskavalam.in/",
    type: "website",
    images: [
      {
        url: "https://www.nsshsskavalam.in/images/nss.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NSS HSS Kavalam - High School, Kerala",
    description:
      "Official Website of NSS HSS Kavalam, providing quality education and holistic development in Kerala.",
    images: ["https://www.nsshsskavalam.in/images/nss.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Google AdSense Script */}
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2223224465872155"
          crossOrigin="anonymous"
        />

        {/* Structured Data */}
        <Script
          id="school-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "School",
            name: "NSS HSS Kavalam",
            url: "https://www.nsshsskavalam.in",
            logo: "https://www.nsshsskavalam.in/images/nss.png",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kavalam",
              addressRegion: "Kerala",
              addressCountry: "IN",
            },
          })}
        </Script>

        <Analytics />

        <Navbar />

        <div className="hidden md:flex lg:flex">
          <Menubar />
        </div>

        <AOSProvider>{children}</AOSProvider>

        <Footer />
        <Bottombar />
      </body>
    </html>
  );
}
