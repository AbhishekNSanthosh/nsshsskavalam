import React from 'react'

export default function Video() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-10 rounded-lg" data-aos="fade-up">
      <h2 className="text-2xl font-bold text-primary mb-6 text-center">
        Champions of Veliyanadu Subdistrict Kalotsavam
      </h2>
      <div className="w-full max-w-2xl h-auto">
        <iframe
          className="w-full aspect-video rounded-lg shadow-md"
          src="https://www.youtube.com/embed/kSj41OKrQhg"
          title="Champions of Veliyanadu Subdistrict Kalotsavam"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
