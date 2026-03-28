import Facilities from "@widgets/Facilties";
import React from "react";

export const metadata = {
  title: "Facilities | NSS Higher Secondary School Kavalam",
  description:
    "Explore the world-class facilities at NSS HSS Kavalam — spacious classrooms with smart boards, a 50,000-book library, Physics/Chemistry/Biology labs, and a fully equipped computer lab.",
  keywords:
    "NSS HSS Kavalam facilities, school library Kavalam Kerala, science laboratories higher secondary, computer lab Kerala school, smart classroom Alappuzha",
  alternates: {
    canonical: "https://www.nsshsskavalam.in/facilities",
  },
  openGraph: {
    title: "Facilities | NSS Higher Secondary School Kavalam",
    description:
      "Smart classrooms, a 50,000-book library, science labs, and a computer lab — discover the facilities at NSS HSS Kavalam.",
    url: "https://www.nsshsskavalam.in/facilities",
    siteName: "NSS Higher Secondary School Kavalam",
    images: [
      {
        url: "https://www.nsshsskavalam.in/images/nss.png",
        width: 1200,
        height: 630,
        alt: "Facilities at NSS Higher Secondary School Kavalam",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Facilities | NSS Higher Secondary School Kavalam",
    description:
      "World-class facilities including smart classrooms, library, and labs at NSS HSS Kavalam, Kerala.",
    images: ["https://www.nsshsskavalam.in/images/nss.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <Facilities />;
}
