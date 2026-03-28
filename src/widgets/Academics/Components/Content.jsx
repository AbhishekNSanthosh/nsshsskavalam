import { academics } from "@utils/utils";
import TitleBar from "@widgets/Common/TitleBar";
import React from "react";
import { FaFlask, FaBook, FaChartBar } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";

const streamMeta = [
  {
    Icon: FaFlask,
    bg: "bg-blue-50",
    iconColor: "text-blue-500",
    badge: "Science",
    badgeBg: "bg-blue-100 text-blue-700",
    borderColor: "border-blue-100",
    accentBar: "bg-blue-400",
  },
  {
    Icon: FaBook,
    bg: "bg-purple-50",
    iconColor: "text-purple-500",
    badge: "Humanities",
    badgeBg: "bg-purple-100 text-purple-700",
    borderColor: "border-purple-100",
    accentBar: "bg-purple-400",
  },
  {
    Icon: FaChartBar,
    bg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    badge: "Commerce",
    badgeBg: "bg-emerald-100 text-emerald-700",
    borderColor: "border-emerald-100",
    accentBar: "bg-emerald-400",
  },
];

export default function Content() {
  return (
    <div className="px-[5vw] py-8 pt-6 lg:pt-8">
      <div className="flex flex-col gap-10">
        <TitleBar title={"Academics"} />

        <p className="text-base text-font-secondary leading-relaxed max-w-2xl">
          NSS HSS Kavalam offers a diverse range of academic streams under the
          Kerala Higher Secondary curriculum, designed to cater to every
          student&apos;s interests and career aspirations.
        </p>

        {/* Stream cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {academics.map((item, index) => {
            const { Icon, bg, iconColor, badge, badgeBg, borderColor, accentBar } =
              streamMeta[index] || streamMeta[0];
            return (
              <div
                key={index}
                className={`relative flex flex-col gap-5 p-6 rounded-2xl border bg-white shadow-custom hover:shadow-md transition-shadow duration-300 overflow-hidden ${borderColor}`}
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${accentBar}`} />

                {/* Icon + badge row */}
                <div className="flex items-center justify-between pt-1">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${bg}`}
                  >
                    <Icon className={`text-lg ${iconColor}`} />
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeBg}`}
                  >
                    {badge}
                  </span>
                </div>

                {/* Title */}
                <span className="text-base font-bold text-font-primary capitalize leading-snug">
                  {item.title}
                </span>

                <div className="h-px bg-gray-100" />

                {/* Description */}
                <p className="text-sm text-font-secondary leading-relaxed">
                  {item.desc.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i !== item.desc.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            );
          })}
        </div>

        {/* Info banner */}
        <div className="flex items-start gap-4 p-5 rounded-2xl bg-primary-50 border border-primary-100">
          <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <HiAcademicCap className="text-xl text-primary" />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-semibold text-font-primary">
              Affiliated with Kerala Board of Higher Secondary Education
            </span>
            <span className="text-sm text-font-secondary">
              School Code:{" "}
              <strong className="text-font-primary">04066</strong>
              &nbsp;·&nbsp; Kavalam, Alappuzha District, Kerala — 688506
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
