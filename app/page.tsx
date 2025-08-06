import Brands from "@/components/Brands"
import Form from "@/components/form";
import Heading from "@/components/heading";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-[100dvh]">
      {/* Form */}
      <div className="h-5/6 flex flex-col justify-center items-center gap-4 mt-30 motion-opacity-in-0 motion-preset-expand motion-blur-in-xl motion-duration-1500">
        <h1 className="font-semibold text-lg motion-delay-100 motion-opacity-in-0 motion-translate-y-in-150">TALENT<span className="font-thin">FLOW</span></h1>
        {/* A/B/C Testing Headings */}
        <Heading />
        <p className="text-[var(--description)] px-6 md:p-0 md:w-lg text-center motion-delay-300 motion-opacity-in-0 motion-translate-y-in-150">Be the first to try our AI-powered job application filter that automatically screens candidates and finds your perfect hires!</p>

        <div className="motion-delay-500 motion-opacity-in-0 motion-translate-y-in-150">
          <Form />
        </div>
        
      </div>
      <Brands />
    </div>
  );
}
