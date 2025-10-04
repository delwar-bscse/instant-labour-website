import CustomButton from '@/components/cui/CustomButton'
import JobDetailsBody from '@/components/cui/JobDetailsBody'
import React from 'react'
import JobDetailsTop from '@/components/cui/JobDetailsTop'

const page = () => {
  return (
    <div className='maxWidth pt-4 pb-20'>

      {/* --------------------- Job Header --------------------- */}
      <JobDetailsTop />

      {/* --------------------- Job body (description) --------------------- */}
      <JobDetailsBody />

      {/* --------------------- Apply Now Button --------------------- */}
      <div className='max-w-[200px] mx-auto mt-12'>
        <CustomButton text="Apply Now" variant="button01" className='w-full' />
      </div>

    </div>
  )
}

export default page