"use client"


import JobDetailsBody from '@/components/cui/JobDetailsBody'
import React from 'react'
import JobDetailsTop from '@/components/cui/JobDetailsTop'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { getUserRoleWorker } from '@/utils/getUserRole'
import { CustomModal } from '@/components/modal/CustomModal'

const page = () => {



  const handleApply = () => {
    if (getUserRoleWorker()) {
      document.getElementById("cancel")?.click()
    } else {
      toast.error("Please login first");
    }
  }


  return (
    <div className='maxWidth pt-4 pb-20'>

      {/* --------------------- Job Header --------------------- */}
      <JobDetailsTop />

      {/* --------------------- Job body (description) --------------------- */}
      <JobDetailsBody />

      {/* --------------------- Apply Now Button --------------------- */}
      <div className='max-w-[200px] mx-auto mt-12'>
        <CustomModal title="" trigger={<Button variant="yelloBtn" className='w-full'>Apply Now</Button>} >
          <p className='text-center text-2xl text-gray-700 font-bold'>Are You Sure You Want To Apply</p>
          <div className='w-full max-w-[200px] mx-auto flex justify-center gap-4'>
            <div className='flex-1 max-w-[200px] mx-auto mt-12'>
              <button onClick={()=>document.getElementById("cancel")?.click()}  className='w-full border border-red-500 px-4 py-1.5 rounded-sm'>No</button>
            </div>
            <div className='flex-1 max-w-[200px] mx-auto mt-12'>
              <button onClick={handleApply} className='w-full bg-green-500 text-white px-4 py-1.5 rounded-sm'>Yes</button>
            </div>
          </div>
        </CustomModal>
      </div>

    </div>
  )
}

export default page