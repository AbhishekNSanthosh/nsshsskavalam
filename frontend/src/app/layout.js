import { Raleway } from "next/font/google";
import "@styles/globals.scss";
import Navbar from "@widgets/Common/Navbar";
import Menubar from "@widgets/Common/Menubar";
import Footer from "@widgets/Common/Footer";
import Bottombar from "@widgets/Common/Bottombar";
import Head from 'next/head';

const inter = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "NSS HSS Kavalam",
  description: "Official Website of NSS HSS Kavalam.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>NSS HSS Kavalam</title>
        <meta name="description" content="Official Website of NSS HSS Kavalam." />
        <meta name="keywords" content="Nss Hss kavalam, NSS HSS, Kavalam" />
        <link rel="canonical" href="https://www.nsshsskavalam.in/" />

        {/* Open Graph tags */}
        <meta property="og:title" content="NSS HSS Kavalam" />
        <meta property="og:description" content="Official Website of NSS HSS Kavalam." />
        <meta property="og:url" content="https://www.nsshsskavalam.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.nsshsskavalam.in/path/to/your-image.jpg" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NSS HSS Kavalam" />
        <meta name="twitter:description" content="Official Website of NSS HSS Kavalam." />
        <meta name="twitter:image" content="https://www.nsshsskavalam.in/path/to/your-image.jpg" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        <div className="mt-[10vh] md:mt-[14vh] lg:mt-[14vh]">
          <div className="hidden lg:flex md:flex">
            <Menubar />
          </div>
          {children}
          <Footer />
          <Bottombar />
        </div>
      </body>
    </html>
  );
}
