/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React from 'react'
import { LuLayers2 } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { FiClock } from "react-icons/fi";
// import { jobDetails } from '@/data/jobDatas';
import { HiOutlineCurrencyPound } from "react-icons/hi";
import { MdOutlineVerifiedUser } from 'react-icons/md';
import dayjs from 'dayjs';

const JobDetailsTopRight = ({ jobDetails }: { jobDetails: any }) => {

  return (
    <div className='space-y-3'>
      <div className='flex items-center justify-between'>
        <h3 className='font-semibold text-2xl text-gray-800'>{jobDetails?.companyName}</h3>
      </div>
      <div className='space-y-3'>
        <ul className='space-y-2 text-lg text-gray-500'>
          <li className='flex items-center gap-3'>
            <LuLayers2 />
            <span>{jobDetails?.companyName}</span>
          </li>
          <li className='flex items-center gap-3'>
            <GrLocation />
            <span>{jobDetails?.address}</span>
          </li>
          <li className='flex items-center gap-3'>
            <FiClock />
            <span>{dayjs(jobDetails?.createdAt).format("DD, MMMM YYYY")}</span>
          </li>
          <li className='flex items-center gap-3'>
            <HiOutlineCurrencyPound />
            <span>{jobDetails?.salary}</span>
          </li>
          <li className={`flex items-center gap-3 ${true ? "text-green-500" : "text-red-500"}`}>
            <MdOutlineVerifiedUser />
            <span>{true ? "Verified" : "Not Verified"}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default JobDetailsTopRight