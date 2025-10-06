"use client"


import JobDetailsBody from '@/components/cui/JobDetailsBody'
import React from 'react'
import JobDetailsTop from '@/components/cui/JobDetailsTop'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { getUserRoleWorker } from '@/utils/getUserRole'

const page = () => {

  

  const handleApply = () => {
    if(getUserRoleWorker()){
      toast.success("Applied Successfully");
    }else{
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
        <Button onClick={handleApply} variant="yelloBtn" className='w-full'>Apply Now</Button>
      </div>

    </div>
  )
}

export default page