import GeneralRules from '@widgets/GeneralRules'
import React from 'react'

export const metadata = {
  title: "Rules and Regulations | NSS Higher Secondary School Kavalam",
  description: "Explore the rules and regulations that govern student life at NSS Higher Secondary School Kavalam. Get to know the expectations for academic and behavioral conduct.",
  keywords: "rules and regulations, NSS Higher Secondary School, Kavalam, Kerala, student code of conduct, school policies, academic rules, behavior standards",
  openGraph: {
    title: "Rules and Regulations | NSS Higher Secondary School Kavalam",
    description: "Read the essential rules and regulations of NSS Higher Secondary School Kavalam, covering academic expectations, student behavior, and school policies.",
    url: "https://nsshsskavalam.in/general-rules", // Replace with your actual URL
    site_name: "NSS Higher Secondary School Kavalam",
    images: [
      {
        url: "https://nsshsskavalam.in/images/rules-banner.jpg", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Rules and Regulations at NSS Higher Secondary School Kavalam"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nsshsskavalam", // Replace with your actual Twitter handle
    title: "Rules and Regulations | NSS Higher Secondary School Kavalam",
    description: "Learn about the rules and regulations at NSS Higher Secondary School Kavalam, ensuring a disciplined and conducive environment for academic success.",
    image: "https://nsshsskavalam.in/images/rules-banner.jpg", // Replace with actual image URL
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <div className=''>
        <GeneralRules/>
    </div>
  )
}
