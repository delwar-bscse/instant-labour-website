"use client"


import JobDetailsBody from '@/components/cui/JobDetailsBody'
import React from 'react'
import JobDetailsTop from '@/components/cui/JobDetailsTop'
import { reviewDatas } from '@/data/reviewData'
import ReviewCard from '@/components/card/ReviewCard'

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