import Image from "next/image";
import React from "react";
import TitleBar from "../TitleBar";

export default function About() {
  return (
    <div className="w-full px-5vw py-8">
      <div className="w-full flex flex-col gap-6 md:gap-12 lg:gap-12">
        <TitleBar title={"About Us"} />
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row lg:flex-row">
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
            <p className=" text-base lg:text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
              commodi doloremque tempora eaque dolor, at quod ducimus non id
              perferendis vitae nisi sit voluptates. Quia id odit temporibus
              illum asperiores. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Quis, commodi doloremque tempora eaque dolor, at
              quod ducimus non id perferendis vitae nisi sit voluptates. Quia id
              odit temporibus illum asperiores. <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
              commodi doloremque tempora eaque dolor, at quod ducimus non id
              perferendis vitae nisi sit voluptates. Quia id odit temporibus
              illum asperiores. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Quis, commodi doloremque tempora eaque dolor, at
              quod ducimus non id perferendis vitae nisi sit voluptates. Quia id
              odit temporibus illum asperiores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
