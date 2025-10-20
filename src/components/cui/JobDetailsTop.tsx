"use client"

import Image from 'next/image'
import React from 'react'
import { LuLayers2 } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { FiClock } from "react-icons/fi";
import { jobDetails } from '@/data/jobDatas';
import { HiOutlineCurrencyPound } from "react-icons/hi";
import { MdArrowBack, MdOutlineStarPurple500, MdOutlineVerifiedUser } from 'react-icons/md';
import { getUserRole, getUserRoleWorker } from '@/utils/getUserRole';
import { toast } from 'sonner';
import { CustomModal } from '../modal/CustomModal';
import Link from 'next/link';

const JobDetailsTop = () => {


  const goBack = () => {
    window.history.back()
  }

  const handleApply = () => {
    if (getUserRoleWorker()) {
      document.getElementById("cancel")?.click()
    } else {
      toast.error("Please login first");
    }
  }

  const randomResult = (): boolean => {
    const Matches = Math.random();
    if (Matches > 0.3) {
      return true;
    } else {
      return false
    }
  }

  return (
    <div>
      <div onClick={goBack} className='flex items-center gap-2 md:gap-4 cursor-pointer pb-4 md:pb-6 group'>
        <span className='size-6 md:size-9 bg-gray-200 rounded-full flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-200'>
          < MdArrowBack className='size-4 md:size-6' />
        </span>
        <h2 className='text-xl md:text-3xl font-semibold text-gray-600'>View Details</h2>
      </div>
      <div key={jobDetails._id} className='flex flex-col md:flex-row gap-8 bg-white'>

        {/* --------------------- Job Image --------------------- */}
        <div>
          <Image src={jobDetails.jobImg} width={500} height={400} alt={jobDetails.companyName} className='w-full sm:w-[400px] h-[270px] rounded-md' />
        </div>

        {/* --------------------- Job Header --------------------- */}
        <div className='space-y-3'>
          <div className='flex items-center gap-2'>
            <h3 className='font-semibold text-2xl text-gray-800'>{jobDetails.companyName}</h3>
            <div className='flex items-center gap-1'>
              <MdOutlineStarPurple500 className='text-brandClr2 size-7' />
              <p className='text-xl font-semibold text-gray-600'>4.5</p>
            </div>
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


            {/* --------------------- Apply Now Button --------------------- */}
            {!getUserRole() && <div className='flex'>
              <CustomModal title="" trigger={<button className='border-2 border-brandClr2 bg-brandClr2 text-gray-800 font-semibold py-2 px-8 rounded-sm hover:bg-brandClr2/90 transition-colors duration-300'>Apply Now</button>} >
                <p className='text-center text-2xl text-gray-700 font-bold'>Are You Sure You Want To Apply</p>
                <div className='w-full max-w-[200px] mx-auto flex justify-center gap-4'>
                  <div className='flex-1 max-w-[200px] mx-auto mt-12'>
                    <button onClick={() => document.getElementById("cancel")?.click()} className='w-full border border-red-500 px-4 py-1.5 rounded-sm'>No</button>
                  </div>
                  <div className='flex-1 max-w-[200px] mx-auto mt-12'>
                    <button onClick={handleApply} className='w-full bg-green-500 text-white px-4 py-1.5 rounded-sm'>Yes</button>
                  </div>
                </div>
              </CustomModal>
            </div>}


            {/* ------------------- Contact & Review Button ------------------- */}
            {getUserRoleWorker() && (randomResult() ? <div className='flex gap-4 items-center'>
              <Link href={`/inbox`} className='border-2 border-brandClr2 bg-brandClr2 text-gray-800 font-semibold py-2 px-8 rounded-sm hover:bg-brandClr2/90 transition-colors duration-300'>Contact Now</Link>
              <button className='border-2 border-blue-600 text-blue-600 font-semibold py-2 px-8 rounded-sm hover:border-blue-700 transition-colors duration-300'>Feed Back</button>
            </div> : <div className='flex'>
              <CustomModal title="" trigger={<button className='border-2 border-brandClr2 bg-brandClr2 text-gray-800 font-semibold py-2 px-8 rounded-sm hover:bg-brandClr2/90 transition-colors duration-300'>Apply Now</button>} >
                <p className='text-center text-2xl text-gray-700 font-bold'>Are You Sure You Want To Apply</p>
                <div className='w-full max-w-[200px] mx-auto flex justify-center gap-4'>
                  <div className='flex-1 max-w-[200px] mx-auto mt-12'>
                    <button onClick={() => document.getElementById("cancel")?.click()} className='w-full border border-red-500 px-4 py-1.5 rounded-sm'>No</button>
                  </div>
                  <div className='flex-1 max-w-[200px] mx-auto mt-12'>
                    <button onClick={handleApply} className='w-full bg-green-500 text-white px-4 py-1.5 rounded-sm'>Yes</button>
                  </div>
                </div>
              </CustomModal>
            </div>)}

          </div>

        </div>
      </div>
    </div>
  )
}

export default JobDetailsTop