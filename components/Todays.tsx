import React from "react";
import Image from "next/image";

function Todays() {
  return (
    <section className="w-full flex flex-col justify-center items-center overflow-hidden md:border-b-[0.5px] md:border-[#000000] md:border-opacity-30 md:mb-20 pb-20">
      <div className="flex flex-col md:flex-row justify-between md:gap-96 mt-10 md:mt-6">
        <div className="flex flex-col  items-center md:items-start gap-10 md:mr-10">
          <Image src="/todays.png" alt="Image" width={100} height={40} />
          <div className="flex flex-col md:flex-row gap-0 md:gap-32 items-center md:items-start">
            <h1 className="font-inter font-semibold text-[28px] sm:text-[36px] leading-[36px] sm:leading-[48px] text-[#000000] text-center sm:text-left">
              Flash Sales
            </h1>
            <Image
              src="/time.png"
              alt="Image"
              width={302}
              height={50}
              className="hidden md:block"
            />
          </div>
        </div>
        <div className="md:flex justify-center items-end gap-2 md:mt-0 hidden">
          <button className="w-[46px] h-[46px] bg-[#f5f5f5] rounded-full p-4">
            <Image src="/Vector 1.png" alt="Image" width={16} height={14} />
          </button>
          <button className="w-[46px] h-[46px] bg-[#f5f5f5] rounded-full p-4">
            <Image src="/Vector 2.png" alt="Image" width={16} height={14} />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center p-4 mx-4 md:mx-24 gap-8 mt-6">
        <div className="w-[260px] md:w-[270px] h-[350px] px-4 py-12">
          <div className="relative flex justify-center items-center p-10 bg-[#f5f5f5]">
            <button className="absolute top-2 left-2 py-1 px-3 bg-[#db4444] rounded-[4px] shadow-md text-[#fafafa]">
              -40%
            </button>
            <Image
              src="/gamepad.png"
              alt="Product Image"
              width={172}
              height={152}
              className="object-contain"
            />
            <button className="absolute top-2 right-2 p-2 bg-[#ffffff] rounded-full">
              <Image
                src="/wishlisticon.png"
                alt="Wishlist Icon"
                width={20}
                height={20}
              />
            </button>
            <button className="absolute top-12 right-2 p-2 bg-[#ffffff] rounded-full">
              <Image
                src="/Quick View.png"
                alt="Quick view Icon"
                width={20}
                height={20}
              />
            </button>
          </div>

          <div className="p-4">
            <h2 className="text-[16px] font-poppins font-medium leading-6 text-[#000000]">
              HAVIT HV-G92 Gamepad
            </h2>

            <div className="flex justify-start gap-6 items-center">
              <span className="text-[16px] font-poppins font-medium leading-6 text-[#db4444]">
                $120
              </span>
              <s className="text-[16px] font-poppins font-medium leading-6 text-[#000000] opacity-50">
                $160
              </s>
            </div>

            <div className="flex text-[#ffad33] mb-4 items-center">
              <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
              <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
              <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
              <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
              <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
              <p className="text-[14px] font-poppins font-medium leading-5 text-[#000000] opacity-50 pt-2">
                (88)
              </p>
            </div>
          </div>
        </div>

        <div className="w-[260px] md:w-[270px] h-[250px] px-4 py-0 md:mb-0">
          <div className="relative flex flex-col justify-center items-center pr-10 pl-10 pt-14 bg-[#f5f5f5]">
            <button className="absolute top-2 left-2 py-1 px-3 bg-[#db4444] rounded-[4px] shadow-md text-[#fafafa]">
              -35%
            </button>
            <Image
              src="/keypad.png"
              alt="Product Image"
              width={191}
              height={101}
              className="object-contain"
            />
            <button className="text-[16px] font-poppins font-medium leading-6 text-[#ffffff] sm:w-[600px] md:w-[235px] bg-[#000000] mt-11 py-2 px-6">
              Add To Cart
            </button>
            <button className="absolute top-2 right-2 p-2 bg-[#ffffff] rounded-full">
              <Image
                src="/wishlisticon.png"
                alt="Wishlist Icon"
                width={20}
                height={20}
              />
            </button>
            <button className="absolute top-12 right-2 p-2 bg-[#ffffff] rounded-full">
              <Image
                src="/Quick View.png"
                alt="Quick view Icon"
                width={20}
                height={20}
              />
            </button>
          </div>

          <div className="p-4">
            <h2 className="text-[16px] font-poppins font-medium leading-6 text-[#000000]">
              AK-900 Wired Keyboard
            </h2>

            <div className="flex justify-start gap-6 items-center">
              <span className="text-[16px] font-poppins font-medium leading-6 text-[#db4444]">
                $960
              </span>
              <s className="text-[16px] font-poppins font-medium leading-6 text-[#000000] opacity-50">
                $1160
              </s>
            </div>

            <div className="flex text-[#ffad33] mb-4 items-center">
              <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
              <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
              <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
              <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
              <span className="font-bold w-[20px] h-[20px] text-[#000000] opacity-50">
                &#9734;
              </span>
              <p className="text-[14px] font-poppins font-medium leading-5 text-[#000000] opacity-50 pt-2">
                (75)
              </p>
            </div>
          </div>
        </div>

        <div className="w-[260px] md:w-[270px] h-[350px] px-4 py-12">
          <div className="relative flex justify-center items-center p-10 bg-[#f5f5f5]">
            <button className="absolute top-2 left-2 py-1 px-3 bg-[#db4444] rounded-[4px] shadow-md text-[#fafafa]">
              -30%
            </button>
            <Image
              src="/LCD.png"
              alt="Product Image"
              width={170}
              height={129}
              className="object-contain pt-8"
            />
            <button className="absolute top-2 right-2 p-2 bg-[#ffffff] rounded-full">
              <Image
                src="/wishlisticon.png"
                alt="Wishlist Icon"
                width={20}
                height={20}
              />
            </button>
            <button className="absolute top-12 right-2 p-2 bg-[#ffffff] rounded-full">
              <Image
                src="/Quick View.png"
                alt="Quick view Icon"
                width={20}
                height={20}
              />
            </button>
          </div>

          <div className="p-4">
            <h2 className="text-[16px] font-poppins font-medium leading-6 text-[#000000]">
              IPS LCD Gaming Monitor
            </h2>

            <div className="flex justify-start gap-6 items-center">
              <span className="text-[16px] font-poppins font-medium leading-6 text-[#db4444]">
                $370
              </span>
              <s className="text-[16px] font-poppins font-medium leading-6 text-[#000000] opacity-50">
                $530
              </s>
            </div>

            <div className="flex text-[#ffad33] mb-4 items-center">
              <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
              <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
              <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
              <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
              <span className="font-bold w-[20px] h-[20px] text-[#000000] opacity-50">
                &#9734;
              </span>
              <p className="text-[14px] font-poppins font-medium leading-5 text-[#000000] opacity-50 pt-2">
                (110)
              </p>
            </div>
          </div>
        </div>

        <div className="w-[260px] md:w-[270px] h-[250px] px-4 py-0">
          <div className="relative flex justify-center items-center p-6 bg-[#f5f5f5]">
            <button className="absolute top-2 left-2 py-1 px-3 bg-[#db4444] rounded-[4px] shadow-md text-[#fafafa]">
              -25%
            </button>
            <Image
              src="/chair.png"
              alt="Product Image"
              width={107}
              height={180}
              className="object-contain"
            />
            <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
              <Image
                src="/wishlisticon.png"
                alt="Wishlist Icon"
                width={20}
                height={20}
              />
            </button>
            <button className="absolute top-12 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
              <Image
                src="/Quick View.png"
                alt="Quick view Icon"
                width={20}
                height={20}
              />
            </button>
          </div>

          <div className="p-4">
            <h2 className="text-[16px] font-poppins font-medium leading-6 text-[#000000]">
              S-Series Comfort Chair
            </h2>

            <div className="flex justify-start gap-6 items-center">
              <span className="text-[16px] font-poppins font-medium leading-6 text-[#db4444]">
                $275
              </span>
              <s className="text-[16px] font-poppins font-medium leading-6 text-[#000000] opacity-50">
                $400
              </s>
            </div>

            <div className="flex text-[#ffad33] mb-4 items-center">
              <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
              <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
              <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
              <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
              <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
              <p className="text-[14px] font-poppins font-medium leading-5 text-[#000000] opacity-50 pt-2">
                (99)
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="text-[16px] w-[234px] h-[56px] font-poppins font-medium leading-6 text-[#ffffff] rounded-[4px] bg-[#db4444] mt-28 md:mt-16 mx-48 py-2 px-6">
        View All Products
      </button>
    </section>
  );
}

export default Todays;
