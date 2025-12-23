/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React from 'react'
import { Button } from '../ui/button'
import { toast } from 'sonner';
import { getUserRoleEmployer } from '@/utils/getUserRoleClient';
import { myFetch } from '@/utils/myFetch';
import { useRouter } from 'next/navigation';

const BookMessageButtons = ({ workerDetails }: { workerDetails: any }) => {
  const router = useRouter();

  const handleBooked = async () => {
    if (getUserRoleEmployer()) {
      console.log("Worker Id : ", workerDetails._id);
      const res = await myFetch(`/booking/${workerDetails._id}`, {
        method: "POST",
      })
      console.log("Apply res : ", res);
      if (res.success) {
        toast.success("Booked Successfully");
      } else {
        toast.error(res.message);
      }
    } else {
      toast.error("Please login first");
    }
  }

  const handleMessage = () => {
    if (getUserRoleEmployer()) {
      router.push("/inbox");
    } else {
      toast.error("Please login first");
    }
  }


  return (
    <div className='maxWidth flex gap-2 pb-8'>
      <div className=''>
        <Button onClick={handleBooked} variant="yelloBtn" className='w-full text-gray-700 rounded-sm'>Book Now</Button>
      </div>
      <div className=''>
        <Button onClick={handleMessage} variant="yelloBtn" className='w-full text-gray-600 rounded-sm'>Message</Button>
      </div>
    </div>
  )
}

export default BookMessageButtons