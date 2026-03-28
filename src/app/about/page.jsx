import About from "@widgets/Common/About";
import React from "react";

export const metadata = {
  title: "About Us | NSS Higher Secondary School Kavalam",
  description:
    "Learn about NSS Higher Secondary School Kavalam — its history since 1927, legacy of academic excellence, and its role in the Kuttanad community of Alappuzha, Kerala.",
  keywords:
    "About NSS HSS Kavalam, NSS Higher Secondary School history, Kavalam school legacy, Kerala education, NSS school Alappuzha, school established 1927",
  alternates: {
    canonical: "https://www.nsshsskavalam.in/about",
  },
  openGraph: {
    title: "About Us | NSS Higher Secondary School Kavalam",
    description:
      "Discover the history and legacy of NSS Higher Secondary School in Kavalam, Alappuzha, Kerala. Offering quality education since 1927.",
    url: "https://www.nsshsskavalam.in/about",
    siteName: "NSS Higher Secondary School Kavalam",
    images: [
      {
        url: "https://www.nsshsskavalam.in/images/nss.png",
        width: 1200,
        height: 630,
        alt: "NSS Higher Secondary School Kavalam",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | NSS Higher Secondary School Kavalam",
    description:
      "Learn about NSS HSS Kavalam's rich history since 1927 and its contribution to education in Kerala.",
    images: ["https://www.nsshsskavalam.in/images/nss.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <About />;
}
