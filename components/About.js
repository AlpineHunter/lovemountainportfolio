import React from "react";
import { AiFillBulb } from "react-icons/ai";

function About() {
  return (
    <section
      className="w-full h-fit px-[40px] py-10 max-xs:px-[20] relative bg-white "
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        {/* セクションタイトル */}
        <div className="inline-block">
          <p className="bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2">
            <span>
              <AiFillBulb className="w-4 h-4" />
            </span>
            はじめに
          </p>
        </div>
        {/* メイン文 */}
        <div className="mt-7">
          <p className="mt-6 text-gray-600 text-lg md:text-xl leading-9">
            「登山」とは、山に登ることに楽しみを求め、登ること自体を目的とするスポーツです。
            <br />
            山菜や動物を採集したり、地質調査のため等々のために山に入ってそこを登ることは登山自体を目的としておらず、異なっています。
            <br />
            登山は、ハイキング、トレッキング、縦走登山、雪山登山、山スキー、沢登り、藪漕ぎ、岩登り、アイスクライミング、フリークライミング、トレイルランニングなどと登山の難易度が高く技術や経験が必要なものまで、登山の形態は、方法、技術、難易度、季節、時期などによって多岐にわたります。
          </p>
        </div>
        {/* 軽い実勢 */}
        <div className="mt-10">
          <div className="w-full">
            <ul className="flex justify-between gap-10 flex-col md:flex-row">
              <li className="w-full shadow-sm">
                <div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-whitesmoke">
                  <h3 className="text-4xl mb-1 text-darkblue font-bold">10</h3>
                  <span>SUMMITS</span>
                </div>
              </li>
              <li className="w-full shadow-sm">
                <div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-whitesmoke">
                  <h3 className="text-4xl mb-1 text-darkblue font-bold">
                    1786.5M
                  </h3>
                  <span>BEST</span>
                </div>
              </li>
              <li className="w-full shadow-sm">
                <div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-whitesmoke">
                  <h3 className="text-4xl mb-1 text-darkblue font-bold">
                    0.25
                  </h3>
                  <span>YEARS</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
