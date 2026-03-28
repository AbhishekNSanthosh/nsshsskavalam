import Contact from "@widgets/Contact";
import React from "react";

export const metadata = {
  title: "Contact Us | NSS Higher Secondary School Kavalam",
  description:
    "Contact NSS HSS Kavalam for admissions, enquiries, or feedback. Call 0477 274 6100, email nsshsskavalam04066@gmail.com, or visit us in Kavalam, Alappuzha, Kerala — 688506.",
  keywords:
    "contact NSS HSS Kavalam, NSS school phone number Kavalam, school address Alappuzha Kerala 688506, higher secondary admissions enquiry Kerala",
  alternates: {
    canonical: "https://www.nsshsskavalam.in/contact",
  },
  openGraph: {
    title: "Contact Us | NSS Higher Secondary School Kavalam",
    description:
      "Reach NSS HSS Kavalam at 0477 274 6100 or nsshsskavalam04066@gmail.com. Located in Kavalam, Alappuzha, Kerala — 688506.",
    url: "https://www.nsshsskavalam.in/contact",
    siteName: "NSS Higher Secondary School Kavalam",
    images: [
      {
        url: "https://www.nsshsskavalam.in/images/nss.png",
        width: 1200,
        height: 630,
        alt: "Contact NSS Higher Secondary School Kavalam",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | NSS Higher Secondary School Kavalam",
    description:
      "Contact NSS HSS Kavalam — 0477 274 6100 | Kavalam, Alappuzha, Kerala.",
    images: ["https://www.nsshsskavalam.in/images/nss.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <Contact />;
}
