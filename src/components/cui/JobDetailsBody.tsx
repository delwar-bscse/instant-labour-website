import React from 'react'
import { jobDetails } from '@/data/jobDatas';

const JobDetailsBody = () => {
  return (
    <>
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
    </>
  )
}

export default JobDetailsBody