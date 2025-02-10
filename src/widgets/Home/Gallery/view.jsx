import React from "react";

export default function GalleryView() {
  const images = [
    "/images/moments/gallery.jpeg",
    "/images/moments/gallery1.jpeg",
    "/images/moments/gallery3.jpeg",
    "/images/moments/gallery4.jpeg",
  ];

  return (
    <div className="relative w-full overflow-hidden py-10 space-y-5" data-aos="fade-up">
      <h2 className="text-2xl font-bold text-center mb-6 text-primary">
      Golden Moments
      </h2>
      <div className="w-full flex items-center">
        <div className="flex gap-4 animate-scroll">
          {/* Duplicate images to create an infinite loop effect */}
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`moment-${index}`}
              className="h-60 w-auto rounded-lg shadow-md object-cover"
            />
          ))}
        </div>
      </div>

      {/* Tailwind + Custom CSS for Smooth Infinite Scroll */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } /* Moves only half since images are duplicated */
          }

          .animate-scroll {
            display: flex;
            white-space: nowrap;
            animation: scroll 15s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
