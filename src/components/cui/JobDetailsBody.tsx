import React from 'react'
// import { jobDetails } from '@/data/jobDatas';

const JobDetailsBody = ({ jobDetails }: { jobDetails: any }) => {
  return (
    <>
      <div>
        <h3 className='font-semibold text-xl md:text-2xl text-gray-800 mt-6 md:mt-8'>Overview</h3>
        <p className='text-sm md:text-base text-gray-600 mt-2'>{jobDetails.overview}</p>
      </div>
      <div>
        <h3 className='font-semibold text-xl md:text-2xl text-gray-800 mt-6 md:mt-8'>Key Responsibilities</h3>
        <ul className='pl-8 list-disc list-inside'>
          {jobDetails.responsibilities.map((item: string, index: number) => (
            <li key={index} className='text-sm md:text-base text-gray-600 mt-2'>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className='font-semibold text-xl md:text-2xl text-gray-800 mt-6 md:mt-8'>Skills Requirements</h3>
        <ul className='pl-8 list-disc list-inside'>
          {jobDetails.skillRequirements.map((item: string, index: number) => (
            <li key={index} className='text-sm md:text-base text-gray-600 mt-2'>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className='font-semibold text-xl md:text-2xl text-gray-800 mt-6 md:mt-8'>Benefits</h3>
        <ul className='pl-8 list-disc list-inside'>
          {jobDetails.benefits.map((item: string, index: number) => (
            <li key={index} className='text-sm md:text-base text-gray-600 mt-2'>{item}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default JobDetailsBody