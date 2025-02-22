import { faChalkboardTeacher, faComputer, faLaptop, faSchoolCircleCheck, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Content() {
  return (
    <div className="px-5vw py-16">
      <div className="flex flex-col gap-4 md:flex-row lg:flex-row">
        <div className="flex-1 flex flex-col rounded-[8px] bg-white p-8 shadow-custom gap-4">
          <div className="flex w-full items-center justify-center">
            <FontAwesomeIcon icon={faUsers} className="w-10"/>
          </div>
          <div className="w-full">
         <span className="text-3xl font-bold flex items-center justify-center">500+</span>
          </div>
          <div className="w-full">
          <span className="text-2xl flex items-center justify-center">Students</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col rounded-[10px] bg-white p-8 shadow-custom gap-4">
          <div className="flex w-full items-center justify-center">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="w-10"/>
          </div>
          <div className="w-full">
         <span className="text-3xl font-bold flex items-center justify-center">20+</span>
          </div>
          <div className="w-full">
          <span className="text-2xl flex items-center justify-center">Teachers</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col rounded-[10px] bg-white p-8 shadow-custom gap-4">
          <div className="flex w-full items-center justify-center">
            <FontAwesomeIcon icon={faLaptop} className="w-10"/>
          </div>
          <div className="w-full">
         <span className="text-3xl font-bold flex items-center justify-center">10+</span>
          </div>
          <div className="w-full">
          <span className="text-2xl flex items-center justify-center">Digital Class Rooms</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col rounded-[10px] bg-white p-8 shadow-custom gap-4">
          <div className="flex w-full items-center justify-center">
            <FontAwesomeIcon icon={faSchoolCircleCheck} className="w-10"/>
          </div>
          <div className="w-full">
         <span className="text-3xl font-bold flex items-center justify-center">1000+</span>
          </div>
          <div className="w-full">
          <span className="text-2xl flex items-center justify-center">Alumini</span>
          </div>
        </div>

      </div>
    </div>
  );
}
