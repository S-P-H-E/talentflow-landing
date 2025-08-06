"use client"
import addToWaitlist from "@/lib/actions";
import clsx from "clsx";
import { useState } from "react";
import { PulseLoader } from "react-spinners";

export default function Form() {
  const [loading, setLoading] = useState(false)

  return (
    <form action={addToWaitlist} onSubmit={() => setLoading(true)} className="flex gap-4 items-center">
        <input type="email" name="email" className="outline-none md:w-xs border px-5 py-4 rounded-2xl border-[var(--border)] bg-[var(--gray-background)]" placeholder="your@email.com" required autoFocus/>
        <button type="submit" disabled={loading} className={clsx(loading ? "flex gap-2 items-center justify-center w-[130px] h-[50px]" :  "w-[130px] py-4", "bg-[var(--foreground)] text-[var(--background)] rounded-xl font-semibold shadow-lg cursor-pointer  hover:scale-105 transition-all")}>
            {loading ? (
            <>
                <PulseLoader color='white' size={5}/>
            </>  
            ): "Join waitlist"}
        </button>
    </form>
  );
}