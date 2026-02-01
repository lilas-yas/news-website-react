"use client";

import { useEffect } from "react";

type Props = {
  className?: string;
  slot?: string; // Ad unit slot id (data-ad-slot)
};

export default function AdSlot({
  className,
  slot = "3029779867", // ✅ حطي هون data-ad-slot تبعك
}: Props) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // ignore (adblock / dev)
    }
  }, []);

  return (
    <div className={className} style={{ margin: "24px 0" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", minHeight: 250, width: "100%" }}
        data-ad-client="ca-pub-5313554185887378"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
