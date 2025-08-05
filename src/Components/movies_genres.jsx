import React, { Component } from 'react'
import action from "../assets/action.png";
import adventure from "../assets/adventure.png";
import comedy from "../assets/comedy.png";
import drama from "../assets/drama.png";
import horror from "../assets/horror.png";

export default class movies_genres extends Component {
  render() {
    return (
      <div>
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
                  <span className="flex j ustify-between text-white font-semibold text-[18px]">
                  Horror
                  <ArrowRight/></span>
                </div>
              </div>
            </section>
      </div>
    )
  }
}
