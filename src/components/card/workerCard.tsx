/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'
import React from 'react'
import { LuLayers2 } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
// import CustomButton from '../cui/CustomButton';
import { MdVerifiedUser } from "react-icons/md";
import { HiOutlineCurrencyPound } from "react-icons/hi";
import dayjs from 'dayjs';
import { formatUrl } from '@/utils/formatUrl';

const WorkerCard = ({ item }: { item: any, url?: string, status?: string }) => {

  // const handleStatus = () => {
  //   if (status === "Approved") {
  //     return "text-green-500"
  //   } else if (status === "Pending") {
  //     return "text-blue-500"
  //   } else {
  //     return "text-red-500"
  //   }
  // }


  return (
    <>
      <div className=''>
        <Image src={formatUrl(item?.profile)} width={500} height={400} alt={item?.name} className='w-full h-65' />
      </div>
      <div className='space-y-3'>
        <div className='flex items-center gap-4'>
          <div className='relative'>
            <Image src={formatUrl(item?.profile)} width={40} height={40} alt={item?.name} className='object-cover w-10 h-10 rounded-full' />
            <div className='size-3 rounded-full absolute top-0 right-0 bg-green-500' />
          </div>
          <div>
            <h3 className='font-semibold text-xl text-gray-800'>{item?.name}</h3>
            <p className={`text-gray-800 text-sm flex items-center gap-1 ${item?.verified ? "text-green-500" : "text-red-500"}`}>
              <MdVerifiedUser size={18} />
              <span>{item?.verified ? "Verified" : "Unverified"}</span>
              <span className='text-gray-500 pl-2'> - {dayjs(item?.createdAt).format("DD, MMMM YYYY")}</span>
            </p>
          </div>
        </div>
        <ul className='space-y-1 text-gray-500'>
          <li className='flex items-center gap-3'>
            <LuLayers2 size={20} />
            <span>{item?.category}</span>
          </li>
          <li className='flex items-center gap-3'>
            <GrLocation size={20} />
            {/* <span>{item?.location}</span> */}
          </li>
          <li className='flex items-center gap-3 text-gray-800'>
            <HiOutlineCurrencyPound size={20} />
            <span>{item?.salary} {item?.salaryType}</span>
          </li>
        </ul>
        {/* {status && <p className={`text-sm font-semibold ${handleStatus()}`}>{status}</p>} */}
        {/* <CustomButton text="View Profile" url={url} variant="button01" className='w-full' /> */}
      </div>
    </>
  )
}

export default WorkerCard