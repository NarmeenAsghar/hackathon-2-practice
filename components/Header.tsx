import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <header className="flex items-center justify-between md:border-b-[0.5px] md:border-opacity-30 md:border-[#000000] md:justify-around w-full h-[92px] px-[40px]">
      <div className="flex items-center space-x-72">
        <h1 className="font-inter font-bold text-[24px] leading-6 text-[#000000]">
          Exclusive
        </h1>

        <nav className="font-poppins hidden md:flex md:items-center md:space-x-8 md:text-[#000000] md:font-normal md:text-[16px]">
          <div className="relative cursor-pointer">
            <Link href="/">Home</Link>
          </div>
          <div className="relative cursor-pointer">
            <Link href="/about">About</Link>
          </div>
          <div className="relative cursor-pointer">
            <Link href="/contact">Contact</Link>
          </div>
          <div className="relative cursor-pointer">
            <Link href="/signup">Sign Up</Link>
          </div>
        </nav>
      </div>

      <div className="md:flex md:flex-row md:items-center md:space-x-4">
        <input
          className="hidden w-[200px] h-[38px] py-3 px-4 bg-[#f5f5f5] text-[#000000] text-opacity-50 font-poppins font-normal text-[12px] rounded-[4px] md:flex items-center justify-around"
          placeholder="What are you looking for?"
        ></input>
        <Image
          src="/searchbar.png"
          alt="search bar"
          width={16}
          height={16}
          className="hidden md:block"
        />
        <div className="flex items-center gap-4 ml-4">
          <div>
            <Link href="/wishlist">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <FaHeart size={24} color="gray" />
              </div>
            </Link>
          </div>
          <div>
            <Link href="/cart">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <FaShoppingCart size={24} color="gray" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Sheet>
        <SheetTrigger className="text-[#000000] w-[42px] h-[24px] md:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <nav className="flex flex-col items-start space-y-2 pt-10 px-4 font-bold">
            <div className="relative cursor-pointer">
              <Link href="/">Home</Link>
            </div>
            <div className="relative cursor-pointer">
              <Link href="/about">About</Link>
            </div>
            <div className="relative cursor-pointer">
              <Link href="/contact">Contact</Link>
            </div>
            <div className="relative cursor-pointer">
              <Link href="/signup">Sign Up</Link>
            </div>
          </nav>
          <div className="flex flex-row items-start gap-2 space-x-4 mt-10">
            <input
              className="w-[170px] h-[38px] py-3 px-4 bg-[#f5f5f5] text-[#000000] text-opacity-50 font-poppins font-normal text-[12px] rounded-[4px] md:flex items-center justify-around"
              placeholder="What are you looking for?"
            ></input>
            <Image
              src="/searchbar.png"
              alt="search bar"
              width={16}
              height={16}
              className="mt-2"
            />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export default Header;
