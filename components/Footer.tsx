import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start bg-[#000000] gap-4 mt-10 py-20 px-10 overflow-hidden">
      <div className='flex flex-col justify-start items-start gap-4 rounded-[4px]'>
        <h1 className='font-inter text-[24px] font-bold text-[#fafafa] leading-6'>Exclusive</h1>
        <h2 className='font-poppins font-medium text-[20px] leading-7 text-[#fafafa]'>Subscribe</h2>
        <p className='font-poppins font-normal text-[16px] leading-6 text-[#fafafa]'>Get 10% off your first order</p>
        <input className='bg-[#000000] rounded-[4px] border-[1.5px] border-[#fafafa] p-2 text-[#fafafa] px-6' placeholder='Enter your Email' />
      </div>

      <div className='flex flex-col justify-start items-start gap-4 rounded-[4px] mt-8 md:mt-0'>
        <h1 className='font-inter text-[24px] font-bold text-[#fafafa] leading-6'>Support</h1>
        <p className='font-poppins text-normal text-[16px] leading-6 text-[#fafafa]'>111 Bijoy sarani, Dhaka, <br/> DH 1515, Bangladesh.</p>
        <p className='font-poppins text-normal text-[16px] leading-6 text-[#fafafa]'>exclusive@gmail.com</p>
        <p className='font-poppins text-normal text-[16px] leading-6 text-[#fafafa]'>+88015-88888-9999</p>
      </div>

      <div className='flex flex-col justify-start items-start gap-4 rounded-[4px] mt-8 md:mt-0'>
        <h1 className='font-inter text-[24px] font-bold text-[#fafafa] leading-6'>Account</h1>
        <p className='font-poppins font-normal text-[16px] leading-6 text-[#fafafa]'>My Account</p>
        <p className='font-poppins font-normal text-[16px] leading-6 text-[#fafafa]'>Login / Register</p>
        <p className='font-poppins font-normal text-[16px] leading-6 text-[#fafafa]'>Cart</p>
        <p className='font-poppins font-normal text-[16px] leading-6 text-[#fafafa]'>Wishlist</p>
        <p className='font-poppins font-normal text-[16px] leading-6 text-[#fafafa]'>Shop</p>
      </div>

      <div className='flex flex-col justify-start items-start gap-4 rounded-[4px] mt-8 md:mt-0'>
        <h1 className='font-inter text-[24px] font-bold text-[#fafafa] leading-6'>Privacy Policy</h1>
        <p className='font-poppins font-normal text-[16px] leading-6 text-[#fafafa]'>Terms of Use</p>
        <p className='font-poppins font-normal text-[16px] leading-6 text-[#fafafa]'>FAQ</p>
        <p className='font-poppins font-normal text-[16px] leading-6 text-[#fafafa]'>Contact</p>
      </div>

      <div className='flex flex-col justify-start items-start gap-4 rounded-[4px] mt-8 md:mt-0'>
        <h1 className='font-inter text-[24px] font-bold text-[#fafafa] leading-6'>Download App</h1>
        <p className='font-poppins font-medium opacity-70 text-[12px] leading-[18px] text-[#fafafa]'>Save $3 with App New User Only</p>
        <Image src="/scanner.png" alt='image' width={198} height={84} />
        <Image src="/social-icons.png" alt='image' width={168} height={24} />
      </div>
    </div>
  );
}

export default Footer;
