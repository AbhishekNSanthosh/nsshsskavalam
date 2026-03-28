import Gallery from "@widgets/Gallery";
import React from "react";

export const metadata = {
  title: "Gallery | NSS Higher Secondary School Kavalam",
  description:
    "Browse the photo gallery of NSS HSS Kavalam — capturing memorable moments from cultural events, sports meets, academic activities, and community programs.",
  keywords:
    "NSS HSS Kavalam gallery, school photos Kavalam Kerala, cultural events NSS school, sports meet Alappuzha school, school life photo gallery",
  alternates: {
    canonical: "https://www.nsshsskavalam.in/gallery",
  },
  openGraph: {
    title: "Gallery | NSS Higher Secondary School Kavalam",
    description:
      "A visual glimpse into life at NSS HSS Kavalam — events, sports, culture, and more.",
    url: "https://www.nsshsskavalam.in/gallery",
    siteName: "NSS Higher Secondary School Kavalam",
    images: [
      {
        url: "https://www.nsshsskavalam.in/images/nss.png",
        width: 1200,
        height: 630,
        alt: "Gallery — NSS Higher Secondary School Kavalam",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | NSS Higher Secondary School Kavalam",
    description:
      "Photo gallery of events and activities at NSS HSS Kavalam, Alappuzha, Kerala.",
    images: ["https://www.nsshsskavalam.in/images/nss.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <Gallery />;
}
