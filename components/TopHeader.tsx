import React from "react";

function TopHeader() {
  return (
    <section className="w-full h-[60px] sm:h-[48px] bg-[#000000]">
      <div className="flex flex-row justify-center items-center text-[#fafafa]">
        <div className="flex md:flex-row w-full max-w-screen-xl gap-8 justify-center items-center p-1 sm:p-3 md:p-1">
          <p className="font-Poppins text-[10px] md:text-[14px] font-normal leading-[21px] text-center md:text-left">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <button className="w-[100px] h-[30px] md:w-[120px] md:h-[36px] font-poppins text-[10px] md:text-[14px] font-semibold text-center underline">
            Shop Now
          </button>
        </div>

        <div className="md:mr-20 w-[100px] h-[30px] md:w-[120px] md:h-[36px] font-poppins text-[10px] md:text-[14px] font-normal text-center">
          <button className="w-[100px] h-[30px] md:w-[120px] md:h-[36px] font-poppins text-[10px] md:text-[14px] font-normal text-center">
            English v
          </button>
        </div>
      </div>
    </section>
  );
}

export default TopHeader;
