"use client";

import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiMail } from "react-icons/ci";
import { CiMountain1 } from "react-icons/ci";
import { useMenuStore } from "./store/useMenuStore";

function TopMenu() {
  const { isOpen, openMobileMenu } = useMenuStore();

  return (
    <section
      className="px-[40px] bg-whitesmoke py-4 z-10 max-xs:px-5"
      id="home"
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-between items-center gap=5">
        {/*上*/}
        <div className="flex justify-between items-center w-full md:hidden">
          <Link href={"/"}>
            <h1 className="font-bold text-3xl text-cadetblue">Alpine.Hunter</h1>
          </Link>
          {/*トグル*/}
          <div className="text-2xl z-50" onClick={openMobileMenu}>
            {isOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
          </div>
        </div>
        {/*下*/}
        <div className="flex justify-between w-full items-center max-xs:flex-col max-xs:items-start max-xs:gap-2">
          <div className="flex flex-row gap-2 items-center text-lg">
            <CiMail />
            <span className="font-bold text-darkblue text-x1 pb-1">
              alpinehunter1984@gmail.com
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopMenu;
