import Committee from "@widgets/Committee";
import React from "react";

export const metadata = {
  title: "School Management Committee | NSS Higher Secondary School Kavalam",
  description:
    "Meet the School Management Committee of NSS HSS Kavalam for the academic year 2024–25, overseeing the school's academic and administrative excellence.",
  keywords:
    "school management committee NSS Kavalam, NSS HSS Kavalam committee 2024-25, PTA committee Kerala school, school administration Alappuzha",
  alternates: {
    canonical: "https://www.nsshsskavalam.in/committee",
  },
  openGraph: {
    title: "School Management Committee | NSS Higher Secondary School Kavalam",
    description:
      "School Management Committee 2024–25 of NSS HSS Kavalam, Alappuzha, Kerala.",
    url: "https://www.nsshsskavalam.in/committee",
    siteName: "NSS Higher Secondary School Kavalam",
    images: [
      {
        url: "https://www.nsshsskavalam.in/images/nss.png",
        width: 1200,
        height: 630,
        alt: "Committee of NSS Higher Secondary School Kavalam",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "School Management Committee | NSS Higher Secondary School Kavalam",
    description:
      "School Management Committee 2024–25 of NSS HSS Kavalam, Alappuzha, Kerala.",
    images: ["https://www.nsshsskavalam.in/images/nss.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <Committee />;
}
