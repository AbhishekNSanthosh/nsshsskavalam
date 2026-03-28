import GeneralRules from "@widgets/GeneralRules";
import React from "react";

export const metadata = {
  title: "Rules & Regulations | NSS Higher Secondary School Kavalam",
  description:
    "Read the disciplinary rules and regulations of NSS HSS Kavalam. These guidelines ensure a respectful, orderly, and productive learning environment for all students.",
  keywords:
    "NSS HSS Kavalam rules, school disciplinary rules Kerala, student code of conduct higher secondary, NSS school regulations Alappuzha",
  alternates: {
    canonical: "https://www.nsshsskavalam.in/general-rules",
  },
  openGraph: {
    title: "Rules & Regulations | NSS Higher Secondary School Kavalam",
    description:
      "Disciplinary rules and code of conduct for students of NSS HSS Kavalam, Alappuzha, Kerala.",
    url: "https://www.nsshsskavalam.in/general-rules",
    siteName: "NSS Higher Secondary School Kavalam",
    images: [
      {
        url: "https://www.nsshsskavalam.in/images/nss.png",
        width: 1200,
        height: 630,
        alt: "Rules and Regulations — NSS Higher Secondary School Kavalam",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rules & Regulations | NSS Higher Secondary School Kavalam",
    description:
      "Disciplinary rules for students of NSS HSS Kavalam, Alappuzha, Kerala.",
    images: ["https://www.nsshsskavalam.in/images/nss.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <GeneralRules />;
}
