"use client";

import { useEffect } from "react";

export default function AdsenseMain() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("Adsense error:", err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-2223224465872155"
      data-ad-slot="1030392439"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
