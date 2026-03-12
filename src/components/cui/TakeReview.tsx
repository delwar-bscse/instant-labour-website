"use client"

import React, { useState } from 'react'
import StarRating from './StarRaings'
// import { toast } from 'sonner'
import { myFetch } from '@/utils/myFetch'
import { toast } from 'sonner'

const TakeReview = ({ id }: { id?: string }) => {
  const [rating, setRating] = useState(3);
  const [review, setReview] = useState("");

  const onSubmit = async () => {
    //console.log("Review : ", id, rating, review);

    const res = await myFetch(`/review`, {
      method: "POST", body: {
        reviewee: id,
        rating: rating,
        review: review
      }
    })
    //console.log("Review res : ", res);

    if (res.success) {
      toast.success(res.message ?? "Review submitted successfully!");
      // toast.success("Review submitted successfully!");
      document.getElementById("cancel")?.click();
    } else {
      toast.error(res.message);
    }
  }
  return (
    <div className=''>
      <div className='pb-4'>
        <StarRating rating={rating} setRating={setRating} />
      </div>
      <p className='text-gray-900 pb-1'>Review</p>
      <textarea value={review} onChange={(e) => setReview(e.target.value)} name="" id="" cols={30} rows={10} className='border border-gray-300 w-full rounded-sm p-2'></textarea>
      <div className='pt-4'>
        <button onClick={onSubmit} className='w-full py-1.5 cursor-pointer text-center bg-brandClr2 rounded-sm font-semibold'>Submit</button>
      </div>
    </div>
  )
}

export default TakeReview