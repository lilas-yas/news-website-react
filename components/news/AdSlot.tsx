"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  slot?: string;
  // حتى ما ينكسر أي استدعاء قديم كان يمرر ad وهمي
  ad?: any;
};

export function AdSlot({
  className,
  slot = "3029779867",
}: Props) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // تجاهل (adblock / dev)
    }
  }, []);

  return (
    <div className={cn("my-6", className)}>
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

export default AdSlot;
