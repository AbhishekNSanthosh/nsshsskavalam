import Image from "next/image";
import React from "react";

export default function Message() {
  return (
    <div className="w-full flex px-5vw py-20">
      <div className="w-full flex">
        <div className="flex-1 flex flex-col gap-6">
          <div className="w-full">
            <span className="text-4xl font-semibold text-primary">
              Principal's Message
            </span>
          </div>
          <div className="w-full">
            <span className="text-lg font-semibold text-font-primary">
              “Education is not the learning of facts, but the training of the
              mind to think” <br /> - Albert Einstein
            </span>
          </div>
          <div className="w-full">
            <span className="flex text-lg text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus dolores asperiores quia natus, eaque, quos obcaecati
              soluta mollitia officia itaque necessitatibus quisquam nihil
              pariatur! Consequuntur autem dolore facere doloribus eius. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
              dolores asperiores quia natus, eaque, quos obcaecati soluta
              mollitia officia itaque necessitatibus quisquam nihil pariatur!
              Consequuntur autem dolore facere doloribus eius.
              <br />
              <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium quasi optio dolor facilis esse cupiditate ducimus
              provident molestias expedita illum cum delectus quas adipisci quo,
              soluta nihil eum reiciendis tempora. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Accusantium quasi optio dolor
              facilis esse cupiditate ducimus provident molestias expedita illum
              cum delectus quas adipisci quo, soluta nihil eum reiciendis
              tempora.
            </span>
          </div>
        </div>
        <div className="w-full flex flex-1 justify-center">
          <div className="w-96 flex bg-gray-100 items-center justify-center rounded-tl-[40px] rounded-br-[40px]">
            <Image
              className="flex object-contain w-full h-80"
              src={"/images/person.png"}
              height={1000}
              width={1000}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
