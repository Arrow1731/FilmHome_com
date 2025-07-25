// MySwiper.jsx
import React from "react";
// Swiper React componentlari
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper style-lari
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// kerakli modullar
import { Pagination, Navigation } from 'swiper/modules';
import { Play } from 'lucide-react';
import { Plus } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';
import { Volume2 } from 'lucide-react';

import header_img from '../assets/header_img.png';
export default function MySwiper() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div>
        <div>

<div className='flex justify-center'>
<img className='absolute max-w-[1594px] w-full' src={header_img} alt="" />
</div>

<div className='relative top-[508px] left-[200px] text-center max-w-[1194px] w-full'>
<h1 className='font-bold text-[38px] text-white'>Avengers : Endgame</h1>
<p className='font-medium text-[18px] text-[#999999]'>With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.</p>

<div className='flex gap-[20px] mt-[30px] justify-center'>
<button className='flex bg-[#E50000] py-[14px] px-[24px] text-white rounded-[8px]'><Play/>Play Now</button>
<div className='flex gap-[10px]'>
<button className='p-[15px] bg-[#0F0F0F] text-white rounded-[8px]'><Plus/></button>
<button className='p-[15px] bg-[#0F0F0F] text-white rounded-[8px]'><ThumbsUp/></button>
<button className='p-[15px] bg-[#0F0F0F] text-white rounded-[8px]'><Volume2/></button>
</div>
</div>
</div>
</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=""> <div>

<div className='flex justify-center'>
<img className='absolute max-w-[1594px] w-full' src={header_img} alt="" />
</div>

<div className='relative top-[508px] left-[200px] text-center max-w-[1194px] w-full'>
<h1 className='font-bold text-[38px] text-white'>Avengers : Endgame</h1>
<p className='font-medium text-[18px] text-[#999999]'>With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.</p>

<div className='flex gap-[20px] mt-[30px] justify-center'>
<button className='flex bg-[#E50000] py-[14px] px-[24px] text-white rounded-[8px]'><Play/>Play Now</button>
<div className='flex gap-[10px]'>
<button className='p-[15px] bg-[#0F0F0F] text-white rounded-[8px]'><Plus/></button>
<button className='p-[15px] bg-[#0F0F0F] text-white rounded-[8px]'><ThumbsUp/></button>
<button className='p-[15px] bg-[#0F0F0F] text-white rounded-[8px]'><Volume2/></button>
</div>
</div>
</div>
</div></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=""> <div>

<div className='flex justify-center'>
<img className='absolute max-w-[1594px] w-full' src={header_img} alt="" />
</div>

<div className='relative top-[508px] left-[200px] text-center max-w-[1194px] w-full'>
<h1 className='font-bold text-[38px] text-white'>Avengers : Endgame</h1>
<p className='font-medium text-[18px] text-[#999999]'>With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.</p>

<div className='flex gap-[20px] mt-[30px] justify-center'>
<button className='flex bg-[#E50000] py-[14px] px-[24px] text-white rounded-[8px]'><Play/>Play Now</button>
<div className='flex gap-[10px]'>
<button className='p-[15px] bg-[#0F0F0F] text-white rounded-[8px]'><Plus/></button>
<button className='p-[15px] bg-[#0F0F0F] text-white rounded-[8px]'><ThumbsUp/></button>
<button className='p-[15px] bg-[#0F0F0F] text-white rounded-[8px]'><Volume2/></button>
</div>
</div>
</div>
</div></div>
      </SwiperSlide>
    </Swiper>
  );
}
