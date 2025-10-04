import SubscriptionCard from '@/components/cui/SubscriptionCard'
import { subscriptionDatas } from '@/data/subscriptionDatas'
import React from 'react'

const Subscriptions = () => {
  return (
    <div className='maxWidth my-12 lg:my-20'>
      <h1 className='text-3xl sm:text-4xl lg:text-5xl text-gray-700 font-semibold capitalize text-center'>subscription package</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10'>
        {subscriptionDatas.map((data, index) => (
          <div key={index}>
            <SubscriptionCard data={data} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Subscriptions