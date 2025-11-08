'use client';

import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Block, Button, Page, Segmented } from 'framework7-react';

import 'swiper/css';

// swiper docs: https://swiperjs.com/react

function SwipeableTabsCustom() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
    setActiveIndex(index);
  };

  return (
    <Page>
      <Block className="w-full h-screen flex flex-col p-0 m-0">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          className="w-full h-full"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          <SwiperSlide className="bg-blue-950">
            <p>Slide 1</p>
          </SwiperSlide>
          <SwiperSlide className="bg-blue-800">
            <p>Slide 2</p>
          </SwiperSlide>
          <SwiperSlide className="bg-blue-600">
            <p>Slide 3</p>
          </SwiperSlide>
        </Swiper>

        <Segmented strong className="w-full">
          {['Tab 1', 'Tab 2', 'Tab 3'].map((label, index) => (
            <Button
              key={label}
              active={activeIndex === index}
              onClick={() => handleTabClick(index)}
            >
              {label}
            </Button>
          ))}
        </Segmented>

        {/* <div className="h-16 bg-gray-200 w-full flex">
          {['Tab 1', 'Tab 2', 'Tab 3'].map((label, i) => (
            <button
              key={label}
              className={`${activeIndex === i ? 'bg-gray-500 text-white tab-active-test' : 'bg-gray-700 
              text-gray-200'
                }`}
              onClick={() => handleTabClick(i)}
            >
              {label}
            </button>
          ))}
        </div> */}
      </Block>
    </Page>
  );
}

export default dynamic(() => Promise.resolve(SwipeableTabsCustom), { ssr: false });