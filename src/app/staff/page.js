import Staff from "@widgets/Staff";
import React from "react";

export const metadata = {
  title: "Staff | NSS Higher Secondary School Kavalam",
  description:
    "Meet the dedicated teaching and non-teaching staff of NSS HSS Kavalam. Our 50+ faculty members bring expertise across Science, Humanities, Commerce, and more.",
  keywords:
    "NSS HSS Kavalam staff, teaching faculty Kavalam, school teachers Alappuzha Kerala, higher secondary staff, NSS school faculty 04066",
  alternates: {
    canonical: "https://www.nsshsskavalam.in/staff",
  },
  openGraph: {
    title: "Staff | NSS Higher Secondary School Kavalam",
    description:
      "Meet the 50+ dedicated educators and staff of NSS HSS Kavalam, Alappuzha, Kerala.",
    url: "https://www.nsshsskavalam.in/staff",
    siteName: "NSS Higher Secondary School Kavalam",
    images: [
      {
        url: "https://www.nsshsskavalam.in/images/nss.png",
        width: 1200,
        height: 630,
        alt: "Staff of NSS Higher Secondary School Kavalam",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Staff | NSS Higher Secondary School Kavalam",
    description:
      "Meet the dedicated staff of NSS HSS Kavalam, Alappuzha, Kerala.",
    images: ["https://www.nsshsskavalam.in/images/nss.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <Staff />;
}
