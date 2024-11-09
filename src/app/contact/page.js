import Contact from '@widgets/Contact'
import React from 'react'

export const metadata = {
  title: "Contact Us | NSS Higher Secondary School Kavalam",
  description: "Get in touch with NSS Higher Secondary School Kavalam for inquiries, feedback, and support. We are here to assist you.",
  keywords: "contact, NSS Higher Secondary School, Kavalam, Kerala, school contact, inquiries, feedback, support, education",
  openGraph: {
    title: "Contact Us | NSS Higher Secondary School Kavalam",
    description: "Reach out to NSS Higher Secondary School Kavalam for any inquiries or support. Our team is here to help with your academic needs.",
    url: "https://nsshsskavalam.in/contact", // Updated with your domain
    site_name: "NSS Higher Secondary School Kavalam",
    images: [
      {
        url: "https://nsshsskavalam.in/images/contact-banner.jpg", // Replace with actual contact page image URL
        width: 1200,
        height: 630,
        alt: "Contact NSS Higher Secondary School Kavalam"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nsshsskavalam", // Replace with your actual Twitter handle
    title: "Contact Us | NSS Higher Secondary School Kavalam",
    description: "Contact NSS Higher Secondary School Kavalam for any questions, support, or information related to our programs.",
    image: "https://nsshsskavalam.in/images/contact-banner.jpg", // Replace with actual image URL
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <Contact />
}
