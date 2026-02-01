"use client";

import { useEffect } from "react";

type Props = {
  className?: string;
  slot?: string;
  format?: string;
  responsive?: boolean;
};

export default function AdSlot({
  className,
  slot = "3029779867", // ✅ Ad Slot ID من AdSense
  format = "auto",
  responsive = true,
}: Props) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // تجاهل الأخطاء (adblock / dev)
    }
  }, []);

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", minHeight: 250, width: "100%" }}
        data-ad-client="ca-pub-5313554185887378"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}
