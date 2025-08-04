import Brands from "@/components/Brands";
import addToWaitlist from "@/lib/actions";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-[100dvh]">
      {/* Form */}
      <div className="h-5/6 flex flex-col justify-center items-center gap-4 mt-30">
        <h1 className="font-semibold text-lg">TALENT<span className="font-thin">FLOW</span></h1>
        <h1 className="text-6xl font-semibold text-center"><span className="font-extralight">GET EARLY</span> ACCESS</h1>
        <p className="text-[var(--description)] px-6 md:p-0 md:w-lg text-center">Be the first to try our AI-powered job application filter that automatically screens candidates and finds your perfect hires!</p>

        <form action={addToWaitlist} className="flex gap-4 border px-5 py-3 rounded-2xl border-[var(--border)] bg-[var(--gray-background)]">
          <input type="email" name="email" className="outline-none md:w-xs" placeholder="your@email.com" required autoComplete="on" autoFocus />
          <button type="submit" className="cursor-pointer hover:scale-105 transition-all bg-[var(--foreground)] text-[var(--background)] px-4 py-2 rounded-xl font-semibold shadow-lg">Join waitlist</button>
        </form>
      </div>

      <Brands />
    </div>
  );
}
