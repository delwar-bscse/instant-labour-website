import React from 'react'
import Image from 'next/image'
import CustomButton from '@/components/cui/CustomButton'
import { workerDatas } from '@/data/workerDatas'

interface Props {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const WorkerList = ({ searchParams }: Props) => {

  const type = searchParams.type;
  
  return (
    <div className='maxWidth pt-4 pb-20'>
      <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold mb-6 text-center text-gray-700 capitalize'>{type} Workers</h2>
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

export default WorkerList