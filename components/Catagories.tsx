import React from 'react'
import Image from 'next/image'

function Catagories() {
  return (
    <section className="w-full flex flex-col justify-center items-center md:border-b-[0.5px] md:border-[#000000] md:border-opacity-30 md:mb-20 pb-20 overflow\">
      <div className="flex flex-col md:flex-row justify-between md:gap-96 mt-10 md:mt-6">
        <div className="flex flex-col  items-center md:items-start gap-10 md:mr-72">
          <Image src="/catagories.png" alt="Image" width={100} height={40} />
          <div className="flex flex-col md:flex-row gap-0 items-center md:items-start">
            <h1 className="font-inter font-semibold text-[28px] sm:text-[36px] leading-[36px] sm:leading-[48px] text-[#000000] text-center sm:text-left">
            Browse By Category
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

      <div className="flex flex-col md:flex-row justify-center mx-4 md:mx-24 gap-4 mt-10">
        <div className='flex flex-col justify-center items-center gap-4 rounded-[4px] w-[170px] h-[175px] border-[1px] border-[#000000] border-opacity-30'><Image src="/CellPhone.png" alt='Image' width={56} height={56}/>
         <h1 className='font-poppins text-[16px] font-normal leading-6 text-[#000000]'>Phones</h1></div>
        <div className='flex flex-col justify-center items-center gap-4 rounded-[4px] w-[170px] h-[175px] border-[1px] border-[#000000] border-opacity-30'><Image src="/Computer.png" alt='Image' width={56} height={56}/>
         <h1 className='font-poppins text-[16px] font-normal leading-6 text-[#000000]'>Computers</h1></div>
        <div className='flex flex-col justify-center items-center gap-4 rounded-[4px] w-[170px] h-[175px] border-[1px] border-[#000000] border-opacity-30'><Image src="/SmartWatch.png" alt='Image' width={56} height={56}/>
         <h1 className='font-poppins text-[16px] font-normal leading-6 text-[#000000]'>SmartWatch</h1></div>
        <div className='flex flex-col justify-center items-center gap-4 rounded-[4px] w-[170px] h-[175px] bg-[#db4444]'><Image src="/Camera.png" alt='Image' width={56} height={56}/>
         <h1 className='font-poppins text-[16px] font-normal leading-6 text-[#fafafa]'>Camera</h1></div>
        <div className='flex flex-col justify-center items-center gap-4 rounded-[4px] w-[170px] h-[175px] border-[1px] border-[#000000] border-opacity-30'><Image src="/Headphone.png" alt='Image' width={56} height={56}/>
         <h1 className='font-poppins text-[16px] font-normal leading-6 text-[#000000]'>HeadPhones</h1></div>
        <div className='flex flex-col justify-center items-center gap-4 rounded-[4px] w-[170px] h-[175px] border-[1px] border-[#000000] border-opacity-30'><Image src="/Gamepad-1.png" alt='Image' width={56} height={56}/>
         <h1 className='font-poppins text-[16px] font-normal leading-6 text-[#000000]'>Gaming</h1></div>
      </div>

    </section>
  )
}

export default Catagories
