/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { formatUrl } from '@/utils/formatUrl'
// import { employerDatas } from '@/data/employerDatas'
import { myFetch } from '@/utils/myFetch'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { toast } from 'sonner'

const OfferJobList = () => {
  const [employerDatas, setEmployerDatas] = React.useState<any>([]);

  useEffect(() => {
    const getEmployers = async () => {
      const res = await myFetch(`/booking`);
      const employerDatas = res?.data || [];
      // const meta: any = res?.data?.pagination || {};
      console.log("Booked employer datas : ", employerDatas);
      setEmployerDatas(employerDatas);
    }
    getEmployers();
  }, []);

  const handleApprove = async (id: any) => {
    const res = await myFetch(`/booking/${id}`, {
      method: "PATCH",
      body: {
        status: "approved"
      }
    });
    console.log("Approve res : ", res);
    if (res.success) {
      toast.success(res.message || "Job offer approved successfully!");
    } else {
      toast.error(res.message || "Failed to approve job.");
    }
  }

  const handleDelete = async (id: any) => {
    const res = await myFetch(`/booking/${id}`, {
      method: "DELETE"
    });
    console.log("Delete res : ", res);
    if (res.success) {
      toast.success(res.message || "Job offer decline successfully!");
    } else {
      toast.error(res.message || "Failed to decline job.");
    }
  }


  return (
    <div className='w-full max-w-200 mx-auto'>
      {employerDatas.map((item: any) => (
        <div key={item?._id} className='flex items-center justify-between gap-4 mt-4 shadow-lg p-4 rounded-md bg-brandClr2/10'>
          <div className='flex gap-4'>
            <Image src={formatUrl(item?.employer?.profile)} width={200} height={200} alt="" className='w-25 h-25 rounded-md object-cover' />
            <div className='flex-1'>
              <p className='font-semibold text-gray-800'>{item?.employer?.name}</p>
              <p className='text-gray-500 text-sm'>{item?.employer?.address}</p>
              <p className='text-gray-500 text-sm'>{item?.employer?.date}</p>
            </div>
          </div>
          {item.status === "Pending" ?
            <div className='h-full flex items-end justify-end gap-4'>
              <Link href={`/inbox`} className='w-25 bg-yellow-500 text-white hover:bg-yellow-600 transition-colors duration-200 cursor-pointer text-sm font-semibold px-3 py-2 rounded-md text-center'>Message</Link>
            </div>
            :
            <div className='flex items-center flex-col gap-4'>
              <button onClick={() => handleApprove(item?._id)} className='w-25 bg-yellow-500 text-white hover:bg-yellow-600 transition-colors duration-200 cursor-pointer text-sm font-semibold px-3 py-2 rounded-md'>Approved</button>
              <button onClick={() => handleDelete(item?._id)} className='w-25 border border-red-500 text-red-500 text-sm font-semibold px-3 py-2 rounded-md cursor-pointer transition-colors hover:border-red-600 hover:text-red-600 hover:transition-colors duration-200'>Decline</button>
            </div>}
        </div>
      ))}
    </div>
  )
}

export default OfferJobList