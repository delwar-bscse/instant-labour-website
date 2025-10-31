"use client"


import JobDetailsBody from '@/components/cui/JobDetailsBody'
import React from 'react'
import { reviewDatas } from '@/data/reviewData'
import ReviewCard from '@/components/card/ReviewCard'
import Image from 'next/image'
import { jobDetails } from '@/data/jobDatas'
import JobDetailsTopRight from '@/components/cui/JobDetailsTopRight'
import Link from 'next/link'
import { CustomModal } from '@/components/modal/CustomModal'
import TakeReview from '@/components/cui/TakeReview'

const page = () => {

  const randomResult = (): boolean => {
    const Matches = Math.random();
    if (Matches > 0.4) {
      return true;
    } else {
      return false
    }
  }


  return (
    <div className='maxWidth pt-4 pb-20'>

      {/* --------------------- Job Header --------------------- */}
      {/* <JobDetailsTop /> */}
      <div key={jobDetails._id} className='flex flex-col md:flex-row gap-8 bg-white'>

        {/* --------------------- Job Image --------------------- */}
        <div>
          <Image src={jobDetails.jobImg} width={500} height={400} alt={jobDetails.companyName} className='w-full sm:w-[400px] h-[270px] rounded-md' />
        </div>

        {/* --------------------- Job Header --------------------- */}
        <div className='space-y-3'>
          <div className='space-y-3'>

            <JobDetailsTopRight />


            {/* ------------------- Contact & Review Button ------------------- */}
            {randomResult() ? <p className='flex gap-4 items-center'>
              <span className='text-blue-600 font-semibold'>Status :</span>
              <span className='text-blue-600 font-semibold'>Ongoing</span>
            </p> : <div className='flex gap-4 items-center'>
              <Link href={`/inbox`} className='border-2 border-brandClr2 bg-brandClr2 text-gray-800 font-semibold py-2 px-8 rounded-sm hover:bg-brandClr2/90 transition-colors duration-300'>Contact Now</Link>
              <CustomModal
                title="Feedback"
                trigger={<button className='border-2 border-blue-600 text-blue-600 font-semibold py-2 px-8 rounded-sm cursor-pointer hover:border-blue-700 transition-colors duration-300'>Feed Back</button>}
              >
                <TakeReview />
              </CustomModal>
            </div>}

          </div>

        </div>
      </div>

      {/* --------------------- Job body (description) --------------------- */}
      <JobDetailsBody />


      {/* --------------------- Rating list --------------------- */}
      <div className='space-y-8 mt-12'>
        <p className='py-2 px-3 border-2 border-blue-600 font-semibold text-blue-700 rounded-sm text-xl'>Reviews</p>
        {reviewDatas.map((item, index) => (
          <div key={index} className=''>
            <ReviewCard item={item} />
          </div>
        ))}
      </div>

    </div>
  )
}

export default page