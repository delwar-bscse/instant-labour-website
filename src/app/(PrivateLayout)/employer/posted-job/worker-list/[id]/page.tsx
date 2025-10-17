import ReviewCard from '@/components/card/ReviewCard';
import TakeReview from '@/components/cui/TakeReview';
import WorkerDetailsBody from '@/components/cui/WorkerDetailsBody'
import WorkerDetailsTop from '@/components/cui/WorkerDetailsTop'
import { CustomModal } from '@/components/modal/CustomModal';
import { reviewDatas } from '@/data/reviewData';
import Link from 'next/link';
import React from 'react'

interface Props {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const ApproveAppliedWorkerDetails = ({ searchParams }: Props) => {
  const type = searchParams.type;
  return (
    <div className='pb-12'>
      {/* ------------------- Worker Details Top ------------------- */}
      <WorkerDetailsTop />



      {/* ------------------- Contact & Review Button ------------------- */}
      {type === 'approved' && <div className='maxWidth my-10 flex gap-4 items-center'>
        <Link href={`/inbox`} className='border-2 border-brandClr2 bg-brandClr2 text-gray-800 font-semibold py-2 px-8 rounded-sm hover:bg-brandClr2/90 transition-colors duration-300'>Contact Now</Link>
        <CustomModal
          title="Feedback"
          trigger={<button className='border-2 border-blue-600 text-blue-600 font-semibold py-2 px-8 rounded-sm cursor-pointer hover:border-blue-700 transition-colors duration-300'>Feed Back</button>}
        >
          <TakeReview />
        </CustomModal>
      </div>}

      {/* ------------------- Worker Details Body ------------------- */}
      <WorkerDetailsBody />

      {/* --------------------- Rating list --------------------- */}
      <div className='maxWidth space-y-8 mt-12'>
        {reviewDatas.map((item, index) => (
          <div key={index} className=''>
            <ReviewCard item={item} />
          </div>
        ))}
      </div>

      {/* ------------------- Action Buttons - Decline, Approve ------------------- */}
      {type === 'applied' && <div className='maxWidth my-10 flex gap-4 items-center'>
        <button className='border-2 border-red-600 text-red-600 font-semibold py-2 px-8 rounded-sm hover:border-red-700 transition-colors duration-300'>Decline</button>
        <button className='border-2 border-brandClr2 bg-brandClr2 text-gray-800 font-semibold py-2 px-8 rounded-sm hover:bg-brandClr2/90 transition-colors duration-300'>Approve</button>
      </div>}
    </div>
  )
}

export default ApproveAppliedWorkerDetails