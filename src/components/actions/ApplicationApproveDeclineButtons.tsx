"use client"
import React from 'react'
import { toast } from 'sonner';
// import { getUserRoleEmployer } from '@/utils/getUserRoleClient';
import { myFetch } from '@/utils/myFetch';
import { APPLICATION_STATUS } from '@/types/jobTypes';

const ApplicationApproveDeclineButtons = ({ jobId, workerId, applicationId }: { jobId: any, workerId: any, applicationId: any }) => {

  const approveApplication = async () => {
    //console.log("Application Id : ", applicationId)
    console.log("Worker Id : ", workerId)
    //console.log("Job Id : ", jobId)

    const res = await myFetch(`/application/${applicationId}?jobId=${jobId}`, {
      method: "PATCH",
      body: { status: APPLICATION_STATUS.APPROVED }
    })
    //console.log("Apply res : ", res);
    if (res.success) {
      toast.success("Approved Successfully");
    } else {
      toast.error(res.message);
    }
  }

  const declineApplication = async () => {
    //console.log("Application Id : ", applicationId)
    //console.log("Worker Id : ", workerId)
    //console.log("Job Id : ", jobId)

    const res = await myFetch(`/application/${applicationId}?jobId=${jobId}`, {
      method: "PATCH",
      body: { status: APPLICATION_STATUS.DECLINED }
    })
    console.log("Apply res : ", res);
    if (res.success) {
      toast.success("Declined Successfully");
    } else {
      toast.error(res.message);
    }
  }


  return (
    <div className='maxWidth my-10 flex gap-4 items-center'>
      <button onClick={declineApplication} className='border-2 border-red-600 text-red-600 font-semibold py-2 px-8 rounded-sm hover:border-red-700 transition-colors duration-300'>Decline</button>
      <button onClick={approveApplication} className='border-2 border-brandClr2 bg-brandClr2 text-gray-800 font-semibold py-2 px-8 rounded-sm hover:bg-brandClr2/90 transition-colors duration-300'>Approve</button>
    </div>
  )
}

export default ApplicationApproveDeclineButtons