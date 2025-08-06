import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 h-[100dvh]">
      <h1 className="text-4xl font-bold">Not Found</h1>
      <p className="text-lg">The page you are looking for does not exist.</p>
      <Link href="/" className="font-semibold underline">Go back to the home page</Link>
    </div>
  );
}