import TitleBar from "@widgets/Common/TitleBar";
import React from "react";
import { facilities } from "@utils/utils";
import { MdOutlineClass, MdComputer } from "react-icons/md";
import { FaBook, FaFlask } from "react-icons/fa";

const facilityMeta = [
  {
    Icon: MdOutlineClass,
    bg: "bg-blue-50",
    iconColor: "text-blue-500",
    borderColor: "border-blue-100",
    accentBar: "bg-blue-400",
  },
  {
    Icon: FaBook,
    bg: "bg-amber-50",
    iconColor: "text-amber-500",
    borderColor: "border-amber-100",
    accentBar: "bg-amber-400",
  },
  {
    Icon: FaFlask,
    bg: "bg-purple-50",
    iconColor: "text-purple-500",
    borderColor: "border-purple-100",
    accentBar: "bg-purple-400",
  },
  {
    Icon: MdComputer,
    bg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    borderColor: "border-emerald-100",
    accentBar: "bg-emerald-400",
  },
];

export default function Content() {
  return (
    <div className="px-[5vw] py-8 pt-6 lg:pt-8">
      <div className="flex flex-col gap-10">
        <TitleBar title={"Facilities"} />

        <p className="text-base text-font-secondary leading-relaxed max-w-2xl">
          Our campus is equipped with modern amenities that create the ideal
          environment for academic excellence, creativity, and holistic student
          development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facilities.map((facility, index) => {
            const { Icon, bg, iconColor, borderColor, accentBar } =
              facilityMeta[index] || facilityMeta[0];
            return (
              <div
                key={facility.title + "_" + index}
                className={`relative flex flex-col gap-5 p-6 rounded-2xl border bg-white shadow-custom hover:shadow-md transition-shadow duration-300 overflow-hidden ${borderColor}`}
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${accentBar}`} />

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mt-1 ${bg}`}
                >
                  <Icon className={`text-2xl ${iconColor}`} />
                </div>

                {/* Title */}
                <span className="text-base font-bold text-font-primary uppercase tracking-wide">
                  {facility.title}
                </span>

                <div className="h-px bg-gray-100" />

                {/* Description */}
                <p className="text-sm text-font-secondary leading-relaxed">
                  {facility.desc.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i !== facility.desc.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
