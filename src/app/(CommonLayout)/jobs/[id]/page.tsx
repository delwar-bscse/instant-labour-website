import CustomButton from '@/components/cui/CustomButton'
import JobDetails from '@/components/cui/JobDetails'
import JobDetailsBody from '@/components/cui/JobDetailsBody'
import React from 'react'

const page = () => {
  return (
    <div className='maxWidth pt-4 pb-20'>

      {/* --------------------- Job Header --------------------- */}
      <JobDetails />

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