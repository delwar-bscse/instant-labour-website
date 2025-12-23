/* eslint-disable @typescript-eslint/no-explicit-any */

import ApplicationApproveDeclineButtons from '@/components/actions/ApplicationApproveDeclineButtons';
import ReviewCard from '@/components/card/ReviewCard';
import TakeReview from '@/components/cui/TakeReview';
import WorkerDetailsBody from '@/components/cui/WorkerDetailsBody'
import WorkerDetailsTop from '@/components/cui/WorkerDetailsTop'
import { CustomModal } from '@/components/modal/CustomModal';
import { reviewDatas } from '@/data/reviewData';
import { myFetch } from '@/utils/myFetch';
import Link from 'next/link';
import React from 'react'

const ApproveAppliedWorkerDetails = async ({ searchParams, params }: { searchParams: any, params: any }) => {
  const { type } = await searchParams
  const { id } = await params

  const res = await myFetch(`/user/workers/${id}`);
  const workerDetails = res?.data
  console.log("Get Worker Data : ", workerDetails);


  return (
    <div className='pb-12'>
      {/* ------------------- Worker Details Top ------------------- */}
      <WorkerDetailsTop workerDetails={workerDetails} />



      {/* ------------------- Contact & Review Button ------------------- */}
      {type === 'approved' && <div className='maxWidth mb-8 flex gap-4 items-center'>
        <Link href={`/inbox`} className='border-2 border-brandClr2 bg-brandClr2 text-gray-800 font-semibold py-2 px-8 rounded-sm hover:bg-brandClr2/90 transition-colors duration-300'>Contact Now</Link>
        <CustomModal
          title="Feedback"
          trigger={<button className='border-2 border-blue-600 text-blue-600 font-semibold py-2 px-8 rounded-sm cursor-pointer hover:border-blue-700 transition-colors duration-300'>Feed Back</button>}
        >
          <TakeReview />
        </CustomModal>
      </div>}

      {/* ------------------- Worker Details Body ------------------- */}
      <WorkerDetailsBody workerDetails={workerDetails} jobType="Full Time" />

      {/* --------------------- Rating list --------------------- */}
      <div className='maxWidth space-y-8 mt-12'>
        <p className='py-2 px-3 border-2 border-blue-600 font-semibold text-blue-700 rounded-sm text-xl'>Reviews</p>
        {reviewDatas.map((item, index) => (
          <div key={index} className=''>
            <ReviewCard item={item} />
          </div>
        ))}
      </div>

      {/* ------------------- Action Buttons - Decline, Approve ------------------- */}
      {type === 'applied' && <ApplicationApproveDeclineButtons applicationId={workerDetails._id} workerId={workerDetails?._id} />}


    </div>
  )
}

export default ApproveAppliedWorkerDetails