import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Services from "@/components/Services";
import React from "react";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function page() {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="w-full flex flex-col md:flex-row justify-center items-center md:mt-40">
        <div className="md:w-[495px] md:h-[336px] md:gap-20 md:ml-24 md:mr-52 px-6">
          <h1 className="font-inter font-bold text-[54px] leading-[64px] text-[#000000] mb-10">
            Our Story
          </h1>
          <p className="font-poppins font-normal text-[16px] leading-[26px] text-[#000000] mb-6">
            Launced in 2015, Exclusive is South Asia`s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="font-poppins font-normal text-[16px] leading-[26px] text-[#000000]">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="mt-10 md:mt-0">
          <Image src="/about-image.png" alt="Image" width={600} height={500} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mx-4 md:mx-24 gap-4 mt-20">
        <div className="flex flex-col justify-center items-center gap-4 rounded-[4px] w-[250px] h-[175px] border-[1px] border-[#000000] border-opacity-30">
          <Image src="/Services (3).png" alt="Image" width={56} height={56} />
          <h1 className="font-inter font-extrabold text-[32px] leading-[30px] text-[#000000]">
            10.5k
          </h1>
          <p className="font-poppins font-normal text-[16px] leading-6 text-[#000000]">
            Sallers active our site
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 rounded-[4px] w-[250px] h-[175px] bg-[#db4444]">
          <Image src="/Services (4).png" alt="Image" width={56} height={56} />
          <h1 className="font-inter font-extrabold text-[32px] leading-[30px] text-[#fafafa]">
            33k
          </h1>
          <p className="font-poppins font-normal text-[16px] leading-6 text-[#fafafa]">
            Mopnthly Produduct Sale
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 rounded-[4px] w-[250px] h-[175px] border-[1px] border-[#000000] border-opacity-30">
          <Image src="/Services (5).png" alt="Image" width={56} height={56} />
          <h1 className="font-inter font-extrabold text-[32px] leading-[30px] text-[#000000]">
            45.5k
          </h1>
          <p className="font-poppins font-normal text-[16px] leading-6 text-[#000000]">
            Customer active in our site
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 rounded-[4px] w-[250px] h-[175px] border-[1px] border-[#000000] border-opacity-30">
          <Image src="/Services (6).png" alt="Image" width={56} height={56} />
          <h1 className="font-inter font-extrabold text-[32px] leading-[30px] text-[#000000]">
            25k
          </h1>
          <p className="font-poppins font-normal text-[16px] leading-6 text-[#000000]">
            Anual gross sale in our site
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-20 gap-4">
        <div className="flex flex-col justify-center items-center md:items-start mb-10 md:mb-0">
          <div className="bg-[#f5f5f5] rounded-[4px] w-[300px] md:w-[370px] h-[327px] md:h-[430px] px-16 pt-10">
            <Image src="/men-1.png" alt="Image" width={236} height={391} />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start mt-6">
            <h1 className="font-inter font-medium text-[32px] leading-[30px] text-[#000000">
              Tom Cruise
            </h1>
            <p className="font-poppins font-normal text-[16px] mt-2 leading-6 text-[#000000] mb-2">
              Founder & Chairman
            </p>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "20px" }}
            >
              <FaTwitter size={20} />
              <FaInstagram size={20} />
              <FaLinkedin size={20} />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:items-start mb-10 md:mb-0">
          <div className="bg-[#f5f5f5] rounded-[4px] w-[300px] md:w-[370px] h-[336px] md:h-[430px] px-10 pt-10">
            <Image src="/women.png" alt="Image" width={294} height={397} />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start mt-6">
            <h1 className="font-inter font-medium text-[32px] leading-[30px] text-[#000000">
              Emma Watson
            </h1>
            <p className="font-poppins font-normal text-[16px] mt-2 leading-6 text-[#000000] mb-2">
              Managing Director
            </p>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "20px" }}
            >
              <FaTwitter size={20} />
              <FaInstagram size={20} />
              <FaLinkedin size={20} />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:items-start mb-10 md:mb-0">
          <div className="bg-[#f5f5f5] rounded-[4px] w-[300px] md:w-[370px] h-[348px] md:h-[430px] px-6 pt-11">
            <Image src="/men-2.png" alt="Image" width={326} height={392} />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start mt-6">
            <h1 className="font-inter font-medium text-[32px] leading-[30px] text-[#000000">
              Will Smith
            </h1>
            <p className="font-poppins font-normal text-[16px] mt-2 leading-6 text-[#000000] mb-2">
              Product Designer
            </p>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "20px" }}
            >
              <FaTwitter size={20} />
              <FaInstagram size={20} />
              <FaLinkedin size={20} />
            </div>
          </div>
        </div>
      </div>
      <Services />
      <Footer />
    </div>
  );
}

export default page;
