"use client"
// import { workerDatas } from '@/data/workerDatas'
import React, { useEffect } from 'react'
import WorkerCard from '../card/workerCard'
import Link from 'next/link'
import { myFetch } from '@/utils/myFetch';
import { BOOKING_STATUS } from '@/types/jobTypes';

const BookingList = () => {
  const [workerDatas, setWorkerDatas] = React.useState<any>([]);

  useEffect(() => {
    const getWorkers = async () => {
      const res = await myFetch(`/booking`);
      const workerDatas = res?.data || [];
      // const meta: any = res?.data?.pagination || {};
      //console.log("Booked worker datas : ", workerDatas);

      const refineRes = workerDatas?.map((item: any) => {
        return {
          _id: item?.worker?._id,
          profile: item?.worker?.profile,
          name: item?.worker?.name,
          verified: item?.worker?.isAccountVerified,
          createdAt: item?.createdAt,
          category: item?.worker?.category,
          location: item?.worker?.address,
          salary: item?.worker?.salary,
          salaryType: item?.worker?.salaryType,
          status: item?.status
        };
      }) || [];

      //console.log("Refine Booked worker datas : ", refineRes);

      setWorkerDatas(refineRes);
    }
    getWorkers();
  }, []);

  const handleStatus = (status: string) => {
    if (status === BOOKING_STATUS.APPROVED) {
      return "text-green-500"
    } else if (status === BOOKING_STATUS.PENDING) {
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
            <Link href={`/employer/posted-jobs/booking/${item?._id}`} key={item._id} className='space-y-2 bg-white hover:bg-gray-50 customShadow p-4 cursor-pointer transition-colors duration-100'>
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