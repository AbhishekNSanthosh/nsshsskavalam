import Gallery from '@widgets/Gallery'
import React from 'react'

export const metadata = {
  title: "Gallery | NSS Higher Secondary School Kavalam",
  description: "Explore the vibrant gallery of NSS Higher Secondary School Kavalam. Discover memorable moments from school events, cultural activities, sports, and much more.",
  keywords: "gallery, NSS Higher Secondary School, Kavalam, Kerala, school events, cultural activities, sports, student life, photo gallery",
  openGraph: {
    title: "Gallery | NSS Higher Secondary School Kavalam",
    description: "View the stunning gallery showcasing the best moments at NSS Higher Secondary School Kavalam. A visual representation of the school's academic, cultural, and sports activities.",
    url: "https://nsshsskavalam.in/gallery", // Replace with your actual URL
    site_name: "NSS Higher Secondary School Kavalam",
    images: [
      {
        url: "https://nsshsskavalam.in/images/gallery-banner.jpg", // Replace with actual gallery image URL
        width: 1200,
        height: 630,
        alt: "Gallery of NSS Higher Secondary School Kavalam"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nsshsskavalam", // Replace with your actual Twitter handle
    title: "Gallery | NSS Higher Secondary School Kavalam",
    description: "Check out the gallery of NSS Higher Secondary School Kavalam and relive the best moments from our events and activities.",
    image: "https://nsshsskavalam.in/images/gallery-banner.jpg", // Replace with actual image URL
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <Gallery />
}
