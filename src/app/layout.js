import "@styles/globals.scss";
import Navbar from "@widgets/Common/Navbar";
import Menubar from "@widgets/Common/Menubar";
import Footer from "@widgets/Common/Footer";
import Bottombar from "@widgets/Common/Bottombar";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "NSS HSS Kavalam",
  description:
    "Official Website of NSS HSS Kavalam, providing quality education and holistic development in Kerala.",
  keywords:
    "NSS HSS Kavalam,nss hss kavalam, NSS Higher Secondary School, Kavalam School, Kerala Education, NSS School, Higher Secondary Education, Education in Kerala",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Analytics/>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link
          rel="preload"
          href="/images/nssOrangeLogo.webp" // Adjust the path to your logo
          as="image"
        />
        <link rel="canonical" href="https://www.nsshsskavalam.in/" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph tags */}
        <meta
          property="og:title"
          content="NSS HSS Kavalam - High School, Kerala"
        />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://www.nsshsskavalam.in/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.nsshsskavalam.in/images/nss.png"
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="NSS HSS Kavalam - High School, Kerala"
        />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content="https://www.nsshsskavalam.in/images/nss.png"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "School",
            name: "NSS HSS Kavalam",
            url: "https://www.nsshsskavalam.in",
            logo: "https://www.nsshsskavalam.in/images/nss.png",
            description:
              "Official Website of NSS HSS Kavalam, providing quality education and holistic development in Kerala.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 School Road",
              addressLocality: "Kavalam",
              addressRegion: "KL",
              postalCode: "123456",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-123-456-7890",
              contactType: "Customer Service",
            },
          })}
        </script>
      </Head>
      <body>
        <Navbar />
        <div className="hidden lg:flex md:flex">
          <Menubar />
        </div>
        {children}
        <Footer />
        <Bottombar />
      </body>
    </html>
  );
}
