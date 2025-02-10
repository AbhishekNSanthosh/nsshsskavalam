import Image from "next/image";
import React from "react";

export default function Content() {
  return (
    <div className="w-full flex px-5vw py-16">
      <div className="w-full flex flex-col md:flex-row lg:flex-row gap-8">
        <div className="flex-1 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className=" text-font-primary font-semibold text-3xl" data-aos="fade-up">
              Our Vision
            </span>
            <div className="flex flex-col gap-2 text-lg" data-aos="fade-up">
              <span className="">
                To inculcate spontaneous willingness to savour pleasant and
                positive thoughts in young minds and enhance the meaning of
                life.
              </span>
              <span className="">
                To address the intellectual, emotional and educational needs of
                the society.
              </span>
              <span className="">
                To widen the mental and intellectual horizon of the younger
                generation nation nation-building
              </span>
              <span className="">
                To enlighten the academic and non-academic endeavours to
                sensitise society.
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className=" text-font-primary font-semibold text-3xl" data-aos="fade-up">
              Our Mission
            </span>
            <div className="flex flex-col gap-2 text-lg" data-aos="fade-up">
              <span className="">To provide quality education</span>
              <span className="">
                To enable the development of total personality through
                co-curricular and extra-curricular activities.
              </span>
              <span className="">
                To extend guidance and consultancy service.
              </span>
              <span className="">
                To motivate achievement of excellence in every field of life.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
