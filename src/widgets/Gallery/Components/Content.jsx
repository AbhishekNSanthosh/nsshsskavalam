"use client";

import React from "react";
import Image from "next/image";
import TitleBar from "@widgets/Common/TitleBar";
import { galleryImages } from "../../../common/Utils/utils";

// Manually create an array of image paths
// const imagePaths = Array.from({ length: 44 }, (_, i) => `/images/gallery/nss_gallery_images (${i + 1}).webp`);

const Gallery = () => {
  return (
    <div className="flex flex-col px-5vw py-8 gap-8">
      <TitleBar title={"Gallery"} />
      <div className="gallery pointer-events-none">
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className={`image-container  ${src?.isLarge ? "tall" : ""}`}
          >
            {" "}
            {/* Added flex utilities for centering */}
            <Image
              src={src.imgPath}
              alt={`Gallery Image ${index + 1}`}
              width={1000}
              height={1000}
              className={`image rounded-lg h-full w-full bg-center`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
