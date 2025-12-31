import React from 'react'
import { MdOutlineStarPurple500, MdOutlineVerifiedUser } from "react-icons/md";
// import { workerDetails } from '@/data/workerDatas';
import { FaCheckSquare } from "react-icons/fa";

const WorkerDetailsBody = ({ workerDetails, jobType }: { workerDetails: any, jobType?: string }) => {
  return (
    <div className='maxWidth'>
      <div className='space-y-5'>
        {/* ------------------- Personal Info ------------------- */}
        <div className='space-y-2'>
          <div className='flex items-center gap-4'>
            <p className='font-bold text-xl text-gray-700'>{workerDetails?.name}</p>
            <p>
              <span className='text-green-500 text-sm flex items-center gap-1'><MdOutlineVerifiedUser size={18} />{workerDetails?.verified ? "Verified" : "Not Verified"}</span>
            </p>
            <div className='flex items-center gap-1'>
              <MdOutlineStarPurple500 className='text-brandClr2 size-6' />
              <p className='font-semibold text-gray-600'>{workerDetails?.rating}</p>
            </div>
          </div>
          <p className='text-gray-700 text-xl'>{workerDetails?.category} / {workerDetails?.yearsOfExperience} years  of experience</p>
          {jobType && <p className='text-gray-700 text-xl'>{jobType}</p>}
          <p className='text-gray-800 font-semibold text-xl'>£{workerDetails?.salary} {workerDetails?.salaryType}</p>
        </div>
        <div className='space-y-1'>
          <h3 className='text-gray-800 font-semibold text-xl'>About Me</h3>
          <p className='text-gray-500'>{workerDetails?.about}</p>
        </div>

        {/* ------------------- Core Skills ------------------- */}
        <div className='space-y-2'>
          <h3 className='text-gray-800 font-semibold text-xl'>Core Skills</h3>
          <ul>
            {workerDetails?.coreSkills?.map((item: string, index: number) => (
              <li key={index} className='flex items-center gap-3'>
                <FaCheckSquare size={20} className='text-green-500' />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ------------------- Portfolio / Work Experience ------------------- */}
        <div className='space-y-3'>
          <h2 className='text-gray-800 font-semibold text-xl'>Portfolio / Work Experience</h2>
          <div className='space-y-2'>
            {workerDetails?.workExperiences?.map((item: any, index: number) => (
              <div key={index} className=''>
                <p className='text-gray-700 font-semibold'>{index + 1}. {item.title}</p>
                <p className='text-gray-600'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkerDetailsBody