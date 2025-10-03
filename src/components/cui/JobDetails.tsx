import Image from 'next/image'
import React from 'react'
import { LuLayers2 } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { FiClock } from "react-icons/fi";
import { jobDetails } from '@/data/jobDatas';
import { HiOutlineCurrencyPound } from "react-icons/hi";
import { MdOutlineVerifiedUser } from 'react-icons/md';
import { BiUserCircle } from 'react-icons/bi';

const JobDetails = () => {
  return (
    <div key={jobDetails._id} className='flex flex-col md:flex-row gap-8 bg-white'>

      {/* --------------------- Job Image --------------------- */}
      <div>
        <Image src={jobDetails.jobImg} width={500} height={400} alt={jobDetails.companyName} className='w-full sm:w-[400px] h-[260px] rounded-md' />
      </div>

      {/* --------------------- Job Header --------------------- */}
      <div className='space-y-3'>
        <div className='flex items-center justify-between'>
          <h3 className='font-semibold text-2xl text-gray-800'>{jobDetails.companyName}</h3>
        </div>
        <ul className='space-y-2 text-lg text-gray-500'>
          <li className='flex items-center gap-3'>
            <LuLayers2 />
            <span>{jobDetails.companyName}</span>
          </li>
          <li className='flex items-center gap-3'>
            <GrLocation />
            <span>{jobDetails.location}</span>
          </li>
          <li className='flex items-center gap-3'>
            <FiClock />
            <span>{jobDetails.postDate}</span>
          </li>
          <li className='flex items-center gap-3'>
            <HiOutlineCurrencyPound />
            <span>{jobDetails.price}</span>
          </li>
          <li className={`flex items-center gap-3 ${jobDetails.isVerified ? "text-green-500" : "text-red-500"}`}>
            <MdOutlineVerifiedUser />
            <span>{jobDetails.isVerified ? "Verified" : "Not Verified"}</span>
          </li>
        </ul>

        {/* --------------------- Job Status & How Much Apply --------------------- */}
        <div className='flex items-center gap-2 font-semibold'>
          <p className={`${jobDetails.status === "Ongoing" ? "text-blue-500" : "text-red-500"} flex items-center gap-3`}><BiUserCircle size={20}/>{jobDetails.status}</p>
          <p className='text-red-500'>({jobDetails.apply} apply)</p>
        </div>
        
      </div>
    </div>
  )
}

export default JobDetails