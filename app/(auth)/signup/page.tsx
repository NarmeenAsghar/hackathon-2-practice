import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import Image from "next/image";

function page() {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="flex justify-center items-center md:mt-20 md:mb-28">
        <div className="hidden md:block mr-28">
          <Image
            src="/signup-image.png"
            alt="Signup"
            width={919}
            height={709}
            className=" object-cover rounded-[4px]"
          />
        </div>

        <div className="md:mr-20 w-[290px] md:w-[371px] h-[530px] pt-10">
          <h1 className="font-inter font-medium text-[30px] md:text-[36px] leading-[30px] text-[#000000] mb-6 text-center md:text-start">
            Create an account
          </h1>
          <p className="font-poppins font-normal text-[16px] leading-6 text-[#000000] mb-6 text-center md:text-start">
            Enter your details below
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full font-poppins font-normal text-[16px] leading-6 text-[#000000] p-3 border-b-2 border-[#5a595960]"
              required
            />
            <input
              type="any"
              placeholder="Email or Phone Number"
              className="w-full font-poppins font-normal text-[16px] leading-6 text-[#000000] p-3 border-b-2 border-[#5a595960]"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full font-poppins font-normal text-[16px] leading-6 text-[#000000] p-3 border-b-2 border-[#5a595960]"
              required
            />
          </form>

          <div className="mt-6 space-y-4">
            <button className="w-full p-3 rounded-[4px] bg-[#db4444] font-poppins font-medium text-[16px] leading-6 text-[#fafafa]">
              Create Account
            </button>
            <button className="w-full p-3 font-poppins font-normal text-[16px] leading-6 border-[1px] border-[#5a595960] rounded-[4px] flex items-center justify-center gap-2">
              <FaGoogle />
              Sign up with Google
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="font-poppins font-normal text-[16px] leading-6 text-[#000000]">
              Already have account?
              <a
                href="/login"
                className="font-poppins font-medium text-[16px] leading-6 text-[#000000] opacity-70 pl-6"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
