

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
  // console.log("Get Worker Data : ", res);


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

// "use client"

// import ReviewCard from '@/components/card/ReviewCard';
// import TakeReview from '@/components/cui/TakeReview';
// import WorkerDetailsBody from '@/components/cui/WorkerDetailsBody'
// import WorkerDetailsTop from '@/components/cui/WorkerDetailsTop'
// import { CustomModal } from '@/components/modal/CustomModal';
// import { reviewDatas } from '@/data/reviewData';
// import Link from 'next/link';
// import { useSearchParams } from 'next/navigation';
// import React, { Suspense } from 'react'

// const BookingWorkerDetailsSuspense = () => {
//   const searchParams = useSearchParams();
//   const type = searchParams.get("type");
//   console.log("Status", type)

//   return (
//     <div className='maxWidth pt-4 pb-20'>
//       {/* ------------------- Worker Top ------------------- */}
//       <WorkerDetailsTop />

//       {/* ------------------- Contact & Review Button ------------------- */}
//       <div className='maxWidth mb-8 flex gap-4 items-center'>
//         <Link href={`/inbox`} className='border-2 border-brandClr2 bg-brandClr2 text-gray-800 font-semibold py-2 px-8 rounded-sm hover:bg-brandClr2/90 transition-colors duration-300'>Contact Now</Link>
//         <CustomModal
//           title="Feedback"
//           trigger={<button className='border-2 border-blue-600 text-blue-600 font-semibold py-2 px-8 rounded-sm cursor-pointer hover:border-blue-700 transition-colors duration-300'>Feed Back</button>}
//         >
//           <TakeReview />
//         </CustomModal>
//       </div>

//       {/* ------------------- Worker Details Body ------------------- */}
//       <WorkerDetailsBody />

//       {/* --------------------- Rating list --------------------- */}
//       <div className='maxWidth space-y-8 mt-12'>
//         <p className='py-2 px-3 border-2 border-blue-600 font-semibold text-blue-700 rounded-sm text-xl'>Reviews</p>
//         {reviewDatas.map((item, index) => (
//           <div key={index} className=''>
//             <ReviewCard item={item} />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// const BookingWorkerDetails = () => {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <BookingWorkerDetailsSuspense />
//     </Suspense>
//   )
// }

// export default BookingWorkerDetails