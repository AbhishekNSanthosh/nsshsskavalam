import { Inter } from "next/font/google";
import '../Themes/globals.scss'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:"NSS HSS Kavalam",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
