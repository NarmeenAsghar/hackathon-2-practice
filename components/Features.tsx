import React from "react";
import Image from "next/image";

function Features() {
  return (
    <section className="w-full flex flex-col justify-center items-center md:items-start md:mb-10 pb-10 overflow-hidden">
      <div className="flex flex-col items-center md:items-start justify-center md:ml-24 mt-10 md:mt-0">
        <Image src="/featured.png" alt="Image" width={100} height={40} />
        <h1 className="font-inter font-semibold text-[28px] sm:text-[36px] leading-[36px] sm:leading-[48px] text-[#000000] text-center sm:text-left mt-4">
          New Arrival
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-3 justify-center mx-4 md:mx-24 gap-2 mt-6 md:mt-10">
        <div className="bg-[#000000] md:row-span-2 h-[605px] sm:h-[735px] md:h-[605px] relative">
          <div className="mt-56">
            <Image src="/playstation.png" alt="Image" width={511} height={511} />
          </div>
          <div className="absolute top-96 left-8 mt-20">
            <h1 className="font-inter text-[24px] leading-6 font-semibold text-[#ffffff]">Playstation 5</h1>
            <p className="mt-4 font-poppins font-normal text-[14px] leading-[21px] text-[#fafafa]">Black and White version of the PS5 <br /> coming out on sale.</p>
            <button className="mt-4 text-[#ffffff] font-poppins leading-medium text-[16px] leading-6 underline">Shop Now</button>
          </div>
        </div>
        <div className="bg-[#0d0d0d] md:col-span-2 h-[301px] sm:h-[235px] md:h-[301px] relative">
          <div className="ml-96 mt-12">
            <Image src="/women-collection.png" alt="Image" width={432} height={286} />
          </div>
          <div className="absolute top-40 sm:top-32 md:top-40 left-8">
            <h1 className="font-inter font-bold text-[24px] leading-6 text-[#fafafa]">Women`s Collections</h1>
            <p className="mt-4 font-poppins font-normal text-[14px] leading-[21px] text-[#fafafa]">Featured woman collections that give you another vibe.</p>
            <button className="mt-4 font-poppins font-medium text-[16px] leading-6 text-[#ffffff] underline">Shop Now</button>
          </div>
        </div>
        <div className="bg-[#000000] h-[297px] relative">
          <div className="mt-12 sm:mt-18 md:mt-12 ml-24 sm:ml-96 md:ml-24">
            <Image src="/featured-speakers.png" alt="Image" width={190} height={221} />
          </div>
          <div className="absolute top-40 left-8">
            <h1 className="font-inter font-bold text-[24px] leading-6 text-[#fafafa]">Speakers</h1>
            <p className="mt-4 font-poppins font-normal text-[14px] leading-[21px] text-[#fafafa]">Amazon wireless speakers</p>
            <button className="mt-4 font-poppins font-medium text-[16px] leading-6 text-[#ffffff] underline">Shop Now</button>
          </div>
        </div>
        <div className="bg-black text-white h-[297px] relative">
          <div className="mt-12 sm:mt-20 md:mt-12 ml-24 sm:ml-96 md:ml-24">
            <Image src="/gucci-perfume.png" alt="Image" width={201} height={203} />
          </div>
          <div className="absolute top-40 left-8 text-white">
            <h1 className="font-inter font-bold text-[24px] leading-6 text-[#fafafa]">Perfume</h1>
            <p className="mt-4 font-poppins font-normal text-[14px] leading-[21px] text-[#fafafa]">GUCCI INTENSE OUD EDP</p>
            <button className="mt-4 font-poppins font-medium text-[16px] leading-6 text-[#ffffff] underline">Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
