import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function Brands() {
    const brands = [
        "/brands/amazon.svg",
        "/brands/openai.svg",
        "/brands/github.svg",
        "/brands/vercel.png",
        "/brands/meta.svg",
        "/brands/anthropic.png",
        "/brands/coinbase.png",
        "/brands/dell.png",
        "/brands/siemens.svg",
    ]
    return (
        <div className="w-full max-w-[900px] mx-auto px-4 py-10 md:px-4 md:py-10">
            <h1 className="text-center text-[var(--description)] text-sm font-semibold uppercase">We use the same frameworks as</h1>
            <div className="w-full py-10">
            <Marquee gradient={true} gradientColor="var(--background)">
                <div className="flex items-center gap-12">
                {brands.map((brand, i)=>(
                    <div key={i}>
                        <Image src={brand} alt="brand" width="100" height="0" className='brightness-0 mr-10 w-[100px] h-[25px] object-contain select-none' />
                    </div>
                ))}
                </div>
            </Marquee>
            </div>
        </div>
    )
}