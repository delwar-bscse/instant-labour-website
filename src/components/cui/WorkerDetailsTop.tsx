import Image from 'next/image'
import React from 'react'
import { workerDetails } from '@/data/workerDatas';

const WorkerDetailsTop = () => {
  return (
    <div className='maxWidth pt-4 pb-4'>
      {/* ------------------- Profile & Cover ------------------- */}
      <div className='relative'>
        <Image src={workerDetails.workerCover} width={1200} height={300} alt={workerDetails.name} className='w-full sm:h-[200px] md:h-[300px] object-fit' />
        <div className='absolute bottom-0 left-6 md:left-16 rounded-full transform translate-y-1/2'>
          <Image src={workerDetails.workerImg} width={400} height={400} alt={workerDetails.name} className='w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full' />
          <div className='w-6 h-6 md:w-10 md:h-10 rounded-full bg-green-500 absolute -top-4 right-0 transform -translate-x-1/2 translate-y-1/2' />
        </div>
      </div>
      <div className='h-[80px] md:h-[130px]' />      
    </div>
  )
}

export default WorkerDetailsTop