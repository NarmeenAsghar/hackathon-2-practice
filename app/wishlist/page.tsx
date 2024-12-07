import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

function page() {
  return (
    <section>
      <Header />
      <div className="w-full flex flex-col justify-center items-center overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between md:items-start items-center gap-2 md:gap-96 md:mx-24 mt-10">
          <h1 className="font-poppins font-normal text-[20px] leading-[26px] md:mr-60 text-[#000000] text-center">
            Wishlist (4)
          </h1>
          <h1 className="font-poppins font-medium text-[16px] md:ml-60 mt-4 md:mt-0 leading-6 text-[#000000] text-center border-[1px] border-[#000000] border-opacity-30 px-4 py-3">
            Move All To Bag
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-rows-1 md:grid-cols-4 justify-center mx-4 md:mx-24 gap-8 mt-6">
          <div className="w-full md:w-[270px] h-[150px] p-4 rounded-[4px] mb-48 md:mb-0">
            <div className="relative flex flex-col justify-center items-center pr-10 pl-10 pt-8 bg-[#f5f5f5]">
              <button className="absolute top-2 left-2 py-1 px-3 bg-[#db4444] rounded-[4px] shadow-md text-[#fafafa]">
                -35%
              </button>
              <Image
                src="/bag.png"
                alt="Product Image"
                width={146}
                height={136}
                className="object-contain"
              />
              <button className="flex gap-4 text-[16px] font-poppins font-medium leading-6 text-[#ffffff] w-[295px] sm:w-[600px] md:w-[235px] bg-[#000000] mt-11 py-2 pr-8 pl-12">
                <FaShoppingCart size={24} color="white" /> Add To Cart
              </button>
              <button className="absolute top-2 right-2 p-2 bg-[#ffffff] rounded-full">
                <FaTrash size={24} color="gray" />
              </button>
            </div>

            <div className="p-4">
              <h2 className="text-[16px] font-poppins font-medium leading-6 text-[#000000]">
                Gucci duffle bag
              </h2>

              <div className="flex justify-start gap-2 items-center">
                <span className="text-[16px] font-poppins font-medium leading-6 text-[#db4444]">
                  $960
                </span>
                <s className="font-poppins font-medium text-[16px] leading-6 text-[#000000] opacity-50">
                  $1160
                </s>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[270px] h-[150px] p-4 rounded-[4px] mb-48 md:mb-0">
            <div className="relative flex flex-col justify-center items-center pr-10 pl-10 pt-16 bg-[#f5f5f5]">
              <Image
                src="/speakers.png"
                alt="Product Image"
                width={146}
                height={136}
                className="object-contain"
              />
              <button className="flex gap-4 text-[16px] font-poppins font-medium leading-6 text-[#ffffff] w-[295px] sm:w-[600px] md:w-[235px] bg-[#000000] mt-11 py-2 pr-8 pl-12">
                <FaShoppingCart size={24} color="white" /> Add To Cart
              </button>
              <button className="absolute top-2 right-2 p-2 bg-[#ffffff] rounded-full">
                <FaTrash size={24} color="gray" />
              </button>
            </div>

            <div className="p-4">
              <h2 className="text-[16px] font-poppins font-medium leading-6 text-[#000000]">
                RGB liquid CPU Cooler
              </h2>

              <div className="flex justify-start gap-2 items-center">
                <span className="text-[16px] font-poppins font-medium leading-6 text-[#db4444]">
                  $1960
                </span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[270px] h-[350px] p-4 rounded-[4px]">
            <div className="relative flex flex-col justify-center items-center pr-10 pl-10 pt-0 bg-[#f5f5f5]">
              <Image
                src="/game-remote.png"
                alt="Product Image"
                width={142}
                height={120}
                className="object-contain pt-4"
              />
              <button className="flex gap-4 text-[16px] font-poppins font-medium leading-6 text-[#ffffff] w-[295px] sm:w-[600px] md:w-[235px] bg-[#000000] mt-11 py-2 pr-8 pl-12">
                <FaShoppingCart size={24} color="white" /> Add To Cart
              </button>
              <button className="absolute top-2 right-2 p-2 bg-[#ffffff] rounded-full">
                <FaTrash size={24} color="gray" />
              </button>
            </div>

            <div className="p-4">
              <h2 className="text-[16px] font-poppins font-medium leading-6 text-[#000000]">
                GP11 Shooter USB Gamepad
              </h2>

              <div className="flex justify-start gap-2 items-center">
                <span className="text-[16px] font-poppins font-medium leading-6 text-[#db4444]">
                  $550
                </span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[270px] h-[350px] p-4 rounded-[4px]">
            <div className="relative flex flex-col justify-center items-center pr-10 pl-10 pt-1 bg-[#f5f5f5]">
              <Image
                src="/mens-wear.png"
                alt="Product Image"
                width={120}
                height={100}
                className="object-contain pt-4"
              />
              <button className="flex gap-4 text-[16px] font-poppins font-medium leading-6 text-[#ffffff] w-[295px] sm:w-[600px] md:w-[235px] bg-[#000000] mt-11 py-2 pr-8 pl-12">
                <FaShoppingCart size={24} color="white" /> Add To Cart
              </button>
              <button className="absolute top-2 right-2 p-2 bg-[#ffffff] rounded-full">
                <FaTrash size={24} color="gray" />
              </button>
            </div>

            <div className="p-4">
              <h2 className="text-[16px] font-poppins font-medium leading-6 text-[#000000]">
                Quilted Satin Jacket
              </h2>

              <div className="flex justify-start items-center gap-2">
                <span className="text-[16px] font-poppins font-medium leading-6 text-[#db4444]">
                  $750
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between md:items-start items-center gap-2 md:gap-96 md:mx-24 mt-10">
          <div className="flex flex-col items-center md:items-start gap-10 md:mr-72">
            <Image src="/for-you.png" alt="Image" width={100} height={40} />
          </div>
          <h1 className="font-poppins font-medium text-[16px] md:ml-60 mt-4 md:mt-0 leading-6 text-[#000000] text-center border-[1px] border-[#000000] border-opacity-30 px-4 py-3">
            See All
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-rows-1 md:grid-cols-4 justify-center mx-4 md:mx-24 gap-8 mt-6">
          <div className="w-full md:w-[270px] h-[150px] p-4 rounded-[4px] mb-48 md:mb-0">
            <div className="relative flex flex-col justify-center items-center pr-10 pl-10 pt-2 bg-[#f5f5f5]">
              <button className="absolute top-2 left-2 py-1 px-3 bg-[#db4444] rounded-[4px] shadow-md text-[#fafafa]">
                -35%
              </button>
              <Image
                src="/laptop.png"
                alt="Product Image"
                width={146}
                height={136}
                className="object-contain"
              />
              <button className="flex gap-4 text-[16px] font-poppins font-medium leading-6 text-[#ffffff] w-[295px] sm:w-[600px] md:w-[235px] bg-[#000000] mt-11 py-2 pr-8 pl-12">
                <FaShoppingCart size={24} color="white" /> Add To Cart
              </button>
              <button className="absolute top-2 right-2 p-2 bg-[#ffffff] rounded-full">
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
                ASUS FHD Gaming Laptop
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
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <p className="text-[14px] font-poppins font-medium leading-5 text-[#000000] opacity-50 pt-2">
                  (65)
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[270px] h-[150px] p-4 rounded-[4px] mb-48 md:mb-0">
            <div className="relative flex flex-col justify-center items-center pr-10 pl-10 pt-12 bg-[#f5f5f5]">
              <Image
                src="/LCD.png"
                alt="Product Image"
                width={146}
                height={136}
                className="object-contain"
              />
              <button className="flex gap-4 text-[16px] font-poppins font-medium leading-6 text-[#ffffff] w-[295px] sm:w-[600px] md:w-[235px] bg-[#000000] mt-11 py-2 pr-8 pl-12">
                <FaShoppingCart size={24} color="white" /> Add To Cart
              </button>
              <button className="absolute top-2 right-2 p-2 bg-[#ffffff] rounded-full">
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
                  $1160
                </span>
              </div>

              <div className="flex text-[#ffad33] mb-4 items-center">
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <p className="text-[14px] font-poppins font-medium leading-5 text-[#000000] opacity-50 pt-2">
                  (65)
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[270px] h-[350px] p-4 rounded-[4px]">
            <div className="relative flex flex-col justify-center items-center pr-10 pl-10 pt-0 bg-[#f5f5f5]">
              <button className="absolute top-2 left-2 py-1 px-3 bg-[#00ff66] rounded-[4px] shadow-md text-[#fafafa] text-poppins font-normal text-[12px] leading-[18px]">
                NEW
              </button>
              <Image
                src="/gamepad.png"
                alt="Product Image"
                width={142}
                height={120}
                className="object-contain pt-6"
              />
              <button className="flex gap-4 text-[16px] font-poppins font-medium leading-6 text-[#ffffff] w-[295px] sm:w-[600px] md:w-[235px] bg-[#000000] mt-11 py-2 pr-8 pl-12">
                <FaShoppingCart size={24} color="white" /> Add To Cart
              </button>
              <button className="absolute top-2 right-2 p-2 bg-[#ffffff] rounded-full">
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

              <div className="flex justify-start gap-2 items-center">
                <span className="text-[16px] font-poppins font-medium leading-6 text-[#db4444]">
                  $560
                </span>
              </div>
              <div className="flex text-[#ffad33] mb-4 items-center">
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <p className="text-[14px] font-poppins font-medium leading-5 text-[#000000] opacity-50 pt-2">
                  (65)
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[270px] h-[350px] p-4 rounded-[4px]">
            <div className="relative flex flex-col justify-center items-center pr-10 pl-10 pt-20 bg-[#f5f5f5]">
              <Image
                src="/keypad.png"
                alt="Product Image"
                width={120}
                height={100}
                className="object-contain pt-4"
              />
              <button className="flex gap-4 text-[16px] font-poppins font-medium leading-6 text-[#ffffff] w-[295px] sm:w-[600px] md:w-[235px] bg-[#000000] mt-11 py-2 pr-8 pl-12">
                <FaShoppingCart size={24} color="white" /> Add To Cart
              </button>
              <button className="absolute top-2 right-2 p-2 bg-[#ffffff] rounded-full">
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

              <div className="flex justify-start items-center gap-2">
                <span className="text-[16px] font-poppins font-medium leading-6 text-[#db4444]">
                  $200
                </span>
              </div>
              <div className="flex text-[#ffad33] mb-4 items-center">
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <p className="text-[14px] font-poppins font-medium leading-5 text-[#000000] opacity-50 pt-2">
                  (65)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default page;
