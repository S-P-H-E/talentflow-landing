"use client"
import Brands from "@/components/Brands";
import addToWaitlist from "@/lib/actions";
import clsx from "clsx";
import { useState } from "react";
import { PulseLoader } from "react-spinners";
import { useFeatureFlagVariantKey } from 'posthog-js/react'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const variant = useFeatureFlagVariantKey('waitlist-header-conversion')

  return (
    <div className="flex flex-col justify-center items-center h-[100dvh]">
      {/* Form */}
      <div className="h-5/6 flex flex-col justify-center items-center gap-4 mt-30 motion-opacity-in-0 motion-preset-expand motion-blur-in-xl motion-duration-1500">
        <h1 className="font-semibold text-lg motion-delay-100 motion-opacity-in-0 motion-translate-y-in-150">TALENT<span className="font-thin">FLOW</span></h1>
        {/* A/B/C Testing Headings */}
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
        </div>


        <p className="text-[var(--description)] px-6 md:p-0 md:w-lg text-center motion-delay-300 motion-opacity-in-0 motion-translate-y-in-150">Be the first to try our AI-powered job application filter that automatically screens candidates and finds your perfect hires!</p>

        <div className="motion-delay-500 motion-opacity-in-0 motion-translate-y-in-150">
          <form action={addToWaitlist} onSubmit={() => setLoading(true)} className="flex gap-4 border px-5 py-3 rounded-2xl border-[var(--border)] bg-[var(--gray-background)]">
            <input type="email" name="email" className="outline-none md:w-xs" placeholder="your@email.com" required autoFocus/>
            <button type="submit" disabled={loading} className={clsx(loading ? "flex gap-2 items-center justify-center w-[130px] h-[50px]" :  "w-[130px] h-[50px]", "bg-[var(--foreground)] text-[var(--background)] rounded-xl font-semibold shadow-lg cursor-pointer  hover:scale-105 transition-all")}>
              {loading ? (
                <>
                  <PulseLoader color='white' size={5}/>
                </>  
              ): "Join waitlist"}
            </button>
          </form>
        </div>
        
      </div>

      <Brands />
    </div>
  );
}
