import React from "react";

export default function Content() {
  return (
    <div className="min-h-[70vh] px-5vw">
      <div className="flex flex-col items-center justify-center">
        <img src="/images/gifs/404.gif" className="h-full w-[30vw]" />
        <a href="/">
          <button className="px-6 py-2 rounded-lg bg-primary text-white">Return to Home</button>
        </a>
      </div>
    </div>
  );
}
