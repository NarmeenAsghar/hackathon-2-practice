import React from "react";
import Image from "next/image";

function Buynow() {
  return (
    <section className="w-full flex flex-col justify-center items-center md:mb-20 pb-20">
      <div className="flex md:flex-row flex-col justify-center items-center md:mx-24 p-12 bg-[#000000]">
        <div className="flex flex-col gap-6 justify-center md:items-start items-center order-1">
          <h2 className="font-poppins text-[16px] font-bold leading-5 text-[#00ff66]">
            Catagories
          </h2>
          <h1 className="font-inter font-bold text-[28px] sm:text-[36px] md:text-[48px] leading-[60px] text-[#fafafa]">
            Enhance Your Music Experience
          </h1>
          <div className="flex flex-row justify-center items-center gap-4">
            <div className="flex flex-col justify-center items-center rounded-full p-2 px-3 bg-[#ffffff] text-[#000000]">
              <h1 className="font-poppins text-[16px] leading-5 font-bold">
                23
              </h1>
              <p className="font-poppins text-[11px] leading-[18px]">Hours</p>
            </div>

            <div className="flex flex-col justify-center items-center rounded-full p-2 px-4 bg-[#ffffff] text-[#000000]">
              <h1 className="font-poppins text-[16px] leading-5 font-bold">
                05
              </h1>
              <p className="font-poppins text-[11px] leading-[18px]">Days</p>
            </div>

            <div className="flex flex-col justify-center items-center rounded-full p-2 px-2 bg-[#ffffff] text-[#000000]">
              <h1 className="font-poppins text-[16px] leading-5 font-bold">
                59
              </h1>
              <p className="font-poppins text-[11px] leading-[18px]">Minutes</p>
            </div>

            <div className="flex flex-col justify-center items-center rounded-full p-2 px-2 bg-[#ffffff] text-[#000000]">
              <h1 className="font-poppins text-[16px] leading-5 font-bold">
                35
              </h1>
              <p className="font-poppins text-[11px] leading-[18px]">Seconds</p>
            </div>
          </div>
          <button className="rounded-[4px] w-[171px] h-[56px] bg-[#00ff66] px-4 py-2 text-[16px] font-poppins font-bold leading-4 text-[#fafafa]">
            Buy Now!
          </button>
        </div>
        <div className="order-2">
          <Image src="/buynow-image.png" alt="Image" width={600} height={420} />
        </div>
      </div>
    </section>
  );
}

export default Buynow;
