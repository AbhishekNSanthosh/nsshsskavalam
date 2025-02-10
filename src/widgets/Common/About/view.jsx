"use client"
import Image from "next/image";
import React, { useState } from "react";
import TitleBar from "../TitleBar";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const aboutText = `NSS HSS Kavalam, situated in the picturesque Kuttanad region along the Pampa River, boasts a distinguished legacy that dates back to 1927. The esteemed Chalayil family, recognizing the community's need for quality education, established a UP school for the residents of Kavalam. With Sri K.P. Panicker as manager and Headmaster Sri T.K. Parameswaran providing dedicated leadership, the institution thrived. Their steadfast efforts, along with the support of Sri Mannath Padmanabhan, founder of the Nair Service Society, culminated in the school coming under the esteemed NSS management.

Thanks to the contributions of Nair Service Society, Sri T.K. Parameswaran Pillai, and the unwavering support of the Chalayil family, the school was elevated to high school status, thereby offering crucial educational opportunities to the surrounding communities. Since then, the school has been in the capable hands of the NSS management.

Residents from villages such as Narakathara, Chennamkary, Kavalam, Veliyanadu, Kunnumma, Cherukara, Lisieux, and Kayalpuram were able to complete their high school education at this institution, which, at the time, was the only high school in the northern region, serving a growing number of students.

Notable alumni, including the renowned scholar Sri Kavalam Ayyappa Panicker, the distinguished author Sri Kavalam Viswanatha Kurup, and many other prominent figures in social, cultural, and educational fields, have emerged from NSS HSS Kavalam. In 2000, the school was further upgraded to a higher secondary school, reinforcing its reputation for academic excellence.

Today, NSS HSS Kavalam stands as a cornerstone of education in the region, continuing to play a vital role in preserving and promoting the rich cultural heritage of Kavalam.`;

  const truncatedText = aboutText.slice(0, 1050);

  // Function to convert newlines to <br />
  const renderTextWithLineBreaks = (text) => {
    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="w-full px-5vw py-8">
      <div className="w-full flex flex-col gap-6 md:gap-12 lg:gap-12">
        <TitleBar title={"About Us"} />
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row lg:flex-row" data-aos="fade-up">
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex">
              <Image
                className="object-cover w-full h-60 rounded-lg pointer-events-none"
                src={"/images/banner.webp"}
                height={2000}
                width={2000}
                alt="nsshsskavalam"
              />
            </div>
            <div className="flex gap-2">
              <div className="">
                <Image
                  className="object-cover h-52 rounded-lg pointer-events-none"
                  src={"/images/banner.webp"}
                  height={500}
                  width={500}
                  alt="nsshsskavalam"
                />
              </div>
              <div className="">
                <Image
                  className="object-cover h-52 rounded-lg pointer-events-none"
                  src={"/images/banner.webp"}
                  height={500}
                  width={500}
                  alt="nsshsskavalam"
                />
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-start gap-4">
            <span className="flex text-lg font-bold text-primary lg:text-2xl md:text-2xl">
              NSS HIGHER SECONDARY SCHOOL
            </span>
            <span className="flex text-base font-bold text-font-secondary md:text-xl lg:text-xl">
              Since 1958, Alappuzha, Kavalam P.O
            </span>
            <div className="text-base lg:text-base">
              {isExpanded
                ? renderTextWithLineBreaks(aboutText)
                : renderTextWithLineBreaks(truncatedText + "...")}
            </div>
            <button
              onClick={toggleReadMore}
              className="text-primary mt-4 underline"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
