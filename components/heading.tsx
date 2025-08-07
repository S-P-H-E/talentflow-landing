"use client"
import { useFeatureFlagVariantKey } from "posthog-js/react";

export default function Heading() {
    const variant = useFeatureFlagVariantKey('waitlist-header-conversion')
    
  return (
    <div className="motion-delay-200 motion-opacity-in-0 motion-translate-y-in-150">
        <h1 className={`text-6xl font-semibold text-center ${variant === 'control' ? '' : 'hidden'}`}>
        <span className="font-extralight">GET EARLY</span> ACCESS
        </h1>
        <h1 className={`text-6xl font-semibold text-center ${variant === 'headerTwo' ? '' : 'hidden'}`}>
        <span className="font-extralight">JOIN THE </span> WAITLIST
        </h1>
        <h1 className={`text-6xl font-semibold text-center ${variant === 'headerThree' ? '' : 'hidden'}`}>
        <span className="font-extralight">UNLOCK AI HIRING</span> TODAY
        </h1>
        <h1 className={`text-6xl font-semibold text-center ${!variant ? '' : 'hidden'}`}>
        <span className="font-extralight">TRANSFORM YOUR</span> HIRING
        </h1>
    </div>
  );
}