import Committee from '@widgets/Committee'
import React from 'react'

export const metadata = {
  title: "Committee | NSS Higher Secondary School Kavalam",
  description: "Meet the dedicated members of the NSS Higher Secondary School Kavalam management and faculty committee, working towards shaping the future of education.",
  keywords: "committee, NSS Higher Secondary School, Kavalam, Kerala, school management, school committee, faculty, education leadership, academic committee",
  openGraph: {
    title: "Committee | NSS Higher Secondary School Kavalam",
    description: "Explore the leadership and committee members of NSS Higher Secondary School Kavalam, committed to guiding students towards success.",
    url: "https://nsshsskavalam.in/committee", // Updated with your domain
    site_name: "NSS Higher Secondary School Kavalam",
    images: [
      {
        url: "https://nsshsskavalam.in/images/committee-banner.jpg", // Replace with an actual image URL on your server
        width: 1200,
        height: 630,
        alt: "Committee at NSS Higher Secondary School Kavalam"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nsshsskavalam", // Replace with your actual Twitter handle
    title: "Committee | NSS Higher Secondary School Kavalam",
    description: "Meet the committee members at NSS Higher Secondary School Kavalam, who contribute to shaping the future of education and student development.",
    image: "https://nsshsskavalam.in/images/committee-banner.jpg", // Replace with an actual image URL
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <Committee />
  )
}
