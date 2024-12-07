import React from 'react';
import Image from 'next/image';

function Monthly() {
  return (
    <section className="w-full flex flex-col justify-center items-center md:mb-20 pb-20 overflow-hidden">
     <div className="flex flex-col md:flex-row justify-between md:gap-96 mt-10 md:mt-6">
        <div className="flex flex-col items-center md:items-start gap-10 md:mr-52">
          <Image src="/month.png" alt="Image" width={100} height={40} />
          <div className="flex flex-col md:flex-row gap-0 items-center md:items-start">
            <h1 className="font-inter font-semibold text-[28px] sm:text-[36px] leading-[36px] sm:leading-[48px] text-[#000000] text-center sm:text-left">
            Best Selling Products
            </h1>
          </div>
        </div>
        <div className="md:flex items-end gap-2 md:mt-0 hidden">
        <button className="text-[16px] w-[200px] h-[56px] font-poppins font-medium leading-6 text-[#ffffff] rounded-[4px] bg-[#db4444] mt-28 md:mt-11 py-2 px-6">
        View All
      </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center mx-4 md:mx-24 gap-8 mt-6">
        <div className="w-full md:w-[270px] h-[350px] p-4">
          <div className="relative flex justify-center items-center p-10 bg-[#f5f5f5]">
            <Image
              src="/coat.png"
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
            The north coat
            </h2>

            <div className="flex justify-start gap-6 items-center">
              <span className="text-[16px] font-poppins font-medium leading-6 text-[#db4444]">
                $260
              </span>
              <s className="text-[16px] font-poppins font-medium leading-6 text-[#000000] opacity-50">
                $360
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

        <div className="w-full md:w-[270px] h-[350px] p-4">
          <div className="relative flex flex-col justify-center items-center p-10 pt-16 pb-16 bg-[#f5f5f5]">
            <Image
              src="/bag.png"
              alt="Product Image"
              width={179}
              height={129}
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
            Gucci duffle bag
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
                (65)
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[270px] h-[350px] p-4">
          <div className="relative flex justify-center items-center p-10 bg-[#f5f5f5]">
            <Image
              src="/speakers.png"
              alt="Product Image"
              width={191}
              height={95}
              className="object-contain pt-11 pb-10"
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
            RGB liquid CPU Cooler
            </h2>

            <div className="flex justify-start gap-6 items-center">
              <span className="text-[16px] font-poppins font-medium leading-6 text-[#db4444]">
                $160
              </span>
              <s className="text-[16px] font-poppins font-medium leading-6 text-[#000000] opacity-50">
                $170
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
                (65)
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[270px] h-[350px] p-4">
          <div className="relative flex justify-center items-center p-6 bg-[#f5f5f5]">
            <Image
              src="/table.png"
              alt="Product Image"
              width={140}
              height={176}
              className="object-contain pt-6"
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
            Small BookSelf
            </h2>

            <div className="flex justify-start items-center">
              <span className="text-[16px] font-poppins font-medium leading-6 text-[#db4444]">
                $360
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
    </section>
  )
}

export default Monthly
