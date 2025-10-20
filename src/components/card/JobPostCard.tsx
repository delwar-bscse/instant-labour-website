/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'
import React from 'react'
import { LuLayers2 } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { FiClock } from "react-icons/fi";
import CustomButton from '../cui/CustomButton';

const JobPostCard = ({ item, url }: { item: Record<string, any>, url: string }) => {
  return (
    <div key={item._id} className='space-y-2 bg-white customShadow p-4'>
      <div className=''>
        <Image src={item.jobImg} width={500} height={400} alt={item.companyName} className='w-full h-[260px]' />
      </div>
      <div className='space-y-3'>
        <div className='flex items-center justify-between'>
          <h3 className='font-semibold text-2xl text-gray-800'>{item.companyName}</h3>
          <p className='font-semibold text-xl text-gray-800'>£ {item.price}</p>
        </div>
        <ul className='space-y-1 text-lg text-gray-500 font-semibold'>
          <li className='flex items-center gap-3'>
            <LuLayers2 />
            <span>{item.companyName}</span>
          </li>
          <li className='flex items-center gap-3'>
            <GrLocation />
            <span>{item.location}</span>
          </li>
          <li className='flex items-center gap-3'>
            <FiClock />
            <span>{item.postDate}</span>
          </li>
        </ul>
        <div className='flex items-center justify-between py-1 font-semibold'>
          <p className={`${item.status === "Ongoing" ? "text-green-500" : "text-red-500"}`}>{item.status}</p>
          <p className='text-red-500'>{item.apply} apply</p>
        </div>
        <CustomButton text="View Job" url={url} variant="button01" className='w-full' />
      </div>
    </div>
  )
}

export default JobPostCard