"use client"
import React from 'react'
import { LuLayers2 } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { FiClock } from "react-icons/fi";
import { jobDetails } from '@/data/jobDatas';
import { HiOutlineCurrencyPound } from "react-icons/hi";
import { MdOutlineVerifiedUser } from 'react-icons/md';

const JobDetailsTopRight = () => {

  return (
    <div className='space-y-3'>
      <div className='flex items-center justify-between'>
        <h3 className='font-semibold text-2xl text-gray-800'>{jobDetails.companyName}</h3>
      </div>
      <div className='space-y-3'>
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
      </div>
    </div>
  )
}

export default JobDetailsTopRight