"use client";
import { formatUrl } from '@/utils/formatUrl';
import Image from 'next/image'
import React from 'react'
// import { workerDetails } from '@/data/workerDatas';
import { MdArrowBack } from 'react-icons/md';

const WorkerDetailsTop = ({ workerDetails }: { workerDetails: any }) => {
  const goBack = () => {
    window.history.back()
  }

  return (
    <div className='maxWidth pt-4 pb-4'>
      {/* ------------------- Profile & Cover ------------------- */}
      <div className='relative'>
        <Image src={formatUrl(workerDetails?.cover)} width={1200} height={300} alt={workerDetails?.name} className='w-full sm:h-50 md:h-75 object-fit' />
        <div onClick={goBack} className='absolute top-4 left-6 md:left-16 flex items-center gap-2 md:gap-4 cursor-pointer group'>
          <span className='size-6 md:size-9 border border-gray-50 bg-gray-400 rounded-full flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-200'>
            < MdArrowBack className='size-4 md:size-6 text-white' />
          </span>
        </div>
        <div className='absolute bottom-0 left-6 md:left-16 rounded-full transform translate-y-1/2'>
          <Image src={formatUrl(workerDetails?.profile)} width={400} height={400} alt={workerDetails?.name} className='w-25 h-25 md:w-50 md:h-50 rounded-full' />
          <div className='w-6 h-6 md:w-10 md:h-10 rounded-full bg-green-500 absolute -top-4 right-0 transform -translate-x-1/2 translate-y-1/2' />
        </div>
      </div>
      <div className='h-20 md:h-32.5' />
    </div>
  )
}

export default WorkerDetailsTop