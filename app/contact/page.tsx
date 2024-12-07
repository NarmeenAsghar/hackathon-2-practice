import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function page() {
  return (
    <div className="overflow-hidden">
      <Header />

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10 md:mt-20 mb-10 md:mb-20">
        <div className="md:w-[340px] rounded-[4px] shadow-md shadow-[#bebcbc85] flex flex-col items-start justify-center p-6">
          <div className="flex items-start mb-4">
            <FaPhoneAlt className="text-white rounded-full p-2 bg-[#db4444] text-4xl mr-3" />
            <h1 className="font-poppins font-medium text-[16px] leading-6 text-[#000000] mb-4">Call To Us</h1>
          </div>
          <p className="font-poppins font-normal text-[14px] leading-[21px] text-[#000000] mb-4">
            We are available 24/7, 7 days a week.
          </p>
          <p className="font-poppins font-normal text-[14px] leading-[21px] text-[#000000] mb-8">Phone: +8801611112222</p>
          <div className="flex items-start mb-4 pt-8 border-t-[0.5px] border-[#000000]">
            <FaEnvelope className="text-white rounded-full p-2 bg-[#db4444] text-4xl mr-3" />
            <h1 className="font-poppins font-medium text-[16px] leading-6 text-[#000000]">Write To Us</h1>
          </div>
          <p className="font-poppins font-normal text-[14px] leading-[21px] text-[#000000] mb-4">
          Fill out our form and we will contact <br/> you within 24 hours.
          </p>
          <p className="font-poppins font-normal text-[14px] leading-[21px] text-[#000000] mb-4">Emails: customer@exclusive.com</p>
          <p className="font-poppins font-normal text-[14px] leading-[21px] text-[#000000] mb-4">Emails: support@exclusive.com</p>
        </div>
        <div className='flex flex-col items-center mt-10 mb-10'>
      <div className='md:w-[600px] md:h-[412px] p-6 rounded-[4px] shadow-md shadow-[#bebcbc85]'>
        
        <form className='space-y-4'>
          <div className='flex flex-col md:flex-row gap-4'>
            <input 
              type='text' 
              placeholder='Your Name' 
              className='w-full md:w-1/3 p-2 bg-[#f5f5f5] rounded-[4px] font-poppins font-normal text-[16px] leading-6 text-[#000000] text-opacity-50'
            />
            <input 
              type='email' 
              placeholder='Your Email' 
              className='w-full md:w-1/3 p-2 bg-[#f5f5f5] rounded-[4px] font-poppins font-normal text-[16px] leading-6 text-[#000000] text-opacity-50'
            />
            <input 
              type='tel' 
              placeholder='Your Phone' 
              className='w-full md:w-1/3 p-2 bg-[#f5f5f5] rounded-[4px] font-poppins font-normal text-[16px] leading-6 text-[#000000] text-opacity-50'
            />
          </div>

          <div>
            <textarea 
              placeholder='Your Message' 
              className='w-full p-2 bg-[#f5f5f5] rounded-[4px] font-poppins font-normal text-[16px] leading-6 text-[#000000] text-opacity-50 h-56 resize-none' 
            />
          </div>

          <div className='text-right'>
            <button 
              type='submit' 
              className='px-6 py-2 rounded-[4px] bg-[#db4444] font-poppind font-medium text-[16px] leading-6 text-[#fafafa]'>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
