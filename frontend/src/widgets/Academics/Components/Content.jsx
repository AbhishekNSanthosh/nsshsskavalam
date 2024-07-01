import { academics } from "@utils/utils";
import TitleBar from "@widgets/Common/TitleBar";
import React from "react";

export default function Content() {
  return (
    <div className="px-5vw py-8">
      <div className="flex flex-col gap-8">
        <TitleBar title={"Academics"} />
        <div className="w-full flex flex-col gap-4">
          {academics.map((item) => (
            <div className="flex flex-col gap-2">
              <span className="text-xl capitalize font-medium text-primary-400">
                {item?.title}
              </span>
              {item?.desc.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index !== item?.desc.split("\n").length - 1 && <br />}{" "}
                  {/* Add <br> except after the last line */}
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
