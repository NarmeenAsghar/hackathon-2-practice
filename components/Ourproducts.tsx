import React from "react";
import Image from "next/image";

function Ourproducts() {
  return (
    <section className="w-full flex flex-col justify-center items-center md:mb-20 pb-20 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between md:gap-96 mt-10 md:mt-6">
        <div className="flex flex-col  items-center md:items-start gap-10 md:mr-72">
          <Image
            src="/products-image.png"
            alt="Image"
            width={100}
            height={40}
          />
          <div className="flex flex-col md:flex-row gap-0 items-center md:items-start">
            <h1 className="font-inter font-semibold text-[28px] sm:text-[36px] leading-[36px] sm:leading-[48px] text-[#000000] text-center sm:text-left">
              Explore Our Products
            </h1>
          </div>
        </div>
        <div className="md:flex items-end gap-2 md:mt-0 hidden">
          <button className="w-[46px] h-[46px] bg-[#f5f5f5] rounded-full p-4">
            <Image src="/Vector 1.png" alt="Image" width={16} height={14} />
          </button>
          <button className="w-[46px] h-[46px] bg-[#f5f5f5] rounded-full p-4">
            <Image src="/Vector 2.png" alt="Image" width={16} height={14} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-4 justify-center mx-4 md:mx-24 gap-8 mt-6">
        <div className="w-full md:w-[270px] h-[350px] p-4 rounded-[4px]">
          <div className="relative flex justify-center items-center p-10 bg-[#f5f5f5]">
            <Image
              src="/chocloate.png"
              alt="Product Image"
              width={115}
              height={180}
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
              Breed Dry Dog Food
            </h2>

            <div className="flex justify-start gap-2 items-center">
              <span className="text-[16px] font-poppins font-medium leading-6 text-[#db4444]">
                $100
              </span>

              <div className="flex text-[#ffad33] mb-2 items-center">
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px] text-[#000000] opacity-50">
                  &#9734;
                </span>
                <span className="font-bold w-[20px] h-[20px] text-[#000000] opacity-50">
                  &#9734;
                </span>
                <p className="text-[14px] font-poppins font-medium leading-5 text-[#000000] opacity-50 pt-2">
                  (35)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[270px] h-[150px] p-4 rounded-[4px] mb-48 md:mb-0">
          <div className="relative flex flex-col justify-center items-center pr-10 pl-10 pt-3 bg-[#f5f5f5]">
            <Image
              src="/cannon-camera.png"
              alt="Product Image"
              width={146}
              height={136}
              className="object-contain"
            />
            <button className="text-[16px] font-poppins font-medium leading-6 text-[#ffffff] w-[295px] sm:w-[600px] md:w-[235px] bg-[#000000] mt-11 py-2 px-6">
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
              CANON EOS DSLR Camera
            </h2>

            <div className="flex justify-start gap-2 items-center">
              <span className="text-[16px] font-poppins font-medium leading-6 text-[#db4444]">
                $360
              </span>

              <div className="flex text-[#ffad33] mb-2 items-center">
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px] text-[#000000] opacity-50">
                  &#9734;
                </span>
                <p className="text-[14px] font-poppins font-medium leading-5 text-[#000000] opacity-50 pt-2">
                  (95)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[270px] h-[350px] p-4 rounded-[4px]">
          <div className="relative flex justify-center items-center p-10 bg-[#f5f5f5]">
            <Image
              src="/laptop.png"
              alt="Product Image"
              width={172}
              height={180}
              className="object-contain pt-4"
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
              ASUS FHD Gaming Laptop
            </h2>

            <div className="flex justify-start gap-2 items-center">
              <span className="text-[16px] font-poppins font-medium leading-6 text-[#db4444]">
                $700
              </span>
              <div className="flex text-[#ffad33] mb-2 items-center">
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <p className="text-[14px] font-poppins font-medium leading-5 text-[#000000] opacity-50 pt-2">
                  (325)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[270px] h-[350px] p-4 rounded-[4px]">
          <div className="relative flex justify-center items-center p-6 bg-[#f5f5f5]">
            <Image
              src="/tubes.png"
              alt="Product Image"
              width={172}
              height={159}
              className="object-contain pt-14"
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
              Curology Product Set
            </h2>

            <div className="flex justify-start items-center gap-2">
              <span className="text-[16px] font-poppins font-medium leading-6 text-[#db4444]">
                $500
              </span>

              <div className="flex text-[#ffad33] mb-2 items-center">
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px] text-[#000000] opacity-50">
                  &#9734;
                </span>
                <p className="text-[14px] font-poppins font-medium leading-5 text-[#000000] opacity-50 pt-2">
                  (145)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[270px] h-[350px] p-4 rounded-[4px]">
          <div className="relative flex justify-center items-center p-10 bg-[#f5f5f5]">
            <button className="absolute top-2 left-2 py-1 px-3 bg-[#00ff66] rounded-[4px] shadow-md text-[#fafafa]">
              NEW
            </button>
            <Image
              src="/car.png"
              alt="Product Image"
              width={180}
              height={180}
              className="object-contain md:pt-12"
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
              Kids Electric Car
            </h2>

            <div className="flex justify-start gap-2 items-center">
              <span className="text-[16px] font-poppins font-medium leading-6 text-[#db4444]">
                $960
              </span>

              <div className="flex text-[#ffad33] mb-2 items-center">
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

        <div className="w-full md:w-[270px] h-[350px] p-4 rounded-[4px]">
          <div className="relative flex justify-center items-center p-10 bg-[#f5f5f5]">
            <Image
              src="/shoes.png"
              alt="Product Image"
              width={190}
              height={180}
              className="object-contain pt-6"
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
              Jr. Zoom Soccer Cleats
            </h2>

            <div className="flex justify-start gap-2 items-center">
              <span className="text-[16px] font-poppins font-medium leading-6 text-[#db4444]">
                $1160
              </span>

              <div className="flex text-[#ffad33] mb-2 items-center">
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <p className="text-[14px] font-poppins font-medium leading-5 text-[#000000] opacity-50 pt-2">
                  (35)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[270px] h-[350px] p-4 rounded-[4px]">
          <div className="relative flex justify-center items-center p-10 bg-[#f5f5f5]">
            <button className="absolute top-2 left-2 py-1 px-3 bg-[#00ff66] rounded-[4px] shadow-md text-[#fafafa]">
              NEW
            </button>
            <Image
              src="/game-remote.png"
              alt="Product Image"
              width={172}
              height={180}
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
              GP11 Shooter USB Gamepad
            </h2>

            <div className="flex justify-start gap-2 items-center">
              <span className="text-[16px] font-poppins font-medium leading-6 text-[#db4444]">
                $660
              </span>
              <div className="flex text-[#ffad33] mb-2 items-center">
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <p className="text-[14px] font-poppins font-medium leading-5 text-[#000000] opacity-50 pt-2">
                  (55)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[270px] h-[350px] p-4 rounded-[4px]">
          <div className="relative flex justify-center items-center p-6 bg-[#f5f5f5]">
            <Image
              src="/mens-wear.png"
              alt="Product Image"
              width={172}
              height={159}
              className="object-contain pt-8"
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
              Quilted Satin Jacket
            </h2>

            <div className="flex justify-start items-center gap-2">
              <span className="text-[16px] font-poppins font-medium leading-6 text-[#db4444]">
                $660
              </span>

              <div className="flex text-[#ffad33] mb-2 items-center">
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px]">&#9733;</span>
                <span className="font-bold w-[20px] h-[20px] text-[#000000] opacity-50">
                  &#9734;
                </span>
                <p className="text-[14px] font-poppins font-medium leading-5 text-[#000000] opacity-50 pt-2">
                  (55)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="text-[16px] w-[234px] h-[56px] font-poppins font-medium leading-6 text-[#ffffff] rounded-[4px] bg-[#db4444] mt-28 md:mt-11 mx-48 py-2 px-6">
        View All Products
      </button>
    </section>
  );
}

export default Ourproducts;
