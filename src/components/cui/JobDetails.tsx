import Image from 'next/image'
import React from 'react'
import { LuLayers2 } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { FiClock } from "react-icons/fi";
import { jobDetails } from '@/data/jobDatas';
import { HiOutlineCurrencyPound } from "react-icons/hi";
// import { MdOutlineVerifiedUser } from "react-icons/md";
import CustomButton from '@/components/cui/CustomButton';

const JobDetails = () => {
  return (
    <div className='maxWidth pt-4 pb-20'>
      <div key={jobDetails._id} className='flex flex-col md:flex-row gap-8 bg-white'>
        <div>
          <Image src={jobDetails.jobImg} width={500} height={400} alt={jobDetails.companyName} className='w-full sm:w-[400px] h-[260px] rounded-md' />
        </div>
        <div className='space-y-3'>
          <div className='flex items-center justify-between'>
            <h3 className='font-semibold text-2xl text-gray-800'>{jobDetails.companyName}</h3>

          </div>
          <ul className='space-y-1 text-lg text-gray-500'>
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
            {/* <li className={`flex items-center gap-3 ${jobDetails.isVerified ? "text-green-500" : "text-red-500"}`}>
              <MdOutlineVerifiedUser />
              <span>{jobDetails.isVerified ? "Verified" : "Not Verified"}</span>
            </li> */}
          </ul>
          <div className='flex items-center justify-between py-1 font-semibold'>
            <p className={`${jobDetails.status === "Ongoing" ? "text-green-500" : "text-red-500"}`}>{jobDetails.status}</p>
            <p className='text-red-500'>{jobDetails.apply} apply</p>
          </div>
          <CustomButton text="Apply Now" variant="button01" className='w-full' />
        </div>
      </div>
      <div>
        <h3 className='font-semibold text-xl md:text-2xl text-gray-800 mt-6 md:mt-8'>Overview</h3>
        <p className='text-sm md:text-base text-gray-600 mt-2'>{jobDetails.jobOverview}</p>
      </div>
      <div>
        <h3 className='font-semibold text-xl md:text-2xl text-gray-800 mt-6 md:mt-8'>Key Responsibilities</h3>
        <ul className='pl-8 list-disc list-inside'>
          {jobDetails.keyResponsibilities.map((item, index) => (
            <li key={index} className='text-sm md:text-base text-gray-600 mt-2'>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className='font-semibold text-xl md:text-2xl text-gray-800 mt-6 md:mt-8'>Skills Requirements</h3>
        <ul className='pl-8 list-disc list-inside'>
          {jobDetails.skillsRequirements.map((item, index) => (
            <li key={index} className='text-sm md:text-base text-gray-600 mt-2'>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className='font-semibold text-xl md:text-2xl text-gray-800 mt-6 md:mt-8'>Benefits</h3>
        <ul className='pl-8 list-disc list-inside'>
          {jobDetails.benefits.map((item, index) => (
            <li key={index} className='text-sm md:text-base text-gray-600 mt-2'>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default JobDetails