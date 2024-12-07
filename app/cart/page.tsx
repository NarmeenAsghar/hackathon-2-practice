import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

function page() {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="flex flex-col gap-20 my-20 mx-6 md:mx-24">
        <div className="flex flex-col gap-10">
          <div className="flex justify-between items-center h-[72px] rounded-sm shadow-[0px_0px_5px_2px_#f5f5f5] px-4 md:px-10">
            <p className="font-poppins font-normal text-[16px] leading-6 text-[#000000]">
              Product
            </p>
            <p className="font-poppins font-normal text-[16px] leading-6 text-[#000000]">
              Price
            </p>
            <p className="font-poppins font-normal text-[16px] leading-6 text-[#000000]">
              Quantity
            </p>
            <p className="font-poppins font-normal text-[16px] leading-6 text-[#000000]">
              SubTotal
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center py-10 md:py-0 gap-4 md:h-[102px] rounded-sm shadow-[0px_0px_5px_2px_#f5f5f5] px-4 md:px-10">
            <div className="flex items-center gap-4 relative">
              <Image src="/LCD.png" alt="Image" width={50} height={50} />
              <p className="absolute -top-2 -left-2 p-[1px] rounded-full bg-[#db4444] text-[#fafafa] text-sm font-bold">
                <RxCross2 />
              </p>
            </div>
            <p className="md:absolute md:left-[200px] font-poppins font-normal text-[16px] leading-6 text-[#000000]">
              LCD Monitor
            </p>
            <p className="font-poppins font-normal text-[16px] leading-6 text-[#000000]">
              $650
            </p>
            <input
              className="text-black w-[80px] px-3 h-[50px] border-[1px] border-[#000000] border-opacity-50 rounded-[4px] item"
              type="number"
              placeholder="01"
            />
            <p className="font-poppins font-normal text-[16px] leading-6 text-[#000000]">
              $650
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center py-10 md:py-0 gap-4 md:h-[102px] rounded-sm shadow-[0px_0px_5px_2px_#f5f5f5] px-4 md:px-10">
            <div className="flex items-center gap-4 relative">
              <Image src="/gamepad.png" alt="Image" width={50} height={50} />
            </div>
            <p className="font-poppins font-normal text-[16px] leading-6 text-[#000000]">
              H1 Gamepad
            </p>
            <p className="font-poppins font-normal text-[16px] leading-6 text-[#000000]">
              $550
            </p>
            <input
              className="text-black w-[80px] px-3 h-[50px] border-[1px] border-[#000000] border-opacity-50 rounded-[4px] item"
              type="number"
              placeholder="02"
            />
            <p className="font-poppins font-normal text-[16px] leading-6 text-[#000000]">
              $1100
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-4">
            <button className="w-full md:w-[218px] h-[56px] rounded-[4px] border-[1px] border-[#000000] border-opacity-50 font-poppins font-medium text-[16px] leading-6">
              Return To Shop
            </button>
            <button className="w-full md:w-[195px] h-[56px] rounded-[4px] border-[1px] border-[#000000] border-opacity-50 font-poppins font-medium text-[16px] leading-6">
              Update Cart
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              className="w-[250px] h-[56px] rounded-[4px] border-[1px] border-[#000000] border-opacity-50 pl-6"
              type="text"
              placeholder="Coupon Code"
            />
            <button className="w-[180px] h-[56px] rounded-[4px] bg-[#db4444] text-[#fafafa] font-poppins font-medium text-[16px] leading-6">
              Apply Coupon
            </button>
          </div>
          <div className="flex flex-col gap-5 w-full md:w-[400px] h-auto rounded-[4px] border-[1px] border-[#000000] border-opacity-50 px-6 py-8">
            <p className="font-poppins font-medium text-[20px] leading-7 text-[#000000]">
              Cart Total
            </p>
            <div className="flex justify-between pb-2 border-b border-[#000000] border-opacity-50">
              <p className="font-poppins font-normal text-[16px] leading-6 text-[#000000]">
                Subtotal:
              </p>
              <p className="font-poppins font-normal text-[16px] leading-6 text-[#000000]">
                $1750
              </p>
            </div>
            <div className="flex justify-between pb-2 border-b border-[#000000] border-opacity-50">
              <p className="font-poppins font-normal text-[16px] leading-6 text-[#000000]">
                Shipping:
              </p>
              <p className="font-poppins font-normal text-[16px] leading-6 text-[#000000]">
                Free
              </p>
            </div>
            <div className="flex justify-between pb-2 border-b border-[#000000] border-opacity-50">
              <p className="font-poppins font-normal text-[16px] leading-6 text-[#000000]">
                Total:
              </p>
              <p className="font-poppins font-normal text-[16px] leading-6 text-[#000000]">
                $1750
              </p>
            </div>
            <button className="w-full md:w-[230px] h-[56px] mx-auto rounded-[4px] bg-[#db4444] text-[#fafafa] font-poppins font-medium text-[16px] leading-6">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
