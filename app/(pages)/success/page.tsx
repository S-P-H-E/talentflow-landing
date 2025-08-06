import { Metadata } from "next";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Success"
};

export default function Success() {
  return (
    <div className="flex flex-col justify-center items-center h-[100dvh] gap-6">
      <div className="text-center">
        <h1 className="font-semibold text-lg mb-4">TALENT<span className="font-thin">FLOW</span></h1>
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 max-w-md">
          <div className="text-green-600 text-5xl mb-4 w-fit mx-auto">
          <FaCheck />
          </div>
          <h2 className="text-2xl font-semibold text-green-800 mb-2">You&apos;re In!</h2>
          <p className="text-green-700 mb-6">
            Thanks for joining our waitlist! We&apos;ll notify you as soon as early access is available.
          </p>
          <Link 
            href="/"
            className="inline-block bg-[var(--foreground)] text-[var(--background)] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}