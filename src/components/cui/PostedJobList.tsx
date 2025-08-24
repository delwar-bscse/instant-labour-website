import { jobDatas } from '@/data/jobDatas'
import React from 'react'
import JobPostCard from '../card/JobPostCard'
import CustomButton from './CustomButton'

const PostedJobList = () => {
  return (
    <div>
      {/* --------------- Jobs --------------- */}
      <div className=''>
        <div className='flex items-center justify-end pb-2'>
          <div className='w-full max-w-50'>
            <CustomButton text="Post a job" url="/post-job" variant="button01" className='w-full' />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {jobDatas?.map((item) => (
            <JobPostCard key={item._id} item={item} url={`/posted-job/posted-job/${item._id}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostedJobList