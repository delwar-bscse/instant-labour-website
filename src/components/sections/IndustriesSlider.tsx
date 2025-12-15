/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '@/app/styles.css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { myFetch } from '@/utils/myFetch';
import { formatUrl } from '@/utils/formatUrl';

export default function IndustriesSlider() {
  const [categoryDatas, setCategoryDatas] = React.useState<any>([]);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null); //

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await myFetch("/category", {
        method: "GET",
      });
      const modifyCategory = res?.data?.map((item: any) => ({
        title: item?.title,
        icon: formatUrl(item?.icon),
      }))
      setCategoryDatas(modifyCategory);
    };
    fetchCategories();
  }, []);

  return (
    <div
      className="relative w-full  cursor-pointer"
      onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay?.start()}
    >
      <Swiper
        slidesPerView={2}
        // spaceBetween={20}
        speed={2000}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper; // save swiper instance
          if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        breakpoints={{
          520: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {categoryDatas?.map((item: Record<string, any>, index: number) => (
          <SwiperSlide key={index}>
            <div className='pb-12 flex items-center justify-center flex-col gap-2'>
              <div className='w-[50px] h-[50px] '>
                <Image src={item?.icon} alt={item?.title} width={50} height={50} className='w-[50px] h-[50px] object-cover' />
              </div>
              <p>{item?.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
