// "use client"
import { jobDatas } from '@/data/jobDatas'
import React from 'react'
import JobPostCard from '../card/JobPostCard'

const PostedJobList = () => {
  return (
    <div>
      {/* --------------- Jobs --------------- */}
      <div className=''>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {jobDatas?.map((item) => (
            <JobPostCard key={item._id} item={item} url={`/employer/posted-jobs/posted-job-details/${item._id}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostedJobList