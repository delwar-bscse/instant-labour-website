import { employerDatas } from '@/data/employerDatas'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const OfferJobList = () => {
  return (
    <div className='w-full max-w-[800px] mx-auto'>
      {employerDatas.map((item) => (
        <div key={item._id} className='flex items-center justify-between gap-4 mt-4 customShadow p-4 rounded-md bg-[#FFC823]/10'>
          <div className='flex gap-4'>
            <Image src={item.image} alt="" className='w-[70px] h-[70px] rounded-md object-cover' />
            <div className='flex-1'>
              <p className='font-semibold text-gray-800'>{item.name}</p>
              <p className='text-gray-500 text-sm'>{item.location}</p>
              <p className='text-gray-500 text-sm'>{item.date}</p>
            </div>
          </div>
          {item.status === "Pending" ?
            <div className='flex items-center flex-col gap-4'>
              <Link href={`/inbox`} className='w-[100px] bg-yellow-500 text-white hover:bg-yellow-600 transition-colors duration-200 cursor-pointer text-sm font-semibold px-3 py-2 rounded-md text-center'>Message</Link>
            </div>
            :
            <div className='flex items-center flex-col gap-4'>
              <button className='w-[100px] bg-yellow-500 text-white hover:bg-yellow-600 transition-colors duration-200 cursor-pointer text-sm font-semibold px-3 py-2 rounded-md'>Approved</button>
              <button className='w-[100px] border border-red-500 text-red-500 text-sm font-semibold px-3 py-2 rounded-md cursor-pointer transition-colors hover:border-red-600 hover:text-red-600 hover:transition-colors duration-200'>Decline</button>
            </div>}
        </div>
      ))}
    </div>
  )
}

export default OfferJobList