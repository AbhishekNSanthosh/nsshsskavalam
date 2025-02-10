import TitleBar from "@widgets/Common/TitleBar";
import React from "react";
import { facilities } from "@utils/utils";
import Facility from "./Facility";

export default function Content() {
  return (
    <div className="px-5vw py-8 pt-[80px] lg:pt-10">
      <div className="flex flex-col gap-8">
        <TitleBar title={"Facilities"} />
        <div className="flex flex-col gap-4" data-aos="fade-up">
          {facilities.map((facility, index) => (
            <Facility title={facility?.title} description={facility?.desc}  key={facility?.title+'_'+index}/>
          ))}
        </div>
      </div>
    </div>
  );
}
