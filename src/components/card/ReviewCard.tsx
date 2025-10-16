/* eslint-disable @typescript-eslint/no-explicit-any */
import { relativeTime } from '@/utils/relativeTimes';
import Image from 'next/image'
import React from 'react'
import { MdOutlineStarPurple500 } from 'react-icons/md';

const ReviewCard = ({item}:{item:Record<string, any>}) => {
  const now = new Date();

  return (
    <div className='space-y-2'>
      <div className='flex justify-between'>
        <div className='flex gap-2'>
          <Image src={item.img} width={100} height={100} alt="Worker" className='w-[50px] h-[50px] rounded-full' />
          <div>
            <p className='font-semibold text-lg text-gray-700'>{item.name}</p>
            <p className='text-xs md:text-sm text-gray-600'>{relativeTime(item.time, { now })}</p>
          </div>
        </div>
        <div className='flex items-center gap-1'>
          <MdOutlineStarPurple500 className='text-brandClr2 size-6' />
          <p className='font-semibold text-gray-600'>{item.rating}</p>
        </div>
      </div>
      <p className='text-gray-600 text-sm md:text-base'>{item.review}</p>
    </div>
  )
}

export default ReviewCard