/* eslint-disable @typescript-eslint/no-explicit-any */

import SubscriptionCard from '@/components/cui/SubscriptionCard'
import OfferSection from '@/components/sections/OfferSection'
import { myFetch } from '@/utils/myFetch'
import React from 'react'

const Subscriptions = async() => {
  const res = await myFetch("/package", {
    method: "GET",
  })
  console.log("Get Subscriptions : ", res?.data);
  return (
    <div className='maxWidth my-12 lg:my-20'>
      <h1 className='text-3xl sm:text-4xl lg:text-5xl text-gray-700 font-semibold capitalize text-center'>subscription package</h1>
      <div className='pt-10'>
        <OfferSection />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10'>
        {res?.data?.length > 0 && res?.data?.map((data:any, index:number) => (
          <div key={index}>
            <SubscriptionCard data={data} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Subscriptions