"use client";
import { useState } from "react";
import { highSchoolStaff, teachingStaffDetails } from "@utils/utils";
import TitleBar from "@widgets/Common/TitleBar";
import React from "react";
import { HiUsers } from "react-icons/hi";

function getInitials(name) {
  const parts = name.replace(/^(Smt\.|Sri\.|Dr\.)\s*/i, "").trim().split(" ");
  return parts
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

const tabs = [
  { key: "higherSecondary", label: "Higher Secondary" },
  { key: "highSchoolUP", label: "High School & UP" },
];

export default function Content() {
  const [currentSection, setCurrentSection] = useState("higherSecondary");

  const activeData =
    currentSection === "higherSecondary"
      ? teachingStaffDetails
      : highSchoolStaff?.details || [];

  return (
    <div className="px-[5vw] py-8 pt-6 lg:pt-8">
      <div className="flex flex-col gap-8">
        <TitleBar title={"Our Staff"} />

        {/* Intro + stat */}
        <div className="flex flex-col sm:flex-row gap-6 sm:items-start sm:justify-between">
          <p className="text-sm md:text-base text-font-secondary leading-relaxed max-w-2xl">
            The teaching faculty of NSS HSS Kavalam comprises around{" "}
            <strong className="text-font-primary">50 highly qualified</strong>{" "}
            educators committed to nurturing excellence in every student.
          </p>
          <div className="flex-shrink-0 flex items-center gap-3 bg-primary-50 border border-primary-100 rounded-2xl px-4 py-3 w-fit">
            <div className="w-9 h-9 rounded-xl bg-primary-100 flex items-center justify-center">
              <HiUsers className="text-lg text-primary" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-font-primary">50+</span>
              <span className="text-xs text-font-secondary">Staff Members</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setCurrentSection(tab.key)}
              className={`px-4 py-2.5 text-sm font-medium rounded-t-lg -mb-px border-b-2 whitespace-nowrap transition-all duration-200 ${
                currentSection === tab.key
                  ? "text-primary border-primary bg-primary-50"
                  : "text-font-secondary border-transparent hover:text-font-primary hover:border-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Desktop: table | Mobile: cards */}
        <div>
          {/* Table — md and up */}
          <div className="hidden md:block rounded-2xl border border-gray-100 shadow-custom overflow-hidden">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider w-14">
                    #
                  </th>
                  <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Designation
                  </th>
                </tr>
              </thead>
              <tbody>
                {activeData.map((detail, index) => (
                  <tr
                    key={`${detail.name}_${index}`}
                    className="border-b border-gray-50 last:border-0 hover:bg-primary-50/40 transition-colors"
                  >
                    <td className="px-5 py-3.5 text-xs text-gray-400 font-medium tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary-100 text-primary font-bold text-xs flex items-center justify-center flex-shrink-0 select-none">
                          {getInitials(detail.name)}
                        </div>
                        <span className="font-medium text-font-primary capitalize">
                          {detail.name.toLowerCase()}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-font-secondary text-sm">
                      {detail.designation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards — mobile only */}
          <div className="flex md:hidden flex-col gap-3">
            {activeData.map((detail, index) => (
              <div
                key={`${detail.name}_${index}`}
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-white shadow-custom"
              >
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-primary-100 text-primary font-bold text-sm flex items-center justify-center flex-shrink-0 select-none">
                  {getInitials(detail.name)}
                </div>

                {/* Info */}
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="font-semibold text-font-primary text-sm capitalize truncate">
                    {detail.name.toLowerCase()}
                  </span>
                  <span className="text-xs text-font-secondary truncate">
                    {detail.designation}
                  </span>
                </div>

                {/* Serial */}
                <span className="text-xs text-gray-300 font-medium tabular-nums flex-shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
