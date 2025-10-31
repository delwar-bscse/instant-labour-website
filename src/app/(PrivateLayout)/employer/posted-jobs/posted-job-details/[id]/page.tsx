import CustomButton from '@/components/cui/CustomButton'
import JobDetailsBody from '@/components/cui/JobDetailsBody'
import JobDetailsTop from '@/components/cui/JobDetailsTop'
import { jobDetails } from '@/data/jobDatas'
import Link from 'next/link'
import React from 'react'

const PostedJobDetails = () => {
  return (
    <div className='maxWidth pt-4 pb-20'>

      {/* --------------------- Job Header --------------------- */}
      <JobDetailsTop />

            {/* ------------ Action Buttons - Edit Post, Applied Workers, Approved Workers ------------ */}
      <div className='flex gap-2 py-4 md:py-6 items-center flex-wrap'>
        <div>
          <CustomButton url={`/employer/posted-jobs/edit-job/${jobDetails._id}`} text="Edit Post" variant="button01" className='w-full' />
        </div>
        <div>
          <Link href={`/employer/posted-jobs/worker-list?type=applied`} className='w-full border py-2 px-3 rounded-sm border-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300'>Applied Workers</Link>
        </div>
        <div>
          <Link href={`/employer/posted-jobs/worker-list?type=approved`} className='w-full border py-2 px-3 rounded-sm border-green-500 hover:bg-green-500 hover:text-white transition-colors duration-300'>Approved Workers</Link>
        </div>
        <div>
          <button className='w-full border py-2 px-6 cursor-pointer rounded-sm bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300'>Boost</button>
        </div>
      </div>

      {/* --------------------- Job body (description) --------------------- */}
      <JobDetailsBody />

    </div>
  )
}

export default PostedJobDetails