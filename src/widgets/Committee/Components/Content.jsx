import TitleBar from "@widgets/Common/TitleBar";
import React from "react";
import { managementCommittee } from "@utils/utils";
import { FaPhone, FaUserTie } from "react-icons/fa";
import Link from "next/link";

const roleColors = {
  principal: "bg-orange-100 text-orange-700",
  "senior assistant": "bg-blue-100 text-blue-700",
  "staff secretary": "bg-purple-100 text-purple-700",
  "pta president": "bg-green-100 text-green-700",
  "school vigilant committee": "bg-gray-100 text-gray-700",
};

function getRoleColor(designation) {
  const key = designation.toLowerCase();
  for (const [match, cls] of Object.entries(roleColors)) {
    if (key.includes(match)) return cls;
  }
  return "bg-gray-100 text-gray-700";
}

function getInitials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function Content() {
  return (
    <div className="flex px-[5vw] py-8 w-full pt-6 lg:pt-8">
      <div className="flex flex-col gap-10 w-full">
        <TitleBar title={"Committee"} />

        {/* Section heading */}
        <div className="flex flex-col gap-1">
          <span className="text-lg font-bold text-font-primary">
            School Management Committee
          </span>
          <span className="text-sm text-font-secondary">Academic Year 2024–25</span>
        </div>

        {/* Committee cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {managementCommittee.map((member, index) => (
            <div
              key={`${member.name}_${index}`}
              className="flex flex-col gap-4 p-5 rounded-2xl border border-gray-100 bg-white shadow-custom hover:shadow-md transition-shadow duration-300"
            >
              {/* Avatar + name */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-primary-100 text-primary font-bold text-sm flex items-center justify-center flex-shrink-0 select-none">
                  {getInitials(member.name)}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-semibold text-font-primary text-sm capitalize leading-snug truncate">
                    {member.name.toLowerCase()}
                  </span>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full w-fit mt-0.5 ${getRoleColor(
                      member.designation
                    )}`}
                  >
                    {member.designation}
                  </span>
                </div>
              </div>

              <div className="h-px bg-gray-100" />

              {/* Contact */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-xs text-primary" />
                </div>
                {member.mobNo && member.mobNo !== "--" ? (
                  <Link
                    href={`tel:+91${member.mobNo}`}
                    className="text-sm text-font-secondary hover:text-primary transition-colors"
                  >
                    +91 {member.mobNo}
                  </Link>
                ) : (
                  <span className="text-sm text-gray-400">Not available</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
