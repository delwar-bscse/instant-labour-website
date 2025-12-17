
import React from 'react'
import WorkerDetailsTop from '@/components/cui/WorkerDetailsTop';
import WorkerDetailsBody from '@/components/cui/WorkerDetailsBody';
import { Button } from '@/components/ui/button';
// import { toast } from 'sonner';
// import { getUserRoleEmployer } from '@/utils/getUserRoleClient';
import { reviewDatas } from '@/data/reviewData';
import ReviewCard from '@/components/card/ReviewCard';
import { myFetch } from '@/utils/myFetch';
// import { useRouter } from 'next/navigation';

const SingleWorker = async({params}: {params: {id: string}}) => {
  const id = params.id

  const res = await myFetch(`/user/workers/${id}`);
  const workerDetails = res?.data
  console.log("Get User Data : ", res);
  // const router = useRouter();

  // const handleBooked = () => {
  //   if (getUserRoleEmployer()) {
  //     toast.success("Booked Successfully");
  //   } else {
  //     toast.error("Please login first");
  //   }
  // }

  // const handleMessage = () => {
  //   if (getUserRoleEmployer()) {
  //     router.push("/inbox");
  //   } else {
  //     toast.error("Please login first");
  //   }
  // }

  return (
    <div className='maxWidth pt-4 pb-20'>

      {/* ------------------- Worker Details Body ------------------- */}
      <WorkerDetailsTop workerDetails={workerDetails} />


      {/* --------------------- Book Now Button --------------------- */}
      <div className='maxWidth flex gap-2 pb-8'>
        <div className=''>
          <Button  variant="yelloBtn" className='w-full text-gray-700 rounded-sm'>Book Now</Button>
        </div>
        <div className=''>
          <Button  variant="yelloBtn" className='w-full text-gray-600 rounded-sm'>Message</Button>
        </div>
      </div>

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