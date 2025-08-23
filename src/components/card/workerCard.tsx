/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'
import React from 'react'
import { LuLayers2 } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import CustomButton from '../cui/CustomButton';
import { MdVerifiedUser } from "react-icons/md";
import { HiOutlineCurrencyPound } from "react-icons/hi";

const WorkerCard = ({ item, url }: { item: Record<string, any>, url: string }) => {
  return (
    <div key={item._id} className='space-y-2 bg-white customShadow p-4'>
      <div>
        <Image src={item.workerImg} width={500} height={400} alt={item.name} className='w-full h-[260px]' />
      </div>
      <div className='space-y-3'>
        <div className='flex items-center gap-4'>
          <div className=''>
            <Image src={item.workerImg} width={40} height={40} alt={item.name} className='object-cover w-[40px] h-[40px] rounded-full' />
          </div>
          <div>
            <h3 className='font-semibold text-xl text-gray-800'>{item.name}</h3>
            <p className={`text-gray-800 text-sm flex items-center gap-1 ${item.isVerified ? "text-green-500" : "text-red-500"}`}>
              <MdVerifiedUser size={18} />
              <span>{item.isVerified ? "Verified" : "Unverified"}</span>
              <span className='text-gray-500 pl-2'> - {item.date}</span>
            </p>
          </div>
        </div>
        <ul className='space-y-1 text-gray-500'>
          <li className='flex items-center gap-3'>
            <LuLayers2 size={20} />
            <span>{item.category}</span>
          </li>
          <li className='flex items-center gap-3'>
            <GrLocation size={20} />
            <span>{item.location}</span>
          </li>
          <li className='flex items-center gap-3 text-gray-800'>
            <HiOutlineCurrencyPound size={20} />
            <span>{item.price} Per Day</span>
          </li>
        </ul>
        <CustomButton text="View Profile" url={url} variant="button01" className='w-full' />
      </div>
    </div>
  )
}

export default WorkerCard