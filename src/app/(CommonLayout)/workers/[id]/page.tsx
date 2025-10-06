
"use client"
import React from 'react'
import WorkerDetailsTop from '@/components/cui/WorkerDetailsTop';
import WorkerDetailsBody from '@/components/cui/WorkerDetailsBody';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { getUserRoleEmployer } from '@/utils/getUserRole';

const SingleWorker = () => {

  const handleBooked = () => {
    if (getUserRoleEmployer()) {
      toast.success("Booked Successfully");
    } else {
      toast.error("Please login first");
    }
  }
  return (
    <div className='maxWidth pt-4 pb-20'>

      {/* ------------------- Worker Details Body ------------------- */}
      <WorkerDetailsTop />

      {/* ------------------- Worker Details Body ------------------- */}
      <WorkerDetailsBody />

      {/* --------------------- Book Now Button --------------------- */}
      <div className='max-w-[200px] mx-auto mt-12'>
        <Button onClick={handleBooked} variant="yelloBtn" className='w-full'>Book Now</Button>
      </div>

    </div>
  )
}

export default SingleWorker