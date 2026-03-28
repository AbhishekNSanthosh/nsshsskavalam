import Academics from "@widgets/Academics";
import React from "react";

export const metadata = {
  title: "Academics | NSS Higher Secondary School Kavalam",
  description:
    "Explore the academic streams at NSS HSS Kavalam — Science, Humanities, and Commerce — under the Kerala Board of Higher Secondary Education. School Code: 04066.",
  keywords:
    "academics NSS HSS Kavalam, science stream Kavalam, humanities stream Kerala, commerce stream higher secondary, Kerala higher secondary education, NSS school 04066",
  alternates: {
    canonical: "https://www.nsshsskavalam.in/academics",
  },
  openGraph: {
    title: "Academics | NSS Higher Secondary School Kavalam",
    description:
      "Science, Humanities, and Commerce streams offered at NSS HSS Kavalam under the Kerala Board of Higher Secondary Education.",
    url: "https://www.nsshsskavalam.in/academics",
    siteName: "NSS Higher Secondary School Kavalam",
    images: [
      {
        url: "https://www.nsshsskavalam.in/images/nss.png",
        width: 1200,
        height: 630,
        alt: "Academics at NSS Higher Secondary School Kavalam",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Academics | NSS Higher Secondary School Kavalam",
    description:
      "Science, Humanities, and Commerce streams at NSS HSS Kavalam, Alappuzha, Kerala.",
    images: ["https://www.nsshsskavalam.in/images/nss.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <Academics />;
}
