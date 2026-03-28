"use client";

import React from "react";
import Image from "next/image";
import TitleBar from "@widgets/Common/TitleBar";
import { galleryImages } from "../../../common/Utils/utils";
import { MdPhotoLibrary } from "react-icons/md";

const Gallery = () => {
  return (
    <div className="flex flex-col px-[5vw] py-8 pt-6 lg:pt-8 gap-8">
      {/* Header */}
      <div className="flex flex-col gap-6">
        <TitleBar title={"Gallery"} />
        <div className="flex items-center justify-between flex-wrap gap-3">
          <p className="text-base text-font-secondary leading-relaxed max-w-xl">
            A glimpse into school life at NSS HSS Kavalam — capturing moments
            from cultural events, sports, academics, and community activities.
          </p>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100">
            <MdPhotoLibrary className="text-primary text-base" />
            <span className="text-xs font-semibold text-primary">
              {galleryImages.length} Photos
            </span>
          </div>
        </div>
      </div>

      {/* Masonry gallery */}
      <div className="gallery">
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className={`image-container rounded-xl overflow-hidden ${
              src?.isLarge ? "tall" : ""
            }`}
          >
            <Image
              src={src.imgPath}
              alt={`NSS HSS Kavalam — Photo ${index + 1}`}
              width={1000}
              height={1000}
              className="image rounded-xl h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
