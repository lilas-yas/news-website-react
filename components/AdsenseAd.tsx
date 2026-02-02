"use client";

import { useEffect } from "react";

type Props = {
  adSlot: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
};

export default function AdsenseAd({
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
}: Props) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-5313554185887378"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={
        fullWidthResponsive ? "true" : "false"
      }
    />
  );
}
