import Academics from '@widgets/Academics'
import React from 'react'

export const metadata = {
  title: "Academics | NSS Higher Secondary School Kavalam",
  description: "Explore the academic offerings at NSS Higher Secondary School Kavalam, including courses, subjects, and educational programs designed to foster student growth and excellence.",
  keywords: "academics, NSS Higher Secondary School, Kavalam, Kerala, education, courses, academic programs, high school education, higher secondary education",
  openGraph: {
    title: "Academics | NSS Higher Secondary School Kavalam",
    description: "Discover the academic programs and courses offered at NSS Higher Secondary School Kavalam, designed to nurture the intellectual and personal growth of students.",
    url: "https://nsshsskavalam.in/academics", // Updated with your domain
    site_name: "NSS Higher Secondary School Kavalam",
    images: [
      {
        url: "https://nsshsskavalam.in/images/academics-banner.jpg", // Replace with an actual image URL on your server
        width: 1200,
        height: 630,
        alt: "Academics at NSS Higher Secondary School Kavalam"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nsshsskavalam", // Replace with your actual Twitter handle
    title: "Academics | NSS Higher Secondary School Kavalam",
    description: "Learn about the academic programs offered at NSS Higher Secondary School Kavalam, tailored to provide quality education.",
    image: "https://nsshsskavalam.in/images/academics-banner.jpg", // Replace with an actual image URL
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <Academics />
  )
}
