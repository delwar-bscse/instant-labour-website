/* eslint-disable @typescript-eslint/no-explicit-any */
// import { jobDatas } from '@/data/jobDatas'
"use client"
import React, { useEffect } from 'react'
import JobPostCard from '../card/JobPostCard'
import { myFetch } from '@/utils/myFetch';

const ApplyJobList = () => {
  const [jobDatas, setJobDatas] = React.useState([]);

  useEffect(() => {
    const getJobs = async () => {
      const res = await myFetch(`/job`);
      const jobDatas = res?.data || [];
      // const meta = res?.pagination || {};
      setJobDatas(jobDatas);
      console.log("Job get res : ", jobDatas);
    };
    getJobs();
  }, []);

  return (
    <div>
      {/* --------------- Jobs --------------- */}
      <div className=''>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {jobDatas?.map((item: any) => (
            <JobPostCard key={item._id} item={item} url={`/worker/applied-jobs/${item._id}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ApplyJobList