/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client"

import React from 'react'
import Image from 'next/image'
import CustomButton from '@/components/cui/CustomButton'
// import { workerDatas } from '@/data/workerDatas'
import { MdArrowBack } from 'react-icons/md'
import { myFetch } from '@/utils/myFetch'
import { formatUrl } from '@/utils/formatUrl'
// import { useSearchParams } from 'next/navigation'

const WorkerList = async({searchParams}:{searchParams:any}) => {
  const {type} = await searchParams;

  const res = await myFetch(`/application/694a30edaf1cc9074d0b6441`,{
    method:"GET"
  })
  console.log("Application List : ", res);



  // const searchParams = useSearchParams();
  // const goBack = () => {
  //   window.history.back()
  // }

  return (
    <div className='maxWidth pt-4 pb-20'>
      <div className='flex items-center gap-2 md:gap-4 cursor-pointer pb-4 md:pb-6 group'>
        <span className='size-6 md:size-9 bg-gray-200 rounded-full flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-200'>
          < MdArrowBack className='size-4 md:size-6' />
        </span>
        <h2 className='text-xl md:text-3xl font-semibold text-gray-600 capitalize'>View All {type} Workers</h2>
      </div>
      {/* <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold mb-6 text-center text-gray-700 capitalize'>{type} Workers</h2> */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
        {res?.data?.map((item: any, index: number) => (
          <div key={index} className='flex items-center justify-between customShadow px-3 py-3 rounded-sm'>
            <div className='flex items-center gap-4'>
              <Image src={formatUrl(item?.applicant.profile)} width={100} height={100} alt={item?.applicant.name} className='w-16 h-16 rounded-full' />
              <div>
                <p>{item?.applicant.name}</p>
                <p className='text-sm text-gray-600'>{item?.applicant.category}</p>
                <p className='text-sm text-gray-600'>{item?.applicant.address}</p>
              </div>
            </div>
            <div>
              <CustomButton text="View" url={`/employer/posted-jobs/worker-list/${item?.applicant._id}?type=${type}&applicationId=${item?._id}`} variant="button03" className='w-full md:w-auto' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkerList