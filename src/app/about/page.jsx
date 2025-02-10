import About from '@widgets/Common/About'
import React from 'react'

export const metadata = {
  title: "About Us | NSS Higher Secondary School Kavalam",
  description: "Learn more about NSS Higher Secondary School Kavalam, its history, legacy, and educational contributions to the region. Established in 1927, it offers high-quality education to the students of Kavalam and surrounding areas.",
  keywords: "NSS Higher Secondary School, Kavalam, Kerala, education, history, academic excellence, NSS, Kavalam School, educational legacy",
  openGraph: {
    title: "About Us | NSS Higher Secondary School Kavalam",
    description: "Discover the history and legacy of NSS Higher Secondary School in Kavalam, Alappuzha, Kerala. Offering quality education since 1927.",
    url: "https://www.yoursite.com/about", // Replace with actual URL
    site_name: "NSS Higher Secondary School Kavalam",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <div className="flex items-center justify-center pt-[50px] lg:pt-0">
      <About />
    </div>
  );
}
