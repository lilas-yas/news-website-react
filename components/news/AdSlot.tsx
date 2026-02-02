"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface AdSlotProps {
  className?: string;
  slot?: string;
}

export default function AdSlot({ className, slot = "3029779867" }: AdSlotProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  return (
    <div className={cn("w-full my-6 min-h-[250px]", className)}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", minHeight: 250 }}
        data-ad-client="ca-pub-5313554185887378"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
