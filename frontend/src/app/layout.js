import { Raleway } from "next/font/google";
import "@styles/globals.scss";
import Navbar from "@widgets/Common/Navbar";
import Menubar from "@widgets/Common/Menubar";

const inter = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "NSS HSS Kavalam",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Menubar/>
        {children}
      </body>
    </html>
  );
}
