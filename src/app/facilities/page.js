import Facilities from '@widgets/Facilties'
import React from 'react'

export const metadata = {
  title: "Facilities | NSS Higher Secondary School Kavalam",
  description: "Explore the state-of-the-art facilities available at NSS Higher Secondary School Kavalam. Our campus is equipped with modern amenities to provide the best learning environment for students.",
  keywords: "facilities, NSS Higher Secondary School, Kavalam, Kerala, school facilities, classrooms, sports, library, labs, campus",
  openGraph: {
    title: "Facilities | NSS Higher Secondary School Kavalam",
    description: "Discover the excellent facilities at NSS Higher Secondary School Kavalam. Our campus offers well-equipped classrooms, sports facilities, libraries, and more to enhance student learning and development.",
    url: "https://nsshsskavalam.in/facilities", // Updated with your domain
    site_name: "NSS Higher Secondary School Kavalam",
    images: [
      {
        url: "https://nsshsskavalam.in/images/facilities-banner.jpg", // Replace with actual facilities page image URL
        width: 1200,
        height: 630,
        alt: "Facilities at NSS Higher Secondary School Kavalam"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nsshsskavalam", // Replace with your actual Twitter handle
    title: "Facilities | NSS Higher Secondary School Kavalam",
    description: "Learn about the top-class facilities offered at NSS Higher Secondary School Kavalam to support student growth and learning.",
    image: "https://nsshsskavalam.in/images/facilities-banner.jpg", // Replace with actual image URL
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <Facilities />
}
