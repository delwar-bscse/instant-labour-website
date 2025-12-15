/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { myFetch } from '@/utils/myFetch';
import React, { useEffect } from 'react'
import { toast } from 'sonner';

const SubscriptionInfo = () => {
  const [myPackage, setPackage] = React.useState<any>(null);
  const [subscription, setSubscription] = React.useState<any>(null);

  const fetchSubscribe = async () => {
    const res = await myFetch("/subscription/my-subscription")
    console.log("My Subscribe Response : ", res)
    if (res.success) {
      setPackage(res?.data?.package);
      setSubscription(res?.data?.subscription);
    } else {
      toast.error(res.message || "Something went wrong!");
    }
  };

  useEffect(() => {
    fetchSubscribe();
  }, [])

  const cancelSubscribe = async () => {
    const res = await myFetch("/subscription/cancel", {
      method: "POST",
      body: {
        immediate: false
      }
    })
    console.log("Cancel My Subscribe Response : ", res)

    if (res.success) {
      toast.success(res.message || "Subscription cancelled!");
    } else {
      toast.error(res.message || "Something went wrong!");
    }
  }




  return (
    <div className='h-full w-full max-w-150 mx-auto shadow rounded-md overflow-hidden flex flex-col md:flex-row gap-4 p-6'>
      <div>
        <div className='rounded-b-xl px-2 py-2 space-y-2'>
          <h3 className='text-lg font-bold text-center text-gray-700 capitalize'>{subscription?.packageType}</h3>
          <div className='flex items-end justify-center gap-1'>
            <p className='text-2xl font-bold text-gray-600'>£{subscription?.price}</p>
            <p className='text-center text-gray-500 text-[11px] pb-1'>(per month)</p>
          </div>
        </div>
        <ul className='flex-1 mt-6 space-y-3 list-disc pl-12 pr-2'>
          {myPackage?.features.map((feature: string, index: number) => (
            <li key={index} className='text-gray-600'>{feature}</li>
          ))}
        </ul>
        <div className='flex items-center justify-center px-4 py-10'>
          <button onClick={cancelSubscribe} className='w-full mt-auto bg-red-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 transition'>Cancel Subscription</button>
        </div>
      </div>
      <div className='hidden md:block h-full w-px bg-gray-200 ' />
      <div className='space-y-3'>
        <p className='text-xl font-semibold'>Your Rights</p>
        <p className='border-2 border-blue-500 rounded-sm text-blue-600 font-semibold px-3 py-2'>
          Available : {myPackage?.limits?.boostLimit} Bosts
        </p>
        <p className='text-lg font-semibold text-gray-700'>You Are Already Spending 1 Boost.</p>
      </div>
    </div>
  )
}

export default SubscriptionInfo