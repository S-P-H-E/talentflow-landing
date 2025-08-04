import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

export default function Error() {
  return (
    <div className="flex flex-col justify-center items-center h-[100dvh] gap-6">
      <div className="text-center">
        <h1 className="font-semibold text-lg mb-4">TALENT<span className="font-thin">FLOW</span></h1>
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-md">
          <div className="text-red-600 text-5xl mb-4 w-fit mx-auto">
            <FaExclamationTriangle />
          </div>
          <h2 className="text-2xl font-semibold text-red-800 mb-2">Already Registered!</h2>
          <p className="text-red-700 mb-6">
            This email is already on our waitlist. We&apos;ll notify you as soon as early access is available.
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