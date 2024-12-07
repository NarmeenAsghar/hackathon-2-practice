import React from "react";
import Image from "next/image";

function Services() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mx-4 md:mx-24 gap-8 md:gap-20 mt-20 mb-20 overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-4">
        <Image src="/Services.png" alt="Image" width={80} height={80} />
        <h1 className="font-poppins text-[20px] font-semibold leading-7 text-[#000000]">
          FREE AND FAST DELIVERY
        </h1>
        <p className="font-poppins font-normal text-[14px] leading-[21px] text-[#000000]">
          Free delivery for all orders over $140
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <Image src="/Services (1).png" alt="Image" width={80} height={80} />
        <h1 className="font-poppins text-[20px] font-semibold leading-7 text-[#000000]]">
          24/7 CUSTOMER SERVICE
        </h1>
        <p className="font-poppins font-normal text-[14px] leading-[21px] text-[#000000]">
          Friendly 24/7 customer support
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <Image src="/Services (2).png" alt="Image" width={80} height={80} />
        <h1 className="font-poppins text-[20px] font-semibold leading-7 text-[#000000]">
          MONEY BACK GUARANTEE
        </h1>
        <p className="font-poppins font-normal text-[14px] leading-[21px] text-[#000000]">
          We reurn money within 30 days
        </p>
      </div>
    </div>
  );
}

export default Services;
