import JobDetailsBody from '@/components/cui/JobDetailsBody'
import React from 'react'
import JobDetailsTop from '@/components/cui/JobDetailsTop'
// import { reviewDatas } from '@/data/reviewData'
import ReviewCard from '@/components/card/ReviewCard'
import { myFetch } from '@/utils/myFetch'

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const res = await myFetch(`/job/${id}`);
  const jobDetails = res?.data || [];
  console.log("Job details res : ", res);


  const resReview = await myFetch(`/review/${jobDetails?.createdBy?._id}`);
  console.log("Employee reviews : ", resReview?.data);


  return (
    <div className='maxWidth pt-4 pb-20'>

      {/* --------------------- Job Header --------------------- */}
      <JobDetailsTop jobDetails={jobDetails} />

      {/* --------------------- Job body (description) --------------------- */}
      <JobDetailsBody jobDetails={jobDetails} />


      {/* --------------------- Rating list --------------------- */}
      <div className='space-y-8 mt-12'>
        <p className='py-2 px-3 border-2 border-blue-600 font-semibold text-blue-700 rounded-sm text-xl'>Reviews</p>
        {resReview?.data.map((item: any, index: number) => (
          <div key={index} className=''>
            <ReviewCard item={item} />
          </div>
        ))}
      </div>

    </div>
  )
}

export default page