"use client";
import { useState } from "react";
import { highSchoolStaff, teachingStaffDetails } from "@utils/utils";
import TitleBar from "@widgets/Common/TitleBar";
import React from "react";

export default function Content() {
  const [currentSection, setCurrentSection] = useState("higherSecondary");

  // Data for the respective sections
  const higherSecondaryStaff = teachingStaffDetails.filter(
    (staff) => staff.level === "higherSecondary"
  );
  const highSchoolUPStaff = highSchoolStaff?.details || [];

  return (
    <div className="px-[5vw] py-8 flex flex-col items-center justify-center pt-[100px] lg:pt-0">
      <div className="flex flex-col gap-8">
        <TitleBar title={"Staff"} />
        <div className="flex" data-aos="fade-up">
          <p className="text-base md:text-lg">
            The teaching faculty of NSSPS forms a tremendous task force
            comprising of around 50. <br />
            <br /> They are highly qualified and well-equipped to handle their
            respective classes. Every year, faculty improvement programmes are
            arranged in order to make the teachers aware of the developments
            occurring in the field of education and to keep them abreast of the
            advances in the field of educational technology. <br />
            <br /> Our school has various clubs functioning under the able
            guidance of the teachers. The students and teachers work together to
            make the Cultural Fest, Sports Meet, Fun Streak and the Annual day
            programme a grand success. The smooth conduct of the daily
            activities is ensured by the non-teaching staffs who work
            round-the-clock with precision and meticulous care.
            <br />
            <br />
            The staff members function as a single unit to fulfill the mission
            of our school.
          </p>
        </div>
        {/* Section selector */}
        <div className="flex flex-col gap-8 items-center justify-center mt-4" data-aos="fade-up">
          <div className="flex gap-4 md:gap-8">
            <button
              onClick={() => setCurrentSection("higherSecondary")}
              className={`${
                currentSection === "higherSecondary"
                  ? "text-primary font-bold border-b-4 border-primary"
                  : "text-gray-500"
              } pb-2 transition duration-300 text-sm md:text-base`}
            >
              Higher Secondary
            </button>
            <button
              onClick={() => setCurrentSection("highSchoolUP")}
              className={`${
                currentSection === "highSchoolUP"
                  ? "text-primary font-bold border-b-4 border-primary"
                  : "text-gray-500"
              } pb-2 transition duration-300 text-sm md:text-base`}
            >
              High School & UP
            </button>
          </div>

          {/* Conditional table rendering based on selected section */}
          <div className="flex w-[90vw] md:w-[60vw] items-center justify-center">
            <div className="w-full flex-1 flex flex-col gap-6 items-center justify-center">
              <table className="w-full bg-white shadow-lg border-collapse rounded-lg overflow-hidden text-xs md:text-sm lg:text-base">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 md:px-6 py-3 text-left font-semibold text-gray-700">
                      Name
                    </th>
                    <th className="px-4 md:px-6 py-3 text-left font-semibold text-gray-700">
                      Designation
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {currentSection === "higherSecondary" &&
                    teachingStaffDetails.map((detail, index) => (
                      <tr
                        key={`${detail?.name}_${index}`}
                        className="even:bg-gray-50"
                      >
                        <td className="px-4 md:px-6 py-2 md:py-4 text-gray-800 capitalize">
                          {detail?.name}
                        </td>
                        <td className="px-4 md:px-6 py-2 md:py-4 text-gray-800">
                          {detail?.designation}
                        </td>
                      </tr>
                    ))}

                  {currentSection === "highSchoolUP" &&
                    highSchoolUPStaff.map((detail, index) => (
                      <tr
                        key={`${detail?.name}_${index}`}
                        className="even:bg-gray-50"
                      >
                        <td className="px-4 md:px-6 py-2 md:py-4 text-gray-800 capitalize">
                          {detail?.name}
                        </td>
                        <td className="px-4 md:px-6 py-2 md:py-4 text-gray-800">
                          {detail?.designation}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
