"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  slot?: string;
  ad?: any; // حتى ما ينكسر أي استدعاء قديم
};

export default function AdSlot({
  className,
  slot = "3029779867",
}: Props) {
  const insRef = useRef<HTMLModElement | null>(null);

  useEffect(() => {
    const ins = insRef.current;
    if (!ins) return;

    const tryPush = () => {
      const width = ins.offsetWidth;
      if (width && width > 0) {
        try {
          // @ts-ignore
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {}
        return true;
      }
      return false;
    };

    // جرّب فوراً
    if (tryPush()) return;

    // إذا العرض صفر، راقب تغيّر الحجم وبعدين نفّذ push
    const ro = new ResizeObserver(() => {
      if (tryPush()) ro.disconnect();
    });

    ro.observe(ins);

    return () => ro.disconnect();
  }, []);

  return (
    <div className={cn("my-6 w-full min-h-[250px]", className)}>
      <ins
        ref={insRef}
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
