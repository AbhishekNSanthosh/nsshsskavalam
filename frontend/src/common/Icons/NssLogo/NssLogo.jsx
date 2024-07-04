import React from "react";
import Image from "next/image";

export const NssLogo = () => {
  return (
    <div>
      <Image
        src={"/images/nssOrangeLogo.webp"}
        height={1000}
        width={1000}
        className="w-10 md:w-16 lg:16"
		alt="nsshsskavalam"
      />
    </div>
  );
};
