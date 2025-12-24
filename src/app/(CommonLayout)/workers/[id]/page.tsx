

import React from 'react'
import WorkerDetailsTop from '@/components/cui/WorkerDetailsTop';
import WorkerDetailsBody from '@/components/cui/WorkerDetailsBody';
import { reviewDatas } from '@/data/reviewData';
import ReviewCard from '@/components/card/ReviewCard';
import { myFetch } from '@/utils/myFetch';
import BookMessageButtons from '@/components/actions/BookMessageButtons';

const SingleWorker = async ({ params }: { params: { id: string } }) => {
  const id = params.id

  const res = await myFetch(`/user/workers/${id}`);
  const workerDetails = res?.data
  console.log("Get Worker Details Data : ", res);


  return (
    <div className='maxWidth pt-4 pb-20'>

      {/* ------------------- Worker Details Body ------------------- */}
      <WorkerDetailsTop workerDetails={workerDetails} />

      {/* ------------------- Book & Message Buttons ------------------- */}
      <BookMessageButtons workerDetails={workerDetails} />

      {/* ------------------- Worker Details Body ------------------- */}
      <WorkerDetailsBody workerDetails={workerDetails} />

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

export default SingleWorker