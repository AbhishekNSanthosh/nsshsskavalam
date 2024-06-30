import React from "react";
import Image from "next/image";

export const NssLogo = () => {
  return (
    <div>
      <Image
        src={"/images/nssOrangeLogo.webp"}
        height={1000}
        width={1000}
        className="h-full w-16"
		alt="nsshsskavalam"
      />
    </div>
  );
};
