import ReviewCard from '@/components/card/ReviewCard';
import WorkerDetailsBody from '@/components/cui/WorkerDetailsBody'
import WorkerDetailsTop from '@/components/cui/WorkerDetailsTop'
import { reviewDatas } from '@/data/reviewData';
import Link from 'next/link';
import React from 'react'

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const BookingWorkerDetails = ({ searchParams }: Props) => {
  const type = searchParams.type;
  console.log("Status", type)
  return (
    <div className='maxWidth pt-4 pb-20'>
      {/* ------------------- Worker Top ------------------- */}
      <WorkerDetailsTop />

      {/* ------------------- Contact & Review Button ------------------- */}
      <div className='maxWidth my-10 flex gap-4 items-center'>
        <Link href={`/inbox`} className='border-2 border-brandClr2 bg-brandClr2 text-gray-800 font-semibold py-2 px-8 rounded-sm hover:bg-brandClr2/90 transition-colors duration-300'>Contact Now</Link>
        <button className='border-2 border-blue-600 text-blue-600 font-semibold py-2 px-8 rounded-sm hover:border-blue-700 transition-colors duration-300'>Feed Back</button>
      </div>

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
    </div>
  )
}

export default BookingWorkerDetails