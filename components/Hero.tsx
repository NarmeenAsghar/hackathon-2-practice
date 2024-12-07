import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="w-full overflow-hidden">
      <div className="md:grid md:grid-rows-1 md:grid-cols-[300px_1fr] flex flex-col h-full md:pb-20">
        <div className="hidden border-r-[0.5px] border-opacity-30 border-[#000000] md:flex flex-col justify-start items-start gap-5 mt-14 ml-6 md:ml-24 md:pt-8 md:mt-0 md:order-1">
          <p className="text-black">Woman`s Fashion</p>
          <p className="text-black">Men`s Fashion</p>
          <p className="text-black">Electronics</p>
          <p className="text-black">Home & Lifestyle</p>
          <p className="text-black">Medicine</p>
          <p className="text-black">Sports & Outdoor</p>
          <p className="text-black">Baby`s & Toys</p>
          <p className="text-black">Groceries & Pets</p>
          <p className="text-black">Health & Beauty</p>
        </div>

        <div className="flex justify-start items-center relative md:left-[70px] order-1 md:order-2 md:top-[24px]">
          <Image
            src="/hero-image.png"
            alt="Hero Image"
            width={892}
            height={344}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
