import React, { Component } from "react";

// { icons
import { Play } from "lucide-react";
import { Plus } from "lucide-react";
import { ThumbsUp } from "lucide-react";
import { Volume2 } from "lucide-react";
import { ArrowRight } from 'lucide-react';
// }

// { images
import header_img from "../assets/header_img.png";
import action from "../assets/action.png";
import adventure from "../assets/adventure.png";
import comedy from "../assets/comedy.png";
import drama from "../assets/drama.png";
import horror from "../assets/horror.png";

// }

// import MySwiper from "../Components/MySwiper";

export default class Movie extends Component {
  render() {
    return (
      <div>
        <div className="container">
          {/* <MySwiper /> */}
          <header>
            <div className="mb-[900px]">
              <div className="flex justify-center">
                <img
                  className="absolute max-w-[1594px] w-full"
                  src={header_img}
                  alt=""
                />
              </div>

              <div className="relative top-[508px] left-[200px] text-center max-w-[1194px] w-full">
                <h1 className="font-bold text-[38px] text-white">
                  Avengers : Endgame
                </h1>
                <p className="font-medium text-[18px] text-[#999999]">
                  With the help of remaining allies, the Avengers must assemble
                  once more in order to undo Thanos's actions and undo the chaos
                  to the universe, no matter what consequences may be in store,
                  and no matter who they face... Avenge the fallen.
                </p>

                <div className="flex gap-[20px] mt-[30px] justify-center">
                  <button className="flex bg-[#E50000] py-[14px] px-[24px] text-white rounded-[8px]">
                    <Play />
                    Play Now
                  </button>
                  <div className="flex gap-[10px]">
                    <button className="p-[15px] bg-[#0F0F0F] text-white rounded-[8px]">
                      <Plus />
                    </button>
                    <button className="p-[15px] bg-[#0F0F0F] text-white rounded-[8px]">
                      <ThumbsUp />
                    </button>
                    <button className="p-[15px] bg-[#0F0F0F] text-white rounded-[8px]">
                      <Volume2 />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main>
            <section>
              <button className="flex bg-[#E50000] py-[14px] px-[24px] text-white rounded-[8px] mb-[35.5px]">
                Movies
              </button>

              <div className="mb-[65px]">
                <h1 className="text-white text-[40px] font-bold">Our Genres</h1>
              </div>

              <div className="flex justify-between">
                <div className="bg-[#1A1A1A] py-[30px] px-[22px] w-[265px] rounded-[12px]">
                  <img src={action} alt="" />
                  <span className="flex justify-between text-white font-semibold text-[18px]">
                  Action
                  <ArrowRight/></span>
                </div>
                <div className="bg-[#1A1A1A] py-[30px] px-[22px] w-[265px] rounded-[12px]">
                  <img src={adventure} alt="" />
                  <span className="flex justify-between text-white font-semibold text-[18px]">
                  Adventure
                  <ArrowRight/></span>
                </div>
                <div className="bg-[#1A1A1A] py-[30px] px-[22px] w-[265px] rounded-[12px]">
                  <img src={comedy} alt="" />
                  <span className="flex justify-between text-white font-semibold text-[18px]">
                  Comedy
                  <ArrowRight/></span>
                </div>
                <div className="bg-[#1A1A1A] py-[30px] px-[22px] w-[265px] rounded-[12px]">
                  <img src={drama} alt="" />
                  <span className="flex justify-between text-white font-semibold text-[18px]">
                  Drama
                  <ArrowRight/></span>
                </div>
                <div className="bg-[#1A1A1A] py-[30px] px-[22px] w-[265px] rounded-[12px]">
                  <img src={horror} alt="" />
                  <span className="flex justify-between text-white font-semibold text-[18px]">
                  Horror
                  <ArrowRight/></span>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    );
  }
}
