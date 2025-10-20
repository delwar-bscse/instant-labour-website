"use client"


import JobDetailsBody from '@/components/cui/JobDetailsBody'
import React from 'react'
import JobDetailsTop from '@/components/cui/JobDetailsTop'
import { reviewDatas } from '@/data/reviewData'
import ReviewCard from '@/components/card/ReviewCard'
// import { MdArrowBack } from 'react-icons/md'

const page = () => {

  // const handleApply = () => {
  //   if (getUserRoleWorker()) {
  //     document.getElementById("cancel")?.click()
  //   } else {
  //     toast.error("Please login first");
  //   }
  // }


  return (
    <div className='maxWidth pt-4 pb-20'>

      {/* --------------------- Job Header --------------------- */}
      <JobDetailsTop />

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