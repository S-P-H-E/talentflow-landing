import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple pricing: $29/month with a 30-day free trial.",
};

export default function Pricing() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-semibold text-center">Pricing</h1>
      <p className="text-[var(--description)] text-center mt-3">
        Start your 30-day free trial. Then just $29/month.
      </p>

      <div className="mt-12 grid">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--gray-background)] p-8 md:p-10">
          <h2 className="text-2xl font-semibold">Solo</h2>
          <p className="text-[var(--description)] mt-2">Perfect for getting started</p>

          <div className="mt-6 flex items-baseline gap-2">
            <span className="text-5xl font-semibold">$29</span>
            <span className="text-[var(--description)]">/month</span>
          </div>

          <ul className="mt-6 space-y-2 text-sm">
            <li>30-day free trial</li>
            <li>Unlimited job postings</li>
            <li>AI-powered candidate screening</li>
            <li>Email support</li>
          </ul>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-block bg-[var(--foreground)] text-[var(--background)] rounded-xl font-semibold shadow-lg cursor-pointer hover:scale-105 transition-all px-6 py-3"
            >
              Start free trial
            </Link>
          </div>

          <p className="text-[var(--description)] text-xs mt-4">
            By starting a trial, you agree to our <Link href="/terms" className="underline">Terms</Link> and <Link href="/policy" className="underline">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}