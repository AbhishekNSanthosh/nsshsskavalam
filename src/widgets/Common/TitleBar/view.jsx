import React from "react";

export default function TitleBar({ title }) {
  return (
    <div className="flex flex-col items-start gap-2">
      <h2 className="text-2xl md:text-4xl font-bold text-font-primary">{title}</h2>
      <div className="w-10 h-1 rounded-full bg-primary" />
    </div>
  );
}
