// "use client"
import { workerDatas } from '@/data/workerDatas'
import React from 'react'
import WorkerCard from '../card/workerCard'
import Link from 'next/link'

const BookingList = () => {

  const handleStatus = (status: string) => {
    if (status === "Approved") {
      return "text-green-500"
    } else if (status === "Pending") {
      return "text-blue-500"
    } else {
      return "text-red-500"
    }
  }

  return (
    <>
      {/* --------------- Workers --------------- */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
        {workerDatas?.map((item,index) => (
          <div onClick={() => { document.getElementById("viewWorkerProfile"+index)?.click() }} key={item._id} className='space-y-2 bg-white customShadow p-4 cursor-pointer'>
            <WorkerCard item={item} />
            {item.status && <p className={` font-semibold ${handleStatus(item.status)}`}>{item.status}</p>}
            {/* <CustomButton text="View Profile" url={`/workers/${item._id}`} variant="button01" className='w-full' /> */}
            <Link id={"viewWorkerProfile"+index} href={`/employer/posted-jobs/booking/${item._id}?type=${item.status}`} className='hidden'>View Profile</Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default BookingList