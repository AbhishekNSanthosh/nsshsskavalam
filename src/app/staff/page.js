import Staff from '@widgets/Staff'
import React from 'react'

export const metadata = {
  title: "Staff Details | NSS Higher Secondary School Kavalam",
  description: "Meet the dedicated staff members of NSS Higher Secondary School Kavalam, including teachers, administrative staff, and support staff who contribute to the school's academic excellence.",
  keywords: "staff details, NSS Higher Secondary School, Kavalam, Kerala, teaching staff, administrative staff, school faculty, NSS Kavalam team",
  openGraph: {
    title: "Staff Details | NSS Higher Secondary School Kavalam",
    description: "Get to know the talented staff members at NSS Higher Secondary School Kavalam, from academic instructors to administrative personnel.",
    url: "https://nsshsskavalam.in/staff", // Replace with your actual URL
    site_name: "NSS Higher Secondary School Kavalam",
    images: [
      {
        url: "https://nsshsskavalam.in/images/staff-banner.jpg", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Staff Members at NSS Higher Secondary School Kavalam"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nsshsskavalam", // Replace with your actual Twitter handle
    title: "Staff Details | NSS Higher Secondary School Kavalam",
    description: "Explore the staff details at NSS Higher Secondary School Kavalam and learn about the team of dedicated professionals working to support student success.",
    image: "https://nsshsskavalam.in/images/staff-banner.jpg", // Replace with actual image URL
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <Staff/>
  )
}
