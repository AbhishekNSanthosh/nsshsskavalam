import TitleBar from "@widgets/Common/TitleBar";
import React from "react";
import { DisciplinaryRules } from "../../common/Utils/utils";
import { MdOutlineGavel } from "react-icons/md";
import { HiShieldCheck } from "react-icons/hi";

export default function GeneralRules() {
  return (
    <div className="py-8 px-[5vw] pt-6 lg:pt-8">
      <div className="flex flex-col gap-10">
        <TitleBar title={"Rules & Regulations"} />

        {/* Intro card */}
        <div className="flex items-start gap-4 p-5 rounded-2xl bg-primary-50 border border-primary-100">
          <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <HiShieldCheck className="text-xl text-primary" />
          </div>
          <p className="text-sm text-font-secondary leading-relaxed">
            We expect our students, their parents/guardians and the family
            members concerned to co-operate with us to maintain discipline in
            the school. We believe that no disciplinary action needs to be taken
            against any child, but indiscipline should be nipped in the bud.
          </p>
        </div>

        {/* Section heading */}
        <div className="flex items-center gap-3">
          <MdOutlineGavel className="text-2xl text-primary" />
          <span className="text-xl font-bold text-font-primary">
            Disciplinary Rules
          </span>
        </div>

        {/* Rules list */}
        <div className="flex flex-col gap-3">
          {DisciplinaryRules?.map((rule, index) => (
            <div
              key={`${rule}_${index}`}
              className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-white shadow-custom hover:border-primary-100 hover:bg-primary-50/30 transition-all duration-200"
            >
              {/* Number badge */}
              <div className="w-8 h-8 rounded-full bg-primary text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5 select-none">
                {String(index + 1).padStart(2, "0")}
              </div>
              <p className="text-sm md:text-base text-font-secondary leading-relaxed pt-0.5">
                {rule}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
