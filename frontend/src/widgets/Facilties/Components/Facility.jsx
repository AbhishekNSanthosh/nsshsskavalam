import React from "react";

export default function Facility({ title, description }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="">
        <span className="text-primary-400 text-xl font-medium uppercase">
          {title}
        </span>
      </div>
      <div className="">
        {description.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index !== description.split("\n").length - 1 && <br />}{" "}
            {/* Add <br> except after the last line */}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
