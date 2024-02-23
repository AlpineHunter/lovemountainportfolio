import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../app/animations.css";

function Hero() {
  return (
    <section className="w-full lg:h-screen h-fit bg-whitesmoke relative px-[40px] py-10 max-xs:px-[20]">
      <div className="max-w-7xl flex items-center justify-between h-full mx-auto max-md:flex-col max-md:gap-10 max-md:text-center">
        {/* 左 */}
        <div className="flex flex-col gap-5 z-40 max-md:order-2">
          <div className="text-4xl lg:text-6xl">
            <h1 className="font-medium">山を愛しなさい</h1>
            <span className="font-bold text-cadetblue">Si vis amari,ama.</span>
            <h2>by AlpineHunter</h2>
            <p className="mt-5 text-xl">
              もしあなたが愛されることを望むなら、あなたが愛しなさい
            </p>
          </div>
          <div className="flex gap-4 max-md:justify-center">
            <Link href={"#climbeds"}></Link>
            <button className="bg-darkblue text-white px-2 rounded-md py-1 hover:bg-darkblue/75 cursor-pointer lg:px-4">
              登山実績
            </button>
            <Link href={"#contacts"}></Link>
            <button className="bg-darkblue text-white px-2 rounded-md py-1 hover:bg-darkblue/75 cursor-pointer lg:px-4">
              コンタクト
            </button>
          </div>
        </div>
        {/* 右 */}
        <Image
          src={"/assets/mountains/guruimage.png"}
          width={400}
          height={400}
          alt="guruImage"
          className="z-10 rounded-full"
        />
      </div>

      {/* animationscss */}
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
}
export default Hero;
