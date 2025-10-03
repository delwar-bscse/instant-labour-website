import { workerDatas } from '@/data/workerDatas'
import React from 'react'
import WorkerCard from '../card/workerCard'

const BookingList = () => {
  return (
    <div>
      {/* --------------- Workers --------------- */}
      <div className=''>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {workerDatas?.map((item) => (
            <WorkerCard key={item._id} item={item} url={`/posted-job/booking/${item._id}`} status={item.status} />
          ))}
        </div>
      </div></div>
  )
}

export default BookingList