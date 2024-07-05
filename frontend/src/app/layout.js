import { Raleway } from "next/font/google";
import "@styles/globals.scss";
import Navbar from "@widgets/Common/Navbar";
import Menubar from "@widgets/Common/Menubar";
import Footer from "@widgets/Common/Footer";
import Bottombar from "@widgets/Common/Bottombar";

const inter = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "NSS HSS Kavalam",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="description" content="Official website of NSS HSS Kavalam." />
      <meta name="keywords" content="Nss Hss kavalam, NSS HSS, Kavalam" />
      <link rel="canonical" href="https://www.nsshsskavalam.in/" />
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
