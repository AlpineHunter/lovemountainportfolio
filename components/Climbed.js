import Image from "next/image";
import React from "react";
import { AiFillBulb } from "react-icons/ai";
import { PiMountainsFill } from "react-icons/pi";

function Climbed() {
  return (
    <section
      className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white"
      id="climbed"
    >
      <div className="max-w-7xl mx-auto">
        {/* セクションタイトル */}
        <div className="inline-block">
          <p className="bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2">
            <span>
              <PiMountainsFill className="w-4 h-4" size={20} />
            </span>
            登った山
          </p>
        </div>
        {/* グリットレイアウト */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap5 max-xs:grid-cols-1 mt-10">
          <div className="flex flex-col items-center bg-whitesmoke p-8 round-md text-center shadow-sm justify-center">
            <Image
              src={"/assets/mountains/tenpaizan1.jpg"}
              width={150}
              height={150}
              alt="天拝山"
              className="z-10 rounded mb-2"
            />
            <span>天拝山</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 round-md text-center shadow-sm justify-center">
            <Image
              src={"/assets/mountains/ushikubiyama.jpg"}
              width={150}
              height={150}
              alt="牛頸山"
              className="z-10 rounded mb-2"
            />
            <span>牛頸山</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 round-md text-center shadow-sm justify-center">
            <Image
              src={"/assets/mountains/kiyama.jpg"}
              width={150}
              height={150}
              alt="基山"
              className="z-10 rounded mb-2"
            />
            <span>基山</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 round-md text-center shadow-sm justify-center">
            <Image
              src={"/assets/mountains/raizan.jpg"}
              width={150}
              height={150}
              alt="雷山"
              className="z-10 rounded mb-2"
            />
            <span>雷山</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 round-md text-center shadow-sm justify-center">
            <Image
              src={"/assets/mountains/tachibanayama.jpg"}
              width={150}
              height={150}
              alt="立花山"
              className="z-10 rounded mb-2"
            />
            <span>立花山</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 round-md text-center shadow-sm justify-center">
            <Image
              src={"/assets/mountains/tomidake.jpg"}
              width={150}
              height={150}
              alt="遠見岳"
              className="z-10 rounded mb-2"
            />
            <span>遠見岳</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 round-md text-center shadow-sm justify-center">
            <Image
              src={"/assets/mountains/tenpaizan1.jpg"}
              width={150}
              height={150}
              alt="天拝山"
              className="z-10 rounded mb-2"
            />
            <span>天拝山</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 round-md text-center shadow-sm justify-center">
            <Image
              src={"/assets/mountains/houmanzan.jpg"}
              width={150}
              height={150}
              alt="宝満山"
              className="z-10 rounded mb-2"
            />
            <span>宝満山</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 round-md text-center shadow-sm justify-center">
            <Image
              src={"/assets/mountains/kujusan.jpg"}
              width={150}
              height={150}
              alt="久住山"
              className="z-10 rounded mb-2"
            />
            <span>久住山</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 round-md text-center shadow-sm justify-center">
            <Image
              src={"/assets/mountains/tenpaizan2.jpg"}
              width={150}
              height={150}
              alt="天拝山"
              className="z-10 rounded mb-2"
            />
            <span>天拝山</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Climbed;
