"use client"

import React, { Suspense } from 'react'
import Image from 'next/image'
import CustomButton from '@/components/cui/CustomButton'
import { workerDatas } from '@/data/workerDatas'
import { MdArrowBack } from 'react-icons/md'
import { useSearchParams } from 'next/navigation'

const WorkerListSuspense = () => {
  const searchParams = useSearchParams();
  const goBack = () => {
    window.history.back()
  }

  const type = searchParams.get("type");

  return (
    <div className='maxWidth pt-4 pb-20'>
      <div onClick={goBack} className='flex items-center gap-2 md:gap-4 cursor-pointer pb-4 md:pb-6 group'>
        <span className='size-6 md:size-9 bg-gray-200 rounded-full flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-200'>
          < MdArrowBack className='size-4 md:size-6' />
        </span>
        <h2 className='text-xl md:text-3xl font-semibold text-gray-600 capitalize'>View All {type} Workers</h2>
      </div>
      {/* <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold mb-6 text-center text-gray-700 capitalize'>{type} Workers</h2> */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
        {workerDatas.map((worker, index) => (
          <div key={index} className='flex items-center justify-between customShadow px-3 py-3 rounded-sm'>
            <div className='flex items-center gap-4'>
              <Image src={worker.workerImg} width={100} height={100} alt={worker.name} className='w-16 h-16 rounded-full' />
              <div>
                <p>{worker.name}</p>
                <p className='text-sm text-gray-600'>{worker.category}</p>
                <p className='text-sm text-gray-600'>{worker.location}</p>
              </div>
            </div>
            <div>
              <CustomButton text="View" url={`/employer/posted-job/worker-list/${index}?type=${type}`} variant="button03" className='w-full md:w-auto' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export const WorkerList = () =>{
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WorkerListSuspense />
    </Suspense>
  );
}

export default WorkerList