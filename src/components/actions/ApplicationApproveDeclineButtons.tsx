/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React from 'react'
import { toast } from 'sonner';
import { getUserRoleEmployer } from '@/utils/getUserRoleClient';

const ApplicationApproveDeclineButtons = ({ workerId, applicationId }: { workerId: any, applicationId: any }) => {

  const approveApplication = async () => {
    if (getUserRoleEmployer()) {
      console.log("Application Id : ", applicationId)
      console.log("Worker Id : ", workerId)
      // const res = await myFetch(`/booking/${workerDetails._id}`, {
      //   method: "POST",
      // })
      // console.log("Apply res : ", res);
      // if (res.success) {
      //   toast.success("Booked Successfully");
      // } else {
      //   toast.error(res.message);
      // }
    } else {
      toast.error("Please login first");
    }
  }

  const declineApplication = () => {
    if (getUserRoleEmployer()) {
      console.log("Application Id : ", applicationId)
      console.log("Worker Id : ", workerId)
    } else {
      toast.error("Please login first");
    }
  }


  return (
    <div className='maxWidth my-10 flex gap-4 items-center'>
      <button onClick={approveApplication} className='border-2 border-red-600 text-red-600 font-semibold py-2 px-8 rounded-sm hover:border-red-700 transition-colors duration-300'>Decline</button>
      <button onClick={declineApplication} className='border-2 border-brandClr2 bg-brandClr2 text-gray-800 font-semibold py-2 px-8 rounded-sm hover:bg-brandClr2/90 transition-colors duration-300'>Approve</button>
    </div>
  )
}

export default ApplicationApproveDeclineButtons