"use client"

import React from 'react'
import StarRating from './StarRaings'
import { toast } from 'sonner'

const TakeReview = () => {
  const onSubmit = () => {
    toast.success("Review submitted successfully!");
    document.getElementById("cancel")?.click();
  }
  return (
    <div className=''>
      <div className='pb-4'>
        <StarRating />
      </div>
      <p className='text-gray-900 pb-1'>Review</p>
      <textarea name="" id="" cols={30} rows={10} className='border border-gray-300 w-full rounded-sm'></textarea>
      <div className='pt-4'>
        <button onClick={onSubmit} className='w-full py-1.5 cursor-pointer text-center bg-brandClr2 rounded-sm font-semibold'>Submit</button>
      </div>
    </div>
  )
}

export default TakeReview