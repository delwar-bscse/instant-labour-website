/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
// import { workerDatas } from '@/data/workerDatas'
import React, { useEffect } from 'react'
import WorkerCard from '../card/workerCard'
import Link from 'next/link'
import { myFetch } from '@/utils/myFetch';

const BookingList = () => {
  const [workerDatas, setWorkerDatas] = React.useState<any>([]);

  useEffect(() => {
    const getWorkers = async () => {
      const res = await myFetch(`/user/workers`);
      const workerDatas = res?.data?.data || [];
      // const meta: any = res?.data?.pagination || {};
      console.log("worker get res : ", workerDatas);
      setWorkerDatas(workerDatas);
    }
    getWorkers();
  }, []);

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
      <div className=''>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {workerDatas?.map((item: any) => (
            <Link href={`/workers/${item._id}`} key={item._id} className='space-y-2 bg-white hover:bg-gray-50 customShadow p-4 cursor-pointer transition-colors duration-100'>
              <WorkerCard item={item} />
              {item.status && <p className={` font-semibold ${handleStatus(item.status)}`}>{item.status}</p>}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default BookingList